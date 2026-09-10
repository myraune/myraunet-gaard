import { site } from "@/lib/content";
import { FactList } from "./Bits";

export default function MapBlock() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
      <div>
        <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
          Slik finner dere fram
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Gården ligger i Kvamdalsvegen på Frosta, med utsikt over
          jordbrukslandskapet. Det er god plass til parkering på tunet.
        </p>
        <div className="mt-7 border-t border-border">
          <FactList
            items={[
              { label: "Adresse", value: `${site.address.street}, ${site.address.postal} ${site.address.city}` },
              { label: "Fra Trondheim", value: "ca. 1 time" },
              { label: "Fra Stjørdal", value: "ca. 30 minutter" },
              { label: "Fra Levanger", value: "ca. 30 minutter" },
              { label: "Koordinater", value: `${site.coordinates.lat}, ${site.coordinates.lng}` },
            ]}
          />
        </div>
        <a
          href={site.mapLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-[44px] items-center text-[13px] font-medium uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
        >
          Åpne i Google Maps
        </a>
      </div>

      <div className="overflow-hidden border border-border">
        <iframe
          title="Kart over Myraunet Gård"
          src={site.mapEmbed}
          className="h-[380px] w-full md:h-[460px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
