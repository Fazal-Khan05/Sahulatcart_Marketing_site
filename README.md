# Sahulatcart — Marketing Site

Marketing site for **Sahulatcart**, an AI sales agent for Pakistani merchants that handles
WhatsApp conversations, negotiates prices, and closes orders automatically.

Live at [www.sahulatcart.com](https://www.sahulatcart.com).

## Stack

- **React 19** with **React Router 7** (client-side routing)
- **Vite 8** for dev server and builds
- **Tailwind CSS 4** — theme tokens live in `src/index.css` via `@theme`, there is no `tailwind.config.js`
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
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint |

## Structure

```
src/
├── App.jsx                  Router and page shell (Navbar + Routes + Footer)
├── index.css                Tailwind theme tokens, fonts, base styles
├── pages/                   Thin route components that compose sections
├── components/
│   ├── layout/              Navbar, Footer
│   ├── sections/            Page content — most of the site lives here
│   ├── ui/                  Logo, ComingSoon modal
│   ├── animations/          FadeInView, StaggerContainer
│   └── utils/               ScrollToTop
└── lib/
    └── web3forms.js         Form submission helper
```

Pages are deliberately thin: each one stacks section components and ends with `<FAQ />`.

### Routes

| Route | Page |
| --- | --- |
| `/` | Hero, integrations, AI salesperson, rule engine, FAQ |
| `/solutions` | Solutions, chat-to-checkout, FAQ |
| `/how-it-works` | Setup timeline, negotiation demo, FAQ |
| `/pricing` | Plan comparison, FAQ |
| `/contact` | Demo booking form, FAQ |
| `/support` | Support request form, FAQ |
| `*` | 404 |

## Forms

All three forms (demo booking, support, and the waitlist in the Coming Soon modal) post to
[Web3Forms](https://web3forms.com) through `src/lib/web3forms.js`. The access key is a
publishable key — it identifies the destination inbox and is safe to ship in the bundle.

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `/index.html` so client-side routing
works on direct navigation and refresh.

SEO files are served from `public/`: `sitemap.xml`, `robots.txt`, and the Google Search
Console verification file. Add new routes to `sitemap.xml` when you create them.
