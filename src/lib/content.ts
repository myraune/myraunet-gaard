/**
 * Én sannhetskilde for alt faktainnhold på myraunet.no.
 *
 * Kilder:
 *  - myraunet.no (gammel side): lokaler, priser (20.04.2020), historie, arrangementstyper
 *  - Olavsrosa/Norsk Kulturarv-oppføringen
 * Ikke skriv tall eller påstander direkte i komponentene. Legg dem her.
 */

export const site = {
  name: "Myraunet Gård",
  tagline: "Opplevelsesgård på Frosta",
  url: "https://myraunet.no",
  address: {
    street: "Kvamdalsvegen 355",
    postal: "7633",
    city: "Frosta",
    region: "Trøndelag",
  },
  phone: "+47 952 84 333",
  phoneHref: "tel:+4795284333",
  email: "gustav@myraune.no",
  coordinates: { lat: 63.607981, lng: 10.799314 },
  drivers: "Hanne Askestad Myraune og Gustav Myraune",
  driversSince: "2013",
  olavsrosa: "https://www.olavsrosa.no/objektinfo.aspx?id=3272851",
  facebook: "https://www.facebook.com/121429851204034",
  mapEmbed:
    "https://www.google.com/maps?q=63.607981,10.799314&z=14&output=embed",
  mapLink: "https://www.google.com/maps?q=63.607981,10.799314",
} as const;

export type Venue = {
  slug: string;
  name: string;
  lead: string;
  body: string[];
  facts: { label: string; value: string }[];
  suits: string[];
  price: string;
  priceNote?: string;
  images: { src: string; alt: string }[];
};

export const venues: Venue[] = [
  {
    slug: "gildesalen",
    name: "Gildesalen",
    lead: "Gårdens gamle fjøs, i dag den største salen. 180 kvm, plass til rundt 120 personer.",
    body: [
      "Gildesalen er vår største sal. Historisk sett var dette gårdens fjøs, hvor hester, kyr og sauer holdt til. Salen har blitt pusset opp i flere omganger, og fremstår nå som et bonderomantisk lokale med mange historiske gjenstander utstilt.",
      "Salen kan innredes med både langbord og gruppebord, og er meget godt egnet til bryllup, jubileer, julebord og andre større tilstelninger. For kurs og konferanser anbefaler vi også Gildesalen.",
    ],
    facts: [
      { label: "Areal", value: "180 kvm" },
      { label: "Kapasitet", value: "ca. 120 personer" },
      { label: "Bordoppsett", value: "Langbord eller gruppebord" },
      { label: "Leiepris", value: "kr 4 000,-" },
    ],
    suits: ["Bryllup", "Jubileum", "Julebord", "Kurs og konferanse", "Konsert"],
    price: "kr 4 000,-",
    priceNote: "Tre dager eller mer: kr 6 000,-",
    images: [
      {
        src: "/lovable-uploads/d4692008-4440-4ffe-95df-334b4f30558e.png",
        alt: "Gildesalen pyntet til selskap, med langbord og hvite stoltrekk under tømmertaket",
      },
      {
        src: "/lovable-uploads/1dbad16c-7bac-40e9-a9c9-38a5475118af.png",
        alt: "Dekket langbord i Gildesalen med markblomster og levende lys",
      },
      {
        src: "/lovable-uploads/36e34f85-cdf6-4bde-a478-d4f040423f4d.png",
        alt: "Bordoppdekning i Gildesalen mot tømmerveggen",
      },
      {
        src: "/lovable-uploads/konferanse-arkiv.jpg",
        alt: "Kurs i Gildesalen med prosjektor og deltakere rundt bordene",
      },
    ],
  },
  {
    slug: "grisehuset",
    name: "Grisehuset",
    lead: "Tømmervegger og mur, 80 kvm og plass til rundt 35 personer. Mye brukt til konfirmasjon.",
    body: [
      "Grisehuset er en noe mindre sal enn Gildesalen. Med sin blanding av tømmervegger og mur har den en trivelig atmosfære, og passer godt til grillfester der grillen står rett utenfor og gjestene kan mingle både inne og ute.",
      "Salen er velegnet for de fleste typer arrangement, og har vært mye brukt til konfirmasjoner. Den innredes best med langbord eller hestesko-bord.",
    ],
    facts: [
      { label: "Areal", value: "80 kvm" },
      { label: "Kapasitet", value: "ca. 35 personer" },
      { label: "Bordoppsett", value: "Langbord eller hestesko" },
      { label: "Leiepris", value: "kr 2 500,- ferdig vasket" },
    ],
    suits: ["Konfirmasjon", "Fødselsdag", "Grillfest", "Mindre selskap"],
    price: "kr 2 500,-",
    priceNote: "Ferdig vasket",
    images: [
      {
        src: "/lovable-uploads/9664c9e0-24d8-4a26-8caa-43143ed756de.png",
        alt: "Grisehuset innvendig, med bordene satt i hestesko rundt midtstolpen",
      },
      {
        src: "/lovable-uploads/64204c1b-f0db-4865-8449-273f477e5561.png",
        alt: "Grisehuset dekket til selskap, med tømmervegger, mur og filleryer på gulvet",
      },
    ],
  },
  {
    slug: "stabburet",
    name: "Stabburet",
    lead: "Rom over flere etasjer, best om sommeren. Brukes som lunsjlokale og pauserom.",
    body: [
      "Stabburet er et bygg med flere muligheter. Det brukes som lunsjlokale eller pauserom, for å variere litt gjennom en helg med seminar.",
      "Lokalene er spredt over flere etasjer, og det er hovedsakelig i andre etasje selve lokalet ligger. Der dekker rommet hele grunnflaten. Stabburet er best egnet i sommersesongen.",
    ],
    facts: [
      { label: "Plassering", value: "Hovedlokale i 2. etasje" },
      { label: "Areal", value: "Hele grunnflaten" },
      { label: "Sesong", value: "Best om sommeren" },
      { label: "Leiepris", value: "Ta kontakt" },
    ],
    suits: ["Lunsjlokale", "Pauserom under seminar", "Mindre samlinger"],
    price: "Ta kontakt",
    images: [
      { src: "/lovable-uploads/stabbur.jpg", alt: "Stabburet, rødmalt og med torvtak, på gårdstunet" },
      {
        src: "/myraunet-gallery/natur/5.jpg",
        alt: "Gårdsvegen og jordene på Myraunet om sommeren",
      },
    ],
  },
];

export const venueBySlug = (slug: string) => venues.find((v) => v.slug === slug);

export type EventType = {
  slug: string;
  name: string;
  navLabel: string;
  lead: string;
  body: string[];
  venue: string;
  season?: string;
  points: { label: string; value: string }[];
  image: { src: string; alt: string };
  metaTitle: string;
  metaDescription: string;
};

export const eventTypes: EventType[] = [
  {
    slug: "bryllup",
    name: "Bryllup på gården",
    navLabel: "Bryllup",
    lead: "Gildesalen tar rundt 120 gjester. Dere tar med egen mat, eget program og egen musikk.",
    body: [
      "Et bryllup i Gildesalen foregår i et gammelt fjøs med tømmer, historiske gjenstander på veggene og gårdstunet rett utenfor døra. Salen tar rundt 120 personer, og kan settes med langbord for hele følget eller gruppebord om dere vil ha løsere stemning.",
      "Dere leier lokalet, og står fritt til å velge mat, drikke, forlovere og program selv. Kjøkkenet kan brukes av leietaker, og kjøkkenhjelp kan leies for kr 300,- pr. time. Grisehuset kan leies i tillegg dersom dere trenger et rom til mingling eller kaffe dagen derpå.",
      "Vær tidlig ute med datoen. Lørdager i juni, juli og august går først.",
    ],
    venue: "Gildesalen",
    season: "Hele året, mest brukt mai til september",
    points: [
      { label: "Lokale", value: "Gildesalen, 180 kvm" },
      { label: "Gjester", value: "ca. 120 personer" },
      { label: "Leiepris", value: "kr 4 000,- (fra kr 6 000,- ved tre dager eller mer)" },
      { label: "Mat og drikke", value: "Dere ordner selv, kjøkken kan benyttes" },
    ],
    image: {
      src: "/lovable-uploads/9bc8604c-b534-4a72-b0b3-e6f5281829a4.png",
      alt: "Brud og bryllupsfølge på gårdstunet foran den røde låven",
    },
    metaTitle: "Bryllup i Trøndelag - Myraunet Gård på Frosta",
    metaDescription:
      "Feir bryllupet i Gildesalen på Myraunet Gård, Frosta. 180 kvm gammelt fjøs med plass til ca. 120 gjester. Leiepris kr 4 000,-. Dere velger mat og program selv.",
  },
  {
    slug: "konfirmasjon",
    name: "Konfirmasjon",
    navLabel: "Konfirmasjon",
    lead: "Grisehuset er det mest brukte lokalet til konfirmasjon. Rundt 35 gjester, kr 2 500,- ferdig vasket.",
    body: [
      "Grisehuset er 80 kvm med tømmervegger og mur, og har vært brukt til konfirmasjoner i mange år. Med langbord eller hestesko sitter rundt 35 gjester godt.",
      "Skal dere være flere, kan Gildesalen leies i stedet, eller begge lokaler samlet for kr 5 000,-. Grillen kan settes rett utenfor Grisehuset, og gjestene kan bevege seg mellom ute og inne.",
      "Grisehuset leies ut ferdig vasket. Leietaker rydder lokalet klart til rengjøring etter bruk.",
    ],
    venue: "Grisehuset",
    season: "Vår og sommer",
    points: [
      { label: "Lokale", value: "Grisehuset, 80 kvm" },
      { label: "Gjester", value: "ca. 35 personer" },
      { label: "Leiepris", value: "kr 2 500,- ferdig vasket" },
      { label: "Flere gjester", value: "Gildesalen, eller begge lokaler kr 5 000,-" },
    ],
    image: {
      src: "/lovable-uploads/64204c1b-f0db-4865-8449-273f477e5561.png",
      alt: "Grisehuset dekket til selskap med bordene i hestesko",
    },
    metaTitle: "Lokale til konfirmasjon på Frosta - Myraunet Gård",
    metaDescription:
      "Grisehuset på Myraunet Gård tar ca. 35 gjester og koster kr 2 500,- ferdig vasket. Mye brukt til konfirmasjon på Frosta i Trøndelag.",
  },
  {
    slug: "julebord",
    name: "Julebord",
    navLabel: "Julebord",
    lead: "En av gårdens faste sesonger. Book tidlig, desemberhelgene går først.",
    body: [
      "Julebord er en av våre sesongbetonte aktiviteter, og alltid en suksess. De landlige og tradisjonsrike omgivelsene setter stemningen før og under julehøytiden.",
      "Gildesalen tar rundt 120 personer med langbord, og passer for bedrifter som samler hele huset. Mindre avdelinger og vennegjenger bruker Grisehuset.",
      "Selv om det er lenge til neste julebord, kan det være greit å være tidlig ute med bestilling av lokale.",
    ],
    venue: "Gildesalen eller Grisehuset",
    season: "November og desember",
    points: [
      { label: "Stort selskap", value: "Gildesalen, ca. 120 personer" },
      { label: "Mindre selskap", value: "Grisehuset, ca. 35 personer" },
      { label: "Begge lokaler", value: "kr 5 000,-" },
      { label: "Kjøkkenhjelp", value: "kr 300,- pr. time" },
    ],
    image: {
      src: "/lovable-uploads/f4efd3f9-3a18-4919-87e9-5870ea799bf2.png",
      alt: "Gårdstunet i snø med lyslenke mellom bygningene",
    },
    metaTitle: "Julebord i Trøndelag - Myraunet Gård på Frosta",
    metaDescription:
      "Julebord på gård i Trøndelag. Gildesalen tar ca. 120 personer, Grisehuset ca. 35. Myraunet Gård på Frosta leier ut lokaler til julebord i november og desember.",
  },
  {
    slug: "kurs-og-konferanse",
    name: "Kurs og konferanse",
    navLabel: "Kurs og konferanse",
    lead: "Gildesalen settes med gruppebord. Stabburet brukes til lunsj og pauser om sommeren.",
    body: [
      "De tradisjonelle bygningene skaper en annen ramme rundt kurs og konferanser enn et hotell gjør. Ta med bedriften hit på en helg, og bland faglig innhold med sosialt samvær.",
      "Gildesalen er den vi anbefaler til kurs. Salen er 180 kvm og kan settes med gruppebord. Om sommeren kan Stabburet brukes som lunsjlokale, slik at dere skifter rom gjennom dagen.",
      "Vi har det meste av utstyret du trenger til konferansen. Ta kontakt for å høre hva som passer til opplegget deres. Blant dem som har hatt samlinger på gården er Nord-Trøndelag Høyre og Frostating.",
    ],
    venue: "Gildesalen, med Stabburet til lunsj",
    season: "Hele året",
    points: [
      { label: "Lokale", value: "Gildesalen, 180 kvm" },
      { label: "Bordoppsett", value: "Gruppebord eller langbord" },
      { label: "Flerdagersleie", value: "kr 6 000,- ved tre dager eller mer" },
      { label: "Lunsj", value: "Stabburet i sommersesongen" },
    ],
    image: {
      src: "/lovable-uploads/1dbad16c-7bac-40e9-a9c9-38a5475118af.png",
      alt: "Gildesalen satt opp med langbord under tømmertaket",
    },
    metaTitle: "Kurs og konferanse på gård i Trøndelag - Myraunet Gård",
    metaDescription:
      "Kurs og konferanse på Myraunet Gård, Frosta. Gildesalen er 180 kvm med gruppebord, kr 6 000,- ved tre dager eller mer. Nord-Trøndelag Høyre og Frostating har vært her.",
  },
];

export const eventBySlug = (slug: string) =>
  eventTypes.find((e) => e.slug === slug);

/** Andre arrangement gården har hatt, hentet fra myraunet.no. */
export const otherOccasions = [
  "Fødselsdag",
  "Jubileum",
  "Konsert",
  "Moteshow",
  "Grillfest",
  "Minnesamvær",
];

export const priceList = {
  updated: "20. april 2020",
  rows: [
    { label: "Gildesalen", value: "kr 4 000,-" },
    { label: "Gildesalen, tre dager eller mer", value: "kr 6 000,-" },
    { label: "Grisehuset, ferdig vasket", value: "kr 2 500,-" },
    { label: "Gildesalen og Grisehuset samlet", value: "kr 5 000,-" },
    { label: "Rengjøring Gildesalen", value: "kr 1 000,-" },
    { label: "Rengjøring Grisehuset", value: "kr 500,-" },
    { label: "Kjøkkenhjelp", value: "kr 300,- pr. time" },
  ],
  notes: [
    "Alle priser er inkl. mva.",
    "Leietaker rydder selv lokalet klart til rengjøring.",
    "Stabburet leies ut etter avtale. Ta kontakt for pris.",
  ],
};

export type Milestone = {
  year: string;
  title: string;
  text: string;
};

export const history: Milestone[] = [
  {
    year: "1557",
    title: "Første gang nevnt",
    text: "Gården er nevnt for første gang i 1557, da under navnet Myrum. Torger Myrum står oppført som bruker frem til 1559.",
  },
  {
    year: "1600 - 1832",
    title: "Under Prestbolet",
    text: "Prestbolet i Frosta, kirkas eiendom, eide Myraunet i over to hundre år. Brukerne drev jorda som leilendinger på vegne av kirka.",
  },
  {
    year: "1728",
    title: "Skyld på 2 øre og 12 marklag",
    text: "I matrikkelen ble gården ført opp med en skyld på 2 øre og 12 marklag. Skyld ble frem til 1838 regnet i spann, øre og marklag, der 1 spann var 3 øre eller 72 marklag, opprinnelig verdien av rundt 15 kilo smør.",
  },
  {
    year: "1832",
    title: "Første kongelige skjøte",
    text: "Jakob Sørensen Myraunet fikk det første kongelige skjøtet på gården, og Myraunet gikk over i privat eie.",
  },
  {
    year: "1835",
    title: "Buskapen registrert",
    text: "Gården hadde 1 hest, 3 kyr, 6 sauer og 1 gris. Såmengden var en halv tønne bygg, fire tønner havre og fem tønner poteter.",
  },
  {
    year: "1864",
    title: "54 dekar dyrka jord",
    text: "Det ble registrert 54 dekar dyrka og 4 dekar dyrkbar jord, samt skog til brensel.",
  },
  {
    year: "2013",
    title: "Hanne og Gustav overtar",
    text: "Hanne Askestad Myraune og Gustav Myraune driver gården videre som familiebedrift, med utleie av lokaler, tradisjonelt jordbruk og lokalmatkonseptet RÅGO.",
  },
];

export const nameOrigin =
  "Navnet er greitt. Sett sammen av myr og øfn, audn. Garden heiter fra begynnelsen av Myr, Myhr, Myer, Myrum, først i 1695 får garden navnet Myr-øfnet. Seinere skifter det mellom myr og Myrøfnet, Myraunet. Siste staving kommer av audn, et øde sted eller gard.";

/** Brukerrekka slik den står i gårdshistorien på myraunet.no. */
export const farmers: { years: string; name: string; current?: boolean }[] = [
  { years: "2013 - ", name: "Gustav og Hanne Myraune", current: true },
  { years: "1982 - 2012", name: "Lars og Kjersti Myraune" },
  { years: "1941 - 1982", name: "Gustav og Juliane Myraunet" },
  { years: "1913 - 1941", name: "Lars og Dina Myraune" },
  { years: "1885 - 1913", name: "Gunnar Andreasen Hovdal" },
  { years: "1868 - 1885", name: "Johan Arnt Andreasen Hovdal" },
  { years: "1866 - 1868", name: "Torsten Olsen Vangberg" },
  { years: "1864 - 1866", name: "Kristian Bernt Magnus Johan-Arntsen Richter" },
  { years: "1832 - 1864", name: "Jakob Sørensen Myraunet" },
  { years: "1797 - 1832", name: "Søren Aagesen" },
  { years: "1780 - 1797", name: "Ole Olsen Myraunet" },
  { years: "1757 - 1780", name: "Ole Amundsen Myraunet" },
  { years: "1739 - 1757", name: "Anders Amundsen" },
  { years: "1734 - 1739", name: "Amund Olsen" },
  { years: "1728 - 1734", name: "Ole Myraunet" },
  { years: "1723 - 1728", name: "Peder Arntsen" },
  { years: "1690 - 1723", name: "Arnt Pedersen Myraunet" },
  { years: "1684 - 1690", name: "Peders enke" },
  { years: "1665 - 1684", name: "Peder Arntsen" },
  { years: "1626 - 1665", name: "Thor Myr" },
  { years: "1610 - 1626", name: "Hallstein Myr" },
  { years: "1557 - 1559", name: "Torger Myrum" },
];

export const faqs = [
  {
    q: "Hvor mange gjester er det plass til?",
    a: "Gildesalen er 180 kvm og tar rundt 120 personer. Grisehuset er 80 kvm og tar rundt 35 personer. Leier dere begge lokalene samlet, kan gjestene bevege seg mellom dem.",
  },
  {
    q: "Hva koster det å leie lokalene?",
    a: "Gildesalen koster kr 4 000,-, eller kr 6 000,- ved leie i tre dager eller mer. Grisehuset koster kr 2 500,- ferdig vasket. Begge lokaler samlet koster kr 5 000,-. Rengjøring og kjøkkenhjelp kommer i tillegg. Alle priser er inkl. mva., og gjelder fra 20. april 2020.",
  },
  {
    q: "Hvordan bestiller vi?",
    a: "Send forespørsel gjennom skjemaet her på siden, eller ring 952 84 333. Forespørselen er ikke bindende, og dere blir kontaktet så snart vi har sett den.",
  },
  {
    q: "Kan vi ordne mat og drikke selv?",
    a: "Ja. Leietaker står selv for mat og drikke, og kan benytte kjøkkenet i lokalet. Trenger dere en hånd, kan kjøkkenhjelp leies for kr 300,- pr. time.",
  },
  {
    q: "Må vi rydde etter oss?",
    a: "Leietaker rydder lokalet klart til rengjøring. Selve rengjøringen kan bestilles for kr 1 000,- i Gildesalen eller kr 500,- i Grisehuset. Grisehuset leies ut ferdig vasket.",
  },
  {
    q: "Hvor sent kan festen vare?",
    a: "Det er ingen faste sluttider og ingen regler for musikk. Gården ligger for seg selv.",
  },
  {
    q: "Er det parkering?",
    a: "Ja, det er plass til over 100 biler på tunet.",
  },
  {
    q: "Tilbyr dere overnatting?",
    a: "Gården har ikke egne senger, men Frosta har hotell, leiligheter, sjøbuer og mange Airbnb-hjem innen kort kjøretur. Se oversikten på overnattingssiden.",
  },
  {
    q: "Hvilke arrangement passer lokalene til?",
    a: "Vi har erfaring med bryllup, konfirmasjon, fødselsdag, jubileum og julebord, i tillegg til kurs og konferanser. Lokalene har også vært brukt til konsert og moteshow.",
  },
  {
    q: "Hvor ligger gården?",
    a: "Myraunet Gård ligger i Kvamdalsvegen 355 på Frosta i Trøndelag, rundt en time fra Trondheim og en halvtime fra Levanger og Stjørdal.",
  },
];

export const galleryImages: { src: string; alt: string; category: string }[] = [
  {
    src: "/lovable-uploads/d4692008-4440-4ffe-95df-334b4f30558e.png",
    alt: "Gildesalen pyntet til selskap med hvite stoltrekk",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/1dbad16c-7bac-40e9-a9c9-38a5475118af.png",
    alt: "Dekket langbord i Gildesalen med markblomster",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/36e34f85-cdf6-4bde-a478-d4f040423f4d.png",
    alt: "Bordoppdekning i Gildesalen mot tømmerveggen",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/9664c9e0-24d8-4a26-8caa-43143ed756de.png",
    alt: "Grisehuset med bordene satt i hestesko rundt midtstolpen",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/64204c1b-f0db-4865-8449-273f477e5561.png",
    alt: "Grisehuset dekket til selskap",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/konferanse-arkiv.jpg",
    alt: "Kurs i Gildesalen med prosjektor og deltakere",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/stabbur.jpg",
    alt: "Stabburet på gårdstunet",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/8d693d87-1eb0-45ba-bdc9-98628553c653.png",
    alt: "Bordblomster av markblomster",
    category: "lokaler",
  },
  {
    src: "/lovable-uploads/9bc8604c-b534-4a72-b0b3-e6f5281829a4.png",
    alt: "Bryllup på tunet foran låven",
    category: "arrangement",
  },
  {
    src: "/lovable-uploads/005935e6-84ba-47b2-a569-9ffd38eef4bf.png",
    alt: "Arrangement på tunet med telt og gjester",
    category: "arrangement",
  },
  {
    src: "/lovable-uploads/15847e16-8ae1-4f0d-9da0-94c9b5c3bb5f.png",
    alt: "Langbord ute på tunet en sommerdag",
    category: "arrangement",
  },
  {
    src: "/lovable-uploads/9d5e3dda-5537-42f2-ade8-1aa6f765f160.png",
    alt: "Folk på vei inn på gårdstunet under et arrangement",
    category: "arrangement",
  },
  {
    src: "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png",
    alt: "Myraunet Gård med gårdsskiltet ved innkjørselen",
    category: "gaarden",
  },
  {
    src: "/lovable-uploads/03fa484d-31d8-47a4-bd67-4209b7ce2200.png",
    alt: "Gårdshunden i trappa opp til våningshuset",
    category: "gaarden",
  },
  {
    src: "/lovable-uploads/5f16316b-2f82-427d-a822-701bdb6c99ed.png",
    alt: "Arkivbilder fra gården på 1970- og 1980-tallet",
    category: "gaarden",
  },
  {
    src: "/lovable-uploads/d21b9ac7-9ce5-45e5-9eae-860aa7a09d45.png",
    alt: "Arkivbilder fra gården på 1900- og 1950-tallet",
    category: "gaarden",
  },
  { src: "/myraunet-gallery/natur/1.jpg", alt: "Sommer på Myraunet Gård", category: "natur" },
  { src: "/myraunet-gallery/natur/2.jpg", alt: "Hagen på tunet en sommerdag", category: "natur" },
  { src: "/myraunet-gallery/natur/3.jpg", alt: "Blomstrende busker på gården", category: "natur" },
  { src: "/myraunet-gallery/natur/4.jpg", alt: "Steinbed med gammelt gårdsredskap", category: "natur" },
  { src: "/myraunet-gallery/natur/5.jpg", alt: "Gårdsvegen og jordene på Frosta", category: "natur" },
  { src: "/myraunet-gallery/natur/6.jpg", alt: "Sommerhimmel over tunet", category: "natur" },
  { src: "/lovable-uploads/f4efd3f9-3a18-4919-87e9-5870ea799bf2.png", alt: "Gårdstunet i snø med lyslenke", category: "vinter" },
  { src: "/lovable-uploads/53837eb3-bffa-4ebf-b555-13df96e1db24.png", alt: "Gårdsskiltet i snø en vinterkveld", category: "vinter" },
  { src: "/myraunet-gallery/vinter/1.jpg", alt: "Vinterlys over jordene", category: "vinter" },
  { src: "/myraunet-gallery/vinter/2.jpg", alt: "Rimfrost og soloppgang på Frosta", category: "vinter" },
  { src: "/myraunet-gallery/vinter/3.jpg", alt: "Opplyste trær på tunet en vinterkveld", category: "vinter" },
  { src: "/myraunet-gallery/vinter/4.jpg", alt: "Vinterhimmel i rosa over gården", category: "vinter" },
];

export const galleryCategories = [
  { id: "alle", label: "Alle" },
  { id: "lokaler", label: "Lokaler" },
  { id: "arrangement", label: "Arrangement" },
  { id: "gaarden", label: "Gården" },
  { id: "natur", label: "Natur" },
  { id: "vinter", label: "Vinter" },
];

/** Praktiske fakta bekreftet av Andreas 2026-09-11. */
export const practical = {
  parking: "Plass til over 100 biler på tunet",
  rules: "Ingen faste sluttider, ingen regler for musikk",
  ceremony: "Vielsen kan holdes ute på tunet",
  catering: "Dere tar med egen mat og drikke, kjøkkenet følger med",
  distance: "Rundt en time fra Trondheim, en halvtime fra Stjørdal og Levanger",
};

export type Lodging = {
  slug: string;
  name: string;
  type: string;
  /** Kort setning til lister og slide-down. */
  detail: string;
  /** Lengre beskrivelse til /overnatting. */
  body: string;
  priceFrom: string;
  priceNote?: string;
  beds: string;
  where: string;
  url: string;
  bookUrl?: string;
  logo?: { src: string; alt: string; shape?: "wide" | "square" };
  images: { src: string; alt: string }[];
  /** Kilde for tall og priser, med dato. */
  source: string;
  /** Kort merkelapp når stedet har en relasjon til gården. */
  family?: string;
};

/**
 * Overnatting på Frosta. Gården har ikke egne senger.
 * Priser hentet fra stedenes egne sider 2026-09-11. Logoer og bilder er
 * stedenes egne, brukt for å vise dem fram og lenke dit.
 */
export const lodging: Lodging[] = [
  {
    slug: "frosta-fjordbuer",
    name: "Frosta Fjordbuer",
    type: "Sjøbuer",
    detail: "Drives av slekta vår. Seks sjøbuer ved fjorden, kr 1 250 til 1 900 per natt, 40 senger totalt.",
    body: "Seks fjordbuer med høy standard nordvest på Frosta, drevet av Per Arne Myraunet på Hellberg Gård. Per Arne er i slekt med oss, og Hellberg er den eneste andre grenen av Myraunet-slekta som fortsatt driver på Frosta. Sammen med Mastua på gården er det 40 senger fordelt på 19 soverom, så et helt bryllupsfølge kan bo samlet. Båtutleie, badstue og gårdsbutikk med egen eplejuice på samme sted.",
    priceFrom: "kr 1 250",
    priceNote: "per bu per natt, kr 1 250 til 1 900 etter størrelse. Ukespris kr 7 800 til 10 850.",
    beds: "6 sjøbuer + Mastua, 40 senger",
    where: "Hellberg Gård, nordsiden av Frosta",
    url: "https://frosta-fjordbuer.no/",
    bookUrl: "https://frosta-fjordbuer.no/frosta-fjordbuer/booking",
    logo: { src: "/overnatting/hellberg-logo.png", alt: "Hellberg Gård", shape: "wide" },
    images: [
      { src: "/overnatting/frosta-fjordbuer-1.jpg", alt: "De røde sjøbuene til Frosta Fjordbuer" },
      { src: "/overnatting/frosta-fjordbuer-2.jpg", alt: "Terrasse med grill og fjordutsikt ved en av sjøbuene" },
    ],
    source: "frosta-fjordbuer.no/frosta-fjordbuer/booking, 2026-09-11",
    family: "I slekt med gården",
  },
  {
    slug: "frosta-brygge",
    name: "Frosta Brygge",
    type: "Hotell",
    detail: "Hotell ved sjøen med egen restaurant. Rom fra kr 1 800 per natt.",
    body: "Hotellrom rett ved fjorden, med sjømatrestaurant i samme bygg. Enkleste valget for gjester som vil ha hotellstandard, frokost og noen å lage maten dagen derpå.",
    priceFrom: "kr 1 800",
    priceNote: "per rom per natt",
    beds: "Hotellrom",
    where: "Småttavegen 80, Frosta",
    url: "https://frostabrygge.no/hotell/",
    logo: { src: "/overnatting/frosta-brygge-logo.svg", alt: "Frosta Brygge", shape: "wide" },
    images: [
      { src: "/overnatting/frosta-brygge-1.jpg", alt: "Solnedgang over fjorden fra Frosta Brygge" },
      { src: "/overnatting/frosta-brygge-2.jpg", alt: "Hotellrom på Frosta Brygge med utsikt mot sjøen" },
    ],
    source: "frostabrygge.no/hotell, 2026-09-11",
  },
  {
    slug: "hauganfjara",
    name: "Hauganfjæra Camping",
    type: "Leiligheter",
    detail: "Fem leiligheter pusset opp i 2024, fra kr 990 per natt. Utsikt mot Trondheim.",
    body: "Fem leiligheter i resepsjonsbygget, alle pusset opp i 2024, med balkong og utsikt over fjorden mot Trondheim. To store med seks sengeplasser og tre små med tre til fire. Klassifisert med fire og fem stjerner av NHO Reiseliv. Sluttvask er inkludert i første natt.",
    priceFrom: "kr 990",
    priceNote: "per natt fra natt to, første natt kr 1 340 inkl. sluttvask (liten leilighet). Stor leilighet kr 1 850 første natt, kr 1 400 etterpå. Sengetøy kr 120 per person.",
    beds: "5 leiligheter, 3 til 6 personer",
    where: "Neset, Frosta",
    url: "https://hauganfjara.no/leiligheter",
    bookUrl: "https://hauganfjara.no/leiligheter",
    logo: { src: "/overnatting/hauganfjara-logo.png", alt: "Hauganfjæra Camping", shape: "square" },
    images: [
      { src: "/overnatting/hauganfjara-1.jpg", alt: "Stue med utsikt mot fjorden i en leilighet på Hauganfjæra" },
      { src: "/overnatting/hauganfjara-2.jpg", alt: "Sofakrok i leilighet på Hauganfjæra Camping" },
      { src: "/overnatting/hauganfjara-3.jpg", alt: "Hauganfjæra Camping med fjorden bak" },
    ],
    source: "hauganfjara.no/informasjon/priser, 2026-09-11",
  },
  {
    slug: "vaagen-fjordbuer",
    name: "Vågen Fjordbuer",
    type: "Hytter",
    detail: "Tre hytter ved sjøen og Snekkerbua med to soverom. Bookes via hotell.no.",
    body: "Tre sjøbuer med kjøkken og bad, sentralt på Frosta, med stor uteplass der ungene kan løpe fritt. I tillegg Snekkerbua, en leilighet med to soverom, terrasse og sjøutsikt. Gratis parkering og elbillader.",
    priceFrom: "Se hotell.no",
    beds: "3 hytter + Snekkerbua",
    where: "Vangbergsvegen, Frosta",
    url: "https://hotell.no/norge/frosta/hotell/vagen-fjordbuer-snekkerbua",
    bookUrl: "https://hotell.no/norge/frosta/hotell/vagen-fjordbuer-snekkerbua",
    images: [
      { src: "/overnatting/vaagen-1.jpg", alt: "De røde sjøbuene til Vågen Fjordbuer" },
      { src: "/overnatting/vaagen-2.jpg", alt: "Utsikt over Trondheimsfjorden fra Vågen" },
    ],
    source: "hotell.no og visitfrosta.no, 2026-09-11",
  },
  {
    slug: "klostergarden",
    name: "Klostergården Tautra",
    type: "Gjestegård",
    detail: "Rundt 30 senger i tre hus ute på Tautra. Frokost inkludert.",
    body: "Lyse rom fordelt på tre hus, kafeen fra tidlig 1800-tall, kårhuset fra 1956 og Ståle-huset fra 2005, med felles bad og en felles stue med langbord. Rundt 30 sengeplasser, frokost, sengetøy og håndklær inkludert. Eget bryggeri og spisested på tunet, og klosterruinene rett ved. Online booking er stengt i lavsesong, ring dem.",
    priceFrom: "På forespørsel",
    beds: "Ca. 30 senger i tre hus",
    where: "Tautra, over moloen fra Frosta",
    url: "https://klostergardentautra.no/nb/sov-hos-oss/",
    logo: { src: "/overnatting/klostergarden-logo.png", alt: "Klostergården Tautra", shape: "square" },
    images: [
      { src: "/overnatting/klostergarden-1.jpg", alt: "Oppredd seng på Klostergården Tautra" },
    ],
    source: "klostergardentautra.no/nb/sov-hos-oss, 2026-09-11",
  },
];

/** Plattformer som samler resten av Frosta. Ligger nederst, under de navngitte stedene. */
export const lodgingPlatforms = [
  {
    name: "Airbnb",
    note: "Flest hele hus og hytter på Frosta. Filtrer på antall gjester.",
    url: "https://www.airbnb.com/frosta-municipality-norway/stays",
    logo: { src: "/overnatting/airbnb-logo.svg", alt: "Airbnb" },
  },
  {
    name: "Booking.com",
    note: "Hotell, leiligheter og hytter på Frosta og i Levanger og Stjørdal.",
    url: "https://www.booking.com/searchresults.html?ss=Frosta%2C+Norway",
    logo: { src: "/overnatting/booking-logo.svg", alt: "Booking.com" },
  },
];

export const weddingFaqs = [
  {
    q: "Kan vi ha vielsen på gården?",
    a: "Ja. Vielsen kan holdes ute på tunet, med Gildesalen som festlokale etterpå. Frosta kirke ligger også i nærheten om dere vil gifte dere der først.",
  },
  {
    q: "Kan vi ta med egen mat og drikke?",
    a: "Ja. Dere leier lokalet og står helt fritt til å velge mat, drikke og hvem som serverer. Kjøkkenet følger med, og kjøkkenhjelp kan leies for kr 300,- pr. time.",
  },
  {
    q: "Hvor sent kan festen vare?",
    a: "Det er ingen faste sluttider og ingen regler for musikk. Gården ligger for seg selv.",
  },
  {
    q: "Hva koster det for hele helga?",
    a: "Gildesalen i tre dager eller mer koster kr 6 000,-. Med rengjøring på kr 1 000,- blir det kr 7 000,- for fredag til søndag. Alle priser er inkl. mva.",
  },
  {
    q: "Hvor kan gjestene overnatte?",
    a: "Gården har ikke egne senger, men slekta vår driver Frosta Fjordbuer med 40 senger på ett sted, og Frosta har ellers hotell, leiligheter og mange Airbnb-hjem innen kort kjøretur. Se lista lenger ned på siden, eller hele oversikten med bilder og priser på overnattingssiden.",
  },
  {
    q: "Er det parkering?",
    a: "Ja, det er plass til over 100 biler på tunet.",
  },
  {
    q: "Hvor tidlig bør vi bestille?",
    a: "Lørdager i juni, juli og august går først. Send dato så svarer vi om den er ledig.",
  },
];

export const weddingDay = [
  {
    step: "Fredag",
    title: "Pynt og rigg",
    text: "Pynt Gildesalen i deres eget tempo, kjør inn drikke og la leverandørene rigge. Ingen andre bruker lokalet samme helg.",
  },
  {
    step: "Lørdag",
    title: "Vielse og fest",
    text: "Vielse ute på tunet eller i Frosta kirke, bilder foran den røde låven, og middag med langbord til 120 gjester i Gildesalen. Festen varer så lenge dere vil.",
  },
  {
    step: "Søndag",
    title: "Rydding og hjemreise",
    text: "Grisehuset passer til dagen derpå med kaffe og rester, om dere vil samle de nærmeste før hjemreisen. Rydd klart til rengjøring, så tar vi resten.",
  },
];

export const weddingIncluded = [
  "Gildesalen for dere alene hele helga",
  "Bord og stoler i salen, langbord eller gruppebord",
  "Kjøkken til leietakers disposisjon",
  "Tunet til vielse, mingling og bilder",
  "Parkering til over 100 biler",
];

export const weddingYouArrange = [
  "Mat og drikke, akkurat slik dere vil ha det",
  "Servering, eller lei kjøkkenhjelp for kr 300,- pr. time",
  "Pynt, blomster og musikk",
  "Overnatting for gjestene, se forslagene under",
];

export const weddingPriceExample = {
  rows: [
    { label: "Gildesalen, fredag til søndag", value: "kr 6 000,-" },
    { label: "Rengjøring etter festen", value: "kr 1 000,-" },
  ],
  total: { label: "Hele helga", value: "kr 7 000,-" },
  note: "Inkl. mva. Grisehuset til dagen derpå og kjøkkenhjelp avtales i tillegg.",
};

/* ------------------------------------------------------------------ */
/* Sidetekster. Tall hentes fra eksportene over, så de aldri driver.   */
/* ------------------------------------------------------------------ */

const weekendTotal = weddingPriceExample.total.value;
const weekendTotalShort = weekendTotal.replace(",-", "");
const oldestYear = history[0].year;
const cheapestLodging = lodging.find((l) => l.slug === "hauganfjara")!.priceFrom;
const kitchenHelp = priceList.rows.find((r) => r.label === "Kjøkkenhjelp")!.value;
const weddingEvent = eventTypes.find((e) => e.slug === "bryllup")!;

export const capacity = { gildesalen: "120", grisehuset: "35" };

export const cta = {
  title: "Se om datoen er ledig",
  lead: "Send en uforpliktende forespørsel med dato og antall gjester, så tar vi kontakt.",
  button: "Send forespørsel",
};

export const visit = {
  button: "Kom og se gården",
  href: "/kontakt?emne=visning",
  message: "Vi vil gjerne komme og se gården.",
};

export const travel = [
  { label: "Fra Trondheim", value: "ca. 1 time" },
  { label: "Fra Stjørdal", value: "ca. 30 minutter" },
  { label: "Fra Levanger", value: "ca. 30 minutter" },
];

export const mapCopy = {
  title: "Slik finner dere fram",
  text: "Gården ligger i Kvamdalsvegen på Frosta, med utsikt over jordbrukslandskapet. Det er god plass til parkering på tunet.",
};

export const lodgingTeaser = {
  eyebrow: "Gjester langveisfra?",
  text: `Overnatting på Frosta fra ${cheapestLodging} per natt. Hotell, sjøbuer, Airbnb og Booking.com.`,
  parking: `${practical.parking}, så gjestene kan kjøre.`,
};

export const home = {
  hero: {
    eyebrow: "Selskapslokaler på Frosta, en time fra Trondheim",
    title: "Fest på gården, med egen mat og drikke og ingen sluttid",
    lead: `Gildesalen tar ${capacity.gildesalen} gjester og koster ${weekendTotalShort} for hele helga. Bryllup, konfirmasjon, julebord og kurs i bygninger som har stått her siden ${oldestYear}.`,
    image: weddingEvent.image.src,
    alt: "Bryllupsfølge på tunet foran den røde låven på Myraunet Gård",
  },
  dateCheck: { eyebrow: "Første spørsmål", title: "Er datoen ledig?" },
  wedding: {
    eyebrow: "Bryllup",
    title: "Hele helga er deres",
    lead: "Gildesalen er for dere alene fra fredag til søndag.",
    link: "Mer om bryllup på gården",
  },
  about: {
    eyebrow: `Opplevelsesgård siden ${site.driversSince}`,
    lead: "Myraunet Gård er en familiebedrift på Frosta. Vi leier ut lokaler til selskap, kurs og konferanser, driver tradisjonelt jordbruk, og pakker sesongens grønnsaker i det som en gang var kufjøset.",
    body: `${site.drivers} har drevet gården siden ${site.driversSince}. Bygningene er de samme som før, med historiske gjenstander på veggene og jordbrukslandskapet rett utenfor. Gården er registrert i Norsk Kulturarv med Olavsrosa.`,
  },
  keyNumbers: [
    { value: capacity.gildesalen, label: "Gjester i Gildesalen, gårdens gamle fjøs" },
    { value: weekendTotalShort, label: "For Gildesalen fredag til søndag, inkl. rengjøring" },
    { value: oldestYear, label: "Første gang gården er nevnt" },
  ],
  venues: {
    eyebrow: "Tre lokaler",
    title: `Fra ${capacity.grisehuset} gjester i Grisehuset til ${capacity.gildesalen} i Gildesalen`,
    lead: "Lokalene kan leies hver for seg eller samlet. Kjøkkenet står til leietakers disposisjon, og dere ordner mat og drikke selv.",
  },
  events: {
    eyebrow: "Anledninger",
    title: "Det som feires her",
    lead: "Vi har erfaring med de store dagene og de faglige helgene. Lokalene har også vært brukt til konsert og moteshow.",
  },
  prices: {
    eyebrow: "Priser",
    title: "Åpne priser, ingen pakkepris",
    lead: "Dere betaler for lokalet. Rengjøring og kjøkkenhjelp kommer i tillegg om dere ønsker det.",
  },
  gallery: {
    eyebrow: "Galleri",
    title: "Gården gjennom året",
    lead: "Sommer, vinter og lokalene innvendig.",
  },
  faq: { eyebrow: "Spørsmål", title: "Det folk lurer på" },
};

export const lokalerPage = {
  metaTitle: "Lokaler til leie på Myraunet Gård",
  metaDescription: `Gildesalen er 180 kvm og tar ca. ${capacity.gildesalen} gjester. Grisehuset er 80 kvm og tar ca. ${capacity.grisehuset}. Stabburet brukes til lunsj om sommeren. Selskapslokaler på Frosta i Trøndelag.`,
  hero: {
    eyebrow: "Lokaler",
    title: "Tre bygninger, tre måter å samle folk på",
    lead: "Alle lokalene ligger på samme tun. Gildesalen og Grisehuset kan leies samlet når selskapet trenger to rom.",
    image: venues[0].images[0].src,
    alt: "Gildesalen pyntet til selskap med langbord og hvite stoltrekk",
  },
  prices: {
    eyebrow: "Priser",
    title: "Hva leien koster",
    lead: "Alle priser er inkl. mva. Leietaker rydder lokalet klart til rengjøring.",
  },
};

export const weddingPage = {
  metaTitle: `Bryllup på gård i Trøndelag, ${weekendTotalShort} for hele helga`,
  metaDescription: `Gildesalen på Myraunet Gård tar ${capacity.gildesalen} gjester. Fredag til søndag koster ${weekendTotalShort} inkl. rengjøring. Egen mat og drikke, vielse på tunet, ingen sluttid. Frosta, en time fra Trondheim.`,
  ogDescription: `Gildesalen tar ${capacity.gildesalen} gjester. Egen mat og drikke, vielse på tunet, ingen sluttid. Frosta, en time fra Trondheim.`,
  hero: {
    eyebrow: "Bryllup",
    title: "Fest i det gamle fjøset, med egen mat og drikke og ingen sluttid",
    lead: `Gildesalen tar ${capacity.gildesalen} gjester, tunet tar vielsen, og helga koster ${weekendTotalShort}. Resten bestemmer dere.`,
    dateCta: "Sjekk om datoen er ledig",
  },
  numbers: [
    { value: capacity.gildesalen, label: "gjester i Gildesalen" },
    { value: weekendTotalShort, label: "for fredag til søndag, inkl. rengjøring" },
    { value: "Egen", label: "mat og drikke, ingen krav om leverandør" },
    { value: "1 time", label: "fra Trondheim, en halv fra Stjørdal" },
  ],
  dateCheck: {
    eyebrow: "Første spørsmål",
    title: "Er datoen ledig?",
    lead: "Lørdager i juni, juli og august går først. Tre felt, så svarer vi.",
  },
  weekend: {
    eyebrow: "Slik ser helga ut",
    title: "Dere har gården fra fredag til søndag",
  },
  photos: [
    { src: venues[0].images[0].src, alt: "Gildesalen pyntet til bryllup med hvite stoltrekk" },
    { src: weddingEvent.image.src, alt: "Bryllupsfølget ute på tunet foran låven" },
    { src: venues[0].images[1].src, alt: "Dekket langbord med markblomster i Gildesalen" },
  ],
  rent: {
    eyebrow: "Ærlig om leien",
    title: "Inkludert, og det dere ordner selv",
    lead: "Dere leier huset, ikke en pakke. Det holder prisen nede og valgene hos dere.",
    included: `Inkludert i ${weekendTotalShort}`,
    arrange: "Dere ordner selv",
  },
  price: {
    eyebrow: "Regnestykket",
    title: `Hele helga for ${weekendTotalShort}`,
    lead: `Ingen pris per kuvert, ingen minstekjøp av drikke. Lokalet koster det samme om dere er 40 eller ${capacity.gildesalen}.`,
    link: "Hele prislisten",
  },
  lodging: {
    eyebrow: "Gjestene",
    title: "Overnatting på Frosta",
    lead: "Gården har ikke egne senger. Frosta har hotell, leiligheter og sjøbuer, og Airbnb har flest hele hus for familier og vennegjenger.",
    note: `${practical.parking}, så gjestene kan trygt kjøre. ${practical.distance}.`,
    guestLink: "Send denne siden til gjestene",
  },
  faq: { eyebrow: "Spørsmål", title: "Det brudepar spør om" },
  cta: {
    title: "Send datoen, så svarer vi",
    lead: `Uforpliktende. Vil dere heller ringe, er Gustav på ${site.phone}.`,
  },
};

export const priserPage = {
  metaTitle: "Priser for leie av lokaler",
  metaDescription: `Gildesalen ${venues[0].price}, Grisehuset ${venues[1].price} ferdig vasket, begge lokaler ${priceList.rows[3].value}. Rengjøring og kjøkkenhjelp i tillegg. Alle priser inkl. mva.`,
  hero: {
    eyebrow: "Priser",
    title: "Prisene står her, ikke bak et skjema",
    lead: `Leieprisene har stått uendret siden ${priceList.updated}. Alle priser er inkl. mva.`,
    image: venues[2].images[1].src,
    alt: venues[2].images[1].alt,
  },
  list: {
    eyebrow: "Prisliste",
    title: "Leie av lokaler",
    lead: "Dere betaler for lokalet, ikke per gjest. Det gjør det enkelt å regne på selv om følget vokser.",
  },
  scope: {
    eyebrow: "Hva som følger med",
    title: "Inkludert og ikke inkludert",
    includedLabel: "Inkludert i leien",
    extraLabel: "Kommer i tillegg",
  },
  included: [
    "Hele lokalet med bord og stoler",
    "Kjøkkenet til leietakers disposisjon",
    "Parkering på tunet",
    "Gårdstunet utenfor til mingling og bilder",
  ],
  notIncluded: [
    "Mat og drikke, som dere ordner selv",
    "Rengjøring, om dere ikke bestiller det",
    `Kjøkkenhjelp, ${kitchenHelp}`,
    "Overnatting, som ikke tilbys for øyeblikket",
  ],
  capacity: {
    eyebrow: "Kapasitet",
    title: "Hvilket lokale passer til hvor mange",
  },
  terms: { eyebrow: "Vilkår", title: "Det praktiske rundt leien" },
  cta: {
    title: "Klar for å sjekke datoen?",
    lead: "Send dato og omtrentlig antall gjester, så svarer vi om lokalet er ledig.",
  },
};

export const arrangementPage = {
  metaTitle: "Arrangement på Myraunet Gård",
  metaDescription:
    "Bryllup, konfirmasjon, julebord, kurs og konferanse på gård i Trøndelag. Se hvilket lokale som passer anledningen, og hva leien koster.",
  hero: {
    eyebrow: "Arrangement",
    title: "Anledningen bestemmer hvilket lokale dere trenger",
    lead: "De fleste selskap havner i Gildesalen eller Grisehuset. Her er hva som passer til hva.",
    image: "/lovable-uploads/15847e16-8ae1-4f0d-9da0-94c9b5c3bb5f.png",
    alt: "Langbord ute på gårdstunet en sommerdag",
  },
  other:
    "Gården har også lagt hus til fødselsdager, jubileer, grillfester, minnesamvær, konsert og moteshow. Passer ikke anledningen inn i noen av kategoriene over, ta kontakt så finner vi ut av det.",
  faq: { eyebrow: "Spørsmål", title: "Praktisk om leien" },
};

export const galleriPage = {
  metaTitle: "Galleri fra Myraunet Gård",
  metaDescription:
    "Bilder fra Gildesalen, Grisehuset og Stabburet, og fra gårdstunet på Frosta sommer som vinter.",
  hero: {
    eyebrow: "Galleri",
    title: "Lokalene og landskapet",
    lead: "Klikk på et bilde for å se det stort. Bruk piltastene for å bla.",
    image: "/myraunet-gallery/vinter/3.jpg",
    alt: "Opplyste trær på tunet en vinterkveld",
  },
};

export const kontaktPage = {
  metaTitle: "Kontakt og forespørsel",
  metaDescription: `Send en uforpliktende forespørsel om leie av lokaler på Myraunet Gård, eller ring ${site.phone}. ${site.address.street}, ${site.address.postal} ${site.address.city}.`,
  hero: {
    eyebrow: "Kontakt",
    title: "Sjekk om datoen er ledig",
    lead: "Send dato og omtrentlig antall gjester, så svarer vi om lokalet er ledig og hva det koster. Forespørselen er ikke bindende.",
    image: "/myraunet-gallery/natur/6.jpg",
    alt: "Sommerhimmel over tunet på Myraunet Gård",
  },
};

const lodgingFrom = (slug: string) => lodging.find((l) => l.slug === slug)!.priceFrom;
const fjordbuerBeds = "40";
const klostergardenBeds = "30";

export const overnattingPage = {
  metaTitle: "Overnatting for gjestene på Frosta",
  metaDescription: `Myraunet Gård har ikke egne senger. Her er hotell, leiligheter, sjøbuer og Airbnb på Frosta med priser fra ${cheapestLodging} per natt, alle en kort kjøretur fra gården.`,
  hero: {
    eyebrow: "Overnatting",
    title: "Gjestene sover på Frosta, festen er hos oss",
    lead: "Gården har ikke egne senger. Frosta har hotell ved sjøen, leiligheter, sjøbuer og en gjestegård ute på Tautra, alt innen kort kjøretur.",
    image: lodging[0].images[0].src,
    alt: "De røde sjøbuene til Frosta Fjordbuer ved Trondheimsfjorden",
  },
  numbers: [
    { value: String(lodging.length), label: "steder på Frosta, pluss Airbnb og Booking.com" },
    { value: cheapestLodging, label: "billigste natt, leilighet på Hauganfjæra" },
    { value: fjordbuerBeds, label: "senger samlet hos Frosta Fjordbuer" },
    { value: "100+", label: "parkeringsplasser på tunet" },
  ],
  places: {
    eyebrow: "Stedene",
    title: "Fem steder, fra hotellrom til sjøbuer",
    lead: `Priser og tall er hentet fra stedenes egne sider og kan endre seg. Book direkte hos dem. ${practical.parking}.`,
  },
  platforms: {
    eyebrow: "Finn flere",
    title: "Resten av Frosta ligger på Airbnb og Booking.com",
    lead: "Hele hus for familier og vennegjenger finner dere oftest på Airbnb. Booking.com dekker også Levanger og Stjørdal, en halvtime unna.",
  },
  highlights: [
    {
      title: "Hele følget samlet",
      text: `Frosta Fjordbuer drives av slekta vår og har ${fjordbuerBeds} senger på ett sted. Si at dere skal feire på Myraunet når dere booker. Klostergården har rundt ${klostergardenBeds}.`,
    },
    {
      title: "Hotellstandard",
      text: `Frosta Brygge er stedet for gjester som vil ha rom, restaurant og frokost uten å tenke på noe. Fra ${lodgingFrom("frosta-brygge")} per natt.`,
    },
    {
      title: "Rimeligst",
      text: `Leilighetene på Hauganfjæra fra ${cheapestLodging} per natt fra natt to, og et helt hus delt på flere via Airbnb.`,
    },
  ],
  cta: {
    title: "Datoen først, sengene etterpå",
    lead: "Send dato og antall gjester, så vet dere om gården er ledig før dere booker overnatting.",
  },
};

export const forGjesterPage = {
  metaTitle: "For gjester, slik kommer dere til Myraunet Gård",
  metaDescription: `Adresse, parkering og overnatting for gjester som skal i bryllup på Myraunet Gård, ${site.address.street} på Frosta.`,
  hero: {
    eyebrow: "For gjester",
    title: "Velkommen til bryllup på Myraunet Gård",
    lead: "Her finner dere adressen, parkering og forslag til overnatting.",
  },
  parking: {
    eyebrow: "Parkering",
    title: "Parker på tunet",
    lead: `${practical.parking}.`,
  },
  lodging: {
    eyebrow: "Overnatting",
    title: "Overnatting på Frosta",
    lead: weddingPage.lodging.lead,
  },
  questions: {
    eyebrow: "Spørsmål?",
    title: "Kontakt brudeparet",
    lead: "Spørsmål om dagen tar dere direkte med brudeparet som har invitert dere.",
  },
};
