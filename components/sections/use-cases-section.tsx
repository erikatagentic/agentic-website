"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";
import { easeOutQuad } from "@/lib/motion";
import { USE_CASES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeCase = USE_CASES[activeTab];

  return (
    <SectionWrapper id="use-cases">
      <SectionHeading
        id="use-cases-heading"
        overline="Use Cases"
        title="Built for your stack."
        subtitle="AI workflows tailored to every department."
      />

      <MotionWrapper>
        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {USE_CASES.map((useCase, index) => (
            <button
              key={useCase.tab}
              onClick={() => setActiveTab(index)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-raised text-foreground-muted hover:text-foreground"
              )}
            >
              {useCase.tab}
            </button>
          ))}
        </div>

        {/* Active case content with AnimatePresence */}
        <div className="mx-auto max-w-2xl">
          {reducedMotion ? (
            <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
              <p className="text-lg leading-relaxed text-foreground-muted">
                {activeCase.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeCase.tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-surface-raised text-foreground-muted"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-sm font-medium">
                <span className="text-primary-text">{activeCase.result}</span>
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [...easeOutQuad] as [number, number, number, number] }}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <p className="text-lg leading-relaxed text-foreground-muted">
                  {activeCase.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeCase.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-surface-raised text-foreground-muted"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium">
                  <span className="text-primary-text">{activeCase.result}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
