"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CTAButton } from "@/components/shared/cta-button";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { easeOutQuadMutable } from "@/lib/motion";
import { SF_HERO, SF_CONFIG } from "@/lib/signal-feed-constants";
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

export function SFHeroSection() {
  const reducedMotion = useReducedMotion();

  const Container = reducedMotion ? "div" : motion.div;
  const Item = reducedMotion ? "div" : motion.div;

  return (
    <section
      id="sf-hero"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <GradientBlob
          size="md"
          color="amber"
          parallax
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Agentic
        </Link>

        <Container
          {...(!reducedMotion && {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
          })}
          className="mx-auto max-w-4xl text-center"
        >
          <Item {...(!reducedMotion && { variants: itemVariants })}>
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-text">
              {SF_HERO.overline}
            </p>
          </Item>

          <Item {...(!reducedMotion && { variants: itemVariants })}>
            <h1 className="font-display text-5xl font-normal leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[96px]">
              {SF_HERO.headline}
            </h1>
          </Item>

          <Item {...(!reducedMotion && { variants: itemVariants })}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
              {SF_HERO.subheadline}
            </p>
          </Item>

          <Item {...(!reducedMotion && { variants: itemVariants })}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                variant="primary"
                size="lg"
                href={SF_CONFIG.calLink}
                className="w-full sm:w-auto"
              >
                {SF_HERO.primaryCta}
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href={SF_HERO.secondaryCtaHref}
                external={false}
                className="w-full sm:w-auto"
              >
                {SF_HERO.secondaryCta}
              </CTAButton>
            </div>
          </Item>
        </Container>
      </div>
    </section>
  );
}
