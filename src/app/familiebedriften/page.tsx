"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import DecorativeDivider from "@/components/ui/decorative-divider";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Users, Leaf, TrendingUp } from "lucide-react";
import { useEffect } from "react";

export default function Familiebedriften() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const milestones = [
    { year: "2014", title: "Oppstart RÅGO", description: "Lansert under Trøndersk Matfestival. De første 50 abonnementene solgt." },
    { year: "2015-2017", title: "Vekst", description: "Fra 150 til 600 kunder. Fjøset tas i bruk som pakkesentral." },
    { year: "2018", title: "Bygdeutviklingsprisen", description: "Tildelt Bygdeutviklingsprisen for Trøndelag." },
    { year: "2020-2021", title: "Skalering", description: "Kraftig vekst. Omsetning rundt 14-16 mill. kr." },
    { year: "2022", title: "Bærekraftsprisen", description: "Bærekraftsprisen på Trøndersk Matfestival." },
    { year: "2023-2024", title: "10-årsmarkering", description: "Stabil drift, positivt driftsresultat." },
  ];

  const awards = [
    "Bygdeutviklingsprisen for Trøndelag (2018)",
    "Bærekraftsprisen på Trøndersk Matfestival (2022)",
    "Gasellebedrift (2019-2022)",
  ];

  const faqs = [
    {
      question: "Hva er RÅGO, og hvordan henger det sammen med Myraunet gård?",
      answer:
        "RÅGO er merkevaren til Trondheims Kjøkkenhage AS, etablert på Myraunet gård. Vi pakker og distribuerer sesongens grønnsaker og lokalmat fra Frosta og Trøndelag. Gården er base for både selskapslokaler og RÅGO.",
    },
    {
      question: "Hvor leverer RÅGO?",
      answer:
        "Trondheimsregionen, fra Melhus/Buvika i sør til Steinkjer i nord. Antall ruter og leveringsdager kan variere med sesong.",
    },
    {
      question: "Kan dere levere mat til arrangement hos dere?",
      answer:
        "Ja, etter kapasitet og i sesong kan vi, gjennom RÅGO og samarbeidspartnere, bidra med lokale råvarer og servering. Dette avklares ved booking.",
    },
    {
      question: "Hva betyr 'sesongbasert' i praksis?",
      answer:
        "Vi følger naturen. Når en råvare er ute av sesong, venter vi til den er tilbake. Det gir bedre smak, mindre svinn og kortere vei fra jord til bord.",
    },
  ];

  const gallery = [
    { src: "/lovable-uploads/raago-business-1.avif", alt: "RÅGO pakking" },
    { src: "/lovable-uploads/raago-business-2.avif", alt: "RÅGO distribusjon" },
    { src: "/lovable-uploads/raago-business-3.avif", alt: "RÅGO grønnsaker" },
    { src: "/lovable-uploads/raago-business-4.avif", alt: "RÅGO team" },
    { src: "/lovable-uploads/raago-business-5.avif", alt: "RÅGO lokaler" },
    { src: "/lovable-uploads/raago-business-6.avif", alt: "RÅGO sesong" },
    { src: "/lovable-uploads/raago-business-7.avif", alt: "RÅGO kvalitet" },
    { src: "/lovable-uploads/raago-packing.webp", alt: "RÅGO pakkesentral" },
    { src: "/lovable-uploads/raago-farm-scene.webp", alt: "RÅGO gårdsscene" },
    { src: "/lovable-uploads/raago-team.jpg", alt: "RÅGO teamet med grønnsaker" },
    { src: "/lovable-uploads/raago-extra-1.avif", alt: "RÅGO drift" },
    { src: "/lovable-uploads/raago-extra-2.avif", alt: "RÅGO produksjon" },
    { src: "/lovable-uploads/raago-extra-3.avif", alt: "RÅGO levering" },
    { src: "/lovable-uploads/raago-extra-4.avif", alt: "RÅGO fellesskap" },
    { src: "/lovable-uploads/raago-extra-5.avif", alt: "RÅGO sesongvarer" },
    { src: "/lovable-uploads/raago-extra-6.avif", alt: "RÅGO arbeid" },
    { src: "/lovable-uploads/raago-extra-7.avif", alt: "RÅGO opplevelse" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/hanne-gustav-vegetables.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 tracking-wide">Familiebedriften</h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10 text-white/90">
            På Myraunet gård i Frosta har jorda forsørget mange generasjoner
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base tracking-wider"
            >
              BESTILL SELSKAPSLOKALE
            </Button>
            <Button
              onClick={() => window.open("https://raago.no", "_blank")}
              variant="outline"
              size="lg"
              className="border-2 border-white/60 bg-transparent hover:bg-white hover:text-primary text-white px-10 py-6 text-base tracking-wider"
            >
              LES MER OM RÅGO
            </Button>
          </div>
        </div>
      </section>

      <DecorativeDivider className="my-16" />

      {/* Ingress */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xl leading-relaxed text-muted-foreground font-light text-center">
            I dag driver ekteparet Hanne Askestad Myraune og Gustav Myraune gården videre, og har gjort en gammel
            driftsbygning om til et pulserende samlingspunkt for både selskaper og matglede. Her finner du historien om
            familien, gården og RÅGO, lokalmatkonseptet som ble født i fjøset og leverer sesongens beste råvarer til
            tusenvis av husholdninger i Trøndelag.
          </p>
        </div>
      </section>

      {/* Røtter og drift */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-light mb-6 tracking-wide">Røtter, drift og fellesskap</h2>
              <div className="w-20 h-px bg-primary mb-6"></div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Myraunet gård ligger i hjertet av Frosta, kjent som Trondheims kjøkkenhage. Her har det vært husdyr og
                grønnsaker i generasjoner. I dag er driftsbygningen rehabilitert til selskapslokaler, mens gårdstunet og
                åkerlappene fortsatt er daglig arbeidsplass.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Vi dyrker blant annet potet, gulrot og utvalgte sesonggrønnsaker, og samarbeider tett med andre produsenter
                på Frosta.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png"
                alt="Myraunet gård - selskapslokaler omgitt av åkre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fra fjøs til pakkesentral */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lovable-uploads/raago-packing.webp"
                alt="Fra fjøs til pakkesentral - RÅGO pakker sesongens grønnsaker"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-light mb-6 tracking-wide">
                Fra fjøs til pakkesentral til selskapslokaler
              </h2>
              <div className="w-20 h-px bg-primary mb-6"></div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                I 2014 gjorde Hanne og Gustav en enkel idé til handling: koble lokale råvarer direkte til folk. Den gamle
                kufjøset ble bygget om til kjølelager og pakkesentral, og RÅGO så dagens lys.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Parallelt videreutviklet vi gården som møteplass. Resultatet er et sted der selskap, jord og råvarer henger
                naturlig sammen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider className="my-16" />

      {/* Hva er RÅGO */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-light mb-6 tracking-wide">Hva er RÅGO?</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              RÅGO er merkevaren til Trondheims Kjøkkenhage AS, etablert på Myraunet gård i 2014.
            </p>
          </div>

          <Card className="p-8 mb-8 bg-background/50 backdrop-blur border-border/50">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Konseptet er sesongbaserte matkasser med grønnsaker og lokalmat fra Frosta og resten av Trøndelag, levert
              hjem. Utvalget følger årstidene. Vi bruker solide gjenbrukskasser som vaskes og desinfiseres, og ruteplanlegger
              kjøringen for færrest mulig kilometer per levering.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I sesong løfter vi frem rundt 100 ulike grønnsakstyper og samarbeider med over 50 produsenter i regionen.
            </p>
          </Card>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-background/50 backdrop-blur border-border/50">
              <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-serif font-light mb-2">~2000</div>
              <div className="text-sm text-muted-foreground">Husholdninger på abonnement</div>
            </Card>
            <Card className="p-6 text-center bg-background/50 backdrop-blur border-border/50">
              <Leaf className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-serif font-light mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Produsenter i nettverket</div>
            </Card>
            <Card className="p-6 text-center bg-background/50 backdrop-blur border-border/50">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-serif font-light mb-2">~1000</div>
              <div className="text-sm text-muted-foreground">Kasser i uka i høysesong</div>
            </Card>
            <Card className="p-6 text-center bg-background/50 backdrop-blur border-border/50">
              <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-serif font-light mb-2">16</div>
              <div className="text-sm text-muted-foreground">Faste ruter</div>
            </Card>
          </div>
        </div>
      </section>

      <DecorativeDivider className="my-16" />

      {/* Milepæler */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-6 tracking-wide">Milepæler</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="p-6 bg-background/50 backdrop-blur border-border/50">
                      <div className="text-3xl font-serif text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>

                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RÅGO Galleri */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 tracking-wide">RÅGO i bilder</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Fra pakking til levering – RÅGO i praksis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs md:text-sm font-light">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priser og anerkjennelser */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-6 tracking-wide">Priser og anerkjennelser</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 text-center bg-card/30 backdrop-blur border-border/50">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">{award}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider className="my-16" />

      {/* FAQ */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-6 tracking-wide">Ofte stilte spørsmål</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-6 bg-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-light mb-6">Klar for å planlegge ditt arrangement?</h2>
          <p className="text-lg text-muted-foreground mb-8">Ta kontakt med oss for å diskutere dine behov</p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-base tracking-wider"
          >
            KONTAKT OSS
          </Button>
        </div>
      </section>
    </div>
  );
}
