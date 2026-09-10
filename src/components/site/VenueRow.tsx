import Link from "next/link";
import type { Venue } from "@/lib/content";
import { FactList } from "./Bits";

export default function VenueRow({
  venue,
  index,
}: {
  venue: Venue;
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={flipped ? "md:order-2" : ""}>
        <Link href={`/lokaler/${venue.slug}`} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={venue.images[0].src}
              alt={venue.images[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      </div>

      <div className={flipped ? "md:order-1" : ""}>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
          Lokale {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
          <Link href={`/lokaler/${venue.slug}`} className="hover:text-primary">
            {venue.name}
          </Link>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {venue.lead}
        </p>

        <div className="mt-7 border-t border-border">
          <FactList items={venue.facts} />
        </div>

        <Link
          href={`/lokaler/${venue.slug}`}
          className="mt-7 inline-flex min-h-[44px] items-center text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
        >
          Les mer om {venue.name}
        </Link>
      </div>
    </article>
  );
}
