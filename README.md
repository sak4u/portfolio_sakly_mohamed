# Mohamed Sakly — Personal Portfolio

A production-quality personal portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Prerequisites

- Node.js ≥ 18
- npm ≥ 9

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run the linter (oxlint) |

---

## Project Structure

```
src/
├── assets/              # Static assets imported by components
├── components/
│   ├── layout/          # Navbar, Footer
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── projects/        # ProjectCard
│   │   └── ProjectCard.tsx
│   ├── resume/          # ResumeDownload (language picker)
│   │   └── ResumeDownload.tsx
│   └── ui/              # (shared UI primitives — add as needed)
├── data/                # Content configuration files
│   ├── personal.ts      # Name, email, GitHub, LinkedIn, resume URLs
│   ├── projects.ts      # Project entries
│   ├── skills.ts        # Skill categories
│   └── experience.ts    # Education and work experience
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Light/dark theme with localStorage persistence
│   └── useActiveSection.ts # IntersectionObserver-based nav highlighting
├── sections/            # Top-level page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   └── ContactSection.tsx
├── types/
│   └── index.ts         # Shared TypeScript interfaces
├── App.tsx              # Root component
├── main.tsx             # Entry point (includes theme-flash prevention)
└── index.css            # Global design system (CSS custom properties + Tailwind v4)
```

---

## How to Update Personal Information

Edit `src/data/personal.ts`:

```ts
export const personalInfo = {
  name: 'Mohamed Sakly',
  email: 'sakly.mohamed.ben.abdelfateh@gmail.com',
  github: 'https://github.com/sak4u',
  linkedin: 'https://www.linkedin.com/in/sakly-mohamed-3b5a54284/',
  resumeUrls: {
    en: '/resume/mohamed-sakly-cv-en.pdf',
    fr: '/resume/mohamed-sakly-cv-fr.pdf',
  },
  location: 'Monastir, Tunisia',
};
```

---

## How to Add or Edit a Project

Edit `src/data/projects.ts`. Each project follows the `Project` interface defined in `src/types/index.ts`.

```ts
{
  id: 'unique-id',          // Used for DOM IDs
  title: 'Project Title',
  tagline: 'One-line summary',
  description: 'Paragraph description shown on the card',
  problem: 'What problem it solves',
  solution: 'How it solves it',
  features: ['Feature 1', 'Feature 2'],
  tech: ['React', 'Node.js'],
  githubUrl: 'https://github.com/you/repo', // or null
  demoUrl: 'https://your-demo.com',         // or null
  imageAlt: 'Description for screen readers',
  status: 'completed',  // 'completed' | 'in-progress' | 'planned'
  highlight: true,      // true = shown in featured row
}
```

---

## How to Update Education and Experience

Edit `src/data/experience.ts`. Replace the bracket-enclosed placeholders with real values.

---

## How to Add Your Resumes

Place the English and French resume PDFs in `public/resume/` (e.g. `public/resume/mohamed-sakly-cv-en.pdf` and `public/resume/mohamed-sakly-cv-fr.pdf`). The Download Resume button opens a language menu that links to both files.

To change the paths, update `personalInfo.resumeUrls` in `src/data/personal.ts`:

```ts
resumeUrls: {
  en: '/resume/mohamed-sakly-cv-en.pdf',
  fr: '/resume/mohamed-sakly-cv-fr.pdf',
},
```

---

## Theme System

The portfolio supports light and dark themes:

- On first visit, the OS preference (`prefers-color-scheme`) is used.
- The user's choice is persisted in `localStorage` under the key `portfolio-theme`.
- Themes are applied via a `data-theme` attribute on `<html>`.
- Design tokens are CSS custom properties in `src/index.css`.

---

## SEO Configuration

- Update `index.html` with your real domain for `<link rel="canonical">` and Open Graph URLs.
- Add an Open Graph image at `public/og-image.png` (recommended: 1200×630 px).
- Uncomment and update the relevant meta tags in `index.html`.

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. The default build command (`npm run build`) and output directory (`dist`) are already correct.

### Netlify

1. Push the repository to GitHub.
2. Connect the repository in Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Static Hosting (any)

```bash
npm run build
# Upload the contents of dist/ to your hosting provider
```

---

## Environment Variables

This portfolio has **no required environment variables**. It is a purely static frontend application.

If you add a contact form backed by a service such as Resend, Formspree, or EmailJS, add the relevant public API key to a `.env` file:

```
VITE_FORM_API_KEY=your_public_key
```

**Never commit secret credentials to version control.**

---

## License

© 2025 Mohamed Sakly. All rights reserved.
