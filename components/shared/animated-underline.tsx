"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedUnderlineProps {
  className?: string;
  delay?: number;
}

export function AnimatedUnderline({ className, delay = 0.8 }: AnimatedUnderlineProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 286 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M2 8.5C32 2.5 62 2.5 95 6.5C128 10.5 158 10.5 191 6.5C224 2.5 254 2.5 284 8.5"
        stroke="hsl(255 92% 76%)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
}
