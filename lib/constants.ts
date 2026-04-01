import {
  Target,
  Radio,
  TrendingUp,
  Database,
  Radar,
  Mail,
  type LucideIcon,
} from "lucide-react";

// ── Brand Colors (used in OG images and non-CSS contexts) ──
// Keep in sync with globals.css design tokens

export const BRAND_COLORS = {
  background: "#09090B",
  backgroundAlt: "#18181B",
  primaryText: "#A78BFA",
  foreground: "#FAFAFA",
  foregroundMuted: "#A1A1AA",
  primaryGlow: "rgba(124,58,237,0.3)",
} as const;

// ── Site Config ──

export const SITE_CONFIG = {
  name: "Agentic",
  tagline: "Clay-Powered GTM Automation",
  description:
    "We build signals-based outbound systems on Clay that detect buying intent, enrich prospects, and generate qualified pipeline. Campaigns live in days, not weeks.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heyagentic.ai",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "https://tidycal.com/heyagentic/30-minutes",
  linkedIn: "https://www.linkedin.com/company/heyagentic",
} as const;

// ── Headline Parts ──

export interface HeadlinePart {
  text: string;
  italic: boolean;
}

// ── Navigation ──

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

// ── Hero ──

export const HERO = {
  headline: "Your SDRs research 15 minutes per prospect. We built a system that does it in 15 seconds.",
  headlineParts: [
    { text: "Your SDRs research 15 minutes per prospect. ", italic: false },
    { text: "We built a system that does it in 15 seconds.", italic: true },
  ] as const,
  subheadline:
    "Clay-powered outbound that scrapes buying signals, enriches every lead, and writes personalized sequences. Your pipeline fills while your team focuses on closing.",
  primaryCta: "Book a Demo",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "#how-it-works",
} as const;

// ── Stats ──

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "4x", label: "Avg. Reply Rate Lift" },
  { value: "12", label: "Days to First Meetings" },
];

// ── Problem ──

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: Target,
    title: "Your team sends 500 emails a week. 4 people reply.",
    description:
      "Generic sequences with {FIRST_NAME} and {COMPANY} variables aren't personalization. Your prospects get 47 of these a day. They delete yours in 2 seconds.",
  },
  {
    icon: Radio,
    title: "A prospect just raised $12M. You found out 3 weeks later.",
    description:
      "Funding rounds, executive hires, tech stack changes, office expansions. These are buying signals. By the time your team manually discovers them, a competitor already booked the meeting.",
  },
  {
    icon: TrendingUp,
    title: "Real personalization takes 15 minutes per prospect. You have 500 prospects.",
    description:
      "Your SDRs choose between sending 50 personalized emails or 500 generic ones. Clay makes it so they don't have to choose. Every prospect gets researched in seconds.",
  },
];

// ── Solution ──

export const SOLUTION = {
  title: "Signals-based outreach changes everything.",
  subtitle:
    "We build Clay-powered systems that monitor buying signals across 150+ data providers, enrich every prospect with the context that matters, and trigger personalized sequences at exactly the right moment. Your pipeline fills while your team focuses on closing.",
  differentiator:
    "Clay + n8n + AI personalization. Built for your ICP, not a generic template.",
} as const;

// ── Services ──

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  visualId: "workflows" | "integrations" | "intelligence";
}

export const SERVICES: ServiceCard[] = [
  {
    icon: Database,
    title: "Clay Workflow Automation",
    description:
      "Signal monitoring, enrichment waterfalls, and lead scoring tables built in Clay. We connect 150+ data providers and route qualified prospects directly into your sequences.",
    visualId: "workflows",
  },
  {
    icon: Radar,
    title: "GTM Data Infrastructure",
    description:
      "ICP definition, CRM enrichment, and account scoring pipelines. Clean data in, qualified leads out. We integrate Clay with HubSpot, Salesforce, and your existing stack.",
    visualId: "integrations",
  },
  {
    icon: Mail,
    title: "Outbound Campaign Design",
    description:
      "Signals-based campaigns that pair the right trigger with the right message. Funding rounds, job changes, hiring surges, tech stack shifts. Each signal gets its own playbook.",
    visualId: "intelligence",
  },
];

// ── How It Works ──

export interface Step {
  number: number;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We audit your current GTM stack, define your ICP with precision, and identify which buying signals map to your highest-converting opportunities.",
  },
  {
    number: 2,
    title: "Build",
    description:
      "We configure Clay tables, set up signal detection across funding, hiring, job changes, and tech adoption. Enrichment waterfalls and scoring logic go live in your workspace.",
  },
  {
    number: 3,
    title: "Launch",
    description:
      "Campaigns connect to your email platform and CRM. Signals trigger personalized sequences automatically. First outbound hits inboxes within days of kickoff.",
  },
  {
    number: 4,
    title: "Optimize",
    description:
      "We tune signal thresholds, A/B test messaging, expand to new ICPs, and continuously improve reply rates. Monthly performance reviews keep your pipeline growing.",
  },
];

// ── Social Proof (outcome-based, no fake names) ──

export interface ProofStat {
  value: string;
  label: string;
}

export const PROOF_STATS: ProofStat[] = [
  { value: "10,000+", label: "Outbound campaigns built" },
  { value: "47", label: "Industries served" },
  { value: "4x", label: "Average reply rate lift" },
];

// ── Case Study (anonymized) ──

export interface CaseStudy {
  vertical: string;
  signal: string;
  before: string;
  after: string;
  timeline: string;
}

export const CASE_STUDY: CaseStudy = {
  vertical: "B2B SaaS Company, 80 employees",
  signal: "Funding round detection + personalized outreach",
  before: "0.8% reply rate, 2 meetings/month from outbound",
  after: "4.7% reply rate, 14 meetings/month",
  timeline: "Live in 10 days",
};

// ── About ──

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  linkedIn: string;
}

export const ABOUT = {
  overline: "Who We Are",
  title: "Built by operators, not consultants.",
  subtitle:
    "Agentic was founded to solve a problem we lived firsthand: outbound that wastes time instead of creating pipeline.",
} as const;

export const TEAM: TeamMember[] = [
  {
    name: "Erik Hernal",
    role: "Founder",
    initials: "EH",
    bio: "Built outbound systems for 40+ B2B companies across 47 industries. I don't run your campaigns. I build the infrastructure that makes your team's outreach 4x more effective.",
    linkedIn: "https://www.linkedin.com/in/erikhernal/",
  },
];

// ── Use Cases ──

export interface UseCase {
  tab: string;
  description: string;
  tools: string[];
  result: string;
}

export const USE_CASES: UseCase[] = [
  {
    tab: "Funding Signal",
    description:
      "Detect when target accounts raise new rounds. Clay enriches the company with headcount, tech stack, and decision-maker contacts. Personalized outreach references their funding news and offers relevant solutions.",
    tools: ["Clay", "Crunchbase", "HubSpot", "Smartlead"],
    result: "8 meetings booked per 100 signals detected",
  },
  {
    tab: "Job Change Signal",
    description:
      "Monitor when past champions and power users switch companies. Trigger warm re-engagement sequences that reference your shared history and offer to bring proven results to their new org.",
    tools: ["Clay", "LinkedIn", "Salesforce", "Outreach"],
    result: "3.2x higher reply rate than cold outbound",
  },
  {
    tab: "Hiring Signal",
    description:
      "Track companies posting roles that indicate scaling pain. A company hiring 5 SDRs needs automation. A company hiring a RevOps lead needs infrastructure. Match the signal to your offer.",
    tools: ["Clay", "LinkedIn Jobs", "n8n", "HubSpot"],
    result: "22% meeting-booked rate on hiring triggers",
  },
  {
    tab: "Tech Stack Signal",
    description:
      "Catch companies adopting or dropping tools in your ecosystem. A CRM migration signals budget and willingness to invest. Time your outreach to land during the evaluation window.",
    tools: ["Clay", "BuiltWith", "Slack", "Smartlead"],
    result: "5x pipeline from tech-change triggers vs. cold lists",
  },
  {
    tab: "Website Intel",
    description:
      "We scrape your prospect's website, extract who they serve, how they position themselves, and what their outbound angle should be. Every first message references something specific about their business. Not their name. Not their company. Their actual positioning.",
    tools: ["Firecrawl", "Clay", "Claude AI", "Smartlead"],
    result: "3x reply rates vs. standard personalization",
  },
];

// ── FAQ ──

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Clay and why do I need an agency?",
    answer:
      "Clay is a data enrichment and outbound automation platform that connects 150+ data providers. It is powerful but complex. Most teams spend months learning it and still underutilize its capabilities. We configure everything: signal detection, enrichment waterfalls, scoring logic, and CRM integrations. You get a production-ready system without the learning curve.",
  },
  {
    question: "What buying signals can you monitor?",
    answer:
      "Funding rounds, job changes, new hires, tech stack adoption, leadership changes, company growth metrics, LinkedIn engagement, website visits, and more. We design signal strategies based on your ICP, so you only get alerts for prospects who match your ideal buyer profile.",
  },
  {
    question: "How long does it take to launch a campaign?",
    answer:
      "Most campaigns go live within 5-10 business days. That includes ICP definition, Clay table setup, signal configuration, enrichment workflows, sequence copy, and CRM integration. We scope everything upfront so there are no surprises.",
  },
  {
    question: "Do you work with our existing CRM and email tools?",
    answer:
      "Yes. We integrate with HubSpot, Salesforce, Outreach, Salesloft, Smartlead, Instantly, Apollo, and most major GTM platforms. If your tool has an API, we connect it to your Clay workflows.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Signal campaign builds start at $3,000. Monthly management starts at $1,500/month. Most clients run 2-3 campaigns at $4,000-6,000/month. No long-term contracts. Every engagement starts with a free 30-minute scoping call where we map your highest-impact signal opportunity.",
  },
  {
    question: "How is this different from hiring another SDR?",
    answer:
      "An SDR costs $60-80K per year and manually researches 30-50 prospects per day. A Clay-powered signal system monitors thousands of accounts continuously, enriches every match automatically, and triggers personalized outreach around the clock. You get 10x the volume at a fraction of the cost, and your SDRs focus on conversations instead of data entry.",
  },
  {
    question: "Do we need our own Clay account?",
    answer:
      "Yes. We build everything inside your Clay workspace so you own all the data, workflows, and enrichment credits. If you don't have a Clay account yet, we help you pick the right plan and get set up during onboarding.",
  },
  {
    question: "What results should we expect in the first 30 days?",
    answer:
      "Most clients see their first signal-triggered meetings within 2 weeks of launch. By day 30, expect a 2-4x improvement in reply rates compared to your previous cold outbound, plus a steady stream of prospects entering your pipeline from live signal monitoring.",
  },
  {
    question: "Can you work alongside our existing sales team?",
    answer:
      "Absolutely. We build the signal detection and enrichment layer. Your SDRs handle the conversations and closing. The system slots into your current CRM and sequencing tools so there is no disruption to existing workflows.",
  },
  {
    question: "What happens if we want to pause or cancel?",
    answer:
      "Project-based builds are yours to keep forever. For retainer clients, you can pause or cancel with 30 days notice. All Clay tables, workflows, and documentation stay in your workspace. There are no lock-ins or penalties.",
  },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Your competitors are already using signals.",
  subheadline:
    "Book a 30-minute call and we'll map your highest-value signal campaign, free.",
  cta: "Book a Demo",
  note: "No commitment required. No sales deck. Just a technical conversation about your pipeline.",
} as const;
