import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  overline?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({
  id,
  overline,
  title,
  subtitle,
  alignment = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-20",
        alignment === "center" && "text-center"
      )}
    >
      {overline && (
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-text">
          {overline}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-4xl font-normal leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-foreground-muted md:text-xl",
            alignment === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
