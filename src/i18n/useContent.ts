import { useLocation } from "react-router-dom";
import { content } from "../data/content";
import type { SiteContent } from "../data/content/types";
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "./locales";

/** Strip the leading locale segment from a pathname, e.g. "/en/about" → "/about". */
export function pathWithoutLocale(pathname: string): string {
  const stripped = pathname.replace(new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`), "");
  return stripped === "" ? "/" : stripped;
}

export interface UseContent {
  locale: Locale;
  content: SiteContent;
  /** Prefix an internal path with the active locale: "/about" → "/en/about". */
  localePath: (to: string) => string;
  /** Same path in another locale (for the language switcher). */
  localeHref: (target: Locale) => string;
}

/**
 * Resolves the active locale from the URL's first path segment and returns the
 * matching content plus link helpers. Works anywhere inside the Router — it does
 * not depend on being rendered inside a specific `:lang` route.
 */
export function useContent(): UseContent {
  const { pathname } = useLocation();
  const seg = pathname.split("/")[1];
  const locale: Locale = isLocale(seg) ? seg : DEFAULT_LOCALE;

  const localePath = (to: string) => {
    if (/^(https?:|mailto:|tel:|#)/.test(to)) return to;
    const clean = to === "/" ? "" : to.startsWith("/") ? to : `/${to}`;
    return `/${locale}${clean}`;
  };

  const rest = pathWithoutLocale(pathname);
  const localeHref = (target: Locale) => `/${target}${rest === "/" ? "" : rest}`;

  return { locale, content: content[locale], localePath, localeHref };
}
