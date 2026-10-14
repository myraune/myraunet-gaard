import type { Metadata } from "next";
import { PageHero, Section, SectionHead } from "@/components/site/Bits";
import LodgingList from "@/components/site/LodgingList";
import MapBlock from "@/components/site/MapBlock";
import { eventBySlug, forGjesterPage } from "@/lib/content";

const event = eventBySlug("bryllup")!;

export const metadata: Metadata = {
  title: forGjesterPage.metaTitle,
  description: forGjesterPage.metaDescription,
  alternates: { canonical: "/for-gjester" },
};

export default function ForGjesterPage() {
  return (
    <>
      <PageHero
        {...forGjesterPage.hero}
        image={event.image.src}
        alt={event.image.alt}
        priority
      />

      <Section>
        <MapBlock />
      </Section>

      <Section tone="sage">
        <SectionHead {...forGjesterPage.parking} />
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead {...forGjesterPage.lodging} />
          <LodgingList />
        </div>
      </Section>

      <Section>
        <SectionHead {...forGjesterPage.questions} />
      </Section>
    </>
  );
}
