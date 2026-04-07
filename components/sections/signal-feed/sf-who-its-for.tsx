import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { AUDIENCES } from "@/lib/signal-feed-constants";

export function SFWhoItsFor() {
  return (
    <SectionWrapper id="who-its-for">
      <SectionHeading
        id="who-its-for-heading"
        overline="Built For"
        title="You sell a service. We find who needs it."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {AUDIENCES.map((audience, i) => (
          <MotionWrapper key={audience.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                <audience.icon className="h-6 w-6 text-primary-text" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{audience.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {audience.description}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
