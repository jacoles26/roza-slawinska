import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import AgencyStrip from "../components/AgencyStrip";
import Reveal from "../components/Reveal";
import Picture from "../components/Picture";

export default function Representation() {
  return (
    <PageTransition>
      <Seo
        title="Representation"
        description="Rosie Sławińska is represented by Model Plus Warsaw and Trend Models Management, and is a brand ambassador for PwC Polska."
      />
      <PageHeader
        eyebrow="Representation"
        title={<>Represented <span className="italic">worldwide</span></>}
        intro="For bookings, please reach out through any of my agencies — or send a note directly via the contact page."
      />

      <section className="container-editorial pb-16">
        <AgencyStrip />
      </section>

      {/* Editorial image band */}
      <section className="container-editorial grid items-center gap-10 py-16 md:grid-cols-2 md:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
          <Picture slug="street-style" alt="Rosie street style" className="h-full w-full" />
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal>
            <h2 className="display-md text-ink">Let's create something worth remembering</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              Editorial, campaign, runway or commercial — I bring preparation, range and an
              easy energy on set. Whether through an agency or directly, I'd love to hear what
              you're building.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn-island">
              Start a conversation
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
