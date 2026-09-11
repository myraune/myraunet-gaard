import Link from "next/link";
import { eventTypes, site, venues } from "@/lib/content";

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
      { label: "Galleri", href: "/galleri" },
      { label: "Historie", href: "/historie" },
      { label: "Familiebedriften", href: "/familiebedriften" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest-dark/20 bg-forest-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-cream">Myraunet Gård</p>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed">
              <p>{site.address.street}</p>
              <p>
                {site.address.postal} {site.address.city}
              </p>
              <p className="pt-3">
                <a href={site.phoneHref} className="hover:text-cream">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-cream">
                  {site.email}
                </a>
              </p>
            </address>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                Facebook
              </a>
              <a
                href={site.olavsrosa}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                Olavsrosa, Norsk Kulturarv
              </a>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                Veibeskrivelse
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/50">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Drives av {site.drivers} siden {site.driversSince}.
          </p>
          <p>
            <Link href="/kontakt" className="hover:text-cream">
              Send forespørsel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
