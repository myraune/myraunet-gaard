import type { Metadata } from "next";
import {
  ButtonLink,
  CtaBand,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import { farmers, history, nameOrigin, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gårdens historie fra 1557",
  description:
    "Myraunet Gård er nevnt første gang i 1557, under navnet Myrum. Prestbolet i Frosta eide gården til 1832. Her er brukerrekka og milepælene fram til i dag.",
  alternates: { canonical: "/historie" },
};

export default function HistoriePage() {
  return (
    <>
      <PageHero
        eyebrow="Historie"
        title="Nevnt første gang i 1557, under navnet Myrum"
        lead="Kirka eide jorda i over to hundre år. Det første kongelige skjøtet kom i 1832. Siden har gården gått i slekta."
        image="/lovable-uploads/5f16316b-2f82-427d-a822-701bdb6c99ed.png"
        alt="Arkivbilder fra gården på 1970- og 1980-tallet"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHead
            eyebrow="Milepæler"
            title="Fire og et halvt hundreår på Frosta"
            lead="Tallene under er hentet fra matrikler og gårdshistorien for Frosta."
          />

          <ol className="border-t border-border">
            {history.map((item) => (
              <li key={item.year} className="border-b border-border py-8">
                <p className="font-serif text-2xl font-light text-primary">
                  {item.year}
                </p>
                <h3 className="mt-2 font-serif text-xl font-normal text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Navnet" title="Hvor Myraunet kommer fra" />
            <blockquote className="mt-8 border-l-2 border-primary pl-6">
              <p className="font-serif text-xl font-light leading-[1.6] text-foreground md:text-2xl">
                {nameOrigin}
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                Fra gårdshistorien for Frosta
              </footer>
            </blockquote>
          </div>

          <div>
            <SectionHead eyebrow="Eierskap" title="Fra kirkegods til slektsgård" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Prestbolet i Frosta, kirkas eiendom, eide Myraunet fra 1600 til
                1832. Brukerne i denne perioden var leilendinger som drev jorda
                på vegne av kirka.
              </p>
              <p>
                Det første kongelige skjøtet på gården ble gitt til Jakob
                Sørensen Myraunet i 1832. Gården er i dag drevet av{" "}
                {site.drivers}, som overtok i {site.driversSince}.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/familiebedriften" variant="outline">
                Familiebedriften i dag
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Brukerrekka"
          title="De som har drevet Myraunet"
          lead="Slik står rekka i gårdshistorien, fra Torger Myrum i 1557 til i dag."
        />

        <ol className="mt-12 border-t border-border md:columns-2 md:gap-x-16">
          {farmers.map((farmer) => (
            <li
              key={`${farmer.years}-${farmer.name}`}
              className="flex break-inside-avoid flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-4"
            >
              <span
                className={`text-sm tabular-nums ${
                  farmer.current
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {farmer.years}
              </span>
              <span
                className={`text-right text-base ${
                  farmer.current ? "font-medium text-primary" : "text-foreground"
                }`}
              >
                {farmer.name}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Vil dere feire i disse bygningene?"
        lead="Gildesalen var fjøset, Grisehuset var grisehuset. I dag er de selskapslokaler."
      />
    </>
  );
}
