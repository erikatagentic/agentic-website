"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easeOutQuadMutable } from "@/lib/motion";

const steps = [
  { number: "01", label: "Signal Detected" },
  { number: "02", label: "Enriched in Clay" },
  { number: "03", label: "Personalized Outreach" },
  { number: "04", label: "Meeting Booked" },
];

export function SignalFlow() {
  const reducedMotion = useReducedMotion();

  const Container = reducedMotion ? "div" : motion.div;

  return (
    <Container
      {...(!reducedMotion && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.6,
          delay: 0.8,
          ease: easeOutQuadMutable,
        },
      })}
      className="mx-auto mt-16 max-w-2xl"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-[10px] font-bold text-primary-text opacity-60 sm:text-xs">
                {step.number}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-foreground-subtle sm:text-xs">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden text-foreground-subtle/30 sm:inline">
                ···
              </span>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
