import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Hva er kapasiteten på lokalene?',
      answer: 'Gildesalen kan ta imot opptil 120 gjester, mens Grisehuset er perfekt for intime arrangementer med plass til 40 gjester.',
    },
    {
      question: 'Kan vi leie lokalene til ulike typer arrangementer?',
      answer: 'Ja, våre lokaler er egnet for bryllup, konfirmasjoner, bursdager, firmafester og andre spesielle begivenheter.',
    },
    {
      question: 'Tilbyr dere catering?',
      answer: 'Vi samarbeider med profesjonelle cateringselskaper som kan tilby alt fra enkel servering til flotte middager tilpasset ditt arrangement.',
    },
    {
      question: 'Hvor langt i forveien må vi bestille?',
      answer: 'Vi anbefaler å bestille så tidlig som mulig, spesielt for helger og høytider. Kontakt oss for tilgjengelighet.',
    },
    {
      question: 'Er det parkeringsplass på stedet?',
      answer: 'Ja, vi har god parkeringskapasitet for våre gjester rett ved lokalene.',
    },
    {
      question: 'Kan vi dekorere lokalene selv?',
      answer: 'Absolutt! Vi tilbyr rom for kreativitet, eller vi kan hjelpe med dekorasjon om ønskelig.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-light mb-6 tracking-wide">
            Ofte Stilte Spørsmål
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Finn svar på de vanligste spørsmålene om våre lokaler
          </p>
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
  );
};

export default FAQ;
