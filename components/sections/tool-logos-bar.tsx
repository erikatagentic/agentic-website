import { MotionWrapper } from "@/components/shared/motion-wrapper";

const TOOLS = [
  { name: "Clay", wordmark: "Clay" },
  { name: "HubSpot", wordmark: "HubSpot" },
  { name: "Salesforce", wordmark: "Salesforce" },
  { name: "Smartlead", wordmark: "Smartlead" },
  { name: "HeyReach", wordmark: "HeyReach" },
  { name: "n8n", wordmark: "n8n" },
  { name: "Firecrawl", wordmark: "Firecrawl" },
  { name: "Instantly", wordmark: "Instantly" },
];

export function ToolLogosBar() {
  return (
    <section aria-label="Tools we integrate with" className="py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
            Integrated with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {TOOLS.map((tool) => (
              <span
                key={tool.name}
                className="text-sm font-semibold tracking-wide text-foreground-subtle/60 transition-colors hover:text-foreground-muted md:text-base"
              >
                {tool.wordmark}
              </span>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
