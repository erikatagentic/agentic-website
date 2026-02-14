import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { AnimatedIconBox } from "@/components/shared/animated-icon-box";
import { HoverCard } from "@/components/shared/hover-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { PAIN_POINTS } from "@/lib/constants";

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" variant="surface">
      <SectionHeading
        id="problem-heading"
        overline="The Problem"
        title="Your outbound is broken."
      />

      <StaggerGrid className="grid gap-8 md:grid-cols-3">
        {PAIN_POINTS.map((point) => (
          <StaggerItem key={point.title} className="h-full">
            <HoverCard className="h-full">
              <div className="card-hover-glow flex h-full flex-col rounded-xl border border-border bg-surface p-6 md:p-8">
                <AnimatedIconBox>
                  <IconBox icon={point.icon} variant="primary" />
                </AnimatedIconBox>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-foreground-muted">
                  {point.description}
                </p>
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </SectionWrapper>
  );
}
