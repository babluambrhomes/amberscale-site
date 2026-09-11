type PowerBadgeProps = {
  className?: string;
};

export default function PowerBadge({ className }: PowerBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-2 border border-white/20 bg-background/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md ${className ?? ""}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      Powered by AmbrScale
    </span>
  );
}