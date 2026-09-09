import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "#", icon: FiTwitter, label: "Twitter" },
  { href: "#", icon: FiInstagram, label: "Instagram" },
  { href: "#", icon: FiLinkedin, label: "LinkedIn" },
  { href: "#", icon: FiGithub, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
            
              <span className="font-semibold tracking-tight text-logo-gradient">
                AmbrScale
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A team of builders, designers and strategists crafting digital services that help
              brands grow. Backed by people who believe in exceptional work.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">Site</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="inline-flex items-center gap-1 text-sm text-foreground/90 transition-colors hover:text-accent"
                  >
                    {n.label} <FiArrowUpRight className="text-xs opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/90">
              <li>hello@ambrscale.com</li>
              <li>+00 0000 0000</li>
              <li>Available Worldwide</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-shadow hover:shadow-[0_0_24px_-4px_var(--accent)]"
            >
              Get in touch <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">&copy; 2026 AmbrScale. All rights reserved.</p>
          <p className="text-xs text-muted">Designed &amp; built with obsession.</p>
        </div>
      </div>
    </footer>
  );
}