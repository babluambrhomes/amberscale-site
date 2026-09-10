"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { btnPrimary, circleArrow } from "@/lib/constants";
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
        title="Everything you need to"
        highlight="build and grow"
        description="A full stack of digital services under one roof — so you never have to juggle five agencies to get one website done."
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="bg-background">
              <ServiceCard
                title={s.title}
                desc={s.desc}
                tags={s.tags}
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

          <div className="mt-14">
            <ProcessSteps steps={process} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
          <SectionHeading
            index="01.3"
            eyebrow="Client love"
            title="Real words,"
            highlight="real results"
            align="center"
          />
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