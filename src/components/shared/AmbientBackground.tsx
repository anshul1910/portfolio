export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-[0.35] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black_20%,transparent_75%)]" />
      <div className="absolute left-[10%] top-[-5vh] h-105 w-105 rounded-full bg-accent-500/15 blur-[130px]" />
      <div className="absolute right-[8%] top-[35vh] h-95 w-95 rounded-full bg-accent-500/10 blur-[130px]" />
      <div className="absolute left-[15%] top-[75vh] h-100 w-100 rounded-full bg-accent-500/10 blur-[130px]" />
    </div>
  );
}
