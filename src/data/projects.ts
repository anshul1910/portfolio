import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: "gst-invoicing-billing",
    title: "GST Invoicing & Billing Platform",
    tagline:
      "A production cross-platform billing system for real business clients",
    description:
      "A production GST invoicing and billing platform for real business clients — Flutter for mobile, React for the web, backed by 25+ integrated APIs.",
    image: "",
    features: [
      "GST validation, invoice generation, and payment workflows across 25+ integrated APIs",
      "A consistent design language maintained across the Flutter mobile app and the React web dashboard",
      "Onboarding flows and dashboards built for non-technical business users",
    ],
    techStack: ["Flutter", "Dart", "React", "TypeScript", "REST APIs"],
    githubUrl: "",
    liveUrl: "",
    status: "live",
    badge: "Company Project",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    tagline: "A dark, immersive personal site built entirely from scratch",
    description:
      "A dark-themed, particle-driven personal site with mouse-reactive backgrounds, scroll-reveal animations, and a fully custom design system — no templates, no UI library.",
    image: "",
    features: [
      "Particle background that reacts to mouse movement",
      "Scroll-reveal animations and active-section navbar tracking",
      "A fully custom CSS design token system built without a UI framework",
    ],
    techStack: ["React", "TypeScript", "Vite", "Framer Motion", "Custom CSS"],
    githubUrl: "https://github.com/anshul1910/portfolio",
    liveUrl: "https://anshuldhiman-dev.vercel.app",
    status: "live",
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    tagline: "A one-to-one and group messaging app built on WebSockets",
    description:
      "A real-time one-to-one and group chat app using Socket.IO, with a React frontend, a Node.js/Express backend, and MongoDB for message persistence.",
    image: "",
    features: [
      "One-to-one and group messaging over WebSockets via Socket.IO",
      "Message persistence and history backed by MongoDB",
      "React frontend talking to a Node.js/Express API and socket server",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    githubUrl: "",
    liveUrl: "",
    status: "in-progress",
  },
];
