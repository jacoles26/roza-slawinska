import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Picture from "../components/Picture";
import AgencyStrip from "../components/AgencyStrip";
import ContactForm from "../components/ContactForm";
import { useContent } from "../i18n/useContent";
import { galleryItems, journalImage } from "../data/shared";

export default function Home() {
  const { content, localePath } = useContent();
  const { home, about, contact, representation, instagram, instagramHandle, email, journal } =
    content;

  const featured = galleryItems.filter((g) => g.feature).slice(0, 4);
  const journalTeasers = journal.entries.slice(0, 3);
  const beliefs = content.quotes.slice(0, 3);
  const agencyLink = representation.agencies.find((a) => a.url)?.url ?? "#contact";

  return (
    <PageTransition>
      <Seo title={content.seo.home.title} description={content.seo.home.description} />
      <Hero />

      {/* The heart — her mission / the value she brings */}
      <section aria-label={home.valueEyebrow} className="relative overflow-hidden bg-ink text-cream">
        <div className="container-editorial grid gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:items-center md:py-36">
          <Reveal>
            <span className="eyebrow text-clay">
              <span className="h-px w-8 bg-clay" />
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

      {/* Her story — personality first */}
      <section
        id="story"
        aria-label={about.eyebrow}
        className="container-editorial grid items-start gap-10 py-24 md:grid-cols-[1.1fr_1fr] md:gap-20 md:py-32"
      >
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
          <Picture
            slug="editorial-garden"
            alt={content.name}
            className="h-full w-full"
            loading="eager"
            fetchPriority="high"
          />
        </Reveal>
        <div className="flex flex-col gap-6 md:pt-4">
          <Reveal>
            <span className="eyebrow text-clay">
              <span className="h-px w-8 bg-clay" />
              {about.eyebrow}
            </span>
            <h2 className="mt-6 display-md text-ink">{about.title}</h2>
            <span className="rule-red mt-6 block" />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">{about.lead}</p>
          </Reveal>
          {about.paragraphs.map((para, i) => (
            <Reveal key={i} delay={0.08 + i * 0.04}>
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Keyword marquee */}
      <section className="border-y border-ink/10 bg-paper-deep py-6">
        <Marquee
          items={about.marquee}
          className="font-display text-2xl italic text-ink/70 md:text-4xl"
        />
      </section>

      {/* What she believes — values + quotes */}
      <section aria-label={about.valuesTitle} className="container-editorial py-24 md:py-32">
        <Reveal>
          <span className="eyebrow text-clay">
            <span className="h-px w-8 bg-clay" />
            {home.quotesEyebrow}
          </span>
          <h2 className="mt-6 display-md max-w-2xl text-ink">{about.valuesTitle}</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 md:grid-cols-2">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08} className="bg-paper">
              <div className="flex h-full flex-col gap-4 p-8 md:p-10">
                <span className="font-display text-sm italic text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="text-base leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quotes */}
        <div className="mt-4 grid gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 md:grid-cols-3">
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

      {/* Selected work teaser */}
      <section aria-label={home.workEyebrow} className="container-editorial py-12 md:py-24">
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
                  alt={content.portfolio.alt[item.slug] ?? content.name}
                  className="block h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journal teaser */}
      <section aria-label={home.journalEyebrow} className="container-editorial py-12 md:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow={home.journalEyebrow}
            title={home.journalTitle}
            intro={home.journalIntro}
          />
          <Reveal>
            <Link to={localePath("/journal")} className="btn-island shrink-0">
              {home.valueButton}
              <span className="btn-island-icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
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

      {/* Representation */}
      <section aria-label={home.repEyebrow} className="container-editorial py-12 md:py-24">
        <SectionHeading index="03" eyebrow={home.repEyebrow} title={home.repTitle} className="mb-12" />
        <AgencyStrip />
        {/* Casting & bookings → ask the agency (replaces the model-card stats) */}
        <Reveal className="mt-4 flex flex-col items-start justify-between gap-5 rounded-squircle border border-ink/10 bg-paper-deep p-8 sm:flex-row sm:items-center md:p-10">
          <div className="flex max-w-xl flex-col gap-2">
            <span className="eyebrow text-clay">{about.detailsTitle}</span>
            <p className="text-base leading-relaxed text-ink-soft">{about.detailsIntro}</p>
          </div>
          <a href={agencyLink} target="_blank" rel="noreferrer" className="btn-island shrink-0">
            {about.detailsButton}
            <span className="btn-island-icon">
              <ArrowIcon />
            </span>
          </a>
        </Reveal>
      </section>

      {/* Contact */}
      <section
        id="contact"
        tabIndex={-1}
        aria-label={contact.eyebrow}
        className="container-editorial scroll-mt-28 py-24 md:py-32"
      >
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          intro={contact.intro}
          className="mb-12"
        />
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
              <Picture slug="portrait-car" alt={content.name} className="h-full w-full" />
            </Reveal>

            <Reveal
              delay={0.05}
              className="flex flex-col gap-5 rounded-squircle border border-ink/10 bg-cream p-8"
            >
              <span className="eyebrow text-clay">{contact.directLabel}</span>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl italic text-ink transition-colors hover:text-clay"
              >
                {instagramHandle}
              </a>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-ink-soft transition-colors hover:text-clay"
                >
                  {email}
                </a>
              )}

              <div className="mt-2 h-px w-full bg-ink/10" />
              <span className="eyebrow text-clay">{contact.agenciesLabel}</span>
              <ul className="flex flex-col gap-2">
                {representation.agencies.map((a) => (
                  <li key={a.name} className="text-sm text-ink-soft">
                    <span className="text-ink">{a.name}</span> — {a.location}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
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
