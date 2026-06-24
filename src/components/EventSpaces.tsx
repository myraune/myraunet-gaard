"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Home, Sparkles, Coffee, Music, Utensils } from "lucide-react";
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
        "Vår største og mest elegante sal, perfekt for større arrangementer. Med sin rustikke sjarm og moderne fasiliteter skaper Gildesalen den perfekte rammen for bryllup, konfirmasjoner og store selskap.",
      capacity: "Opptil 120 gjester",
      size: "200 m²",
      features: [
        { icon: Users, text: "120 gjester" },
        { icon: Home, text: "200 m² areal" },
        { icon: Sparkles, text: "Moderne lydanlegg" },
        { icon: Coffee, text: "Fullt utstyrt kjøkken" },
        { icon: Music, text: "Dansegulv" },
        { icon: Utensils, text: "Serverings-områder" },
      ],
      images: [
        "/lovable-uploads/ee31250f-77e1-4ef4-9c20-017d220619d6.png",
        "/lovable-uploads/venue-table-1.jpeg",
        "/lovable-uploads/venue-setting-1.jpeg",
        "/lovable-uploads/venue-elegant.jpeg",
      ],
      price: "Fra 15.000,-",
      highlight: true,
    },
    {
      title: "Grisehuset",
      description:
        "Et sjarmerende og intimt rom for mindre, eksklusive sammenkomster. Grisehuset kombinerer historisk atmosfære med moderne komfort, og er ideelt for intime bryllup, bursdager og familieselskap.",
      capacity: "Opptil 40 gjester",
      size: "80 m²",
      features: [
        { icon: Users, text: "40 gjester" },
        { icon: Home, text: "80 m² areal" },
        { icon: Sparkles, text: "Intim atmosfære" },
        { icon: Coffee, text: "Kaffe-bar" },
        { icon: Music, text: "Musikkutstyr" },
        { icon: Utensils, text: "Servering" },
      ],
      images: [
        "/lovable-uploads/9664c9e0-24d8-4a26-8caa-43143ed756de.png",
        "/lovable-uploads/venue-atmosphere.jpeg",
        "/lovable-uploads/venue-setting-2.jpeg",
      ],
      price: "Fra 8.000,-",
      highlight: false,
    },
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
            To unike rom, hver med sin egen karakter og sjarm
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
      </div>
    </section>
  );
};

export default EventSpaces;
