import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <div className={cn("transition-colors duration-300 hover:border-border-hover", className)}>
      {children}
    </div>
  );
}
