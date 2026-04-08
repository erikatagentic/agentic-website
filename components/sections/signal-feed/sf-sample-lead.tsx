"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SAMPLE_LEAD } from "@/lib/signal-feed-constants";
import {
  MapPin,
  Users,
  Globe,
  Layers,
  Briefcase,
  Lock,
  Smartphone,
  Timer,
  Shield,
} from "lucide-react";

function ScoreBadge({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-5xl font-bold tracking-tight text-primary-text md:text-6xl">
        {score}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-widest text-foreground-muted">
        / 100 signal score
      </span>
    </div>
  );
}

export function SFSampleLead() {
  const { signals } = SAMPLE_LEAD;

  return (
    <SectionWrapper id="sample-lead" variant="surface-raised" size="breathing">
      <SectionHeading
        id="sample-lead-heading"
        overline="What You Get"
        title="This is what a Signal Feed lead looks like."
      />

      <MotionWrapper>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Header */}
          <div className="border-b border-border p-6 md:p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {SAMPLE_LEAD.company}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {SAMPLE_LEAD.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {SAMPLE_LEAD.employees} employees
                  </span>
                </div>
              </div>
              <ScoreBadge score={SAMPLE_LEAD.score} />
            </div>

            {/* Service match tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary-text">
                {SAMPLE_LEAD.primaryMatch}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
                {SAMPLE_LEAD.secondaryMatch}
              </span>
            </div>
          </div>

          {/* Signal breakdown */}
          <div className="divide-y divide-border">
            {/* Website */}
            <div className="p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-error" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted">
                  Website Performance
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="font-mono text-2xl font-bold text-error">
                    {signals.website.pageSpeed}
                  </p>
                  <p className="text-xs text-foreground-subtle">PageSpeed</p>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-error" />
                  <div>
                    <p className="text-sm font-medium text-error">No HTTPS</p>
                    <p className="text-xs text-foreground-subtle">Security</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-warning" />
                  <div>
                    <p className="text-sm font-medium text-warning">
                      {signals.website.loadTime}
                    </p>
                    <p className="text-xs text-foreground-subtle">Load time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-error" />
                  <div>
                    <p className="text-sm font-medium text-error">Fails</p>
                    <p className="text-xs text-foreground-subtle">Mobile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-warning" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted">
                  Tech Stack
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {Object.entries(signals.techStack).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-lg bg-surface-raised px-3 py-2"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">
                      {key}
                    </span>
                    <span className="text-sm text-foreground-muted">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring */}
            <div className="p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-success" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted">
                  Hiring Signal
                </h4>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface-raised px-4 py-3">
                <div>
                  <p className="text-sm font-medium">
                    {signals.hiring.role}
                  </p>
                  <p className="text-xs text-foreground-subtle">
                    Posted {signals.hiring.posted} via {signals.hiring.source}
                  </p>
                </div>
                <Shield className="h-5 w-5 text-success" />
              </div>
              {SAMPLE_LEAD.hiringContext && (
                <p className="mt-3 text-sm italic text-foreground-muted">
                  {SAMPLE_LEAD.hiringContext}
                </p>
              )}
            </div>

            {/* Contact teaser */}
            <div className="bg-primary-muted/30 p-6 md:p-8">
              <p className="text-center text-sm text-foreground-muted">
                <span className="font-medium text-primary-text">
                  Contact info included
                </span>{" "}
                -- name, email, phone, and LinkedIn for the decision-maker.
                Every lead in your feed.
              </p>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
