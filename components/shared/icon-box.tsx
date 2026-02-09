import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "surface";
}

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "default",
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-12 w-12",
        variant === "default" && "bg-surface-raised",
        variant === "primary" && "bg-primary-muted",
        variant === "surface" && "bg-surface"
      )}
    >
      <Icon
        className={cn(
          "text-primary-text",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-5 w-5",
          size === "lg" && "h-6 w-6"
        )}
      />
    </div>
  );
}
