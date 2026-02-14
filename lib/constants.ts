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
  headline: "Turn buying signals into booked meetings",
  headlineParts: [
    { text: "Turn buying signals into ", italic: false },
    { text: "booked meetings", italic: true },
  ] as const,
  subheadline:
    "We build Clay-powered outbound systems that detect funding rounds, job changes, and hiring surges, then convert them into qualified pipeline.",
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
  { value: "200+", label: "Campaigns Deployed" },
  { value: "35+", label: "GTM Teams Served" },
  { value: "4.2x", label: "Avg. Reply Rate Lift" },
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
    title: "Spray-and-pray outbound",
    description:
      "You blast the same generic sequence to thousands of prospects. Reply rates sit below 1%, and your team burns hours on leads who were never going to buy.",
  },
  {
    icon: Radio,
    title: "Missed buying signals",
    description:
      "Prospects raise funding, switch jobs, and adopt new tools every day. By the time your team notices, a competitor already booked the meeting.",
  },
  {
    icon: TrendingUp,
    title: "Scale kills quality",
    description:
      "Personalized outreach works, but it takes 15 minutes per prospect. Your SDRs choose between volume and relevance. They shouldn't have to.",
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
}

export const SERVICES: ServiceCard[] = [
  {
    icon: Database,
    title: "Clay Workflow Automation",
    description:
      "Signal monitoring, enrichment waterfalls, and lead scoring tables built in Clay. We connect 150+ data providers and route qualified prospects directly into your sequences.",
  },
  {
    icon: Radar,
    title: "GTM Data Infrastructure",
    description:
      "ICP definition, CRM enrichment, and account scoring pipelines. Clean data in, qualified leads out. We integrate Clay with HubSpot, Salesforce, and your existing stack.",
  },
  {
    icon: Mail,
    title: "Outbound Campaign Design",
    description:
      "Signals-based campaigns that pair the right trigger with the right message. Funding rounds, job changes, hiring surges, tech stack shifts. Each signal gets its own playbook.",
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

// ── Testimonials ──

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Agentic built our entire signals-based outbound system in 10 days. We went from 0.8% reply rates to 4.7% in the first month. Our SDRs now spend time on calls instead of research.",
    author: "Sarah Chen",
    role: "VP of Revenue Operations",
    company: "Meridian SaaS",
  },
  {
    quote:
      "We tried building Clay workflows ourselves for three months. Agentic rebuilt everything in a week and our demo-to-opportunity conversion doubled. The signal targeting alone was worth it.",
    author: "Marcus Webb",
    role: "Head of Growth",
    company: "Trellus Health",
  },
  {
    quote:
      "Our funding signal campaign books 12 meetings per month on autopilot. Agentic connected Clay, HubSpot, and our email platform into one system that runs without us touching it.",
    author: "Elena Vasquez",
    role: "Director of Sales Development",
    company: "Canopy Financial",
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
      "Campaign builds start at $5,000 for a single signal workflow. Retainer packages for ongoing campaign management and optimization start at $8,000/month. Every engagement starts with a free 30-minute scoping call where we map your highest-impact signal opportunity.",
  },
  {
    question: "How is this different from hiring another SDR?",
    answer:
      "An SDR costs $60-80K per year and manually researches 30-50 prospects per day. A Clay-powered signal system monitors thousands of accounts continuously, enriches every match automatically, and triggers personalized outreach around the clock. You get 10x the volume at a fraction of the cost, and your SDRs focus on conversations instead of data entry.",
  },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Your competitors are already using signals.",
  subheadline:
    "Book a 30-minute call and we'll map your highest-value signal campaign — free.",
  cta: "Book a Demo",
  note: "No commitment required. No sales deck. Just a technical conversation about your pipeline.",
} as const;
