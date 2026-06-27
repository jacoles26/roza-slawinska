# Photos — how to swap them

Every photo on the site is referenced by a **slug**. For each slug there are two files:

- `<slug>.webp` — modern, smaller (shown to most browsers)
- `<slug>.jpg` — fallback (older browsers + social-share previews)

## To replace a photo with one of Rosie's own

1. Export the new photo (any orientation is fine).
2. Name it exactly like the slug you're replacing, e.g. `portrait-overlook.jpg`.
3. Drop it in this folder, replacing both the `.webp` and `.jpg` if you can.
   (A `.jpg` alone works — the browser falls back to it automatically.)
4. Refresh. Done.

Tip: keep images roughly **1350×1800 (3:4 portrait)** for the cleanest layout, under ~1800px on the long edge.

## Slugs in use

| Slug | Where it appears |
| --- | --- |
| `portrait-overlook` | Hero/about portrait, featured work, OG image |
| `editorial-garden` | About opener, Journal (Style) |
| `street-style` | Representation, Journal (Philosophy) |
| `coastal-path` | Portfolio (featured) |
| `running-mountains` | Journal (Movement) |
| `viewpoint` | Journal (Travel) |
| `portrait-car` | Contact portrait |
| `sea-dive` | Journal (Fitness) |
| `clifftop` | Portfolio |
| `coffee-hat` | Journal (Culture) |
| `shadow-rock` | Portfolio |
| `jetty-still` | Portfolio (featured) |
| `heart-hands` | Portfolio |
| `two-coats` | Portfolio |

Add or reorder entries in `src/data/gallery.ts` (portfolio) and `src/data/journal.ts` (journal).

## Videos

Background/hover clips live in `/public/video/<slug>.mp4` with a `<slug>-poster.jpg`.
The hero clip is set in `src/components/Hero.tsx` (`HERO_VIDEO`). Current clips:
`village-walk`, `jetty`, `palace-kiss`, `forest-run`, `sea-sparkle`, `coastal-road`, `tree-path`.
