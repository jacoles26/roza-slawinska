import { Link } from "react-router-dom";
import { useContent } from "../i18n/useContent";
import Marquee from "./Marquee";

export default function Footer() {
  const { content, localePath } = useContent();
  const { roles, nav, name, tagline, instagram, instagramHandle, fullName, footer } = content;
  const agencies = content.representation.agencies;

  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-cream">
      <div className="border-b border-cream/10 py-8">
        <Marquee
          items={roles}
          speed="slow"
          className="font-display text-3xl italic text-cream/80 md:text-5xl"
        />
      </div>

      <div className="container-editorial grid gap-12 py-20 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <p className="font-display text-4xl italic">{name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">{tagline}</p>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-cream/70 transition-colors hover:text-cream"
          >
            {instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-cream/40">{footer.exploreLabel}</p>
          {nav.map((l) => (
            <Link
              key={l.to}
              to={localePath(l.to)}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-cream/40">{footer.representationLabel}</p>
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
          © {new Date().getFullYear()} {fullName}. {footer.rights}
        </span>
        <span>{footer.locationTag}</span>
      </div>
    </footer>
  );
}
