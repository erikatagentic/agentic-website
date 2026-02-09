"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface GradientBlobProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "violet" | "indigo";
  parallax?: boolean;
  parallaxSpeed?: number;
}

export function GradientBlob({
  className,
  size = "md",
  color = "violet",
  parallax = false,
  parallaxSpeed = 0.3,
}: GradientBlobProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -(parallaxSpeed * 200)]);

  const baseClasses = cn(
    "pointer-events-none absolute rounded-full",
    !reducedMotion && "animate-blob-drift",
    size === "sm" && "h-[300px] w-[300px]",
    size === "md" && "h-[600px] w-[600px]",
    size === "lg" && "h-[800px] w-[800px]",
    color === "violet" &&
      "bg-[radial-gradient(ellipse_at_center,hsl(255_92%_76%/0.12),transparent_70%)]",
    color === "indigo" &&
      "bg-[radial-gradient(ellipse_at_center,hsl(239_84%_67%/0.10),transparent_70%)]",
    className
  );

  if (parallax && !reducedMotion) {
    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className={baseClasses}
        aria-hidden="true"
      />
    );
  }

  return <div ref={ref} className={baseClasses} aria-hidden="true" />;
}
