"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineConnector } from "@/components/shared/timeline-connector";
import { easeOutQuadMutable } from "@/lib/motion";
import { STEPS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const stepVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOutQuadMutable },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutQuadMutable },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function HowItWorksSection() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="how-it-works" variant="surface">
      <SectionHeading
        id="how-it-works-heading"
        overline="Process"
        title="From kickoff to pipeline in days."
        subtitle="A proven 4-step process that gets your signal campaigns live fast."
      />

      <div className="mx-auto max-w-2xl">
        {reducedMotion ? (
          <div>
            {STEPS.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {index < STEPS.length - 1 && (
                  <div
                    className="absolute left-5 top-12 h-full w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Scroll-linked timeline line */}
            <TimelineConnector className="absolute left-5 top-12 bottom-0 w-px" />

            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Step number with scale entrance */}
                <motion.div
                  variants={numberVariants}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
