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
        "mb-16",
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
        className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl"
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
