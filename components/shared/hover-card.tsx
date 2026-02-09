"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutQuadMutable } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: HoverCardProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: easeOutQuadMutable },
      }}
    >
      {children}
    </motion.div>
  );
}
