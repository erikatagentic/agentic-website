"use client";

import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TiltValues {
  rotateX: number;
  rotateY: number;
}

interface UseTiltOptions {
  maxRotation?: number;
}

export function useTilt({ maxRotation = 8 }: UseTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize to [-1, 1]
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp to [-1, 1]
      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      setTilt({
        rotateX: -clampedY * maxRotation, // Tilt away from cursor vertically
        rotateY: clampedX * maxRotation,  // Tilt toward cursor horizontally
      });
    },
    [reducedMotion, maxRotation]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return {
    ref,
    tilt,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    isDisabled: reducedMotion,
  };
}
