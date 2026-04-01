import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export function ResultsSection() {
  return (
    <SectionWrapper id="results" variant="gradient-accent">
      <SectionHeading id="results-heading" overline="Results" title="The numbers speak." />

      {/* Background glow */}
      <div className="relative">
        <GradientBlob
          size="md"
          color="violet"
          className="-m-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
        />

        <MotionWrapper>
          <div className="relative flex flex-wrap justify-center gap-8 sm:gap-16">
            <AnimatedCounter target={4} suffix="x" label="Avg. Reply Rate Lift" />
            <AnimatedCounter target={12} label="Days to First Meetings" />
          </div>
        </MotionWrapper>
      </div>
    </SectionWrapper>
  );
}
