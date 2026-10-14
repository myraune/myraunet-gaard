"use client";

import { useState } from "react";
import { eventTypes, site, venues } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const anledninger = [
  ...eventTypes.map((event) => event.navLabel),
  "Fødselsdag",
  "Jubileum",
  "Minnesamvær",
  "Annet",
];

const felt =
  "w-full rounded-2xl bg-foreground/[0.06] px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:bg-white focus:ring-2 focus:ring-primary/40";
const etikett =
  "block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground";

export default function ForesporselForm({ initialMelding = "" }: { initialMelding?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    navn: "",
    epost: "",
    telefon: "",
    anledning: anledninger[0],
    lokale: venues[0].name,
    dato: "",
    gjester: "",
    melding: initialMelding,
    nettside: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const buildMailto = () => {
    const subject = `Forespørsel: ${form.anledning}${form.dato ? ` ${form.dato}` : ""}`;
    const body = [
      `Navn: ${form.navn}`,
      `E-post: ${form.epost}`,
      `Telefon: ${form.telefon}`,
      `Anledning: ${form.anledning}`,
      `Lokale: ${form.lokale}`,
      `Dato: ${form.dato}`,
      `Antall gjester: ${form.gjester}`,
      "",
      form.melding,
    ].join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!form.navn.trim() || (!form.epost.trim() && !form.telefon.trim())) {
      setError("Fyll inn navn og enten e-post eller telefon.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/foresporsel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.ok) {
        setStatus("sent");
        return;
      }

      if (data.fallback === "mailto") {
        window.location.href = buildMailto();
        setStatus("mailto");
        return;
      }

      setError(data.error ?? "Noe gikk galt. Prøv igjen, eller ring oss.");
      setStatus("error");
    } catch {
      window.location.href = buildMailto();
      setStatus("mailto");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-tint-sage p-8">
        <h3 className="font-serif text-2xl font-light text-foreground">
          Takk, forespørselen er sendt
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Den er ikke bindende. Vi tar kontakt så snart vi har sett på datoen.
          Haster det, ring{" "}
          <a href={site.phoneHref} className="text-primary hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={etikett} htmlFor="navn">
            Navn
          </label>
          <input
            id="navn"
            name="navn"
            required
            autoComplete="name"
            value={form.navn}
            onChange={(e) => set("navn")(e.target.value)}
            className={`${felt} mt-2`}
            placeholder="Ola Nordmann"
          />
        </div>
        <div>
          <label className={etikett} htmlFor="telefon">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            value={form.telefon}
            onChange={(e) => set("telefon")(e.target.value)}
            className={`${felt} mt-2`}
            placeholder="000 00 000"
          />
        </div>
      </div>

      <div>
        <label className={etikett} htmlFor="epost">
          E-post
        </label>
        <input
          id="epost"
          name="epost"
          type="email"
          autoComplete="email"
          value={form.epost}
          onChange={(e) => set("epost")(e.target.value)}
          className={`${felt} mt-2`}
          placeholder="navn@epost.no"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={etikett} htmlFor="anledning">
            Anledning
          </label>
          <select
            id="anledning"
            name="anledning"
            value={form.anledning}
            onChange={(e) => set("anledning")(e.target.value)}
            className={`${felt} mt-2`}
          >
            {anledninger.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={etikett} htmlFor="lokale">
            Ønsket lokale
          </label>
          <select
            id="lokale"
            name="lokale"
            value={form.lokale}
            onChange={(e) => set("lokale")(e.target.value)}
            className={`${felt} mt-2`}
          >
            {venues.map((venue) => (
              <option key={venue.slug} value={venue.name}>
                {venue.name}
              </option>
            ))}
            <option value="Gildesalen og Grisehuset">
              Gildesalen og Grisehuset
            </option>
            <option value="Vet ikke ennå">Vet ikke ennå</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={etikett} htmlFor="dato">
            Dato eller tidsrom
          </label>
          <input
            id="dato"
            name="dato"
            value={form.dato}
            onChange={(e) => set("dato")(e.target.value)}
            className={`${felt} mt-2`}
            placeholder="14. juni 2027, eller en helg i juni"
          />
        </div>
        <div>
          <label className={etikett} htmlFor="gjester">
            Antall gjester
          </label>
          <input
            id="gjester"
            name="gjester"
            inputMode="numeric"
            value={form.gjester}
            onChange={(e) => set("gjester")(e.target.value)}
            className={`${felt} mt-2`}
            placeholder="ca. 60"
          />
        </div>
      </div>

      <div>
        <label className={etikett} htmlFor="melding">
          Melding
        </label>
        <textarea
          id="melding"
          name="melding"
          rows={5}
          value={form.melding}
          onChange={(e) => set("melding")(e.target.value)}
          className={`${felt} mt-2 resize-y`}
          placeholder="Fortell kort om arrangementet, så svarer vi på det som er relevant."
        />
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="nettside">Nettside</label>
        <input
          id="nettside"
          name="nettside"
          tabIndex={-1}
          autoComplete="off"
          value={form.nettside}
          onChange={(e) => set("nettside")(e.target.value)}
        />
      </div>

      {error && (
        <p className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      {status === "mailto" && (
        <p className="rounded-2xl bg-tint-cream px-4 py-3 text-sm text-muted-foreground">
          Vi åpnet e-postprogrammet ditt med forespørselen ferdig utfylt. Send
          den derfra, eller ring {site.phone}.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-8 text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-forest-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sender..." : "Send forespørsel"}
        </button>
        <p className="text-sm text-muted-foreground">
          Forespørselen er ikke bindende.
        </p>
      </div>
    </form>
  );
}
