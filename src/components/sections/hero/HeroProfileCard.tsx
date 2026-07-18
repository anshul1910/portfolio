import { motion } from "framer-motion";
import { MapPin, CircleDot } from "lucide-react";
import { profile } from "@/data/profile";

export default function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-px rounded-4xl bg-linear-to-br from-accent-400/50 via-accent-500/10 to-transparent opacity-70 blur-sm" />
      <div className="glass relative overflow-hidden rounded-4xl p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-32 w-32 shrink-0">
            <img
              src="/profile.png"
              alt={profile.name}
              className="h-32 w-32 rounded-full object-cover ring-2 ring-[rgb(var(--border))]"
            />
            <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[rgb(var(--card))] bg-emerald-500">
              <CircleDot size={13} className="text-white" />
            </span>
          </div>
          <div>
            <p className="font-display text-base font-bold">{profile.name}</p>
            <p className="flex items-center gap-1 text-xs text-[rgb(var(--fg-muted))]">
              <MapPin size={12} />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-[rgb(var(--bg-elevated))] px-4 py-3">
          <span className="text-xs font-medium text-[rgb(var(--fg-muted))]">
            Status
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {profile.availability}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[rgb(var(--border))] px-4 py-3 transition-colors hover:border-accent-500/50"
            >
              <p className="font-display text-xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] text-[rgb(var(--fg-muted))]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
