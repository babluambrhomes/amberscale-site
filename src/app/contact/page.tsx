"use client";

import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiShield,
  FiZap,
  FiCheck,
  FiCheckCircle,
  FiCopy,
  FiGlobe,
  FiMessageSquare,
  FiChevronDown,
  FiLayers,
  FiCode,
  FiMaximize2,
  FiArrowRight,
  FiCompass,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/interactions/SplitWords";
import {
  HandCircle,
  HandArrow,
  HandSparkle,
  HandBadge,
  HandStickyNote,
  HandStamp,
} from "@/components/HandDrawnAccents";
import { btnPrimary, circleArrow } from "@/lib/constants";

const reachOutOptions = [
  "Product idea / opportunity",
  "Build with AmbrScale",
  "Partnership",
  "Media / speaking",
  "Careers",
  "Other",
];

const stageOptions = [
  "Exploring",
  "Validating",
  "Building",
  "Live",
  "Scaling",
];

const conversationPaths = [
  {
    num: "01",
    title: "You have a product idea",
    desc: "You see an opportunity, have identified a problem or are thinking about building something new.",
    ctaText: "Tell us about the opportunity →",
    targetCategory: "Product idea / opportunity",
  },
  {
    num: "02",
    title: "You want to build with us",
    desc: "You are a designer, engineer, product thinker, operator or builder interested in joining the journey.",
    ctaText: "Meet the team →",
    targetCategory: "Build with AmbrScale",
  },
  {
    num: "03",
    title: "You see a partnership opportunity",
    desc: "You represent a company, technology, distribution channel or organisation with a meaningful opportunity to explore.",
    ctaText: "Start a partnership conversation →",
    targetCategory: "Partnership",
  },
  {
    num: "04",
    title: "Something else",
    desc: "You have a question or a reason to reach out that does not fit the categories above.",
    ctaText: "Send us a note →",
    targetCategory: "Other",
  },
];

const studioPromises = [
  {
    num: "01",
    title: "Clear Thinking & First Principles",
    desc: "We explain the problem before presenting the solution. Every product decision starts with real-world evidence, not assumption.",
    doodle: "✦",
  },
  {
    num: "02",
    title: "Honest Progress & True Candor",
    desc: "We clearly distinguish what exists, what is being tested, and what is still an idea. Shorter feedback loops make better decisions possible.",
    doodle: "⚡",
  },
  {
    num: "03",
    title: "End-to-End Product Ownership",
    desc: "We stay close to the product from the first question through design, engineering, launch, measurement and continuous iteration.",
    doodle: "◎",
  },
];

const faqs = [
  {
    q: "Do I need a complete pitch deck or technical specification to reach out?",
    a: "No. You do not need to have everything figured out. A clear problem people actually experience, an early observation, or a strong thesis is enough to begin a conversation.",
  },
  {
    q: "Is AmbrScale an agency or a product company?",
    a: "AmbrScale is a product company. We are not organised around delivering fee-for-service client projects. We find meaningful problems, build software products around them, and take long-term responsibility for what happens after launch.",
  },
  {
    q: "How does AmbrScale evaluate which problems to build around?",
    a: "We use five strict decision principles: Real (grounded in actual user pain), Meaningful (the outcome matters), Underserved (existing tools lag behind), Buildable (we can deliver something superior), and Compounding (what we learn makes the next build stronger).",
  },
  {
    q: "What if I am looking to join or work with AmbrScale?",
    a: "We are always interested in meeting exceptional designers, engineers, and product thinkers who care deeply about craft and problem-solving. Choose 'Build with AmbrScale' or 'Careers' in the form and tell us what you care about building.",
  },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Product idea / opportunity");
  const [selectedStage, setSelectedStage] = useState<string>("Exploring");
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@ambrscale.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSelectPath = (category: string) => {
    setSelectedCategory(category);
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* =========================================================================
          PAGE HERO (Signature Full-Width Visual Hero)
          ========================================================================= */}
      <PageHero
        index="04"
        eyebrow="✦ LET'S TALK"
        title="Have a problem"
        highlight="worth solving?"
        description="Tell us what you are working on, what is not working, or what you think could be better. If there is something worth building, we would like to understand it. No pitch deck required."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
      />

      {/* =========================================================================
          02 CONVERSATION PATHS (CHOOSE THE CONVERSATION THAT FITS)
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                WHAT BRINGS YOU HERE?
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Choose the conversation that fits.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <HandArrow label="pick your path ✦" direction="down-left" />
            <HandBadge text="Direct Founder Review" rotation="rotate-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conversationPaths.map((path) => (
            <button
              key={path.num}
              type="button"
              onClick={() => handleSelectPath(path.targetCategory)}
              className={`group flex flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selectedCategory === path.targetCategory
                  ? "border-accent bg-accent/5 ring-1 ring-accent"
                  : "border-line bg-surface hover:border-accent/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent">{path.num}</span>
                  <span className="font-mono text-[11px] text-muted group-hover:text-accent transition-colors">
                    Select ↗
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {path.desc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent">
                <span>{path.ctaText}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          MAIN INTERACTIVE FORM SECTION & SIDEBAR
          ========================================================================= */}
      <section id="contact-form-section" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT: PRODUCT CONVERSATION FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/90 p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
                
                {/* Form header */}
                <div className="border-b border-line pb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      START A CONVERSATION
                    </span>
                    <span className="font-hand text-sm text-accent-2">
                      no pitch deck required ✎
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Give us enough context to have a useful first conversation.
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    You do not need to have everything figured out. A clear problem, an early idea or a strong observation is enough to begin.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <FiCheckCircle className="h-8 w-8" />
                    </div>
                    <span className="mt-4 inline-block font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      MESSAGE RECEIVED
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      Good problems are worth a conversation.
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                      Thanks for taking the time to tell us about it. We have your message and will review the context before getting back to you. If there is a useful next step, we will come back with one.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-accent hover:bg-surface-2"
                      >
                        Send another note
                      </button>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent/90"
                      >
                        Back to AmbrScale →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                    
                    {/* 01: What are you reaching out about? Dropdown */}
                    <div>
                      <label className="mb-3 block font-mono text-xs font-bold uppercase tracking-wider text-muted">
                        01 / What are you reaching out about? *
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {reachOutOptions.map((opt) => {
                          const active = selectedCategory === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedCategory(opt)}
                              className={`hand-radius border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                                active
                                  ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                                  : "border-line bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 02: What stage are you at? */}
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-muted">
                          02 / What stage is the problem / idea at? (Optional)
                        </label>
                        <span className="text-[11px] text-muted">Context helper</span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {stageOptions.map((stage) => {
                          const active = selectedStage === stage;
                          return (
                            <button
                              key={stage}
                              type="button"
                              onClick={() => setSelectedStage(stage)}
                              className={`hand-radius border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                                active
                                  ? "border-accent bg-accent/10 text-accent font-bold"
                                  : "border-line bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                              }`}
                            >
                              {stage}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 03: Contact Information */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="What should we call you?"
                          className="w-full hand-radius border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Where can we reach you?"
                          className="w-full hand-radius border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                          Company / Organisation (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Tell us where you are building from"
                          className="w-full hand-radius border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                          Relevant Link (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="Website, product, deck, document link..."
                          className="w-full hand-radius border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* 04: What are you trying to solve? Textarea */}
                    <div>
                      <label className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                        What are you trying to solve? *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Start with the problem. What is happening today, who experiences it, and why do you think it is worth solving?"
                        className="w-full hand-radius border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Row */}
                    <div className="flex flex-col items-start justify-between gap-4 pt-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 hover:scale-[1.02] active:scale-98"
                      >
                        <span>Send the idea →</span>
                        <FiSend className="transition-transform group-hover:translate-x-1" />
                      </button>

                      <div className="flex items-center gap-2 text-xs text-muted">
                        <FiShield className="h-4 w-4 text-emerald-500" />
                        <span>We do not sell or trade your information.</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* RIGHT: DIRECT CONTACT, CAREERS & PARTNERSHIPS (5 COLS) */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* Direct Contact Card (08 Direct Contact) */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/90 p-7 sm:p-8 shadow-xl backdrop-blur-sm">
                
                {/* Header with Live IST Time */}
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      OR JUST SAY HELLO
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      Prefer email?
                    </h3>
                  </div>
                  {currentTime && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      {currentTime} IST
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted">
                  If a form is not your thing, you can reach the team directly. Tell us what you are thinking about and we will take it from there.
                </p>

                <div className="mt-5 space-y-4">
                  {/* Direct Email */}
                  <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2/60 p-4 transition-all hover:border-accent/40">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <FiMail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          General Enquiries
                        </span>
                        <a
                          href="mailto:hello@ambrscale.com"
                          className="block text-sm font-bold text-foreground hover:text-accent transition-colors"
                        >
                          hello@ambrscale.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="rounded-lg border border-line bg-surface p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                      title="Copy email"
                    >
                      {copied ? (
                        <FiCheck className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <FiCopy className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Operational Note */}
                  <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-surface-2/60 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <FiZap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Response Note
                      </span>
                      <p className="text-xs font-semibold text-foreground">
                        For product, partnership and company enquiries. Direct review within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 border-t border-line pt-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                    Connect &amp; Follow:
                  </span>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    {[
                      { icon: FiTwitter, label: "Twitter", href: "https://twitter.com" },
                      { icon: FiGithub, label: "GitHub", href: "https://github.com" },
                      { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
                      { icon: FiInstagram, label: "Instagram", href: "https://instagram.com" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-all hover:border-accent hover:text-accent hover:scale-105"
                        aria-label={s.label}
                      >
                        <s.icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 09 Talent / Careers Card */}
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/90 p-7 shadow-xl">
                <div className="flex items-center gap-2.5 text-accent">
                  <FiUsers className="h-5 w-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    TALENT &amp; BUILDERS
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  Want to build what comes next?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  We are interested in people who care about problems, products and the details between the two. If you are unusually good at what you do and think you could contribute to AmbrScale, introduce yourself.
                </p>
                <div className="mt-4 rounded-xl border border-line/60 bg-surface-2/50 p-3 text-[11px] text-muted">
                  <span className="font-semibold text-foreground">No open role that fits right now?</span> You can still send a thoughtful introduction. We keep strong conversations in mind for the right opportunity.
                </div>
              </div>
            </Reveal>

            {/* 10 Partnerships Card */}
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/90 p-7 shadow-xl">
                <div className="flex items-center gap-2.5 text-accent">
                  <FiBriefcase className="h-5 w-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    PARTNERSHIPS
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  Some opportunities are bigger when built together.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  We work with people and organisations that bring a strong problem, useful capability, distribution, technology or market insight. If you see a meaningful overlap, tell us what you see.
                </p>
              </div>
            </Reveal>

            {/* Hand-drawn note for direct response */}
            <Reveal delay={0.25}>
              <HandStickyNote
                title="COMMUNICATION PROMISE"
                text="We review every note directly with our founders and engineering leads. Expect a thoughtful reply within 24–48 hours."
                author="AmbrScale Leadership"
              />
            </Reveal>

          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDIO MAP SECTION (Grand macOS / Architecture View)
          ========================================================================= */}
      <section className="relative w-full border-y border-line bg-surface/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  Operational Hub
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                AmbrScale · Mumbai, India
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hand-radius border border-line bg-surface px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-accent hover:text-accent shadow-xs"
            >
              <span>Open in Google Maps</span>
              <FiArrowUpRight className="text-sm" />
            </a>
          </div>
        </div>

        {/* Full-width Map Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-2xl">
              {/* macOS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-line bg-surface-2/80 px-6 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/90" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  <span className="ml-3 font-mono text-xs text-muted">
                    maps.ambrscale.studio · 19.0760° N, 72.8777° E (IST / GMT+5:30)
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] font-bold text-accent">
                  <FiGlobe className="h-3.5 w-3.5" />
                  OPERATIONAL HUB
                </span>
              </div>

              {/* Full Width Map Embed */}
              <div className="relative h-[420px] w-full bg-surface-2 sm:h-[480px]">
                <iframe
                  title="AmbrScale Studio Map"
                  src="https://maps.google.com/maps?q=Mumbai,%20Maharashtra,%20India&z=12&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                
                {/* Floating Corner Hub Card */}
                <div className="absolute bottom-6 left-6 z-10 hidden sm:block max-w-sm rounded-2xl border border-line bg-background/90 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                      AmbrScale Base
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Technology &amp; product company building software for real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          THE STUDIO PROMISE (3-PILLAR FOUNDATION)
          ========================================================================= */}
      <section className="relative border-b border-line bg-[#0c0e17] text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[150px]" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan/20 blur-[140px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">04.1</span>
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-hand text-2xl text-accent-2 -rotate-1">
                    The AmbrScale Standard
                  </span>
                </div>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                <SplitWords text="What you can" y={20} />{" "}
                <span className="hand-underline inline-block text-accent">
                  <SplitWords text="expect from us" y={20} className="text-[1.08em]" />
                </span>
              </h2>
            </div>

            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-2 hand-radius border border-white/20 bg-white/5 px-4 py-2 font-hand text-base text-accent-2 -rotate-2">
                <span>✦ built with pride, zero shortcuts</span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {studioPromises.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.06] hover:shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent">{p.num}</span>
                      <span className="font-hand text-xl text-accent-2">{p.doodle}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                    <span>Operating Principle</span>
                    <span className="font-mono text-accent-2">Guaranteed ✓</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <section className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="text-center">
          <Reveal>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              COMMON QUESTIONS
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-3 text-sm text-muted">
              Everything you need to know about reaching out to AmbrScale.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/80 transition-colors hover:border-accent/40">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-bold text-foreground">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="border-t border-line/60 px-6 pb-6 pt-3">
                    <p className="text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          11 CLOSING BRAND STATEMENT / FINAL CTA
          ========================================================================= */}
      <FinalCTA
        heading="The future belongs to the"
        highlight="people willing to build it."
        description="We believe the most interesting opportunities are often hidden inside ordinary problems. We are here to find them, understand them and build something better."
        buttonText="See something worth building? Let's talk →"
        href="#contact-form-section"
      />
    </div>
  );
}