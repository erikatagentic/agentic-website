const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;

interface SupabaseQueryOptions {
  table: string;
  method?: "GET" | "POST" | "PATCH";
  body?: Record<string, unknown>;
  query?: string;
  select?: string;
  prefer?: string;
}

export async function supabaseQuery<T = unknown>({
  table,
  method = "GET",
  body,
  query,
  select,
  prefer,
}: SupabaseQueryOptions): Promise<{ data: T; count?: number }> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  if (query) url.search = query;
  if (select) url.searchParams.set("select", select);

  const headers: Record<string, string> = {
    apikey: SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
  if (prefer) headers["Prefer"] = prefer;

  const res = await fetch(url.toString(), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase ${method} ${table}: ${res.status} ${text}`);
  }

  const data = await res.json();
  const contentRange = res.headers.get("content-range");
  const count = contentRange ? parseInt(contentRange.split("/")[1]) : undefined;

  return { data, count };
}
