import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria & Anders",
      event: "Bryllup",
      text: "Myraunet Gård ga oss den perfekte rammen for vår spesielle dag. Stemningen var magisk, og gjestene våre snakker fortsatt om hvor vakkert det var.",
      rating: 5,
    },
    {
      name: "Kari Johnsen",
      event: "Konfirmasjon",
      text: "Vi hadde en fantastisk konfirmasjon for vår datter. Lokalene var nydelige, og servicen var upåklagelig. Anbefales på det sterkeste!",
      rating: 5,
    },
    {
      name: "Erik Hansen",
      event: "50-års jubileum",
      text: "En uforglemmelig kveld! Gården har en særegen atmosfære som gjorde jubileet vårt til noe helt spesielt. Takk for alt!",
      rating: 5,
    },
    {
      name: "Linda & Tom",
      event: "Firmafest",
      text: "Perfekt lokasjon for vår firmafest. Kombinasjonen av rustikk sjarm og moderne fasiliteter gjorde kvelden minneverdig for alle ansatte.",
      rating: 5,
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-wide">
            Hva Våre Gjester Sier
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4">
            Ekte opplevelser fra dem som har feiret med oss
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="mb-4 md:mb-6">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/20" />
                      </div>
                      
                      <div className="flex gap-1 mb-4 md:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 flex-grow font-light italic text-sm md:text-base lg:text-lg">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="pt-4 md:pt-6 border-t border-border/50">
                        <p className="font-serif text-base md:text-lg font-medium">{testimonial.name}</p>
                        <p className="text-xs md:text-sm text-muted-foreground font-light">{testimonial.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
          <div className="px-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-4 md:mb-6 tracking-wide">
              Oppdag Myraunet Gård
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light text-sm md:text-base lg:text-lg">
              La oss hjelpe deg med å skape minner som varer livet ut. Med vår erfaring, vakre lokaler og dedikerte service, blir ditt arrangement noe helt spesielt.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {[
                'Autentisk historisk atmosfære',
                'Moderne fasiliteter og komfort',
                'Fleksible løsninger for alle arrangementer',
                'Profesjonell service og veiledning'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-foreground/80 font-light text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-2xl">
            <img
              src="/lovable-uploads/venue-floral.jpeg"
              alt="Myraunet Gård opplevelse"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
