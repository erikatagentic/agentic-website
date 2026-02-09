"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface HeroVisibilityCtx {
  heroVisible: boolean;
  footerVisible: boolean;
}

const Ctx = createContext<HeroVisibilityCtx>({
  heroVisible: true,
  footerVisible: false,
});

export function HeroVisibilityProvider({ children }: { children: ReactNode }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const o = new IntersectionObserver(
        ([entry]) => setHeroVisible(entry.isIntersecting),
        { threshold: 0 }
      );
      o.observe(hero);
      observers.push(o);
    }

    if (footer) {
      const o = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0 }
      );
      o.observe(footer);
      observers.push(o);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Ctx value={{ heroVisible, footerVisible }}>
      {children}
    </Ctx>
  );
}

export function useHeroVisibility() {
  return useContext(Ctx);
}
