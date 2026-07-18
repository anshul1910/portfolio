import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/BrandIcons";
import { useTilt } from "@/hooks/useTilt";
import type { ProjectItem } from "@/types";

const statusLabel: Record<ProjectItem["status"], string> = {
  live: "Live",
  "in-progress": "In Progress",
  archived: "Archived",
};

const statusColor: Record<ProjectItem["status"], string> = {
  live: "text-emerald-500 bg-emerald-500/10",
  "in-progress": "text-accent-500 bg-accent-500/10",
  archived: "text-[rgb(var(--fg-muted))] bg-[rgb(var(--bg-elevated))]",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform: style.transform, transformStyle: "preserve-3d" }}
      className="group relative rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition-[border-color] duration-300 hover:border-accent-500/50"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${style.glowX}% ${style.glowY}%, rgba(99,102,241,0.14), transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-accent-400 to-accent-600 font-display text-sm font-bold text-white">
          {project.title
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {project.badge && (
            <span className="rounded-full bg-[rgb(var(--bg-elevated))] px-2.5 py-1 text-[11px] font-semibold text-[rgb(var(--fg-muted))]">
              {project.badge}
            </span>
          )}
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusColor[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
        </div>
      </div>

      <h3 className="font-display relative mt-4 text-lg font-bold">
        {project.title}
      </h3>
      <p className="relative mt-1 text-sm font-medium text-accent-500">
        {project.tagline}
      </p>
      <p className="relative mt-3 line-clamp-4 text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
        {project.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-[rgb(var(--bg-elevated))] px-2.5 py-1 font-mono text-[11px] text-[rgb(var(--fg-muted))]"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="relative mt-6 flex items-center gap-4 border-t border-[rgb(var(--border))] pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex items-center gap-1.5 text-sm font-semibold text-[rgb(var(--fg))] transition-colors hover:text-accent-500"
            >
              <GithubIcon width={14} height={14} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1 text-sm font-semibold text-[rgb(var(--fg))] transition-colors hover:text-accent-500"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
