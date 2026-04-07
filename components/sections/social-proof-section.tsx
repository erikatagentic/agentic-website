"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { easeOutQuadMutable } from "@/lib/motion";
import { CASE_STUDIES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const receiptLines = [
  { label: "Campaigns of Data", value: "10,000+" },
  { label: "Avg Reply Rate Lift", value: "4x" },
  { label: "Days to Live System", value: "3-10" },
  { label: "Client Retention", value: "98%" },
];

const lineVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOutQuadMutable },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export function SocialProofSection() {
  const reducedMotion = useReducedMotion();
  const Container = reducedMotion ? "div" : motion.div;
  const Line = reducedMotion ? "div" : motion.div;

  return (
    <SectionWrapper id="results" variant="surface" size="breathing">
      <SectionHeading
        id="results-heading"
        overline="Track Record"
        title="Results, not promises."
      />

      {/* Receipt-format results card */}
      <Container
        {...(!reducedMotion && {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
        })}
        className="relative mx-auto mb-20 max-w-sm"
      >
        <div
          className="bg-receipt-paper px-8 pb-10 pt-8 text-receipt-text"
          style={{
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)",
            transform: "rotate(-0.5deg)",
          }}
        >
          {/* Header */}
          <Line {...(!reducedMotion && { variants: lineVariants })}>
            <div className="text-center">
              <p className="font-mono text-base font-bold tracking-[0.15em]">
                AGENTIC
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] opacity-50">
                Client Impact Report
              </p>
            </div>
          </Line>

          <Line {...(!reducedMotion && { variants: lineVariants })}>
            <div className="my-5 border-t border-dashed border-receipt-text/20" />
          </Line>

          {receiptLines.map((item) => (
            <Line
              key={item.label}
              {...(!reducedMotion && { variants: lineVariants })}
              className="flex items-baseline justify-between py-1.5 font-mono text-xs"
            >
              <span className="uppercase tracking-wide opacity-70">
                {item.label}
              </span>
              <span className="font-bold tabular-nums">
                {item.value}
              </span>
            </Line>
          ))}

          <Line {...(!reducedMotion && { variants: lineVariants })}>
            <div className="my-5 border-t-2 border-receipt-text/30" />
          </Line>

          <Line {...(!reducedMotion && { variants: lineVariants })}>
            <div className="flex items-baseline justify-between font-mono text-sm font-bold">
              <span className="uppercase tracking-wide">ROI</span>
              <span>Immediate</span>
            </div>
          </Line>

          <Line {...(!reducedMotion && { variants: lineVariants })}>
            <div className="mt-6 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-40">
                #0847 | Since 2024
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] opacity-40">
                Thank you for your business
              </p>
            </div>
          </Line>
        </div>

        {/* Torn edge */}
        <svg
          className="absolute -bottom-3 left-0 w-full"
          viewBox="0 0 320 16"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          <path
            d="M0,0 L0,4 L8,8 L16,4 L24,8 L32,4 L40,8 L48,4 L56,8 L64,4 L72,8 L80,4 L88,8 L96,4 L104,8 L112,4 L120,8 L128,4 L136,8 L144,4 L152,8 L160,4 L168,8 L176,4 L184,8 L192,4 L200,8 L208,4 L216,8 L224,4 L232,8 L240,4 L248,8 L256,4 L264,8 L272,4 L280,8 L288,4 L296,8 L304,4 L312,8 L320,4 L320,0 Z"
            className="fill-receipt-paper"
          />
        </svg>
      </Container>

      {/* Case study cards */}
      <MotionWrapper>
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.vertical}
              className="rounded-xl border border-border bg-background p-6 md:p-8"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-text">
                Case Study
              </p>
              <p className="mb-6 font-display text-xl font-normal tracking-tight sm:text-2xl">
                {study.vertical}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-foreground-subtle" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Signal</p>
                    <p className="text-sm text-foreground-muted">{study.signal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-error" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Before</p>
                    <p className="text-sm text-foreground-muted">{study.before}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">After</p>
                    <p className="text-sm text-foreground">{study.after}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Timeline</p>
                    <p className="text-sm text-foreground-muted">{study.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
