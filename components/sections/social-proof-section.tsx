import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { PROOF_STATS, CASE_STUDIES } from "@/lib/constants";

export function SocialProofSection() {
  return (
    <SectionWrapper id="results" variant="surface">
      <SectionHeading
        id="results-heading"
        overline="Track Record"
        title="Results, not promises."
      />

      {/* Outcome stats row */}
      <MotionWrapper>
        <div className="mb-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-foreground-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </MotionWrapper>

      {/* Case study cards */}
      <MotionWrapper>
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.vertical}
              className="rounded-xl border border-border bg-background p-6 md:p-8"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-text">
                Case Study
              </p>
              <p className="mb-6 font-display text-xl font-normal tracking-tight sm:text-2xl">
                {study.vertical}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-foreground-subtle" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Signal</p>
                    <p className="text-sm text-foreground-muted">{study.signal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-error" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Before</p>
                    <p className="text-sm text-foreground-muted">{study.before}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">After</p>
                    <p className="text-sm text-foreground">{study.after}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Timeline</p>
                    <p className="text-sm text-foreground-muted">{study.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
