import Link from "next/link";
import type { Metadata } from "next";
import {
  ButtonLink,
  CtaBand,
  Eyebrow,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import VenueRow from "@/components/site/VenueRow";
import EventGrid from "@/components/site/EventGrid";
import PriceTable from "@/components/site/PriceTable";
import FaqList from "@/components/site/FaqList";
import MapBlock from "@/components/site/MapBlock";
import { faqs, galleryImages, otherOccasions, site, venues } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const heroImage = "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png";

const keyNumbers = [
  { value: "1557", label: "Første gang gården er nevnt" },
  { value: "180 kvm", label: "Gildesalen, gårdens gamle fjøs" },
  { value: "120", label: "Gjester i det største lokalet" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="Myraunet Gård med gårdstunet på Frosta"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.78)_24%,rgba(0,0,0,0.40)_50%,rgba(0,0,0,0.30)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_45%,transparent_70%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <Eyebrow tone="light">Frosta i Trøndelag</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.6rem] font-light leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Selskapslokaler i et gårdstun som har stått siden 1557
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            Bryllup i det gamle fjøset, konfirmasjon i Grisehuset, julebord og
            konferanser i tømmer og mur. Dere leier lokalet og bestemmer resten
            selv.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/kontakt" variant="light">
              Send forespørsel
            </ButtonLink>
            <Link
              href="/lokaler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/40 px-7 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
            >
              Se lokalene
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Opplevelsesgård siden 2013</Eyebrow>
            <p className="mt-6 font-serif text-2xl font-light leading-[1.45] text-foreground md:text-[1.85rem]">
              Myraunet Gård er en familiebedrift på Frosta. Vi leier ut lokaler
              til selskap, kurs og konferanser, driver tradisjonelt jordbruk, og
              pakker sesongens grønnsaker i det som en gang var kufjøset.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {site.drivers} har drevet gården siden {site.driversSince}. Bygningene
              er de samme som før, med historiske gjenstander på veggene og
              jordbrukslandskapet rett utenfor. Gården er registrert i Norsk
              Kulturarv med Olavsrosa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/historie" variant="outline">
                Gårdens historie
              </ButtonLink>
              <ButtonLink href="/familiebedriften" variant="outline">
                Familiebedriften
              </ButtonLink>
            </div>
          </div>

          <dl className="grid content-start gap-px border-t border-border">
            {keyNumbers.map((item) => (
              <div key={item.label} className="border-b border-border py-7">
                <dt className="font-serif text-4xl font-light text-primary md:text-5xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="lokaler" tone="muted">
        <SectionHead
          eyebrow="Tre lokaler"
          title="Fra 35 gjester i Grisehuset til 120 i Gildesalen"
          lead="Lokalene kan leies hver for seg eller samlet. Kjøkkenet står til leietakers disposisjon, og dere ordner mat og drikke selv."
        />
        <div className="mt-16 space-y-20 md:space-y-24">
          {venues.map((venue, index) => (
            <VenueRow key={venue.slug} venue={venue} index={index} />
          ))}
        </div>
        <div className="mt-16">
          <ButtonLink href="/lokaler">Se alle lokaler</ButtonLink>
        </div>
      </Section>

      <Section id="arrangement">
        <SectionHead
          eyebrow="Anledninger"
          title="Det som feires her"
          lead="Vi har erfaring med de store dagene og de faglige helgene. Lokalene har også vært brukt til konsert og moteshow."
        />
        <div className="mt-14">
          <EventGrid />
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Også holdt her: {otherOccasions.join(", ").toLowerCase()}.
        </p>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Priser"
              title="Åpne priser, ingen pakkepris"
              lead="Dere betaler for lokalet. Rengjøring og kjøkkenhjelp kommer i tillegg om dere ønsker det."
            />
            <div className="mt-8">
              <ButtonLink href="/priser" variant="outline">
                Hele prislisten
              </ButtonLink>
            </div>
          </div>
          <PriceTable withNotes={false} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Galleri"
            title="Gården gjennom året"
            lead="Sommer, vinter og lokalene innvendig."
          />
          <ButtonLink href="/galleri" variant="outline">
            Se hele galleriet
          </ButtonLink>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.slice(0, 8).map((image) => (
            <Link
              key={image.src}
              href="/galleri"
              className="group relative aspect-square overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow="Spørsmål" title="Det folk lurer på" />
          <div>
            <FaqList limit={5} />
            <div className="mt-10">
              <ButtonLink href="/priser" variant="outline">
                Priser og vilkår
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <MapBlock />
      </Section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
