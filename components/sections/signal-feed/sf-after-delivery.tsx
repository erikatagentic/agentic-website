"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SF_AFTER_DELIVERY } from "@/lib/signal-feed-constants";

export function SFAfterDelivery() {
  return (
    <SectionWrapper id="after-delivery" variant="surface">
      <SectionHeading
        id="after-delivery-heading"
        overline={SF_AFTER_DELIVERY.overline}
        title={SF_AFTER_DELIVERY.headline}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {SF_AFTER_DELIVERY.steps.map((item, i) => (
          <MotionWrapper key={item.step} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-surface-raised p-6 md:p-8">
              <span className="font-mono text-sm font-medium text-primary-text">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {item.body}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
