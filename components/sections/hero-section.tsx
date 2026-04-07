"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/shared/cta-button";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { SignalFlow } from "@/components/shared/signal-flow";
import { AnimatedUnderline } from "@/components/shared/animated-underline";
import { ReceiptCard } from "@/components/shared/receipt-card";
import { VantaNetBg } from "@/components/shared/vanta-net-bg";
import { easeOutQuadMutable } from "@/lib/motion";
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
    transition: { duration: 0.5, ease: easeOutQuadMutable },
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
      {/* Vanta.js NET background */}
      <VantaNetBg className="absolute inset-0 opacity-30" />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <GradientBlob
          size="md"
          color="amber"
          parallax
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left column: copy + CTAs */}
          <Container
            {...(!reducedMotion && {
              variants: containerVariants,
              initial: "hidden",
              animate: "visible",
            })}
            className="max-w-2xl"
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
              <h1 className="font-display text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {HERO.headlineParts.map((part, i) =>
                  part.italic ? (
                    <span key={i} className="relative inline-block text-primary-text">
                      {part.text}
                      <AnimatedUnderline
                        className="absolute -bottom-2 left-0 w-full md:-bottom-3"
                        delay={1}
                      />
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </h1>
            </Item>

            <Item
              {...(!reducedMotion && { variants: itemVariants })}
            >
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted md:text-xl">
                {HERO.subheadline}
              </p>
            </Item>

            <Item
              {...(!reducedMotion && { variants: itemVariants })}
            >
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CTAButton variant="primary" size="lg" href={HERO.primaryCtaHref} external={false} className="w-full sm:w-auto">
                  {HERO.primaryCta}
                </CTAButton>
                <CTAButton
                  variant="secondary"
                  size="lg"
                  href={SITE_CONFIG.calLink}
                  className="w-full sm:w-auto"
                >
                  {HERO.secondaryCta}
                </CTAButton>
              </div>
            </Item>
          </Container>

          {/* Right column: floating receipt card */}
          <div className="hidden lg:block">
            <ReceiptCard />
          </div>
        </div>

        <SignalFlow />
      </div>
    </section>
  );
}
