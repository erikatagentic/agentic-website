import { supabaseQuery } from "@/lib/supabase";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, url } = body;

    if (!name || !email || !url) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
      if (!parsedUrl.hostname) throw new Error();
    } catch {
      return Response.json({ error: "Invalid URL." }, { status: 400 });
    }

    if (!email.includes("@") || !email.split("@")[1]?.includes(".")) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const oneDayAgo = new Date(Date.now() - 86400000).toISOString();

    // Rate limit: 1 per email per 24h
    const { data: emailChecks } = await supabaseQuery<{ id: string }[]>({
      table: "agentic_daas_sample_requests",
      query: `email=eq.${encodeURIComponent(email)}&created_at=gt.${oneDayAgo}&select=id`,
    });

    if (Array.isArray(emailChecks) && emailChecks.length >= 1) {
      return Response.json(
        { error: "You've already requested a sample today. Check your email." },
        { status: 429 },
      );
    }

    // Rate limit: 3 per IP per 24h
    const { data: ipChecks } = await supabaseQuery<{ id: string }[]>({
      table: "agentic_daas_sample_requests",
      query: `ip=eq.${encodeURIComponent(ip)}&created_at=gt.${oneDayAgo}&select=id`,
    });

    if (Array.isArray(ipChecks) && ipChecks.length >= 3) {
      return Response.json(
        { error: "Too many requests. Try again tomorrow." },
        { status: 429 },
      );
    }

    // Insert sample request
    await supabaseQuery({
      table: "agentic_daas_sample_requests",
      method: "POST",
      body: { name, email, url: parsedUrl.href, ip, status: "pending" },
      prefer: "return=minimal",
    });

    // Fire-and-forget to n8n
    const webhookUrl = process.env.N8N_SAMPLE_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, url: parsedUrl.href }),
      }).catch(() => {});
    }

    return Response.json({ ok: true }, { status: 202 });
  } catch (err) {
    console.error("Sample request error:", err);
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
