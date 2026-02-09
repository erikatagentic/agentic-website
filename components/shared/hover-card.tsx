import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <div className={cn("card-hover-glow transition-all duration-300", className)}>
      {children}
    </div>
  );
}
