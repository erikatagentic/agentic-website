"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutQuad } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const variants = {
  fadeInUp: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scaleIn: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
} as const;

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof variants;
}

export function MotionWrapper({
  children,
  className,
  delay = 0,
  variant = "fadeInUp",
}: MotionWrapperProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = variants[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [...easeOutQuad] as [number, number, number, number],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
