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
import { products, services } from "@/lib/site";
import Magnetic from "@/components/interactions/Magnetic";

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
    <footer className="relative overflow-hidden border-t border-line bg-surface/40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/95 via-background/90 to-background/95" aria-hidden />

      <svg
        className="absolute bottom-24 right-6 hidden text-accent/15 lg:block"
        width="120"
        height="120"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="border-b border-line pb-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="font-hand text-xl text-foreground/80 -rotate-1">
                Newsletter
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Notes <span className="hand-underline text-accent">worth opening.</span>
              </h3>

            </div>
            <form onSubmit={onSubscribe} className="flex w-full items-center gap-3 sm:w-auto">
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-line bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors sm:w-72"
              />
              {submitted ? (
                <p className="text-sm font-semibold text-accent whitespace-nowrap">
                  ✓ On the list.
                </p>
              ) : (
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.05] px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.1] hover:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.35)]"
                >
                  Subscribe
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="text-lg font-semibold tracking-tight text-logo-gradient">
                AmbrScale
              </span>
              <svg
                className="h-3.5 w-3.5 -rotate-6 text-accent-2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M12 1c1 5 2.5 8 11 11-8.5 3-10 6-11 11-1-5-2.5-8-11-11 8.5-3 10-6 11-11z"
                  className="fill-current"
                />
              </svg>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A product company from Bengaluru. We ship our own products, power
              brands we believe in, and build the things nobody else will.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s, i) => (
                <Magnetic key={i} strength={0.12}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <s.icon className="text-sm" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
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
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
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
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
              Conect
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
            <Magnetic strength={0.1}>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/[0.05] px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.1]"
            >
              Start a pitch <FiArrowUpRight />
            </Link>
            </Magnetic>
          </div>

        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
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
          <p className="font-hand text-base text-muted/80 -rotate-1">
            Designed &amp; built with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
}