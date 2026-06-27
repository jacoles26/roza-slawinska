import { agencies, partnerships } from "../data/site";
import Reveal from "./Reveal";

/** Representation + partnerships, set as a refined credibility block. */
export default function AgencyStrip() {
  return (
    <div className="grid gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 md:grid-cols-3">
      {agencies.map((a, i) => (
        <Reveal key={a.name} delay={i * 0.08} className="bg-paper">
          <div className="flex h-full flex-col justify-between gap-8 p-8 md:p-10">
            <span className="eyebrow">{a.role}</span>
            <div className="flex flex-col gap-2">
              <p className="font-display text-2xl text-ink md:text-3xl">{a.name}</p>
              <p className="text-sm text-taupe">{a.location}</p>
            </div>
            {a.url ? (
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-clay"
              >
                Visit
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            ) : (
              <span className="text-sm text-taupe-light">Direct enquiries via contact</span>
            )}
          </div>
        </Reveal>
      ))}

      {partnerships.map((p) => (
        <Reveal key={p.name} className="bg-ink text-cream md:col-span-3">
          <div className="flex flex-col items-start justify-between gap-4 p-8 sm:flex-row sm:items-center md:p-10">
            <div className="flex flex-col gap-1">
              <span className="eyebrow text-cream/50">{p.role}</span>
              <p className="font-display text-2xl italic">{p.name}</p>
            </div>
            <span className="text-sm text-cream/60">Selected partnership</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
