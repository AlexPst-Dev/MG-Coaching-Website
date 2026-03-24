/**
 * Constantes du site (SEO, coach, activités, réseaux sociaux).
 * Source unique pour métadonnées Next.js, JSON-LD, sitemap et composants.
 */

export const SITE_URL = "https://www.mg-coaching.alx-pst.tech" as const;

export const COACH_NAME = "Mael GAUDRON";
export const COACH_TITLE = "Coach en activité sportive adaptée";
export const COACH_CITY = "Rennes, France";
export const COACH_DESCRIPTION =
  "Coach sportif en activité adaptée pour senior et nouveau retraité";

/** Aligné sur les cartes « mes offres » (tarif affiché par plan). */
export const PRICING_PRICE_RANGE = "29 €/mois";

export const INSTAGRAM_URL =
  "https://instagram.com/mael_sportsante" as const;
export const TIKTOK_URL = "https://tiktok.com/@mael_sportsante" as const;

export const ACTIVITIES_LIST = [
  "Séances à domicile",
  "Sport adapté",
  "Marche",
] as const;

export const SITE_DESCRIPTION = `${COACH_DESCRIPTION} Propositions : ${ACTIVITIES_LIST.join(", ")}. Accompagnement et coaching personnel à ${COACH_CITY}.`;

export const KEYWORDS: string[] = [
  ...ACTIVITIES_LIST,
  "coach sportif",
  COACH_CITY,
  "coaching personnel",
  "sport",
];

export const DEFAULT_PAGE_TITLE = `${COACH_NAME} — ${COACH_TITLE}`;
export const TITLE_TEMPLATE = `%s | ${COACH_NAME}`;
export const OPEN_GRAPH_SITE_NAME = `${COACH_NAME} — Coach Sportif`;
export const OG_IMAGE_ALT = `${COACH_NAME}, ${COACH_TITLE} à ${COACH_CITY}`;
