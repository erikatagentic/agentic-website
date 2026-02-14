"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
}: AnimatedCounterProps) {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(target);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  useEffect(() => {
    if (reducedMotion || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setCount(0);
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [reducedMotion, startAnimation]);

  return (
    <div
      ref={ref}
      className="text-center"
      aria-label={`${prefix}${target}${suffix} ${label}`}
    >
      <p className="font-display text-4xl font-normal italic tracking-tight text-foreground md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-foreground-muted">{label}</p>
    </div>
  );
}
