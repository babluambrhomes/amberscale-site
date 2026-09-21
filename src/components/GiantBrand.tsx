"use client";

const BRAND_TEXT = "#AmbrScale";

export default function GiantBrand() {
  return (
    <div className="relative overflow-hidden px-2 pb-20 select-none opacity-20" aria-hidden>
      <div className="text-center leading-none">
        <span className="block whitespace-nowrap text-[15vw] font-black leading-none tracking-tighter text-muted sm:text-[13vw] lg:text-[11vw]">
          {BRAND_TEXT}
        </span>
      </div>
    </div>
  );
}