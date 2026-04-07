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
          color="amber"
          className="-m-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
        />

        <MotionWrapper>
          <div className="relative grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <AnimatedCounter target={10000} suffix="+" label="Campaigns of data powering every build" />
            <AnimatedCounter target={4} suffix="x" label="Average reply rate lift" />
            <div>
              <p className="font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl">
                3-10
              </p>
              <p className="mt-2 text-sm text-foreground-muted">
                Days from kickoff to live system
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </SectionWrapper>
  );
}
