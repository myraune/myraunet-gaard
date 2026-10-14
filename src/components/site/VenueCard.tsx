import Link from "next/link";
import type { Venue } from "@/lib/content";
import { Photo } from "./Bits";

/** Kompakt lokalekort til forsiden: avrundet bilde, tekst under, ingen kortflate. */
export default function VenueCard({ venue }: { venue: Venue }) {
  const href = `/lokaler/${venue.slug}`;

  return (
    <article>
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Photo
            src={venue.images[0].src}
            alt={venue.images[0].alt}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl font-light text-foreground">
          <Link href={href} className="hover:text-primary">
            {venue.name}
          </Link>
        </h3>
        <p className="shrink-0 font-serif text-lg text-primary">{venue.price}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{venue.lead}</p>
    </article>
  );
}
