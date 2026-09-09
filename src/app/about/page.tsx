"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiCompass, FiTarget, FiUsers, FiHeart } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamSlider from "@/components/TeamSlider";

const values = [
  {
    icon: FiCompass,
    title: "Curiosity",
    desc: "We ask why until the answer is obvious. Great work starts with a great question.",
  },
  {
    icon: FiTarget,
    title: "Precision",
    desc: "Every pixel, every word, every line of code has a job. Nothing ships by accident.",
  },
  {
    icon: FiUsers,
    title: "Partnership",
    desc: "We win when our clients win. Their name is on it, so it has to be our best.",
  },
  {
    icon: FiHeart,
    title: "Care",
    desc: "We sweat the small stuff so your brand never has to apologise for it.",
  },
];

const timeline = [
  { year: "2021", title: "The beginning", desc: "AmbrScale starts as a two-person studio in a shared workspace." },
  { year: "2023", title: "The team grows", desc: "Designers and strategists join — we move from projects to products." },
  { year: "2025", title: "Going global", desc: "Clients across three continents, and a roster of services for every stage." },
  { year: "2026", title: "Scaling with partners", desc: "We open sponsorship to teams and brands who believe in what we build." },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
  { value: "100%", label: "Team obsession" },
];

const btnPrimary =
  "group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-7 pr-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_36px_-6px_var(--accent)]";

const circleArrow =
  "flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/25";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="02"
        eyebrow="About"
        title="A small team with a"
        highlight="big obsession"
        description="AmbrScale exists to help ambitious businesses look as good as their ideas. We are builders first, everything else second."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.07} className="bg-background">
              <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
                <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                  {s.value}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">02.1</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  Our story
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Why we started
                <br />
                <span className="text-outline">AmbrScale</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 leading-relaxed text-muted">
                We kept seeing the same pattern: brilliant businesses with average-looking digital
                presence. Great product, forgettable website, muddy brand story.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 leading-relaxed text-muted">
                So we built the studio we wished existed. A place where strategy, design and
                engineering work as one — and where every project is treated like it&apos;s our own
                name on the line.
              </p>
            </Reveal>
          </div>

          <div className="relative order-first lg:order-none">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 overflow-hidden rounded-3xl border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                    alt="Team working together"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <Reveal delay={0.12}>
                  <div className="relative h-64 overflow-hidden rounded-3xl border border-line">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop"
                      alt="Studio space"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.2} className="col-span-2">
                  <div className="relative h-56 overflow-hidden rounded-3xl border border-line">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
                      alt="Strategy session"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">02.2</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  The crew
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Meet the <span className="text-outline">bench</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <TeamSlider />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="space-y-1 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
          <div>
            <div className="max-w-xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">02.3</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                    The journey
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl pb-8">
                  Milestones we <span className="text-outline">hit</span>
                </h2>
              </Reveal>
            </div>
            <div className="space-y-1">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative flex gap-6 rounded-3xl border border-transparent p-6 transition-all duration-300 hover:border-line hover:bg-surface/60">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-sm font-bold text-accent">{t.year}</span>
                      {i < timeline.length - 1 && (
                        <span className="mt-3 h-full w-px flex-1 bg-line" aria-hidden />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-28">
            <div className="max-w-xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">02.4</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                    What we believe
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl pb-8">
                  Values we <span className="text-outline">work by</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group h-full rounded-3xl border border-line bg-surface/50 p-7 transition-colors hover:border-accent/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                      <v.icon />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[0.98] tracking-tighter sm:text-6xl">
              Come build with us. <span className="text-outline-accent">We don&apos;t bite.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <Link href="/contact" className={`${btnPrimary} mt-9`}>
              Get in touch
              <span className={circleArrow}>
                <FiArrowUpRight />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}