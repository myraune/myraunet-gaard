import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galleri fra Myraunet Gård",
  description:
    "Bilder fra Gildesalen, Grisehuset og Stabburet, og fra gårdstunet på Frosta sommer som vinter.",
  alternates: { canonical: "/galleri" },
};

export default function GalleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Galleri"
        title="Lokalene og landskapet"
        lead="Klikk på et bilde for å se det stort. Bruk piltastene for å bla."
        image="/myraunet-gallery/vinter/3.jpg"
        alt="Opplyste trær på tunet en vinterkveld"
      />

      <Section>
        <GalleryClient />
      </Section>

      <CtaBand />
    </>
  );
}
