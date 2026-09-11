import type { Metadata } from "next";
import Link from "next/link";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import DateCheck from "@/components/site/DateCheck";
import FaqList from "@/components/site/FaqList";
import LodgingList from "@/components/site/LodgingList";
import {
  eventBySlug,
  practical,
  site,
  weddingDay,
  weddingFaqs,
  weddingIncluded,
  weddingPriceExample,
  weddingYouArrange,
} from "@/lib/content";

const event = eventBySlug("bryllup")!;

export const metadata: Metadata = {
  title: "Bryllup på gård i Trøndelag, kr 7 000 for hele helga",
  description:
    "Gildesalen på Myraunet Gård tar 120 gjester. Fredag til søndag koster kr 7 000 inkl. rengjøring. Egen mat og drikke, vielse på tunet, ingen sluttid. Frosta, en time fra Trondheim.",
  alternates: { canonical: "/arrangement/bryllup" },
  openGraph: {
    title: "Bryllup på gård i Trøndelag, kr 7 000 for hele helga",
    description:
      "Gildesalen tar 120 gjester. Egen mat og drikke, vielse på tunet, ingen sluttid. Frosta, en time fra Trondheim.",
    images: [{ url: event.image.src, alt: event.image.alt }],
  },
};

const numbers = [
  { value: "120", label: "gjester i Gildesalen" },
  { value: "kr 7 000", label: "for fredag til søndag, inkl. rengjøring" },
  { value: "Egen", label: "mat og drikke, ingen krav om leverandør" },
  { value: "1 time", label: "fra Trondheim, en halv fra Stjørdal" },
];

const photos = [
  {
    src: "/lovable-uploads/d4692008-4440-4ffe-95df-334b4f30558e.png",
    alt: "Gildesalen pyntet til bryllup med hvite stoltrekk",
  },
  {
    src: "/lovable-uploads/9bc8604c-b534-4a72-b0b3-e6f5281829a4.png",
    alt: "Bryllupsfølget ute på tunet foran låven",
  },
  {
    src: "/lovable-uploads/1dbad16c-7bac-40e9-a9c9-38a5475118af.png",
    alt: "Dekket langbord med markblomster i Gildesalen",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: weddingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function BryllupPage() {
  return (
    <>
      <PageHero
        eyebrow="Bryllup"
        title="Fest i det gamle fjøset, med egen mat og drikke og ingen sluttid"
        lead="Gildesalen tar 120 gjester, tunet tar vielsen, og helga koster kr 7 000. Resten bestemmer dere."
        image={event.image.src}
        alt={event.image.alt}
      />

      <section className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-5 md:grid-cols-4 md:divide-x md:px-8">
          {numbers.map((item) => (
            <div key={item.label} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <dt className="font-serif text-3xl font-light text-primary md:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <SectionHead
            eyebrow="Første spørsmål"
            title="Er datoen ledig?"
            lead="Lørdager i juni, juli og august går først. Tre felt, så svarer vi."
          />
          <div className="lg:pt-3">
            <DateCheck anledning="Bryllup" lokale="Gildesalen" />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          eyebrow="Slik ser helga ut"
          title="Dere har gården fra fredag til søndag"
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {weddingDay.map((day) => (
            <li key={day.step} className="border-t border-foreground/20 pt-6">
              <Eyebrow>{day.step}</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl font-light text-foreground">
                {day.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {day.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-background">
        <div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 md:gap-4 md:px-4">
          {photos.map((photo) => (
            <figure key={photo.src} className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Ærlig om leien"
          title="Inkludert, og det dere ordner selv"
          lead="Dere leier huset, ikke en pakke. Det holder prisen nede og valgene hos dere."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              Inkludert i kr 7 000
            </p>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {weddingIncluded.map((item) => (
                <li key={item} className="py-4 text-base text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Dere ordner selv
            </p>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {weddingYouArrange.map((item) => (
                <li key={item} className="py-4 text-base text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Regnestykket"
            title="Hele helga for kr 7 000"
            lead="Ingen pris per kuvert, ingen minstekjøp av drikke. Lokalet koster det samme om dere er 40 eller 120."
          />
          <div>
            <table className="w-full border-collapse text-left">
              <tbody>
                {weddingPriceExample.rows.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-4 pr-4 text-base text-foreground">{row.label}</td>
                    <td className="py-4 text-right font-serif text-xl text-foreground">
                      {row.value}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-foreground/30">
                  <td className="py-5 pr-4 text-base font-medium text-foreground">
                    {weddingPriceExample.total.label}
                  </td>
                  <td className="py-5 text-right font-serif text-3xl text-primary">
                    {weddingPriceExample.total.value}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {weddingPriceExample.note}{" "}
              <Link href="/priser" className="text-primary hover:underline">
                Hele prislisten
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Gjestene"
              title="Overnatting på Frosta"
              lead="Gården har ikke egne senger. Frosta har hotell, leiligheter og sjøbuer, og Airbnb har flest hele hus for familier og vennegjenger."
            />
            <p className="mt-6 text-sm text-muted-foreground">
              {practical.parking}, så gjestene kan trygt kjøre. {practical.distance}.
            </p>
          </div>
          <LodgingList />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow="Spørsmål" title="Det brudepar spør om" />
          <FaqList items={weddingFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Send datoen, så svarer vi"
        lead={`Uforpliktende. Vil dere heller ringe, er Gustav på ${site.phone}.`}
      >
        <DateCheck anledning="Bryllup" lokale="Gildesalen" tone="light" />
      </CtaBand>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
