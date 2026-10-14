import { mapCopy, site, travel } from "@/lib/content";
import { FactList } from "./Bits";

export default function MapBlock() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
      <div>
        <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
          {mapCopy.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {mapCopy.text}
        </p>
        <div className="mt-6">
          <FactList
            items={[
              {
                label: "Adresse",
                value: `${site.address.street}, ${site.address.postal} ${site.address.city}`,
              },
              ...travel,
              {
                label: "Koordinater",
                value: `${site.coordinates.lat}, ${site.coordinates.lng}`,
              },
            ]}
          />
        </div>
        <a
          href={site.mapLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-[44px] items-center text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
        >
          Åpne i Google Maps
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl">
        <iframe
          title="Kart over Myraunet Gård"
          src={site.mapEmbed}
          className="block h-[380px] w-full md:h-[460px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
