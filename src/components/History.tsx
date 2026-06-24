import DecorativeDivider from './ui/decorative-divider';

const History = () => {
  const timelineEvents = [
    {
      period: "1940-1950-tallet",
      title: "Tradisjonell Gårdsdrift",
      description: "Myraunet Gård som tradisjonell gård med storfe og aktivitet. Autentiske øyeblikk fra gårdslivet, hvor tradisjonell landbruksdrift var i fokus og familien var sentral i driften.",
      image: "/lovable-uploads/d21b9ac7-9ce5-45e5-9eae-860aa7a09d45.png",
      align: "left"
    },
    {
      period: "1970-1980-tallet",
      title: "Utvikling og Modernisering",
      description: "Gården fortsatte å utvikle seg gjennom 1970- og 1980-tallet. Gården utviklet seg mot det vi kjenner i dag, mens den beholdt sin autentiske karakter og familietilknytning.",
      image: "/lovable-uploads/5f16316b-2f82-427d-a822-701bdb6c99ed.png",
      align: "right"
    },
    {
      period: "I dag",
      title: "En Destinasjon for Øyeblikk som Betyr Noe",
      description: "I dag står Myraunet Gård som en perle for spesielle arrangementer. Vi bevarer historien mens vi skaper nye minner for våre gjester.",
      image: "/lovable-uploads/venue-elegant.jpeg",
      align: "left"
    }
  ];

  const farmOperators = [
    { years: "1557 - 1559", name: "Torger Myrum" },
    { years: "1610 - 1626", name: "Hallstein Myr" },
    { years: "1626 - 1665", name: "Thor Myr" },
    { years: "1665 - 1684", name: "Peder Arntsen" },
    { years: "1684 - 1690", name: "Peders enke" },
    { years: "1690 - 1723", name: "Arnt Pedersen Myraunet" },
    { years: "1723 - 1728", name: "Peder Arntsen" },
    { years: "1728 - 1734", name: "Ole Myraunet" },
    { years: "1734 - 1739", name: "Amund Olsen" },
    { years: "1739 - 1757", name: "Anders Amundsen" },
    { years: "1757 - 1780", name: "Ole Amundsen Myraunet" },
    { years: "1780 - 1797", name: "Ole Olsen Myraunet" },
    { years: "1797 - 1832", name: "Soren Aagesen" },
    { years: "1832 - 1864", name: "Jakob Sorensen Myraunet" },
    { years: "1864 - 1866", name: "Kristian Bernt Richter" },
    { years: "1866 - 1868", name: "Torsten Olsen Vangberg" },
    { years: "1868 - 1885", name: "Johan Arnt Andreasen Hovdal" },
    { years: "1885 - 1913", name: "Mette Rekkebo & Gunnar Andreasen Hovdal" },
    { years: "1913 - 1941", name: "Dina Storset Myraunet & Lars Myraunet" },
    { years: "1941 - 1982", name: "Julianne Sandvik Myraunet & Gustav Johan Myraunet" },
    { years: "1982 - 2012", name: "Kjersti Sannes Myraune & Lars Myraune" },
    { years: "2013 - ", name: "Hanne Askestad Myraune & Gustav Myraune", current: true }
  ];

  return (
    <section id="history" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-wide">
            Vår Historie
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4">
            En levende arv gjennom generasjoner
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 hidden lg:block"></div>

          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`grid lg:grid-cols-2 gap-6 md:gap-10 items-center ${
                  event.align === 'right' ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`${event.align === 'right' ? 'lg:col-start-2' : ''} relative group`}>
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${event.align === 'right' ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''} space-y-3 md:space-y-4 px-2`}>
                    <div className={`inline-block px-4 md:px-6 py-1.5 md:py-2 bg-primary/10 rounded-full ${
                      event.align === 'right' ? 'lg:float-right' : ''
                    }`}>
                      <span className="text-primary font-medium tracking-wide text-sm md:text-base">{event.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base lg:text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                </div>

                {/* Decorative divider (except for last item) */}
                {index < timelineEvents.length - 1 && (
                  <div className="mt-10 md:mt-14">
                    <DecorativeDivider />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Farm Operators Section */}
        <div className="mt-20 md:mt-28">
          <DecorativeDivider className="mb-12 md:mb-16" />
          
          <div className="text-center mb-10 md:mb-14 animate-fade-in">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 tracking-wide">
              Gårdens Drivere Gjennom Tidene
            </h3>
            <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground font-light text-sm md:text-base">
              En komplett oversikt fra 1557 til i dag
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4">
              {farmOperators.map((operator, index) => (
                <div 
                  key={index} 
                  className={`flex items-baseline gap-3 md:gap-4 py-2 px-3 md:px-4 rounded-lg transition-all duration-300 hover:bg-secondary/20 animate-fade-in-up ${
                    operator.current ? 'bg-primary/5 border border-primary/20' : ''
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <span className="text-primary font-medium text-xs md:text-sm whitespace-nowrap min-w-[90px] md:min-w-[100px]">
                    {operator.years}
                  </span>
                  <span className={`text-foreground font-light text-sm md:text-base ${
                    operator.current ? 'font-medium' : ''
                  }`}>
                    {operator.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
