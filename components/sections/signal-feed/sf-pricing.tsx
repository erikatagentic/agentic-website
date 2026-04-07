import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTAButton } from "@/components/shared/cta-button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { PRICING_TIERS, SF_CONFIG } from "@/lib/signal-feed-constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SFPricing() {
  return (
    <SectionWrapper id="signal-feed-pricing" variant="surface-raised" size="breathing">
      <SectionHeading
        id="signal-feed-pricing-heading"
        overline="Pricing"
        title="Pick your volume. Cancel anytime."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {PRICING_TIERS.map((tier, i) => (
          <MotionWrapper key={tier.name} delay={i * 0.1}>
            <div
              className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-6 md:p-8",
                tier.popular
                  ? "border-primary/50 shadow-glow-sm"
                  : "border-border"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {tier.leads}
                </p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-normal tracking-tight md:text-5xl">
                  {tier.price}
                </span>
                <span className="text-foreground-muted">{tier.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <CTAButton
                variant={tier.popular ? "primary" : "secondary"}
                href={SF_CONFIG.calLink}
                className="w-full"
              >
                Get Started
              </CTAButton>
            </div>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper delay={0.3}>
        <p className="mt-8 text-center text-sm text-foreground-subtle">
          Month-to-month. No annual contracts. No setup fees.
        </p>
      </MotionWrapper>
    </SectionWrapper>
  );
}
