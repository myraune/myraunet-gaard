import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://myraunet.no"),
  title: {
    default: "Myraunet Gård - Selskapslokaler i Frosta, Trøndelag",
    template: "%s | Myraunet Gård",
  },
  description:
    "Opplevelsesgård på Frosta. Gildesalen (180 kvm, ca. 120 personer), Grisehuset og Stabburet for bryllup, konfirmasjon, julebord, kurs og konferanser. Olavsrosa.",
  keywords: [
    "selskapslokaler Frosta",
    "bryllup Trøndelag",
    "julebord Nord-Trøndelag",
    "konfirmasjon Frosta",
    "kurs konferanse gård",
    "Myraunet Gård",
    "Olavsrosa",
  ],
  authors: [{ name: "Hanne og Gustav Myraune" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "/",
    siteName: "Myraunet Gård",
    title: "Myraunet Gård - Selskapslokaler i Frosta, Trøndelag",
    description:
      "Opplevelsesgård på Frosta. Gildesalen (180 kvm, ca. 120 personer), Grisehuset og Stabburet for bryllup, konfirmasjon, julebord, kurs og konferanser. Olavsrosa.",
    images: [
      {
        url: "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png",
        width: 1600,
        height: 1067,
        alt: "Myraunet Gård selskapslokaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myraunet Gård - Selskapslokaler i Frosta, Trøndelag",
    description:
      "Opplevelsesgård på Frosta. Gildesalen (180 kvm, ca. 120 personer), Grisehuset og Stabburet for bryllup, konfirmasjon, julebord, kurs og konferanser. Olavsrosa.",
    images: ["/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: "Myraunet Gård",
  description:
    "Opplevelsesgård på Frosta i Trøndelag med selskapslokaler for bryllup, konfirmasjon, julebord, kurs og konferanser. Registrert i Norsk Kulturarv (Olavsrosa).",
  url: "https://myraunet.no",
  telephone: "+4795284333",
  email: "gustav@myraune.no",
  address: {
    "@type": "PostalAddress",
    postalCode: "7633",
    addressLocality: "Frosta",
    addressRegion: "Trøndelag",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 63.607981,
    longitude: 10.799314,
  },
  hasMap: "https://www.google.com/maps?q=63.607981,10.799314",
  image: ["https://myraunet.no/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png"],
  sameAs: [
    "https://www.facebook.com/121429851204034",
    "https://www.olavsrosa.no/objektinfo.aspx?id=3272851",
  ],
  priceRange: "kr 2500-6000",
  maximumAttendeeCapacity: 120,
  areaServed: {
    "@type": "Place",
    name: "Trøndelag",
  },
  award: "Olavsrosa, Norsk Kulturarv",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      description: "Besøk etter avtale. Ring for visning.",
    },
  ],
  containsPlace: [
    {
      "@type": "EventVenue",
      name: "Gildesalen",
      description:
        "Vår største sal, opprinnelig gårdens fjøs. Egnet for bryllup, jubileer, julebord, kurs og konferanser.",
      maximumAttendeeCapacity: 120,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 180,
        unitCode: "MTK",
      },
    },
    {
      "@type": "EventVenue",
      name: "Grisehuset",
      description:
        "Mindre sal med tømmervegger og mur. Mye brukt til konfirmasjoner og intime selskap.",
      maximumAttendeeCapacity: 35,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 80,
        unitCode: "MTK",
      },
    },
    {
      "@type": "EventVenue",
      name: "Stabburet",
      description: "Bygg med flere etasjer, best egnet under sommersesongen. Brukes som lunsjlokale eller til enkel overnatting.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
