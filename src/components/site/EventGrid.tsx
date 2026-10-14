import Link from "next/link";
import { eventTypes } from "@/lib/content";
import { Photo } from "./Bits";

/** Bilde med tekst under. Ingen tekst oppå fotoet, derfor ingen mørkning. */
export default function EventGrid() {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
      {eventTypes.map((event) => (
        <Link
          key={event.slug}
          href={`/arrangement/${event.slug}`}
          className="group block"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Photo
              src={event.image.src}
              alt={event.image.alt}
              className="transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <h3 className="mt-4 font-serif text-2xl font-light text-foreground transition-colors group-hover:text-primary md:text-[1.75rem]">
            {event.navLabel}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{event.venue}</p>
        </Link>
      ))}
    </div>
  );
}
