import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "surface" | "gradient";
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
        "py-24 md:py-32",
        variant === "surface" && "bg-surface",
        variant === "gradient" &&
          "bg-gradient-to-b from-background to-surface",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
