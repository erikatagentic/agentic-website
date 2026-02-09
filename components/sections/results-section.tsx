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
            <AnimatedCounter target={200} suffix="+" label="Campaigns Deployed" />
            <AnimatedCounter target={35} suffix="+" label="GTM Teams Served" />
            <AnimatedCounter target={4} suffix="x" label="Avg. Reply Rate Lift" />
            <AnimatedCounter target={12} label="Days to First Meetings" />
          </div>
        </MotionWrapper>
      </div>
    </SectionWrapper>
  );
}
