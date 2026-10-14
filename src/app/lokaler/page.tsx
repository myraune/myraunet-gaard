import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/Bits";
import VenueRow from "@/components/site/VenueRow";
import PriceTable from "@/components/site/PriceTable";
import { lokalerPage, venues } from "@/lib/content";

export const metadata: Metadata = {
  title: lokalerPage.metaTitle,
  description: lokalerPage.metaDescription,
  alternates: { canonical: "/lokaler" },
};

export default function LokalerPage() {
  return (
    <>
      <PageHero {...lokalerPage.hero} priority />

      {venues.map((venue, index) => (
        <Section key={venue.slug} tone={index % 2 === 0 ? "sage" : "muted"}>
          <VenueRow venue={venue} index={index} />
        </Section>
      ))}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead {...lokalerPage.prices} />
          <PriceTable />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
