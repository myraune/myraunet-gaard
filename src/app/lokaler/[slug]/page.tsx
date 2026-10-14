import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  CtaBand,
  Eyebrow,
  FactList,
  PageHero,
  Photo,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import PriceTable from "@/components/site/PriceTable";
import VenueCard from "@/components/site/VenueCard";
import DateCheck from "@/components/site/DateCheck";
import { site, venueBySlug, venues } from "@/lib/content";

export function generateStaticParams() {
  return venues.map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = venueBySlug(slug);
  if (!venue) return {};

  return {
    title: `${venue.name} - lokale på Myraunet Gård`,
    description: venue.lead,
    alternates: { canonical: `/lokaler/${venue.slug}` },
    openGraph: {
      title: `${venue.name} - lokale på Myraunet Gård`,
      description: venue.lead,
      images: [{ url: venue.images[0].src, alt: venue.images[0].alt }],
    },
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venue = venueBySlug(slug);
  if (!venue) notFound();

  const others = venues.filter((v) => v.slug !== venue.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: venue.name,
    description: venue.lead,
    url: `${site.url}/lokaler/${venue.slug}`,
    image: `${site.url}${venue.images[0].src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressCountry: "NO",
    },
    containedInPlace: { "@type": "LocalBusiness", name: site.name, url: site.url },
  };

  return (
    <>
      <PageHero
        eyebrow="Lokale"
        title={venue.name}
        lead={venue.lead}
        image={venue.images[0].src}
        alt={venue.images[0].alt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-2xl space-y-6">
            {venue.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-[1.75] text-foreground/85 md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <Eyebrow>Passer til</Eyebrow>
              <ul className="mt-4 flex flex-wrap gap-2">
                {venue.suits.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-tint-cream px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="self-start rounded-3xl bg-tint-cream px-6 py-6 md:px-8 md:py-8">
            <FactList items={venue.facts} />
            {venue.priceNote && (
              <p className="mt-4 text-sm text-muted-foreground">
                {venue.priceNote}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kontakt">Sjekk ledig dato</ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Eller ring{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>
              .
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <SectionHead
            eyebrow="Første spørsmål"
            title={`Er ${venue.name} ledig den dagen?`}
            lead="Tre felt, så svarer vi. Resten tar vi når vi snakkes."
          />
          <div className="lg:pt-3">
            <DateCheck anledning="Arrangement" lokale={venue.name} />
          </div>
        </div>
      </Section>

      {venue.images.length > 1 && (
        <Section>
          <SectionHead eyebrow="Bilder" title={`${venue.name} i bilder`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venue.images.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Photo src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Priser"
            title="Leie og tillegg"
            lead="Alle priser er inkl. mva., og gjelder for hele lokalet."
          />
          <PriceTable />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Andre lokaler" title="Se også" />
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {others.map((other) => (
            <VenueCard key={other.slug} venue={other} />
          ))}
        </div>
      </Section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
