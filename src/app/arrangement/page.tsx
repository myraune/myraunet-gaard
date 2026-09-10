import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/Bits";
import EventGrid from "@/components/site/EventGrid";
import FaqList from "@/components/site/FaqList";

export const metadata: Metadata = {
  title: "Arrangement på Myraunet Gård",
  description:
    "Bryllup, konfirmasjon, julebord, kurs og konferanse på gård i Trøndelag. Se hvilket lokale som passer anledningen, og hva leien koster.",
  alternates: { canonical: "/arrangement" },
};

export default function ArrangementPage() {
  return (
    <>
      <PageHero
        eyebrow="Arrangement"
        title="Anledningen bestemmer hvilket lokale dere trenger"
        lead="De fleste selskap havner i Gildesalen eller Grisehuset. Her er hva som passer til hva."
        image="/lovable-uploads/15847e16-8ae1-4f0d-9da0-94c9b5c3bb5f.png"
        alt="Langbord ute på gårdstunet en sommerdag"
      />

      <Section>
        <EventGrid />
        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Gården har også lagt hus til fødselsdager, jubileer, grillfester,
          minnesamvær, konsert og moteshow. Passer ikke anledningen inn i noen av
          kategoriene over, ta kontakt så finner vi ut av det.
        </p>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow="Spørsmål" title="Praktisk om leien" />
          <FaqList />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
