import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { AnimatedIconBox } from "@/components/shared/animated-icon-box";
import { HoverCard } from "@/components/shared/hover-card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { PAIN_POINTS } from "@/lib/constants";

export function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <SectionHeading
        id="problem-heading"
        overline="The Problem"
        title="Your outbound is broken."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {PAIN_POINTS.map((point, index) => (
          <MotionWrapper key={point.title} delay={index * 0.1}>
            <HoverCard>
              <div className="card-hover-glow rounded-xl border border-border bg-surface p-6 md:p-8">
                <AnimatedIconBox>
                  <IconBox icon={point.icon} variant="primary" />
                </AnimatedIconBox>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  {point.description}
                </p>
              </div>
            </HoverCard>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
