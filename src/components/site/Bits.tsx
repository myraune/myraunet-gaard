import Link from "next/link";
import type { ReactNode } from "react";
import { cta } from "@/lib/content";

/** Felles bredde. Banner og seksjoner sitter alltid inni denne, aldri kant i kant. */
export const wrap = "mx-auto w-full max-w-7xl px-4 md:px-8";

type Tint = "cream" | "sage";

const tints: Record<Tint, string> = {
  cream: "bg-tint-cream",
  sage: "bg-tint-sage",
};

/** Ett bilde, ett sted for lint-unntaket. Vi unngår next/image for å slippe målt bildeoptimalisering hos Vercel. */
export function Photo({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

/** Avrundet, svakt tonet flate. Ingen kantlinje. */
export function Banner({
  children,
  tone = "cream",
  className = "",
}: {
  children: ReactNode;
  tone?: Tint;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl px-5 py-10 md:rounded-[2.5rem] md:px-12 md:py-14 lg:px-16 lg:py-16 ${tints[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * "default" er hvit bakgrunn med luft rundt.
 * "muted" og "sage" legger innholdet i en avrundet tonet banner.
 */
export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "sage";
}) {
  const spacing = tone === "default" ? "py-12 md:py-20" : "py-2 md:py-3";
  const content =
    tone === "default" ? (
      children
    ) : (
      <Banner tone={tone === "sage" ? "sage" : "cream"}>{children}</Banner>
    );

  return (
    <section id={id} className={`${spacing} ${className}`}>
      <div className={wrap}>{content}</div>
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
      <h2 className="mt-4 font-serif text-3xl font-light leading-[1.12] text-foreground md:text-4xl lg:text-[2.75rem]">
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

export function FactList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-foreground/10">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
        >
          <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-right text-sm text-foreground md:text-base">
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
  variant?: "primary" | "soft";
  external?: boolean;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-forest-dark",
    soft: "bg-foreground/[0.06] text-foreground hover:bg-foreground/[0.12]",
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

/**
 * Sidetopp: tonet banner med tekst og et avrundet bilde side om side.
 * Ingen tekst oppå bildet, derfor ingen mørkning av fotoet.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  priority = false,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="pb-2 pt-2 md:pb-3 md:pt-3">
      <div className={wrap}>
        <div className="grid overflow-hidden rounded-3xl bg-tint-cream md:rounded-[2.5rem] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center px-5 py-10 md:px-12 md:py-14 lg:px-16 lg:py-20">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-[2.4rem] font-light leading-[1.08] text-foreground md:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {lead}
              </p>
            )}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          <div className="p-3 md:p-4 lg:pl-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <Photo src={image} alt={alt} eager={priority} className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = cta.title,
  lead = cta.lead,
  children,
}: {
  title?: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-2 md:py-3">
      <div className={wrap}>
        <Banner tone="sage">
          <div
            className={
              children
                ? "grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14"
                : "grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
            }
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {lead}
              </p>
            </div>
            {children ?? (
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/kontakt">{cta.button}</ButtonLink>
              </div>
            )}
          </div>
        </Banner>
      </div>
    </section>
  );
}
