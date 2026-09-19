import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiCheck,
  FiLayers,
  FiZap,
  FiTrendingUp,
  FiTarget,
  FiCpu,
  FiActivity,
  FiClock,
  FiCompass,
  FiCode,
} from "react-icons/fi";
import FinalCTA from "@/components/FinalCTA";
import ProjectCard from "@/components/ProjectCard";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { projects } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study — AmbrScale`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  // Technical descriptions helper for stack
  const getTechDescription = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "next.js":
        return "Server-Side Rendering, App Router & Edge Caching";
      case "shopify hydrogen":
      case "shopify":
        return "Headless Storefront APIs & Cart Optimization";
      case "tailwind css":
      case "tailwind":
        return "Utility-First Design Tokens & Micro-interactions";
      case "vercel":
        return "Global Edge Deployment & Instant Invalidation";
      case "algolia":
        return "Sub-50ms Instant Search & AI Discovery";
      case "react":
        return "Componentized Architecture & State Primitives";
      case "d3.js":
        return "Custom Vector Charts & Real-time Canvas Rendering";
      case "node.js":
        return "High-Throughput Microservices & Event Loops";
      case "postgresql":
        return "ACID-compliant Relational Data & Partitioning";
      case "redis":
        return "Sub-millisecond Session & Rate Limiting Cache";
      case "figma":
        return "Design Systems, Tokens & Interactive Prototypes";
      case "framer":
        return "Interactive Motion Systems & High-Fidelity Physics";
      case "go":
        return "Ultra-low Latency Backend Microservices";
      case "kubernetes":
        return "Auto-scaling Container Clusters & Zero-downtime Rollouts";
      case "react native":
        return "Cross-Platform iOS & Android Native Performance";
      case "firebase":
        return "Real-time Datastore, Push & Offline Persistence";
      case "stripe":
        return "Global Checkout Infrastructure & Automated Billing";
      default:
        return "Production-Grade Engineering & Integration";
    }
  };

  return (
    <div className="overflow-x-hidden pt-20">
      {/* ── TOP BREADCRUMB & CASE STUDY HERO HEADER ── */}
      <section className="relative border-b border-line bg-surface/50 pb-16 pt-8 sm:pb-24 sm:pt-12">
        {/* Ambient atmospheric glows */}
        <div
          className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-accent-2/10 blur-[100px]"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top navigation row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <nav className="flex items-center gap-2 text-xs font-mono font-medium text-muted">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
                <span>All Projects</span>
              </Link>
              <span className="text-muted/40">/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                FEATURED CASE STUDY
              </span>
              <span className="font-mono text-xs text-muted">
                #{String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Main Case Study Title & Overview */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3.5 py-1 text-xs font-semibold text-accent">
                  <FiTarget className="text-sm" />
                  <span>{project.category} · {project.year}</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {project.title}
                  <span className="block font-hand text-3xl font-normal text-accent sm:text-5xl mt-2 -rotate-1">
                    ~ {project.tag}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                  {project.desc}
                </p>
              </Reveal>

              {/* Service Badges */}
              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted mr-2">
                    Scope:
                  </span>
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-line bg-surface px-3 py-1 text-xs font-medium text-foreground/80 shadow-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* CTA buttons */}
              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className={btnPrimary}>
                    Build something like this
                    <span className={circleArrow}>
                      <FiArrowUpRight />
                    </span>
                  </Link>
                  <a
                    href="#challenge-solution"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-surface-2"
                  >
                    <span>Read Architecture Deep-Dive</span>
                    <FiLayers className="text-accent" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Meta Spec Card */}
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                        Project Manifest
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                        <FiCode /> Production Architecture
                      </span>
                    </div>

                    <dl className="mt-6 space-y-5">
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          Project Concept / Brand
                        </dt>
                        <dd className="mt-1 text-base font-bold text-foreground">
                          {project.client}
                        </dd>
                      </div>

                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          Domain Category
                        </dt>
                        <dd className="mt-1 text-base font-bold text-foreground">
                          {project.category} Experience
                        </dd>
                      </div>

                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          Timeline / Spec Year
                        </dt>
                        <dd className="mt-1 text-base font-bold text-foreground">
                          {project.year}
                        </dd>
                      </div>

                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          Core Focus
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-muted">
                          {project.tag}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-accent">
                        <FiActivity className="animate-pulse" />
                        <span>Engineering Standard</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        Crafted with modern React patterns, sub-second TTFB optimization, and high-conversion interaction design.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── HERO BANNER WITH TELEMETRY HUD ── */}
          <Reveal delay={0.25}>
            <div className="relative mt-14 overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
              {/* Top macOS chrome */}
              <div className="flex items-center justify-between border-b border-line bg-surface-2/80 px-4 py-3 backdrop-blur-md sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 hidden font-mono text-xs text-muted sm:inline-block">
                    https://{project.slug}.ambrscale.design
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-muted">
                  <span className="hidden sm:inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    DESIGN SYSTEM V2
                  </span>
                  <span className="rounded-md border border-line bg-surface px-2 py-0.5 font-semibold text-foreground">
                    INTERACTIVE PROTOTYPE
                  </span>
                </div>
              </div>

              {/* Main Visual */}
              <div className="relative aspect-[16/8] min-h-[300px] w-full overflow-hidden bg-surface-2 sm:min-h-[420px]">
                <Image
                  src={project.img}
                  alt={`${project.title} Hero Showcase`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating bottom telemetry hud */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/20 bg-black/60 p-4 backdrop-blur-xl sm:grid-cols-4 sm:gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Primary Impact
                      </span>
                      <p className="mt-0.5 text-base font-bold text-white sm:text-lg">
                        {project.results[0]?.value || "100%"}
                      </p>
                      <p className="text-[11px] text-white/70">
                        {project.results[0]?.label || "Target Growth"}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Speed Standard
                      </span>
                      <p className="mt-0.5 text-base font-bold text-emerald-400 sm:text-lg">
                        {project.results[1]?.value || "<1.0s"}
                      </p>
                      <p className="text-[11px] text-white/70">
                        {project.results[1]?.label || "Load Latency"}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Conversion Target
                      </span>
                      <p className="mt-0.5 text-base font-bold text-amber-400 sm:text-lg">
                        {project.results[2]?.value || "High Impact"}
                      </p>
                      <p className="text-[11px] text-white/70">
                        {project.results[2]?.label || "Efficiency"}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Target Reliability
                      </span>
                      <p className="mt-0.5 text-base font-bold text-cyan-300 sm:text-lg">
                        {project.results[3]?.value || "99.99%"}
                      </p>
                      <p className="text-[11px] text-white/70">
                        {project.results[3]?.label || "Uptime Standard"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 01: RESULTS & KEY PERFORMANCE TARGETS ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-line pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-accent">01 // BENCHMARKS</span>
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Target Architecture Standards
              </span>
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Performance &amp; Scale Objectives
            </h2>
          </div>
          <div className="rounded-full border border-line bg-surface-2 px-4 py-1.5 text-xs font-semibold text-muted">
            Architecture Blueprint Metrics
          </div>
        </div>

        {/* High impact stats cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent">
                    METRIC 0{i + 1}
                  </span>
                  <div className="rounded-lg bg-surface-2 p-2 text-muted transition-colors group-hover:text-accent">
                    <FiTrendingUp className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                    {r.value}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-muted">
                    {r.label}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 border-t border-line/60 pt-4 text-[11px] font-medium text-accent">
                  <FiTarget className="h-3 w-3" />
                  <span>Target architecture standard</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 02: THE STRATEGIC DEEP DIVE (CHALLENGE VS SOLUTION BENTO) ── */}
      <section id="challenge-solution" className="border-t border-line bg-surface-2/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Architecture &amp; Strategy"
            title="The Challenge &amp;"
            highlight="Engineering Solution"
            description="How we deconstruct digital bottlenecks and architect an ultra-performant, scalable foundation."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Card A: The Challenge (Dark Studio / Friction Card) */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-[#0c0e17] p-8 sm:p-10 text-white shadow-xl">
                  {/* Blueprint lines */}
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-400">
                          Problem Statement &amp; Friction Points
                        </span>
                      </div>
                      <span className="rounded-md border border-red-500/20 bg-red-500/10 px-2 py-0.5 font-mono text-[10px] text-red-300">
                        CORE CHALLENGE
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      The constraints holding back digital growth
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-white/80">
                      {project.challenge}
                    </p>

                    {/* Identified friction points */}
                    <div className="mt-8 space-y-3">
                      <p className="font-mono text-xs uppercase tracking-wider text-white/50">
                        Primary Friction Factors:
                      </p>
                      <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                        <span className="mt-0.5 rounded-full bg-red-500/20 p-1 text-red-400">
                          ✕
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">Monolithic &amp; slow architecture</p>
                          <p className="text-xs text-white/60">High bounce rates during traffic spikes and cumbersome code updates.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                        <span className="mt-0.5 rounded-full bg-red-500/20 p-1 text-red-400">
                          ✕
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">Suboptimal user conversion flow</p>
                          <p className="text-xs text-white/60">Friction across key user journeys causing drop-offs and lower engagement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 border-t border-white/10 pt-4 font-mono text-xs text-white/40">
                    System Diagnostic: Identified Architecture Constraints
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Card B: The Solution (Clean Light / Studio Innovation Card) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-10 shadow-xl">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                          The AmbrScale Solution
                        </span>
                      </div>
                      <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                        MODERNIZED ARCHITECTURE
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      Engineered for sub-second speed &amp; scale
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {project.solution}
                    </p>

                    {/* Key Technical Interventions */}
                    <div className="mt-8 space-y-3">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">
                        Core Engineering Interventions:
                      </p>
                      <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-3.5">
                        <span className="mt-0.5 rounded-full bg-accent/20 p-1 text-accent">
                          <FiCheck className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">Edge Caching &amp; Decoupled Frontend</p>
                          <p className="text-xs text-muted">Lightning-fast static generation with dynamic API routing.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-3.5">
                        <span className="mt-0.5 rounded-full bg-accent/20 p-1 text-accent">
                          <FiCheck className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">Interaction Design &amp; UX Re-architecture</p>
                          <p className="text-xs text-muted">Streamlined conversion funnels, zero CLS (Cumulative Layout Shift).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-muted">
                    <span>Engineering Status: Production-Ready Blueprint</span>
                    <span className="font-bold text-accent">AmbrScale Arch v4</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: INTERACTIVE VISUAL SHOWCASE & LIGHTBOX ── */}
      <ProjectGallery
        title={project.title}
        category={project.category}
        gallery={project.gallery}
      />

      {/* ── SECTION 04: TECHNOLOGY STACK & ARCHITECTURE ECOSYSTEM ── */}
      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow="Tech Stack &amp; Primitives"
            title="Tools &amp; Infrastructure"
            highlight="deployed"
            description="Every technology in this stack is hand-selected to ensure maximum performance, maintainability, and clean architecture."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((t, idx) => (
              <Reveal key={t} delay={idx * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface-2/60 p-6 transition-all duration-300 hover:border-accent hover:bg-surface hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <span className="rounded-md border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted">
                      CORE STACK
                    </span>
                  </div>
                  <h4 className="mt-4 text-xl font-bold tracking-tight text-foreground">
                    {t}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {getTechDescription(t)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Architecture Blueprint Note */}
          <Reveal delay={0.2}>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    Architecture Standards
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
                    Zero bloat, modular codebases, and edge-first performance
                  </h4>
                  <p className="mt-1 text-sm text-muted">
                    Engineered to achieve 95+ scores on Google Lighthouse across Performance, Accessibility, and Best Practices.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105"
                >
                  Explore All Capabilities
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 05: PROJECT VISION & PHILOSOPHY CARD ── */}
      {project.testimonial && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <figure className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-xl">
              <div
                className="grid-lines pointer-events-none absolute inset-0 opacity-25"
                aria-hidden
              />
              <div className="relative grid lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">04 // PERSPECTIVE</span>
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                      Project Vision &amp; Philosophy
                    </span>
                  </div>

                  <blockquote className="mt-8 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    <span className="mr-2 align-middle text-accent">&ldquo;</span>
                    {project.testimonial.quote}
                    <span className="ml-2 align-middle text-accent">&rdquo;</span>
                  </blockquote>

                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-accent/10 text-base font-bold text-accent shadow-xs">
                      {project.testimonial.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="text-base font-bold text-foreground">{project.testimonial.name}</p>
                      <p className="text-sm text-muted">{project.testimonial.role}</p>
                    </div>
                  </figcaption>
                </div>

                <div className="flex flex-col justify-between gap-10 border-t border-line bg-surface-2/60 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-12">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-accent/20 p-1 text-accent">
                      <FiCompass className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                      Project Architecture Spec
                    </span>
                  </div>

                  <dl className="space-y-5">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Project Concept
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-foreground">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Sector
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-foreground">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Specification Year
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-foreground">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Architecture Fidelity
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-accent">
                        Production-Grade Concept
                      </dd>
                    </div>
                  </dl>

                  <div className="rounded-xl border border-line bg-surface p-4 text-xs font-mono text-muted">
                    Build Standard: Modern Component System
                  </div>
                </div>
              </div>
            </figure>
          </Reveal>
        </section>
      )}

      {/* ── SECTION 06: RELATED CASE STUDIES FLEET ── */}
      <section className="border-t border-line bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="05"
              eyebrow="Portfolio Fleet"
              title="Explore More"
              highlight="Case Studies"
              description="See how we approach digital architecture across SaaS, E-commerce, Mobile, and Digital Branding."
            />
            <Reveal delay={0.15}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <span>View Full Portfolio</span>
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FinalCTA
        heading="Have a project"
        highlight="in mind?"
        description="Let's engineer your next digital platform for high conversions, sub-second speed, and scalable growth."
        buttonText="Initiate Project Discovery"
      />
    </div>
  );
}

