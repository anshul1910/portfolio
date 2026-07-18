import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { useRotatingText } from "@/hooks/useRotatingText";
import HeroBackground from "./HeroBackground";
import HeroProfileCard from "./HeroProfileCard";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOutExpo },
  }),
};

export default function HeroSection() {
  const typed = useRotatingText(profile.rotatingPhrases);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-mono text-sm text-accent-500"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.08}
            className="font-display mt-3 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.16}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-[rgb(var(--fg-muted))] sm:text-xl"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-[rgb(var(--fg-muted))]" />
                )}
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-8 flex h-8 items-center font-mono text-base text-[rgb(var(--fg))] sm:text-lg"
          >
            <span className="text-accent-500">$</span>
            <span className="ml-2">{typed}</span>
            <span className="animate-blink ml-0.5 inline-block h-5 w-0.5 bg-accent-500" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.32}
            className="mt-6 max-w-xl text-balance text-[rgb(var(--fg-muted))]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent-500 px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25)] transition-all hover:shadow-[0_0_28px_-4px_rgba(99,102,241,0.65)]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgb(var(--border))] px-6 text-sm font-semibold transition-colors hover:border-accent-500/60 hover:bg-[rgb(var(--bg-elevated))]"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center px-4 text-sm font-semibold text-[rgb(var(--fg-muted))] transition-colors hover:text-[rgb(var(--fg))]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <HeroProfileCard />
      </div>
    </section>
  );
}
