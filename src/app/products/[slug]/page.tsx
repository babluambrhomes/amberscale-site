import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiMaximize2,
  FiLayers,
  FiShield,
  FiActivity,
  FiCpu,
  FiTerminal,
  FiServer,
  FiLock,
  FiEye,
  FiCrosshair,
  FiSearch,
  FiUsers,
  FiTrendingUp,
  FiCompass,
  FiFileText,
  FiDollarSign,
  FiRefreshCw,
  FiClock,
} from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import FinalCTA from "@/components/FinalCTA";
import ProductCard from "@/components/ProductCard";
import ProductFaqs from "@/components/ProductFaqs";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatusChip from "@/components/StatusChip";
import GiantBrand from "@/components/GiantBrand";
import SplitWords from "@/components/interactions/SplitWords";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Products — AmbrScale`,
    description: product.desc,
  };
}

interface ProductConfig {
  eyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  statusLine: string;
  problemTitle: string;
  problemHighlight: string;
  problemDescription: string;
  principleLabel: string;
  principleTitle: string;
  principleSubtitle: string;
  appBarDomain: string;
  appTag: string;
  appTagline: string;
  capabilitiesHeading: string;
  capabilitiesHighlight: string;
  capabilitiesDescription: string;
  principlesStrip: { title: string; desc: string }[];
  stats: { value: string; label: string; highlight: boolean }[];
  features: { title: string; desc: string; badge: string; icon: any }[];
  stack: string[];
  highlightTag: string;
  whoItIsForHeading: string;
  whoItIsForHighlight: string;
  whoItIsForDescription: string;
  whoItIsFor: { role: string; benefit: string; icon: any }[];
  workflowHeading: string;
  workflowHighlight: string;
  workflowDescription: string;
  workflow: { stage: string; action: string; desc: string }[];
  stewardshipHeading: string;
  stewardshipHighlight: string;
  stewardshipDescription: string;
  stewardshipPoints: string[];
  roadmapTitle: string;
  roadmapDescription: string;
  roadmapPhase: string;
  faqs: { q: string; a: string }[];
  finalCtaHeading: string;
  finalCtaHighlight: string;
  finalCtaDescription: string;
  finalCtaButton: string;
}

const productConfigs: Record<string, ProductConfig> = {
  fluxboard: {
    eyebrow: "✦ PRODUCT ANALYTICS",
    heroHeadline: "See what your product is doing. Decide what to do next.",
    heroDescription:
      "Fluxboard turns product behaviour into a clear, real-time view of what is happening across your product — so teams can spot changes, investigate signals and make decisions with more context.",
    statusLine: "Built by AmbrScale · In development",
    problemTitle: "Finding the signal",
    problemHighlight: "should not take all day",
    problemDescription:
      "Product teams have more behavioural data than ever: events, sessions, funnels, retention, performance and usage patterns. The problem is rarely a lack of data. It is knowing what changed, why it matters and where to look next.",
    principleLabel: "THE FLUXBOARD PRINCIPLE",
    principleTitle: "From raw events to useful decisions.",
    principleSubtitle: "A live picture of product behaviour designed around the moment after the number appears.",
    appBarDomain: "app.fluxboard.internal/workspace",
    appTag: "PRODUCT WORKSPACE · FLUXBOARD",
    appTagline: "signal over noise ✦",
    capabilitiesHeading: "Less dashboard.",
    capabilitiesHighlight: "More decision.",
    capabilitiesDescription:
      "A metric is useful when it changes what a team does. Fluxboard focuses on making signals easier to see, understand and act on.",
    principlesStrip: [
      { title: "Signal over noise.", desc: "Surface what deserves attention before it gets lost in reporting cycles." },
      { title: "Context over vanity.", desc: "Numbers need surrounding behaviour and user context to mean something." },
      { title: "Action over observation.", desc: "The end goal is not watching charts — the end goal is a better decision." },
    ],
    stats: [
      { value: "2M+", label: "events processed / day (simulated)", highlight: true },
      { value: "<1 min", label: "data freshness", highlight: false },
      { value: "100%", label: "in-house product ownership", highlight: false },
      { value: "Weekly", label: "release & learning cadence", highlight: false },
    ],
    features: [
      {
        title: "Live product activity",
        desc: "See what is happening now, not only what happened in last week's report. Real-time telemetry without waiting for reporting cycles.",
        badge: "01 · See",
        icon: FiEye,
      },
      {
        title: "Behaviour at a glance",
        desc: "Understand changes across usage, sessions and product activity without losing the bigger picture. Surface meaningful shifts instantly.",
        badge: "02 · Spot",
        icon: FiCrosshair,
      },
      {
        title: "Investigate the signal",
        desc: "Move from a surprising number to the behaviour around it — and build a clearer hypothesis about what is happening.",
        badge: "03 · Investigate",
        icon: FiSearch,
      },
      {
        title: "A shared product view",
        desc: "Give product, growth, design and leadership a common language so team conversations start from the same evidence.",
        badge: "04 · Share",
        icon: FiUsers,
      },
    ],
    stack: ["Next.js 14", "TypeScript", "ClickHouse", "Tailwind CSS", "Redis", "Vercel Edge"],
    highlightTag: "Product Analytics Engine",
    whoItIsForHeading: "For people responsible for",
    whoItIsForHighlight: "what happens next",
    whoItIsForDescription:
      "Designed for founders, product leads, and growth teams who need behavioural evidence rather than another static dashboard.",
    whoItIsFor: [
      {
        role: "Product Managers",
        benefit: "Understand behaviour, investigate changes and decide what deserves attention.",
        icon: FiLayers,
      },
      {
        role: "Growth Teams",
        benefit: "Connect product activity to acquisition, activation and retention signals.",
        icon: FiTrendingUp,
      },
      {
        role: "Design & Research",
        benefit: "Use behavioural evidence to understand where experiences are working — and where they are not.",
        icon: FiCompass,
      },
      {
        role: "Founders & Operators",
        benefit: "See the health of the product without asking five teams for five different reports.",
        icon: FiShield,
      },
    ],
    workflowHeading: "From something changed to",
    workflowHighlight: "something worth doing",
    workflowDescription: "How Fluxboard integrates into a team's real daily operating rhythm.",
    workflow: [
      { stage: "01", action: "Observe", desc: "A meaningful change appears in product behaviour in real time." },
      { stage: "02", action: "Investigate", desc: "The team looks at the surrounding usage and behavioural context." },
      { stage: "03", action: "Interpret", desc: "The signal becomes a hypothesis about what may be happening." },
      { stage: "04", action: "Decide", desc: "The team chooses whether the signal deserves immediate action." },
      { stage: "05", action: "Measure", desc: "The team watches what happens after the decision is deployed." },
    ],
    stewardshipHeading: "Built inside AmbrScale.",
    stewardshipHighlight: "Owned by AmbrScale.",
    stewardshipDescription:
      "Fluxboard is one of the products we are building as part of AmbrScale. Product strategy, design and engineering stay close to the team building it, so decisions can move quickly and learning can move back into the product.",
    stewardshipPoints: [
      "Built inside AmbrScale. Owned 100% by AmbrScale.",
      "Product strategy, design and engineering stay close to the problem.",
      "Weekly continuous learning and release cycles driven by real telemetry.",
      "Built with ownership from the first product question to what happens after launch.",
    ],
    roadmapTitle: "Still building. Still learning.",
    roadmapDescription:
      "Fluxboard is being developed in close contact with the problems product teams face every day. The product will change as we learn what is genuinely useful in the real world.",
    roadmapPhase: "EARLY ACCESS LIST OPEN",
    faqs: [
      {
        q: "What is Fluxboard?",
        a: "Fluxboard is a product analytics workspace designed to help teams see meaningful changes in product behaviour, investigate signals and make better decisions.",
      },
      {
        q: "Who is Fluxboard for?",
        a: "Fluxboard is designed for product teams, founders, growth teams and operators who need a clearer view of product behaviour.",
      },
      {
        q: "Is Fluxboard live?",
        a: "Fluxboard is currently in active development inside AmbrScale with early access being opened gradually to select product teams.",
      },
      {
        q: "How does Fluxboard differ from other analytics tools?",
        a: "Fluxboard is built around the decision that follows the metric: seeing the signal, understanding its context and deciding whether it deserves action — rather than just generating another dashboard.",
      },
      {
        q: "Can I get access?",
        a: "Yes. Request early access and tell us a little about your product and what you want to understand. We review requests and onboard teams gradually.",
      },
    ],
    finalCtaHeading: "Want to see what the",
    finalCtaHighlight: "signal is telling you?",
    finalCtaDescription:
      "Tell us what you are trying to understand about your product. We are opening Fluxboard gradually as we build and learn.",
    finalCtaButton: "Get early access →",
  },
  payreach: {
    eyebrow: "✦ BILLING & PAYOUTS",
    heroHeadline: "Billing and payouts for businesses growing beyond manual workflows.",
    heroDescription:
      "PayReach helps growing companies manage recurring billing, invoicing and payouts from one place — so finance operations stay organised as customers, transactions and teams grow.",
    statusLine: "Built by AmbrScale · In development",
    problemTitle: "As revenue grows, billing",
    problemHighlight: "gets harder to keep simple",
    problemDescription:
      "Subscriptions create recurring charges. Customers need invoices. Teams need payment records. Finance needs to know what was billed, what was paid and what still needs attention. Early on, these jobs live across spreadsheets, payment tools and manual processes. As a company grows, the gaps between those systems become operational work of their own. PayReach is built to bring that workflow closer together.",
    principleLabel: "THE PAYREACH PRINCIPLE",
    principleTitle: "Less reconciliation. More control.",
    principleSubtitle: "One place to manage the money moving through your business.",
    appBarDomain: "app.payreach.internal/billing",
    appTag: "FINANCE WORKSPACE · PAYREACH",
    appTagline: "clarity over complexity ✦",
    capabilitiesHeading: "Billing infrastructure should reduce work,",
    capabilitiesHighlight: "not create another system.",
    capabilitiesDescription:
      "PayReach is designed around the operational reality behind payments: billing rules, customer records, invoices, payment status, reconciliation and payouts all need to make sense together.",
    principlesStrip: [
      { title: "Clarity over complexity.", desc: "Financial workflows should be understandable to the people operating them." },
      { title: "Control over chaos.", desc: "Teams need a reliable operational view as transaction volume grows." },
      { title: "Built for the next stage.", desc: "The system should support a business as its billing operation becomes more sophisticated." },
    ],
    stats: [
      { value: "99.9%", label: "ledger accuracy target", highlight: true },
      { value: "<2 min", label: "median reconciliation time", highlight: false },
      { value: "100%", label: "in-house product ownership", highlight: false },
      { value: "Weekly", label: "iteration & release cadence", highlight: false },
    ],
    features: [
      {
        title: "Recurring billing",
        desc: "Make recurring revenue easier to manage. Define billing workflows, keep customer charges organised and reduce manual work around recurring revenue.",
        badge: "01 · Bill",
        icon: FiRefreshCw,
      },
      {
        title: "Invoicing in context",
        desc: "Give your team a consistent place to create, track and understand invoices across the customer lifecycle with complete clarity.",
        badge: "02 · Invoice",
        icon: FiFileText,
      },
      {
        title: "Payment tracking",
        desc: "See payment status clearly so your team spends less time searching for answers across disconnected spreadsheets and portals.",
        badge: "03 · Collect",
        icon: FiActivity,
      },
      {
        title: "Payout operations",
        desc: "Manage supported payout workflows with clearer records, reliable ledgers and fewer unnecessary operational handoffs.",
        badge: "04 · Pay out",
        icon: FiDollarSign,
      },
    ],
    stack: ["React", "Go", "PostgreSQL", "Tailwind CSS", "Redis", "AWS KMS"],
    highlightTag: "Billing & Payouts Engine",
    whoItIsForHeading: "Built for businesses where revenue",
    whoItIsForHighlight: "happens more than once",
    whoItIsForDescription:
      "Designed for subscription businesses, SaaS platforms, and growing finance teams needing clean operational control.",
    whoItIsFor: [
      {
        role: "Subscription Businesses",
        benefit: "Manage recurring billing without building the entire operational layer yourself.",
        icon: FiRefreshCw,
      },
      {
        role: "SaaS Companies",
        benefit: "Keep customer billing and finance operations connected as the product scales.",
        icon: FiLayers,
      },
      {
        role: "Marketplaces & Platforms",
        benefit: "Coordinate money moving between customers, the business and payout recipients.",
        icon: FiDollarSign,
      },
      {
        role: "Growing Finance Teams",
        benefit: "Reduce scattered billing work and create a clearer, single source of operational truth.",
        icon: FiShield,
      },
    ],
    workflowHeading: "From recurring charge to",
    workflowHighlight: "reconciled record",
    workflowDescription: "How PayReach organizes the operational money movement lifecycle.",
    workflow: [
      { stage: "01", action: "Bill", desc: "Set up recurring or one-time billing according to the supported business model." },
      { stage: "02", action: "Invoice", desc: "Create and organise invoices so customers and internal teams have a clear record." },
      { stage: "03", action: "Collect", desc: "Track the payment state and identify what has been paid, pending or needs attention." },
      { stage: "04", action: "Reconcile", desc: "Keep billing activity and payment records easier to understand and manage." },
      { stage: "05", action: "Pay out", desc: "Manage supported payout workflows with a clear operational view." },
    ],
    stewardshipHeading: "Built inside AmbrScale.",
    stewardshipHighlight: "Built to stand on its own.",
    stewardshipDescription:
      "PayReach is one of the products being developed inside AmbrScale. The team brings product, design, engineering and business thinking together to build the system and learn from its real-world use.",
    stewardshipPoints: [
      "Built inside AmbrScale. Built to stand on its own.",
      "Built with ownership from billing setup through what happens after payment.",
      "Strict data separation and operational access controls.",
      "Engineered for clarity and dependability over hype.",
    ],
    roadmapTitle: "Building the infrastructure behind better billing.",
    roadmapDescription:
      "PayReach is being developed around the operational needs of growing businesses. We are validating the workflows, the product experience and the problems that matter most before expanding the system.",
    roadmapPhase: "EARLY ACCESS LIST OPEN",
    faqs: [
      {
        q: "What is PayReach?",
        a: "PayReach is a billing and payout product designed to help growing businesses manage recurring billing, invoicing, payment tracking and supported payout workflows.",
      },
      {
        q: "Who is PayReach for?",
        a: "PayReach is designed for businesses with recurring or complex billing operations, including SaaS and subscription-led companies where supported.",
      },
      {
        q: "What does PayReach handle?",
        a: "The current capability set covers recurring billing workflows, invoicing, payment status tracking, reconciliation records and supported payout operations.",
      },
      {
        q: "Is PayReach live?",
        a: "PayReach is currently in active development inside AmbrScale with early access onboarding for select growing businesses.",
      },
      {
        q: "How does PayReach handle security?",
        a: "PayReach is architected with strict access controls, end-to-end encryption for sensitive data, detailed immutable audit logs, and dedicated operational isolation.",
      },
    ],
    finalCtaHeading: "Ready to make billing",
    finalCtaHighlight: "easier to operate?",
    finalCtaDescription:
      "Tell us what you are billing today, where the process breaks down and what you want to make simpler.",
    finalCtaButton: "Get early access →",
  },
  mailflow: {
    eyebrow: "✦ PRODUCT EMAIL",
    heroHeadline: "Email that follows the product, not the campaign calendar.",
    heroDescription:
      "Mailflow helps product teams design, trigger and manage transactional and lifecycle email around what users actually do — from the first interaction to the moments that keep them engaged.",
    statusLine: "BETA · Built by AmbrScale",
    problemTitle: "Most product email is treated like messaging.",
    problemHighlight: "It should be treated like part of the product.",
    problemDescription:
      "A user signs up. They verify an account. They complete a milestone. Something goes wrong. A payment changes. A feature becomes relevant. They come back after a period away. Each moment creates a communication opportunity. But product teams often end up stitching together templates, triggers, events and delivery logic across disconnected tools. Mailflow is built around the moments that happen inside the product.",
    principleLabel: "THE MAILFLOW PRINCIPLE",
    principleTitle: "Your product decides when the email matters.",
    principleSubtitle:
      "Turn product events into useful conversations with intentional timing and consistent experience.",
    appBarDomain: "app.mailflow.internal/events",
    appTag: "PRODUCT EMAIL WORKSPACE · MAILFLOW",
    appTagline: "event first, message second ✦",
    capabilitiesHeading: "Email should know",
    capabilitiesHighlight: "why it is being sent.",
    capabilitiesDescription:
      "Mailflow is built around the connection between product behaviour and communication. Instead of treating email as a separate broadcast channel, it treats email as another layer of the product experience.",
    principlesStrip: [
      { title: "Event first.", desc: "The product creates the context." },
      { title: "Message second.", desc: "Communication follows the context." },
      { title: "Experience always.", desc: "The email should feel like part of the product, not an interruption." },
    ],
    stats: [
      { value: "Event", label: "driven trigger pipeline", highlight: true },
      { value: "BETA", label: "active workflow testing", highlight: false },
      { value: "100%", label: "in-house product ownership", highlight: false },
      { value: "Weekly", label: "iteration & learning cadence", highlight: false },
    ],
    features: [
      {
        title: "Event-triggered email",
        desc: "Start with what happened. Connect communication to the events and actions that actually happen inside your product.",
        badge: "01 · Trigger",
        icon: FiZap,
      },
      {
        title: "Timing with intent",
        desc: "Send it when it makes sense. Add the timing and sequence logic needed to make a message feel useful instead of automatic.",
        badge: "02 · Timing",
        icon: FiClock,
      },
      {
        title: "On-brand templates",
        desc: "Keep every message on-brand. Build reusable email templates that feel like part of the same product experience.",
        badge: "03 · Templates",
        icon: FiFileText,
      },
      {
        title: "Lifecycle & transactional",
        desc: "Build beyond the first email. Support operational messages users depend on and create sequences that evolve with the customer.",
        badge: "04 · Lifecycle",
        icon: FiActivity,
      },
    ],
    stack: ["TypeScript", "Next.js", "Event Bus", "Node.js", "Redis", "Tailwind CSS"],
    highlightTag: "Product Email Platform",
    whoItIsForHeading: "Built for teams that care about",
    whoItIsForHighlight: "what happens after the click",
    whoItIsForDescription:
      "Designed for product, growth, engineering and operating teams building software where communication is part of the customer journey.",
    whoItIsFor: [
      {
        role: "Product Teams",
        benefit: "Design lifecycle communication as part of the product experience, not as an afterthought.",
        icon: FiLayers,
      },
      {
        role: "Growth Teams",
        benefit: "Build timely journeys around activation, engagement and retention events.",
        icon: FiTrendingUp,
      },
      {
        role: "Developers",
        benefit: "Connect application events to reliable email workflows without turning every message into a custom implementation.",
        icon: FiTerminal,
      },
      {
        role: "Founders & Operators",
        benefit: "Understand the customer communication layer without managing a pile of disconnected workflows.",
        icon: FiShield,
      },
    ],
    workflowHeading: "From product event to",
    workflowHighlight: "meaningful customer conversation",
    workflowDescription: "How Mailflow connects application moments to deliberate, timely communication.",
    workflow: [
      { stage: "01", action: "Event", desc: "Something happens inside the product — signup, action, milestone, failure, renewal or another supported event." },
      { stage: "02", action: "Trigger", desc: "Mailflow determines which communication should follow the event." },
      { stage: "03", action: "Timing", desc: "The team controls when the message should arrive instead of sending everything immediately." },
      { stage: "04", action: "Message", desc: "The email is generated from the appropriate template, data and context." },
      { stage: "05", action: "Measure", desc: "The team learns what happens next and improves the communication flow." },
    ],
    stewardshipHeading: "Built inside AmbrScale.",
    stewardshipHighlight: "Designed around the product experience.",
    stewardshipDescription:
      "Mailflow is one of the products being developed inside AmbrScale. The team brings product, design and engineering together to explore a simple question: what would email look like if it were designed as part of the product from the beginning?",
    stewardshipPoints: [
      "Built inside AmbrScale. Designed around the product experience.",
      "Built around the product experience from event to message.",
      "Predictable delivery states, clear logs, and developer-first ergonomics.",
      "Currently in active beta with live product teams.",
    ],
    roadmapTitle: "We're building Mailflow with the people who will use it.",
    roadmapDescription:
      "Mailflow is currently in beta. We are using this stage to test the workflows, refine the product experience and learn which parts of product email deserve to be simpler.",
    roadmapPhase: "BETA LIST OPEN",
    faqs: [
      {
        q: "What is Mailflow?",
        a: "Mailflow is a product email platform designed to connect product events with transactional and lifecycle communication.",
      },
      {
        q: "Who is Mailflow for?",
        a: "Mailflow is designed for product teams, growth teams, developers and operators building products where communication is part of the customer experience.",
      },
      {
        q: "How does Mailflow trigger an email?",
        a: "Mailflow connects supported product events to configured communication workflows, including timing and message rules.",
      },
      {
        q: "What types of email does it support?",
        a: "The current positioning covers transactional, event-triggered, and lifecycle email workflows.",
      },
      {
        q: "Is Mailflow live?",
        a: "Mailflow is currently in beta. We are using this stage to test the workflows, refine the product experience and learn which parts of product email deserve to be simpler.",
      },
      {
        q: "Can I join the beta?",
        a: "Yes. Use the beta CTA to request access and tell us about the product communication workflows you are trying to improve.",
      },
    ],
    finalCtaHeading: "Your product has",
    finalCtaHighlight: "something to say.",
    finalCtaDescription:
      "If you are building lifecycle or transactional communication into a product, tell us what you are trying to make better. We are opening Mailflow gradually as we build and learn.",
    finalCtaButton: "Join the beta →",
  },
  "orbit-cms": {
    eyebrow: "✦ HEADLESS CONTENT ENGINE",
    heroHeadline: "A surprisingly fast content engine.",
    heroDescription:
      "The content layer behind our flagship stack — versioned, headless and absurdly quick.",
    statusLine: "Built by AmbrScale · In development",
    problemTitle: "Content editing should not",
    problemHighlight: "slow down product releases",
    problemDescription:
      "Traditional CMS platforms add weight, slow down page performance, and create rigid schemas. Orbit CMS brings git-style workflows to editorial teams.",
    principleLabel: "THE ORBIT PRINCIPLE",
    principleTitle: "Instant edge distribution.",
    principleSubtitle: "Sub-50ms worldwide cache propagation with atomic invalidation.",
    appBarDomain: "app.orbitcms.internal/content",
    appTag: "CONTENT ENGINE · ORBIT",
    appTagline: "speed and structure ✦",
    capabilitiesHeading: "Versioned and headless.",
    capabilitiesHighlight: "Built for speed.",
    capabilitiesDescription:
      "Type-safe GraphQL APIs, branch staging previews, and automated schema generation.",
    principlesStrip: [
      { title: "Edge native.", desc: "Atomic worldwide cache invalidation in sub-50ms." },
      { title: "Git-style staging.", desc: "Preview entire campaign branches on live preview URLs." },
      { title: "Type safety.", desc: "Autogenerated TypeScript definitions for your frontend." },
    ],
    stats: [
      { value: "<50ms", label: "global edge replication", highlight: true },
      { value: "100%", label: "type-safe GraphQL schemas", highlight: false },
      { value: "100%", label: "in-house product ownership", highlight: false },
      { value: "Q1 '27", label: "public launch roadmap", highlight: false },
    ],
    features: [
      {
        title: "Instant Edge Distribution",
        desc: "Content changes replicate worldwide in <50ms with atomic instant cache invalidation.",
        badge: "01 · Speed",
        icon: FiZap,
      },
      {
        title: "Branching & Draft Staging",
        desc: "Git-style branch previews for editorial teams to review entire campaigns before publishing.",
        badge: "02 · Workflow",
        icon: FiTerminal,
      },
      {
        title: "Type-Safe GraphQL API",
        desc: "Autogenerated schemas and TypeScript definitions that make frontend integration frictionless.",
        badge: "03 · Developer API",
        icon: FiLayers,
      },
      {
        title: "Media Asset Pipeline",
        desc: "Automated WebP/AVIF compression and responsive image delivery at the edge.",
        badge: "04 · Media",
        icon: FiServer,
      },
    ],
    stack: ["TypeScript", "GraphQL", "Next.js", "Edge Caching", "PostgreSQL"],
    highlightTag: "Edge Content Engine",
    whoItIsForHeading: "For modern editorial and engineering",
    whoItIsForHighlight: "teams",
    whoItIsForDescription:
      "Publishers, web product teams, and creators who need instantaneous global speed.",
    whoItIsFor: [
      { role: "Editorial Teams", benefit: "Collaborative staging, live preview branches, and rich structured editing.", icon: FiLayers },
      { role: "Frontend Engineers", benefit: "Type-safe APIs with instant global edge caching.", icon: FiTerminal },
      { role: "SEO & Growth", benefit: "Zero CLS, instant page loads, and structured metadata out of the box.", icon: FiTrendingUp },
      { role: "Designers", benefit: "Component-driven layout blocks adhering to your design system.", icon: FiCompass },
    ],
    workflowHeading: "From editorial draft to",
    workflowHighlight: "worldwide deployment",
    workflowDescription: "Instant git-style publishing lifecycle.",
    workflow: [
      { stage: "01", action: "Draft", desc: "Create structured content with flexible custom schemas." },
      { stage: "02", action: "Preview", desc: "Test on live staging URLs with isolated preview branches." },
      { stage: "03", action: "Publish", desc: "Instant worldwide propagation across edge CDN in sub-50ms." },
    ],
    stewardshipHeading: "Built inside AmbrScale.",
    stewardshipHighlight: "Owned by AmbrScale.",
    stewardshipDescription:
      "Orbit CMS powers the content infrastructure for all AmbrScale products and web properties.",
    stewardshipPoints: [
      "Built inside AmbrScale. Owned 100% by AmbrScale.",
      "Zero third-party database dependencies.",
      "Designed for ultra-fast multi-channel publishing.",
      "Hardened in production.",
    ],
    roadmapTitle: "In active development.",
    roadmapDescription: "Powering internal content workflows ahead of public availability.",
    roadmapPhase: "IN DEVELOPMENT",
    faqs: [
      { q: "What is Orbit CMS?", a: "Orbit CMS is a high-speed headless content platform engineered for modern web teams." },
    ],
    finalCtaHeading: "Ready for an ultra-fast",
    finalCtaHighlight: "content engine?",
    finalCtaDescription: "Tell us about your content architecture needs and request early access.",
    finalCtaButton: "Request early access →",
  },
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const position = products.findIndex((p) => p.slug === slug);
  const others = products.filter((p) => p.slug !== slug);
  const config = productConfigs[slug] || productConfigs["fluxboard"];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Header */}
      <DetailHero
        image={product.img}
        productNumber={`/0${position + 1}`}
        productName={product.name}
        badge={product.status}
        eyebrow={config.eyebrow}
        title={config.heroHeadline}
        titleClassName="max-w-3xl text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl"
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        meta={[
          { label: "product rank", value: `0${position + 1} / 0${products.length}` },
          { label: "status", value: config.statusLine },
        ]}
      />

      {/* =========================================================================
          01 · THE PROBLEM & VALUE PROPOSITION (Section 01 & 02 Bento)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className=" ">
          {/* Left Column: Problem & Product Identity (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="The Problem"
              title={config.problemTitle}
              highlight={config.problemHighlight}
              description={config.problemDescription}
            />

            <div className=" grid grid-cols-1 pt-20 gap-4 sm:grid-cols-2">
              {config.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div
                    className={`group relative flex h-full flex-col justify-between overflow-hidden hand-radius border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${s.highlight
                        ? "border-accent/40 bg-gradient-to-br from-accent/10 via-surface to-surface shadow-md shadow-accent/5 ring-1 ring-accent/20"
                        : "border-line bg-surface/90 hover:border-accent/40"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      <span className="font-hand text-sm text-accent-2">
                        {s.highlight ? "Core Indicator ✦" : "Standard ✓"}
                      </span>
                    </div>
                    <div className="mt-6">
                      <span className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        {s.value}
                      </span>
                      <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div>

            </div>



            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Get early access
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 hand-radius border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground/90 transition-all hover:border-accent/50 hover:shadow-md"
                >
                  See how it works
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Metrics Bento Grid (7 cols) */}

        </div>
      </section>

      {/* =========================================================================
          02 · INTERACTIVE APP WINDOW SHOWCASE (High-Impact macOS-style Frame)
          ========================================================================= */}
      <section id="how-it-works" className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan/10 blur-[100px]"
          aria-hidden
        />

        <Reveal>
          <div className="group relative overflow-hidden rounded-[24px] border border-line bg-surface shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/10">
            {/* Top macOS App Bar */}
            <div className="flex items-center justify-between border-b border-line bg-surface-2/80 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 hidden font-mono text-xs text-muted sm:inline-block">
                  {config.appBarDomain}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] font-bold text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  EARLY ACCESS
                </span>
                {/* <div className="rounded-lg bg-surface p-1.5 text-muted shadow-sm group-hover:text-accent">
                  <FiMaximize2 className="h-4 w-4" />
                </div> */}
              </div>
            </div>

            {/* High-res Image Canvas */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
              <Image
                src={product.img}
                alt={`${product.name} interface view`}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Floating Bottom Card Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white/20 bg-black/60 p-5 backdrop-blur-md text-white">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent-2 font-bold">
                      {config.appTag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {product.desc}
                  </p>
                </div>
                <span className="font-hand text-sm text-accent-2 shrink-0">
                  {config.appTagline}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          03 · CORE CAPABILITIES (4 Feature Bento Cards)
          ========================================================================= */}
      <section className="relative border-y border-line bg-surface/40 py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
            <SectionHeading
              eyebrow="Core Capabilities"
              title={config.capabilitiesHeading}
              highlight={config.capabilitiesHighlight}
              description={config.capabilitiesDescription}
            />
            <Reveal delay={0.2}>
              <div className="hidden -rotate-2 font-hand text-base text-accent-2 md:inline-block">
                ✦ built for the real world
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.features.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden hand-radius border border-line bg-surface/90 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
                  <div>
                    {/* <div className="flex items-center justify-between">
                      <span className="hand-radius border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] font-bold text-accent">
                        {feat.badge}
                      </span>
                    </div> */}

                    {/* <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent text-xl transition-transform duration-300 group-hover:scale-110">
                      <feat.icon />
                    </div> */}

                    <h3 className=" text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {feat.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted">{feat.desc}</p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-3 flex items-center justify-between text-xs font-mono text-muted">
                    <span>Capability</span>
                    <span className="font-hand text-accent font-semibold text-sm">Verified ✓</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 3 Principles Strip */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {config.principlesStrip.map((p, idx) => (
              <div key={idx} className="rounded-2xl border border-line bg-surface-2/40 p-5">
                <h4 className="text-sm font-bold text-foreground">{p.title}</h4>
                <p className="mt-1 text-xs text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 · WHO IT IS FOR & WORKFLOW
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left: Audience */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Target Audience"
              title={config.whoItIsForHeading}
              highlight={config.whoItIsForHighlight}
              description={config.whoItIsForDescription}
            />

            <div className="mt-8 space-y-4">
              {config.whoItIsFor.map((item, i) => (
                <Reveal key={item.role} delay={i * 0.08}>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-surface/80 p-4 transition-colors hover:border-accent/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.role}</h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">{item.benefit}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Workflow */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Workflow"
              title={config.workflowHeading}
              highlight={config.workflowHighlight}
              description={config.workflowDescription}
            />

            <div className="mt-8 space-y-3.5">
              {config.workflow.map((wf, idx) => (
                <Reveal key={wf.stage} delay={idx * 0.06}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/90 p-5 transition-all hover:border-accent/50 hover:bg-surface">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs font-bold text-accent">
                      {wf.stage}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                          {wf.action}
                        </h4>
                        <span className="font-mono text-[10px] text-muted uppercase">Stage {wf.stage}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted leading-relaxed">{wf.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 · BUILT BY AMBRSCALE (Ownership & Architecture Standards)
          ========================================================================= */}
      <section className="relative border-t border-line bg-[#0c0e17] text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">05</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-hand text-2xl text-accent-2 -rotate-1">
                    AmbrScale Product Stewardship
                  </span>
                </div>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                <SplitWords text={config.stewardshipHeading} y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text={config.stewardshipHighlight} y={20} className="text-[1.08em]" />
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                {config.stewardshipDescription}
              </p>

              <div className="mt-8 space-y-3.5">
                {config.stewardshipPoints.map((d, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold">
                        <FiCheck className="text-xs" />
                      </span>
                      {d}
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-white/10 hover:border-accent"
                >
                  How AmbrScale builds →
                </Link>
              </div>
            </div>

            {/* Right: Technical Primitives Stack & Status */}
            <div>
              <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-2 font-bold">
                  PRODUCT STATUS &amp; ROADMAP
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {config.roadmapTitle}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
                  {config.roadmapDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {config.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50">Current Phase</span>
                    <p className="text-sm font-bold text-accent">{config.roadmapPhase}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
                  >
                    Request early access →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 · FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <ProductFaqs faqs={config.faqs} productName={product.name} />

      {/* =========================================================================
          07 · OTHER PRODUCTS FLEET
          ========================================================================= */}
      <section className="border-t border-line bg-surface/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Fleet"
              title="More products"
              highlight="we are building"
            />
            <Reveal delay={0.15}>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                View all products{" "}
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={o} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Giant Brand */}
      <FinalCTA
        heading={config.finalCtaHeading}
        highlight={config.finalCtaHighlight}
        description={config.finalCtaDescription}
        buttonText={config.finalCtaButton}
        href="/contact"
      />
      <GiantBrand />
    </div>
  );
}