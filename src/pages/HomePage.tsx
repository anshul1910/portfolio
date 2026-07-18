import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import ContactSection from "@/components/sections/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
