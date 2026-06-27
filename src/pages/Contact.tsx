import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Picture from "../components/Picture";
import { site, agencies } from "../data/site";

export default function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Get in touch with Rosie Sławińska for modeling bookings, brand collaborations and press."
      />
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic">talk</span></>}
        intro="Bookings, collaborations, press or a simple hello — fill in the form and I'll get back to you. For anything urgent, a DM on Instagram is fastest."
      />

      <section className="container-editorial grid gap-12 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
            <Picture slug="portrait-car" alt="Portrait of Rosie" className="h-full w-full" />
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-5 rounded-squircle border border-ink/10 bg-cream p-8">
            <span className="eyebrow">Direct</span>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl italic text-ink transition-colors hover:text-clay"
            >
              {site.instagramHandle}
            </a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="text-ink-soft transition-colors hover:text-clay">
                {site.email}
              </a>
            )}

            <div className="mt-2 h-px w-full bg-ink/10" />
            <span className="eyebrow">Agencies</span>
            <ul className="flex flex-col gap-2">
              {agencies.map((a) => (
                <li key={a.name} className="text-sm text-ink-soft">
                  <span className="text-ink">{a.name}</span> — {a.location}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
