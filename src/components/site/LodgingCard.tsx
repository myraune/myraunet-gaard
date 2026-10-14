import type { Lodging } from "@/lib/content";
import { Eyebrow, Photo } from "./Bits";

function Logo({ place }: { place: Lodging }) {
  return (
    <div>
      {place.logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={place.logo.src}
          alt={place.logo.alt}
          className={
            place.logo.shape === "square"
              ? "mb-3 h-12 w-12 object-contain"
              : "mb-3 h-14 w-auto max-w-[220px] object-contain"
          }
        />
      )}
      <h2 className="font-serif text-3xl font-light text-foreground">{place.name}</h2>
    </div>
  );
}

const bookButton =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors";

/** Ett overnattingssted. Sitter alltid inni en tonet banner fra siden. */
export default function LodgingCard({ place }: { place: Lodging }) {
  const [main, second] = place.images;

  return (
    <article className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
      <div className="grid grid-cols-[2fr_1fr] gap-3">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl ${second ? "" : "col-span-2"}`}
        >
          <Photo src={main.src} alt={main.alt} className="absolute inset-0" />
        </div>
        {second && (
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl">
            <Photo src={second.src} alt={second.alt} className="absolute inset-0" />
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>{place.type}</Eyebrow>
          {place.family && (
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground">
              {place.family}
            </span>
          )}
        </div>
        <div className="mt-3">
          <Logo place={place} />
        </div>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {place.body}
        </p>

        <dl className="mt-6 divide-y divide-foreground/10 border-t border-foreground/10 text-sm">
          <div className="flex justify-between gap-6 py-3">
            <dt className="text-muted-foreground">Fra</dt>
            <dd className="text-right font-serif text-xl text-foreground">{place.priceFrom}</dd>
          </div>
          <div className="flex justify-between gap-6 py-3">
            <dt className="text-muted-foreground">Plass</dt>
            <dd className="text-right text-foreground">{place.beds}</dd>
          </div>
          <div className="flex justify-between gap-6 py-3">
            <dt className="text-muted-foreground">Hvor</dt>
            <dd className="text-right text-foreground">{place.where}</dd>
          </div>
        </dl>
        {place.priceNote && (
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {place.priceNote}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={place.bookUrl ?? place.url}
            target="_blank"
            rel="noreferrer"
            className={`${bookButton} bg-primary text-primary-foreground hover:bg-forest-dark`}
          >
            {place.bookUrl ? "Se priser og book" : "Gå til nettsiden"}
          </a>
          {place.bookUrl && place.bookUrl !== place.url && (
            <a
              href={place.url}
              target="_blank"
              rel="noreferrer"
              className={`${bookButton} bg-foreground/[0.06] text-foreground hover:bg-foreground/[0.12]`}
            >
              Nettsiden
            </a>
          )}
        </div>
        <p className="mt-4 text-[11px] text-muted-foreground">Kilde: {place.source}</p>
      </div>
    </article>
  );
}
