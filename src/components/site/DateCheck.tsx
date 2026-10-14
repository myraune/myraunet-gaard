"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

/** Svakt tonet felt som står seg både på hvit flate og på tonede bannere. */
const felt =
  "mt-2 w-full rounded-2xl bg-foreground/[0.06] px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:bg-white focus:ring-2 focus:ring-primary/40";

const label = "block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground";

/**
 * Tre felt, ett spørsmål: er datoen ledig?
 * Resten spør Gustav om når han ringer tilbake.
 */
export default function DateCheck({
  anledning = "Arrangement",
  lokale = "Vet ikke ennå",
}: {
  anledning?: string;
  lokale?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ dato: "", navn: "", epost: "", nettside: "" });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const mailto = () => {
    const subject = `Er ${form.dato || "datoen"} ledig? ${anledning}`;
    const body = `Navn: ${form.navn}\nE-post: ${form.epost}\nAnledning: ${anledning}\nLokale: ${lokale}\nDato: ${form.dato}\n`;
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.navn.trim() || !form.epost.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/foresporsel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          anledning,
          lokale,
          melding: `Sjekk av dato fra ${anledning.toLowerCase()}-siden.`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }
      window.location.href = mailto();
      setStatus("mailto");
    } catch {
      window.location.href = mailto();
      setStatus("mailto");
    }
  };

  if (status === "sent") {
    return (
      <p className="rounded-2xl bg-white px-5 py-4 text-base text-foreground">
        Takk. Vi sjekker datoen og svarer deg på e-post.
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.2fr_auto] lg:items-end"
      noValidate
    >
      <div>
        <label className={label} htmlFor={`dc-dato-${anledning}`}>
          Dato
        </label>
        <input
          id={`dc-dato-${anledning}`}
          value={form.dato}
          onChange={(e) => set("dato")(e.target.value)}
          className={felt}
          placeholder="Lørdag 12. juni 2027"
        />
      </div>
      <div>
        <label className={label} htmlFor={`dc-navn-${anledning}`}>
          Navn
        </label>
        <input
          id={`dc-navn-${anledning}`}
          value={form.navn}
          onChange={(e) => set("navn")(e.target.value)}
          className={felt}
          placeholder="Fornavn holder"
          autoComplete="given-name"
        />
      </div>
      <div className="sm:col-span-2 lg:col-span-1">
        <label className={label} htmlFor={`dc-epost-${anledning}`}>
          E-post
        </label>
        <input
          id={`dc-epost-${anledning}`}
          type="email"
          value={form.epost}
          onChange={(e) => set("epost")(e.target.value)}
          className={felt}
          placeholder="navn@epost.no"
          autoComplete="email"
        />
      </div>
      <div className="hidden" aria-hidden>
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.nettside}
          onChange={(e) => set("nettside")(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-full bg-primary px-7 text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-forest-dark disabled:opacity-60 sm:col-span-2 lg:col-span-1"
      >
        {status === "sending" ? "Sender..." : "Sjekk datoen"}
      </button>

      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-2 lg:col-span-4">
          Skriv inn navn og e-post, så vet vi hvem vi skal svare.
        </p>
      )}
      {status === "mailto" && (
        <p className="text-sm text-muted-foreground sm:col-span-2 lg:col-span-4">
          Vi åpnet e-postprogrammet ditt med spørsmålet ferdig skrevet. Send det derfra.
        </p>
      )}
      <p className="text-xs text-muted-foreground sm:col-span-2 lg:col-span-4">
        Uforpliktende. Vi svarer på e-post, og ringer bare om dere vil.
      </p>
    </form>
  );
}
