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
import ScrollText from "@/components/ScrollText";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectsSlider from "@/components/ProjectsSlider";
import ProductCard from "@/components/ProductCard";
import SponsoredMarquee from "@/components/SponsoredMarquee";

import FinalCTA from "@/components/FinalCTA";
import ShowcaseSection from "@/components/ShowcaseSection";

import { btnPrimary, circleArrow } from "@/lib/constants";
import { services, products } from "@/lib/site";

const stats = [
  { value: "1.2M+", label: "Users powered" },
  { value: "$40M+", label: "GMV processed" },
  { value: "99.99%", label: "Avg. uptime" },
  { value: "4", label: "Products live" },
];

const points = [
  "Every product ships with our name on it",
  "We risk our own money before yours",
  "One team — strategy, design and engineering",
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
     
      <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="Owned & operated"
            title="Products we"
            highlight="ship & sponsor"
            description="Everything below is built by us, for us — live in production, earning on our own name. This is what a product company actually ships."
          />
          <Reveal delay={0.2}>
            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Pitch us your idea{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <SponsoredMarquee />

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="The services"
            highlight="behind the products"
            description="The same in-house team that runs our own stack builds for partners. No agencies, no hand-offs — one team, end to end."
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View services{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
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
                index="03"
                eyebrow="About us"
                title="A small company with"
                highlight="a big obsession"
                description="AmbrScale exists to make ambitious ideas look as good as they deserve. Builders, engineers and strategists who win as one."
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
          index="04"
          eyebrow="How we build"
          title="A pipeline built"
          highlight="for shipping"
          align="center"
        />
        <div className="mt-8">
          <ProcessSteps steps={steps} />
        </div>
      </section>
      <Manifesto />
      <ShowcaseSection
        eyebrow="The build"
        title="Made in-house"
        description="From first commit to first customer, everything rolls through one sharp team. That's how the products get out the door."
        link="/about"
        linkLabel="See how we build"
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
            index="05"
            eyebrow="Powered by us"
            title="Products we"
            highlight="back"
            description="A few of the brands and products running on AmbrScale today — built with the same team that ships our own stack."
          />
        </div>
        <div className="mt-8 pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <ProjectsSlider />
        </div>
      </section>

      <FinalCTA
        heading="Built something in"
        highlight="your head?"
        description="We build our own products, and we power ideas we believe in. Pitch yours — if it's bold, we'll take it seriously."
        buttonText="Pitch us"
      />
    </div>
  );
}

function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-20">
        <p className="mx-auto mt-7 text-base leading-relaxed text-muted sm:text-lg">
          <ScrollText text="ouse team, funded by our own revenue. If it ships under AmbrScale, we own it — the same way we'd own yours. lor One in - house team, funded by our own revenue. If it ships under AmbrScale, we own it — the same way we'd own yours. lora" />
        </p>
      </div>
    </section>
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
          Shipping products since 2021 — 4 live &amp; counting
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[11vw] font-black leading-[0.92] tracking-tighter sm:text-7xl"
        >
          We ship products that
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
          AmbrScale is a product company. We launch and sponsor software that earns,
          and we build bold ideas for brands that pitch us. Right now we&apos;re
          deep inside Project Aurora — the biggest thing we&apos;ve ever shipped.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/products" className={btnPrimary}>
            Explore products
            <span className={circleArrow}>
              <FiArrowRight />
            </span>
          </Link>
          <Link href="/about" className={btnGhost}>
            Meet the builders
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>


      </motion.div>


    </section>
  );
}












