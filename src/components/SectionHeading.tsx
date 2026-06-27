import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string; // decorative print-style index, e.g. "01"
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
        {index && (
          <span className="font-display text-sm italic text-clay">{index}</span>
        )}
        {eyebrow && (
          <span className="eyebrow">
            <span className="h-px w-8 bg-taupe-light" />
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="display-md max-w-3xl text-ink">{title}</h2>
      {intro && (
        <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}
