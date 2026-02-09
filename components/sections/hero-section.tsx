import { CTAButton } from "@/components/shared/cta-button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { HERO, SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(255_92%_76%/0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <MotionWrapper className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-text">
            {SITE_CONFIG.tagline}
          </p>

          <h1 className="font-display text-5xl font-normal leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            {HERO.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
            {HERO.subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton variant="primary" size="lg" href={SITE_CONFIG.calLink}>
              {HERO.primaryCta}
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              href={HERO.secondaryCtaHref}
              external={false}
            >
              {HERO.secondaryCta}
            </CTAButton>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
