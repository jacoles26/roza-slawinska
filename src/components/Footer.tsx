import { Link } from "react-router-dom";
import { navLinks, site, agencies } from "../data/site";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-cream">
      <div className="border-b border-cream/10 py-8">
        <Marquee
          items={site.roles}
          speed="slow"
          className="font-display text-3xl italic text-cream/80 md:text-5xl"
        />
      </div>

      <div className="container-editorial grid gap-12 py-20 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <p className="font-display text-4xl italic">{site.name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">{site.tagline}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-cream/70 transition-colors hover:text-cream"
          >
            {site.instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-cream/40">Explore</p>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-cream/40">Representation</p>
          {agencies.map((a) => (
            <span key={a.name} className="text-sm text-cream/70">
              {a.name}
              <span className="block text-xs text-cream/40">{a.location}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-editorial flex flex-col items-start justify-between gap-3 border-t border-cream/10 py-8 text-xs text-cream/40 sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </span>
        <span>Warsaw · On the move</span>
      </div>
    </footer>
  );
}
