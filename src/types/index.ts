export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "in-progress" | "archived";
  badge?: string;
}

export interface HeroStat {
  label: string;
  value: string;
}
