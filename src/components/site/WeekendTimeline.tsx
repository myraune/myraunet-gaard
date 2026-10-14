import { weddingDay } from "@/lib/content";
import { Eyebrow } from "./Bits";

/** Fredag til søndag i tre steg. Brukes på bryllupssiden og forsiden. */
export default function WeekendTimeline() {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
      {weddingDay.map((day) => (
        <li key={day.step} className="border-t border-foreground/15 pt-6">
          <Eyebrow>{day.step}</Eyebrow>
          <h3 className="mt-3 font-serif text-2xl font-light text-foreground">{day.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{day.text}</p>
        </li>
      ))}
    </ol>
  );
}
