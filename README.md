# Anshul Dhiman — Portfolio

Premium personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## What's built

- Full project scaffold with a scalable, production-style folder structure
- Dark/light theme system (Context API + localStorage persistence, no flash on load)
- Sticky glassmorphism navbar with active-section highlighting, scroll progress bar, animated mobile menu
- Premium loading screen (animated logo, gradient progress line, blur transition)
- Ctrl+K / Cmd+K command palette for fast navigation and quick actions
- Hero section with a terminal-style typing effect, ambient grid/glow background, glass profile stat card
- About section with a two-column layout and animated timeline
- Experience section with an animated vertical timeline
- Skills section with category tabs and animated radial-progress cards
- Projects section with tilt/glow project cards (mouse-tracking 3D tilt), each showing status, an optional custom badge, and Code/Live Demo links
- Learning Journey roadmap with per-topic progress bars
- Contact section: copy-to-clipboard email, social links, and a React Hook Form + Zod validated form wired to EmailJS (with an automatic mailto fallback if not configured) plus a Sonner success toast
- Footer, 404 page, route-based code splitting (404 page is a separate chunk)

## Run it

npm install
npm run dev

## Build it

npm run build
npm run preview

## Folder structure

src/components/layout    Navbar, Footer, MainLayout
src/components/sections  one folder per page section (hero, about, skills, experience, projects, learning, contact)
src/components/shared    SectionHeading, ComingSoonSection, BrandIcons, LoadingScreen, CommandPalette
src/components/ui        Button and future design-system primitives
src/contexts             ThemeProvider
src/data                 profile.ts, skills.ts, about.ts, experience.ts, projects.ts, learning.ts
src/hooks                useActiveSection, useScrollProgress, useRotatingText, useTilt
src/pages                HomePage, ProjectDetailPage, NotFoundPage
src/types                shared TS interfaces

To update your info (name, bio, stats, resume link), edit src/data/profile.ts.
To add or edit a project, edit src/data/projects.ts — each entry automatically gets a card on the Projects section. Set `liveUrl` once a project is deployed and its Live Demo button will appear; leave `githubUrl` empty for private/company projects to hide the Code button. Use the optional `badge` field for a custom label like "Company Project".

## Known follow-ups

- Add your EmailJS credentials to a .env file (see .env.example) so the contact form actually sends — until then it falls back to opening the visitor's email client with a pre-filled message
- Add liveUrl values in src/data/projects.ts once each project is deployed
- Replace public/resume.pdf with your real resume
- Consider further code-splitting the main bundle (currently ~182kB gzipped) if it grows further
