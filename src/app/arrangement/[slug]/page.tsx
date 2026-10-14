import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  CtaBand,
  FactList,
  PageHero,
  Photo,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import PriceTable from "@/components/site/PriceTable";
import FaqList from "@/components/site/FaqList";
import DateCheck from "@/components/site/DateCheck";
import { eventBySlug, eventTypes, site } from "@/lib/content";

export function generateStaticParams() {
  // Bryllup har egen side i /arrangement/bryllup
  return eventTypes
    .filter((event) => event.slug !== "bryllup")
    .map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = eventBySlug(slug);
  if (!event) return {};

  return {
    title: event.metaTitle,
    description: event.metaDescription,
    alternates: { canonical: `/arrangement/${event.slug}` },
    openGraph: {
      title: event.metaTitle,
      description: event.metaDescription,
      images: [{ url: event.image.src, alt: event.image.alt }],
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = eventBySlug(slug);
  if (!event) notFound();

  const others = eventTypes.filter((e) => e.slug !== event.slug);

  return (
    <>
      <PageHero
        eyebrow="Arrangement"
        title={event.name}
        lead={event.lead}
        image={event.image.src}
        alt={event.image.alt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-2xl space-y-6">
            {event.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-[1.75] text-foreground/85 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="self-start rounded-3xl bg-tint-cream px-6 py-6 md:px-8 md:py-8">
            <FactList items={event.points} />
            {event.season && (
              <p className="mt-4 text-sm text-muted-foreground">
                Sesong: {event.season.toLowerCase()}.
              </p>
            )}
            <div className="mt-8">
              <ButtonLink href="/kontakt">Send forespørsel</ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Eller ring{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              for en uforpliktende prat.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <SectionHead
            eyebrow="Første spørsmål"
            title="Er datoen ledig?"
            lead="Tre felt, så svarer vi. Resten tar vi når vi snakkes."
          />
          <div className="lg:pt-3">
            <DateCheck anledning={event.navLabel} lokale={event.venue} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Priser"
            title="Hva det koster"
            lead="Dere leier lokalet. Rengjøring og kjøkkenhjelp er tillegg dere velger selv."
          />
          <PriceTable />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow="Spørsmål" title="Godt å vite på forhånd" />
          <FaqList limit={5} />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Andre anledninger" title="Se også" />
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-3">
          {others.map((other) => (
            <Link key={other.slug} href={`/arrangement/${other.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Photo
                  src={other.image.src}
                  alt={other.image.alt}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-light text-foreground transition-colors group-hover:text-primary">
                {other.navLabel}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{other.venue}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
