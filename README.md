# Myraunet Gård

Nettsted for Myraunet Gård på Frosta i Trøndelag: selskapslokaler, arrangement,
priser, gårdshistorie og familiebedriften bak RÅGO.

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v3
- Dev: `npm run dev -- --port 3024`
- Prod: myraunet.no (per september 2026 serverer domenet fortsatt den gamle
  PHP-siden, dette prosjektet er ikke satt på domenet ennå)

## Struktur

| Rute | Innhold |
| --- | --- |
| `/` | Forside: hero, gården, lokaler, arrangement, priser, galleri, FAQ, kart |
| `/lokaler` + `/lokaler/[slug]` | Gildesalen, Grisehuset, Stabburet |
| `/arrangement` + `/arrangement/[slug]` | Bryllup, konfirmasjon, julebord, kurs og konferanse |
| `/priser` | Full prisliste, inkludert og ikke inkludert |
| `/galleri` | Filtrerbart galleri med lightbox |
| `/historie` | Milepæler fra 1557 og hele brukerrekka |
| `/familiebedriften` | Hanne og Gustav, RÅGO |
| `/kontakt` | Forespørselsskjema, kontaktinfo, kart |

## Innhold er data, ikke markup

Alle tall, priser, lokaler, arrangementstyper, FAQ og bildetekster ligger i
`src/lib/content.ts`. Endre der, ikke i komponentene, så holder sidene seg like.

Kilden til faktaopplysningene er den gamle myraunet.no (lokaler, priser per
20.04.2020, gårdshistorien og brukerrekka). Ikke legg til påstander som ikke
står der eller er bekreftet av Hanne og Gustav.

### Bilder

Bildene fra Lovable-porten var feilmerket. Fasiten er de navngitte filene på
gamle myraunet.no (`imgs/gildesalen.jpg`, `imgs/grisehuset.jpg`,
`imgs/stabbur.jpg`). Kort fortalt:

- Gildesalen: tømmersalen med mørke tømmervegger og runde stolper
- Grisehuset: salen med lys mur, én midtstolpe og filleryer på gulvet
- Stabburet: `stabbur.jpg`

## Forespørselsskjemaet

`/kontakt` poster til `/api/foresporsel`, som sender e-post via Resend når
`RESEND_API_KEY` er satt. Uten nøkkel svarer ruta 503 med `fallback: "mailto"`,
og skjemaet åpner besøkendes e-postklient med alt ferdig utfylt. Se
`.env.example`.

Skjemaet har en skjult honningkrukke (`nettside`). Poster med det feltet utfylt
får 200 uten at det sendes noe.

## Vercel

Push til `main` utløser en betalt cloud-build. Batch pushene, se `CLAUDE.md`.
