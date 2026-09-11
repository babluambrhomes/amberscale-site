import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { products, services, blog } from "@/lib/site";

const main = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export const metadata = {
  title: "Sitemap — AmbrScale",
  description: "Every page on AmbrScale, in one place.",
};

export default function SitemapPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="08"
        eyebrow="Navigate"
        title="Every page,"
        highlight="one place"
        description="A plain list of everything on the site — main pages, products, journal posts and legal documents."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-2">
          <Link
            href="/"
            className="group flex items-center justify-between bg-background p-8"
          >
            <div>
              <span className="font-mono text-xs font-bold text-accent">/00</span>
              <h3 className="mt-3 text-lg font-semibold">AmbrScale Home</h3>
              <p className="mt-1 text-sm text-muted">The front door.</p>
            </div>
            <FiArrowUpRight className="text-accent transition-transform group-hover:rotate-45" />
          </Link>
          {[
            ...main.filter((m) => m.href !== "/"),
            ...products.map((p) => ({ href: `/products/${p.slug}`, label: `${p.name} · Product` })),
            ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
            ...blog.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
            ...legal,
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-4 bg-background p-8 transition-colors duration-300 hover:bg-surface/50"
            >
              <div>
                <span className="font-mono text-xs font-bold text-accent">
                  /0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
              </div>
              <FiArrowUpRight className="text-accent transition-transform group-hover:rotate-45" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}