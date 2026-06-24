import { Utensils, Sparkles, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Catering",
      description:
        "Nyt deilig mat tilberedt av profesjonelle kokker med fokus på lokale råvarer og tradisjonelle oppskrifter.",
    },
    {
      icon: Sparkles,
      title: "Dekorasjon",
      description:
        "La oss skape den perfekte atmosfæren med elegant blomsterdekorasjon og vakker bordpynt.",
    },
    {
      icon: Calendar,
      title: "Planlegging",
      description:
        "Vårt erfarne team hjelper deg med å planlegge hver detalj for å sikre et vellykket arrangement.",
    },
    {
      icon: Users,
      title: "Vertskap",
      description: "Profesjonelt vertskap som sørger for at dine gjester får en uforglemmelig opplevelse.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-wide">
            Våre Tjenester
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4">
            Vi tilbyr komplette løsninger for ditt arrangement
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4 md:mb-6">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
