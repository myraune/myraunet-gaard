import { lodging } from "@/lib/content";

export default function LodgingList() {
  return (
    <ul className="grid gap-px border-t border-border sm:grid-cols-2">
      {lodging.map((place) => (
        <li key={place.name} className="border-b border-border py-6 sm:pr-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {place.type}
          </p>
          <h3 className="mt-2 font-serif text-xl font-normal text-foreground">
            <a
              href={place.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              {place.name}
            </a>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {place.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}
