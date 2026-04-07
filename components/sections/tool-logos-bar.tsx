import { MotionWrapper } from "@/components/shared/motion-wrapper";

interface ToolLogo {
  name: string;
  className: string;
}

const TOOLS: ToolLogo[] = [
  { name: "Clay", className: "text-lg font-bold tracking-tight" },
  { name: "HubSpot", className: "text-base font-bold tracking-tight" },
  { name: "Salesforce", className: "text-base font-bold tracking-tight" },
  { name: "Smartlead", className: "text-sm font-semibold tracking-wide" },
  { name: "HeyReach", className: "text-sm font-bold tracking-tight" },
  { name: "n8n", className: "text-lg font-black tracking-tighter font-mono" },
  { name: "Firecrawl", className: "text-sm font-bold tracking-tight" },
  { name: "Instantly", className: "text-base font-bold tracking-tight" },
];

export function ToolLogosBar() {
  return (
    <section aria-label="Tools we integrate with" className="py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
            Integrated with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
            {TOOLS.map((tool) => (
              <span
                key={tool.name}
                className={`${tool.className} text-foreground-subtle/40 transition-all duration-300 hover:text-foreground-muted`}
              >
                {tool.name}
              </span>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
