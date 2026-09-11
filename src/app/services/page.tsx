"use client";

import Image from "next/image";
import { FiArrowUpRight, FiLayers, FiShield, FiMessageCircle, FiStar } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site";

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
        title="What we can"
        highlight="build for you"
        description="The same in-house team that runs our own products works on partner projects — engineering, design, strategy and growth, end to end."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="bg-background">
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

      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-xl">
            <SectionHeading
              index="01.1"
              eyebrow="How we work"
              title="A process built"
              highlight="for results"
            />
          </div>

          <div className="mt-8">
            <ProcessSteps steps={process} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-2 bg-violet/15 blur-[140px]" aria-hidden />
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              index="01.2"
              eyebrow="Why AmbrScale"
              title="One team."
              highlight="Zero hand-offs."
              br
            />
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Most projects die in the gap between designers, developers and marketers. We keep
                everyone under one roof, on one pace, with one shared obsession: your result.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-10 space-y-3">
                {[
                  { icon: FiLayers, label: "Strategy, design and build in-house" },
                  { icon: FiShield, label: "Transparent pricing — no surprise invoices" },
                  { icon: FiMessageCircle, label: "Radically honest timelines and communication" },
                ].map((r, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-4 rounded-2 border border-line bg-surface/40 px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface/70"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2 bg-accent/15 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background">
                      <r.icon className="text-lg" />
                    </span>
                    <span className="text-sm font-medium text-foreground/90">{r.label}</span>
                    <FiArrowUpRight className="ml-auto shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-violet/20 blur-[120px]" aria-hidden />
            <div className="relative">
              <div className="relative overflow-hidden rounded-2 border border-line bg-gradient-to-br from-surface to-violet/10 text-center">
                <div className="relative h-60 sm:h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop"
                    alt="AmbrScale team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-2 border border-line bg-background/70 px-3 py-1.5 text-[11px] font-semibold backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-2 bg-accent" />
                    Est. 2021
                  </div>
                </div>

                <div className="px-7 pb-9 pt-11 sm:px-10">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-0.5" aria-label="5 out of 5 star rating">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <FiStar key={j} className="h-4 w-4 fill-current text-accent" />
                      ))}
                    </div>
                    <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                      5.0 from 30+ clients
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-semibold leading-snug">
                    &quot;They didn&apos;t just build us a website — they built us a brand people
                    remember.&quot;
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                    — Founder, SaaS startup
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 z-20 hidden sm:block">
                <div className="flex h-[4.5rem] w-[4.5rem] rotate-6 items-center justify-center rounded-full border border-line bg-background/85 shadow-[0_0_30px_-6px_var(--accent)] backdrop-blur">
                  <div className="-rotate-6">
                    <span className="block text-center text-xl font-black leading-none text-accent">5+</span>
                    <span className="mt-1 block text-center text-[8px] font-medium uppercase tracking-[0.2em] text-muted">years</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}