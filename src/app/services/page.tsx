"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiLayers,
  FiShield,
  FiMessageCircle,
  FiStar,
  FiCheck,
  FiCode,
  FiTrendingUp,
  FiCpu,
  FiCompass,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceFaqs from "@/components/ServiceFaqs";
import StatsGrid from "@/components/StatsGrid";
import FinalCTA from "@/components/FinalCTA";
import GiantBrand from "@/components/GiantBrand";
import SplitWords from "@/components/interactions/SplitWords";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { services } from "@/lib/site";

const serviceStats = [
  { value: "6", label: "Core service disciplines" },
  { value: "100%", label: "In-house senior team" },
  { value: "<0.8s", label: "Average page load SLA" },
  { value: "0", label: "Agency hand-offs" },
];

const process = [
  {
    step: "01",
    phase: "Discovery & Audit",
    title: "Define & Strategize",
    desc: "We analyze your business objectives, target audience, competitive whitespace, and technical stack to create a high-precision execution plan.",
    badge: "Phase 01",
  },
  {
    step: "02",
    phase: "UI/UX & Systems",
    title: "Shape the Experience",
    desc: "We design iconic visual identities, intuitive user flows, and scalable design systems with interactive, clickable prototypes.",
    badge: "Phase 02",
  },
  {
    step: "03",
    phase: "Full-Stack Build",
    title: "Engineer with Craft",
    desc: "We build with Next.js, TypeScript, and modern headless infrastructure — sub-second page speeds, edge caching, and zero technical debt.",
    badge: "Phase 03",
  },
  {
    step: "04",
    phase: "Growth & Telemetry",
    title: "Scale & Iterate",
    desc: "We launch, analyze live user telemetry & heatmap data, optimize conversion funnels, and support your product continuously.",
    badge: "Phase 04",
  },
];

const generalServiceFaqs = [
  {
    q: "How does AmbrScale differ from traditional agencies?",
    a: "We are builders first. We conceive, ship, and operate our own live SaaS and e-commerce software. When you hire us, you get the exact same senior team that runs our own product fleet — no junior hand-offs, no bloated account managers, just direct craft.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Most design and full-stack development builds take between 4 to 10 weeks from discovery to production launch. We work in rapid weekly sprints with transparent staging environments so you can test features in real-time.",
  },
  {
    q: "Do I own 100% of the code and design assets?",
    a: "Yes, unconditionally. Upon project completion, full intellectual property, Figma design systems, GitHub repositories, and cloud deployment rights belong 100% to your company.",
  },
  {
    q: "Do you offer post-launch maintenance and optimization?",
    a: "Yes. We provide ongoing support plans covering performance monitoring, security patches, conversion rate optimization (CRO), and continuous feature engineering as your user base scales.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Header */}
      <PageHero
        eyebrow="Full-Stack Capabilities"
        title="What we can"
        highlight="engineer for you"
        description="The same senior team that architects and scales our own product fleet builds for ambitious founders and brands — engineering, design, strategy and growth, end to end."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Services Metrics Grid */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsGrid items={serviceStats} />
      </section>

      {/* =========================================================================
          01.1 · CORE SERVICES (6 Capabilities Grid)
          ========================================================================= */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <SectionHeading
            eyebrow="Our disciplines"
            title="Full-cycle"
            highlight="capabilities"
            description="From initial brand strategy to production deployment and conversion rate scaling — we cover every touchpoint."
          />
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 hand-radius border border-accent/30 bg-accent/10 px-4 py-2 font-hand text-base text-accent -rotate-2 shadow-sm">
              <span>✦ one unified team, zero friction</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-3 shadow-xl shadow-black/5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className="bg-background">
              <ServiceCard
                title={s.title}
                desc={s.desc}
                tags={s.tags}
                href={`/services/${s.slug}`}
                index={i}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          01.2 · THE PROCESS (High-Contrast Dark Studio Section)
          ========================================================================= */}
      <section className="relative border-y border-line bg-[#0c0e17] text-white py-24 sm:py-32 overflow-hidden">
        {/* Dark Mode Ambient Glows & Grid */}
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-10 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[380px] rounded-full bg-violet/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">01.2</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-hand text-2xl text-accent-2 -rotate-1">
                    How we work
                  </span>
                </div>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white">
                <SplitWords text="A proven process" y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text="built for results" y={20} className="text-[1.08em]" />
                </span>
              </h2>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Every project moves through our disciplined four-stage pipeline designed to eliminate bottlenecks and accelerate market entry.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-2 hand-radius border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md text-white/90 font-hand text-lg rotate-1 shadow-lg">
                <span className="text-amber-400">✦</span>
                <span>sprint by sprint, measured on live outcomes</span>
              </div>
            </Reveal>
          </div>

          {/* 4 Process Step Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-accent/20">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="hand-radius border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-semibold text-white/90">
                        {p.badge}
                      </span>
                      <span className="font-mono text-2xl font-black text-accent">
                        {p.step}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-2 font-semibold">
                        {p.phase}
                      </span>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                    <span>Stage 0{i + 1}</span>
                    <span className="font-mono text-accent font-bold">Verified ✓</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          01.3 · WHY AMBRSCALE (The Studio Advantage Bento)
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[140px]" aria-hidden />

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: Proposition & Checklist */}
          <div>
            <SectionHeading
              eyebrow="The studio advantage"
              title="One team."
              highlight="Zero hand-offs."
            />
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg leading-relaxed text-muted text-base">
                Most digital projects die in the friction between disjointed design studios, offshore developer teams, and external marketing agencies. We keep everything unified under one roof with one shared obsession: your revenue and user adoption.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-10 space-y-3.5">
                {[
                  { icon: FiLayers, label: "Strategy, UI/UX design & engineering in-house", desc: "No subcontractors, no broken context" },
                  { icon: FiShield, label: "Transparent fixed milestones — zero surprise invoices", desc: "Predictable budgets with clear deliverables" },
                  { icon: FiMessageCircle, label: "Radically honest timelines & direct Slack access", desc: "Talk directly to the engineers and designers building your app" },
                ].map((r, i) => (
                  <li
                    key={i}
                    className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background font-bold">
                      <r.icon className="text-lg" />
                    </span>
                    <div>
                      <span className="text-sm font-bold text-foreground">{r.label}</span>
                      <p className="mt-0.5 text-xs text-muted">{r.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: Trust & Proof Spotlight Card */}
          <Reveal delay={0.2} className="relative">
            <div className="relative overflow-hidden hand-radius border border-line bg-surface shadow-2xl">
              <div className="relative h-64 sm:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop"
                  alt="AmbrScale engineering team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-line bg-background/80 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Est. 2021 · Independent
                </div>
              </div>

              <div className="px-8 pb-10 pt-8 sm:px-10">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1" aria-label="5 out of 5 star rating">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <FiStar key={j} className="h-5 w-5 fill-current text-accent" />
                    ))}
                  </div>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    5.0 ★ Client Satisfaction Score
                  </span>
                </div>
                <blockquote className="mt-6 text-center text-lg font-bold leading-snug text-foreground/95 sm:text-xl">
                  &ldquo;They didn&apos;t just build us a web application — they built us a flagship product engine that our customers genuinely rave about.&rdquo;
                </blockquote>
                <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-muted">
                  — CTO, Series A Venture
                </p>
              </div>

              {/* Floating 5+ Years Badge */}
              <div className="absolute -right-3 -top-3 z-20 hidden sm:block">
                <div className="flex h-16 w-16 rotate-6 items-center justify-center rounded-full border border-line bg-surface shadow-lg backdrop-blur-md">
                  <div className="-rotate-6 text-center">
                    <span className="block text-lg font-black leading-none text-accent">5+</span>
                    <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-wider text-muted">years</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          01.4 · FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="border-t border-line bg-surface/30">
        <ServiceFaqs faqs={generalServiceFaqs} />
      </section>

      {/* Final CTA & Giant Brand */}
      <FinalCTA
        heading="Have a project"
        highlight="in mind?"
        description="Whether you're starting from scratch or rebuilding a legacy platform, we'd love to explore how we can engineer your product."
        buttonText="Start a conversation"
      />
      <GiantBrand />
    </div>
  );
}