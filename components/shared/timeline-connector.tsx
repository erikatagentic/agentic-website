"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TimelineConnectorProps {
  className?: string;
}

export function TimelineConnector({ className }: TimelineConnectorProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        <div className="h-full w-px bg-border" />
      </div>
    );
  }

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <div className="absolute inset-0 w-px bg-border" />
      <motion.div
        className="absolute inset-x-0 top-0 w-px origin-top bg-primary-text"
        style={{ scaleY }}
      />
    </div>
  );
}
