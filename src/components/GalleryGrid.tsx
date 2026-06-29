import { motion } from "framer-motion";
import type { GalleryItem } from "../data/shared";
import { easeEditorial } from "../lib/motion";
import Picture from "./Picture";

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

/** Editorial masonry. Uniform 3:4 portraits flow into balanced columns. */
export default function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {items.map((item, i) => (
        <motion.button
          key={item.slug}
          type="button"
          onClick={() => onOpen(i)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeEditorial, delay: (i % 3) * 0.08 }}
          className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg bg-paper-deep text-left"
        >
          <Picture
            slug={item.slug}
            alt={item.alt}
            className="block overflow-hidden"
            imgClassName="w-full transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
          />
          {/* Hover wash + caption */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-[11px] uppercase tracking-label text-cream">{item.category}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm">
              <svg width="13" height="13" viewBox="0 0 14 14" className="stroke-current">
                <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
