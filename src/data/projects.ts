import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: "gst-invoicing-billing",
    title: "GST Invoicing & Billing Platform",
    tagline: "Production billing software trusted by real business clients",
    description:
      "The GST invoicing and billing platform I built and maintain at Techrays Labs — live, in production, and used daily by real business clients.",
    image: "",
    techStack: ["Flutter", "Dart", "React", "TypeScript", "REST APIs"],
    githubUrl: "",
    liveUrl: "",
    status: "live",
    badge: "Company Project",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    tagline:
      "A dark, immersive personal site with a fully custom design system",
    description:
      "Built entirely from scratch — particle-driven backgrounds, scroll-reveal animations, and a fully custom design system. No templates, no UI library.",
    image: "",
    techStack: ["React", "TypeScript", "Vite", "Framer Motion", "Custom CSS"],
    githubUrl: "https://github.com/anshul1910/portfolio",
    liveUrl: "https://anshuldhiman-dev.vercel.app",
    status: "live",
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    tagline: "Real-time messaging built on WebSockets, from scratch",
    description:
      "A real-time one-to-one and group chat app built on Socket.IO, with a React frontend and a Node/Express backend persisting messages in MongoDB.",
    image: "",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    githubUrl: "",
    liveUrl: "",
    status: "in-progress",
  },
];
