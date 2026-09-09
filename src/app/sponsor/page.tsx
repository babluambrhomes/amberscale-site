"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiCheck, FiZap, FiUsers, FiGlobe, FiHeart } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const perks = [
  { icon: FiZap, label: "Brand exposure across all projects" },
  { icon: FiUsers, label: "Association with a growing team" },
  { icon: FiGlobe, label: "Reach an engaged, global audience" },
  { icon: FiHeart, label: "Support creative work you believe in" },
];

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    label: "Team rig & studio",
    alt: "Gaming setup",
  },
  {
    img: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=800&auto=format&fit=crop",
    label: "Live events",
    alt: "Event crowd",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    label: "Creator setups",
    alt: "Workspace",
  },
];

const tiers = [
  {
    name: "Silver",
    price: "200",
    tagline: "For brands getting started on the bench.",
    features: ["Logo on our website", "Social media shoutout", "Mention in project credits"],
    featured: false,
  },
  {
    name: "Gold",
    price: "500",
    tagline: "For brands ready to play a bigger role.",
    features: [
      "Everything in Silver",
      "Featured logo placement",
      "Dedicated sponsor spotlight",
      "Quarterly brand collab",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "1000",
    tagline: "For partners who want to be in the starting XI.",
    features: [
      "Everything in Gold",
      "Top placement everywhere",
      "Co-branded campaigns",
      "Priority access to new work",
      "Annual partner check-in",
    ],
    featured: false,
  },
];

const btnPrimary =
  "group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-7 pr-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_36px_-6px_var(--accent)]";

const circleArrow =
  "flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/25";

export default function SponsorPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="03"
        eyebrow="Sponsor"
        title="Back the team."
        highlight="Grow with us."
        description="We're a hungry team with momentum. Your sponsorship powers our creative projects — and puts your brand in front of everyone watching."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative h-64 overflow-hidden rounded-3xl border border-line">
                <Image
                  src={g.img}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">{g.label}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background/60 backdrop-blur">
                    <FiArrowUpRight className="text-sm" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full items-center gap-4 rounded-3xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xl text-accent">
                  <p.icon />
                </span>
                <p className="text-sm font-medium leading-snug">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">03.1</span>
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                Sponsor levels
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Pick your <span className="text-outline">seat on the team</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  tier.featured
                    ? "border-accent/60 bg-gradient-to-b from-accent/10 to-surface glow-accent"
                    : "border-line bg-surface/60 hover:border-accent/40"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-black tracking-tight">${tier.price}</span>
                  <span className="pb-1 text-xs text-muted">/ month</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.featured ? "bg-accent text-background" : "bg-accent/15 text-accent"
                        }`}
                      >
                        <FiCheck className="text-xs" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-accent text-background hover:shadow-[0_0_30px_-6px_var(--accent)]"
                      : "border border-line text-foreground hover:border-accent/50"
                  }`}
                >
                  Become {tier.name} <FiArrowUpRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xs text-accent">03.2</span>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                  Partners on the bench
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                What partners <span className="text-outline">say about us</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-surface to-accent/10 p-10 sm:p-16">
          <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Want something <span className="text-outline-accent">fully custom?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-muted">
                  Every partnership is different. If you have a specific idea — a one-off campaign
                  sponsorship, an event, a co-branded drop — let&apos;s talk and shape it together.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/contact" className={`${btnPrimary} mt-8 bg-foreground text-background`}>
                  Talk about a custom deal
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:justify-self-end">
              <div className="relative h-80 w-80 max-w-full overflow-hidden rounded-full border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=700&auto=format&fit=crop"
                  alt="Coming up next"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/30" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-background/70 px-5 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur">
                  The future pipeline
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}