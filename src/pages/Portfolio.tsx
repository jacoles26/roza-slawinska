import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import Lightbox from "../components/Lightbox";
import { cn } from "../lib/cn";
import { gallery, categories, type GalleryCategory } from "../data/gallery";

export default function Portfolio() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <PageTransition>
      <Seo
        title="Portfolio"
        description="The portfolio of Róża Sławińska — editorial, travel, movement and lifestyle imagery."
      />
      <PageHeader
        eyebrow="Portfolio"
        title={<>A gallery in <span className="italic">motion</span></>}
        intro="Editorial, travel and movement. A living archive that grows with every shoot — tap any frame to view it full-size."
      />

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
