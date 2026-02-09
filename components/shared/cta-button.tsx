import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface CTAButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function CTAButton({
  variant,
  size = "default",
  href,
  children,
  external,
  className,
}: CTAButtonProps) {
  const resolvedHref = href || SITE_CONFIG.calLink;
  const isExternal = external ?? resolvedHref.startsWith("http");

  const buttonVariant =
    variant === "primary"
      ? "default"
      : variant === "secondary"
        ? "outline"
        : "ghost";

  const buttonClasses = cn(
    size === "lg" && "h-12 px-8 text-base",
    variant === "primary" && "hover:bg-primary-cta-hover cta-glow",
    variant === "ghost" && "text-primary-text hover:text-primary-text-hover",
    className
  );

  if (isExternal) {
    return (
      <Button
        variant={buttonVariant}
        size={size === "lg" ? "lg" : "default"}
        className={buttonClasses}
        asChild
      >
        <a href={resolvedHref} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button
      variant={buttonVariant}
      size={size === "lg" ? "lg" : "default"}
      className={buttonClasses}
      asChild
    >
      <Link href={resolvedHref}>{children}</Link>
    </Button>
  );
}
