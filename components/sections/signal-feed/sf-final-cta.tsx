import { CTAButton } from "@/components/shared/cta-button";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SF_FINAL_CTA, SF_CONFIG } from "@/lib/signal-feed-constants";

export function SFFinalCta() {
  return (
    <section
      id="sf-cta"
      aria-labelledby="sf-cta-heading"
      className="relative overflow-hidden py-24 md:py-40"
    >
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-surface to-background"
        aria-hidden="true"
      />
      <GradientBlob
        size="lg"
        color="amber"
        parallax
        parallaxSpeed={0.2}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <h2
            id="sf-cta-heading"
            className="font-display text-4xl font-normal leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {SF_FINAL_CTA.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted md:text-xl">
            {SF_FINAL_CTA.subheadline}
          </p>
          <div className="mt-8">
            <CTAButton variant="primary" size="lg" href={SF_CONFIG.calLink}>
              {SF_FINAL_CTA.cta}
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-foreground-subtle">
            {SF_FINAL_CTA.note}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
