import type { Metadata } from "next";
import {
  ButtonLink,
  CtaBand,
  FactList,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/Bits";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Familiebedriften og RÅGO",
  description:
    "Hanne og Gustav Myraune driver Myraunet Gård på Frosta. I 2014 ble kufjøset bygget om til pakkesentral, og RÅGO, merkevaren til Trondheims Kjøkkenhage AS, så dagens lys.",
  alternates: { canonical: "/familiebedriften" },
  openGraph: {
    title: "Familiebedriften og RÅGO | Myraunet Gård",
    description:
      "Hanne og Gustav Myraune driver Myraunet Gård på Frosta. RÅGO leverer sesongbaserte matkasser i Trondheimsregionen.",
    url: "/familiebedriften",
    images: ["/lovable-uploads/hanne-gustav-vegetables.jpeg"],
  },
};

const raagoFacts = [
  { label: "Etablert", value: "2014, på Myraunet Gård" },
  { label: "Selskap", value: "Trondheims Kjøkkenhage AS" },
  { label: "Lansering", value: "Trøndersk Matfestival" },
  { label: "Leverer til", value: "Trondheimsregionen" },
];

const gallery = [
  {
    src: "/lovable-uploads/raago-hero.avif",
    alt: "Gustav med en RÅGO-kasse full av grønnsaker i pakkesentralen",
  },
  {
    src: "/lovable-uploads/raago-packing.webp",
    alt: "Pakking av grønnsakskasser på samlebåndet i pakkesentralen",
  },
  {
    src: "/lovable-uploads/raago-business-2.avif",
    alt: "Tre medarbeidere bærer ferdigpakkede kasser ut av pakkerommet",
  },
  {
    src: "/lovable-uploads/raago-extra-3.avif",
    alt: "Ferdige matkasser klare til levering, sortert etter innhold",
  },
  {
    src: "/lovable-uploads/raago-business-4.avif",
    alt: "Kasser lastes inn i varebilen før leveringsruta",
  },
  {
    src: "/lovable-uploads/raago-extra-2.avif",
    alt: "RÅGO-varebilen lastet med grønnsakskasser",
  },
  {
    src: "/lovable-uploads/raago-extra-6.avif",
    alt: "Hanne og Gustav høster bønner på åkeren",
  },
  {
    src: "/lovable-uploads/raago-extra-1.avif",
    alt: "Gustav ser til maisplantene ute på jordet",
  },
  {
    src: "/lovable-uploads/raago-business-3.avif",
    alt: "Smaksprøver til publikum på matfestival",
  },
  {
    src: "/lovable-uploads/raago-business-5.avif",
    alt: "RÅGO-disk med grønnsaker i butikk, merket Smaker fra Trøndelag",
  },
  {
    src: "/lovable-uploads/raago-extra-5.avif",
    alt: "Utlevering av matkasser til kunder ved bilen",
  },
  {
    src: "/lovable-uploads/raago-extra-4.avif",
    alt: "Levering av matkasse på døra hos en kunde",
  },
  {
    src: "/lovable-uploads/raago-team.jpg",
    alt: "Teamet bak RÅGO samlet i pakkesentralen",
  },
  {
    src: "/lovable-uploads/raago-business-7.avif",
    alt: "Matlaging med sesongens grønnsaker foran kamera",
  },
  {
    src: "/lovable-uploads/raago-farm-scene.webp",
    alt: "Gårdstunet på Frosta en vinterdag",
  },
  {
    src: "/lovable-uploads/raago-business-1.avif",
    alt: "Varebilen utenfor pakkesentralen i snøvær",
  },
];

export default function FamiliebedriftenPage() {
  return (
    <>
      <PageHero
        eyebrow="Familiebedriften"
        title="Hanne og Gustav driver gården, jorda og RÅGO"
        lead="Selskapslokaler i den gamle driftsbygningen, tradisjonelt jordbruk på jordene, og en pakkesentral i det som var kufjøset."
        image="/lovable-uploads/hanne-gustav-vegetables.jpeg"
        alt="Hanne og Gustav Myraune med grønnsakskasser foran varebilen"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="font-serif text-2xl font-light leading-[1.45] text-foreground md:text-[1.85rem]">
              Myraunet Gård ligger midt i Frosta, kjent som Trondheims
              kjøkkenhage. Her har det vært husdyr og grønnsaker i generasjoner.
            </p>
            <div className="mt-7 space-y-5 text-base leading-[1.75] text-muted-foreground md:text-lg">
              <p>
                I dag driver ekteparet {site.drivers} gården videre. Den gamle
                driftsbygningen er rehabilitert til selskapslokaler, mens
                gårdstunet og åkerlappene fortsatt er daglig arbeidsplass.
              </p>
              <p>
                Vi dyrker blant annet potet, gulrot og utvalgte sesonggrønnsaker,
                og samarbeider tett med andre produsenter på Frosta.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/historie" variant="soft">
                Gårdens historie fra 1557
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png"
              alt="Myraunet Gård omgitt av jordene på Frosta"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lovable-uploads/raago-packing.webp"
              alt="Pakking av grønnsakskasser i pakkesentralen som en gang var kufjøs"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:order-1">
            <SectionHead
              eyebrow="2014"
              title="Fra kufjøs til pakkesentral"
              lead="Hanne og Gustav gjorde en enkel idé til handling: koble lokale råvarer direkte til folk."
            />
            <div className="mt-7 space-y-5 text-base leading-[1.75] text-muted-foreground md:text-lg">
              <p>
                Det gamle kufjøset ble bygget om til kjølelager og pakkesentral,
                og RÅGO så dagens lys. Konseptet ble lansert under Trøndersk
                Matfestival, der de første abonnementene ble solgt.
              </p>
              <p>
                Parallelt ble gården videreutviklet som møteplass. Resultatet er
                et sted der selskap, jord og råvarer henger naturlig sammen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Lokalmat" title="Hva RÅGO er" />
            <div className="mt-7 space-y-5 text-base leading-[1.75] text-muted-foreground md:text-lg">
              <p>
                RÅGO er merkevaren til Trondheims Kjøkkenhage AS, etablert på
                Myraunet Gård i 2014. RÅGO leverer sesongbaserte matkasser til
                kunder i Trondheimsregionen, og samarbeider med en rekke lokale
                produsenter på Frosta og ellers i Trøndelag.
              </p>
              <p>
                Utvalget følger årstidene. Kassene er solide gjenbrukskasser som
                vaskes og desinfiseres mellom leveringene, og ruteplanleggingen
                er lagt opp for færrest mulig kilometer per levering, slik at
                råvarene kommer raskt fra jord til kjøkken.
              </p>
            </div>
            <div className="mt-9">
              <ButtonLink href="https://raago.no" variant="soft" external>
                raago.no
              </ButtonLink>
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="border-t border-foreground/20">
              <FactList items={raagoFacts} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          eyebrow="Bilder"
          title="RÅGO i praksis"
          lead="Fra åkeren og pakkesentralen til leveringsruta."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((image) => (
            <figure key={image.src} className="relative aspect-square overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Skal dere samle folk på gården?"
        lead="Send en uforpliktende forespørsel med dato og antall gjester, så tar vi kontakt."
      />
    </>
  );
}
