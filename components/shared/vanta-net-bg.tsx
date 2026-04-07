"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface VantaEffect {
  destroy: () => void;
}

interface VantaNetBgProps {
  className?: string;
}

export function VantaNetBg({ className }: VantaNetBgProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const reducedMotion = useReducedMotion();

  const cleanup = useCallback(() => {
    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || effectRef.current || !vantaRef.current) return;

    let mounted = true;

    (async () => {
      const THREE = await import("three");
      const NET = await import("vanta/dist/vanta.net.min");
      if (!mounted || !vantaRef.current) return;

      effectRef.current = NET.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 600,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf5a623,
        backgroundColor: 0x09090b,
        points: 8,
        maxDistance: 22,
        spacing: 18,
        showDots: true,
      }) as VantaEffect;
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, [reducedMotion, cleanup]);

  if (reducedMotion) return null;

  return (
    <div
      ref={vantaRef}
      className={className}
      aria-hidden="true"
    />
  );
}
