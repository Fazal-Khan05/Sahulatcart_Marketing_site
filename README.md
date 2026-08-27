# Sahulatcart — Marketing Site

Marketing site for **Sahulatcart**, an AI sales agent for Pakistani merchants that handles
WhatsApp conversations, negotiates prices, and closes orders automatically.

Live at [www.sahulatcart.com](https://www.sahulatcart.com).

## Stack

- **Next.js 16** (App Router) — every route is prerendered to static HTML
- **React 19**
- **Tailwind CSS 4** — theme tokens live in `src/app/globals.css` via `@theme`, there is no `tailwind.config.js`
- **Framer Motion** for scroll-triggered and staggered animations
- **lucide-react** for icons
- **Oxlint** for linting

## Getting started

```bash
npm install
npm run dev
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run Oxlint |

## Structure

```
src/
├── app/
│   ├── layout.jsx           Root layout: <html>, Navbar, Footer, base metadata
│   ├── globals.css          Tailwind theme tokens, fonts, base styles
│   ├── page.jsx             /
│   ├── not-found.jsx        404
│   └── <route>/page.jsx     One directory per route
├── components/
│   ├── layout/              Navbar (client), Footer (server)
│   ├── sections/            Page content — most of the site lives here
│   ├── ui/                  Logo, ComingSoon modal
│   └── animations/          FadeInView, StaggerContainer
└── lib/
    ├── metadata.js          Per-page metadata builder
    └── web3forms.js         Form submission helper
```

Pages are deliberately thin: each one stacks section components and ends with `<FAQ />`.

Anything using Framer Motion, state, or event handlers carries `'use client'`. Those
components are still server-rendered into the initial HTML — the directive only controls
hydration, so page content remains fully crawlable.

### Routes

| Route | Page |
| --- | --- |
| `/` | Hero, integrations, AI salesperson, rule engine, FAQ |
| `/solutions` | Solutions, chat-to-checkout, FAQ |
| `/how-it-works` | Setup timeline, negotiation demo, FAQ |
| `/pricing` | Plan comparison, FAQ |
| `/contact` | Demo booking form, FAQ |
| `/support` | Support request form, FAQ |
| `*` | 404 (returns a real 404 status) |

## Metadata

`src/lib/metadata.js` builds each page's title, description, canonical, and social tags.

Next shallow-merges metadata: a page that defines `openGraph` **replaces** the layout's copy
rather than merging into it. Every page therefore spells the whole object out — otherwise it
silently inherits the layout's `og:url` and each route claims to be the homepage. Use the
`pageMetadata()` helper rather than hand-writing the object.

The social share card is `public/og-image.png` (1200×630). Its source is kept beside it as
`public/og-image.source.html`, with the re-render command in a comment at the top.

## Forms

All three forms (demo booking, support, and the waitlist in the Coming Soon modal) post to
[Web3Forms](https://web3forms.com) through `src/lib/web3forms.js`. The access key is a
publishable key — it identifies the destination inbox and is safe to ship in the bundle.

## Deployment

Deployed on Vercel, which auto-detects Next.js — no `vercel.json` needed. (The old Vite
setup used one to rewrite every path to `index.html`; that file must stay deleted, since it
would shadow Next's routing.)

SEO files are served from `public/`: `sitemap.xml`, `robots.txt`, and the Google Search
Console verification file. Add new routes to `sitemap.xml` when you create them.
