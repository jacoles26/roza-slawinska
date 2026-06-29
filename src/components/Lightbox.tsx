import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "../data/shared";
import { easeEditorial } from "../lib/motion";
import Picture from "./Picture";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      const next = (index + dir + items.length) % items.length;
      onNavigate(next);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  const current = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeEditorial }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 px-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="stroke-current">
              <path d="M3 3l10 10M13 3L3 13" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 md:left-8"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" className="stroke-current">
              <path d="M11 3L5 9l6 6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={current.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.45, ease: easeEditorial }}
              className="flex max-h-[86vh] max-w-[92vw] flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Picture
                slug={current.slug}
                alt={current.alt}
                loading="eager"
                className="max-h-[80vh] overflow-hidden rounded-lg"
                imgClassName="max-h-[80vh] w-auto object-contain"
              />
              <figcaption className="flex items-center gap-3 text-cream/70">
                <span className="eyebrow text-cream/50">{current.category}</span>
                <span className="text-sm">{current.alt}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 md:right-8"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" className="stroke-current">
              <path d="M7 3l6 6-6 6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
