"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHeroVisibility } from "@/hooks/use-hero-visibility";

export function BackToTop() {
  const { heroVisible } = useHeroVisibility();
  const visible = !heroVisible;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className={cn(
        "fixed right-4 z-40 flex rounded-full border-border bg-surface-raised/90 backdrop-blur-sm transition-all duration-300 hover:bg-surface-overlay hover:text-foreground md:right-6",
        "bottom-20 md:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
