import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Vue.js" },
      { name: "Nuxt.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "WebSocket" },
      { name: "Vite" },
      { name: "Zod" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Socket.IO" },
      { name: "JWT / OAuth2" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [{ name: "Flutter" }, { name: "Dart" }, { name: "Provider" }],
  },
  {
    id: "database",
    title: "Databases",
    skills: [{ name: "MongoDB" }, { name: "MySQL" }],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Dart" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C" },
      { name: "C++" },
      { name: "Python" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Android Studio" },
      { name: "Agile/Scrum" },
      { name: "Figma" },
    ],
  },
];
