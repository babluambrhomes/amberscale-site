"use client";

import { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: "hello@ambrscale.com",
    href: "mailto:hello@ambrscale.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+00 0000 0000",
    href: "tel:+0000000000",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
  },
  {
    icon: FiClock,
    label: "Response time",
    value: "Within 48 hours",
    href: "#",
  },
];

const faqs = [
  {
    q: "What does a typical project cost?",
    a: "Every project is scoped individually. Tell us what you need and we'll send a clear, fixed proposal — no surprises, no hourly billing anxiety.",
  },
  {
    q: "How long does a project take?",
    a: "A marketing site usually lands in 3–6 weeks. Larger platforms take longer. We share a real timeline up front and hold ourselves to it.",
  },
  {
    q: "Can you back our team or event?",
    a: "Maybe — we love partnering with teams and events that fit our vibe. Tell us what you're planning and let's see what we can do.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Always. Every client gets care after launch, and most stay with us for long-term growth work.",
  },
];

const inputClass =
  "w-full rounded-full border border-line bg-background/60 px-5 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="04"
        eyebrow="Contact"
        title="Let's make something"
        highlight="worth talking about"
        description="Project, partnership or just a hello — drop us a line. We read everything and reply fast."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
      />

     

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-background">
              <a
                href={c.href}
                className="flex h-full items-center gap-4 bg-background p-6 transition-colors hover:bg-surface/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10 text-xl text-accent">
                  <c.icon />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">{c.label}</div>
                  <div className="mt-1 text-sm font-semibold">{c.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              index="04.1"
              eyebrow="Send a message"
              title="Tell us about"
              highlight="your project"
              size="md"
            />
            <Reveal delay={0.16}>
              <p className="mt-5 leading-relaxed text-muted">
                The more you share, the faster we can help. Budgets, deadlines, references — throw
                it all at us.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative mt-8 hidden h-80 overflow-hidden rounded-3xl border border-line lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="The AmbrScale team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-sm font-semibold">hello@ambrscale.com</p>
                  <p className="mt-1 text-xs text-muted">We reply within 48 hours — usually faster.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-surface/70 p-8 sm:p-10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                    Your name
                  </label>
                  <input type="text" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                    Your email
                  </label>
                  <input type="email" required placeholder="jane@company.com" className={inputClass} />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                  I want to
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Start a project", "Partner with us", "Ask something"].map((opt) => (
                    <label key={opt} className="cursor-pointer">
                      <input type="radio" name="intent" className="peer sr-only" defaultChecked={opt === "Start a project"} />
                      <span className="inline-block rounded-full border border-line px-5 py-2 text-sm text-muted transition-colors peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  style={{ borderRadius: "20px" }}
                  placeholder="We build... I have a question about..."
                  className={`${inputClass}   resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-7 pr-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_36px_-6px_var(--accent)]"
              >
                Send message
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/30">
                  <FiSend className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70">
              <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
                <SectionHeading
                  index="04.2"
                  eyebrow="Find us"
                  title="Stroll in,"
                  highlight="or drop a pin"
                  size="md"
                />
                <span className="hidden rounded-full border border-line bg-accent/5 px-4 py-2 text-xs font-semibold sm:inline-flex">
                  Mumbai, India
                </span>
              </div>
              <div className="relative min-h-[320px] flex-1">
                <iframe
                  title="AmbrScale location map"
                  src="https://maps.google.com/maps?q=Mumbai,%20Maharashtra,%20India&z=12&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="relative h-48 overflow-hidden rounded-3xl border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=700&auto=format&fit=crop"
                  alt="Office space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-5 text-sm font-semibold">
                  BKC, Mumbai
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="relative h-48 overflow-hidden rounded-3xl border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=700&auto=format&fit=crop"
                  alt="Desk setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-5 text-sm font-semibold">
                  The desks we build from
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="Good to know"
            title="Quick questions,"
            highlight="quick answers"
          />
          <Reveal delay={0.15}>
            <Link
              href="/faq"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Browse full FAQ{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/70 p-7 transition-colors hover:border-accent/40">
                <h3 className="text-sm font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
      </section>
    </div>
  );
}