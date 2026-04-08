import {
  Activity,
  Layers,
  Briefcase,
  Server,
  Code,
  BarChart3,
  Users,
  Check,
  X,
  Minus,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

// ── Signal Feed Site Config ──

export const SF_CONFIG = {
  name: "Signal Feed",
  tagline: "Signal-Scored Lead Intelligence",
  calLink: "https://cal.com/agentic/demo",
} as const;

// ── Hero ──

export const SF_HERO = {
  overline: "Signal Feed by Agentic",
  headline: "Stop guessing who to call.",
  subheadline:
    "Signal Feed scores thousands of companies against your exact ICP every month -- website performance, tech stack, hiring patterns -- so your team only reaches out to prospects with real buying signals.",
  primaryCta: "Get Your First Feed",
  secondaryCta: "See a Sample Lead",
  secondaryCtaHref: "#sample-lead",
} as const;

// ── Signal Layers ──

export interface SignalLayer {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export const SIGNAL_LAYERS: SignalLayer[] = [
  {
    icon: Activity,
    title: "Website Performance",
    description:
      "PageSpeed scoring on every domain. Performance, mobile readiness, HTTPS status, load time, accessibility -- all on a 0-100 scale.",
    tag: "Free",
  },
  {
    icon: Layers,
    title: "Tech Stack Detection",
    description:
      "We scan for 6,000+ technologies. CMS, hosting provider, CRM, security tools, analytics, frameworks -- we know what they run and what they're missing.",
    tag: "6,000+ tools",
  },
  {
    icon: Briefcase,
    title: "Hiring Signals",
    description:
      "Active job postings that match your service areas. When a company posts a Network Engineer role, that's your window to call before they hire.",
    tag: "Real-time",
  },
  {
    icon: LayoutGrid,
    title: "Live Airtable Base",
    description:
      "Growth and Scale tiers get a live Airtable base with filters, views, and shareable links. Your whole team works from the same feed.",
    tag: "Growth+",
  },
];

// ── Sample Lead ──

export const SAMPLE_LEAD = {
  company: "Apex Manufacturing Co.",
  location: "Houston, TX",
  employees: 47,
  score: 82,
  primaryMatch: "Managed IT",
  secondaryMatch: "WordPress/CMS",
  signals: {
    website: {
      pageSpeed: 28,
      https: false,
      loadTime: "6.2s",
      mobile: "Not responsive",
    },
    techStack: {
      cms: "WordPress 5.4",
      hosting: "Shared hosting (GoDaddy)",
      cdn: "None",
      monitoring: "None",
      security: "No WAF detected",
    },
    hiring: {
      role: "Network Engineer",
      posted: "April 1, 2026",
      source: "LinkedIn",
    },
  },
  hiringContext:
    "When Apex posts a Network Engineer role, that tells you they're managing infrastructure in-house. That's your outsource window.",
} as const;

// ── Who It's For ──

export interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const AUDIENCES: Audience[] = [
  {
    icon: Server,
    title: "IT & MSP firms",
    description:
      "Find companies hiring IT roles they could outsource to you. Know their infrastructure gaps before the first call.",
  },
  {
    icon: Code,
    title: "Dev shops & agencies",
    description:
      "Spot companies running outdated tech stacks with no engineering team. They need builders -- that's you.",
  },
  {
    icon: BarChart3,
    title: "Marketing agencies",
    description:
      "Identify sites with poor performance scores, no analytics, and zero SEO tooling. Walk in with the audit already done.",
  },
  {
    icon: Users,
    title: "Consultancies",
    description:
      "Surface companies with tool sprawl and no ops team. Fifteen SaaS subscriptions and no one managing them.",
  },
];

// ── Pricing ──

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  leads: string;
  popular?: boolean;
  badgeLabel?: string;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Founder's Rate",
    price: "$297",
    period: "/mo",
    leads: "200 leads",
    popular: true,
    badgeLabel: "5 Spots Left",
    features: [
      "200 signal-scored leads/mo",
      "1 ICP profile",
      "Weekly CSV delivery",
      "Email + phone enrichment",
      "0-100 signal scoring",
      "Price locked for life",
    ],
  },
  {
    name: "Starter",
    price: "$497",
    period: "/mo",
    leads: "500 leads",
    features: [
      "500 signal-scored leads/mo",
      "1 ICP profile",
      "Weekly CSV delivery",
      "Email + phone enrichment",
      "0-100 signal scoring",
      "Service-match tagging",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    period: "/mo",
    leads: "1,500 leads",
    features: [
      "1,500 signal-scored leads/mo",
      "2 ICP profiles",
      "2x/week delivery",
      "Live Airtable base",
      "Priority support",
      "Everything in Starter",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    period: "/mo",
    leads: "5,000 companies",
    features: [
      "5,000 signal-scored companies/mo",
      "Top 2,000 fully enriched",
      "4 ICP profiles",
      "Daily delivery",
      "Dedicated Slack channel",
      "Custom signal tuning",
    ],
  },
];

// ── Comparison ──

export interface ComparisonRow {
  feature: string;
  zoominfo: { value: string; icon: typeof Check | typeof X | typeof Minus };
  apollo: { value: string; icon: typeof Check | typeof X | typeof Minus };
  generic: { value: string; icon: typeof Check | typeof X | typeof Minus };
  signalFeed: { value: string; icon: typeof Check | typeof X | typeof Minus };
}

export const SF_COMPARISON: ComparisonRow[] = [
  {
    feature: "Signal scoring (0-100)",
    zoominfo: { value: "No", icon: X },
    apollo: { value: "No", icon: X },
    generic: { value: "No", icon: X },
    signalFeed: { value: "Yes", icon: Check },
  },
  {
    feature: "Service-matched leads",
    zoominfo: { value: "No", icon: X },
    apollo: { value: "No", icon: X },
    generic: { value: "No", icon: X },
    signalFeed: { value: "Yes", icon: Check },
  },
  {
    feature: "Tech stack detection",
    zoominfo: { value: "Partial", icon: Minus },
    apollo: { value: "No", icon: X },
    generic: { value: "No", icon: X },
    signalFeed: { value: "6,000+ tools", icon: Check },
  },
  {
    feature: "Hiring signals",
    zoominfo: { value: "No", icon: X },
    apollo: { value: "Basic", icon: Minus },
    generic: { value: "No", icon: X },
    signalFeed: { value: "Yes", icon: Check },
  },
  {
    feature: "Custom ICP tuning",
    zoominfo: { value: "No", icon: X },
    apollo: { value: "Filters", icon: Minus },
    generic: { value: "No", icon: X },
    signalFeed: { value: "Yes", icon: Check },
  },
  {
    feature: "Starting price",
    zoominfo: { value: "$15K+/yr", icon: X },
    apollo: { value: "$5K+/yr", icon: Minus },
    generic: { value: "$200/mo", icon: Minus },
    signalFeed: { value: "$297/mo", icon: Check },
  },
];

// ── FAQ ──

export interface SFFAQItem {
  question: string;
  answer: string;
}

export const SF_FAQ_ITEMS: SFFAQItem[] = [
  {
    question: "What data sources do you use?",
    answer:
      "Three layers: Google PageSpeed Insights API for website performance, technographic scanning for 6,000+ technologies (CMS, hosting, CRM, security, frameworks), and LinkedIn job posting data for hiring signals. All sourced ethically and in compliance with each platform's terms.",
  },
  {
    question: "How accurate is the signal scoring?",
    answer:
      "Tech stack detection is powered by 6,000+ technology signatures -- the same database that identifies CMS, hosting, security tools, frameworks, and analytics. Website performance scores come directly from Google's PageSpeed API. Hiring signals are pulled from live job postings. We spot-check every batch before delivery.",
  },
  {
    question: "What format do I get the leads in?",
    answer:
      "CSV by default -- drops straight into any CRM or outreach tool. Growth and Scale tiers also get a live Airtable base with filters, sorting, and a shareable view your whole team can use.",
  },
  {
    question: "Can you score leads against multiple services?",
    answer:
      "Yes. Every lead gets scored against all of your service lines. If a company scores high for both managed IT and WordPress support, we tag it as a multi-service opportunity so you know which angle to lead with.",
  },
  {
    question: "How fast do I get my first feed?",
    answer:
      "7 days from kickoff. We spend the first call nailing down your ICP, build your scoring model, source and score the batch, then deliver. After that, feeds arrive on your chosen schedule (weekly, 2x/week, or daily depending on tier).",
  },
  {
    question: "What if the leads don't convert?",
    answer:
      "Month-to-month, cancel anytime. No annual contracts, no lock-in. If the first batch doesn't outperform what you're currently using, walk away. We'd rather earn your business every month than trap you into a deal.",
  },
];

// ── After Delivery ──

export const SF_AFTER_DELIVERY = {
  overline: "After Delivery",
  headline: "Your feed arrives. Here's what happens next.",
  steps: [
    {
      step: "01",
      title: "Import in one click",
      body: "CSV drops into any CRM, Apollo, Instantly, or HeyReach. Headers match what your tools expect.",
    },
    {
      step: "02",
      title: "Filter by score",
      body: "Sort by signal score. Work the 70+ companies first -- they're showing multiple buying signals, not just one.",
    },
    {
      step: "03",
      title: "Reach out with context",
      body: 'Every lead includes the signal detail. "Apex posted a Network Engineer role on April 1." Lead with that.',
    },
    {
      step: "04",
      title: "Next feed auto-delivers",
      body: "Weekly or 2x/week, depending on tier. You don't do anything. It just shows up.",
    },
  ],
} as const;

// ── Final CTA ──

export const SF_FINAL_CTA = {
  headline: "Your first feed is a week away.",
  subheadline:
    "Book a 20-minute call. We'll nail down your ICP, build your scoring model, and deliver your first batch within 7 days.",
  cta: "Get Your First Feed",
  note: "No contracts. No commitment. If the leads don't convert, walk away.",
} as const;
