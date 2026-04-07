import { MotionWrapper } from "@/components/shared/motion-wrapper";

function HubSpotLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="HubSpot">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
    </svg>
  );
}

function N8nLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="n8n">
      <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
    </svg>
  );
}

interface TextLogo {
  type: "text";
  name: string;
  className: string;
}

interface SvgLogo {
  type: "svg";
  name: string;
  component: React.ComponentType<{ className?: string }>;
}

type ToolLogo = TextLogo | SvgLogo;

const TOOLS: ToolLogo[] = [
  { type: "text", name: "Clay", className: "text-lg font-bold tracking-tight" },
  { type: "svg", name: "HubSpot", component: HubSpotLogo },
  { type: "text", name: "Salesforce", className: "text-base font-bold tracking-tight" },
  { type: "text", name: "Smartlead", className: "text-sm font-semibold tracking-wide" },
  { type: "text", name: "HeyReach", className: "text-sm font-bold tracking-tight" },
  { type: "svg", name: "n8n", component: N8nLogo },
  { type: "text", name: "Firecrawl", className: "text-sm font-bold tracking-tight" },
  { type: "text", name: "Instantly", className: "text-base font-bold tracking-tight" },
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
              <div
                key={tool.name}
                className="flex items-center gap-1.5 text-foreground-subtle/40 transition-all duration-300 hover:text-foreground-muted"
              >
                {tool.type === "svg" ? (
                  <>
                    <tool.component className="h-5 w-5" />
                    <span className="text-sm font-semibold">{tool.name}</span>
                  </>
                ) : (
                  <span className={tool.className}>{tool.name}</span>
                )}
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
