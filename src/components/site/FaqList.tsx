import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export default function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((faq, index) => (
        <AccordionItem
          key={faq.q}
          value={`faq-${index}`}
          className="border-b border-border"
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
