import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { PROOF_STATS, CASE_STUDY } from "@/lib/constants";

export function SocialProofSection() {
  return (
    <SectionWrapper id="proof" variant="surface">
      <SectionHeading
        id="proof-heading"
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

      {/* Anonymized case study card */}
      <MotionWrapper>
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-background p-6 md:p-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-text">
            Case Study
          </p>
          <p className="mb-6 font-display text-xl font-normal tracking-tight sm:text-2xl">
            {CASE_STUDY.vertical}
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-foreground-subtle" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Signal</p>
                <p className="text-sm text-foreground-muted">{CASE_STUDY.signal}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-error" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Before</p>
                <p className="text-sm text-foreground-muted">{CASE_STUDY.before}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">After</p>
                <p className="text-sm text-foreground">{CASE_STUDY.after}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Timeline</p>
                <p className="text-sm text-foreground-muted">{CASE_STUDY.timeline}</p>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
