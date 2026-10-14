import { lodgingPlatforms } from "@/lib/content";

/** Airbnb og Booking.com nederst, som store logoflater med lenke til Frosta-søk. */
export default function PlatformRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${compact ? "" : "md:gap-6"}`}>
      {lodgingPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center gap-6 rounded-2xl bg-white shadow-[0_2px_20px_-8px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_6px_28px_-8px_rgba(0,0,0,0.28)] ${
            compact ? "px-5 py-4" : "px-7 py-7"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={platform.logo.src}
            alt={platform.logo.alt}
            className={compact ? "h-7 w-auto max-w-[120px] object-contain" : "h-10 w-auto max-w-[170px] object-contain"}
          />
          <span className="min-w-0">
            {!compact && (
              <span className="block text-sm leading-relaxed text-muted-foreground">
                {platform.note}
              </span>
            )}
            <span className="mt-1 block text-[12px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 group-hover:underline">
              Søk på Frosta
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
