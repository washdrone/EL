# Teknisk SEO/AEO- och schema-åtgärdsrapport — www.griddrone.se

**Datum:** 2026-08-03 · **Utlösande händelse:** GSC-varning *"Menysökvägar – strukturerad data-problem: Fältet item saknas (i itemListElement)"* · **Omfattning:** samtliga 51 publika sidor · **Metod:** källkodsgranskning, `next build`, GSC-simulerande validering av all server-renderad JSON-LD (214 block), metadata, canonicals, rubrikhierarki och intern länkstruktur.

## Sammanfattning

| Kategori | Fel funna | Åtgärdade |
|---|---|---|
| GSC-rapporterat breadcrumb-fel (P0) | 50 sidor | 50 ✅ |
| Övriga schema-fel (P1) | 1 | 1 ✅ |
| Crawlbarhet/robots (P1) | 1 | 1 ✅ |
| Semantisk HTML (P2) | 1 | 1 ✅ |

**Slutverifiering:** 51 sidor, 214 JSON-LD-block — **0 fel, 0 varningar** i GSC-simulerande validator. `next build` ✅, `next lint` ✅, `tsc --noEmit` ✅ (0 fel i `src/`).

---

## 1. GSC-felet: "Fältet item saknas (i itemListElement)" — ÅTGÄRDAT

### Grundorsak

`JsonLd.tsx` utelämnade `item`-fältet för varje breadcrumb-post som saknade `href`:

```ts
...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
```

Detta gav två felklasser i den renderade `BreadcrumbList`-markupen:

1. **Sista posten (aktuell sida) saknade alltid `item`** — alla 50 sidor med breadcrumbs skickade sista posten utan `href`.
2. **Mellanposter utan `item`** — alla 7 guide-sidor hade `{ name: "Guider" }` utan `href` som mellanpost (sektionen `/guider` har ingen indexsida). För icke-sista poster är `item` obligatoriskt enligt Google, vilket är exakt det hårda fel GSC rapporterade.

Dessutom fanns semantiskt felaktiga trails: "Branscher" pekade på `/branscher/energibolag`, och "Platser"/"Jämförelser" pekade på **samma URL som den aktuella sidan** (duplicerad URL i trailen).

### Åtgärd

- **`src/components/JsonLd.tsx`**: `item` emitteras nu **alltid** för varje `ListItem`. Ny dedikerad typ `JsonLdBreadcrumb` med **obligatoriskt `href`** — TypeScript omöjliggör att felet återuppstår.
- **Alla 50 sidor**: sista breadcrumb-posten har nu sidans egen absoluta URL (Googles rekommenderade mönster).
- **Mellanposter utan riktig URL borttagna ur JSON-LD** ("Guider", "Platser", "Jämförelser", självrefererande "Branscher"). Trailen innehåller nu enbart riktiga, distinkta, klickbara URL:er. De 7 undersidorna till `/tjanster/kraftledningsinspektion` behåller sin korrekta mellanpost till föräldersidan; tjänste-, blogg- och branschsidor behåller "Tjänster" (`/tjanster`), "Blogg" (`/blogg`) resp. korrekt branschlänk.
- Den **synliga** breadcrumb-navigeringen (`Breadcrumbs.tsx`) är oförändrad — endast schemat är justerat.

**Exempel på renderad markup efter fix** (`/tjanster/kraftledningsinspektion/faq`):

```json
{"@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Hem","item":"https://www.griddrone.se"},
 {"@type":"ListItem","position":2,"name":"Elnätsinspektion med drönare","item":"https://www.griddrone.se/tjanster/kraftledningsinspektion"},
 {"@type":"ListItem","position":3,"name":"FAQ","item":"https://www.griddrone.se/tjanster/kraftledningsinspektion/faq"}]}
```

**Förväntad effekt:** GSC-felet försvinner vid nästa omcrawl (begär gärna validering i GSC: *Förbättringar → Menysökvägar → Verifiera korrigering*). Breadcrumb-rich results kan åter visas i sökresultaten för samtliga sidor.

## 2. Felaktigt Service-schema på tjänsteöversikten — ÅTGÄRDAT

`/tjanster` använde `<JsonLd type="Service" servicePath="/tjanster" />` utan namn, vilket renderade default-tjänsten *"Kraftledningsinspektion med drönare"* — en dubblett av det riktiga Service-schemat på `/tjanster/kraftledningsinspektion`, med fel namn för sidan.

**Åtgärd:** Ny `ItemList`-typ i `JsonLd.tsx`; `/tjanster` markeras nu som en lista över de 9 faktiska tjänsterna (namn + URL från `SERVICE_ITEMS` — inga nya faktapåståenden). **Effekt:** korrekt entitetsmodell (hubbsida ≠ enskild tjänst), bättre förståelse för Google/AI-motorer av tjänstekatalogen.

## 3. robots.txt blockerade OG-bilderna — ÅTGÄRDAT

`robots.ts` hade `disallow: ["/twitter-image*", "/opengraph-image*"]` — samtidigt som `og:image`, `twitter:image` och **Article-schemats `image`-fält** pekar på just dessa URL:er. Google kräver att bilder som refereras i structured data är crawlbara; blockeringen riskerade att ogiltigförklara Article-bilden och försämra länkförhandsvisningar/Discover.

**Åtgärd:** blockeringarna borttagna (endast `/api/` blockeras nu), med kodkommentar som förklarar varför de inte får återinföras. **Effekt:** Article-schema med giltig bild; korrekta förhandsvisningar i sök, sociala medier och AI-svar.

## 4. Rubrikhierarki på startsidan — ÅTGÄRDAT

Infokorten i hero-sektionen ("RGB + Termografi" m.fl.) använde `<h3>` direkt efter `<h1>`, innan sidans första `<h2>` — ett hopp i rubrikhierarkin. Korten är inte rubriker och är nu `<p>`. **Effekt:** ren H1→H2→H3-hierarki på startsidan (övriga sidor verifierade korrekta).

---

## Kvalitetssäkringsvarv — verifierat utan anmärkning

Validatorskript (GSC-simulering) körd mot **byggd HTML** i `.next/server/app`, per sida:

- **BreadcrumbList**: `name`, sekventiell `position` från 1, **`item` med absolut URL på varje post**, sista posten = sidans URL.
- **FAQPage**: giltiga `Question`/`acceptedAnswer`; max 1 per sida; verifierat att exakt samma FAQ-innehåll renderas synligt på sidan (Googles krav) — 20/20 sidor OK.
- **Article** (14 sidor): headline ≤ 110 tecken, `image`, ISO-datum, `author`/`publisher` → `#organization`.
- **Organization/WebSite** (globalt): `@id`-refererade, logotyp-URL verifierad mot fil i `public/images/`.
- **Service** (24 sidor): `name`, `provider`-referens, `areaServed` Sverige.
- **HowTo/ItemList**: kompletta steg/poster.
- **Metadata**: exakt 1 canonical per sida som matchar rutten (52/52), 1 `<title>`, meta description 70–165 tecken, `og:image` + `twitter:card` överallt, `<html lang="sv">`.
- **Rubriker**: exakt 1 `<h1>` per sida (51/51).
- **Interna länkar**: samtliga `href` i `src/` matchar existerande rutter eller 301-redirects — 0 brutna.
- **Sitemap ↔ rutter**: fullständig överensstämmelse, inga dubbletter; alla sidor prerendras statiskt (`○ Static`) → inget JavaScript-beroende för indexering.
- **Duplicate content**: apex → www och Vercel-alias → www via 301 i `vercel.json`; `trailingSlash: false`; självrefererande hreflang `sv-SE`.
- **Kvarlämnad kod**: inga ledigblivna komponenter, ingen testkod, ingen schema-markup utanför `JsonLd.tsx`, inga `[VERIFIERAS]`-platshållare.

## Core Web Vitals (statisk genomgång)

Redan på plats och verifierat: självhostad `next/font` med `display: swap` (ingen CLS/render-blocking), hero-video med `preload="metadata"` + poster, `next/image` med AVIF/WebP på samtliga bilder (alla med alt-text), GA4 laddas `afterInteractive` med Consent Mode v2, First Load JS ~87–102 kB. Inga åtgärder krävdes.

## Uppföljning samma dag: sektionshubbar genomförda

Rekommendation 1 är nu implementerad:

- **Nya indexsidor** för `/guider`, `/branscher` och `/platser` — hubbsidor som listar samtliga undersidor med befintlig, verifierad copy (rubriker/beskrivningar återanvända från respektive undersidas metadata; inga nya faktapåståenden). Varje hub har egen metadata/canonical, `ItemList`- och `BreadcrumbList`-schema.
- **Sektionsnivån återinförd i breadcrumbs** på alla 19 undersidor (5 branscher, 7 platser, 7 guider) — både i JSON-LD (med giltig `item`-URL till hubben) och som klickbar länk i den synliga navigeringen.
- **Sitemap** utökad med de tre hubbarna; **sidfoten** länkar nu till "Alla branscher/platser/guider" från hela sajten; toppnavigeringens "Branscher"-post pekar på `/branscher`.
- `/jamforelser` fick medvetet **ingen** indexsida — sektionen innehåller bara en sida, och en hubb med en enda länk vore tunt innehåll. Skapa hubben när fler jämförelser publiceras.

**Omverifierat efter ändringarna:** 54 sidor, 226 JSON-LD-block — 0 fel, 0 varningar. Sitemap ↔ rutter stämmer exakt, 0 brutna interna länkar, `build` + `lint` gröna.

## Rekommendationer (ej fel — framtida förbättringar)

1. **LocalBusiness-schema** kräver verifierad besöksadress + telefonnummer — läggs till först när ägaren bekräftat uppgifterna (per CLAUDE.md-regeln).
2. **`sameAs` i Organization-schemat** när företagets officiella profiler (LinkedIn m.m.) bekräftats.
3. **Indexsida för `/jamforelser`** när fler jämförelsesidor finns.
4. Efter deploy: kör *Verifiera korrigering* i GSC för breadcrumb-felet (Förbättringar → Menysökvägar) samt testa några sidor i [Rich Results Test](https://search.google.com/test/rich-results). Detta kräver inloggning i ert GSC-konto och kan inte göras härifrån.

---

# Runda 3 (samma dag): AEO/AI-optimering, E-E-A-T-grund och prestanda

**Omfattning:** TechArticle, DefinedTermSet-ordlista, ImageObject, orphan-fix, LCP-optimering, konkurrentöversikt. Verifierat: 55 sidor, 230 JSON-LD-block — 0 fel, 0 varningar. Alla sidor nås inom 3 klick.

## Genomfört

| Åtgärd | Varför | Förväntad effekt |
|---|---|---|
| `Article` → `TechArticle` på alla 7 guider | Guiderna är tekniska instruktionsartiklar; TechArticle är den mer precisa schema-typen | Bättre klassificering i Google och AI-system; starkare signal om teknisk auktoritet |
| Ny sida **/guider/ordlista** med `DefinedTermSet`/`DefinedTerm`-schema (35 termer i 5 kategorier) | Täcker semantiska luckor ur ämnesklustret (transmissionsnät, regionnät, lokalnät, ställverk, isolator, travers, topplina, punktmoln, fotogrammetri, digital tvilling, ortofoto, tillståndsbaserat underhåll m.fl.) med maskinläsbara definitioner | AI-assistenter citerar helst källor med tydliga definitioner — detta är sidtypen som ChatGPT/Perplexity/Gemini plockar svar ur; stärker topisk auktoritet för hela domänen |
| `image` i Article/TechArticle som `ImageObject` med dimensioner; Organization-`logo` som `ImageObject` | Googles rekommenderade format | Robustare rich results-berättigande |
| Orphan-fix: `/tjanster/kraftledningsinspektion/case` länkas nu från föräldersidan | Sidan saknade helt inlänkar → risk för "Discovered – currently not indexed" | Sidan crawlas och indexeras normalt |
| Hero-videons poster: 3,4 MB PNG → 300 KB optimerad JPEG (`kraftledningar-poster.jpg`) | `<video poster>` optimeras INTE av next/image — den laddades rå och är LCP-kritisk på startsidan | Väsentligt snabbare LCP på startsidan, särskilt mobilt |
| Logotypfil nedskalad 3860px/4,9 MB → 1200px/264 KB (samma URL) | Hämtas rå av crawlers via Organization-schemat | Snabbare crawl, mindre bandbredd |
| `preconnect` till googletagmanager.com (endast när GA är aktivt) | Sparar anslutningstid för analytics-skriptet | Marginellt bättre INP/nätverksprioritering |
| Ordlistan inlänkad från guider-hubben, sidfoten (alla sidor) och sitemap | Crawlbarhet + länkkapital | Snabb indexering av ny sida |

## Konkurrentöversikt (webbsökning 2026-08-03)

Identifierade aktörer inom drönarbaserad elnätsinspektion i Sverige: **Airpelago** (automatiserade drönare, BVLOS, egen mjukvara), **ONE Nordic** (etablerad kraftaktör med drönartjänster och termografi), **Vattenfall Services**, **Copture**, **ACRE Skogstjänst**, **Swedron**, **Droneteknik**, **Besiktagruppen** — samt nätägarnas egna program (E.ON, Ellevio, Svenska kraftnät).

**Bedömning:** konkurrenternas publika sidor är i regel enstaka tjänstesidor utan kunskapskluster, utan strukturerad data i GridDrones omfattning och utan ordlista/guide-arkitektur. GridDrone har nu ett tekniskt och innehållsmässigt försprång i SEO/AEO-infrastruktur. Konkurrenterna är starkare på: **verkliga referenskunder med namn, års branscherfarenhet, riktiga projektbilder** — allt E-E-A-T-material som kräver verifierade uppgifter (se nedan).

## Innehållsinventering (tunt innehåll)

Tunnaste sidorna (ord, inkl. navigation): `/tjanster/kraftledningsinspektion/case` (229), `/kontakt` (244), platssidorna (~317–330). Hubbar och kontakt är korta av naturliga skäl. **Medvetet EJ åtgärdat med text:** att fylla på med generisk AI-text bryter mot projektregeln och skadar E-E-A-T. Rätt åtgärd är verifierat förstahandsmaterial (nedan).

## Kräver ägarens verifierade uppgifter (störst kvarvarande hävstång)

1. **Referensuppdrag med substans** — verkliga uppdrag (även anonymiserade): omfattning, metod, antal fynd, leveransformat + riktiga inspektionsbilder. Störst E-E-A-T-effekt av allt.
2. **Riktiga inspektionsbilder** på tjänstesidorna (termiska + visuella exempel från egna uppdrag).
3. **LocalBusiness-schema** — kräver bekräftad besöksadress + telefon.
4. **`sameAs`** — bekräftade företagsprofiler (LinkedIn m.m.).
5. **Team/kompetens på Om oss** — piloternas certifikat, utbildning, bakgrund (verifierat).
6. **Certifieringssidan** — dokumenterade tillstånd/certifikat med utfärdare.
7. **Hero-videon (12 MB)** — bör komprimeras till ca 2–4 MB (t.ex. H.264 CRF 28, 1080p). Kräver ffmpeg/videoverktyg; ändrar inte utseendet bakom 70 % mörk overlay.

## Medvetet inte implementerat

- **SearchAction/SiteNavigationElement** — sajten har ingen sökfunktion; SearchAction utan sökresultatsida är ogiltigt.
- **VideoObject** för hero-videon — dekorativ bakgrundsvideo utan eget innehållsvärde; VideoObject kräver name/description/thumbnail/uploadDate och skulle ge varningar utan nytta.
- **Textutfyllnad på tunna sidor** — se ovan.

## Prioriterad handlingsplan framåt

1. **Nu:** klicka *Verifiera korrigering* i GSC (Menysökvägar) när deployen är live.
2. **Vecka 1–2:** samla ägarens verifierade material (punkt 1–6 ovan); publicera 1–2 riktiga referensuppdrag.
3. **Månad 1:** komprimera hero-videon; lägg till riktiga inspektionsbilder på tjänstesidor.
4. **Löpande:** 1–2 nya guide-/bloggartiklar per månad ur ämnesklustret (förslag: "Ställverk och transformatorstationer – inspektionsguide", "Digital tvilling av elnät", "Tillståndsbaserat underhåll i praktiken") — alltid byggda på verklig projekterfarenhet.
5. **Uppföljning:** GSC-täckningsrapport efter 2–4 veckor; följ AI-citeringar genom att ställa branschfrågor till ChatGPT/Perplexity/Gemini och notera källor.
