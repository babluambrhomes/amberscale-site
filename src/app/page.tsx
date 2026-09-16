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
import WorkSlider from "@/components/WorkSlider";
import GiantBrand from "@/components/GiantBrand";

import SplitWords from "@/components/interactions/SplitWords";
import Magnetic from "@/components/interactions/Magnetic";
import StaggerReveal from "@/components/interactions/StaggerReveal";

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

const impacts = [
  {
    num: "01",
    title: "People First",
    desc: "We design for humans first — products that feel effortless, respectful and worth coming back to.",
  },
  {
    num: "02",
    title: "Real world impact",
    desc: "We measure success by real outcomes: revenue, retention and lives made easier.",
  },
  {
    num: "03",
    title: "Long term Value",
    desc: "We build compounding assets — systems and brands that grow stronger every year.",
  },
];

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

        <StaggerReveal className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </StaggerReveal>
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

        <StaggerReveal className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              desc={s.desc}
              href={`/services/${s.slug}`}
              index={i}
              showIndex={false}
            />
          ))}
        </StaggerReveal>
      </section>



      <section className="relative sm:px-6 lg:px-8 max-w-7xl mb-20 mx-auto">
        <StatsGrid items={stats} className="mx-auto  " />
      </section>
      <section id="about" className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1 h-[520px]">
              <Reveal className="absolute left-0 top-0 z-30 w-[58%] -rotate-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-50 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
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
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
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
                <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
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
                <div className="flex items-center gap-3 hand-radius border border-line bg-background/80 px-6 py-4 backdrop-blur glow-accent">
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

      <section className="relative bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="How we Work"
            title="From Insight to"
            highlight="Impact"
            description="We ship products that earn, and we build bold ideas for brands that pitch us. Right now we&apos;re deep inside Project Aurora — the biggest thing we&apos;ve ever shipped."
          />
          <div className="mt-12">
            <WorkSlider />
          </div>
        </div>
      </section>

<section className="relative overflow-hidden bg-accent/5">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-accent/15 mix-blend-multiply" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="col-span-2">
            <SectionHeading
              index="04"
              eyebrow="Our Impact"
              title="Building for a "
              highlight="Better tomorrow"
              description="We ship products that earn, and we build bold ideas for brands that pitch us. Right now we&apos;re deep inside Project Aurora — the biggest thing we&apos;ve ever shipped."
            />
          </div>

        <div className="col-span-3 grid  grid-cols-3 items-end gap-5 ">
  {impacts.map((p, i) => (
    <StaggerReveal key={p.num} className="h-full">
      <div
        className={`group pr-5 sm:pr-8 ${
          i !== impacts.length - 1 ? "border-r" : ""
        }`}
      >
        <span className="font-mono text-sm font-bold text-accent">
          {p.num}
        </span>

        <div>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {p.title}
          </h3>

          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
            {p.desc}
          </p>
        </div>
      </div>
    </StaggerReveal>
  ))}
</div>
        </div>
      </section>


     <section className="relative overflow-hidden border-y border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-20">
        <p className="mx-auto mt-7 text-base leading-relaxed text-muted sm:text-lg">
          <ScrollText text="ouse team, funded by our own revenue. If it ships under AmbrScale, we own it — the same way we'd own yours. lor One in - house team, funded by our own revenue. If it ships under AmbrScale, we own it — the same way we'd own yours. lora" />
        </p>
      </div>
    </section>



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
      <GiantBrand />
    </div>
  );
}



function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 pb-16"
    >
      {/* Background image — parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-x-0 -top-16 -bottom-16 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 z-10 bg-black/55" aria-hidden />
      {/* <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-black/60"
        aria-hidden
      /> */}

      {/* Hand-drawn corner marks */}
      <svg
        className="absolute left-8 top-24 z-20 hidden text-white/30 md:block"
        width="90"
        height="90"
        viewBox="0 0 110 110"
        fill="none"
        aria-hidden
      >
        <path
          d="M55 55 C 55 37 67 30 77 38 C 86 45 84 60 69 66 C 55 72 44 60 48 47 C 51 36 64 33 71 41"
          className="stroke-current"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute right-8 top-24 z-20 hidden text-white/25 md:block"
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        aria-hidden
      >
        <path
          d="M55 55 C 55 37 67 30 77 38 C 86 45 84 60 69 66 C 55 72 44 60 48 47 C 51 36 64 33 71 41"
          className="stroke-current"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Centered content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-20 mx-auto w-full max-w-4xl px-4 text-center sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 hand-radius -rotate-1 border border-white/20 bg-white/10 px-5 py-2 font-hand text-lg text-white backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse" />
          Shipping since 2021 — 4 live &amp; counting
        </motion.div>

        <h1 className="mt-8 text-7xl font-black leading-[0.95] tracking-tighter text-white">
          <SplitWords text="We ship products that" delay={0.15} stagger={0.05} y={40} />
          <br />
          <span className="hand-underline inline-block">
            <SplitWords
              text="help you scale."
              delay={0.35}
              stagger={0.05}
              y={40}
              className="text-[1.08em]"
            />
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          AmbrScale is a <strong className="font-bold text-white">product company</strong>.
          We launch and sponsor software that <strong className="font-bold text-white">earns</strong>,
          and we build bold <span className="hand-underline font-semibold text-white">ideas for brands</span> that pitch us.
          Right now we&apos;re deep inside <strong className="font-bold text-white">Project Aurora</strong> — the biggest thing we&apos;ve ever shipped.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-7 pr-3 text-sm font-semibold text-accent shadow-lg transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Explore products
              <span className={circleArrow}>
                <FiArrowRight />
              </span>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 py-2.5 pl-7 pr-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              Meet the builders
              <span className={circleArrow}>
                <FiArrowUpRight />
              </span>
            </Link>
          </Magnetic>
          <div className="flex items-center gap-1.5 pt-1">
            <svg width="34" height="30" viewBox="0 0 40 34" fill="none" aria-hidden>
              <path
                d="M6 6 C 14 8, 16 18, 14 24 C 12 30, 22 30, 28 26"
                className="stroke-accent-2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M22 20 L 28 26 L 24 30"
                className="stroke-accent-2"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-hand text-xl text-accent-2 -rotate-2">
              start here →
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint — hand-written */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60">
        <span className="font-hand text-lg -rotate-2">scroll</span>
        <svg
          className="h-5 w-5 animate-bounce stroke-white/60"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}












