import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site, venues } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const heroImage = "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Myraunet Gård - Selskapslokaler på Frosta i Trøndelag",
    template: "%s | Myraunet Gård",
  },
  description:
    "Leie av selskapslokaler på gård i Trøndelag. Gildesalen tar ca. 120 gjester, Grisehuset ca. 35. Bryllup, konfirmasjon, julebord, kurs og konferanse på Frosta.",
  keywords: [
    "selskapslokaler Frosta",
    "selskapslokaler Trøndelag",
    "bryllup Trøndelag",
    "julebord Trøndelag",
    "konfirmasjon Frosta",
    "kurs og konferanse gård",
    "Myraunet Gård",
    "Olavsrosa",
  ],
  authors: [{ name: site.drivers }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "/",
    siteName: site.name,
    title: "Myraunet Gård - Selskapslokaler på Frosta i Trøndelag",
    description:
      "Leie av selskapslokaler på gård i Trøndelag. Gildesalen tar ca. 120 gjester, Grisehuset ca. 35. Bryllup, konfirmasjon, julebord, kurs og konferanse på Frosta.",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 1067,
        alt: "Myraunet Gård selskapslokaler på Frosta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myraunet Gård - Selskapslokaler på Frosta i Trøndelag",
    description:
      "Leie av selskapslokaler på gård i Trøndelag. Gildesalen tar ca. 120 gjester, Grisehuset ca. 35.",
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: site.name,
  description:
    "Opplevelsesgård på Frosta i Trøndelag med selskapslokaler for bryllup, konfirmasjon, julebord, kurs og konferanser. Registrert i Norsk Kulturarv med Olavsrosa.",
  url: site.url,
  telephone: "+4795284333",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postal,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  hasMap: site.mapLink,
  image: [`${site.url}${heroImage}`],
  sameAs: [site.facebook, site.olavsrosa],
  priceRange: "kr 2500-6000",
  maximumAttendeeCapacity: 120,
  areaServed: { "@type": "Place", name: "Trøndelag" },
  award: "Olavsrosa, Norsk Kulturarv",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      description: "Besøk etter avtale. Ring for visning.",
    },
  ],
  containsPlace: venues.map((venue) => ({
    "@type": "EventVenue",
    name: venue.name,
    description: venue.lead,
    url: `${site.url}/lokaler/${venue.slug}`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Hopp til innhold
        </a>
        <Header overHero />
        <main id="innhold">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
