"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const articles = [
  {
    title: "What makes a problem worth building for?",
    tag: "Problem Thesis",
    readTime: "5 min read",
    slug: "what-makes-a-problem-worth-building-for",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The difference between a feature request and a real user problem",
    tag: "Product Discovery",
    readTime: "4 min read",
    slug: "difference-between-feature-request-and-user-problem",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "What we validate before we write the first line of production code",
    tag: "Validation",
    readTime: "6 min read",
    slug: "what-we-validate-before-production-code",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The features we decide not to build",
    tag: "Trade-offs",
    readTime: "4 min read",
    slug: "features-we-decide-not-to-build",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "What changes when a product meets its first real users",
    tag: "Learning & Iteration",
    readTime: "5 min read",
    slug: "when-product-meets-first-real-users",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.15}
        spaceBetween={16}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3600, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="!overflow-visible !p-2"
      >
        {articles.map((item, i) => (
          <SwiperSlide key={i}>
            <Link
              href="/blog"
              className="group block relative h-72 overflow-hidden rounded-[1.5rem] border border-line bg-surface sm:h-80"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
              <div className="absolute left-5 top-5 right-5 flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold text-accent-2 backdrop-blur-md">
                  {item.tag}
                </span>
                <span className="font-mono text-[11px] text-white/70">
                  {item.readTime}
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/60">
                    AmbrScale Journal
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-110">
                  <FiArrowRight />
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}