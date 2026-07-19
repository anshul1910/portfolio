import type { ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "techrays-programmer-analyst",
    company: "Techrays Labs Pvt Ltd",
    role: "Programmer Analyst",
    duration: "July 2025 — Present",
    location: "Ahmedabad, India",
    responsibilities: [
      "Sole developer owning both the Flutter mobile app and the React web dashboard for a production GST invoicing and billing platform",
      "Integrated 25+ REST APIs powering GST validation, invoice generation, and payment workflows",
      "Designed and shipped responsive dashboards and onboarding flows consistent across both platforms",
      "Shipped features end to end within a weekly Agile/Scrum cycle, working directly with backend engineers, designers, and QA",
      "Diagnosed and resolved performance and stability issues across both platforms for active business clients relying on the product daily",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "React",
      "TypeScript",
      "REST APIs",
      "Provider",
    ],
  },
  {
    id: "techrays-intern",
    company: "Techrays Labs Pvt Ltd",
    role: "Programmer Analyst Intern",
    duration: "February 2025 — June 2025",
    location: "Ahmedabad, India",
    responsibilities: [
      "Built Flutter applications end to end, including authentication flows, navigation, and responsive layouts, using Provider for state management",
      "Integrated REST APIs to connect Vue.js and Flutter projects to backend services",
      "Contributed full-stack on web applications built with Vue.js, Nuxt.js, Node.js, Express.js, and MongoDB",
      "Reviewed code and managed version control through Git and GitHub as part of a small product team",
      "Built a real-time chat feature using Socket.IO over Nuxt.js, Node.js, Express.js, and MongoDB — my first hands-on introduction to WebSockets",
    ],
    technologies: [
      "Flutter",
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
    ],
  },
];
