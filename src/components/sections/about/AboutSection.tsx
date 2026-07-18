import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { aboutTimeline, careerGoals } from "@/data/about";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="01 — About"
        title="Software engineer, not just code writer"
      />

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-balance text-lg leading-relaxed text-[rgb(var(--fg-muted))]">
            {profile.summary}
          </p>
          <p className="mt-5 text-balance leading-relaxed text-[rgb(var(--fg-muted))]">
            {careerGoals}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-[rgb(var(--border))]" />
          <ol className="space-y-10">
            {aboutTimeline.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-500 bg-[rgb(var(--bg))]" />
                <p className="font-mono text-xs text-accent-500">{item.year}</p>
                <h3 className="font-display mt-1 text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
