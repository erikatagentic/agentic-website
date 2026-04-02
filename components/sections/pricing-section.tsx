import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { HoverCard } from "@/components/shared/hover-card";
import { CTAButton } from "@/components/shared/cta-button";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";
import {
  PRICING,
  PRICING_TIER_1,
  PRICING_TIER_1_LABEL,
  PRICING_TIER_2,
  PRICING_TIER_2_LABEL,
  ONGOING_PLANS,
  SITE_CONFIG,
} from "@/lib/constants";
import type { PricingCard as PricingCardType } from "@/lib/constants";

function PricingCard({ card }: { card: PricingCardType }) {
  return (
    <HoverCard className="h-full">
      <div className={cn(
        "card-hover-glow flex h-full flex-col rounded-xl border bg-background p-6 md:p-8",
        card.featured
          ? "border-primary shadow-[0_0_30px_hsl(255_92%_76%/0.15)]"
          : "border-border"
      )}>
        {card.featured && (
          <Badge className="mb-3 w-fit bg-primary-cta px-3 py-1 text-xs text-white">
            Most Popular
          </Badge>
        )}
        <h3 className="text-lg font-semibold leading-snug">{card.title}</h3>
        <p className="mt-3 font-display text-4xl font-normal tracking-tight md:text-5xl">
          {card.price}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">
          {card.description}
        </p>
        <Badge
          variant="secondary"
          className="mt-4 w-fit border-primary-muted bg-primary-muted px-3 py-1 text-xs text-primary-text"
        >
          {card.delivery}
        </Badge>
        <div className="mt-6">
          <CTAButton variant="secondary" href={SITE_CONFIG.calLink} className="w-full">
            Book a Call
          </CTAButton>
        </div>
      </div>
    </HoverCard>
  );
}

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" variant="surface-raised">
      <SectionHeading
        id="pricing-heading"
        overline="Pricing"
        title={PRICING.headline}
        subtitle={PRICING.subheadline}
      />

      {/* Tier 1: Data Layer */}
      <MotionWrapper>
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-text">
          {PRICING_TIER_1_LABEL}
        </p>
      </MotionWrapper>
      <StaggerGrid className="mb-10 grid gap-6 md:grid-cols-3">
        {PRICING_TIER_1.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <PricingCard card={card} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {/* Tier 2: Campaign Infrastructure */}
      <MotionWrapper>
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-text">
          {PRICING_TIER_2_LABEL}
        </p>
      </MotionWrapper>
      <StaggerGrid className="mb-10 grid gap-6 md:grid-cols-3">
        {PRICING_TIER_2.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <PricingCard card={card} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {/* Ongoing Plans */}
      <MotionWrapper>
        <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="mb-6 text-sm font-medium text-foreground-muted">
            Need ongoing support? Month-to-month, cancel anytime.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {ONGOING_PLANS.map((plan) => (
              <div key={plan.title}>
                <p className="font-semibold">{plan.title}</p>
                <p className="mt-1 font-display text-2xl font-normal tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-foreground-muted">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
