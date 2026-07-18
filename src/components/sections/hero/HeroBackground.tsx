export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="absolute left-1/2 top-[-10%] h-105 w-180 -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]" />
      <div className="animate-float absolute right-[8%] top-[18%] h-2 w-2 rounded-full bg-accent-400" />
      <div
        className="animate-float absolute left-[12%] top-[38%] h-1.5 w-1.5 rounded-full bg-accent-500"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="animate-float absolute right-[20%] top-[62%] h-1 w-1 rounded-full bg-accent-400"
        style={{ animationDelay: "2.4s" }}
      />
    </div>
  );
}
