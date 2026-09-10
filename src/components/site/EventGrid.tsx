import Link from "next/link";
import { eventTypes } from "@/lib/content";

export default function EventGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {eventTypes.map((event) => (
        <Link
          key={event.slug}
          href={`/arrangement/${event.slug}`}
          className="group block"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.image.src}
              alt={event.image.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-serif text-2xl font-light text-white md:text-[1.75rem]">
                {event.navLabel}
              </h3>
              <p className="mt-1 text-sm text-cream/80">{event.venue}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
