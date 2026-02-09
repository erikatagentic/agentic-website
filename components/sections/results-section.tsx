import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <SectionHeading id="results-heading" overline="Results" title="The numbers speak." />

      {/* Background glow */}
      <div className="relative">
        <GradientBlob
          size="md"
          color="violet"
          className="-m-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
        />

        <MotionWrapper>
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            <AnimatedCounter target={150} suffix="+" label="Workflows Automated" />
            <AnimatedCounter target={10} suffix="x" label="Average Efficiency Gain" />
            <AnimatedCounter target={98} suffix="%" label="Client Retention" />
            <AnimatedCounter target={3} label="Days to Deploy" />
          </div>
        </MotionWrapper>
      </div>
    </SectionWrapper>
  );
}
