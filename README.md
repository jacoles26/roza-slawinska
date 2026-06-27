# Rosie Sławińska — Personal Brand Website

A cinematic, warm-editorial flagship site for **Rosie Sławińska** — Warsaw-based model,
runner and traveller. Built to put in an Instagram bio and grow a brand from.

Pages: **Home · About · Portfolio · Journal · Representation · Contact**.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · Framer Motion · React Router · react-helmet-async.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Editing content

All copy and content lives in plain data files — no component edits needed:

- `src/data/site.ts` — name, tagline, bio, location, social links, agencies, vital stats, SEO.
- `src/data/gallery.ts` — portfolio images (slug + category + alt).
- `src/data/journal.ts` — lifestyle/journal entries.

## Swapping photos

See [`public/images/README.md`](public/images/README.md). In short: drop a new file named
after the slug (e.g. `portrait-overlook.jpg`) into `public/images/` and refresh.

## Things to set before going fully live

- **Booking email** — set `site.email` in `src/data/site.ts` (currently hidden until provided).
- **Vital stats** — fill the `—` placeholders in `stats` (`src/data/site.ts`).
- **Domain** — point e.g. `rosieslawinska.com` at the deploy.

## Deploy

Configured for **Netlify** (`netlify.toml`) with a Vercel mirror (`vercel.json`).
The contact form uses **Netlify Forms** — submissions appear in the Netlify dashboard
automatically (the hidden detection form is in `index.html`).

```bash
# Netlify
netlify deploy --prod
```
