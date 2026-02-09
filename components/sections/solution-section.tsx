import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SOLUTION } from "@/lib/constants";

export function SolutionSection() {
  return (
    <SectionWrapper id="solution" variant="surface">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h2 id="solution-heading" className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
          {SOLUTION.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground-muted md:text-xl">
          {SOLUTION.subtitle}
        </p>
        <Badge
          variant="secondary"
          className="mt-8 border-primary-muted bg-primary-muted px-4 py-2 text-sm text-primary-text"
        >
          {SOLUTION.differentiator}
        </Badge>
      </MotionWrapper>
    </SectionWrapper>
  );
}
