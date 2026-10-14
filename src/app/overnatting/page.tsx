import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead, wrap } from "@/components/site/Bits";
import LodgingCard from "@/components/site/LodgingCard";
import PlatformRow from "@/components/site/PlatformRow";
import { lodging, overnattingPage } from "@/lib/content";

export const metadata: Metadata = {
  title: overnattingPage.metaTitle,
  description: overnattingPage.metaDescription,
  alternates: { canonical: "/overnatting" },
};

export default function OvernattingPage() {
  return (
    <>
      <PageHero {...overnattingPage.hero} priority />

      <section className="py-2 md:py-3">
        <dl className={`${wrap} grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4`}>
          {overnattingPage.numbers.map((item) => (
            <div key={item.label} className="rounded-3xl bg-tint-sage px-6 py-7">
              <dt className="font-serif text-3xl font-light text-primary md:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section>
        <SectionHead {...overnattingPage.places} />
      </Section>

      {lodging.map((place, index) => (
        <Section key={place.slug} tone={index % 2 === 0 ? "sage" : "muted"}>
          <LodgingCard place={place} />
        </Section>
      ))}

      <Section tone="muted">
        <SectionHead {...overnattingPage.platforms} />
        <div className="mt-10">
          <PlatformRow />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {overnattingPage.highlights.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl font-light text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand {...overnattingPage.cta} />
    </>
  );
}
