import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import FinalCTA from "@/components/FinalCTA";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatusChip from "@/components/StatusChip";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { products, services } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — AmbrScale`,
    description: product.tagline,
  };
}

const builtInHouse = [
  "Conceived and built entirely in-house",
  "Ships on the AmbrScale cloud-native stack",
  "Released weekly, measured on real usage",
  "Financed by our own revenue — no VC leash",
];

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const position = products.findIndex((p) => p.slug === slug);
  const others = products.filter((p) => p.slug !== slug);

  const stats = [
    { value: product.stat.value, label: product.stat.label },
    { value: "100%", label: "Built in-house" },
    { value: "Owned", label: "Operated by AmbrScale" },
    { value: "Weekly", label: "Release cadence" },
  ];

  return (
    <div className="overflow-x-hidden">
      <DetailHero
        image={product.img}
        eyebrow={product.name}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        meta={[
          { label: "", value: `0${position + 1}` },
          { label: "status", value: product.status },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="01"
              eyebrow="About this product"
              title={product.name}
              description={product.desc}
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                <StatusChip status={product.status} />
                <span className="border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
                  Powered by AmbrScale
                </span>
                <span className="border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
                  Operated in-house
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Get early access
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50"
                >
                  The services behind it
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08} className="bg-background">
                <div className="group flex h-full flex-col justify-between p-7 transition-colors duration-300 hover:bg-surface/50">
                  <span className="text-3xl font-black tracking-tight text-accent">{s.value}</span>
                  <span className="mt-3 text-sm text-muted">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="relative h-80 overflow-hidden border border-line sm:h-[480px]">
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              index="02"
              eyebrow="How it ships"
              title="Built like we"
              highlight="own the result"
              description="Every AmbrScale product earns its keep — same standards we bring to any partner build."
            />
            <div className="mt-10 space-y-3">
              {builtInHouse.map((d, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-accent/15 text-accent">
                      <FiCheck className="text-xs" />
                    </span>
                    {d}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              index="03"
              eyebrow="Built on our own stack"
              title="A product company"
              highlight="with a service arm"
              description="Every product is a live demo of the capabilities we sell to partners."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {services.slice(0, 3).map((t) => (
                  <span
                    key={t.slug}
                    className="border border-line bg-surface/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    {t.title}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Meet the services{" "}
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="04" eyebrow="Keep exploring" title="Other products" highlight="we ship" />
          <Reveal delay={0.15}>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View all products{" "}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 0.08}>
              <ProductCard product={o} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA
        heading="Want your own"
        highlight="product shipped?"
        description="We build our products, and we power ideas we believe in. Pitch yours and we'll take it seriously."
        buttonText="Pitch us"
      />
    </div>
  );
}