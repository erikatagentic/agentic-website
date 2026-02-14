"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LogoIcon } from "@/components/shared/logo-icon";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sentinel observer for navbar background (replaces scroll event)
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 1 }
    );
    scrollObserver.observe(sentinel);

    // Section observer for active nav link
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as Element[];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      scrollObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
    {/* Sentinel element at top of page for scroll detection */}
    <div ref={sentinelRef} className="absolute top-[50px] h-px w-px" aria-hidden="true" />
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <div
        className={cn(
          "mx-3 mt-4 rounded-full border px-4 transition-all duration-300 sm:mx-auto sm:max-w-4xl sm:px-6",
          "bg-surface/80 backdrop-blur-md",
          scrolled
            ? "border-border-hover shadow-[0_0_15px_hsl(255_92%_76%/0.1)]"
            : "border-border"
        )}
      >
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Agentic home"
          >
            <LogoIcon size={32} className="text-primary" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden hover:bg-primary-cta-hover md:inline-flex"
            >
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
