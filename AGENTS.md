# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What This Is

A GitHub Pages personal portfolio site (wangbin3162.github.io) serving as a personal resume/showcase and open-source project gallery. All content is in Chinese (zh-CN). Deployed as static HTML to GitHub Pages from the `docs/` directory.

## Development Commands

```bash
npm run dev      # Start Vite dev server on port 3000 (auto-opens browser)
npm run build    # Build to docs/dist
npm run preview  # Preview production build
```

No test suite, no build step required for deployment — the HTML files in `docs/` are served directly by GitHub Pages.

## Architecture

This is a pure static site with no framework — just vanilla HTML/CSS/JS served via Vite for local development.

- **`docs/`** — The root served by both Vite and GitHub Pages
  - `index.html` — Desktop presentation-style personal site (slide navigation with keyboard/mouse/touch, canvas particle background)
  - `mobile.html` — Mobile-optimized version with bottom tab navigation and swipe gestures
  - `github-demo.html` — Open-source project gallery page (Tailwind CSS via CDN)
  - `images/` — Screenshot images for open-source project cards
- **`vite.config.js`** — Sets `docs` as root directory
- **Root-level files** — Resume documents (`简历.md`, PDF, DOCX), project listing (`开源组件库清单.md`)

### Design System (index.html & mobile.html)

Both files share the same CSS custom property theme (dark sci-fi aesthetic):
- `--bg: #060d1a`, `--accent: #00e5ff`, `--accent2: #7b61ff`, `--gold: #ffd60a`
- Google Fonts: `Exo 2` (headings/numbers), `Noto Sans SC` (body text)
- Glass-morphism cards with `var(--glass)` backgrounds and `var(--glass-border)` borders
- `.r` class for reveal-on-slide animations (index.html), `.fade-in` class for page transitions (mobile.html)

### Key Patterns

- **index.html** uses a slide-based navigation system: slides are `.slide` divs stacked absolutely, one `.active` at a time, navigated via keyboard arrows, mouse wheel, touch swipe, and dot indicators.
- **mobile.html** uses a page-based navigation system: `.page` divs toggled by a fixed bottom nav bar (`data-page` attributes), with left/right swipe support.
- Both files are self-contained single-file HTML — all CSS and JS are inline, no external build dependencies.

## Code Style

- Prettier: no semicolons, single quotes, 2-space indent, trailing comma `none`, print width 100
- ESLint: Vue 3 + TypeScript config (present for related projects, not actively used in this static site)
