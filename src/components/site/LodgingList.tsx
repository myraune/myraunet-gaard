import Link from "next/link";
import { lodging } from "@/lib/content";

/** Kompakt liste til bryllupssiden. Full oversikt med bilder ligger på /overnatting. */
export default function LodgingList() {
  return (
    <div>
      <ul className="grid gap-px border-t border-border sm:grid-cols-2">
        {lodging.map((place) => (
          <li key={place.slug} className="border-b border-border py-6 sm:pr-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {place.type}
            </p>
            <h3 className="mt-2 flex items-center gap-3 font-serif text-xl font-normal text-foreground">
              {place.logo?.shape === "square" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={place.logo.src} alt="" className="h-7 w-7 object-contain" />
              )}
              <a href={place.bookUrl ?? place.url} target="_blank" rel="noreferrer" className="hover:text-primary">
                {place.name}
              </a>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{place.detail}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/overnatting"
        className="mt-6 inline-flex min-h-[44px] items-center text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
      >
        Alle steder med bilder og priser
      </Link>
    </div>
  );
}
