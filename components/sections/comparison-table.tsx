import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { COMPARISON_TABLE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ComparisonTable() {
  return (
    <SectionWrapper id="compare" variant="surface">
      <SectionHeading
        id="compare-heading"
        overline="Compare"
        title="Why a project beats a hire or a retainer."
      />

      {/* Desktop table */}
      <MotionWrapper>
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl border border-border">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-border bg-surface-raised">
              <div className="p-4" />
              <div className="p-4 text-center text-sm font-medium text-foreground-muted">
                Full-time Hire
              </div>
              <div className="p-4 text-center text-sm font-medium text-foreground-muted">
                Agency Retainer
              </div>
              <div className="p-4 text-center text-sm font-medium text-primary-text">
                Agentic Project
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_TABLE.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-4",
                  i < COMPARISON_TABLE.length - 1 && "border-b border-border"
                )}
              >
                <div className="p-4 text-sm font-medium">{row.label}</div>
                <div className="p-4 text-center text-sm text-foreground-muted">
                  {row.hire}
                </div>
                <div className="p-4 text-center text-sm text-foreground-muted">
                  {row.agency}
                </div>
                <div className="p-4 text-center text-sm font-medium text-primary-text bg-primary-muted/50">
                  {row.agentic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionWrapper>

      {/* Mobile stacked cards */}
      <MotionWrapper>
        <div className="space-y-4 md:hidden">
          {COMPARISON_TABLE.map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="mb-3 text-sm font-semibold">{row.label}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-subtle">Hire</span>
                  <span className="text-foreground-muted">{row.hire}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-subtle">Agency</span>
                  <span className="text-foreground-muted">{row.agency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-text font-medium">Agentic</span>
                  <span className="text-primary-text font-medium">{row.agentic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
