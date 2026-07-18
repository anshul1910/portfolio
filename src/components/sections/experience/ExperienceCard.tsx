import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/types";

export default function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-14 sm:pl-16"
    >
      <span className="absolute left-3.25 top-1 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent-500 bg-[rgb(var(--bg))] text-accent-500 sm:left-3.75">
        <Briefcase size={13} />
      </span>

      <motion.div
        whileHover={{ y: -3 }}
        className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition-colors hover:border-accent-500/50"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold">{item.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-accent-500">
              {item.company}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-[rgb(var(--fg-muted))]">
              {item.duration}
            </p>
            <p className="mt-0.5 flex items-center justify-end gap-1 text-xs text-[rgb(var(--fg-muted))]">
              <MapPin size={11} />
              {item.location}
            </p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {item.responsibilities.map((r) => (
            <li
              key={r}
              className="flex gap-2.5 text-sm leading-relaxed text-[rgb(var(--fg-muted))]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[rgb(var(--bg-elevated))] px-2.5 py-1 font-mono text-[11px] text-[rgb(var(--fg-muted))]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
