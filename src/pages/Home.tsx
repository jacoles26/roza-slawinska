import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Picture from "../components/Picture";
import AgencyStrip from "../components/AgencyStrip";
import { site } from "../data/site";
import { gallery } from "../data/gallery";
import { journal } from "../data/journal";

export default function Home() {
  const featured = gallery.filter((g) => g.feature).slice(0, 4);

  return (
    <PageTransition>
      <Seo />
      <Hero />

      {/* Manifesto */}
      <section className="container-editorial py-24 md:py-36">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-taupe-light" />
            The short version
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-5xl font-display text-3xl leading-[1.15] text-ink md:text-5xl md:leading-[1.1]">
            From <span className="italic text-clay">Warsaw</span> to wherever the work takes me —
            a model and recent graduate building a life around movement, craft, and the small
            disciplines that <span className="italic">compound</span>.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">{site.intro}</p>
            <Link to="/about" className="mt-8 btn-ghost">
              Read the full story
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
          items={[...site.roles, "Optimising the everyday", "Warsaw"]}
          className="font-display text-2xl italic text-ink/70 md:text-4xl"
        />
      </section>

      {/* Selected work teaser */}
      <section className="container-editorial py-24 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title={<>A portfolio in <span className="italic">motion</span></>}
            intro="Editorial, travel and movement — a living gallery that grows with every shoot."
          />
          <Reveal>
            <Link to="/portfolio" className="btn-island shrink-0">
              View all
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
                to="/portfolio"
                className="group block aspect-[3/4] overflow-hidden rounded-lg bg-paper-deep"
              >
                <Picture
                  slug={item.slug}
                  alt={item.alt}
                  className="block h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About split */}
      <section className="container-editorial py-12 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
            <Picture slug="portrait-overlook" alt="Portrait of Róża" className="h-full w-full" />
          </Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading
              index="02"
              eyebrow="Who I am"
              title={<>Curious, disciplined, <span className="italic">always moving</span></>}
            />
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              I split my time between sets, the road, and the next departure gate. Running in the
              morning, learning something new by the afternoon, dressing for the life I'm building.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-island">
                More about me
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
          eyebrow="The journal"
          title={<>The life behind the <span className="italic">lens</span></>}
          intro="Movement, travel, culture, style — the world that feeds the work."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journal.slice(0, 6).map((entry, i) => (
            <Reveal key={entry.id} delay={(i % 3) * 0.08}>
              <Link
                to="/journal"
                className="group relative block aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep"
              >
                <Picture
                  slug={entry.image}
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
      <section className="container-editorial py-12 md:py-24">
        <SectionHeading
          index="04"
          eyebrow="Representation"
          title={<>Represented <span className="italic">worldwide</span></>}
          className="mb-12"
        />
        <AgencyStrip />
      </section>

      {/* Contact CTA */}
      <section className="container-editorial py-24 md:py-36">
        <Reveal className="relative overflow-hidden rounded-squircle bg-ink px-8 py-20 text-center text-cream md:px-16 md:py-28">
          <span className="eyebrow text-cream/50">Let's work together</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Bookings, collaborations & <span className="italic">good ideas</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-cream/70">
            For modeling enquiries, brand partnerships or press — I'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-island bg-cream text-ink">
              Get in touch
              <span className="btn-island-icon bg-ink/10">
                <ArrowIcon />
              </span>
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost border-cream/30 text-cream hover:border-cream/70"
            >
              {site.instagramHandle}
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
