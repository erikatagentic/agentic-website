"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
  perspective?: number;
}

export function TiltCard({
  children,
  className,
  maxRotation = 6,
  perspective = 800,
}: TiltCardProps) {
  const { ref, tilt, handlers, isDisabled } = useTilt({ maxRotation });

  if (isDisabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      {...handlers}
      style={{ perspective: `${perspective}px` }}
    >
      <motion.div
        className={cn("will-change-transform", className)}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: `${-tilt.rotateY * 0.8}px ${tilt.rotateX * 0.8}px 30px rgba(0,0,0,0.3)`,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
