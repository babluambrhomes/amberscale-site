"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type DeliveryProcessItem = {
  step: string;
  phase: string;
  title: string;
  desc: string;
  badge: string;
};

export default function DeliveryProcess({ items }: { items: DeliveryProcessItem[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        grabCursor
        loop
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="!overflow-visible"
      >
        {items.map((p, i) => (
          <SwiperSlide key={p.step} className="!h-auto">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-accent/20">
              <div>
                <div className="flex items-center justify-between">
                  <span className="hand-radius border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-semibold text-white/90">
                    {p.phase}
                  </span>
                  <span className="font-mono text-2xl font-black text-accent">
                    {p.step}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                <span>Milestone 0{i + 1}</span>
                <span className="font-mono text-accent font-bold">Standard ✓</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}