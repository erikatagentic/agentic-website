"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");
    if (!hero) return;

    let heroVisible = true;
    let footerVisible = false;

    const update = () => {
      setVisible(!heroVisible && !footerVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );
    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Button asChild className="h-12 w-full hover:bg-primary-cta-hover">
        <a
          href={SITE_CONFIG.calLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Demo
        </a>
      </Button>
    </div>
  );
}
