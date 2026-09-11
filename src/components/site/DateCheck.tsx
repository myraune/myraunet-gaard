"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const felt =
  "w-full border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

/**
 * Tre felt, ett spørsmål: er datoen ledig?
 * Resten spør Gustav om når han ringer tilbake.
 */
export default function DateCheck({
  anledning = "Arrangement",
  lokale = "Vet ikke ennå",
  tone = "ink",
}: {
  anledning?: string;
  lokale?: string;
  tone?: "ink" | "light";
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

  const light = tone === "light";
  const label = `block text-[11px] font-medium uppercase tracking-[0.16em] ${
    light ? "text-cream/60" : "text-muted-foreground"
  }`;

  if (status === "sent") {
    return (
      <p
        className={`border px-5 py-4 text-base ${
          light
            ? "border-cream/30 text-cream"
            : "border-primary/40 bg-secondary/50 text-foreground"
        }`}
      >
        Takk. Vi sjekker datoen og svarer deg på e-post.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-[1.1fr_1fr_1.2fr_auto] sm:items-end" noValidate>
      <div>
        <label className={label} htmlFor={`dc-dato-${anledning}`}>
          Dato
        </label>
        <input
          id={`dc-dato-${anledning}`}
          value={form.dato}
          onChange={(e) => set("dato")(e.target.value)}
          className={`${felt} mt-2`}
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
          className={`${felt} mt-2`}
          placeholder="Fornavn holder"
          autoComplete="given-name"
        />
      </div>
      <div>
        <label className={label} htmlFor={`dc-epost-${anledning}`}>
          E-post
        </label>
        <input
          id={`dc-epost-${anledning}`}
          type="email"
          value={form.epost}
          onChange={(e) => set("epost")(e.target.value)}
          className={`${felt} mt-2`}
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
        className={`inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-sm px-7 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors disabled:opacity-60 ${
          light
            ? "bg-cream text-forest-dark hover:bg-white"
            : "bg-primary text-primary-foreground hover:bg-forest-dark"
        }`}
      >
        {status === "sending" ? "Sender..." : "Sjekk datoen"}
      </button>

      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-4">
          Skriv inn navn og e-post, så vet vi hvem vi skal svare.
        </p>
      )}
      {status === "mailto" && (
        <p className={`text-sm sm:col-span-4 ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          Vi åpnet e-postprogrammet ditt med spørsmålet ferdig skrevet. Send det derfra.
        </p>
      )}
      <p className={`text-xs sm:col-span-4 ${light ? "text-cream/50" : "text-muted-foreground"}`}>
        Uforpliktende. Vi svarer på e-post, og ringer bare om dere vil.
      </p>
    </form>
  );
}
