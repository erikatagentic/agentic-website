"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-normal italic tracking-tight"
        >
          Agentic
          <span className="text-primary-text">.</span>
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
    </header>
    </>
  );
}
