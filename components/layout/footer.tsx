import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/shared/logo-icon";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Agentic home"
            >
              <LogoIcon size={32} className="text-primary" />
            </Link>
            <a
              href={SITE_CONFIG.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-foreground"
              aria-label="Agentic on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Links + CTA */}
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="hover:bg-primary-cta-hover">
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-foreground-subtle">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-foreground-subtle transition-colors hover:text-foreground-muted"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground-subtle transition-colors hover:text-foreground-muted"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
