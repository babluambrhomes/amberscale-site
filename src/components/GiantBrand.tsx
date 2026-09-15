"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { useEffect } from "react";

const BRAND_TEXT = "#AmbrScale";
const letters = BRAND_TEXT.split("");

function applyLetterGradient(root: HTMLElement) {
  const inner = root.querySelector<HTMLElement>(".gb-inner");
  if (!inner) return;
  const letterEls = Array.from<HTMLElement>(inner.querySelectorAll(".ambr-letter"));
  if (!letterEls.length) return;
  const total = inner.scrollWidth;
  letterEls.forEach((l) => {
    l.style.backgroundSize = `${total}px 100%`;
    l.style.backgroundPosition = `${-l.offsetLeft}px 0px`;
  });
}

export default function GiantBrand() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    applyLetterGradient(wrap);

    const letterEls = wrap.querySelectorAll<HTMLElement>(".ambr-letter");

    const handleResize = () => applyLetterGradient(wrap);
    window.addEventListener("resize", handleResize);

    if (prefersReducedMotion()) {
      return () => window.removeEventListener("resize", handleResize);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { y: 60 },
        { y: 0, ease: "none", scrollTrigger: { trigger: wrap, start: "top bottom", end: "center center", scrub: 0.6 } }
      );
      gsap.fromTo(
        letterEls,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.07,
          scrollTrigger: {
            trigger: wrap,
            start: "top 90%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    }, wrap);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={wrapRef as RefObject<HTMLDivElement>}
      className="relative overflow-hidden px-2 pb-20"
      aria-hidden
    >
      <div className="gb-inner text-center leading-none">
        <span className="block whitespace-nowrap text-[15vw] font-black leading-none tracking-tighter sm:text-[13vw] lg:text-[11vw]">
          {letters.map((ch, i) => (
            <span key={i} className="ambr-letter">
              {ch}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}