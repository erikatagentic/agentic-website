import {
  Workflow,
  Plug,
  Search,
  Clock,
  AlertTriangle,
  Users,
  type LucideIcon,
} from "lucide-react";

// ── Site Config ──

export const SITE_CONFIG = {
  name: "Agentic",
  tagline: "AI Workflow Automation",
  description:
    "We build custom AI automation pipelines that eliminate manual work and deploy in days. n8n workflows, LLM integrations, and process intelligence for operations teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heyagentic.ai",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/agentic/demo",
} as const;

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
  headline: "Ship AI workflows in days, not quarters",
  subheadline:
    "We build and deploy custom automation pipelines that cut manual ops work by 80% — live in your stack within 5 business days.",
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
  { value: "48+", label: "Client Engagements" },
  { value: "11", label: "Industries Served" },
  { value: "8.2x", label: "Avg. Efficiency Gain" },
  { value: "96%", label: "Client Retention" },
];

// ── Problem ──

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: Clock,
    title: "You bought the tools. They sit unused.",
    description:
      "You signed up for Zapier, explored Make, maybe even spun up n8n. But connecting the dots across your actual workflows — with the right AI models, error handling, and edge cases — requires more than a free trial.",
  },
  {
    icon: AlertTriangle,
    title: "Your pilots never made it to production",
    description:
      "The proof-of-concept worked in a demo. But 85% of AI pilots stall before launch because nobody planned for data quality, team adoption, or what happens when the model gets it wrong.",
  },
  {
    icon: Users,
    title: "Scaling still means hiring",
    description:
      "Every new client, campaign, or product line adds manual work. You keep hiring ops people for tasks that don't require human judgment — and your margins shrink with every headcount.",
  },
];

// ── Solution ──

export const SOLUTION = {
  title: "Stop paying to experiment.",
  subtitle:
    "We're workflow specialists first, AI specialists second. We start by understanding how your team actually works — where time is lost, what slows things down — then build pipelines that handle the repetitive 80% while your team focuses on the work that matters.",
  differentiator:
    "We don't hand off and vanish. We build it, deploy it, and train your team to run it.",
} as const;

// ── Services ──

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceCard[] = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Eliminate 20+ hours of manual work per week with n8n pipelines that connect your CRM, databases, and communication tools — with LLMs handling the decisions humans used to make.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    description:
      "Connect GPT-4, Claude, and vector databases directly into Salesforce, HubSpot, Slack, or your internal tools. Average integration ships in 48 hours, not 3 months.",
  },
  {
    icon: Search,
    title: "Process Intelligence",
    description:
      "We audit your operations, identify which workflows burn the most hours, and deliver a prioritized automation roadmap. Most teams find 40% of their tasks are automatable on day one.",
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
      "A 90-minute deep-dive into your workflows. We map every tool, handoff, and decision point — then deliver a prioritized automation scorecard within 24 hours.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We architect your pipeline: data flows, LLM prompts, error handling, and fallback logic. You approve a visual blueprint before we write a single line of code.",
  },
  {
    number: 3,
    title: "Deploy",
    description:
      "We build, test, and ship your automation into production on your infrastructure. First workflow goes live within 5 business days — with monitoring from day one.",
  },
  {
    number: 4,
    title: "Optimize",
    description:
      "Weekly performance reports, prompt tuning, and workflow expansion. Our clients automate 3 additional workflows within the first 60 days on average.",
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
      "We onboarded 3x more clients last quarter without adding headcount. Agentic automated our entire intake pipeline — what took 4 hours per client now runs in 11 minutes.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Meridian Partners",
  },
  {
    quote:
      "Other vendors wanted to sell us their platform. Agentic sat in our Slack, watched how we actually worked, and built around it. Our team adopted it on day one because nothing changed except the busywork disappeared.",
    author: "Marcus Webb",
    role: "CTO",
    company: "Trellus Health",
  },
  {
    quote:
      "We cut invoice processing errors from 6.3% to 0.4% in the first month. The finance team went from dreading month-end close to finishing it two days early.",
    author: "Elena Vasquez",
    role: "Director of Engineering",
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
    tab: "Sales Ops",
    description:
      "AI scores inbound leads, enriches CRM records from LinkedIn and Clearbit, and triggers personalized follow-up sequences — all before your rep opens their laptop.",
    tools: ["HubSpot", "Clay", "Claude", "Slack"],
    result: "2.8x increase in qualified pipeline",
  },
  {
    tab: "Customer Support",
    description:
      "Incoming tickets get classified, routed to the right team, and auto-drafted with context-aware responses. Escalations trigger Slack alerts with full conversation history.",
    tools: ["Intercom", "Linear", "Claude", "Slack"],
    result: "71% reduction in first-response time",
  },
  {
    tab: "Finance",
    description:
      "Invoices get extracted, categorized, matched to POs, and flagged for exceptions — no spreadsheets involved. Monthly close goes from 5 days to 2.",
    tools: ["QuickBooks", "Stripe", "Google Sheets", "n8n"],
    result: "14 hours saved per week",
  },
  {
    tab: "Engineering",
    description:
      "CI failures get triaged by an LLM that reads logs, suggests fixes, and routes to the right engineer. Incident response runbooks execute automatically.",
    tools: ["GitHub", "PagerDuty", "Slack", "Linear"],
    result: "47% faster incident resolution",
  },
];

// ── FAQ ──

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What kinds of workflows can you automate?",
    answer:
      "Anything with repeatable steps, data movement between tools, or decisions that follow patterns. Our most common projects: lead enrichment and routing, invoice processing, employee onboarding, ticket triage, report generation, and approval workflows. If your team does it more than 10 times a week, it's probably automatable.",
  },
  {
    question: "How long until our first workflow is live?",
    answer:
      "5 business days for most workflows. We scope everything in a 90-minute discovery call, so there are no surprises. Complex multi-system integrations with custom LLM logic may take 2-3 weeks.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We build on n8n and custom orchestration, which connects to 400+ tools natively — Salesforce, HubSpot, Slack, Jira, Google Workspace, Notion, Postgres, and any REST or GraphQL API. If it has an API, we connect it.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Project-based pricing starts at $4,500 for a single workflow pipeline. Retainer packages for ongoing automation work start at $8,000/month. Every engagement begins with a free 30-minute scoping call — you know exactly what you're paying for before we start.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer:
      "Every pipeline includes validation checkpoints, human-in-the-loop approval for high-stakes decisions, and automated error alerting. We design for failure — when something unexpected happens, the workflow flags it and routes to a human instead of guessing. Our production error rate is under 0.5%.",
  },
  {
    question: "We've tried AI before and it didn't work. Why is this different?",
    answer:
      "Most teams fail because they start with the wrong use case, stop at the prototype stage, or try to do it themselves with generic tools. We focus only on workflows worth automating, stay through production deployment, and train your team on the finished system. We don't hand off slide decks — we hand off working pipelines.",
  },
  {
    question: "Do we need AI or engineering expertise on our team?",
    answer:
      "No. We handle architecture, implementation, and maintenance. Your team explains the workflow as it works today — we build the automation. After handoff, your ops team monitors everything through a visual dashboard with documentation and a walkthrough.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "We monitor performance weekly, tune LLM prompts based on real outputs, and expand your automation scope over time. Retainer clients automate an average of 3 new workflows in the first 60 days. Workflows aren't 'set and forget' — they get smarter as your business evolves.",
  },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Your competitors are already automating.",
  subheadline:
    "Book a 30-minute call and we'll map your highest-impact automation opportunity — free.",
  cta: "Book a Demo",
  note: "No commitment required. No sales deck. Just a technical conversation about your workflows.",
} as const;
