"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";

type Breadcrumb = {
  label: string;
  href?: string;
};

type DetailHeroProps = {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  meta?: { label: string; value: string }[];
};

export default function DetailHero({
  image,
  eyebrow,
  title,
  description,
  breadcrumbs,
  meta,
}: DetailHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[520px] max-h-[720px] overflow-hidden">
      <motion.div style={{ y: yImg }} className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-[5] bg-gradient-to-t from-foreground via-foreground/60 to-transparent"
      />

      <div className="relative flex h-full flex-col justify-end px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2 text-xs font-medium text-white/50"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="transition-colors hover:text-white/80">
                Home
              </Link>
              {breadcrumbs.map((bc, i) => (
                <span key={i} className="flex items-center gap-2">
                  <FiChevronRight className="text-[10px]" />
                  {bc.href ? (
                    <Link href={bc.href} className="transition-colors hover:text-white/80">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{bc.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {description}
            </motion.p>
          )}

          {meta && meta.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-white/60">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-white/30" />}
                  <span className="font-medium text-white/80">{m.value}</span>
                  <span>{m.label}</span>
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
