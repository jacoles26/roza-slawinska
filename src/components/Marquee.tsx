import { cn } from "../lib/cn";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
  separator?: string;
  speed?: "normal" | "slow";
}

/** Seamless infinite marquee. Content is duplicated and shifted -50% over the loop. */
export default function Marquee({
  items,
  className,
  separator = "—",
  speed = "normal",
}: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className={cn("flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center whitespace-nowrap",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{item}</span>
            <span className="text-clay">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
