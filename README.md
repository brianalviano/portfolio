# Brian Alviano — Production Full-Stack Engineering Portfolio

[![Astro 5.0](https://img.shields.io/badge/Astro-v5.0-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Svelte 5.0](https://img.shields.io/badge/Svelte-v5.0-ff3e00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Tailwind CSS 4.0](https://img.shields.io/badge/Tailwind_CSS-v4.0-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript 5.0](https://img.shields.io/badge/TypeScript-v5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun 1.0](https://img.shields.io/badge/Bun-v1.0-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A high-performance, data-driven, multi-language developer portfolio engineered for **Brian Alviano**, a Full-Stack Engineer based in Surabaya, Indonesia. Designed around modern web standards, neo-brutalist aesthetics, 120 FPS hardware acceleration, and international multi-locale SEO routing.

---

## 📐 System Architecture & Data Flow

This application is built on a **Single-Source-of-Truth Data Architecture**, decoupling UI layout templates from content data.

```
                  ┌─────────────────────────────────────────┐
                  │       src/data/portfolioData.ts         │
                  │   (Central Structured EN/ID Content)    │
                  └────────────────────┬────────────────────┘
                                       │
                 ┌─────────────────────┴─────────────────────┐
                 │                                           │
  ┌──────────────▼──────────────┐             ┌──────────────▼──────────────┐
  │   English Route (/)         │             │   Indonesian Route (/id/)   │
  │   src/pages/index.astro     │             │   src/pages/id/index.astro  │
  └──────────────┬──────────────┘             └──────────────┬──────────────┘
                 │                                           │
                 └─────────────────────┬─────────────────────┘
                                       │
  ┌────────────────────────────────────▼────────────────────────────────────┐
  │                           Component Layer                               │
  │  Hero.astro  ·  About.astro  ·  Services.astro  ·  Process.astro        │
  │  Skills.astro ·  Work.astro   ·  Testimonials.astro ·  Cta.astro        │
  └────────────────────────────────────┬────────────────────────────────────┘
                                       │
  ┌────────────────────────────────────▼────────────────────────────────────┐
  │                       Hardware & Browser Engine                         │
  │  • GPU Compositor Thread Reveal (IntersectionObserver)                  │
  │  • Google hreflang SEO (en, id, x-default)                             │
  │  • Interactive EN | ID Switcher & localStorage Persistence              │
  └─────────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Technical Highlights & Optimizations

### 1. 120 FPS Hardware-Accelerated Rendering
- **Main-Thread Offloading**: Heavy JavaScript scroll triggers were refactored to native `IntersectionObserver` instances. Card transforms use `translate3d(0, y, 0)` and `opacity` executed exclusively on the browser's **GPU Compositor Thread**, leaving 0% JS main-thread drag during fast scrolling.
- **Micro-Animation Tuning**: Optimized SVG fractal noise layers, reduced compositor blur radius (`backdrop-blur-md`), and eliminated fixed-element blend mode recalculations (`mix-blend-mode`).

### 2. International i18n & Google SEO Standards
- **URL Subpath Routing**: Complies with Google Internationalization Best Practices:
  - `https://brianalviano.com/` — Default International English version.
  - `https://brianalviano.com/id/` — Local Indonesian version.
- **Google `hreflang` Canonical Link Integration**:
  ```html
  <link rel="alternate" hreflang="en" href="https://brianalviano.com/" />
  <link rel="alternate" hreflang="id" href="https://brianalviano.com/id/" />
  <link rel="alternate" hreflang="x-default" href="https://brianalviano.com/" />
  ```
- **Auto-Detection & Memory**: Automatically detects `navigator.language` on initial visit and persists user preference in `localStorage`.

### 3. Zero-Duplication Data Architecture
- All content (bio, stats, 4 service modules, 4 process steps, 4 case studies with interactive screen mockups, 3 client testimonials, client logos, form fields) is typed and exported from [`src/data/portfolioData.ts`](file:///d:/Vino/Work/Portfolio/web-porto/portfolio/src/data/portfolioData.ts).
- Updating text or adding new projects requires modifying **a single data file** without touching HTML or CSS templates.

---

## 🧩 Component Directory & Responsibilities

| Component | Path | Description |
| :--- | :--- | :--- |
| `Header` | `src/components/Header.astro` | Sticky navbar with `EN \| ID` URL language switcher & section links. |
| `Hero` | `src/components/Hero.astro` | Business-impact headline, developer profile card, and marquee ticker. |
| `About` | `src/components/About.astro` | Background overview, animated counter metrics, and contact quick links. |
| `Services` | `src/components/Services.astro` | 4 core engineering capabilities (ERP, Custom Systems, Websites, APIs). |
| `Process` | `src/components/Process.astro` | 4-step structured development workflow (Discover, Architect, Build, Launch). |
| `Skills` | `src/components/Skills.astro` | Technology stack grouped by Frontend, Backend, Database, & DevOps. |
| `Work` | `src/components/Work.astro` | Featured project case studies (DAKI, SIMETIK, Pelangi UV, Maha Koding). |
| `Testimonials` | `src/components/Testimonials.astro` | Client reviews with ratings, roles, and company details. |
| `InsightsSection` | `src/components/InsightsSection.astro` | Engineering articles grid and client partner logos showcase. |
| `Cta` | `src/components/Cta.astro` | Interactive project brief contact form with mailto fallback generator. |
| `Footer` | `src/components/Footer.astro` | 1-to-1 static layout match with native CSS glow hover (0 GSAP). |
| `SEO` | `src/components/SEO.astro` | Open Graph, Twitter Cards, Schema.org `Person` JSON-LD, & `hreflang` meta. |

---

## 🛠️ Complete Tech Stack

```text
Core Framework:      Astro v5.0 (Static Site Generation / Server-Driven)
Interactive UI:      Svelte v5.0 (Runes) & HTML5 Native Elements
Styling Engine:      Tailwind CSS v4.0 & Custom CSS Tokens (global.css)
Type System:         TypeScript v5.0 (Strict Schema Enforcement)
Package Manager:     Bun v1.0+
Iconography:         Tabler Icons SVG Set
Animations:          Native CSS Keyframes, GPU Compositor, & GSAP (Counter Interpolation Only)
```

---

## 📁 Full Directory Structure

```text
web-porto/portfolio/
├── astro.config.mjs          # Astro config with native i18n locales ['en', 'id']
├── package.json              # Project dependencies & scripts
├── tsconfig.json             # TypeScript compiler settings
├── README.md                 # Project documentation
└── src/
    ├── components/           # Modular Astro & Svelte components
    │   ├── About.astro
    │   ├── Cta.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── InsightsSection.astro
    │   ├── Process.astro
    │   ├── SEO.astro
    │   ├── Services.astro
    │   ├── Skills.astro
    │   ├── Testimonials.astro
    │   └── Work.astro
    ├── data/
    │   └── portfolioData.ts  # 🌟 Single Source of Truth for EN & ID Content
    ├── i18n/
    │   └── translations.ts   # Translation interfaces & helpers
    ├── layouts/
    │   └── BaseLayout.astro  # HTML Shell, GSAP Loader, & Theme Context
    ├── pages/
    │   ├── index.astro       # English Root Route (/)
    │   ├── id/
    │   │   └── index.astro   # Indonesian Route (/id/)
    │   └── insights/         # MDX Engineering Notes & Case Study Articles
    └── styles/
        └── global.css        # Global CSS variables, noise filters, & GPU reveal classes
```

---

## 🚀 Development & Deployment Commands

All commands are executed using [Bun](https://bun.sh/):

```sh
# Clone project repository
git clone https://github.com/brianalviano/portfolio.git
cd portfolio

# Install dependencies
bun install

# Start development server (at localhost:4321)
bun dev

# Run TypeScript type check
bun run check

# Build production bundle (output to ./dist)
bun run build

# Preview production build locally
bun run preview
```

---

## 📜 License & Copyright

Designed and engineered by **Brian Alviano** © 2026. All rights reserved.
