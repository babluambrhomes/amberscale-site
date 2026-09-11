"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import ProcessSteps from "@/components/ProcessSteps";
import StatsGrid from "@/components/StatsGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectsSlider from "@/components/ProjectsSlider";
import FinalCTA from "@/components/FinalCTA";
import ShowcaseSection from "@/components/ShowcaseSection";
import TrustedBy from "@/components/TrustedBy";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { services } from "@/lib/site";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
  { value: "24/7", label: "Support & care" },
];

const points = [
  "Strategy, design and build — all in-house",
  "Radically honest timelines and pricing",
  "Projects treated like they carry our name",
];
const steps = [
  { step: "01", title: "Discover", desc: "We dig into your goals, audience and market to define what winning looks like." },
  { step: "02", title: "Design", desc: "We shape strategy into an experience and visual language that is unmistakably yours." },
  { step: "03", title: "Build", desc: "We engineer with obsessive detail — fast, secure and ready to grow." },
  { step: "04", title: "Scale", desc: "We launch, measure and iterate, standing beside you well beyond day one." },
];

const btnGhost =
  "group inline-flex items-center gap-2 rounded-2 border border-line py-2.5 pl-7 pr-3 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="What we do"
            title="Services engineered"
            highlight="to perform"
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View all services{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="bg-background">
              <ServiceCard
                title={s.title}
                desc={s.desc}
                href={`/services/${s.slug}`}
                index={i}
                showIndex={false}
              />
            </Reveal>
          ))}
        </div>
      </section>



      <section className="relative sm:px-6 lg:px-8 max-w-7xl mb-20 mx-auto">
        <StatsGrid items={stats} className="mx-auto  " />
      </section>
      <section id="about" className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1 h-[520px]">
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

            <div className="order-1 lg:order-2">
              <SectionHeading
                index="04"
                eyebrow="About us"
                title="A small team with"
                highlight="a big obsession"
                description="AmbrScale exists to make ambitious businesses look as good as their ideas. Creators, engineers and strategists who win as one."
              />
              <Reveal delay={0.2}>
                <ul className="mt-8 space-y-3">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-2 bg-accent/15 text-accent">
                        <FiCheck className="text-xs" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.28}>
                <Link href="/about" className={`${btnPrimary} mt-10`}>
                  More about us
                  <span className={circleArrow}>
                    <FiArrowRight />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <SectionHeading
          index="03"
          eyebrow="How we work"
          title="A process built"
          highlight="for results"
          align="center"
        />
        <div className="mt-14">
          <ProcessSteps steps={steps} />
        </div>
      </section>
      <ShowcaseSection
        eyebrow="Our approach"
        title="Built different"
        description="We don't just ship pixels. Every project gets strategy, craft and engineering fused into one sharp delivery."
        link="/about"
        linkLabel="See how we work"
        bg={{
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
          alt: "Team at work",
        }}
        cards={[
          { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" },
          { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
          { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" },
        ]}
      />
      <section id="work" className="border-y border-line bg-surface/40 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Projects we're"
            highlight="proud of"
            description="Drag, click or just watch it roll — a few highlights from recent engagements, the way we like to show them."
          />
        </div>
        <div className="mt-14 pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <ProjectsSlider />
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yWord = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="grid-lines absolute inset-0 opacity-50 " aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-2 bg-violet/25 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-2 bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <motion.div
        style={{ y: yWord, opacity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none"
        aria-hidden
      >
        <span className="text-outline block whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-tighter opacity-30">
          SCALE
        </span>
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-2 border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-2 bg-accent animate-pulse" />
          Available for new projects — 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[11vw] font-black leading-[0.92] tracking-tighter sm:text-7xl"
        >
          We build digital services that
          <br />
          <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
            help you scale.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          AmbrScale is a crew of designers, developers and strategists. We craft websites,
          brands and campaigns that make ambitious businesses impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/services" className={btnPrimary}>
            Explore services
            <span className={circleArrow}>
              <FiArrowRight />
            </span>
          </Link>
          <Link href="/about" className={btnGhost}>
            Meet the team
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>


      </motion.div>


    </section>
  );
}












