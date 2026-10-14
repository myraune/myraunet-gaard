import Link from "next/link";
import type { Metadata } from "next";
import {
  Banner,
  ButtonLink,
  CtaBand,
  Eyebrow,
  PageHero,
  Photo,
  Section,
  SectionHead,
  wrap,
} from "@/components/site/Bits";
import VenueCard from "@/components/site/VenueCard";
import EventGrid from "@/components/site/EventGrid";
import PriceTable from "@/components/site/PriceTable";
import FaqList from "@/components/site/FaqList";
import MapBlock from "@/components/site/MapBlock";
import DateCheck from "@/components/site/DateCheck";
import WeekendTimeline from "@/components/site/WeekendTimeline";
import LodgingBar from "@/components/site/LodgingBar";
import {
  faqs,
  galleryCategories,
  galleryImages,
  home,
  otherOccasions,
  venues,
  visit,
} from "@/lib/content";

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

/** Ett bilde per kategori, så mosaikken viser hele bredden i galleriet. */
const mosaic = galleryCategories
  .filter((category) => category.id !== "alle")
  .flatMap((category) => galleryImages.find((image) => image.category === category.id) ?? []);

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        lead={home.hero.lead}
        image={home.hero.image}
        alt={home.hero.alt}
        priority
      >
        <ButtonLink href="/arrangement/bryllup">Bryllup på gården</ButtonLink>
        <ButtonLink href="/lokaler" variant="soft">
          Se lokalene
        </ButtonLink>
        <ButtonLink href={visit.href} variant="soft">
          {visit.button}
        </ButtonLink>
      </PageHero>

      <section className="py-2 md:py-3">
        <div className={wrap}>
          <Banner tone="sage">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.6fr] lg:items-end lg:gap-16">
              <div>
                <Eyebrow>{home.dateCheck.eyebrow}</Eyebrow>
                <h2 className="mt-3 font-serif text-2xl font-light text-foreground md:text-3xl">
                  {home.dateCheck.title}
                </h2>
              </div>
              <DateCheck anledning="Arrangement" />
            </div>
          </Banner>
        </div>
      </section>

      <LodgingBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>{home.about.eyebrow}</Eyebrow>
            <p className="mt-6 font-serif text-2xl font-light leading-[1.45] text-foreground md:text-[1.85rem]">
              {home.about.lead}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {home.about.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/historie" variant="soft">
                Gårdens historie
              </ButtonLink>
              <ButtonLink href="/familiebedriften" variant="soft">
                Familiebedriften
              </ButtonLink>
            </div>
          </div>

          <dl className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {home.keyNumbers.map((item) => (
              <div key={item.label} className="rounded-3xl bg-tint-cream px-7 py-6">
                <dt className="font-serif text-4xl font-light text-primary md:text-5xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="lokaler">
        <SectionHead
          eyebrow={home.venues.eyebrow}
          title={home.venues.title}
          lead={home.venues.lead}
        />
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {venues.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink href="/lokaler">Se alle lokaler</ButtonLink>
        </div>
      </Section>

      <Section id="arrangement" tone="muted">
        <SectionHead
          eyebrow={home.events.eyebrow}
          title={home.events.title}
          lead={home.events.lead}
        />
        <div className="mt-12">
          <EventGrid />
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Også holdt her: {otherOccasions.join(", ").toLowerCase()}.
        </p>
      </Section>

      <Section>
        <SectionHead
          eyebrow={home.wedding.eyebrow}
          title={home.wedding.title}
          lead={home.wedding.lead}
        />
        <div className="mt-12">
          <WeekendTimeline />
        </div>
        <div className="mt-12">
          <ButtonLink href="/arrangement/bryllup" variant="soft">
            {home.wedding.link}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow={home.prices.eyebrow}
              title={home.prices.title}
              lead={home.prices.lead}
            />
            <div className="mt-8">
              <ButtonLink href="/priser" variant="soft">
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
            eyebrow={home.gallery.eyebrow}
            title={home.gallery.title}
            lead={home.gallery.lead}
          />
          <ButtonLink href="/galleri" variant="soft">
            Se hele galleriet
          </ButtonLink>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {mosaic.map((image, index) => (
            <Link
              key={image.src}
              href="/galleri"
              className={`group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                className="transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow={home.faq.eyebrow} title={home.faq.title} />
          <div>
            <FaqList limit={5} />
            <div className="mt-10">
              <ButtonLink href="/priser" variant="soft">
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
