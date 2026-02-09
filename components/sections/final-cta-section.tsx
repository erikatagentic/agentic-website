import { CTAButton } from "@/components/shared/cta-button";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { FINAL_CTA, SITE_CONFIG } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-surface to-background"
        aria-hidden="true"
      />
      <GradientBlob
        size="lg"
        color="violet"
        parallax
        parallaxSpeed={0.2}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted md:text-xl">
            {FINAL_CTA.subheadline}
          </p>
          <div className="mt-8">
            <CTAButton variant="primary" size="lg" href={SITE_CONFIG.calLink}>
              {FINAL_CTA.cta}
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-foreground-subtle">
            {FINAL_CTA.note}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
