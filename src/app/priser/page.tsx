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
import { priceList, site, venues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Priser for leie av lokaler",
  description:
    "Gildesalen kr 4 000,-, Grisehuset kr 2 500,- ferdig vasket, begge lokaler kr 5 000,-. Rengjøring og kjøkkenhjelp i tillegg. Alle priser inkl. mva.",
  alternates: { canonical: "/priser" },
};

const included = [
  "Hele lokalet med bord og stoler",
  "Kjøkkenet til leietakers disposisjon",
  "Parkering på tunet",
  "Gårdstunet utenfor til mingling og bilder",
];

const notIncluded = [
  "Mat og drikke, som dere ordner selv",
  "Rengjøring, om dere ikke bestiller det",
  "Kjøkkenhjelp, kr 300,- pr. time",
  "Overnatting, som ikke tilbys for øyeblikket",
];

export default function PriserPage() {
  return (
    <>
      <PageHero
        eyebrow="Priser"
        title="Prisene står her, ikke bak et skjema"
        lead={`Leieprisene har stått uendret siden ${priceList.updated}. Alle priser er inkl. mva.`}
        image="/myraunet-gallery/natur/5.jpg"
        alt="Gårdsvegen og jordene på Frosta"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Prisliste"
              title="Leie av lokaler"
              lead="Dere betaler for lokalet, ikke per gjest. Det gjør det enkelt å regne på selv om følget vokser."
            />
            <div className="mt-8">
              <ButtonLink href="/kontakt">Send forespørsel</ButtonLink>
            </div>
          </div>
          <PriceTable />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          eyebrow="Hva som følger med"
          title="Inkludert og ikke inkludert"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              Inkludert i leien
            </p>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {included.map((item) => (
                <li key={item} className="py-4 text-base text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Kommer i tillegg
            </p>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {notIncluded.map((item) => (
                <li key={item} className="py-4 text-base text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Kapasitet"
          title="Hvilket lokale passer til hvor mange"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {venues.map((venue) => (
            <div key={venue.slug} className="border border-border p-8">
              <h3 className="font-serif text-2xl font-light text-foreground">
                {venue.name}
              </h3>
              <p className="mt-4 font-serif text-3xl font-light text-primary">
                {venue.price}
              </p>
              {venue.priceNote && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {venue.priceNote}
                </p>
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
          <SectionHead eyebrow="Vilkår" title="Det praktiske rundt leien" />
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

      <CtaBand
        title="Klar for å sjekke datoen?"
        lead="Send dato og omtrentlig antall gjester, så svarer vi om lokalet er ledig."
      />
    </>
  );
}
