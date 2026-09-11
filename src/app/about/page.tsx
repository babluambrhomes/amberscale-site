"use client";

import Image from "next/image";
import { FiCompass, FiTarget, FiUsers, FiHeart } from "react-icons/fi";
import FeatureCard from "@/components/FeatureCard";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import StatsGrid from "@/components/StatsGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TeamSlider from "@/components/TeamSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";

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
  { year: "2026", title: "Scaling with partners", desc: "We build alongside brands and teams who believe in what we make." },
];

const stats = [
  { value: "1.2M+", label: "Users powered" },
  { value: "$40M+", label: "GMV processed" },
  { value: "4", label: "Products live" },
  { value: "100%", label: "Build obsession" },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="02"
        eyebrow="About"
        title="A product company with a"
        highlight="big obsession"
        description="AmbrScale ships its own software and powers ideas we believe in. Builders first, everything else second."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="02.1"
              eyebrow="Our story"
              title="Why we started"
              highlight="AmbrScale"
              br
            />
            <Reveal delay={0.16}>
              <p className="mt-6 leading-relaxed text-muted">
                We kept seeing the same pattern: brilliant businesses with average-looking digital
                presence. Great product, forgettable website, muddy brand story.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 leading-relaxed text-muted">
                So we built the company we wished existed. A place where strategy, design and
                engineering work as one — and where every product is treated like it&apos;s our own
                name on the line.
              </p>
            </Reveal>
          </div>

          <div className="relative order-first lg:order-none h-[520px]">
            <Reveal className="absolute left-0 top-0 z-30 w-[58%] -rotate-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                  alt="Team collaborating"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="absolute right-0 top-[26%] z-20 w-[55%] rotate-3 transition-all duration-300 hover:-translate-y-6 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                  alt="Workspace"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="absolute left-[12%] bottom-0 z-10 w-[50%] -rotate-1 transition-all duration-300 hover:-translate-y-8 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                  alt="Meeting"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="absolute -bottom-6 left-4 sm:left-8 z-40">
              <div className="flex items-center gap-3 rounded-2 border border-line bg-background/80 px-6 py-4 backdrop-blur glow-accent">
                <span className="text-2xl font-black text-accent">5+</span>
                <span className="text-xs uppercase tracking-widest text-muted">years of<br />craft</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsGrid items={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="space-y-1 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
          <div>
            <div className="max-w-xl pb-8">
              <SectionHeading
                index="02.3"
                eyebrow="The journey"
                title="Milestones we"
                highlight="hit"
              />
            </div>
            <div className="space-y-1">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative flex gap-6 rounded-md border border-transparent p-6 transition-all duration-300 hover:border-line hover:bg-surface/60">
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
            <div className="max-w-xl pb-8">
              <SectionHeading
                index="02.4"
                eyebrow="What we believe"
                title="Values we"
                highlight="work by"
              />
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <FeatureCard icon={<v.icon />} title={v.title} desc={v.desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02.5"
            eyebrow="Kind words"
            title="Clients who"
            highlight="stuck with us"
            align="center"
          />
          <div className="mt-8">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <SectionHeading
              index="02.2"
              eyebrow="The crew"
              title="Meet the"
              highlight="bench"
            />
          </div>
          <div className="mt-8">
            <TeamSlider />
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Come build with us."
        highlight="We don't bite."
        buttonText="Get in touch"
      />
      
    </div>
  );
}