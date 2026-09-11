import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import DetailHero from "@/components/DetailHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { blog } from "@/lib/site";

export function generateStaticParams() {
  return blog.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — AmbrScale`,
    description: `${post.title} — strategy, design and engineering notes from AmbrScale.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) notFound();
  const position = blog.findIndex((p) => p.slug === slug);
  const more = blog.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="overflow-x-hidden">
      <DetailHero
        image={post.img}
        eyebrow={post.cat}
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        meta={[
          { label: "", value: post.date },
          { label: "read", value: post.read },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <Reveal>
              <div className="relative h-72 overflow-hidden border border-line sm:h-96">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="mt-8">
              {post.content.map((block, i) => (
                <div key={i} id={`section-${i}`}>
                  <Reveal>
                    <div className="mb-10 last:mb-0">
                      {block.heading && (
                        <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight sm:text-3xl">
                          <span className="font-mono text-sm font-bold text-accent">
                            0{i + 1}
                          </span>
                          {block.heading}
                        </h2>
                      )}
                      <div className={block.heading ? "mt-6 space-y-6" : "space-y-6"}>
                        {block.paragraphs.map((p, j) => (
                          <p
                            key={j}
                            className="text-[17px] leading-relaxed text-foreground/85"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                  {block.quote && (
                    <Reveal delay={0.05}>
                      <blockquote className="my-12 border-l-2 border-accent pl-6 text-xl font-semibold leading-snug tracking-tight text-foreground/90 sm:text-2xl">
                        &ldquo;{block.quote}&rdquo;
                      </blockquote>
                    </Reveal>
                  )}
                </div>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
                  All articles
                </Link>
                <Link href="/contact" className={btnPrimary}>
                  Let&apos;s build something{" "}
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 border border-line bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted">On this page</p>
              <nav className="mt-4 space-y-2">
                {post.content.map((block, i) =>
                  block.heading ? (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="group flex items-start gap-3 text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      <span className="font-mono text-[10px] font-bold text-accent/50 group-hover:text-accent">
                        0{i + 1}
                      </span>
                      <span className="leading-snug">{block.heading}</span>
                    </a>
                  ) : null
                )}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-t border-line py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                index="02"
                eyebrow="Keep reading"
                title="More from"
                highlight="the journal"
              />
              <Reveal delay={0.15}>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  View all posts{" "}
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08} className="bg-background">
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}