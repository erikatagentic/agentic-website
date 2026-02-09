"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";
import { easeOutQuadMutable } from "@/lib/motion";
import { USE_CASES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function UseCaseContent({ description, tools, result }: { description: string; tools: string[]; result: string }) {
  return (
    <>
      <p className="text-lg leading-relaxed text-foreground-muted">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tools.map((tool) => (
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
        <span className="text-primary-text">{result}</span>
      </p>
    </>
  );
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeCase = USE_CASES[activeTab];

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let newIndex = activeTab;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        newIndex = (activeTab + 1) % USE_CASES.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        newIndex = (activeTab - 1 + USE_CASES.length) % USE_CASES.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        newIndex = USE_CASES.length - 1;
      }
      if (newIndex !== activeTab) {
        setActiveTab(newIndex);
        const tabEl = document.getElementById(`use-case-tab-${newIndex}`);
        tabEl?.focus();
      }
    },
    [activeTab]
  );

  return (
    <SectionWrapper id="use-cases">
      <SectionHeading
        id="use-cases-heading"
        overline="Signal Campaigns"
        title="One signal. One campaign. Meetings booked."
        subtitle="Each buying signal gets its own Clay workflow and outreach playbook."
      />

      <MotionWrapper>
        {/* Tab pills with proper ARIA */}
        <div
          role="tablist"
          aria-label="Signal campaign types"
          className="mb-8 flex flex-wrap justify-center gap-2"
          onKeyDown={handleKeyDown}
        >
          {USE_CASES.map((useCase, index) => (
            <button
              key={useCase.tab}
              id={`use-case-tab-${index}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`use-case-panel-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
            <div
              id={`use-case-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`use-case-tab-${activeTab}`}
              tabIndex={0}
              className="rounded-xl border border-border bg-surface p-6 md:p-8"
            >
              <UseCaseContent
                description={activeCase.description}
                tools={activeCase.tools}
                result={activeCase.result}
              />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`use-case-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`use-case-tab-${activeTab}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: easeOutQuadMutable }}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <UseCaseContent
                  description={activeCase.description}
                  tools={activeCase.tools}
                  result={activeCase.result}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
