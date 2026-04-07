import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SF_COMPARISON } from "@/lib/signal-feed-constants";
import type { ComparisonRow } from "@/lib/signal-feed-constants";
import { cn } from "@/lib/utils";

function CellIcon({
  cell,
}: {
  cell: ComparisonRow["zoominfo"];
}) {
  const Icon = cell.icon;
  const color =
    cell.value === "No" ? "text-error" :
    cell.value.startsWith("$") && !cell.value.includes("497") ? "text-error" :
    cell.value === "Partial" || cell.value === "Basic" || cell.value === "Filters" ? "text-foreground-subtle" :
    "text-foreground-subtle";
  return <Icon className={cn("mr-1.5 h-4 w-4 shrink-0", color)} />;
}

export function SFComparison() {
  return (
    <SectionWrapper id="sf-compare" variant="surface">
      <SectionHeading
        id="sf-compare-heading"
        overline="Why Not Just Use..."
        title="You could buy a database. Or you could buy intelligence."
      />

      {/* Desktop table */}
      <MotionWrapper>
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl border border-border">
            {/* Header */}
            <div className="grid grid-cols-5 border-b border-border bg-surface-raised">
              <div className="p-4" />
              <div className="p-4 text-center text-sm font-medium text-foreground-muted">
                ZoomInfo
              </div>
              <div className="p-4 text-center text-sm font-medium text-foreground-muted">
                Apollo
              </div>
              <div className="p-4 text-center text-sm font-medium text-foreground-muted">
                Generic Lists
              </div>
              <div className="p-4 text-center text-sm font-medium text-primary-text">
                Signal Feed
              </div>
            </div>

            {/* Rows */}
            {SF_COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-5",
                  i < SF_COMPARISON.length - 1 && "border-b border-border"
                )}
              >
                <div className="p-4 text-sm font-medium">{row.feature}</div>
                <div className="flex items-center justify-center p-4 text-center text-sm text-foreground-muted">
                  <CellIcon cell={row.zoominfo} />
                  {row.zoominfo.value}
                </div>
                <div className="flex items-center justify-center p-4 text-center text-sm text-foreground-muted">
                  <CellIcon cell={row.apollo} />
                  {row.apollo.value}
                </div>
                <div className="flex items-center justify-center p-4 text-center text-sm text-foreground-muted">
                  <CellIcon cell={row.generic} />
                  {row.generic.value}
                </div>
                <div className="flex items-center justify-center bg-primary-muted/50 p-4 text-center text-sm font-medium text-primary-text">
                  <row.signalFeed.icon className="mr-1.5 h-4 w-4 shrink-0 text-success" />
                  {row.signalFeed.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionWrapper>

      {/* Mobile stacked cards */}
      <MotionWrapper>
        <div className="space-y-4 md:hidden">
          {SF_COMPARISON.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="mb-3 text-sm font-semibold">{row.feature}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-subtle">ZoomInfo</span>
                  <span className="text-foreground-muted">
                    {row.zoominfo.value}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-subtle">Apollo</span>
                  <span className="text-foreground-muted">
                    {row.apollo.value}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-subtle">Generic</span>
                  <span className="text-foreground-muted">
                    {row.generic.value}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-primary-text">
                    Signal Feed
                  </span>
                  <span className="font-medium text-primary-text">
                    {row.signalFeed.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
