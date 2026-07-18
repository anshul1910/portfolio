import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { NAV_LINKS } from "@/constants/navigation";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight"
          >
            {profile.name}
          </a>
          <p className="mt-2 max-w-xs text-sm text-[rgb(var(--fg-muted))]">
            {profile.shortTagline}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-accent-500/60 hover:text-[rgb(var(--fg))]"
            >
              <GithubIcon width={16} height={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-accent-500/60 hover:text-[rgb(var(--fg))]"
            >
              <LinkedinIcon width={16} height={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-accent-500/60 hover:text-[rgb(var(--fg))]"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:flex-col"
          aria-label="Footer"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[rgb(var(--fg-muted))] transition-colors hover:text-[rgb(var(--fg))]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 text-xs text-[rgb(var(--fg-muted))]">
        <span>
          &copy; {year} {profile.name}. Built with React &amp; Tailwind.
        </span>
        <a
          href="#home"
          className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--border))] px-3 py-1.5 transition-colors hover:border-accent-500/60 hover:text-[rgb(var(--fg))]"
        >
          <ArrowUp size={13} />
          Top
        </a>
      </div>
    </footer>
  );
}
