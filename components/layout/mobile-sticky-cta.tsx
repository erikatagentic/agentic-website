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
    if (!hero || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) {
            if (!entry.isIntersecting) {
              setVisible(true);
            }
          }
          if (entry.target === footer) {
            if (entry.isIntersecting) {
              setVisible(false);
            }
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    observer.observe(footer);

    return () => observer.disconnect();
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
