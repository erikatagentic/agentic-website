"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutQuadMutable, cinematicEaseMutable } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const variants = {
  fadeInUp: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scaleIn: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  cinematicUp: { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
} as const;

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: keyof typeof variants;
}

export function MotionWrapper({
  children,
  className,
  delay = 0,
  duration,
  variant = "fadeInUp",
}: MotionWrapperProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = variants[variant];
  const isCinematic = variant.startsWith("cinematic") || variant.startsWith("slide");
  const resolvedEase = isCinematic ? cinematicEaseMutable : easeOutQuadMutable;
  const resolvedDuration = duration ?? (isCinematic ? 0.65 : 0.5);

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: resolvedDuration,
        delay,
        ease: resolvedEase,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
