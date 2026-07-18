import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillCard from "./SkillCard";
import { cn } from "@/utils/cn";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active =
    skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="03 — Skills"
        title="Tools I reach for"
        description="A working set of technologies I use to design, build, and ship products end to end."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category.id
                ? "text-white"
                : "text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))]",
            )}
          >
            {activeCategory === category.id && (
              <motion.span
                layoutId="skills-active-pill"
                className="absolute inset-0 rounded-full bg-accent-500"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{category.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {active.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
