import type { Metadata } from "next";
import { Eyebrow, PageHero, Section, SectionHead } from "@/components/site/Bits";
import MapBlock from "@/components/site/MapBlock";
import FaqList from "@/components/site/FaqList";
import ForesporselForm from "./ForesporselForm";
import { kontaktPage, site, visit } from "@/lib/content";

export const metadata: Metadata = {
  title: kontaktPage.metaTitle,
  description: kontaktPage.metaDescription,
  alternates: { canonical: "/kontakt" },
};

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ emne?: string | string[] }>;
}) {
  const { emne } = await searchParams;

  return (
    <>
      <PageHero {...kontaktPage.hero} priority />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Forespørsel" title="Fortell om anledningen" />
            <div className="mt-10">
              <ForesporselForm initialMelding={emne === "visning" ? visit.message : ""} />
            </div>
          </div>

          <aside className="lg:pt-4">
            <div className="rounded-3xl bg-tint-cream p-8">
              <Eyebrow>Ta direkte kontakt</Eyebrow>
              <div className="mt-6 space-y-5 text-base">
                <p>
                  <span className="block text-sm text-muted-foreground">
                    Telefon
                  </span>
                  <a
                    href={site.phoneHref}
                    className="font-serif text-2xl font-light text-foreground hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </p>
                <p>
                  <span className="block text-sm text-muted-foreground">
                    E-post
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-foreground hover:text-primary"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="block text-sm text-muted-foreground">
                    Adresse
                  </span>
                  <span className="text-foreground">
                    {site.address.street}
                    <br />
                    {site.address.postal} {site.address.city}
                  </span>
                </p>
              </div>

              <div className="mt-8 border-t border-foreground/10 pt-6 text-sm">
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-1 text-primary hover:underline"
                >
                  Myraunet Gård på Facebook
                </a>
                <a
                  href={site.olavsrosa}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-1 text-primary hover:underline"
                >
                  Oppføringen hos Norsk Kulturarv
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Gården drives av {site.drivers}. Vi svarer så fort vi er inne fra
              jordet.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <MapBlock />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHead eyebrow="Spørsmål" title="Kanskje svaret står her" />
          <FaqList />
        </div>
      </Section>
    </>
  );
}
