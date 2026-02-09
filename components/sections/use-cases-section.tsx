"use client";

import { useState } from "react";
import { USE_CASES } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = USE_CASES[activeTab];

  return (
    <SectionWrapper id="use-cases">
      <SectionHeading
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

        {/* Active case content */}
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-6 md:p-8">
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
      </MotionWrapper>
    </SectionWrapper>
  );
}
