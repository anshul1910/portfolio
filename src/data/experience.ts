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
      "Designed and built responsive UI components, dashboards, and onboarding flows shared across mobile and web",
      "Worked in a weekly Agile/Scrum cycle alongside backend engineers, designers, and QA to ship features end to end",
      "Profiled and debugged performance issues on both platforms to keep the product stable for active business clients",
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
      "Built Flutter applications end to end — authentication flows, navigation, and responsive layouts — using Provider for state management",
      "Integrated REST APIs to connect Vue.js and Flutter projects to backend services",
      "Contributed across the stack on web apps built with Vue.js, Nuxt.js, Node.js, Express.js, and MongoDB",
      "Reviewed code and managed version control through Git and GitHub as part of a small product team",
      "Built a real-time chat feature with Nuxt.js, Node.js, Express.js, MongoDB, and Socket.IO as a hands-on introduction to WebSockets",
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
