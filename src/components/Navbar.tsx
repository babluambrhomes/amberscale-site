"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { services, projects } from "@/lib/site";

const links = [
 
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setPortfolioOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative z-50 mt-4 flex items-center justify-between px-4 sm:px-6 h-14 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border border-line bg-surface/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
              : "border border-transparent bg-surface/40"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            
            <span className="font-semibold tracking-tight text-sm sm:text-base text-logo-gradient">
              AmbrScale
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              if (link.href === "/services") {
                return (
                  <button
                    key={link.href}
                    type="button"
                    onMouseEnter={() => { setServicesOpen(true); setPortfolioOpen(false); }}
                    onClick={() => router.push("/services")}
                    className={`relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-accent" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`mt-0.5 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                      />
                    )}
                  </button>
                );
              }
              if (link.href === "/portfolio") {
                return (
                  <button
                    key={link.href}
                    type="button"
                    onMouseEnter={() => { setPortfolioOpen(true); setServicesOpen(false); }}
                    onClick={() => router.push("/portfolio")}
                    className={`relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-accent" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`mt-0.5 transition-transform duration-300 ${
                        portfolioOpen ? "rotate-180" : ""
                      }`}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                      />
                    )}
                  </button>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-2 bg-accent px-5 py-2 text-sm font-semibold text-background transition-all hover:gap-2.5 hover:shadow-[0_0_24px_-4px_var(--accent)]"
            >
              Start a project <FiArrowUpRight />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2 border border-line text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 overflow-hidden rounded-md border border-line bg-surface/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2 px-4 py-3 text-sm font-medium ${
                    active ? "bg-accent/10 text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                  <FiArrowUpRight />
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-2 bg-accent px-4 py-3 text-sm font-semibold text-background"
            >
              Start a project <FiArrowUpRight />
            </Link>
          </motion.nav>
        )}
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            key="services-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"
              onClick={() => setServicesOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-b border-line bg-background/95 backdrop-blur-xl"
            >
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">01</span>
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
                      What we do
                    </span>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                  >
                    View all services{" "}
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s, i) => (
                    <Link
                      key={i}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-4 bg-background p-6 transition-colors duration-300 hover:bg-surface/50"
                    >
                      <span className="font-mono text-sm font-bold text-accent">
                        /0{i + 1}
                      </span>
                      <div>
                        <h4 className="flex items-center gap-2 text-base font-semibold tracking-tight">
                          {s.title}
                          <span className="text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                            <FiArrowUpRight />
                          </span>
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                          {s.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {portfolioOpen && (
          <motion.div
            key="portfolio-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40"
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"
              onClick={() => setPortfolioOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-b border-line bg-background/95 backdrop-blur-xl"
            >
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">02</span>
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
                      Our work
                    </span>
                  </div>
                  <Link
                    href="/portfolio"
                    onClick={() => setPortfolioOpen(false)}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                  >
                    View all projects{" "}
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((p, i) => (
                    <Link
                      key={i}
                      href={`/portfolio/${p.slug}`}
                      onClick={() => setPortfolioOpen(false)}
                      className="group flex items-start gap-4 bg-background p-6 transition-colors duration-300 hover:bg-surface/50"
                    >
                      <span className="font-mono text-sm font-bold text-accent">
                        /0{i + 1}
                      </span>
                      <div>
                        <h4 className="flex items-center gap-2 text-base font-semibold tracking-tight">
                          {p.title}
                          <span className="text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                            <FiArrowUpRight />
                          </span>
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                          {p.tag}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}