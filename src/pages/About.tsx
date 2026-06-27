import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Picture from "../components/Picture";
import Marquee from "../components/Marquee";
import { site, stats } from "../data/site";

const values = [
  {
    title: "Discipline over motivation",
    body: "Motivation is weather; discipline is climate. The morning run happens whether or not I feel like it — and everything good follows from it.",
  },
  {
    title: "Aesthetics as a practice",
    body: "How I dress, shoot, move and keep my space — beauty isn't decoration, it's a daily standard I hold myself to.",
  },
  {
    title: "Curiosity as fuel",
    body: "New cities, new languages, new ideas. I'd rather be a beginner often than an expert who stopped growing.",
  },
  {
    title: "Compounding small wins",
    body: "One percent better, repeated. The life I want isn't built in a leap — it's assembled from thousands of small, deliberate choices.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Rosie Sławińska — Warsaw-born model and recent graduate building a life around movement, craft and constant improvement."
      />
      <PageHeader
        eyebrow="About"
        title={<>The person behind <span className="italic">the portfolio</span></>}
        intro={site.intro}
      />

      {/* Portrait + opening narrative */}
      <section className="container-editorial grid items-start gap-10 pb-24 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
          <Picture slug="editorial-garden" alt="Rosie in white tailoring" className="h-full w-full" loading="eager" />
        </Reveal>
        <div className="flex flex-col gap-6 md:pt-8">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              I'm Rosie — born and raised in Warsaw, recently graduated, and happiest somewhere
              between a set, a start line, and a departures board.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Modeling taught me how to show up — prepared, present, and able to bring an idea to
              life in front of a lens. Running and training taught me consistency. Travel taught me
              to stay curious. Together they've become the way I move through the world: with
              intention, an eye for the beautiful, and a quiet obsession with getting a little better
              every day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              This site is where it all lives — the work, the places, and the philosophy that ties
              them together. I'm just getting started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-y border-ink/10 bg-paper-deep py-6">
        <Marquee
          items={["Curiosity", "Discipline", "Movement", "Beauty", "Momentum"]}
          className="font-display text-2xl italic text-ink/60 md:text-4xl"
        />
      </section>

      {/* Values */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <h2 className="display-md max-w-2xl text-ink">What I build the days around</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 md:grid-cols-2">
          {values.map((v, i) => (
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
      </section>

      {/* Details / stats */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <Reveal>
            <h2 className="display-md text-ink">The details</h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              The essentials for casting and bookings. For a full set card or digitals, get in touch
              through my agency or the contact page.
            </p>
            <Link to="/contact" className="mt-8 btn-island">
              Request digitals
              <span className="btn-island-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
                  <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-squircle border border-ink/10 bg-ink/10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 bg-paper p-6">
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="font-display text-2xl text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
