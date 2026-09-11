import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/Bits";
import LodgingCard from "@/components/site/LodgingCard";
import { lodging, practical } from "@/lib/content";

export const metadata: Metadata = {
  title: "Overnatting for gjestene på Frosta",
  description:
    "Myraunet Gård har ikke egne senger. Her er hotell, leiligheter, sjøbuer og Airbnb på Frosta med priser fra kr 990 per natt, alle en kort kjøretur fra gården.",
  alternates: { canonical: "/overnatting" },
};

const summary = [
  { value: "6", label: "steder på Frosta, pluss Airbnb" },
  { value: "kr 990", label: "billigste natt, leilighet på Hauganfjæra" },
  { value: "40", label: "senger samlet hos Frosta Fjordbuer" },
  { value: "100+", label: "parkeringsplasser på tunet" },
];

export default function OvernattingPage() {
  return (
    <>
      <PageHero
        eyebrow="Overnatting"
        title="Gjestene sover på Frosta, festen er hos oss"
        lead="Gården har ikke egne senger. Frosta har hotell ved sjøen, leiligheter, sjøbuer og en gjestegård ute på Tautra, alt innen kort kjøretur."
        image="/overnatting/frosta-fjordbuer-1.jpg"
        alt="De røde sjøbuene til Frosta Fjordbuer ved Trondheimsfjorden"
      />

      <section className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-5 md:grid-cols-4 md:divide-x md:px-8">
          {summary.map((item) => (
            <div key={item.label} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <dt className="font-serif text-3xl font-light text-primary md:text-4xl">{item.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section>
        <SectionHead
          eyebrow="Stedene"
          title="Seks steder, fra hotellrom til hele hus"
          lead={`Priser og tall er hentet fra stedenes egne sider og kan endre seg. Book direkte hos dem. ${practical.parking}.`}
        />
        <div className="mt-6">
          {lodging.map((place) => (
            <LodgingCard key={place.slug} place={place} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground">Hele følget samlet</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Frosta Fjordbuer har 40 senger på ett sted. Klostergården har rundt 30. Book tidlig, så kan storfamilien bo vegg i vegg.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground">Hotellstandard</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Frosta Brygge er stedet for gjester som vil ha rom, restaurant og frokost uten å tenke på noe. Fra kr 1 800 per natt.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground">Rimeligst</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Leilighetene på Hauganfjæra fra kr 990 per natt fra natt to, og Airbnb for de som vil dele et helt hus.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Datoen først, sengene etterpå"
        lead="Send dato og antall gjester, så vet dere om gården er ledig før dere booker overnatting."
      />
    </>
  );
}
