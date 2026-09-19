"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMaximize2,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import Reveal from "./Reveal";

type ProjectGalleryProps = {
  title: string;
  category: string;
  gallery: string[];
};

export default function ProjectGallery({
  title,
  category,
  gallery,
}: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  // Gallery item labels depending on category or fallback index
  const getLabel = (index: number) => {
    switch (index) {
      case 0:
        return category.toLowerCase().includes("commerce")
          ? "Primary Storefront Experience"
          : category.toLowerCase().includes("saas")
          ? "Core Application Dashboard"
          : category.toLowerCase().includes("mobile")
          ? "Mobile App Interface"
          : "Primary Experience & UI";
      case 1:
        return category.toLowerCase().includes("commerce")
          ? "Conversion & Product Detail Architecture"
          : category.toLowerCase().includes("saas")
          ? "Real-time Metrics & Insights Engine"
          : "Design System & Responsive Flows";
      case 2:
        return category.toLowerCase().includes("commerce")
          ? "Checkout Funnel & Performance Layer"
          : category.toLowerCase().includes("saas")
          ? "Deep Data Visualization & Reporting"
          : "Interactive Prototypes & Details";
      default:
        return `Feature Showcase ${index + 1}`;
    }
  };

  const getBadge = (index: number) => {
    switch (index) {
      case 0:
        return "Core Experience";
      case 1:
        return "System Engine";
      case 2:
        return "Live Results";
      default:
        return `View ${index + 1}`;
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % gallery.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, gallery.length]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan/10 blur-[90px]"
        aria-hidden
      />

      {/* Gallery Section Header */}
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Visual Showcase
              </span>
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Interface &amp; Product Breakdown
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            <FiLayers className="text-accent text-sm" />
            <span>Click any image to inspect high-resolution details</span>
          </div>
        </div>
      </Reveal>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Main Featured Showcase (7 cols) */}
        {gallery[0] && (
          <Reveal className="h-full flex flex-col lg:col-span-7">
            <div
              onClick={() => setLightboxIndex(0)}
              className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-sm transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer"
            >
              {/* Sleek App Window Top Bar */}
              <div className="flex shrink-0 items-center justify-between border-b border-line bg-surface-2/70 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 hidden font-mono text-[11px] text-muted sm:inline-block">
                    app.ambrscale.studio/{title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE DEMO
                  </span>
                  <div className="rounded-lg bg-surface p-1.5 text-muted shadow-sm transition-colors group-hover:text-accent group-hover:bg-accent/10">
                    <FiMaximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Main Image Container — flex-1 with full height to match right stack */}
              <div className="relative flex-1 min-h-[380px] w-full overflow-hidden bg-surface-2 sm:min-h-[460px] lg:min-h-0">
                <Image
                  src={gallery[0]}
                  alt={`${title} main view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Floating Bottom Card Details on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-end justify-between rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur-md text-white">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-accent-2">/01</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                          {getBadge(0)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {getLabel(0)}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-lg">
                      <FiZap className="text-amber-400" /> Expand View
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Secondary Stack (5 cols) */}
        <div className="flex flex-col justify-between gap-6 lg:col-span-5 h-full">
          {gallery.slice(1, 3).map((img, i) => {
            const actualIndex = i + 1;
            return (
              <Reveal key={actualIndex} delay={0.1 * actualIndex} className="flex-1 flex flex-col">
                <div
                  onClick={() => setLightboxIndex(actualIndex)}
                  className="group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-sm transition-all duration-500 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 cursor-pointer h-full"
                >
                  <div className="relative flex-1 min-h-[220px] sm:min-h-[250px] w-full overflow-hidden bg-surface-2 aspect-[16/9] lg:aspect-auto">
                    <Image
                      src={img}
                      alt={`${title} detail ${actualIndex}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Top Tag & Expand Button */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="rounded-lg border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        <span className="font-mono text-accent-2 mr-1">/0{actualIndex + 1}</span>{" "}
                        {getBadge(actualIndex)}
                      </span>
                      <div className="rounded-lg border border-white/20 bg-black/40 p-1.5 text-white backdrop-blur-md transition-transform group-hover:scale-110">
                        <FiMaximize2 className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="text-sm font-semibold text-white drop-shadow-sm">
                        {getLabel(actualIndex)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent">
                    0{lightboxIndex + 1} / 0{gallery.length}
                  </span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="text-sm font-semibold text-white/90">
                    {getLabel(lightboxIndex)}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Close preview"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex aspect-[16/10] w-full max-h-[68vh] items-center justify-center overflow-hidden bg-black/40">
                <Image
                  src={gallery[lightboxIndex]}
                  alt={`${title} full preview`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />

                {/* Left/Right Navigation Buttons */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(
                          (lightboxIndex - 1 + gallery.length) % gallery.length
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex((lightboxIndex + 1) % gallery.length);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
                      aria-label="Next image"
                    >
                      <FiChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Thumbnails Strip */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0c0d12] px-5 py-3">
                <p className="text-xs text-white/50">
                  Use left / right arrow keys or click thumbnails to navigate
                </p>
                <div className="flex items-center gap-2">
                  {gallery.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative h-12 w-16 overflow-hidden rounded-lg border transition-all ${
                        lightboxIndex === idx
                          ? "border-accent ring-2 ring-accent/40"
                          : "border-white/10 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={thumb}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
