import { cn } from "../lib/cn";

interface PictureProps {
  slug: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  /** Set "high" on the LCP image (e.g. the lead portrait) so it loads first. */
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
}

/** Renders /images/<slug>.webp with a .jpg fallback. */
export default function Picture({
  slug,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
}: PictureProps) {
  return (
    <picture className={className}>
      <source srcSet={`/images/${slug}.webp`} type="image/webp" />
      <img
        src={`/images/${slug}.jpg`}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        sizes={sizes}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </picture>
  );
}
