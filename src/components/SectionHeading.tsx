import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  br?: boolean;
  size?: "md" | "lg";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  br = false,
  size = "lg",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
        >
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 text-3xl font-bold tracking-tight ${
            size === "lg" ? "sm:text-5xl" : "sm:text-4xl"
          }`}
        >
          {title}
          {br && highlight && <br />}
          {!br && highlight && " "}
          {highlight && <span className="text-outline">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}