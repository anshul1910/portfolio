# Anshul Dhiman — Portfolio

A premium, animated personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

**Live site:** [anshuldhiman-dev.vercel.app](https://anshuldhiman-dev.vercel.app/)

---

## Features

- **Dark / light theme** — persisted to `localStorage`, no flash on load
- **Animated loading screen** with a gradient progress line
- **Sticky glassmorphism navbar** — active-section highlighting, scroll progress bar, animated mobile menu
- **Hero** with a terminal-style typing effect and an ambient background
- **About** — two-column layout with an animated career timeline
- **Experience** — animated vertical timeline
- **Skills** — tabbed categories with real technology icons (via `react-icons`)
- **Projects** — tilt/glow project cards with live mouse-tracking, Code and Live Demo links
- **Contact** — form built with React Hook Form + Zod validation, wired to [EmailJS](https://emailjs.com) (falls back to a `mailto:` link if EmailJS isn't configured)
- **Route-based code splitting**, accessible semantic markup, and full keyboard navigation support

## Tech Stack

| Category           | Tools                      |
| ------------------ | -------------------------- |
| Framework          | React 19, TypeScript, Vite |
| Styling            | Tailwind CSS v4            |
| Animation          | Framer Motion              |
| Routing            | React Router               |
| Forms & Validation | React Hook Form, Zod       |
| Data Fetching      | TanStack Query             |
| Notifications      | Sonner                     |
| Email              | EmailJS                    |
| Icons              | Lucide React, React Icons  |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/anshul1910/portfolio.git
cd portfolio
npm install
```

### Environment Variables

The contact form uses [EmailJS](https://emailjs.com) to send messages without a backend. Copy `.env.example` to `.env` and fill in your own credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from your [EmailJS dashboard](https://dashboard.emailjs.com/) — Email Services for the service ID, Email Templates for the template ID, and Account → General for the public key. Your EmailJS template should reference these variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`.

If left unset, the form still works — it falls back to opening the visitor's email client with a pre-filled message instead of sending directly.

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, MainLayout
│   ├── sections/      # One folder per page section (hero, about, experience, skills, projects, contact)
│   ├── shared/        # SectionHeading, LoadingScreen, BrandIcons
│   └── ui/            # Reusable design-system primitives (Button, etc.)
├── contexts/           # ThemeProvider
├── data/               # All site content — profile.ts, experience.ts, projects.ts, skills.ts, about.ts
├── hooks/               # useActiveSection, useScrollProgress, useRotatingText, useTilt
├── pages/               # HomePage, NotFoundPage
├── services/            # contact.ts (EmailJS integration)
├── types/               # Shared TypeScript interfaces
└── utils/               # cn.ts, contactSchema.ts
```

To update site content — name, bio, work history, projects, skills — edit the files in `src/data/`. Nothing else needs to change; every section reads from there.

## Deployment

This project is a static Vite build and deploys cleanly to Vercel, Netlify, or any static host. Remember to set the `VITE_EMAILJS_*` environment variables in your hosting provider's dashboard, not just locally.

## License

This project is my personal portfolio and is not licensed for reuse. Feel free to look through the code for inspiration, but please don't copy the content or design wholesale.

## Contact

- Email: anshuldhiman1910@gmail.com
- LinkedIn: [linkedin.com/in/anshuldhiman19](https://linkedin.com/in/anshuldhiman19)
- GitHub: [@anshul1910](https://github.com/anshul1910)
