import { experienceItems } from "@/data/experience";
import SectionHeading from "@/components/shared/SectionHeading";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Where I've worked"
        description="A timeline of roles, responsibilities, and the technologies behind them."
      />

      <div className="relative mt-14">
        <div className="absolute left-3.25 top-1 bottom-1 w-px bg-[rgb(var(--border))] sm:left-3.75" />
        <div className="space-y-8">
          {experienceItems.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
