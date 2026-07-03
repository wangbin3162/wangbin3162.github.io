# AGENTS.md

This file provides guidance to AI coding assistants when working with code in this repository.

## What This Is

A GitHub Pages personal portfolio site (`wangbin3162.github.io`) serving as a personal resume/showcase. All user-facing content is in Chinese (zh-CN).

The site is now built with [Astro](https://astro.build/) as a static site and deployed to GitHub Pages from the `dist/` directory.

## Development Commands

```bash
pnpm install     # install dependencies
pnpm run dev     # start Astro dev server
pnpm run build   # build static output to dist/
pnpm run preview # preview production build
```

No test suite is configured.

## Architecture

- **Framework**: Astro 6 static site
- **Integrations**: `@astrojs/sitemap`, `@astrojs/vue`, `@tailwindcss/vite`
- **No Markdown / MDX support**: `src/content.config.ts` and `@astrojs/mdx` have been removed
- **No RSS**: `@astrojs/rss` has been removed
- **Output directory**: `dist/`

### Directory Layout

- `src/pages/index.astro` — single-page homepage (hero + footer only)
- `src/components/BaseHead.astro` — shared `<head>` component
- `src/data/profile.ts` — personal info, stats, contact, and filing data
- `src/data/opensource.ts` — open-source project list (currently unused by the homepage)
- `src/assets/` — images consumed by Astro components
- `public/` — static files copied directly to `dist/`
- `static/` — legacy static files and resume documents (not part of the Astro build)
- `docs/部署说明.md` — deployment notes

### Design System

- Light gradient theme with glass-morphism cards
- CSS custom properties are defined inline in `src/pages/index.astro`
- Google Fonts: `Outfit` (headings/numbers), `Noto Sans SC` (body text)

### Key Patterns

- `src/pages/index.astro` is a self-contained single-page Astro component with inline styles and a small client script.
- Data is kept out of the markup in `src/data/*.ts`.
- Use `astro:assets` (`<Image />`) for images imported from `src/assets/`.

## Code Style

- Prettier: no semicolons, single quotes, 2-space indent, trailing comma `none`, print width 100
- TypeScript is used for data files and component frontmatter
