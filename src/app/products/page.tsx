"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiLayers,
  FiLock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsGrid from "@/components/StatsGrid";
import FinalCTA from "@/components/FinalCTA";
import GiantBrand from "@/components/GiantBrand";
import SplitWords from "@/components/interactions/SplitWords";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { products, flagship } from "@/lib/site";

const productStats = [
  { value: "4", label: "Products in fleet" },
  { value: "1.2M+", label: "Daily active users" },
  { value: "$40M+", label: "GMV processed" },
  { value: "100%", label: "In-house owned" },
];

const pillars = [
  {
    num: "01",
    title: "Shared Foundation",
    desc: "Every product runs on our hardened edge stack: centralized auth, global low-latency CDN, and unified design tokens.",
    icon: FiLayers,
    badge: "Architecture",
    accent: "from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    num: "02",
    title: "Revenue Engine",
    desc: "Built to generate recurring revenue from day one — multi-currency checkout, automated invoices, and self-serve onboarding.",
    icon: FiTrendingUp,
    badge: "Monetization",
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    num: "03",
    title: "Zero VC Compromise",
    desc: "100% financed by our own software revenue. No vanity metrics, no growth-at-all-costs burnout, just enduring craft.",
    icon: FiShield,
    badge: "Independence",
    accent: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30",
  },
];

export default function ProductsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        index="01"
        eyebrow="Products fleet"
        title="Owned & operated,"
        highlight="built for the world"
        description="Everything below is ours — conceived, designed and engineered by the in-house AmbrScale team. Live in production, earning on our own name."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Metrics Bar */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsGrid items={productStats} />
      </section>

      {/* =========================================================================
          01.1 · THE FLEET (Core Products Grid)
          ========================================================================= */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <SectionHeading
            index="01.1"
            eyebrow="The live fleet"
            title="Products we"
            highlight="own & operate"
            description="Active software products serving real companies, processing millions in transactions with zero external debt."
          />
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 hand-radius border border-accent/30 bg-accent/10 px-4 py-2 font-hand text-base text-accent -rotate-2 shadow-sm">
              <span>✦ zero pitch decks, real revenue</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          01.2 · IN THE PIPELINE (Project Aurora Spotlight)
          ========================================================================= */}
      <section className="relative border-y border-line bg-[#0c0e17] text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient Dark Glows */}
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/3 top-10 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">01.2</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-hand text-2xl text-accent-2 -rotate-1">
                    In the pipeline
                  </span>
                </div>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white">
                <SplitWords text="Flagship build:" y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text="Project Aurora" y={20} className="text-[1.08em]" />
                </span>
              </h2>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {flagship.stream}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-2 hand-radius border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {flagship.phase}
              </div>
            </Reveal>
          </div>

          {/* Spotlight Card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl shadow-2xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Image Preview (7 cols) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2 lg:col-span-7">
                <Image
                  src={flagship.img}
                  alt={flagship.codename}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c0e17]" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md text-xs font-mono text-white">
                  Target Launch: <span className="text-accent font-bold">{flagship.target}</span>
                </div>
              </div>

              {/* Progress & Specs (5 cols) */}
              <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-2 font-bold">
                    CONFIDENTIAL ROADMAP
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Next-Gen Commerce &amp; Creator Network
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Engineered from ground up to allow independent creators and brands to launch custom store engines, automate fulfillment, and raise community funding in minutes.
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-8 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/80">Build Progress</span>
                      <span className="text-accent font-bold">{flagship.progress}% Complete</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent via-cyan to-accent-2 transition-all duration-1000"
                        style={{ width: `${flagship.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Dedicated Core Team
                      </span>
                      <p className="mt-1 text-lg font-bold text-white">{flagship.team} Engineers</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Target Public Beta
                      </span>
                      <p className="mt-1 text-lg font-bold text-accent">{flagship.target}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:scale-105"
                  >
                    Request Early Partner Access
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01.3 · ARCHITECTURE PILLARS (Shared Product DNA)
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <SectionHeading
            index="01.3"
            eyebrow="Under the hood"
            title="How we architect"
            highlight="our software"
            description="Every tool in our stack shares a common engineering DNA built for speed, durability, and frictionless user experience."
          />
          <Reveal delay={0.2}>
            <span className="hidden -rotate-2 font-hand text-base text-muted md:inline-block">
              ✦ built to scale without rewriting
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden hand-radius border border-line bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent">{item.num}</span>
                    <span className="hand-radius border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] font-semibold text-muted">
                      {item.badge}
                    </span>
                  </div>

                  <div
                    className={`mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${item.accent} text-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    <item.icon />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>

                <div className="mt-8 border-t border-line/60 pt-4 flex items-center justify-between text-xs font-mono text-muted">
                  <span>AmbrScale Standard</span>
                  <span className="font-hand text-accent font-semibold text-sm">Verified ✓</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          01.4 · PARTNERS CALLOUT (Build with us)
          ========================================================================= */}
      <section className="border-t border-line bg-surface/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl">
              <SectionHeading
                index="01.4"
                eyebrow="Collaborative Craft"
                title="Have a problem"
                highlight="worth solving?"
                description="The same product, design and engineering team that builds this fleet collaborates with visionary founders on high-conviction product opportunities."
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 hand-radius border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-foreground/90 transition-all hover:border-accent hover:shadow-lg"
              >
                Our philosophy
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link href="/contact" className={btnPrimary}>
                Start a conversation
                <span className={circleArrow}>
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Giant Brand */}
      <FinalCTA
        heading="There are still problems"
        highlight="worth solving."
        description="If you see one differently, are building around one, or want to build with us, let's talk."
        buttonText="Start a conversation →"
        href="/contact"
      />
      <GiantBrand />
    </div>
  );
}