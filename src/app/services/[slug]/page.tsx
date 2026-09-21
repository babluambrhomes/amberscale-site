import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiTarget,
  FiSearch,
  FiLayers,
  FiMaximize2,
  FiCode,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceFaqs from "@/components/ServiceFaqs";
import GiantBrand from "@/components/GiantBrand";
import SplitWords from "@/components/interactions/SplitWords";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Services — AmbrScale`,
    description: service.desc,
  };
}

const featureIcons = [FiZap, FiTarget, FiSearch, FiLayers];

const deliveryProcess = [
  {
    step: "01",
    phase: "Week 1",
    title: "Discovery & Blueprint",
    desc: "We align on business objectives, user flows, API integrations, and performance benchmarks before writing a line of code.",
    badge: "Phase 01",
  },
  {
    step: "02",
    phase: "Weeks 2–3",
    title: "Design System & Prototypes",
    desc: "Interactive Figma prototypes and component design tokens designed to ensure brand consistency and seamless UX.",
    badge: "Phase 02",
  },
  {
    step: "03",
    phase: "Weeks 3–6",
    title: "Full-Stack Development",
    desc: "Weekly staging previews on Vercel/Cloudflare with continuous CI/CD integration, edge caching, and automated testing.",
    badge: "Phase 03",
  },
  {
    step: "04",
    phase: "Post-Launch",
    title: "Ship & Scale",
    desc: "Seamless DNS cutover, Lighthouse score audits, telemetry monitoring, and 30-day dedicated post-launch support.",
    badge: "Phase 04",
  },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const position = services.findIndex((s) => s.slug === slug);
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      {/* Detail Hero Header */}
      <DetailHero
        image={service.img}
        eyebrow={service.title}
        title={service.title}
        description={service.desc}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        meta={[
          { label: "discipline rank", value: `0${position + 1} / 0${services.length}` },
          { label: "engagement model", value: "Fixed Scope & Sprints" },
        ]}
      />

      {/* =========================================================================
          SLA & OUTCOME METRICS GRID
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {service.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden hand-radius border border-line bg-surface/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <span className="font-hand text-xs text-accent-2">benchmark ✦</span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                    {s.value}
                  </span>
                  <p className="mt-1 text-xs font-medium text-muted">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          01 · SERVICE OVERVIEW & 4 FEATURE BENTO CARDS
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Overview Story & CTAs (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              index="01"
              eyebrow="Service overview"
              title={service.title}
              description={service.longDesc}
            />

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="hand-radius border border-line bg-surface/90 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Pitch this build
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 hand-radius border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground/90 transition-all hover:border-accent/50 hover:shadow-md"
                >
                  All capabilities
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: 4 Feature Bento Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden hand-radius border border-line bg-surface/90 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform group-hover:scale-110">
                          <Icon className="text-base" />
                        </div>
                      </div>

                      <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-3 flex items-center justify-between text-xs font-mono text-muted">
                      <span>Standard feature</span>
                      <span className="font-hand text-accent font-semibold">Included ✓</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 · INTERACTIVE STUDIO APP WINDOW SHOWCASE
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet/10 blur-[100px]"
          aria-hidden
        />

        <Reveal>
          <div className="group relative overflow-hidden rounded-[24px] border border-line bg-surface shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/10">
            {/* macOS App Header Bar */}
            <div className="flex items-center justify-between border-b border-line bg-surface-2/80 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 hidden font-mono text-xs text-muted sm:inline-block">
                  studio.ambrscale.com/services/{slug}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] font-bold text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  ACTIVE CAPABILITY
                </span>
                <div className="rounded-lg bg-surface p-1.5 text-muted shadow-sm group-hover:text-accent">
                  <FiMaximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Visual Canvas Area */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
              <Image
                src={service.img}
                alt={`${service.title} engineering view`}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Floating Bottom Card Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white/20 bg-black/60 p-5 backdrop-blur-md text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent-2 font-bold">ENGINEERED BY AMBRSCALE</span>
                    <span className="text-xs uppercase tracking-wider text-white/70">
                      · {service.title}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {service.highlights?.[0] || "High-performance architecture built for conversion, security and scale."}
                  </p>
                </div>
                <span className="font-hand text-sm text-accent-2 shrink-0">
                  clean code, zero debt ✦
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          03 · WHAT'S INCLUDED & BATTLE-TESTED TECH STACK
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 border-t border-line">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Deliverables Checklist */}
          <div>
            <SectionHeading
              index="02"
              eyebrow="What's included"
              title="Transparent scope."
              highlight="Guaranteed output."
              description="Every engagement comes with explicit deliverables, zero hidden fees, and production-grade handovers."
            />
            <div className="mt-10 space-y-3.5">
              {service.deliverables.map((d, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-center gap-3.5 text-sm font-medium text-foreground/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent font-bold">
                      <FiCheck className="text-xs" />
                    </span>
                    {d}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Technology Stack */}
          <div>
            <SectionHeading
              index="03"
              eyebrow="Under the hood"
              title="Tools &"
              highlight="frameworks"
              description="We choose technologies based on runtime speed, developer ergonomics, and long-term maintainability."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="hand-radius border border-line bg-surface/80 px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:border-accent/50 hover:bg-surface hover:text-accent shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 p-6 rounded-2xl border border-line bg-surface/60 backdrop-blur-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-2 font-bold">
                  TECH CONSULTATION
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Have an existing stack or legacy codebase? We conduct full architecture audits and seamless migrations without downtime.
                </p>
                <Link
                  href="/contact"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent"
                >
                  Schedule an engineering audit{" "}
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 · 4-PHASE DELIVERY PROCESS (High-Contrast Dark Studio Section)
          ========================================================================= */}
      <section className="relative border-y border-line bg-[#0c0e17] text-white py-24 sm:py-32 overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/3 top-10 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">04</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-hand text-2xl text-accent-2 -rotate-1">
                    How we deliver
                  </span>
                </div>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white">
                <SplitWords text="A disciplined process" y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text="built for speed" y={20} className="text-[1.08em]" />
                </span>
              </h2>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Transparent weekly sprint cadence with staging deployments — zero black boxes.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-2 hand-radius border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md text-white/90 font-hand text-lg rotate-1 shadow-lg">
                <span className="text-emerald-400">✦</span>
                <span>weekly previews, no surprises</span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-accent/20">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="hand-radius border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-semibold text-white/90">
                        {p.phase}
                      </span>
                      <span className="font-mono text-2xl font-black text-accent">
                        {p.step}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                    <span>Milestone 0{i + 1}</span>
                    <span className="font-mono text-accent font-bold">Standard ✓</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 · SERVICE SPECIFIC FAQS
          ========================================================================= */}
      <ServiceFaqs faqs={service.faqs} />

      {/* =========================================================================
          06 · OTHER DISCIPLINES IN FLEET
          ========================================================================= */}
      <section className="border-t border-line bg-surface/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              index="06"
              eyebrow="Keep exploring"
              title="Other services"
              highlight="we offer"
            />
            <Reveal delay={0.15}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                View all services{" "}
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 0.08}>
                <ServiceCard
                  title={o.title}
                  desc={o.desc}
                  href={`/services/${o.slug}`}
                  index={i}
                  showIndex={false}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Giant Brand */}
      <FinalCTA
        heading="Ready to build"
        highlight="something enduring?"
        description="Every project is handled by the same in-house team that powers our own software. Let's discuss your timeline and technical requirements."
        buttonText="Pitch your build"
      />
      <GiantBrand />
    </div>
  );
}