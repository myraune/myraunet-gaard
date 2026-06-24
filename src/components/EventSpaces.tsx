"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Home, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventSpaces = () => {
  const spaces = [
    {
      title: "Gildesalen",
      description:
        "Gildesalen er vår største sal. Historisk sett var dette gårdens fjøs, hvor hester, kyr og sauer holdt til. Denne salen er meget godt egnet til bryllup, jubileer, julebord, eller andre større tilstelninger. Salen er meget godt egnet for kurs og konferanser. Salen kan innredes med både langbord og gruppebord.",
      capacity: "ca. 120 personer",
      size: "180 kvm",
      features: [
        { icon: Users, text: "ca. 120 personer" },
        { icon: Home, text: "180 kvm" },
        { icon: Calendar, text: "Egnet for: bryllup, jubileer, julebord" },
        { icon: Calendar, text: "Egnet for: kurs og konferanser" },
      ],
      images: [
        "/lovable-uploads/ee31250f-77e1-4ef4-9c20-017d220619d6.png",
        "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png",
        "/lovable-uploads/e121b0a5-3fbd-4bc1-b30b-77ec795420da.png",
        "/myraunet-gallery/natur/4.jpg",
      ],
      price: "kr 4 000,-",
      priceNote: "3 dager eller mer: kr 6 000,-",
      highlight: true,
    },
    {
      title: "Grisehuset",
      description:
        "Grisehuset er en noe mindre sal enn Gildehallen. Med sin blanding av tømmervegger og mur skaper den en trivelig atmosfære. Salen er også velegnet for de fleste typer arrangement, og har vært mye brukt til konfirmasjoner. Salen innredes best med langbord eller hestesko-bord.",
      capacity: "ca. 35 personer",
      size: "80 kvm",
      features: [
        { icon: Users, text: "ca. 35 personer" },
        { icon: Home, text: "80 kvm" },
        { icon: Calendar, text: "Egnet for: konfirmasjoner" },
        { icon: Calendar, text: "Egnet for: de fleste typer arrangement" },
      ],
      images: [
        "/lovable-uploads/9664c9e0-24d8-4a26-8caa-43143ed756de.png",
        "/lovable-uploads/fefc77d2-ff55-4178-affb-c82cac29ec44.png",
        "/lovable-uploads/d21b9ac7-9ce5-45e5-9eae-860aa7a09d45.png",
      ],
      price: "kr 2 500,-",
      priceNote: "Ferdig vasket",
      highlight: false,
    },
    {
      title: "Stabburet",
      description:
        "Stabburet er bygg med flere muligheter. Det kan brukes til enkel overnatting, eller som lunsjlokale, for å variere litt under en weekend med seminar. Stabburet er best egnet under sommersesongen. Lokalene i stabburet er spredt over flere etasjer, og det er hovedsakelig i andre etasje lokalet er. Her dekker rommet hele grunnflaten og kan brukes til det meste.",
      capacity: "Flere etasjer",
      size: "Hele grunnflaten i 2. etasje",
      features: [
        { icon: Home, text: "Flere etasjer" },
        { icon: Calendar, text: "Best egnet under sommersesongen" },
        { icon: Calendar, text: "Egnet for: enkel overnatting" },
        { icon: Calendar, text: "Egnet for: lunsjlokale under seminar" },
      ],
      images: [
        "/lovable-uploads/stabbur.jpg",
        "/myraunet-gallery/natur/5.jpg",
      ],
      price: "Ta kontakt",
      priceNote: "",
      highlight: false,
    },
  ];

  const priceBreakdown = [
    { label: "Gildesalen", value: "kr 4 000,-" },
    { label: "Gildesalen (3 dager eller mer)", value: "kr 6 000,-" },
    { label: "Grisehuset (ferdig vasket)", value: "kr 2 500,-" },
    { label: "Gildesalen + Grisehuset", value: "kr 5 000,-" },
    { label: "Rengjøring Gildesalen", value: "kr 1 000,-" },
    { label: "Rengjøring Grisehuset", value: "kr 500,-" },
    { label: "Kjøkkenhjelp", value: "kr 300,- pr time" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="event-spaces" className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-wide">
            Våre Lokaler
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4">
            Tre unike rom, hver med sin egen karakter og sjarm
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {spaces.map((space, spaceIndex) => (
            <div
              key={space.title}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up ${
                spaceIndex % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
              style={{ animationDelay: `${spaceIndex * 200}ms` }}
            >
              <div className={`${spaceIndex % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
                <Carousel className="w-full">
                  <CarouselContent>
                    {space.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt={`${space.title} - Bilde ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                          {space.highlight && idx === 0 && (
                            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium tracking-wide">
                              POPULÆR
                            </div>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>

              <div className={`${spaceIndex % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
                  <CardHeader className="space-y-3 md:space-y-4 pb-4 md:pb-6 p-4 md:p-6">
                    <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-wide">
                      {space.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Users className="w-3 h-3 md:w-4 md:h-4" />
                        {space.capacity}
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-2">
                        <Home className="w-3 h-3 md:w-4 md:h-4" />
                        {space.size}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:space-y-8 p-4 md:p-6">
                    <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                      {space.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {space.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground/80"
                        >
                          <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          </div>
                          <span className="font-light">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground font-light mb-1">Pris</p>
                        <p className="text-xl md:text-2xl font-serif font-medium text-primary">
                          {space.price}
                        </p>
                        {space.priceNote && (
                          <p className="text-xs text-muted-foreground font-light mt-1">
                            {space.priceNote}
                          </p>
                        )}
                      </div>
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 md:py-6 tracking-wide text-sm md:text-base w-full sm:w-auto min-h-[48px]"
                      >
                        BESTILL VISNING
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl mx-auto animate-fade-in-up">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-2xl md:text-3xl font-serif font-light tracking-wide text-center">
                Prisliste
              </CardTitle>
              <p className="text-center text-xs md:text-sm text-muted-foreground font-light">
                Priser for leie av lokaler pr 20/4-2020
              </p>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <ul className="divide-y divide-border/50">
                {priceBreakdown.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between py-3 text-sm md:text-base"
                  >
                    <span className="font-light text-foreground/80">{item.label}</span>
                    <span className="font-serif font-medium text-primary">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border/50 space-y-2 text-xs md:text-sm text-muted-foreground font-light">
                <p>Leietaker må selv rydde lokalet klart til rengjøring.</p>
                <p>Alle priser inkl. mva.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventSpaces;
