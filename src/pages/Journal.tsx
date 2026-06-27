import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import JournalCard from "../components/JournalCard";
import Reveal from "../components/Reveal";
import { journal } from "../data/journal";
import { site } from "../data/site";

export default function Journal() {
  return (
    <PageTransition>
      <Seo
        title="Journal"
        description="Movement, travel, culture and style — the world behind Róża Sławińska's work."
      />
      <PageHeader
        eyebrow="Journal"
        title={<>The life behind <span className="italic">the lens</span></>}
        intro="The running, the travelling, the culture and the small daily disciplines that feed everything else. This is the world the work comes from."
      />

      <section className="container-editorial flex flex-col gap-24 pb-24 md:gap-36">
        {journal.map((entry, i) => (
          <JournalCard key={entry.id} entry={entry} index={i} />
        ))}
      </section>

      {/* Follow along */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal className="flex flex-col items-center gap-6 rounded-squircle bg-paper-deep px-8 py-16 text-center md:py-24">
          <span className="eyebrow">Follow along</span>
          <h2 className="max-w-2xl font-display text-3xl text-ink md:text-5xl">
            The day-to-day lives on <span className="italic">Instagram</span>
          </h2>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-island">
            {site.instagramHandle}
            <span className="btn-island-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
                <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <Link to="/contact" className="text-sm text-ink-soft underline-offset-4 hover:underline">
            …or work with me →
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
