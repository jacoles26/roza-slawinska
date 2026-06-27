/**
 * Single source of truth for Rosie's public-facing content.
 * Edit values here — nothing in the components is hard-coded.
 */

export const site = {
  name: "Rosie Sławińska",
  fullName: "Rosie Alicja Sławińska",
  firstName: "Rosie",
  // Used as the giant split display name in the hero
  nameLines: ["Rosie", "Sławińska"],
  location: "Warsaw, Poland",
  roles: ["Model", "Runner", "Traveller", "Aesthete"],
  tagline: "A life built around constant improvement.",
  intro:
    "Warsaw-born model and recent graduate, moving between editorial sets, " +
    "morning runs and the next city on the map. I care about craft, movement, " +
    "and the small disciplines that compound into a beautiful life.",

  // Primary contact channels
  instagram: "https://www.instagram.com/r.slawinskaa",
  instagramHandle: "@r.slawinskaa",
  // TODO: set Rosie's public booking email here, or leave empty to hide it.
  email: "",

  // SEO
  seo: {
    title: "Rosie Sławińska — Model · Runner · Traveller",
    description:
      "The personal portfolio of Rosie Sławińska — Warsaw-based model represented " +
      "by Model Plus Warsaw and Trend Models Management. Modeling, travel, running, " +
      "culture and a life built around constant improvement.",
    image: "/images/portrait-overlook.jpg",
  },
} as const;

export interface Agency {
  name: string;
  role: string;
  location: string;
  url?: string;
}

export const agencies: Agency[] = [
  {
    name: "Model Plus",
    role: "Mother Agency",
    location: "Warsaw",
    url: "https://www.instagram.com/modelpluswarsaw/",
  },
  {
    name: "Trend Models Management",
    role: "Representation",
    location: "Barcelona · Madrid",
    url: "https://models.com/agency/Trend-Model-Managment",
  },
  {
    name: "Goska Management",
    role: "Representation",
    location: "International",
  },
];

export const partnerships = [
  { name: "PwC Polska", role: "Brand Ambassador" },
];

/**
 * Vital statistics. Values left as "—" are placeholders for Rosie to fill in.
 * (Standard model-card fields; remove any line that shouldn't be public.)
 */
export const stats: { label: string; value: string }[] = [
  { label: "Based in", value: "Warsaw, PL" },
  { label: "Height", value: "—" },
  { label: "Bust", value: "—" },
  { label: "Waist", value: "—" },
  { label: "Hips", value: "—" },
  { label: "Shoes", value: "—" },
  { label: "Hair", value: "Blonde" },
  { label: "Eyes", value: "—" },
  { label: "Languages", value: "Polish · English" },
];

export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Journal", to: "/journal" },
  { label: "Representation", to: "/representation" },
  { label: "Contact", to: "/contact" },
];
