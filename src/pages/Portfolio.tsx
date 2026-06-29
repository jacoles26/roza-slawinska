import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import Lightbox from "../components/Lightbox";
import { cn } from "../lib/cn";
import { useContent } from "../i18n/useContent";
import {
  galleryItems,
  categoryOrder,
  type GalleryCategory,
  type GalleryItem,
} from "../data/shared";

export default function Portfolio() {
  const { content } = useContent();
  const { portfolio } = content;
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Merge structural gallery data with the active locale's alt text.
  const localized: GalleryItem[] = useMemo(
    () => galleryItems.map((g) => ({ ...g, alt: portfolio.alt[g.slug] ?? content.name })),
    [portfolio.alt, content.name]
  );

  const items = useMemo(
    () => (filter === "all" ? localized : localized.filter((g) => g.category === filter)),
    [filter, localized]
  );

  const categories = categoryOrder.map((key) => ({
    key,
    label: key === "all" ? portfolio.categories.all : portfolio.categories[key],
  }));

  return (
    <PageTransition>
      <Seo title={content.seo.portfolio.title} description={content.seo.portfolio.description} />
      <PageHeader eyebrow={portfolio.eyebrow} title={portfolio.title} intro={portfolio.intro} />

      {/* Filters */}
      <div className="container-editorial sticky top-20 z-30 mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setFilter(c.key);
              setLightbox(null);
            }}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-all duration-500 ease-editorial",
              filter === c.key
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 bg-cream/70 text-ink-soft backdrop-blur hover:border-ink/40"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <section className="container-editorial pb-24">
        <GalleryGrid items={items} onOpen={setLightbox} />
      </section>

      <Lightbox
        items={items}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </PageTransition>
  );
}
