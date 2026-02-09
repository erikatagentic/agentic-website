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
    "Automate your business workflows with AI. Custom pipelines, n8n integrations, and intelligent automation — deployed in days, not months.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agentic.com",
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
  headline: "Automate your workflows with AI",
  subheadline:
    "We design and deploy intelligent automation pipelines that eliminate manual work, reduce errors, and scale with your business — in days, not months.",
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
  { value: "150+", label: "Workflows Automated" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "10x", label: "Average Efficiency Gain" },
  { value: "98%", label: "Client Retention" },
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
    title: "Hours lost to repetitive tasks",
    description:
      "Your team spends more time on manual data entry and handoffs than on work that actually moves the needle.",
  },
  {
    icon: AlertTriangle,
    title: "Errors from manual processes",
    description:
      "Copy-paste workflows, missed steps, and human error cost you time, money, and customer trust.",
  },
  {
    icon: Users,
    title: "Can't scale without hiring",
    description:
      "Growth means more processes, more people, more overhead. There's a ceiling you can't break through manually.",
  },
];

// ── Solution ──

export const SOLUTION = {
  title: "There's a better way.",
  subtitle:
    "We design and deploy AI-powered workflows tailored to your operations. Not templates. Not generic tools. Custom automation built for how your team actually works.",
  differentiator: "Custom AI pipelines — not off-the-shelf templates.",
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
      "End-to-end automation pipelines built on n8n and custom orchestration. We connect your tools, add intelligence, and eliminate manual steps.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    description:
      "Connect LLMs, vector databases, and AI models directly into your existing stack. Salesforce, Slack, HubSpot, databases — we integrate it all.",
  },
  {
    icon: Search,
    title: "Process Intelligence",
    description:
      "We audit your workflows, identify bottlenecks, and prioritize what to automate first for maximum ROI.",
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
      "We audit your current workflows, map dependencies, and identify the highest-impact automation opportunities.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We architect the AI pipeline — choosing the right models, tools, and integrations for your specific use case.",
  },
  {
    number: 3,
    title: "Deploy",
    description:
      "We build, test, and ship your automation into production. Average time to first workflow live: 3 days.",
  },
  {
    number: 4,
    title: "Optimize",
    description:
      "We monitor performance, fine-tune models, and continuously improve your workflows as your needs evolve.",
  },
];

// ── Testimonials (placeholders — replace with real quotes) ──

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Agentic automated our entire onboarding pipeline in under a week. What used to take 4 hours per client now takes 12 minutes.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Placeholder Corp",
  },
  {
    quote:
      "We evaluated three automation vendors. Agentic was the only one that understood our actual workflows instead of trying to sell us a platform.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "Placeholder Inc",
  },
  {
    quote:
      "The ROI was immediate. We reduced manual processing errors by 94% in the first month.",
    author: "Elena Rodriguez",
    role: "Director of Engineering",
    company: "Placeholder Labs",
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
      "Automated lead scoring, CRM enrichment, and follow-up sequences powered by AI.",
    tools: ["Salesforce", "HubSpot", "OpenAI", "Slack"],
    result: "3x increase in qualified pipeline",
  },
  {
    tab: "Customer Support",
    description:
      "Intelligent ticket routing, auto-responses, and escalation workflows.",
    tools: ["Zendesk", "Intercom", "GPT-4", "Slack"],
    result: "67% reduction in first-response time",
  },
  {
    tab: "Finance",
    description:
      "Automated invoice processing, expense categorization, and reporting pipelines.",
    tools: ["QuickBooks", "Stripe", "Google Sheets", "n8n"],
    result: "12 hours saved per week",
  },
  {
    tab: "Engineering",
    description:
      "CI/CD monitoring, incident response automation, and code review triage.",
    tools: ["GitHub", "PagerDuty", "Slack", "Jira"],
    result: "40% faster incident resolution",
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
      "Anything with repeatable steps, data movement between tools, or decision-making that follows rules. Common examples: onboarding flows, data enrichment, report generation, ticket routing, and approval processes.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most workflows go live within 3-5 business days. Complex multi-system integrations may take 1-2 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We integrate with 200+ tools including Salesforce, HubSpot, Slack, Jira, Google Workspace, Notion, databases, and custom APIs. If it has an API, we can connect it.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "We offer project-based pricing for one-time builds and retainer packages for ongoing automation work. Book a demo and we'll scope your specific needs.",
  },
  {
    question: "Do we need AI expertise on our team?",
    answer:
      "No. We handle all the technical implementation. Your team just needs to explain how the workflow works today — we handle the rest.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "We provide monitoring, maintenance, and optimization as part of our service. Workflows are never 'set and forget' — we continuously improve them based on real performance data.",
  },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Ready to automate?",
  subheadline:
    "Book a 30-minute demo and see how AI can transform your operations.",
  cta: "Book a Demo",
  note: "No commitment. No sales pitch. Just a conversation.",
} as const;
