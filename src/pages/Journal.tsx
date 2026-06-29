import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import JournalCard from "../components/JournalCard";
import Reveal from "../components/Reveal";
import { useContent } from "../i18n/useContent";

export default function Journal() {
  const { content, localePath } = useContent();
  const { journal, instagram, instagramHandle } = content;

  return (
    <PageTransition>
      <Seo title={content.seo.journal.title} description={content.seo.journal.description} />
      <PageHeader eyebrow={journal.eyebrow} title={journal.title} intro={journal.intro} />

      <section className="container-editorial flex flex-col gap-24 pb-24 md:gap-36">
        {journal.entries.map((entry, i) => (
          <JournalCard key={entry.id} entry={entry} index={i} />
        ))}
      </section>

      {/* Follow along */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal className="flex flex-col items-center gap-6 rounded-squircle bg-paper-deep px-8 py-16 text-center md:py-24">
          <span className="eyebrow">{journal.followEyebrow}</span>
          <h2 className="max-w-2xl font-display text-3xl text-ink md:text-5xl">
            {journal.followTitle}
          </h2>
          <a href={instagram} target="_blank" rel="noreferrer" className="btn-island">
            {instagramHandle}
            <span className="btn-island-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
                <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <Link
            to={localePath("/contact")}
            className="text-sm text-ink-soft underline-offset-4 hover:underline"
          >
            {journal.workWithMe}
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
