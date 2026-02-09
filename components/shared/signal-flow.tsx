"use client";

import { motion } from "framer-motion";
import { Radio, Database, Mail, CalendarCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easeOutQuadMutable } from "@/lib/motion";

const steps = [
  { icon: Radio, label: "Signal Detected" },
  { icon: Database, label: "Enriched in Clay" },
  { icon: Mail, label: "Personalized Outreach" },
  { icon: CalendarCheck, label: "Meeting Booked" },
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
      className="mx-auto mt-16 max-w-3xl"
      aria-hidden="true"
    >
      <div className="relative rounded-xl border border-border bg-surface/60 px-4 py-6 backdrop-blur-sm sm:px-8 sm:py-8">
        {/* Flow steps */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const StepWrapper = reducedMotion ? "div" : motion.div;
            return (
              <StepWrapper
                key={step.label}
                {...(!reducedMotion && {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: {
                    duration: 0.4,
                    delay: 1.0 + i * 0.15,
                    ease: easeOutQuadMutable,
                  },
                })}
                className="relative flex flex-col items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <span className="text-center text-xs font-medium text-foreground-muted sm:text-sm">
                  {step.label}
                </span>
                {/* Connector arrow (hidden on last item and small screens) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-4 hidden text-foreground-subtle sm:block sm:top-5">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      className="text-border-hover"
                    >
                      <path
                        d="M0 6H14M14 6L9 1M14 6L9 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </StepWrapper>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
