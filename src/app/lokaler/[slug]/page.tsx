import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  CtaBand,
  FactList,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import PriceTable from "@/components/site/PriceTable";
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
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Passer til
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {venue.suits.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="border-t border-foreground/20">
              <FactList items={venue.facts} />
            </div>
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

      {venue.images.length > 1 && (
        <Section tone="muted">
          <SectionHead eyebrow="Bilder" title={`${venue.name} i bilder`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venue.images.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Priser"
            title="Leie og tillegg"
            lead="Alle priser er inkl. mva., og gjelder for hele lokalet."
          />
          <PriceTable />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead eyebrow="Andre lokaler" title="Se også" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/lokaler/${other.slug}`}
              className="group border border-border bg-background p-8 transition-colors hover:border-primary"
            >
              <h3 className="font-serif text-2xl font-light text-foreground group-hover:text-primary">
                {other.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {other.lead}
              </p>
            </Link>
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
