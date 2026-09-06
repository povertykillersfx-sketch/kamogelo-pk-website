# KAMO PK

Personal brand website for Kamogelo PK — trader, entrepreneur and creator from
South Africa.

The site is a single cinematic scroll: hero, about, journey, what I do, content,
PKFX, philosophy, final call to action and footer. KAMO PK is the primary
brand; Poverty Killers FX appears as one of the businesses being built rather
than as the identity of the site.

## Stack

- **Next.js 16** (App Router, static prerender — every route ships as static HTML)
- **React 19**
- **Tailwind CSS v4** with design tokens defined in `src/app/globals.css`
- **Motion** for scroll-driven and reveal animations
- **TypeScript**

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Editing the site

All copy, links, milestones, content entries and media paths live in
[`src/content/site.ts`](src/content/site.ts). Nothing in `src/components`
needs to be touched to keep the site current.

Before launch, replace the values marked `TODO` in that file:

- `site.url` — the production domain (feeds canonical URL, sitemap, robots, OG tags)
- `site.email` — the business inquiries address
- `social.*` — real Instagram, YouTube and Telegram links
- `contentPieces[].videoId` — real YouTube video ids

## Media

Photography and video slots are documented in
[`public/images/README.md`](public/images/README.md). Every slot is optional:
an empty slot renders as a composed cinematic still rather than a broken image,
so the layout holds up while assets are still being shot.

Content cards never load anything from YouTube until a visitor clicks — the
card shows a thumbnail and only then mounts the privacy-enhanced player.

## Design system

Tokens are declared once in `@theme` in `src/app/globals.css`:

| Token | Use |
| --- | --- |
| `ink`, `ink-soft`, `surface`, `surface-raised` | near-black backgrounds, faintly violet-tinted |
| `bone`, `bone-dim`, `mute` | white and grey typography |
| `violet`, `violet-soft` | primary brand accent, carried over from PKFX |
| `gold` | secondary accent, used sparingly (the "now" milestone) |
| `hairline`, `hairline-strong` | 1px rules and borders |

Typography uses Inter Tight for display, Inter for body, JetBrains Mono for
labels and Instrument Serif for the single italic editorial accent. Type scales
are exposed as `display-hero`, `display-xl`, `display-lg`, `display-md`,
`eyebrow` and `lede` utilities rather than repeated `clamp()` values.

## Accessibility and performance

- Every route is statically prerendered; no third-party script loads on first paint.
- Fonts are self-hosted by Next at build time — no render-blocking font requests.
- `prefers-reduced-motion` disables parallax, the pinned horizontal timeline and
  all reveal transitions.
- The journey timeline renders as a vertical list on mobile and as a
  scroll-driven horizontal track on desktop, with only one of the two in the DOM.
- JSON-LD describes a `Person` (Kamogelo) who founded an `Organization` (PKFX),
  plus a `WebSite` — so search engines read KAMO PK as the primary entity.
