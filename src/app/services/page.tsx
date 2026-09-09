"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiCode,
  FiLayout,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { services } from "@/lib/site";

const serviceIcons: Record<string, typeof FiCode> = {
  code: FiCode,
  layout: FiLayout,
  globe: FiGlobe,
  trending: FiTrendingUp,
  zap: FiZap,
  shield: FiShield,
};

const btnPrimary =
  "group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-7 pr-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_36px_-6px_var(--accent)]";

const circleArrow =
  "flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/25";

const process = [
  { step: "01", title: "Discover", desc: "We dig into your goals, audience and market to define what success looks like." },
  { step: "02", title: "Design", desc: "We translate strategy into a visual language and experience tailored to your brand." },
  { step: "03", title: "Build", desc: "We craft the product with obsessive attention to detail and modern engineering." },
  { step: "04", title: "Scale", desc: "We launch, measure and iterate — supporting you well beyond day one." },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="01"
        eyebrow="Services"
        title="Everything you need to"
        highlight="build and grow"
        description="A full stack of digital services under one roof — so you never have to juggle five agencies to get one website done."
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-line">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/10" />
                  <div className="relative p-7">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-xl text-accent backdrop-blur transition-colors group-hover:bg-accent group-hover:text-background">
                        <Icon />
                      </span>
                      <span className="text-outline font-mono text-3xl font-black">/0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/80">
                      {s.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t, j) => (
                        <span
                          key={j}
                          className="rounded-full border border-line bg-background/50 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">01.1</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  How we work
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                A process built <span className="text-outline">for results</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-line bg-background/50 p-7">
                  <span className="font-mono text-4xl font-black text-accent">{p.step}</span>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">01.2</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  Why AmbrScale
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                One team.
                <br />
                <span className="text-outline">Zero hand-offs.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Most projects die in the gap between designers, developers and marketers. We keep
                everyone under one roof, on one pace, with one shared obsession: your result.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-8 space-y-3">
                {[
                  "Strategy, design and build in-house",
                  "Transparent pricing — no surprise invoices",
                  "Radically honest timelines and communication",
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <FiCheck className="text-xs" />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-violet/20 blur-[100px]" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-violet/10 text-center">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop"
                  alt="AmbrScale team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-10">
                <p className="text-lg font-semibold leading-snug">
                  &quot;They didn&apos;t just build us a website — they built us a brand people
                  remember.&quot;
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                  — Founder, SaaS startup
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xs text-accent">01.3</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  Client love
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Real words, <span className="text-outline">real results</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-surface/60 p-10 sm:flex-row lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to build something great?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell us about your project — we&apos;ll come back with ideas within 48 hours.
            </p>
          </div>
          <Link href="/contact" className={`${btnPrimary} shrink-0`}>
            Start a project
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}