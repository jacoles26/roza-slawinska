/**
 * Portfolio image manifest.
 *
 * Each entry maps a semantic slug to the files in /public/images/<slug>.{webp,jpg}.
 * To swap a photo: replace both files in /public/images keeping the same slug,
 * or add a new entry here. See /public/images/README.md.
 */

export type GalleryCategory = "editorial" | "travel" | "lifestyle" | "movement";

export interface GalleryItem {
  slug: string;
  alt: string;
  category: GalleryCategory;
  /** Layout weight in the editorial grid: "tall" tiles span two rows. */
  feature?: boolean;
}

export const gallery: GalleryItem[] = [
  { slug: "portrait-overlook", alt: "Róża at a harbour overlook in Monaco", category: "editorial", feature: true },
  { slug: "editorial-garden", alt: "Róża in white tailoring among garden greenery", category: "editorial" },
  { slug: "street-style", alt: "Róża in head-to-toe neutral tailoring on a city street", category: "lifestyle" },
  { slug: "coastal-path", alt: "Róża on a Mediterranean coastal path in white", category: "travel", feature: true },
  { slug: "running-mountains", alt: "Róża running along a coastal mountain ridge", category: "movement" },
  { slug: "viewpoint", alt: "Róża at a Côte d'Azur viewpoint above the sea", category: "travel" },
  { slug: "portrait-car", alt: "Candid portrait of Róża in soft daylight", category: "editorial" },
  { slug: "sea-dive", alt: "Diving into open water off the rocks", category: "movement", feature: true },
  { slug: "clifftop", alt: "On a clifftop above the Mediterranean", category: "travel" },
  { slug: "coffee-hat", alt: "A slow morning — coffee and a sun hat in the city", category: "lifestyle" },
  { slug: "shadow-rock", alt: "Self-portrait in shadow cast on warm red rock", category: "editorial" },
  { slug: "jetty-still", alt: "Standing on a stone jetty reaching into the sea", category: "travel", feature: true },
  { slug: "heart-hands", alt: "Hands framed into a heart over clear water", category: "lifestyle" },
  { slug: "two-coats", alt: "Two in cream tailoring, golden afternoon light", category: "lifestyle" },
];

export const categories: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "editorial", label: "Editorial" },
  { key: "travel", label: "Travel" },
  { key: "movement", label: "Movement" },
  { key: "lifestyle", label: "Lifestyle" },
];

export const img = (slug: string, ext: "webp" | "jpg" = "webp") => `/images/${slug}.${ext}`;
