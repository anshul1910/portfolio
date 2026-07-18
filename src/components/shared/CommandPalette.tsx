import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { NAV_LINKS } from "@/constants/navigation";
import { profile } from "@/data/profile";

interface Command {
  id: string;
  label: string;
  hint?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const commands: Command[] = [
    ...NAV_LINKS.map((link) => ({
      id: link.href,
      label: `Go to ${link.label}`,
      hint: "Section",
      action: () => {
        window.location.hash = link.href;
        setOpen(false);
      },
    })),
    {
      id: "resume",
      label: "Download Resume",
      hint: "File",
      action: () => {
        window.open(profile.resumeUrl, "_blank");
        setOpen(false);
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      hint: "External",
      action: () => {
        window.open(profile.github, "_blank");
        setOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      hint: "External",
      action: () => {
        window.open(profile.linkedin, "_blank");
        setOpen(false);
      },
    },
    {
      id: "home",
      label: "Go to Homepage",
      hint: "Route",
      action: () => {
        navigate("/");
        setOpen(false);
      },
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-90 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass fixed left-1/2 top-[18%] z-91 w-[92%] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-[rgb(var(--border))] px-4 py-3">
              <Search size={16} className="text-[rgb(var(--fg-muted))]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="h-6 w-full bg-transparent text-sm outline-none placeholder:text-[rgb(var(--fg-muted))]"
              />
              <kbd className="rounded border border-[rgb(var(--border))] px-1.5 py-0.5 font-mono text-[10px] text-[rgb(var(--fg-muted))]">
                ESC
              </kbd>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-[rgb(var(--fg-muted))]">
                  No matching commands
                </p>
              )}
              {filtered.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-[rgb(var(--bg-elevated))]"
                >
                  <span className="flex items-center gap-2">
                    {cmd.id === "github" && (
                      <GithubIcon
                        width={14}
                        height={14}
                        className="text-[rgb(var(--fg-muted))]"
                      />
                    )}
                    {cmd.id === "linkedin" && (
                      <LinkedinIcon
                        width={14}
                        height={14}
                        className="text-[rgb(var(--fg-muted))]"
                      />
                    )}
                    {cmd.label}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-[rgb(var(--fg-muted))]">
                    {cmd.hint}
                    <ArrowRight size={12} />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
