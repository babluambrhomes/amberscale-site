import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import FinalCTA from "@/components/FinalCTA";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { projects } from "@/lib/site";
import StatsGrid from "@/components/StatsGrid";

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
    title: `${project.title} — AmbrScale`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const position = projects.findIndex((p) => p.slug === slug);
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      <DetailHero
        image={project.img}
        eyebrow={project.category}
        title={project.title}
        description={project.tag}
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
        meta={[
          { label: "", value: project.client },
          { label: "", value: project.year },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsGrid items={project.results} />
        
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="01"
              eyebrow="Overview"
              title={project.title}
              description={project.desc}
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Start a project
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50"
                >
                  All projects
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="space-y-12">
            <Reveal>
              <div>
                <span className="font-mono text-xs font-bold text-accent">/01</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">The challenge</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <span className="font-mono text-xs font-bold text-accent">/02</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">Our solution</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.solution}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.gallery.map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative aspect-[4/3] overflow-hidden border border-line">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Tech stack"
            title="Tools"
            highlight="used"
          />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
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
      </section>

      {project.testimonial && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <figure className="relative overflow-hidden border border-line bg-surface">
              <div
                className="grid-lines pointer-events-none absolute inset-0 opacity-25"
                aria-hidden
              />
              <div className="relative grid lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">03</span>
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                      Client words
                    </span>
                  </div>
                  <blockquote className="mt-8 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-foreground/95 sm:text-3xl">
                    <span className="mr-2 align-middle text-accent">&ldquo;</span>
                    {project.testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2 text-sm font-bold text-accent">
                      {project.testimonial.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{project.testimonial.name}</p>
                      <p className="text-xs text-muted">{project.testimonial.role}</p>
                    </div>
                  </figcaption>
                </div>

                <div className="flex flex-col justify-between gap-10 border-t border-line bg-surface-2/50 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                  <div className="flex items-center gap-2">
                    <FiCheck className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                      Verified client
                    </span>
                  </div>
                  <dl className="space-y-6">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Client
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Engagement
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        Year
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold">{project.year}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </figure>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="04" eyebrow="Keep exploring" title="More projects" highlight="we've built" />
          <Reveal delay={0.15}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View all projects{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA
        heading="Want results"
        highlight="like these?"
        description="Every project is different, but the approach is always the same: understand the problem, build the right thing, measure everything."
        buttonText="Start the conversation"
      />
    </div>
  );
}
