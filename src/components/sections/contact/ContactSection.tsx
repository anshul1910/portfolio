import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="06 — Contact"
        title="Let's build something"
        description="Have a project in mind or just want to say hi? My inbox is open."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <button
            onClick={copyEmail}
            className="group flex w-full items-center justify-between rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 text-left transition-colors hover:border-accent-500/50"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <Mail size={17} />
              </span>
              <div>
                <p className="text-xs text-[rgb(var(--fg-muted))]">Email</p>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
            </div>
            {copied ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <Copy
                size={16}
                className="text-[rgb(var(--fg-muted))] transition-colors group-hover:text-[rgb(var(--fg))]"
              />
            )}
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <Phone size={17} />
            </span>
            <div>
              <p className="text-xs text-[rgb(var(--fg-muted))]">Phone</p>
              <p className="text-sm font-medium">{profile.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <MapPin size={17} />
            </span>
            <div>
              <p className="text-xs text-[rgb(var(--fg-muted))]">Location</p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 transition-colors hover:border-accent-500/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <GithubIcon width={17} height={17} />
            </span>
            <div>
              <p className="text-xs text-[rgb(var(--fg-muted))]">GitHub</p>
              <p className="text-sm font-medium">@anshul1910</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 transition-colors hover:border-accent-500/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <LinkedinIcon width={17} height={17} />
            </span>
            <div>
              <p className="text-xs text-[rgb(var(--fg-muted))]">LinkedIn</p>
              <p className="text-sm font-medium">/in/anshuldhiman19</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
