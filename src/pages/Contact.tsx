import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Picture from "../components/Picture";
import { useContent } from "../i18n/useContent";

export default function Contact() {
  const { content } = useContent();
  const { contact, instagram, instagramHandle, email } = content;
  const agencies = content.representation.agencies;

  return (
    <PageTransition>
      <Seo title={content.seo.contact.title} description={content.seo.contact.description} />
      <PageHeader eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro} />

      <section className="container-editorial grid gap-12 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-squircle bg-paper-deep">
            <Picture slug="portrait-car" alt={content.name} className="h-full w-full" />
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-5 rounded-squircle border border-ink/10 bg-cream p-8">
            <span className="eyebrow">{contact.directLabel}</span>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl italic text-ink transition-colors hover:text-clay"
            >
              {instagramHandle}
            </a>
            {email && (
              <a href={`mailto:${email}`} className="text-ink-soft transition-colors hover:text-clay">
                {email}
              </a>
            )}

            <div className="mt-2 h-px w-full bg-ink/10" />
            <span className="eyebrow">{contact.agenciesLabel}</span>
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
