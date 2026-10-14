import type { Metadata } from "next";
import {
  ButtonLink,
  CtaBand,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import PriceTable from "@/components/site/PriceTable";
import FaqList from "@/components/site/FaqList";
import { priserPage, site, venues } from "@/lib/content";

export const metadata: Metadata = {
  title: priserPage.metaTitle,
  description: priserPage.metaDescription,
  alternates: { canonical: "/priser" },
};

function ScopeList({
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

export default function PriserPage() {
  return (
    <>
      <PageHero {...priserPage.hero} priority />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead {...priserPage.list} />
            <div className="mt-8">
              <ButtonLink href="/kontakt">Send forespørsel</ButtonLink>
            </div>
          </div>
          <PriceTable />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead eyebrow={priserPage.scope.eyebrow} title={priserPage.scope.title} />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <ScopeList label={priserPage.scope.includedLabel} items={priserPage.included} strong />
          <ScopeList label={priserPage.scope.extraLabel} items={priserPage.notIncluded} />
        </div>
      </Section>

      <Section>
        <SectionHead {...priserPage.capacity} />
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {venues.map((venue) => (
            <div key={venue.slug} className="rounded-3xl bg-tint-sage p-8">
              <h3 className="font-serif text-2xl font-light text-foreground">
                {venue.name}
              </h3>
              <p className="mt-4 font-serif text-3xl font-light text-primary">
                {venue.price}
              </p>
              {venue.priceNote && (
                <p className="mt-2 text-sm text-muted-foreground">{venue.priceNote}</p>
              )}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {venue.lead}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow={priserPage.terms.eyebrow} title={priserPage.terms.title} />
          <div>
            <FaqList />
            <p className="mt-8 text-sm text-muted-foreground">
              Er noe uklart, ring{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              eller send en e-post til{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title={priserPage.cta.title} lead={priserPage.cta.lead} />
    </>
  );
}
