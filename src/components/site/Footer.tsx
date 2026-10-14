import Link from "next/link";
import { eventTypes, site, venues } from "@/lib/content";
import { Banner, wrap } from "./Bits";

const columns = [
  {
    title: "Lokaler",
    links: venues.map((v) => ({ label: v.name, href: `/lokaler/${v.slug}` })),
  },
  {
    title: "Arrangement",
    links: eventTypes.map((e) => ({
      label: e.navLabel,
      href: `/arrangement/${e.slug}`,
    })),
  },
  {
    title: "Gården",
    links: [
      { label: "Priser", href: "/priser" },
      { label: "Overnatting", href: "/overnatting" },
      { label: "For gjester", href: "/for-gjester" },
      { label: "Galleri", href: "/galleri" },
      { label: "Historie", href: "/historie" },
      { label: "Familiebedriften", href: "/familiebedriften" },
    ],
  },
];

const linkClass = "transition-colors hover:text-primary";

export default function Footer() {
  return (
    <footer className="pb-4 pt-6 md:pb-6 md:pt-10">
      <div className={wrap}>
        <Banner tone="cream">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-serif text-2xl text-foreground">{site.name}</p>
              <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-foreground/80">
                <p>{site.address.street}</p>
                <p>
                  {site.address.postal} {site.address.city}
                </p>
                <p className="pt-3">
                  <a href={site.phoneHref} className={linkClass}>
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    {site.email}
                  </a>
                </p>
              </address>

              <div className="mt-6 flex flex-col gap-2 text-sm text-foreground/80">
                <a href={site.facebook} target="_blank" rel="noreferrer" className={linkClass}>
                  Facebook
                </a>
                <a href={site.olavsrosa} target="_blank" rel="noreferrer" className={linkClass}>
                  Olavsrosa, Norsk Kulturarv
                </a>
                <a href={site.mapLink} target="_blank" rel="noreferrer" className={linkClass}>
                  Veibeskrivelse
                </a>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-foreground/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              Drives av {site.drivers} siden {site.driversSince}.
            </p>
            <p>
              <Link href="/kontakt" className={linkClass}>
                Send forespørsel
              </Link>
            </p>
          </div>
        </Banner>
      </div>
    </footer>
  );
}
