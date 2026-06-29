import { motion } from "framer-motion";
import type { JournalEntry } from "../data/content/types";
import { journalImage, journalVideo } from "../data/shared";
import { easeEditorial } from "../lib/motion";
import { cn } from "../lib/cn";
import Picture from "./Picture";

interface JournalCardProps {
  entry: JournalEntry;
  index: number;
}

/** Alternating editorial split row. Even rows image-left, odd rows image-right. */
export default function JournalCard({ entry, index }: JournalCardProps) {
  const flipped = index % 2 === 1;
  const image = journalImage(entry.id);
  const video = journalVideo(entry.id);

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      {/* Media */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: easeEditorial }}
        className={cn(
          "group relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep",
          flipped && "md:order-2"
        )}
      >
        <Picture
          slug={image}
          alt={entry.title}
          className="block h-full w-full"
          imgClassName="h-full w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-105"
        />
        {video && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => void e.currentTarget.play().catch(() => {})}
          >
            <source src={`/video/${video}.mp4`} type="video/mp4" />
          </video>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-cream/85 px-3 py-1 text-[10px] uppercase tracking-label text-ink backdrop-blur-sm">
          {entry.kicker}
        </span>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: easeEditorial, delay: 0.1 }}
        className={cn("flex flex-col gap-5", flipped && "md:order-1")}
      >
        <span className="font-display text-sm italic text-clay">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="display-md text-ink">{entry.title}</h3>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">{entry.blurb}</p>
      </motion.div>
    </article>
  );
}
