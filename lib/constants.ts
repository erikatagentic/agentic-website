import {
  DollarSign,
  Lock,
  Clock,
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
  tagline: "GTM Engineering for B2B Teams",
  description:
    "Fixed-scope projects that build enrichment waterfalls, signal detection, and outbound campaign infrastructure. $750-4,000. Delivered in days.",
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
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

// ── Hero ──

export const HERO = {
  headline: "Your outbound infrastructure. Built in days, not months.",
  headlineParts: [
    { text: "Your outbound infrastructure. ", italic: false },
    { text: "Built in days, not months.", italic: true },
  ] as const,
  subheadline:
    "Fixed-scope projects that build enrichment waterfalls, signal detection, and personalized outbound systems. Pick a project, get it delivered, own the system.",
  primaryCta: "See the Menu",
  primaryCtaHref: "#pricing",
  secondaryCta: "Book a Call",
} as const;

// ── Stats ──

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "10,000+", label: "Campaigns of data powering every build" },
  { value: "4x", label: "Average reply rate lift" },
  { value: "3-10", label: "Days from kickoff to live system" },
];

// ── Problem ──

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: DollarSign,
    title: "A full-time GTM engineer costs $135K/year.",
    description:
      "And takes 3 months to ramp. You don't need a full-time hire. You need the specific system built. Enrichment waterfall, signal detection, campaign infrastructure. Scoped, delivered, done.",
  },
  {
    icon: Lock,
    title: "Agency retainers lock you in for $4-8K/month.",
    description:
      "You pay whether they're building or coasting. And when you leave, you start over. With a project, you pay once and own the system forever. No dependency.",
  },
  {
    icon: Clock,
    title: "Your SDRs spend 15 minutes researching each prospect.",
    description:
      "That's 125 hours a month of research for 500 prospects. An enrichment waterfall does it in seconds. A signal detection workflow catches buying intent your team will never see manually.",
  },
];

// ── Pricing ──

// ── Tool Logos ──

export const TOOL_LOGOS: string[] = [
  "Clay", "HubSpot", "Salesforce", "Smartlead",
  "HeyReach", "n8n", "Firecrawl", "Instantly",
];

// ── Pricing ──

export interface PricingCard {
  title: string;
  price: string;
  description: string;
  delivery: string;
  featured?: boolean;
}

export interface OngoingPlan {
  title: string;
  price: string;
  description: string;
}

export const PRICING = {
  overline: "The Menu",
  headline: "Pick what you need. Get it built.",
  subheadline: "Fixed scope. Fixed price. Delivered in days. You own everything.",
} as const;

export const PRICING_TIER_1_LABEL = "Starters";
export const PRICING_TIER_1: PricingCard[] = [
  {
    title: "ICP Enrichment Build",
    price: "$750",
    description:
      "4-provider enrichment waterfall with dedup and dual email verification. You provide the list, we return it enriched with verified emails.",
    delivery: "Delivered in 3 days",
  },
  {
    title: "Signal Detection Setup",
    price: "$1,500",
    description:
      "n8n workflow monitoring 3 buying signals (hiring, funding, job changes) for your ICP. Alerts pushed to Slack or your CRM.",
    delivery: "Delivered in 5 days",
  },
  {
    title: "Full Data Stack",
    price: "$2,000",
    description:
      "Enrichment + signal detection + lead scoring. Ready to feed into any sequencer.",
    delivery: "Delivered in 7 days",
  },
];

export const PRICING_TIER_2_LABEL = "Mains";
export const PRICING_TIER_2: PricingCard[] = [
  {
    title: "Outbound Campaign Build",
    price: "$2,000",
    description:
      "500 enriched prospects, 4-touch LinkedIn sequence, 3-email sequence. Loaded into HeyReach + Smartlead. Ready to launch.",
    delivery: "Delivered in 7 days",
  },
  {
    title: "Website Intelligence Pipeline",
    price: "$2,500",
    description:
      "AI scrapes prospect websites, extracts positioning, and generates personalized first messages. Plugs into your existing sequencer.",
    delivery: "Delivered in 5 days",
  },
  {
    title: "Full GTM Stack Build",
    price: "$4,000",
    description:
      "Data layer + campaign infrastructure + CRM integration. The complete outbound machine.",
    delivery: "Delivered in 10 days",
    featured: true,
  },
];

export const ONGOING_LABEL = "The Regular's Table";

export const ONGOING_PLANS: OngoingPlan[] = [
  {
    title: "Signal Monitoring",
    price: "$750/mo",
    description: "We maintain your workflows and tune scoring.",
  },
  {
    title: "List Refresh",
    price: "$1,000/mo",
    description: "500 new enriched prospects delivered monthly.",
  },
  {
    title: "Fractional GTM Engineer",
    price: "$2,500/mo",
    description: "10 hours/month. Slack access. Use as-needed.",
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
    title: "Pick a Project",
    description:
      "Browse the menu. Choose the system you need built. Not sure? Book a 30-minute call and we'll figure it out together.",
  },
  {
    number: 2,
    title: "Kickoff (Day 1)",
    description:
      "You answer a few questions about your ICP, tools, and goals. We start building the same day. No multi-week discovery phase.",
  },
  {
    number: 3,
    title: "Build (Days 2-7)",
    description:
      "We configure enrichment waterfalls, signal detection, campaign copy, and CRM integrations. You get progress updates in Slack. No surprises.",
  },
  {
    number: 4,
    title: "Handoff",
    description:
      "You own the system. We walk you through how it works, hand over all credentials and documentation. If something breaks in the first 14 days, we fix it free.",
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    vertical: "B2B SaaS Company, 80 employees",
    signal: "Funding round detection + personalized outreach",
    before: "0.8% reply rate, 2 meetings/month from outbound",
    after: "4.7% reply rate, 14 meetings/month",
    timeline: "System built in 10 days",
  },
  {
    vertical: "Equipment Management SaaS, 15 employees",
    signal: "Hiring signals + multi-channel LinkedIn outreach",
    before: "Tried cold email, cold calling, and paid ads. Nothing stuck.",
    after: "36% reply rate, consistent meetings with decision-makers weekly",
    timeline: "System built in 7 days",
  },
];

// Deprecated: use CASE_STUDIES instead
export const CASE_STUDY = CASE_STUDIES[0];

// ── About ──

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  linkedIn: string;
}

export const ABOUT = {
  title: "Built by Erik Hernal",
} as const;

export const TEAM: TeamMember[] = [
  {
    name: "Erik Hernal",
    role: "Founder",
    initials: "EH",
    bio: "I've built outbound systems for 40+ B2B companies across 47 industries. 10,000+ campaigns. The systems I sell are the same ones I run in production every day.\n\nI'm not a workflow builder who watched a Clay tutorial. I've been in the trenches of B2B outbound for years. Every project I deliver is battle-tested.",
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
    question: "What does pricing look like?",
    answer:
      "Projects range from $750 to $4,000 depending on scope. Everything is fixed-price, no hourly billing. You know exactly what you're paying before we start. Ongoing support starts at $750/month, month-to-month.",
  },
  {
    question: "How is this different from hiring a GTM engineer?",
    answer:
      "A full-time GTM engineer costs $135K/year and takes 3 months to ramp. A project with us costs $750-4,000 and is delivered in 3-10 days. You get the specific system built without the commitment of a hire.",
  },
  {
    question: "How is this different from a Clay agency?",
    answer:
      "Most Clay agencies charge $4-8K/month with 3-month minimums. We charge once per project. You own the system. No dependency, no lock-in.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "Clay, n8n, HubSpot, Salesforce, HeyReach, Smartlead, Instantly, LeadMagic, Findymail, Firecrawl, and Claude AI. If you use it for outbound, we probably integrate with it.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "Every project includes 14 days of free bug fixes after handoff. If you want ongoing optimization, our monthly plans start at $750/month.",
  },
  {
    question: "Do I need my own Clay account?",
    answer:
      "Depends on the project. For enrichment and signal detection, yes. We build inside your workspace so you own everything. For campaign builds, we can use our infrastructure or yours.",
  },
  {
    question: "What results should I expect?",
    answer:
      "That depends on your ICP, your offer, and your market. What we guarantee: the system will be built correctly, the data will be clean, and the infrastructure will work. We don't guarantee specific reply rates because too many variables are outside our control. But our average client sees a 4x lift in reply rates after implementing signal-based outbound.",
  },
];

// ── Comparison Table ──

export interface ComparisonRow {
  label: string;
  hire: string;
  agency: string;
  agentic: string;
}

export const COMPARISON_TABLE: ComparisonRow[] = [
  { label: "Cost", hire: "$135K/year + benefits", agency: "$4-8K/month", agentic: "$750-4,000 one-time" },
  { label: "Timeline", hire: "3 months to ramp", agency: "2-4 weeks", agentic: "3-10 days" },
  { label: "You own it", hire: "If they stay", agency: "Starts over when you leave", agentic: "Yours forever" },
  { label: "Lock-in", hire: "Full-time commitment", agency: "3-month minimums typical", agentic: "None. Pay once." },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Your outbound infrastructure shouldn't take 3 months to build.",
  subheadline: "Pick a project. We'll have it live in days.",
  primaryCta: "See the Menu",
  primaryCtaHref: "#pricing",
  secondaryCta: "Book a Call",
} as const;
