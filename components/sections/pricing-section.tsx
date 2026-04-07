import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTAButton } from "@/components/shared/cta-button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";
import {
  PRICING,
  PRICING_TIER_1,
  PRICING_TIER_1_LABEL,
  PRICING_TIER_2,
  PRICING_TIER_2_LABEL,
  ONGOING_PLANS,
  ONGOING_LABEL,
  SITE_CONFIG,
} from "@/lib/constants";
import type { PricingCard, OngoingPlan } from "@/lib/constants";

function MenuItem({ item }: { item: PricingCard }) {
  return (
    <div
      className={cn(
        "py-5",
        item.featured && "border-l-4 border-primary pl-5 bg-primary-muted/30 rounded-r-lg -ml-5 md:-ml-6 pl-5 md:pl-6 py-5"
      )}
    >
      {item.featured && (
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-text">
          Chef's Recommendation
        </p>
      )}
      <div className="flex items-baseline">
        <h3 className="shrink-0 text-base font-semibold leading-snug sm:text-lg">
          {item.title}
        </h3>
        <span className="menu-leader" aria-hidden="true" />
        <span className="shrink-0 font-display text-2xl font-normal tracking-tight md:text-3xl">
          {item.price}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {item.description} {item.delivery.replace("Delivered in ", "")}.
      </p>
    </div>
  );
}

function OngoingItem({ item }: { item: OngoingPlan }) {
  return (
    <div className="py-3">
      <div className="flex items-baseline">
        <h3 className="shrink-0 text-sm font-medium sm:text-base">
          {item.title}
        </h3>
        <span className="menu-leader" aria-hidden="true" />
        <span className="shrink-0 font-display text-xl font-normal tracking-tight md:text-2xl">
          {item.price}
        </span>
      </div>
      <p className="mt-1 text-xs text-foreground-muted sm:text-sm">
        {item.description}
      </p>
    </div>
  );
}

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" variant="surface-raised">
      <SectionHeading
        id="pricing-heading"
        overline={PRICING.overline}
        title={PRICING.headline}
        subtitle={PRICING.subheadline}
      />

      <MotionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 sm:p-8 md:p-12">
          {/* Starters */}
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-text">
            {PRICING_TIER_1_LABEL}
          </p>

          <div className="divide-y divide-border/50">
            {PRICING_TIER_1.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <CTAButton variant="secondary" href={SITE_CONFIG.calLink}>
              Book a Call
            </CTAButton>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-border" />

          {/* Mains */}
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-text">
            {PRICING_TIER_2_LABEL}
          </p>

          <div className="divide-y divide-border/50">
            {PRICING_TIER_2.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <CTAButton variant="secondary" href={SITE_CONFIG.calLink}>
              Book a Call
            </CTAButton>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-border" />

          {/* The Regular's Table */}
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary-text">
            {ONGOING_LABEL}
          </p>
          <p className="mb-4 text-sm text-foreground-muted">
            Month-to-month. Cancel anytime.
          </p>

          <div className="divide-y divide-border/50">
            {ONGOING_PLANS.map((plan) => (
              <OngoingItem key={plan.title} item={plan} />
            ))}
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
