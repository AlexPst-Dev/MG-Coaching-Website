/**
 * Données structurées JSON-LD (schema.org) : Person + SportsActivityLocation.
 * Améliore la compréhension du site par les moteurs et la recherche locale.
 */

import {
  ACTIVITIES_LIST,
  COACH_CITY,
  COACH_DESCRIPTION,
  COACH_NAME,
  COACH_TITLE,
  INSTAGRAM_URL,
  PRICING_PRICE_RANGE,
  SITE_DESCRIPTION,
  SITE_URL,
  TIKTOK_URL,
} from "@/lib/site-config";

type PostalAddressLd = {
  "@type": "PostalAddress";
  addressLocality: string;
  addressCountry: string;
};

const address: PostalAddressLd = {
  "@type": "PostalAddress",
  addressLocality: COACH_CITY,
  addressCountry: "FR",
};

/** Graphe JSON-LD schema.org/Person (coach). */
export function PersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: COACH_NAME,
    url: SITE_URL,
    jobTitle: COACH_TITLE,
    description: COACH_DESCRIPTION,
    address,
    sameAs: [INSTAGRAM_URL, TIKTOK_URL],
  };
}

/** Graphe JSON-LD lieu d’activité sportive (visibilité locale). */
export function LocalBusinessJsonLd(): Record<string, unknown> {
  const itemListElement = ACTIVITIES_LIST.map((name, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: COACH_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    address,
    priceRange: PRICING_PRICE_RANGE,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Activités proposées",
      itemListElement,
    },
  };
}

/** Injecte Person + LocalBusiness dans un seul script (tableau JSON-LD). */
export default function JsonLd() {
  const graph = [PersonJsonLd(), LocalBusinessJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
