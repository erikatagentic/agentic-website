"use client";

import { motion } from "framer-motion";
import { easeOutQuadMutable } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedIconBoxProps {
  children: React.ReactNode;
}

export function AnimatedIconBox({ children }: AnimatedIconBoxProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: easeOutQuadMutable }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  );
}
