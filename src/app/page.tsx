"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import StatsGrid from "@/components/StatsGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectsSlider from "@/components/ProjectsSlider";
import FinalCTA from "@/components/FinalCTA";
import ShowcaseSection from "@/components/ShowcaseSection";
import GiantBrand from "@/components/GiantBrand";
import HeroStackedCards from "@/components/HeroStackedCards";
import StaggerReveal from "@/components/interactions/StaggerReveal";
import {
  HandCircle,
  HandArrow,
  HandSparkle,
  HandBadge,
  HandStickyNote,
  HandStamp,
} from "@/components/HandDrawnAccents";
import { btnPrimary, circleArrow } from "@/lib/constants";

const stats = [
  { value: "01", label: "Active build at a time" },
  { value: "6-Stage", label: "Validation framework" },
  { value: "100%", label: "In-house ownership" },
  { value: "10-Year", label: "Long-term horizon" },
];

const problemPrinciples = [
  {
    num: "01",
    name: "Real",
    tagline: "A problem people actually experience, not one invented to justify a feature.",
    status: "PRINCIPLE 01",
    desc: "We look for friction that exists in the real world today — grounded in verifiable user behaviour rather than theoretical market sizing.",
    stat: { value: "01", label: "Ground truth" },
    slug: "real",
  },
  {
    num: "02",
    name: "Meaningful",
    tagline: "Important enough to change behaviour, save time, reduce friction or create opportunity.",
    status: "PRINCIPLE 02",
    desc: "A problem that matters enough to users that adopting a better solution creates a tangible difference in their day-to-day workflow.",
    stat: { value: "02", label: "High leverage" },
    slug: "meaningful",
  },
  {
    num: "03",
    name: "Underserved",
    tagline: "A space where existing solutions leave a meaningful gap.",
    status: "PRINCIPLE 03",
    desc: "Where existing approaches are bloated, indifferent, or failing to address the fundamental core need with modern technical execution.",
    stat: { value: "03", label: "True whitespace" },
    slug: "underserved",
  },
  {
    num: "04",
    name: "Buildable & Compounding",
    tagline: "Where technology creates a materially better experience that compounds over time.",
    status: "PRINCIPLE 04 & 05",
    desc: "Products designed to get smarter and more useful as we learn, iterate and scale — compounding value for the long term.",
    stat: { value: "04 / 05", label: "Compounding" },
    slug: "compounding",
  },
];

const approachStages = [
  {
    slug: "understand",
    title: "01 — Understand",
    desc: "We start with the people, behaviour and context behind the problem.",
  },
  {
    slug: "frame",
    title: "02 — Frame",
    desc: "We turn observations into a clear product opportunity and define what success should look like.",
  },
  {
    slug: "validate",
    title: "03 — Validate",
    desc: "We test the riskiest assumptions before investing heavily in the solution.",
  },
  {
    slug: "build",
    title: "04 — Build",
    desc: "We design and engineer the smallest product capable of creating real value.",
  },
  {
    slug: "learn",
    title: "05 — Learn",
    desc: "We watch what users actually do, not just what they say.",
  },
  {
    slug: "compound",
    title: "06 — Compound",
    desc: "We use what we learn to improve the product, the business and the next decision.",
  },
];

const points = [
  "Small teams close to the problem and close to the product",
  "Design, technology, product and business decisions inform one another",
  "We do not confuse past experience with products owned by AmbrScale",
  "Every new product still has to earn its place with users",
];

const steps = [
  {
    step: "01",
    title: "Own the outcome.",
    headline: "We care about whether the product works, not simply whether the task was completed.",
    desc: "We take direct accountability for real user value. Success isn't shipping tickets or clearing backlogs — it's whether real users find durable, measurable utility in what we built.",
    tag: "Working Principle 01",
  },
  {
    step: "02",
    title: "Make the trade-off visible.",
    headline: "Speed, quality, scope and evidence are choices; we make them deliberately.",
    desc: "Every product decision is an explicit trade-off. We make constraints and priorities transparent so every engineering and design hour is spent with conviction and intent.",
    tag: "Working Principle 02",
  },
  {
    step: "03",
    title: "Stay close to reality.",
    headline: "Users, data and operating conditions are more useful than assumptions.",
    desc: "We keep direct contact with the market and operating conditions. Real user behaviour and live signals always supersede boardroom assumptions.",
    tag: "Working Principle 03",
  },
];

const impacts = [
  {
    num: "01",
    title: "Understand Deeply",
    desc: "We study the people, context and friction behind the problem before writing production code.",
    doodle: "✦",
  },
  {
    num: "02",
    title: "Build Carefully",
    desc: "We design and engineer durable, high-integrity products with zero unnecessary complexity.",
    doodle: "⚡",
  },
  {
    num: "03",
    title: "Learn & Compound",
    desc: "The goal is not to build more. It is to build what matters, learn quickly, and compound every insight.",
    doodle: "◎",
  },
];

const workImages = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
];

export default function Home() {
  const [processIndex, setProcessIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0.96 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-hidden"
    >
      {/* =========================================================================
          HERO SECTION (A Product Company)
          ========================================================================= */}
      <Hero />

      {/* =========================================================================
          01 · WHY AMBRSCALE (What Makes a Problem Worth Building For)
          ========================================================================= */}
      <section
        id="why-ambrscale"
        className="group/products relative mx-auto max-w-7xl overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8"
      >
        {/* Ambient subtle glow & hand-drawn doodle accent */}
        <div
          className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/5 blur-[120px]"
          aria-hidden
        />
        <div className="pointer-events-none absolute right-4 top-16 hidden h-32 w-44 text-muted/20 md:block lg:right-6">
          <svg viewBox="0 0 180 130" fill="none" className="h-full w-full rotate-[-3deg]" aria-hidden>
            <path
              d="M8 94 C34 79 45 99 69 82 C91 66 105 82 126 62 C145 44 156 50 174 28"
              className="stroke-current transition-all duration-700 group-hover/products:translate-x-1"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M119 25 C136 20 151 23 169 27"
              className="stroke-accent-2"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-wrap items-end justify-between gap-8">
          <div className="relative max-w-2xl">
            <SectionHeading
              index="01"
              eyebrow="Why AmbrScale"
              title="Not every problem needs an app."
              highlight="The right problems need better products."
              description="Technology makes it easier to build than ever. That does not make every idea worth building. We look for problems that are real, recurring and meaningful — then work backwards from the people experiencing them."
            />
          </div>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-4">
              <span className="hidden -rotate-2 font-hand text-sm text-accent-2 sm:inline-block">
                room for a better answer ✦
              </span>
              <Link
                href="#approach"
                className="group/link relative inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform duration-300 hover:-translate-y-0.5"
              >
                See our approach
                <FiArrowUpRight className="transition-transform duration-300 group-hover/link:rotate-45" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* What makes a problem worth building for - Cards Grid */}
        <div className="relative mt-12 sm:mt-16">
          <span className="pointer-events-none absolute -top-8 right-4 hidden -rotate-3 font-hand text-sm text-muted/70 lg:block">
            five decision principles ✎
          </span>

          <StaggerReveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problemPrinciples.map((p, i) => (
              <div key={p.slug} className="group/card relative">
                <svg
                  className="pointer-events-none absolute -right-2 -top-2 z-20 hidden h-8 w-8 text-accent-2/75 transition-transform duration-500 group-hover/card:rotate-6 sm:block"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 24 C10 18 12 20 16 15 C20 10 23 12 27 6"
                    className="stroke-current"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative flex h-full flex-col justify-between rounded-[1.75rem] border border-line bg-surface/70 p-6 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                        {p.status}
                      </span>
                      <span className="rounded-full border border-line bg-background/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-muted">
                        #{p.num}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-accent-2">
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4 flex items-center justify-between text-xs text-muted">
                    <span className="font-mono">{p.stat.label}</span>
                    <span className="font-bold text-foreground">AmbrScale Filter</span>
                  </div>
                </div>

                <span className="pointer-events-none absolute -left-2 top-5 hidden -rotate-6 font-hand text-xs text-muted/40 xl:block">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </StaggerReveal>

          {/* Hand-drawn editorial callout note */}
          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <HandStickyNote
                  title="CORE THESIS ON PROBLEMS"
                  text="If a problem isn't felt in the real world every single week, no amount of engineering polish or marketing spend will turn it into a durable product."
                  author="AmbrScale Product Stewardship"
                />
              </div>
              <div className="md:col-span-4 flex flex-col items-start gap-3 pl-2">
                <HandStamp text="REALITY FIRST" rotation="-rotate-2" />
                <span className="font-hand text-sm text-accent-2">
                  ✦ de-risked before heavy capital
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          INFINITE THESIS MARQUEE (Dynamic dual line)
          ========================================================================= */}
      <section
        aria-label="AmbrScale core thesis"
        className="relative overflow-hidden border-y border-line bg-surface/50 py-6 sm:py-8 backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-36" />

        {/* Line 1 — moves left */}
        <motion.div
          className="flex w-max items-center gap-8 sm:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((set) => (
            <div key={`top-${set}`} className="flex items-center gap-8 sm:gap-12">
              {[
                ["PROBLEMS FIRST", "text-[#4f46e5]"],
                ["PRODUCTS SECOND", "text-[#10b4af]"],
                ["PROGRESS ALWAYS", "text-[#7c3aed]"],
                ["EVIDENCE OVER ASSUMPTIONS", "text-[#ff5c46]"],
                ["REAL & MEANINGFUL", "text-[#0ea5e9]"],
                ["COMPOUNDING VALUE", "text-[#23cb6b]"],
                ["BUILT FOR THE LONG TERM", "text-[#d946ef]"],
                ["THOUGHTFUL ENGINEERING", "text-[#10b4af]"],
              ].map(([name, color], i) => (
                <div key={`top-${set}-${name}`} className="flex items-center gap-8 sm:gap-12">
                  <span
                    className={`text-base font-extrabold tracking-tight opacity-80 transition-opacity duration-300 hover:opacity-100 sm:text-lg ${color}`}
                  >
                    {name}
                  </span>
                  <span
                    aria-hidden
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      i % 2 === 0 ? "bg-accent-2" : "bg-accent"
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Line 2 — moves right */}
        <motion.div
          className="mt-4 flex w-max items-center gap-8 sm:mt-5 sm:gap-12"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((set) => (
            <div key={`bottom-${set}`} className="flex items-center gap-8 sm:gap-12">
              {[
                ["UNDERSTAND", "text-[#d946ef]"],
                ["FRAME", "text-[#10b4af]"],
                ["VALIDATE", "text-[#4f46e5]"],
                ["BUILD", "text-[#10b4af]"],
                ["LEARN", "text-[#7c3aed]"],
                ["COMPOUND", "text-[#ff5c46]"],
                ["ONE PROBLEM AT A TIME", "text-[#0ea5e9]"],
                ["EVIDENCE BEFORE ASSUMPTIONS", "text-[#23cb6b]"],
              ].map(([name, color], i) => (
                <div key={`bottom-${set}-${name}`} className="flex items-center gap-8 sm:gap-12">
                  <span
                    className={`text-base font-extrabold tracking-tight opacity-80 transition-opacity duration-300 hover:opacity-100 sm:text-lg ${color}`}
                  >
                    {name}
                  </span>
                  <span
                    aria-hidden
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      i % 2 === 0 ? "bg-accent" : "bg-accent-2"
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute bottom-1 left-1/2 hidden -translate-x-1/2 font-hand text-xs text-muted/40 sm:block">
          building for the next decade →
        </div>
      </section>

      {/* =========================================================================
          02 · OUR APPROACH (Evidence Before Assumptions - 6 Stages)
          ========================================================================= */}
      <section id="approach" className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Our Approach"
            title="Evidence before"
            highlight="assumptions."
            description="A repeatable decision system designed to test the riskiest assumptions before investing heavily in the solution."
          />
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <span className="hidden -rotate-2 font-hand text-sm text-accent-2 md:inline-block">
                repeatable decision system ✦
              </span>
              <Link
                href="#how-we-work"
                className="group relative inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform duration-300 hover:-translate-y-0.5"
              >
                How we work{" "}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-2 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </Reveal>
        </div>

        <StaggerReveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {approachStages.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              desc={s.desc}
              href="#how-we-work"
              index={i}
              showIndex={false}
            />
          ))}
        </StaggerReveal>
      </section>

      {/* =========================================================================
          INSTITUTIONAL METRICS & CURRENT FOCUS
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 mb-20 sm:px-6 lg:px-8">
        <StatsGrid items={stats} className="mx-auto" />
      </section>

      {/* =========================================================================
          03 · PEOPLE & EXPERIENCE (Built by People Who Have Built Before)
          ========================================================================= */}
      <section id="people" className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1 h-[520px]">
              <Reveal className="absolute left-0 top-0 z-30 w-[58%] -rotate-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-50 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                    alt="Team collaborating on product"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className="absolute right-0 top-[26%] z-20 w-[55%] rotate-3 transition-all duration-300 hover:-translate-y-6 hover:scale-105 hover:z-50 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                    alt="Workspace and architecture"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2} className="absolute left-[12%] bottom-0 z-10 w-[50%] -rotate-1 transition-all duration-300 hover:-translate-y-8 hover:scale-105 hover:z-50 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                    alt="Deep work and product design"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.3} className="absolute -bottom-6 left-4 sm:left-8 z-40">
                <div className="flex items-center gap-3 hand-radius border border-line bg-background/90 px-6 py-4 backdrop-blur glow-accent">
                  <span className="text-2xl font-black text-accent">10Y</span>
                  <span className="text-xs uppercase tracking-widest text-muted">Long-term<br />horizon</span>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                index="03"
                eyebrow="The People Behind AmbrScale"
                title="Built by people who have"
                highlight="built before."
                description="AmbrScale is built by people who have worked across product, design, technology and growth. That experience gives us context, not a shortcut. Every new product still has to earn its place with users."
              />
              <Reveal delay={0.2}>
                <ul className="mt-8 space-y-3.5">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/90">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <FiCheck className="text-xs" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-10">
                  <Link href="/about" className={btnPrimary}>
                    Meet the team
                    <span className={circleArrow}>
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 · HOW WE WORK (Three Working Principles)
          ========================================================================= */}
      <section
        id="how-we-work"
        className="relative bg-surface/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 border-b border-line"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              index="04"
              eyebrow="How we work"
              title="Small teams. Clear ownership."
              highlight="Shorter distance to reality."
              description="We keep teams close to the problem and close to the product. Design, technology, product and business decisions should inform one another — not wait in separate queues."
            />
            <Reveal delay={0.2}>
              <span className="hidden -rotate-2 font-hand text-base text-accent-2 md:inline-block">
                ✦ close to the problem &amp; product
              </span>
            </Reveal>
          </div>

          <div className="relative mt-10 sm:mt-14">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-[#0c0e17] text-white shadow-2xl">
              <div className="grid min-h-[580px] lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left Visual Area */}
                <div className="relative min-h-[360px] overflow-hidden lg:min-h-[580px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${processIndex}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={workImages[processIndex]}
                        alt={steps[processIndex].title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c0e17]" />

                  {/* Top Hand Badge */}
                  <div className="absolute left-6 top-6 hand-radius border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {steps[processIndex].tag}
                  </div>

                  <div className="pointer-events-none absolute bottom-5 left-6 hidden font-hand text-sm text-white/80 sm:block">
                    deliberate choices →
                  </div>
                </div>

                {/* Right Interactive Text Area */}
                <div className="relative flex flex-col justify-between p-8 text-white sm:p-12 lg:p-14">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent-2">
                      <span className="h-px w-8 bg-accent-2" />
                      {steps[processIndex].title}
                    </div>

                    <div className="mt-8 font-mono text-xs tracking-widest text-white/40">
                      0{processIndex + 1} / 0{steps.length}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`copy-${processIndex}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {steps[processIndex].headline}
                        </h3>

                        <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                          {steps[processIndex].desc}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Step Switchers & Navigation */}
                  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                      {steps.map((step, idx) => (
                        <button
                          key={step.step}
                          type="button"
                          onClick={() => setProcessIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === processIndex
                              ? "w-8 bg-accent-2"
                              : "w-2 bg-white/20 hover:bg-white/50"
                          }`}
                          aria-label={`Go to ${step.title}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setProcessIndex((i) => Math.max(0, i - 1))}
                        disabled={processIndex === 0}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/15 disabled:opacity-30"
                        aria-label="Previous principle"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setProcessIndex((i) => Math.min(steps.length - 1, i + 1))
                        }
                        disabled={processIndex === steps.length - 1}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-accent-2 hover:bg-accent-2/20 disabled:opacity-30"
                        aria-label="Next principle"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 · FUTURE (Building for the Next Decade, Not the Next Launch)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28 border-b border-line">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="col-span-2">
            <SectionHeading
              index="05"
              eyebrow="Long-Term Horizon"
              title="Building for the next decade,"
              highlight="not the next launch."
              description="AmbrScale is being built as a long-term product company. We expect our products, markets and ideas to change. What should remain constant is how we approach problems: understand deeply, build carefully, learn quickly and keep improving."
            />
          </div>

          <div className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {impacts.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between hand-radius border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-accent">{p.num}</span>
                      <span className="font-hand text-xl text-accent-2">{p.doodle}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 · CURRENTLY BUILDING SHOWCASE (One Problem At A Time)
          ========================================================================= */}
      <section className="relative">
        <ShowcaseSection
          eyebrow="Currently Building"
          title="One problem at a time."
          description="Our current work is focused on a real-world problem in the real-estate ecosystem. The product is being developed privately while we validate the experience, the market and the business around it."
          link="/about"
          linkLabel="See how we build"
          bg={{
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
            alt: "AmbrScale product development",
          }}
          cards={[
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" },
            { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
            { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" },
          ]}
        />
      </section>

      {/* =========================================================================
          07 · INSIGHTS / PRODUCT JOURNAL (Inside the Build)
          ========================================================================= */}
      <section id="insights" className="border-y border-line bg-surface/40 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="06"
            eyebrow="Inside the Build"
            title="What we're learning"
            highlight="while building."
            description="Product decisions are rarely obvious. We document the questions, experiments, trade-offs and lessons that shape our work."
          />
        </div>
        <div className="mt-8 pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <ProjectsSlider />
        </div>
      </section>

      {/* Final CTA & Giant Brand */}
      <section className="relative">
        <FinalCTA
          heading="Have a problem"
          highlight="worth solving?"
          description="If you are building something meaningful, working on a difficult problem or see an opportunity worth exploring, we would like to hear it."
          buttonText="Start a conversation"
          href="/contact"
        />
      </section>
      <GiantBrand />
    </motion.div>
  );
}

{/* =========================================================================
    HERO COMPONENT (A Product Company)
    ========================================================================= */}
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [stackHovered, setStackHovered] = useState(false);
  const [stackStep, setStackStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    if (!stackHovered) {
      setStackStep(1);
      return;
    }

    const timer = window.setInterval(() => {
      setStackStep((value) => (value >= 3 ? 1 : value + 1));
    }, 1800);

    return () => window.clearInterval(timer);
  }, [stackHovered]);

  const centerCopy = [
    "Not every problem needs another app.",
    "The right problems need better products.",
    "We build for problems with room for a better answer.",
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-surface/80 via-background to-background text-foreground"
    >
      {/* Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/15 via-cyan/10 to-violet/10 blur-[130px]"
        aria-hidden
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8"
      >
        {/* Top Hand-drawn Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="hand-radius -rotate-2 border border-accent/40 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent shadow-sm">
            ✦ A PRODUCT COMPANY
          </span>
        </motion.div>

        {/* Hero Title with Hand-drawn Underline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl text-center mt-6"
        >
          <h1 className="mx-auto max-w-[950px] text-[clamp(2.55rem,5.8vw,5.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-foreground">
            We build products{" "}
            <span className="block mt-1">
              around{" "}
              <span className="hand-underline inline-block text-accent">
                problems worth solving.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">
            AmbrScale is a technology company focused on turning real-world problems into useful, durable products. We study the problem, test the opportunity, build the product and learn from what happens next.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#approach" className={btnPrimary}>
              See how we build
              <span className={circleArrow}>
                <FiArrowUpRight />
              </span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 hand-radius border border-line bg-surface/80 px-6 py-3 text-sm font-semibold text-foreground/90 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface"
            >
              Meet the people behind AmbrScale
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6">
            <HandArrow label="real problems, zero hype ✎" direction="down-left" />
            <span className="hidden sm:inline-block font-hand text-xs text-muted/60">
              Problems first. Products second. Progress always.
            </span>
          </div>
        </motion.div>

        {/* Bento Grid Showcase Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 w-full max-w-[1140px] sm:mt-16"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[290px_180px]">
            {/* 01 — Currently Building: Focus Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.008 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full min-h-[290px] overflow-hidden rounded-[20px] border border-line bg-surface shadow-xl shadow-black/5"
            >
              <Link href="#why-ambrscale" aria-label="Explore Currently Building" className="relative block h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1500&auto=format&fit=crop"
                  alt="Real-estate ecosystem product in development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-4 pt-14">
                  <div>
                    <span className="font-mono text-xs text-cyan-300">CURRENT WORK · IN DEV</span>
                    <h3 className="text-base font-bold text-white">Real-Estate Ecosystem Focus</h3>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
                    Follow build →
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* 02 — Product Thesis: Interactive Step Switcher */}
            <motion.div
              onHoverStart={() => setStackHovered(true)}
              onHoverEnd={() => setStackHovered(false)}
              whileHover={{ y: -5, scale: 1.008 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full min-h-[290px] overflow-hidden rounded-[20px] border border-line bg-[#0c0e17] text-white shadow-xl shadow-black/5"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=1500&auto=format&fit=crop"
                alt="Product team working on thesis"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-[#0c0e17]/60 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stackStep}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="font-mono text-4xl font-black text-accent"
                    >
                      0{stackStep}
                    </motion.div>
                  </AnimatePresence>
                  <span className="font-hand text-sm text-accent-2 -rotate-3">
                    hover to cycle ⚡
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                    Product Thesis
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={stackStep}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="mt-2 text-sm font-semibold text-white leading-snug"
                    >
                      {centerCopy[stackStep - 1]}
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-4 flex items-center gap-1.5">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          n === stackStep ? "w-7 bg-accent" : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 03 — Decision System Banner (Col span 2) */}
            <div className="relative h-full min-h-[180px] overflow-hidden rounded-[20px] border border-line bg-surface shadow-xl shadow-black/5 lg:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1500&auto=format&fit=crop"
                alt="AmbrScale engineering & product studio"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
              <div className="relative z-10 flex h-full items-end justify-between gap-4 p-6 text-white">
                <div>
                  <span className="font-mono text-xs text-accent-2">DECISION SYSTEM</span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Evidence before assumptions · Thoughtful, durable engineering
                  </h3>
                </div>
                <Link
                  href="#approach"
                  className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  See principles →
                </Link>
              </div>
            </div>

            {/* 04 — What Makes A Problem Worth Building (Stacked Sliding Cards) */}
            <HeroStackedCards />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}



