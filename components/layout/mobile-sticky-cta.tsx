"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useHeroVisibility } from "@/hooks/use-hero-visibility";

export function MobileStickyCTA() {
  const { heroVisible, footerVisible } = useHeroVisibility();
  const visible = !heroVisible && !footerVisible;

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
