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
        className="relative mx-auto w-full max-w-[240px] select-none will-change-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Compact receipt teaser */}
        <div
          className="bg-receipt-paper px-5 py-5 text-receipt-text"
          style={{
            boxShadow: reducedMotion
              ? "0 20px 50px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)"
              : `${-tilt.rotateY * 1.5}px ${tilt.rotateX * 1.5 + 20}px 50px rgba(0,0,0,0.5), ${-tilt.rotateY * 0.5}px ${tilt.rotateX * 0.5 + 8}px 20px rgba(0,0,0,0.3)`,
          }}
        >
          {/* Mini header */}
          <p className="mb-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] opacity-60">
            Agentic
          </p>

          {/* Dashed divider */}
          <div className="mb-3 border-t border-dashed border-receipt-text/20" />

          {/* Line items */}
          <div className="space-y-1.5">
            {receiptItems.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between font-mono text-[10px]">
                <span className="uppercase tracking-wide opacity-60">
                  {item.label}
                </span>
                <span className="font-bold tabular-nums">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Divider + ROI */}
          <div className="mt-3 border-t border-dashed border-receipt-text/20 pt-2">
            <div className="flex items-baseline justify-between font-mono text-xs font-bold">
              <span className="uppercase tracking-wide">ROI</span>
              <span>Immediate</span>
            </div>
          </div>
        </div>

        {/* Torn edge */}
        <svg
          className="absolute -bottom-2 left-0 w-full"
          viewBox="0 0 240 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L0,3 L6,6 L12,3 L18,6 L24,3 L30,6 L36,3 L42,6 L48,3 L54,6 L60,3 L66,6 L72,3 L78,6 L84,3 L90,6 L96,3 L102,6 L108,3 L114,6 L120,3 L126,6 L132,3 L138,6 L144,3 L150,6 L156,3 L162,6 L168,3 L174,6 L180,3 L186,6 L192,3 L198,6 L204,3 L210,6 L216,3 L222,6 L228,3 L234,6 L240,3 L240,0 Z"
            className="fill-receipt-paper"
          />
        </svg>
      </Wrapper>
    </div>
  );
}
