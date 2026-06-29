/**
 * Structural, language-independent data: image slugs, gallery categories and
 * journal media. The *words* (alt text, titles, blurbs) live in the per-locale
 * content files; this file only maps the layout and the media on disk.
 *
 * To swap a photo: replace both files in /public/images keeping the same slug.
 * See /public/images/README.md.
 */

export type GalleryCategory = "editorial" | "travel" | "lifestyle" | "movement";

/** Structural gallery item — alt text is supplied per-locale from content.portfolio.alt. */
export interface GalleryMeta {
  slug: string;
  category: GalleryCategory;
  /** Layout weight in the editorial grid: feature tiles read larger. */
  feature?: boolean;
}

/** Runtime gallery item once localized alt text is merged in. */
export interface GalleryItem extends GalleryMeta {
  alt: string;
}

export const galleryItems: GalleryMeta[] = [
  { slug: "portrait-overlook", category: "editorial", feature: true },
  { slug: "editorial-garden", category: "editorial" },
  { slug: "street-style", category: "lifestyle" },
  { slug: "coastal-path", category: "travel", feature: true },
  { slug: "running-mountains", category: "movement" },
  { slug: "viewpoint", category: "travel" },
  { slug: "portrait-car", category: "editorial" },
  { slug: "sea-dive", category: "movement", feature: true },
  { slug: "clifftop", category: "travel" },
  { slug: "coffee-hat", category: "lifestyle" },
  { slug: "shadow-rock", category: "editorial" },
  { slug: "jetty-still", category: "travel", feature: true },
  { slug: "heart-hands", category: "lifestyle" },
  { slug: "two-coats", category: "lifestyle" },
];

/** Ordered category keys for the portfolio filter (labels come from content). */
export const categoryOrder: (GalleryCategory | "all")[] = [
  "all",
  "editorial",
  "travel",
  "movement",
  "lifestyle",
];

/** Maps a journal entry id → its media on disk. Text comes from content.journal.entries. */
export const journalMedia: { id: string; image: string; video?: string }[] = [
  { id: "running", image: "running-mountains", video: "forest-run" },
  { id: "travel", image: "viewpoint", video: "village-walk" },
  { id: "culture", image: "coffee-hat", video: "palace-kiss" },
  { id: "fitness", image: "sea-dive" },
  { id: "style", image: "editorial-garden" },
  { id: "optimising", image: "street-style" },
];

export function journalImage(id: string): string {
  return journalMedia.find((m) => m.id === id)?.image ?? "portrait-overlook";
}

export function journalVideo(id: string): string | undefined {
  return journalMedia.find((m) => m.id === id)?.video;
}

/** /public/video/<slug>.mp4 + <slug>-poster.jpg used as the hero background. */
export const HERO_VIDEO = "village-walk";

/** Resolve a slug to its public image path. */
export const img = (slug: string, ext: "webp" | "jpg" = "webp") => `/images/${slug}.${ext}`;
