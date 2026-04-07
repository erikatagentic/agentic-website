"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTilt } from "@/hooks/use-tilt";
import { easeOutQuadMutable } from "@/lib/motion";

const receiptItems = [
  { label: "Workflows Automated", value: "150+" },
  { label: "Active Clients", value: "40+" },
  { label: "Avg Efficiency Gain", value: "10x" },
  { label: "Client Retention", value: "98%" },
];

export function ReceiptCard() {
  const reducedMotion = useReducedMotion();
  const { ref, tilt, handlers } = useTilt({ maxRotation: 10 });

  const Wrapper = reducedMotion ? "div" : motion.div;
  const animProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.5, ease: easeOutQuadMutable },
      };

  return (
    <div
      ref={ref}
      {...(!reducedMotion ? handlers : {})}
      style={{ perspective: "1000px" }}
    >
      <Wrapper
        {...animProps}
        {...(!reducedMotion && {
          animate: {
            opacity: 1,
            y: 0,
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
          },
          transition: {
            opacity: { duration: 0.7, delay: 0.5, ease: easeOutQuadMutable },
            y: { duration: 0.7, delay: 0.5, ease: easeOutQuadMutable },
            rotateX: { type: "spring", stiffness: 200, damping: 20 },
            rotateY: { type: "spring", stiffness: 200, damping: 20 },
          },
        })}
        className="relative mx-auto w-full max-w-xs select-none will-change-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Paper card */}
        <div
          className="relative bg-receipt-paper px-6 pb-10 pt-6 text-receipt-text"
          style={{
            boxShadow: reducedMotion
              ? "0 20px 50px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)"
              : `${-tilt.rotateY * 1.5}px ${tilt.rotateX * 1.5 + 20}px 50px rgba(0,0,0,0.5), ${-tilt.rotateY * 0.5}px ${tilt.rotateX * 0.5 + 8}px 20px rgba(0,0,0,0.3)`,
          }}
        >
          {/* Header */}
          <div className="text-center">
            <p className="font-mono text-lg font-bold tracking-[0.15em]">
              AGENTIC
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] opacity-50">
              AI Workflow Automation
            </p>
          </div>

          {/* Dashed divider */}
          <div className="my-4 border-t border-dashed border-receipt-text/20" />

          {/* Line items */}
          <div className="space-y-2.5">
            {receiptItems.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between font-mono text-xs">
                <span className="uppercase tracking-wide opacity-70">
                  {item.label}
                </span>
                <span className="font-bold tabular-nums">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Dashed divider */}
          <div className="my-4 border-t border-dashed border-receipt-text/20" />

          {/* Total */}
          <div className="flex items-baseline justify-between font-mono text-sm font-bold">
            <span className="uppercase tracking-wide">ROI</span>
            <span>Immediate</span>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-40">
              Thank you for your business
            </p>
          </div>
        </div>

        {/* Torn edge effect */}
        <svg
          className="absolute -bottom-3 left-0 w-full"
          viewBox="0 0 320 16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L0,4 L8,8 L16,4 L24,8 L32,4 L40,8 L48,4 L56,8 L64,4 L72,8 L80,4 L88,8 L96,4 L104,8 L112,4 L120,8 L128,4 L136,8 L144,4 L152,8 L160,4 L168,8 L176,4 L184,8 L192,4 L200,8 L208,4 L216,8 L224,4 L232,8 L240,4 L248,8 L256,4 L264,8 L272,4 L280,8 L288,4 L296,8 L304,4 L312,8 L320,4 L320,0 Z"
            className="fill-receipt-paper"
          />
        </svg>
      </Wrapper>
    </div>
  );
}
