import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <SectionHeading id="results-heading" overline="Results" title="The numbers speak." />

      {/* Background glow */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 -m-8 rounded-2xl bg-[radial-gradient(ellipse_at_center,hsl(255_92%_76%/0.08),transparent_70%)]"
          aria-hidden="true"
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
