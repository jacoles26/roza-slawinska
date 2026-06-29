import type { Locale } from "../../i18n/locales";
import type { SiteContent } from "./types";
import { pl } from "./pl";
import { en } from "./en";
import { es } from "./es";

/** Active content keyed by locale. */
export const content: Record<Locale, SiteContent> = { pl, en, es };

export type { SiteContent } from "./types";
