"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiCompass,
  FiTarget,
  FiUsers,
  FiHeart,
  FiArrowRight,
  FiCheck,
  FiShield,
  FiZap,
  FiActivity,
  FiLayers,
} from "react-icons/fi";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import StatsGrid from "@/components/StatsGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SplitWords from "@/components/interactions/SplitWords";
import StaggerReveal from "@/components/interactions/StaggerReveal";
import {
  HandCircle,
  HandArrow,
  HandSparkle,
  HandBadge,
  HandStickyNote,
  HandStamp,
} from "@/components/HandDrawnAccents";

const beliefs = [
  {
    icon: FiCompass,
    title: "Problems before products",
    desc: "A good product starts with a problem people actually experience. We study real friction before writing the first line of code.",
    tag: "Belief #01",
    accentColor: "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30",
    doodle: "✦",
  },
  {
    icon: FiTarget,
    title: "Evidence before certainty",
    desc: "The fastest way to learn is to test what we might be wrong about. We validate the riskiest assumptions before investing heavily.",
    tag: "Belief #02",
    accentColor: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30",
    doodle: "◎",
  },
  {
    icon: FiZap,
    title: "Clarity over complexity",
    desc: "The best products make difficult things feel understandable. We engineer straightforward solutions to non-trivial problems.",
    tag: "Belief #03",
    accentColor: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
    doodle: "⚡",
  },
  {
    icon: FiShield,
    title: "Ownership over output",
    desc: "Shipping a feature is not the same as creating value. We care about whether the product actually works in the real world.",
    tag: "Belief #04",
    accentColor: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    doodle: "✓",
  },
  {
    icon: FiHeart,
    title: "Long-term over launch day",
    desc: "A launch is a beginning. The real product is what happens after it — learning from users, iterating, and compounding value.",
    tag: "Belief #05",
    accentColor: "from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30",
    doodle: "♥",
  },
];

const companyPillars = [
  {
    number: "01",
    phase: "The Model",
    title: "Built from the problem outward",
    desc: "We are organised around finding problems, building products, and taking responsibility for what happens after launch.",
    badge: "Architecture 01",
  },
  {
    number: "02",
    phase: "Operating Cadence",
    title: "Less ceremony. More signal.",
    desc: "We keep teams small and close to the product. Product, design, tech and business decisions inform one another directly.",
    badge: "Architecture 02",
  },
  {
    number: "03",
    phase: "Multi-Market Horizon",
    title: "Different problems. One way of building.",
    desc: "Each product has its own identity and market reality, while sharing AmbrScale's product discipline and engineering standards.",
    badge: "Architecture 03",
  },
  {
    number: "04",
    phase: "Long-Term Compounding",
    title: "Building what matters",
    desc: "Some ideas become products; some change when meeting reality. The goal is to turn the right ideas into lasting businesses.",
    badge: "Active Horizon",
    current: true,
  },
];

const cultureValues = [
  {
    name: "Curious",
    behaviour: "Ask better questions before reaching for familiar answers.",
    doodle: "✦",
  },
  {
    name: "Direct",
    behaviour: "Say what is true, what is uncertain and what needs to change.",
    doodle: "⚡",
  },
  {
    name: "Responsible",
    behaviour: "Own decisions and their real-world consequences.",
    doodle: "◎",
  },
  {
    name: "Restless",
    behaviour: "Keep improving even when something already works.",
    doodle: "↗",
  },
  {
    name: "Human",
    behaviour: "Build with empathy for the people using and living with the product.",
    doodle: "♥",
  },
];

const credibilityPromises = [
  {
    title: "Clear thinking",
    detail: "We explain the problem before presenting the solution.",
    num: "01",
  },
  {
    title: "Honest progress",
    detail: "We distinguish what exists, what is being tested and what is still an idea.",
    num: "02",
  },
  {
    title: "Real ownership",
    detail: "We take responsibility for the product beyond the moment it ships.",
    num: "03",
  },
  {
    title: "Continuous learning",
    detail: "We treat feedback, usage data and operating reality as product inputs.",
    num: "04",
  },
];

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder · Strategy",
    ownership: "Owns company strategy, problem discovery, and product thesis at AmbrScale.",
    experience: "8+ years in software strategy, venture product management, and systems design.",
    perspective: "Believes in de-risking the toughest assumptions before writing heavy production code.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sara Khan",
    role: "Design Lead",
    ownership: "Owns interface design systems, user experience research, and visual craft.",
    experience: "Product designer previously leading UX for high-complexity web tools and consumer products.",
    perspective: "Believes the best design removes friction and makes intricate logic feel effortless.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dev Patel",
    role: "Engineering Lead",
    ownership: "Owns technical architecture, production engineering, and platform durability.",
    experience: "Full-stack systems engineer focused on scalable TypeScript, Next.js, and edge computing.",
    perspective: "Obsessed with sub-second latency, clean maintainable code, and zero technical debt.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff66?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Maya Joshi",
    role: "Product & Growth",
    ownership: "Owns operational validation, market research, and post-launch learning loops.",
    experience: "Background in product operations, growth telemetry, and digital market analysis.",
    perspective: "Measures success by whether real users find recurring, tangible utility.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  },
];

const stats = [
  { value: "01", label: "Product in development" },
  { value: "6-Stage", label: "Validation framework" },
  { value: "100%", label: "In-house ownership" },
  { value: "10-Year", label: "Long-term horizon" },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 01 About Hero */}
      <PageHero
        eyebrow="About AmbrScale"
        title="We are building a company around"
        highlight="problems worth solving."
        description="AmbrScale is a technology company focused on building products for real-world problems. We bring product thinking, design, engineering and business together to turn opportunities into useful products — and useful products into lasting businesses."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop"
      />

      {/* 02 Why AmbrScale Exists Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why We Exist"
              title="Technology is changing faster"
              // highlight="than the systems around us."
            />
            <Reveal delay={0.16}>
              <p className="mt-6 leading-relaxed text-muted text-base sm:text-lg">
                Every industry has moments where the old way of doing things stops making sense. People adapt. Businesses adapt. But the products they rely on often lag behind.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 leading-relaxed text-muted text-base sm:text-lg">
                AmbrScale exists to close that gap. We look for places where technology can make something simpler, more useful, more accessible or fundamentally better — then we build toward that opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-4 sm:p-5">
                <p className="font-medium text-foreground text-sm sm:text-base leading-relaxed">
                  &ldquo;We are not interested in building technology for its own sake. We are interested in what better technology can make possible.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative order-first lg:order-none h-[520px]">
            <Reveal className="absolute left-0 top-0 z-30 w-[58%] -rotate-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden hand-radius border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                  alt="AmbrScale product team at work"
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
                  alt="Product architecture workspace"
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
                  alt="Deep problem exploration"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="absolute -bottom-6 left-4 sm:left-8 z-40">
              <div className="flex items-center gap-3 hand-radius border border-line bg-background/90 px-6 py-4 backdrop-blur glow-accent">
                <span className="text-2xl font-black text-accent">10Y</span>
                <span className="text-xs uppercase tracking-widest text-muted">Long-term<br />horizon</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 What AmbrScale Is (Thesis & Institutional Metrics) */}
      <section className="border-t border-line bg-surface/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
           
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A product company, built from the problem outward.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              We are not organised around delivering projects for clients. We are organised around finding problems, building products and taking responsibility for what happens after launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              That means we stay close to the product from the first question through design, engineering, launch, measurement and iteration. The work does not end when something ships.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
              <span>✦ Build it. Put it in the real world. Learn. Improve. Repeat.</span>
            </div>
          </div>

          <div className="mt-12">
            <StatsGrid items={stats} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          04: THE COMPANY WE ARE BUILDING (One Company, Multiple Opportunities)
          ========================================================================= */}
      <section className="relative border-t border-line bg-gradient-to-b from-surface/80 via-surface/30 to-background py-20 sm:py-28 overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan/5 blur-[100px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Company We Are Building"
              title="Different problems."
              highlight="One way of building."
              description="Over time, AmbrScale will build across markets where we believe better technology can create meaningful value. Each product has its own identity while sharing our core product discipline."
            />
            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-2 hand-radius border border-accent/30 bg-accent/10 px-4 py-2 text-accent font-hand text-base -rotate-2 shadow-sm">
                <span>✦ one company, multiple problems</span>
              </div>
            </Reveal>
          </div>

          {/* Pillars Grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyPillars.map((t, i) => (
              <Reveal key={t.number} delay={i * 0.1}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden hand-radius border bg-surface/90 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    t.current
                      ? "border-accent shadow-lg shadow-accent/10 ring-2 ring-accent/20"
                      : "border-line hover:border-accent/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`hand-radius px-3 py-1 font-mono text-xs font-bold ${
                          t.current
                            ? "border border-accent bg-accent text-white"
                            : "border border-line bg-surface-2 text-muted"
                        }`}
                      >
                        {t.badge}
                      </span>
                      <span className="font-mono text-2xl font-black tracking-tight text-accent">
                        {t.number}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          t.current ? "bg-emerald-500 animate-pulse" : "bg-accent/40"
                        }`}
                      />
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                        {t.phase}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
                  </div>

                  <div className="mt-8 border-t border-line/60 pt-4 flex items-center justify-between text-xs font-medium text-muted">
                    <span>Dimension 0{i + 1}</span>
                    <span className="font-hand text-sm text-accent transition-transform group-hover:translate-x-1">
                      {t.current ? "Active Build →" : "Core System ✓"}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05: WHAT WE BELIEVE (Our Beliefs) — High-Contrast Dark Theme
          ========================================================================= */}
      <section id="principles" className="relative border-y border-line bg-[#0c0e17] text-white py-24 sm:py-32 overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-10 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[380px] rounded-full bg-violet/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
             
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white">
                <SplitWords text="A few things we" y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text="believe strongly." y={20} className="text-[1.08em]" />
                </span>
              </h2>
              <Reveal delay={0.16}>
                <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                  Every product we build, every sprint we plan, and every decision we make is guided by these five core convictions.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-2 hand-radius border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-md text-white/90 font-hand text-lg rotate-1 shadow-lg">
                <span className="text-cyan">✦</span>
                <span>evidence before certainty</span>
              </div>
            </Reveal>
          </div>

          {/* 5 Beliefs Bento Grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {beliefs.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-accent/20">
                  <div className="flex items-center justify-between">
                    <span className="hand-radius border border-white/15 bg-white/10 px-3.5 py-1 font-mono text-xs font-semibold text-white/90">
                      {v.tag}
                    </span>
                    <span className="font-hand text-2xl text-white/40 transition-transform duration-300 group-hover:scale-125 group-hover:text-accent">
                      {v.doodle}
                    </span>
                  </div>

                  <div className="mt-8">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${v.accentColor} text-2xl transition-transform duration-500 group-hover:scale-110`}
                    >
                      <v.icon />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70">{v.desc}</p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                    <span>AmbrScale Conviction</span>
                    <span className="font-mono text-accent font-semibold">0{i + 1} / 05</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hand-drawn note inside dark beliefs section */}
          <Reveal delay={0.2}>
            <div className="mt-12 max-w-2xl mx-auto">
              <HandStickyNote
                title="FOUNDER STANDARD"
                text="We treat feedback, telemetry, and operating reality as direct product inputs. If the evidence disagrees with our hypothesis, the hypothesis changes."
                author="AmbrScale Engineering & Product"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          06: THE PEOPLE BEHIND AMBRSCALE (Team & Real Experience)
          ========================================================================= */}
      <section id="people" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The People Behind AmbrScale"
            title="Small team. Different strengths."
            // highlight="Shared ownership."
            description="AmbrScale is built by people working across product, design, technology, growth and business. We bring different disciplines into the same conversation."
          />
          <Reveal delay={0.2}>
            <span className="hidden -rotate-2 font-hand text-base text-accent md:inline-block">
              ✦ context, not assumptions
            </span>
          </Reveal>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Past work gives us context, not a shortcut. Every new product still has to earn its place with users.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group flex h-full flex-col justify-between rounded-3xl  bg-surface/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 ">
               <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                <div className="p-4">
                 
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {m.name}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-accent mt-0.5">
                      {m.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/90 font-medium">
                      {m.ownership}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      <span className="font-semibold text-foreground/80">Background: </span>
                      {m.experience}
                    </p>
                  </div>
                </div>

                <div className=" border-t border-line/60 p-4">
                  <p className="text-[11px] leading-relaxed text-muted italic">
                    &ldquo;{m.perspective}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

  
      <FinalCTA
        heading="There are still problems"
        highlight="worth solving."
        description="If you see one differently, are building around one, or want to build with us, let's talk."
        buttonText="Start a conversation"
        href="/contact"
        secondaryText="See what we're building"
        secondaryHref="/products"
      />
    </div>
  );
}