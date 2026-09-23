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
import Magnetic from "@/components/interactions/Magnetic";
import Image from "next/image";

const navColumns = {
  architecture: [
    { href: "/about", label: "Our Story" },
    { href: "/#approach", label: "Approach" },
    { href: "/#how-we-work", label: "How We Work" },
    { href: "/about#people", label: "People" },
  ],
  products: [
    { href: "/products", label: "What We’re Building" },
    { href: "/products#pipeline", label: "Current Focus" },
    { href: "/about#principles", label: "Decision Principles" },
    { href: "/blog", label: "Insights" },
  ],
  company: [
    { href: "/about", label: "About AmbrScale" },
    { href: "/blog", label: "Product Journal" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
};

const socials = [
  { href: "https://twitter.com", icon: FiTwitter, label: "Twitter" },
  { href: "https://instagram.com", icon: FiInstagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: FiGithub, label: "GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
                Inside the Build
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Notes on <span className="hand-underline text-accent">what we&apos;re learning.</span>
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
              {status === "success" ? (
                <p className="text-sm font-semibold text-accent whitespace-nowrap">
                  ✓ On the list.
                </p>
              ) : status === "error" ? (
                <p className="text-sm font-semibold text-accent-2 whitespace-nowrap">
                  ✕ Try again.
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.05] px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.1] hover:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              {/* <span className="text-lg font-semibold tracking-tight text-logo-gradient">
                AmbrScale
              </span> */}
              <Image src='/logo.png' height={20} width={70} alt='site logo' className="w-full h-14" />
           
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              AmbrScale is a technology company building products around problems worth solving. We study the problem, test the opportunity, build the product and learn from what happens next.
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

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
              Structure
            </h4>
            <ul className="mt-5 space-y-3">
              {navColumns.architecture.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
              Building
            </h4>
            <ul className="mt-5 space-y-3">
              {navColumns.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-hand text-xl text-foreground/90 -rotate-1">
              Conversations
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/90">
              <li className="leading-relaxed text-muted">
                Have a problem worth exploring or solving?
              </li>
              <li>
                <a href="mailto:hello@ambrscale.com" className="font-semibold transition-colors hover:text-accent">
                  hello@ambrscale.com
                </a>
              </li>
            </ul>
            <Magnetic strength={0.1}>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/[0.05] px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.1]"
              >
                Start a conversation <FiArrowUpRight />
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
           
           
          </div>
          <p className="font-hand text-base text-muted/100 -rotate-1">
            Problems first. Products second. Progress always.
          </p>
        </div>
      </div>
    </footer>
  );
}