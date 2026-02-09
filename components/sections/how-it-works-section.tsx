import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" variant="surface">
      <SectionHeading
        id="how-it-works-heading"
        overline="Process"
        title="From kickoff to production in days."
        subtitle="A proven 4-step process that gets your AI workflows live fast."
      />

      <div className="mx-auto max-w-2xl">
        {STEPS.map((step, index) => (
          <MotionWrapper key={step.number} delay={index * 0.1}>
            <div className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < STEPS.length - 1 && (
                <div
                  className="absolute left-5 top-12 h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-xl font-semibold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
