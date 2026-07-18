import { motion } from "framer-motion";
import type { SkillItem } from "@/types";
import { getSkillIcon } from "@/data/skillIcons";

export default function SkillCard({
  skill,
  index,
}: {
  skill: SkillItem;
  index: number;
}) {
  const Icon = getSkillIcon(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4 transition-colors hover:border-accent-500/50"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/0 blur-2xl transition-colors duration-300 group-hover:bg-accent-500/20" />

      <motion.span
        initial={{ scale: 0.5, rotate: -12, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 16,
          delay: index * 0.05 + 0.1,
        }}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent-400 to-accent-600 text-white"
      >
        <Icon size={24} />
      </motion.span>

      <p className="relative font-display text-sm font-bold">{skill.name}</p>
    </motion.div>
  );
}
