const styles = {
  LIVE: "border-accent/30 bg-accent/10 text-accent",
  BETA: "border-amber-400/30 bg-amber-400/10 text-amber-500",
  "IN DEV": "border-line bg-surface/60 text-muted",
};

const dots = {
  LIVE: "bg-accent",
  BETA: "bg-amber-400",
  "IN DEV": "bg-muted",
};

export default function StatusChip({ status }: { status: string }) {
  const key = status === "IN DEV" ? "IN DEV" : status;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-2 border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${styles[key as keyof typeof styles]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[key as keyof typeof dots]}`} aria-hidden />
      {status}
    </span>
  );
}