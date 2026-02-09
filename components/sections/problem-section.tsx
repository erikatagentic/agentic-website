import { PAIN_POINTS } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <SectionHeading
        overline="The Problem"
        title="Your team is drowning in manual work."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {PAIN_POINTS.map((point, index) => (
          <MotionWrapper key={point.title} delay={index * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
              <IconBox icon={point.icon} variant="primary" />
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {point.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                {point.description}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
