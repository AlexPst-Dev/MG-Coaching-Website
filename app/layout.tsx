import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "./components/JsonLd";
import Navbar from "./components/Navbar";
import ScrollBlob from "./components/ScrollBlob";
import {
  COACH_NAME,
  DEFAULT_PAGE_TITLE,
  KEYWORDS,
  OG_IMAGE_ALT,
  OPEN_GRAPH_SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  TITLE_TEMPLATE,
} from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_PAGE_TITLE,
    template: TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: COACH_NAME }],
  creator: COACH_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: OPEN_GRAPH_SITE_NAME,
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased flex flex-col gap-16 relative overflow-x-hidden`}
      >
        <JsonLd />
        <ScrollBlob />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
