"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { eventTypes, site, venues } from "@/lib/content";
import { wrap } from "./Bits";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const links: NavLink[] = [
  {
    label: "Lokaler",
    href: "/lokaler",
    children: venues.map((v) => ({ label: v.name, href: `/lokaler/${v.slug}` })),
  },
  { label: "Bryllup", href: "/arrangement/bryllup" },
  {
    label: "Arrangement",
    href: "/arrangement",
    children: eventTypes
      .filter((e) => e.slug !== "bryllup")
      .map((e) => ({ label: e.navLabel, href: `/arrangement/${e.slug}` })),
  },
  { label: "Priser", href: "/priser" },
];

/** Sekundært, kun i mobilmenyen. På desktop lever disse i footeren. */
const secondary = [
  { label: "Overnatting", href: "/overnatting" },
  { label: "Galleri", href: "/galleri" },
  { label: "Historie", href: "/historie" },
  { label: "Familiebedriften", href: "/familiebedriften" },
];

const pill =
  "inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors";

/**
 * Klistrer seg øverst, hvit og ugjennomsiktig. Ingen backdrop-filter, for den
 * ville gjort den faste mobilmenyen relativ til headeren i stedet for skjermen.
 * Desktop-menyen åpnes med CSS (hover og fokus), så den virker uten state.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-tight text-foreground transition-colors hover:text-primary md:text-2xl"
        >
          {site.name}
        </Link>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.children !== undefined &&
                pathname.startsWith(`${link.href}/`) &&
                !(link.href === "/arrangement" && pathname === "/arrangement/bryllup"));
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`block rounded-full px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors hover:bg-foreground/[0.06] ${
                    active ? "bg-foreground/[0.06] text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>

                {link.children && (
                  <div className="invisible absolute left-0 top-full w-60 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl bg-background p-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-tint-cream hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/kontakt"
            className="ml-3 inline-flex min-h-[44px] items-center rounded-full bg-primary px-6 text-[13px] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-forest-dark"
          >
            Sjekk ledig dato
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-foreground/[0.06] lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden">
          <div className={`${wrap} flex h-20 items-center justify-between`}>
            <span className="font-serif text-xl font-medium">{site.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Lukk meny"
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-foreground/[0.06]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobilmeny" className={`${wrap} pb-16`}>
            {links.map((link) => (
              <div key={link.href} className="border-b border-foreground/10 py-1">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 font-serif text-2xl text-foreground"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pb-3 pl-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6">
              {secondary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className={`${pill} mt-8 w-full bg-primary text-primary-foreground`}
            >
              Sjekk ledig dato
            </Link>
            <a
              href={site.phoneHref}
              className={`${pill} mt-3 w-full bg-foreground/[0.06] text-foreground`}
            >
              Ring {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
