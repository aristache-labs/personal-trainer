<div align="center">

# Elite Trainer · Personal Training

<em>Transform your body · Elevate your life.</em>

<br />

<a href="https://github.com/aristache-labs/personal-trainer">aristache-labs/personal-trainer</a>

<br />
<br />

<img src="showcase/Elite%20Trainer%20%C2%B7%20Prezentare%401x.png" width="100%" alt="Elite Trainer presentation on laptop and phones">

<br />

![Stars](https://shields.io/github/stars/aristache-labs/personal-trainer?style=flat-square&labelColor=18181b&color=a3e635)
![Contributors](https://shields.io/github/contributors/aristache-labs/personal-trainer?style=flat-square&labelColor=18181b&color=a3e635)
![Last commit](https://shields.io/github/last-commit/aristache-labs/personal-trainer?style=flat-square&labelColor=18181b&color=a3e635)
![Issues](https://shields.io/github/issues/aristache-labs/personal-trainer?style=flat-square&labelColor=18181b&color=a3e635)
![Watchers](https://shields.io/github/watchers/aristache-labs/personal-trainer?style=flat-square&labelColor=18181b&color=a3e635)

<strong>Dark theme &middot; lime accents &middot; English / Romanian &middot; responsive layouts &middot; personal training</strong><br>

<sub>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Content is maintained in local translation files. The repository includes development, production build, and lint commands.</sub>

<br />

[Stack](#stack) &middot; [The site](#the-site) &middot; [Local setup](#local-setup) &middot; [Admin panel](#admin-panel) &middot; [Deployment](#deployment)

</div>

---

## Overview

Elite Trainer is a bilingual personal training website that presents coaching services, nutrition guidance, body transformations, and training packages. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, it combines a dark visual identity with lime accents, responsive layouts, and animated sections. Visitors can explore the trainer's approach, compare packages, use a BMI calculator, and find consultation and WhatsApp contact options. English and Romanian content is maintained in local translation files.

## Table of Contents

- [Elite Trainer · Personal Training](#elite-trainer--personal-training)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Stack](#stack)
  - [The site](#the-site)
  - [Architecture overview](#architecture-overview)
  - [Prerequisites](#prerequisites)
  - [Local setup](#local-setup)
    - [1. Clone and install](#1-clone-and-install)
    - [2. Environment variables](#2-environment-variables)
    - [3. Database setup](#3-database-setup)
    - [4. Git hooks](#4-git-hooks)
    - [5. Run the dev server](#5-run-the-dev-server)
  - [Commands](#commands)
  - [Admin panel](#admin-panel)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [License](#license)
  - [Support the project](#support-the-project)
  - [Connect](#connect)

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| UI library | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Typography | Syne (display), DM Sans (body), via `next/font` |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Content | Local English and Romanian JSON dictionaries |
| Utilities | clsx, tailwind-merge |
| Package manager | npm (`package-lock.json` included) |
| Linting | ESLint with Next.js configuration |

---

## The site

The homepage is a single scroll, available at `/en` and `/ro`:

1. **Hero** - trainer portrait, introduction, calls to action, and headline stats.
2. **About** - trainer story and coaching approach.
3. **Services** - personal training and nutrition services.
4. **Benefits** - reasons to choose the coaching program.
5. **Transformations** - before-and-after client showcases.
6. **CTA banner** - an invitation to start a consultation.
7. **Process** - the steps of working with the trainer.
8. **Pricing** - session packages and their benefits.
9. **FAQ** - answers to common questions.
10. **BMI calculator** - an interactive body mass index calculator.
11. **Testimonials** - client reviews.
12. **Contact** - consultation form and contact options.
13. **Instagram strip** - visual content and social links.

The layout includes a navigation bar, language switcher, footer, floating WhatsApp link, and scroll-to-top control.

---

## Architecture overview

- **Routing** - `app/[locale]/page.tsx` composes the homepage sections. Middleware redirects `/` to `/en` and adds the default locale to paths without a locale prefix.
- **Content** - `lib/getDictionary.ts` reads `dictionaries/en.json` or `dictionaries/ro.json` on the server. The dictionary is passed to the page sections and layout components.
- **Rendering** - the homepage uses `dynamic = 'force-dynamic'`. Interactive sections use client components.
- **Look** - `tailwind.config.ts` defines the lime accent (`#a3e635`), dark surfaces, typography, spacing, and animations. Global styles live in `app/globals.css`.
- **Images** - trainer portraits and transformation images live in `public/images/`. The README presentation image lives in `showcase/`.
- **Contact** - the form currently simulates a successful submission with a timer. It does not send email or persist messages. Connect a delivery service before using it to collect inquiries.
- **External links** - WhatsApp links currently use `https://wa.me/1234567890`. Replace them and review social links and contact details before publishing.
- **SEO** - metadata and localized Open Graph fields are defined in the root and locale layouts. They currently reference `https://elitetrainer.com`; update them to the deployment's actual domain.

```text
personal-trainer/
├── app/
│   ├── [locale]/          # Localized layout and homepage
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root metadata and layout
├── components/
│   ├── layout/            # Navigation, language switcher, footer
│   ├── sections/          # Homepage sections
│   └── ui/                # Shared interface components
├── dictionaries/          # English and Romanian content
├── lib/                   # Dictionary loading and utilities
├── public/                # Public images and Open Graph asset
├── showcase/              # Project presentation image
└── middleware.ts          # Locale redirects
```

---

## Prerequisites

- **Node.js 18.17 or later** to meet Next.js 14's minimum runtime requirement.
- **npm** to install dependencies and run the project scripts.
- **Git** to clone the repository.

---

## Local setup

### 1. Clone and install

```bash
git clone https://github.com/aristache-labs/personal-trainer.git
cd personal-trainer
npm ci
```

### 2. Environment variables

The current application does not require environment variables. Content, contact links, and metadata are configured directly in the repository:

| Configuration | Location |
| --- | --- |
| English content | `dictionaries/en.json` |
| Romanian content | `dictionaries/ro.json` |
| Root metadata and site origin | `app/layout.tsx` |
| Localized metadata and Open Graph URLs | `app/[locale]/layout.tsx` |
| Colors, fonts, and spacing | `tailwind.config.ts` |
| WhatsApp and contact links | `components/sections/` and `components/ui/` |
| Navigation and footer links | `components/layout/` |

### 3. Database setup

No database is required. Site content is stored in the local JSON dictionaries, and the contact form does not persist submissions.

### 4. Git hooks

The repository does not include a Git hook setup. Run the available checks before pushing:

```bash
npm run lint
npm run build
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root redirects to [English](http://localhost:3000/en); [Romanian](http://localhost:3000/ro) is also available.

---

## Commands

| Command | Description |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint checks |

To run a production build locally:

```bash
npm run build
npm start
```

---

## Admin panel

The project has no admin panel or authentication. Edit the JSON dictionaries to update copy and the section components to change layout or behavior. Content changes require a new build and deployment.

Replace trainer photos and transformation images in `public/images/`, keeping component image references in sync. Update both dictionaries when changing bilingual content.

---

## Deployment

Deploy the project to Vercel or a hosting platform that supports a Next.js Node.js server.

1. Import [aristache-labs/personal-trainer](https://github.com/aristache-labs/personal-trainer) into the hosting platform.
2. Install dependencies with `npm ci` and build with `npm run build`.
3. For a self-hosted Node.js deployment, start the application with `npm start`.
4. Set the actual site domain in `app/layout.tsx` and `app/[locale]/layout.tsx`.
5. Replace placeholder contact and social links, and connect the consultation form to a submission backend.
6. Verify `/en` and `/ro`, navigation, images, the BMI calculator, and contact actions on desktop and mobile.

---

## Contributing

For proposed changes, open an [issue][issues] or submit a pull request. Keep English and Romanian content aligned and check responsive layouts when modifying sections.

Run `npm run lint` and `npm run build` before submitting a change.

## Contributors

Contributors to Elite Trainer:

<a href="https://github.com/aristache-labs/personal-trainer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aristache-labs/personal-trainer" alt="Contributors" />
</a>

## License

Private project — all rights reserved. No open-source license is included in this repository.

## Support the project

Report bugs and suggest improvements through [Issues][issues]. You can also star the [repository][repo] to follow the project.

## Connect

<div align="center">

**Adrian Cristache** · [aristache.dev](https://www.aristache.dev)

<a href="https://github.com/aristache-labs"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
<a href="https://www.aristache.dev"><img src="https://img.shields.io/badge/Site-a3e635?style=for-the-badge&logo=googlechrome&logoColor=09090b" alt="aristache.dev" /></a>

</div>

[repo]: https://github.com/aristache-labs/personal-trainer
[issues]: https://github.com/aristache-labs/personal-trainer/issues
