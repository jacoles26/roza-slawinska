import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Picture from "../components/Picture";
import AgencyStrip from "../components/AgencyStrip";
import { useContent } from "../i18n/useContent";
import { galleryItems, journalImage } from "../data/shared";

export default function Home() {
  const { content, localePath } = useContent();
  const { home, instagram, instagramHandle, journal, portfolio, quotes } = content;

  const featured = galleryItems.filter((g) => g.feature).slice(0, 4);
  const journalTeasers = journal.entries.slice(0, 6);
  const beliefs = quotes.slice(0, 3);

  return (
    <PageTransition>
      <Seo title={content.seo.home.title} description={content.seo.home.description} />
      <Hero />

      {/* The heart — the value Róża brings to others */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="container-editorial grid gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:items-center md:py-36">
          <Reveal>
            <span className="eyebrow text-azure-soft">
              <span className="h-px w-8 bg-azure-soft" />
              {home.valueEyebrow}
            </span>
            <h2 className="mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
              {home.valueTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-cream/75">{home.valueBody}</p>
            <blockquote className="border-l-2 border-clay pl-6 font-display text-2xl italic leading-snug text-cream md:text-3xl">
              “{home.valueQuote}”
            </blockquote>
            <Link to={localePath("/journal")} className="btn-island w-fit bg-cream text-ink">
              {home.valueButton}
              <span className="btn-island-icon bg-ink/10">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Short version */}
      <section className="container-editorial py-24 md:py-36">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-clay" />
            {home.shortEyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-5xl font-display text-3xl leading-[1.15] text-ink md:text-5xl md:leading-[1.1]">
            {home.shortTitle}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">{content.intro}</p>
            <Link to={localePath("/about")} className="mt-8 btn-ghost">
              {home.shortButton}
              <span className="btn-island-icon bg-ink/5">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Marquee band */}
      <section className="border-y border-ink/10 bg-paper-deep py-6">
        <Marquee
          items={home.marquee}
          className="font-display text-2xl italic text-ink/70 md:text-4xl"
        />
      </section>

      {/* Selected work teaser */}
      <section className="container-editorial py-24 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow={home.workEyebrow}
            title={home.workTitle}
            intro={home.workIntro}
          />
          <Reveal>
            <Link to={localePath("/portfolio")} className="btn-island shrink-0">
              {home.workButton}
              <span className="btn-island-icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={i * 0.08}
              className={i % 2 === 0 ? "md:mt-0" : "md:mt-12"}
            >
              <Link
                to={localePath("/portfolio")}
                className="group block aspect-[3/4] overflow-hidden rounded-lg bg-paper-deep"
              >
                <Picture
                  slug={item.slug}
                  alt={portfolio.alt[item.slug] ?? content.name}
                  className="block h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who I am split */}
      <section className="container-editorial py-12 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
            <Picture slug="portrait-overlook" alt={content.name} className="h-full w-full" />
          </Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading index="02" eyebrow={home.whoEyebrow} title={home.whoTitle} />
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              {home.whoBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={localePath("/about")} className="btn-island">
                {home.whoButton}
                <span className="btn-island-icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journal teaser */}
      <section className="container-editorial py-24 md:py-36">
        <SectionHeading
          index="03"
          eyebrow={home.journalEyebrow}
          title={home.journalTitle}
          intro={home.journalIntro}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journalTeasers.map((entry, i) => (
            <Reveal key={entry.id} delay={(i % 3) * 0.08}>
              <Link
                to={localePath("/journal")}
                className="group relative block aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep"
              >
                <Picture
                  slug={journalImage(entry.id)}
                  alt={entry.title}
                  className="h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 text-cream">
                  <span className="text-[10px] uppercase tracking-label text-cream/70">
                    {entry.kicker}
                  </span>
                  <span className="font-display text-2xl">{entry.title}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* In her words — quotes */}
      <section className="container-editorial py-12 md:py-24">
        <SectionHeading eyebrow={home.quotesEyebrow} title={home.quotesTitle} className="mb-12" />
        <div className="grid gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 md:grid-cols-3">
          {beliefs.map((quote, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-paper">
              <figure className="flex h-full flex-col gap-5 p-8 md:p-10">
                <span className="font-display text-4xl italic leading-none text-clay">”</span>
                <blockquote className="font-display text-xl leading-snug text-ink md:text-2xl">
                  {quote}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Representation */}
      <section className="container-editorial py-12 md:py-24">
        <SectionHeading index="04" eyebrow={home.repEyebrow} title={home.repTitle} className="mb-12" />
        <AgencyStrip />
      </section>

      {/* Contact CTA */}
      <section className="container-editorial py-24 md:py-36">
        <Reveal className="relative overflow-hidden rounded-squircle bg-ink px-8 py-20 text-center text-cream md:px-16 md:py-28">
          <span className="eyebrow text-cream/50">{home.ctaEyebrow}</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {home.ctaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-cream/70">{home.ctaBody}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to={localePath("/contact")} className="btn-island bg-cream text-ink">
              {home.ctaButton}
              <span className="btn-island-icon bg-ink/10">
                <ArrowIcon />
              </span>
            </Link>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost border-cream/30 text-cream hover:border-cream/70"
            >
              {instagramHandle}
              <span className="btn-island-icon bg-cream/10">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
      <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
