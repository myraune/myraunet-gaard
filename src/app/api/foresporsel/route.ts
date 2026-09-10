import { NextResponse } from "next/server";
import { site } from "@/lib/content";

export const runtime = "nodejs";

type Payload = {
  navn?: string;
  epost?: string;
  telefon?: string;
  anledning?: string;
  lokale?: string;
  dato?: string;
  gjester?: string;
  melding?: string;
  /** Honningkrukke. Fylt ut betyr bot. */
  nettside?: string;
};

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ugyldig forespørsel." },
      { status: 400 },
    );
  }

  if (clean(body.nettside)) {
    // Bot fylte ut det skjulte feltet. Svar som om alt gikk bra.
    return NextResponse.json({ ok: true });
  }

  const navn = clean(body.navn, 120);
  const epost = clean(body.epost, 160);
  const telefon = clean(body.telefon, 40);
  const anledning = clean(body.anledning, 80);
  const lokale = clean(body.lokale, 80);
  const dato = clean(body.dato, 40);
  const gjester = clean(body.gjester, 20);
  const melding = clean(body.melding, 4000);

  if (!navn || (!epost && !telefon)) {
    return NextResponse.json(
      { ok: false, error: "Fyll inn navn og enten e-post eller telefon." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.FORESPORSEL_FROM ?? "Myraunet Gård <onboarding@resend.dev>";
  const to = process.env.FORESPORSEL_TO ?? site.email;

  if (!apiKey) {
    // Ingen e-posttjeneste satt opp ennå. Klienten faller tilbake til e-postklient.
    return NextResponse.json(
      { ok: false, fallback: "mailto" },
      { status: 503 },
    );
  }

  const lines = [
    ["Navn", navn],
    ["E-post", epost],
    ["Telefon", telefon],
    ["Anledning", anledning],
    ["Lokale", lokale],
    ["Dato", dato],
    ["Antall gjester", gjester],
  ].filter(([, value]) => Boolean(value));

  const text = [
    ...lines.map(([label, value]) => `${label}: ${value}`),
    "",
    "Melding:",
    melding || "(ingen)",
    "",
    `Sendt fra ${site.url}`,
  ].join("\n");

  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:400">Ny forespørsel fra myraunet.no</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${lines
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 16px 4px 0;color:#666">${label}</td><td style="padding:4px 0"><strong>${value}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${
      melding || "(ingen melding)"
    }</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: epost || undefined,
        subject: `Forespørsel: ${anledning || "arrangement"}${dato ? ` ${dato}` : ""} - ${navn}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend svarte", response.status, detail);
      return NextResponse.json(
        { ok: false, fallback: "mailto" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Klarte ikke sende forespørsel", error);
    return NextResponse.json({ ok: false, fallback: "mailto" }, { status: 502 });
  }
}
