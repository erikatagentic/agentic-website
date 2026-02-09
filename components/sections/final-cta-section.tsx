import { FINAL_CTA, SITE_CONFIG } from "@/lib/constants";
import { CTAButton } from "@/components/shared/cta-button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-surface to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_58%/0.1),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
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
