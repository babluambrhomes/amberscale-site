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
import Marquee from "@/components/Marquee";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectsSlider from "@/components/ProjectsSlider";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { services } from "@/lib/site";

const btnGhost =
  "group inline-flex items-center gap-2 rounded-full border border-line py-2.5 pl-7 pr-3 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Marquee />
     
      <Services />
      <Projects />
      <Stats />
      <Process />
      <AboutPreview />
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
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <motion.div
        style={{ y: yWord, opacity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none"
        aria-hidden
      >
        <span className="text-outline block whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-tighter opacity-70">
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
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
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





function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
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
              href="/services"
              index={i}
              showIndex={false}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-y border-line bg-surface/40 py-24 sm:py-32">
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
  );
}

function Stats() {
  const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "30+", label: "Happy clients" },
    { value: "5+", label: "Years of experience" },
    { value: "24/7", label: "Support & care" },
  ];

  return (
    <section className="relative border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 0.07}
            className="group relative flex flex-col items-center gap-2 border-r border-line px-6 py-16 text-center last:border-r-0"
          >
            <span className="text-4xl font-black tracking-tight sm:text-6xl">
              <span
                className={
                  i % 2 === 0
                    ? "bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent"
                    : "text-foreground"
                }
              >
                {s.value}
              </span>
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { step: "01", title: "Discover", desc: "We dig into your goals, audience and market to define what winning looks like." },
    { step: "02", title: "Design", desc: "We shape strategy into an experience and visual language that is unmistakably yours." },
    { step: "03", title: "Build", desc: "We engineer with obsessive detail — fast, secure and ready to grow." },
    { step: "04", title: "Scale", desc: "We launch, measure and iterate, standing beside you well beyond day one." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
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
  );
}

function AboutPreview() {
  const points = [
    "Strategy, design and build — all in-house",
    "Radically honest timelines and pricing",
    "Projects treated like they carry our name",
  ];

  return (
    <section id="about" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-10">
                <div className="relative h-72 overflow-hidden rounded-3xl border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                    alt="Team collaborating"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative h-72 overflow-hidden rounded-3xl border border-line">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                    alt="Workspace"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="absolute -bottom-6 left-4 sm:left-8">
              <div className="flex items-center gap-3 rounded-full border border-line bg-background/80 px-6 py-4 backdrop-blur glow-accent">
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
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
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
  );
}

function FinalCTA() {
  return (
    <section id="contact-cta" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-4xl font-black leading-[0.95] tracking-tighter sm:text-6xl">
            Got an idea?
            <br />
            <span className="text-outline-accent">Let&apos;s scale it.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Tell us where you want to go. We&apos;ll figure out how to get you there faster than
            you thought possible.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link href="/contact" className={`${btnPrimary} mt-9`}>
            Start the conversation{" "}
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}