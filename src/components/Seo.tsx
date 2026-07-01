import { Helmet } from "react-helmet-async";
import { useContent } from "../i18n/useContent";
import { LOCALES, LOCALE_NAMES, DEFAULT_LOCALE } from "../i18n/locales";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Per-locale SEO: localized title/description, <html lang>, og:locale and
 * hreflang alternates pointing at the same page in every language.
 */
export default function Seo({ title, description, image }: SeoProps) {
  const { locale, content, localeHref } = useContent();

  const fullTitle = title ? `${title} — ${content.name}` : content.seo.default.title;
  const desc = description ?? content.seo.default.description;
  const img = image ?? content.seo.image;

  const ogLocale = { pl: "pl_PL", en: "en_GB", es: "es_ES" }[locale];

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={localeHref(l)} title={LOCALE_NAMES[l]} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localeHref(DEFAULT_LOCALE)} />
    </Helmet>
  );
}
