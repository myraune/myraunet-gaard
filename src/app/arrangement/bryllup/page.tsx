import type { Metadata } from "next";
import Link from "next/link";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  Photo,
  Section,
  SectionHead,
  wrap,
} from "@/components/site/Bits";
import DateCheck from "@/components/site/DateCheck";
import FaqList from "@/components/site/FaqList";
import LodgingList from "@/components/site/LodgingList";
import {
  eventBySlug,
  weddingDay,
  weddingFaqs,
  weddingIncluded,
  weddingPage,
  weddingPriceExample,
  weddingYouArrange,
} from "@/lib/content";

const event = eventBySlug("bryllup")!;

export const metadata: Metadata = {
  title: weddingPage.metaTitle,
  description: weddingPage.metaDescription,
  alternates: { canonical: "/arrangement/bryllup" },
  openGraph: {
    title: weddingPage.metaTitle,
    description: weddingPage.ogDescription,
    images: [{ url: event.image.src, alt: event.image.alt }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: weddingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function RentList({
  label,
  items,
  strong = false,
}: {
  label: string;
  items: string[];
  strong?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
          strong ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <ul className="mt-5 divide-y divide-foreground/10 border-t border-foreground/10">
        {items.map((item) => (
          <li
            key={item}
            className={`py-4 text-base ${strong ? "text-foreground/85" : "text-muted-foreground"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BryllupPage() {
  return (
    <>
      <PageHero
        eyebrow={weddingPage.hero.eyebrow}
        title={weddingPage.hero.title}
        lead={weddingPage.hero.lead}
        image={event.image.src}
        alt={event.image.alt}
        priority
      />

      <section className="py-2 md:py-3">
        <dl className={`${wrap} grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4`}>
          {weddingPage.numbers.map((item) => (
            <div key={item.label} className="rounded-3xl bg-tint-sage px-6 py-7">
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

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <SectionHead {...weddingPage.dateCheck} />
          <div className="lg:pt-3">
            <DateCheck anledning="Bryllup" lokale="Gildesalen" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead {...weddingPage.weekend} />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {weddingDay.map((day) => (
            <li key={day.step} className="border-t border-foreground/15 pt-6">
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

      <section className="pb-6 md:pb-10">
        <div className={`${wrap} grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4`}>
          {weddingPage.photos.map((photo) => (
            <figure
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Photo src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
      </section>

      <Section tone="sage">
        <SectionHead
          eyebrow={weddingPage.rent.eyebrow}
          title={weddingPage.rent.title}
          lead={weddingPage.rent.lead}
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <RentList label={weddingPage.rent.included} items={weddingIncluded} strong />
          <RentList label={weddingPage.rent.arrange} items={weddingYouArrange} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow={weddingPage.price.eyebrow}
            title={weddingPage.price.title}
            lead={weddingPage.price.lead}
          />
          <div>
            <table className="w-full border-collapse text-left">
              <tbody>
                {weddingPriceExample.rows.map((row) => (
                  <tr key={row.label} className="border-b border-foreground/10">
                    <td className="py-4 pr-4 text-base text-foreground">{row.label}</td>
                    <td className="py-4 text-right font-serif text-xl text-foreground">
                      {row.value}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-foreground/25">
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
                {weddingPage.price.link}
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow={weddingPage.lodging.eyebrow}
              title={weddingPage.lodging.title}
              lead={weddingPage.lodging.lead}
            />
            <p className="mt-6 text-sm text-muted-foreground">{weddingPage.lodging.note}</p>
          </div>
          <LodgingList />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead {...weddingPage.faq} />
          <FaqList items={weddingFaqs} />
        </div>
      </Section>

      <CtaBand title={weddingPage.cta.title} lead={weddingPage.cta.lead}>
        <DateCheck anledning="Bryllup" lokale="Gildesalen" />
      </CtaBand>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
