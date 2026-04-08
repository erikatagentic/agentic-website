"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function SFTryFreeForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Client-side validation
    try {
      const parsed = new URL(url);
      if (!parsed.hostname) throw new Error();
    } catch {
      setError("Enter a valid URL (e.g. https://yourcompany.com)");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid work email");
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("/api/signal-feed/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, url }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Try again.");
      }

      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <SectionWrapper id="try-free" variant="gradient-accent" size="tight">
        <MotionWrapper variant="scaleIn">
          <div className="mx-auto max-w-xl text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-success" />
            <h3 className="mt-4 font-display text-2xl font-normal tracking-tight sm:text-3xl">
              Your sample is building.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              We're analyzing{" "}
              <span className="font-medium text-foreground">{url}</span>,
              detecting buying signals, and matching 50 companies to your
              profile. Takes about 20 minutes.
            </p>
            <p className="mt-4 text-sm text-foreground-muted">
              Check{" "}
              <span className="font-medium text-foreground">{email}</span> for
              your CSV.
            </p>
          </div>
        </MotionWrapper>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="try-free" variant="gradient-accent" size="tight">
      <MotionWrapper>
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h3 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
              Try it. 50 leads, on us.
            </h3>
            <p className="mt-3 text-base text-foreground-muted">
              Drop your URL. We'll analyze your business, detect buying signals
              in your market, and send 50 scored leads to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="sf-url"
                className="block text-sm font-medium text-foreground-muted"
              >
                Company website
              </label>
              <input
                id="sf-url"
                type="url"
                required
                placeholder="https://yourcompany.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="sf-name"
                  className="block text-sm font-medium text-foreground-muted"
                >
                  First name
                </label>
                <input
                  id="sf-name"
                  type="text"
                  required
                  placeholder="Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="sf-email"
                  className="block text-sm font-medium text-foreground-muted"
                >
                  Work email
                </label>
                <input
                  id="sf-email"
                  type="email"
                  required
                  placeholder="alex@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-error">{error}</p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing your site...
                </>
              ) : (
                <>
                  Build My Sample Feed
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-foreground-subtle">
              No credit card. No call required. Just leads.
            </p>
          </form>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
