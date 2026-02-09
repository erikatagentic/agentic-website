import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/shared/logo-icon";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center"
              aria-label="Agentic home"
            >
              <LogoIcon size={32} className="text-primary" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-sm font-medium">Navigation</p>
            <nav className="flex flex-col gap-2">
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
          </div>

          {/* CTA */}
          <div>
            <p className="mb-4 text-sm font-medium">Get started</p>
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
