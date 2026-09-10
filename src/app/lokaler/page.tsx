import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/Bits";
import VenueRow from "@/components/site/VenueRow";
import PriceTable from "@/components/site/PriceTable";
import { venues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lokaler til leie på Myraunet Gård",
  description:
    "Gildesalen er 180 kvm og tar ca. 120 gjester. Grisehuset er 80 kvm og tar ca. 35. Stabburet brukes til lunsj om sommeren. Selskapslokaler på Frosta i Trøndelag.",
  alternates: { canonical: "/lokaler" },
};

export default function LokalerPage() {
  return (
    <>
      <PageHero
        eyebrow="Lokaler"
        title="Tre bygninger, tre måter å samle folk på"
        lead="Alle lokalene ligger på samme tun. Gildesalen og Grisehuset kan leies samlet når selskapet trenger to rom."
        image="/lovable-uploads/d4692008-4440-4ffe-95df-334b4f30558e.png"
        alt="Gildesalen pyntet til selskap med langbord og hvite stoltrekk"
      />

      <Section>
        <div className="space-y-20 md:space-y-28">
          {venues.map((venue, index) => (
            <VenueRow key={venue.slug} venue={venue} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Priser"
            title="Hva leien koster"
            lead="Alle priser er inkl. mva. Leietaker rydder lokalet klart til rengjøring."
          />
          <PriceTable />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
