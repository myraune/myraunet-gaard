import type { Lodging } from "@/lib/content";

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

export default function LodgingCard({ place }: { place: Lodging }) {
  const [main, second] = place.images;

  return (
    <article className="grid gap-6 border-t border-border py-10 md:grid-cols-[1.2fr_1fr] md:gap-12 md:py-14">
      <div className="grid grid-cols-[2fr_1fr] gap-3">
        {main ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={main.src}
            alt={main.alt}
            loading="lazy"
            className={`aspect-[4/3] w-full object-cover ${second ? "" : "col-span-2"}`}
          />
        ) : (
          <div className="col-span-2 flex aspect-[4/3] items-center justify-center border border-border bg-secondary/40">
            <span className="font-serif text-4xl font-light text-primary">Airbnb</span>
          </div>
        )}
        {second && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={second.src}
            alt={second.alt}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        )}
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
          {place.type}
        </p>
        <div className="mt-3">
          <Logo place={place} />
        </div>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {place.body}
        </p>

        <dl className="mt-6 divide-y divide-border border-t border-border text-sm">
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
            className="inline-flex min-h-[44px] items-center rounded-sm bg-primary px-6 text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground hover:bg-forest-dark"
          >
            {place.bookUrl ? "Se priser og book" : "Gå til nettsiden"}
          </a>
          {place.bookUrl && place.bookUrl !== place.url && (
            <a
              href={place.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center px-2 text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
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
