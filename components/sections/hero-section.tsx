"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/shared/cta-button";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { easeOutQuad } from "@/lib/motion";
import { HERO, SITE_CONFIG } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [...easeOutQuad] as [number, number, number, number] },
  },
};

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  const Container = reducedMotion ? "div" : motion.div;
  const Item = reducedMotion ? "div" : motion.div;

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
        <GradientBlob
          size="md"
          color="violet"
          parallax
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <Container
          {...(!reducedMotion && {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
          })}
          className="mx-auto max-w-4xl text-center"
        >
          <Item
            {...(!reducedMotion && { variants: itemVariants })}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-text">
              {SITE_CONFIG.tagline}
            </p>
          </Item>

          <Item
            {...(!reducedMotion && { variants: itemVariants })}
          >
            <h1 className="font-display text-5xl font-normal leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              {HERO.headline}
            </h1>
          </Item>

          <Item
            {...(!reducedMotion && { variants: itemVariants })}
          >
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
              {HERO.subheadline}
            </p>
          </Item>

          <Item
            {...(!reducedMotion && { variants: itemVariants })}
          >
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
          </Item>
        </Container>
      </div>
    </section>
  );
}
