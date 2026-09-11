import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiCheck,
  FiSearch,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import FinalCTA from "@/components/FinalCTA";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceFaqs from "@/components/ServiceFaqs";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { services } from "@/lib/site";
import StatsGrid from "@/components/StatsGrid";

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
    title: `${service.title} — AmbrScale`,
    description: service.desc,
  };
}

const featureIcons = [FiZap, FiTarget, FiSearch, FiZap];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We dig into your goals, users and constraints before a single pixel moves.",
    tag: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    desc: "Concepts, prototypes and direction that everyone can react to early.",
    tag: "Week 2–3",
  },
  {
    step: "03",
    title: "Build",
    desc: "Production-grade engineering with weekly previews — no black boxes.",
    tag: "Week 3–5",
  },
  {
    step: "04",
    title: "Ship & grow",
    desc: "Launch, measure, then keep iterating on what actually moves the needle.",
    tag: "Ongoing",
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
          { label: "", value: `0${position + 1}` },
          { label: "service", value: "Fixed scope" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="01"
              eyebrow="About this service"
              title={service.title}
              description={service.longDesc}
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Pitch this project
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50"
                >
                  All services
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {service.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <Reveal key={i} delay={(i % 2) * 0.08} className="bg-background">
                  <div className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-surface/50">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center border border-line bg-surface/50 text-accent transition-colors duration-300 group-hover:border-accent/40 ">
                      <Icon className="text-lg" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="relative h-80 overflow-hidden border border-line sm:h-[480px]">
          <Image
            src={service.img}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              index="02"
              eyebrow="What's included"
              title="Everything"
              highlight="you get"
              description="A fixed, transparent scope with clear deliverables — no ambiguity, no hidden catches, no surprise invoices."
            />
            <div className="mt-10 space-y-3">
              {service.deliverables.map((d, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-accent/15 text-accent">
                      <FiCheck className="text-xs" />
                    </span>
                    {d}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              index="03"
              eyebrow="Tech stack"
              title="Tools we"
              highlight="use"
              description="We pick the right tools for the job — not the trendy ones. Every technology in our stack is proven at scale."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="border border-line bg-surface/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsGrid items={service.stats} />
      </section>


      <section className="border-y border-line bg-surface/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="How we deliver"
            title="A process built"
            highlight="for results"
          />
          <div className="mt-8">
            <ProcessSteps steps={process} />
          </div>
        </div>
      </section>

      <ServiceFaqs faqs={service.faqs} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="06" eyebrow="Keep exploring" title="Other services" highlight="we offer" />
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
        <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 0.08} className="bg-background">
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
      </section>

      <FinalCTA
        heading="Building something"
        highlight="of your own?"
        description="We build our products, and we power ideas we believe in. Pitch yours and we'll take it seriously."
        buttonText="Pitch us"
      />
    </div>
  );
}