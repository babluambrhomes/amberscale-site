"use client";

import { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
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
} from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import TrustedBy from "@/components/TrustedBy";
import { testimonials } from "@/lib/site";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: "hello@ambrscale.com",
    href: "mailto:hello@ambrscale.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 98200 00000",
    href: "tel:+919820000000",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const socials = [
  { href: "#", icon: FiTwitter, label: "Twitter" },
  { href: "#", icon: FiInstagram, label: "Instagram" },
  { href: "#", icon: FiLinkedin, label: "LinkedIn" },
  { href: "#", icon: FiGithub, label: "GitHub" },
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
  "w-full rounded-2 border border-line bg-background/60 px-5 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

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

      <TrustedBy />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
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
                it all at us. Every inquiry gets a real human, not a bot.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 grid grid-cols-2 overflow-hidden border border-line bg-line">
                <div className="bg-background p-6">
                  <div className="font-mono text-3xl font-black text-accent sm:text-4xl">48h</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted">
                    Avg. first reply
                  </div>
                </div>
                <div className="bg-background p-6">
                  <div className="font-mono text-3xl font-black text-accent sm:text-4xl">3–6</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted">
                    Weeks to launch
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <figure className="mt-8 rounded-md border-l-2 border-accent bg-surface/60 p-6">
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  &ldquo;The more context you give us, the sharper the first call. Budget, deadline,
                  references — everything helps us hit the ground running.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-accent">
                  — Aarav Mehta, Founder
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="relative hidden h-[420px] sm:block md:h-[520px]">
            <Reveal className="absolute left-0 top-0 z-30 w-[60%] -rotate-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop"
                  alt="The AmbrScale team collaborating"
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="absolute bottom-0 right-0 z-20 w-[55%] rotate-3 transition-all duration-300 hover:-translate-y-6 hover:scale-105 hover:z-50 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=700&auto=format&fit=crop"
                  alt="Planning a build"
                  fill
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
           
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 grid-cols-3">
          <Reveal className="col-span-1">
            <div className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-surface/70">
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

          <Reveal delay={0.15} className="col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-md border border-line bg-surface/70 p-8 sm:p-10"
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
                    <label key={opt} className="cursor-pointer rounded-2xl">
                      <input type="radio" name="intent" className="peer sr-only" defaultChecked={opt === "Start a project"} />
                      <span className="inline-block  border border-line px-5 py-2 text-sm text-muted transition-colors peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent">
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
                className="group mt-7 inline-flex items-center gap-2 rounded-2 bg-accent py-2.5 pl-7 pr-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_36px_-6px_var(--accent)]"
              >
                Send message
                <span className="flex h-9 w-9 items-center justify-center rounded-2 transition-colors ">
                  <FiSend className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                <FiShield className="shrink-0 text-accent" />
                We only use your details to reply. No spam, no data-selling — ever.
              </p>
            </form>
          </Reveal>
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
              <div className="flex h-full flex-col rounded-md border border-line bg-surface/70 p-7 transition-colors hover:border-accent/40">
                <h3 className="text-sm font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="What clients say"
          title="People like"
          highlight="working with us"
        />
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                role={t.role}
                img={t.img}
                rating={t.rating}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08} className="bg-background">
              <a
                href={c.href}
                className="flex h-full items-center gap-4 bg-background p-6 transition-colors hover:bg-surface/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center  text-xl text-accent">
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
    </div>
  );
}