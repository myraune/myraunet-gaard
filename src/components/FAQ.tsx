import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Hvor stor kapasitet har lokalene?',
      answer:
        'Gildesalen er 180 kvm og tar ca. 120 personer. Grisehuset er 80 kvm og tar ca. 35 personer. Stabburet brukes hovedsakelig i sommersesongen som lunsjlokale eller til enkel overnatting.',
    },
    {
      question: 'Hva koster det å leie lokalene?',
      answer:
        'Gildesalen koster kr 4 000,- (kr 6 000,- ved leie i tre dager eller mer). Grisehuset koster kr 2 500,- ferdig vasket. Gildesalen og Grisehuset samlet koster kr 5 000,-. Rengjøring og kjøkkenhjelp kommer i tillegg. Alle priser inkl. mva. (gjeldende fra 20.04.2020.)',
    },
    {
      question: 'Tilbyr dere overnatting?',
      answer:
        'Overnatting er dessverre ikke mulig på Myraunet Gård for øyeblikket.',
    },
    {
      question: 'Hvordan bestiller vi lokale?',
      answer:
        'Fyll inn bestillingsskjemaet på siden, eller ta kontakt på telefon 952 84 333 eller e-post gustav@myraune.no. Bestillingen er ikke bindende, og vi tar kontakt så snart vi har mottatt henvendelsen.',
    },
    {
      question: 'Har dere kjøkken og catering?',
      answer:
        'Lokalene har kjøkken som leietaker kan benytte. Leietaker står selv for mat og drikke. Kjøkkenhjelp kan leies for kr 300,- pr. time.',
    },
    {
      question: 'Hvilke arrangement passer lokalene til?',
      answer:
        'Vi har erfaring med bryllup, konfirmasjon, fødselsdag, jubileum og julebord, samt kurs og konferanser. Lokalene har også vært brukt til konsert og moteshow.',
    },
    {
      question: 'Må vi rydde lokalet etter bruk?',
      answer:
        'Ja, leietaker må selv rydde lokalet klart til rengjøring. Rengjøring kan bestilles for kr 1 000,- (Gildesalen) eller kr 500,- (Grisehuset).',
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
