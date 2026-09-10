"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "@/components/TestimonialCard";
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
            <TestimonialCard
              quote={t.quote}
              name={t.name}
              role={t.role}
              img={t.img}
              rating={t.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testi-pagination relative z-10 mt-4 flex justify-center" />
    </div>
  );
}