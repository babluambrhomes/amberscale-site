import Reveal from "./Reveal";
import { trustedBy } from "@/lib/site";

type TrustedByProps = {
  eyebrow?: string;
  className?: string;
};

export default function TrustedBy({
  eyebrow = "Trusted by ambitious brands",
  className,
}: TrustedByProps) {
  return (
    <section className={`border-y border-line bg-surface/40 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-muted">
            {eyebrow}
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustedBy.map((brand, i) => (
            <Reveal key={brand} delay={i * 0.04}>
              <span className="text-lg font-bold uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-accent">
                {brand}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}