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
  title: "Myraunet Gård - Selskapslokaler i Frosta, Nord-Trøndelag",
  description:
    "Opplevelsesgård på Frosta. Gildesalen (180 kvm / ca. 120 personer), Grisehuset (80 kvm / ca. 35 personer) og Stabburet for bryllup, konfirmasjon, julebord, kurs og konferanser. Registrert i Norsk Kulturarv (Olavsrosa).",
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
      </body>
    </html>
  );
}
