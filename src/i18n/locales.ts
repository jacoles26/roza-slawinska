/**
 * Supported locales for the trilingual site.
 * Polish is the default (root) language; visitors can switch to English or Spanish.
 */
export const LOCALES = ["en", "pl", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Short labels for the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  es: "ES",
};

/** Full names (used for hreflang / accessibility). */
export const LOCALE_NAMES: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  es: "Español",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
