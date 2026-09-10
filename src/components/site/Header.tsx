"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { eventTypes, site, venues } from "@/lib/content";

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
  {
    label: "Arrangement",
    href: "/arrangement",
    children: eventTypes.map((e) => ({
      label: e.navLabel,
      href: `/arrangement/${e.slug}`,
    })),
  },
  { label: "Priser", href: "/priser" },
  { label: "Galleri", href: "/galleri" },
  { label: "Historie", href: "/historie" },
  { label: "Familiebedriften", href: "/familiebedriften" },
];

export default function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const light = overHero && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors ${
            light
              ? "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
              : "text-foreground hover:text-primary"
          }`}
        >
          Myraunet Gård
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenGroup(link.href)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                    light
                      ? "text-white/90 hover:text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
                      : active
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />
                  )}
                </Link>

                {link.children && openGroup === link.href && (
                  <div className="absolute left-0 top-full w-60 pt-2">
                    <div className="rounded-md border border-border bg-card py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
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
            className={`ml-3 rounded-sm px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
              light
                ? "bg-white/95 text-forest-dark hover:bg-white"
                : "bg-primary text-primary-foreground hover:bg-forest-dark"
            }`}
          >
            Send forespørsel
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
          className={`flex h-11 w-11 items-center justify-center lg:hidden ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <span className="font-serif text-xl font-medium">Myraunet Gård</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Lukk meny"
              className="flex h-11 w-11 items-center justify-center text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-5 pb-16">
            {links.map((link) => (
              <div key={link.href} className="border-b border-border/60 py-1">
                <Link
                  href={link.href}
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
                        className="block py-2 text-sm uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/kontakt"
              className="mt-8 block bg-primary px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground"
            >
              Send forespørsel
            </Link>
            <a
              href={site.phoneHref}
              className="mt-3 block border border-border px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-foreground"
            >
              Ring {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
