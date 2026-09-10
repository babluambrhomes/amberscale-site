"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { services } from "@/lib/site";

const company = [
  { href: "/about", label: "About us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const socials = [
  { href: "#", icon: FiTwitter, label: "Twitter" },
  { href: "#", icon: FiInstagram, label: "Instagram" },
  { href: "#", icon: FiLinkedin, label: "LinkedIn" },
  { href: "#", icon: FiGithub, label: "GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-b border-line pb-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
                Newsletter
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Notes worth opening.</h3>
              
            </div>
            <form onSubmit={onSubscribe} className="flex w-full items-center gap-3 sm:w-auto">
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 border border-line bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors sm:w-72"
              />
              {submitted ? (
                <p className="text-sm font-semibold text-accent whitespace-nowrap">
                  ✓ On the list.
                </p>
              ) : (
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_28px_-6px_var(--accent)]"
                >
                  Subscribe
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="text-lg font-semibold tracking-tight text-logo-gradient">
                AmbrScale
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A team of builders, designers and strategists crafting digital services that
              help brands grow. Backed by people who believe in exceptional work.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {company.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/90">
              <li className="leading-relaxed">
                221B Creative District,
                <br />
                Indiranagar, Bengaluru 560038,
                <br />
                India
              </li>
              <li>
                <a href="mailto:hello@ambrscale.com" className="transition-colors hover:text-accent">
                  hello@ambrscale.com
                </a>
              </li>
             
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 border border-accent/30 bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent"
            >
              Start a project <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">&copy; 2026 AmbrScale. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link href="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy
            </Link>
            <span className="h-1 w-1 bg-muted" />
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms
            </Link>
            <span className="h-1 w-1 bg-muted" />
            <Link href="/sitemap" className="transition-colors hover:text-accent">
              Sitemap
            </Link>
          </div>
          <p className="text-xs text-muted">Designed &amp; built with obsession.</p>
        </div>
      </div>
    </footer>
  );
}