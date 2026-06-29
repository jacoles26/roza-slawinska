import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import AgencyStrip from "../components/AgencyStrip";
import Reveal from "../components/Reveal";
import Picture from "../components/Picture";
import { useContent } from "../i18n/useContent";

export default function Representation() {
  const { content, localePath } = useContent();
  const { representation } = content;

  return (
    <PageTransition>
      <Seo
        title={content.seo.representation.title}
        description={content.seo.representation.description}
      />
      <PageHeader
        eyebrow={representation.eyebrow}
        title={representation.title}
        intro={representation.intro}
      />

      <section className="container-editorial pb-16">
        <AgencyStrip />
      </section>

      {/* Editorial image band */}
      <section className="container-editorial grid items-center gap-10 py-16 md:grid-cols-2 md:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
          <Picture slug="street-style" alt={content.name} className="h-full w-full" />
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal>
            <h2 className="display-md text-ink">{representation.bandTitle}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              {representation.bandBody}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to={localePath("/contact")} className="btn-island">
              {representation.bandButton}
              <span className="btn-island-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
                  <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
