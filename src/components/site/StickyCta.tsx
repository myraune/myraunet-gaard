"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

/** Fast knapperad nederst på mobil. Skjult på kontaktsiden, der skjemaet allerede er. */
export default function StickyCta() {
  const pathname = usePathname();
  if (pathname === "/kontakt") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <Link
        href="/kontakt"
        className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-primary text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground"
      >
        Sjekk om datoen er ledig
      </Link>
      <a
        href={site.phoneHref}
        className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-border px-4 text-[13px] font-medium uppercase tracking-[0.14em] text-foreground"
      >
        Ring
      </a>
    </div>
  );
}
