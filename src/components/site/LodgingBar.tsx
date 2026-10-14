import Link from "next/link";
import { lodging, lodgingTeaser } from "@/lib/content";
import { wrap } from "./Bits";
import PlatformRow from "./PlatformRow";

/**
 * Slide-down på forsiden. Native <details>, så den virker uten JS og med
 * redusert bevegelse. Viser stedene i kortform og peker til /overnatting.
 */
export default function LodgingBar() {
  return (
    <div className="py-2 md:py-3">
      <div className={wrap}>
        <details className="group rounded-3xl bg-tint-cream">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-5 py-5 md:px-12 [&::-webkit-details-marker]:hidden">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                {lodgingTeaser.eyebrow}
              </span>
              <span className="text-sm text-foreground md:text-base">{lodgingTeaser.text}</span>
            </span>
            <span className="shrink-0 rounded-full bg-foreground/[0.06] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-foreground">
              <span className="group-open:hidden">Vis steder</span>
              <span className="hidden group-open:inline">Skjul</span>
            </span>
          </summary>

          <div className="px-5 pb-8 md:px-12">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lodging.map((place) => (
                <li key={place.slug} className="rounded-2xl bg-white p-5">
                  <div className="flex flex-wrap items-center gap-3">
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
                      <span className="rounded-full bg-primary px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground">
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
              <span>{lodgingTeaser.parking}</span>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
