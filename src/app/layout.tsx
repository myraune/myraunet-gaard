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
  title: "Myraunet Gård — Selskapslokaler i Frosta, Trøndelag",
  description:
    "Bryllup, konfirmasjon og selskap i historiske lokaler på Frosta. Gildesalen for opptil 120 gjester og det intime Grisehuset for opptil 40. Drevet av familien Myraune siden 2013.",
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
