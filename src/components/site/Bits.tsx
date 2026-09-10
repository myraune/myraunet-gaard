import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "light";
}) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
        tone === "light" ? "text-cream/70" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={`${tone === "muted" ? "bg-secondary/40" : "bg-background"} py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

export function FactList({
  items,
  tone = "ink",
}: {
  items: { label: string; value: string }[];
  tone?: "ink" | "light";
}) {
  return (
    <dl
      className={`divide-y ${tone === "light" ? "divide-cream/15" : "divide-border"}`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
        >
          <dt
            className={`text-[11px] font-medium uppercase tracking-[0.16em] ${
              tone === "light" ? "text-cream/50" : "text-muted-foreground"
            }`}
          >
            {item.label}
          </dt>
          <dd
            className={`text-right text-sm md:text-base ${
              tone === "light" ? "text-cream" : "text-foreground"
            }`}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-sm px-7 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-forest-dark",
    outline:
      "border border-foreground/25 text-foreground hover:border-primary hover:text-primary",
    light: "bg-cream text-forest-dark hover:bg-white",
  }[variant];

  if (external) {
    return (
      <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-20 md:min-h-[64vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.82)_26%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Se om datoen er ledig",
  lead = "Send en uforpliktende forespørsel med dato og antall gjester, så tar vi kontakt.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-forest-dark py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/75">{lead}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/kontakt" variant="light">
              Send forespørsel
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
