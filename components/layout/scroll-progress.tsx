"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Inner component that actually subscribes to scroll -- only mounted when visible. */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-primary-text"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;
  return <ProgressBar />;
}
