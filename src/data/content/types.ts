/**
 * The full shape of every piece of user-facing copy on the site.
 *
 * There is ONE shape (`SiteContent`) and three implementations — `pl.ts`,
 * `en.ts`, `es.ts`. Because all three are typed against this interface, the
 * compiler guarantees no string is missing in any language. To add or change
 * copy, edit this interface and then all three locale files.
 *
 * Purely structural data (image slugs, gallery categories, journal media) lives
 * in `src/data/shared.ts` — only the words live here.
 */

export interface NavItem {
  label: string;
  /** Base path WITHOUT locale prefix, e.g. "/about". Prefixed at render via localePath(). */
  to: string;
}

export interface Agency {
  name: string;
  role: string;
  location: string;
  url?: string;
}

export interface Partnership {
  name: string;
  role: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface JournalEntry {
  /** Must match an id in shared.ts `journalMedia` to resolve the image/video. */
  id: string;
  kicker: string;
  title: string;
  blurb: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface SiteContent {
  // ── Identity ────────────────────────────────────────────────
  name: string;
  fullName: string;
  firstName: string;
  /** The giant split display name in the hero. */
  nameLines: [string, string];
  location: string;
  /** Brand keywords — Independent · Disciplined · Energetic. */
  keywords: string[];
  /** Roles for the hero / marquees — Model · Economist · Athlete. */
  roles: string[];
  /** The value-prop line (the heart of the brand). */
  tagline: string;
  /** Short bio. */
  intro: string;

  // ── Contact channels (shared, not really translated) ────────
  instagram: string;
  instagramHandle: string;
  email: string;

  // ── Navigation ──────────────────────────────────────────────
  nav: NavItem[];

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    portfolioLabel: string; // e.g. "Portfolio"
    viewPortfolio: string;
    theStory: string;
  };

  // ── Home page ───────────────────────────────────────────────
  home: {
    valueEyebrow: string;
    valueTitle: string;
    valueBody: string;
    valueQuote: string;
    valueButton: string;

    shortEyebrow: string;
    shortTitle: string;
    shortButton: string;

    marquee: string[];

    workEyebrow: string;
    workTitle: string;
    workIntro: string;
    workButton: string;

    whoEyebrow: string;
    whoTitle: string;
    whoBody: string;
    whoButton: string;

    journalEyebrow: string;
    journalTitle: string;
    journalIntro: string;

    quotesEyebrow: string;
    quotesTitle: string;

    repEyebrow: string;
    repTitle: string;

    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };

  // ── About page ──────────────────────────────────────────────
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    lead: string;
    paragraphs: string[];
    marquee: string[];
    valuesTitle: string;
    values: ValueItem[];
    detailsTitle: string;
    detailsIntro: string;
    detailsButton: string;
  };

  // ── Portfolio page ──────────────────────────────────────────
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: {
      all: string;
      editorial: string;
      travel: string;
      movement: string;
      lifestyle: string;
    };
    /** Localized alt text keyed by image slug (see shared.ts galleryItems). */
    alt: Record<string, string>;
  };

  // ── Journal page ────────────────────────────────────────────
  journal: {
    eyebrow: string;
    title: string;
    intro: string;
    entries: JournalEntry[];
    followEyebrow: string;
    followTitle: string;
    workWithMe: string;
  };

  // ── Representation page ─────────────────────────────────────
  representation: {
    eyebrow: string;
    title: string;
    intro: string;
    agencies: Agency[];
    partnerships: Partnership[];
    visit: string;
    directEnquiries: string;
    selectedPartnership: string;
    bandTitle: string;
    bandBody: string;
    bandButton: string;
  };

  // ── Contact page ────────────────────────────────────────────
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      name: string;
      email: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      error: string;
      successTitle: string;
      successBody: string;
    };
    directLabel: string;
    agenciesLabel: string;
  };

  // ── Footer ──────────────────────────────────────────────────
  footer: {
    exploreLabel: string;
    representationLabel: string;
    rights: string;
    locationTag: string;
  };

  // ── 404 ─────────────────────────────────────────────────────
  notFound: {
    title: string;
    body: string;
    button: string;
  };

  // ── Quotes (Róża's words) ───────────────────────────────────
  quotes: string[];

  // ── Stats / model card ──────────────────────────────────────
  stats: Stat[];

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    default: SeoMeta;
    home: SeoMeta;
    about: SeoMeta;
    portfolio: SeoMeta;
    journal: SeoMeta;
    representation: SeoMeta;
    contact: SeoMeta;
    notFound: { title: string };
    image: string;
  };
}
