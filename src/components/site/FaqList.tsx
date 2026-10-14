import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export default function FaqList({
  limit,
  items: custom,
}: {
  limit?: number;
  items?: { q: string; a: string }[];
}) {
  const source = custom ?? faqs;
  const items = limit ? source.slice(0, limit) : source;

  return (
    <Accordion type="single" collapsible className="border-t border-foreground/10">
      {items.map((faq, index) => (
        <AccordionItem
          key={faq.q}
          value={`faq-${index}`}
          className="border-b border-foreground/10"
        >
          <AccordionTrigger className="py-5 text-left font-serif text-lg font-normal hover:text-primary md:text-xl">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
