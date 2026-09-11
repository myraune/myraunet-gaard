import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { lodging } from "@/lib/content";
import PlatformRow from "./PlatformRow";

/**
 * Slide-down på forsiden. Native <details>, så den virker uten JS og med
 * redusert bevegelse. Viser de seks stedene i kortform og peker til /overnatting.
 */
export default function LodgingBar() {
  return (
    <details className="group border-b border-border bg-secondary/40">
      <summary className="mx-auto flex max-w-7xl cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-8 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Gjester langveisfra?
          </span>
          <span className="text-sm text-foreground md:text-base">
            Overnatting på Frosta fra kr 990 per natt. Hotell, sjøbuer, Airbnb og Booking.com.
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">
          <span className="hidden sm:inline">Vis steder</span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden />
        </span>
      </summary>

      <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <ul className="grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {lodging.map((place) => (
            <li key={place.slug} className="border-b border-border py-5 lg:pr-8">
              <div className="flex items-center gap-3">
                {place.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={place.logo.src}
                    alt={place.logo.alt}
                    className={place.logo.shape === "square" ? "h-8 w-8 object-contain" : "h-8 w-auto max-w-[110px] object-contain"}
                  />
                ) : null}
                <span className="font-serif text-lg text-foreground">{place.name}</span>
                {place.family && (
                  <span className="bg-primary px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground">
                    Slekt
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{place.detail}</p>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <span className="font-serif text-lg text-foreground">{place.priceFrom}</span>
                <a
                  href={place.bookUrl ?? place.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
                >
                  Book
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <PlatformRow compact />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link
            href="/overnatting"
            className="text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
          >
            Alle steder med bilder og priser
          </Link>
          <span>Plass til over 100 biler på tunet, så gjestene kan kjøre.</span>
        </div>
      </div>
    </details>
  );
}
