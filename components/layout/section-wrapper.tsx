import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "surface" | "surface-raised" | "gradient" | "gradient-accent";
}

export function SectionWrapper({
  id,
  className,
  children,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "relative py-24 md:py-32",
        variant === "surface" && "bg-surface",
        variant === "surface-raised" && "bg-surface-raised",
        variant === "gradient" &&
          "bg-gradient-to-b from-background to-surface",
        variant === "gradient-accent" && "overflow-hidden",
        className
      )}
    >
      {variant === "gradient-accent" && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(255_92%_76%/0.06),transparent_70%)]"
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
