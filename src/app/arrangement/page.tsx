import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/Bits";
import EventGrid from "@/components/site/EventGrid";
import FaqList from "@/components/site/FaqList";
import { arrangementPage } from "@/lib/content";

export const metadata: Metadata = {
  title: arrangementPage.metaTitle,
  description: arrangementPage.metaDescription,
  alternates: { canonical: "/arrangement" },
};

export default function ArrangementPage() {
  return (
    <>
      <PageHero {...arrangementPage.hero} priority />

      <Section>
        <EventGrid />
        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {arrangementPage.other}
        </p>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead {...arrangementPage.faq} />
          <FaqList />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
