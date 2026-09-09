"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "@/lib/site";

export default function TestimonialsSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        grabCursor
        loop
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{ prevEl: ".testi-prev", nextEl: ".testi-next" }}
        pagination={{ clickable: true, el: ".testi-pagination" }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="!overflow-visible !pb-12"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="!h-auto">
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface/60 p-8">
              <div>
                <div className="flex gap-1 text-accent" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FiStar key={j} className="fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testi-pagination relative z-10 mt-4 flex justify-center" />

     
    </div>
  );
}