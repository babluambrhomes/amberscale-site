const items = [
  "Web Development",
  "UI/UX Design",
  "Brand Identity",
  "Digital Marketing",
  "SEO & Performance",
  "Product Strategy",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/40 py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-muted"
          >
            {item}
            <span className="text-accent" aria-hidden>
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}