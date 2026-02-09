"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Button asChild className="w-full hover:bg-primary-cta-hover">
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
