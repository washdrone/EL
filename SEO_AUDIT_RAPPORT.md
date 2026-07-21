# SEO/AEO-audit — www.griddrone.se

**Datum:** 2026-06-11 · **Omfattning:** samtliga 49 publika sidor · **Metod:** statisk analys av server-renderad HTML från `next build` (`.next/server/app/*.html`) via `scripts/seo-audit.js`, källkodsgranskning per sida, JSON-LD-parsning av samtliga sidor.

> **Obs:** Live-tester mot produktionen (curl-redirects, Lighthouse/PageSpeed) kunde inte köras från denna miljö — nätverkspolicyn blockerar utgående anrop till griddrone.se och ingen browser finns installerad. Kommandon för att köra dessa själv finns i avsnittet *Verifiering* och *Efter deploy*.

## Sammanfattning

| Prioritet | Fynd | Åtgärdade |
|---|---|---|
| P0 (blockerar indexering/ranking) | 0 | — |
| P1 (tydlig rankingpåverkan) | 9 | 9 ✅ |
| P2 (förbättring) | 8 | 3 ✅, 5 rekommenderade |

Sajtens grundinfrastruktur var redan god: korrekt kanonisk www-domän via `metadataBase` + `vercel.json`-redirect, `robots.txt` med sitemap-pekare och AI-bot-regler, `sitemap.xml` utan 404:or, `<html lang="sv">`, en `<h1>` per sida, `next/font` med `display: swap`, `twitter:card summary_large_image` överallt, inga brutna interna länkar, FAQ-svar i server-HTML även när accordionen är stängd (CSS-döljning, inte villkorlig rendering).

---

## FAS 1 — Inventering

49 publika sidor i `src/app` jämfördes mot `src/app/sitemap.ts`: **fullständig överensstämmelse** — alla sidor i koden finns i sitemapen, inga sitemap-URL:er saknar sida. Alla 60 routes (inkl. opengraph-image, robots, sitemap) prerendras statiskt (`○ Static`), så allt SEO-kritiskt innehåll är server-renderat.

## FAS 2/3 — Fynd och åtgärder

### P1 — åtgärdade

| # | Fynd | Sidor | Åtgärd |
|---|---|---|---|
| 1 | `og:title` på startsidan hade omvänd ordning mot `<title>` (varumärke först i stället för sökord först) | `/` (+ global default) | `src/app/layout.tsx`: default-titel, `og:title` och `twitter:title` är nu identiska: ”Drönarinspektion av Elnät & Kraftledningar \| GridDrone” ✅ |
| 2 | Inget `Article`-schema och inga datumsignaler på guider/blogg/jämförelse | 7 guider, 6 blogginlägg, 1 jämförelse | Ny `Article`-typ i `JsonLd.tsx` (headline, description, datePublished, dateModified, author/publisher → `#organization`, mainEntityOfPage, inLanguage). Datum hämtade ur git-historiken per fil (guider: 2026-04-05; blogg: 2026-03-05, två uppdaterade 07/08 mars). Synligt ”Uppdaterad: …” i hero på alla 14 sidor. `og:type=article` via nytt `ogType`-stöd i `createPageMetadata` ✅ |
| 3 | 4 tjänstesidor saknade FAQ (AEO-krav: 4–6 frågor per tjänstesida) | `/tjanster/bvlos-inspektion`, `/tjanster/vegetationskontroll`, `/tjanster/vindkraftinspektion`, `/tjanster/transformatorstation-inspektion` | 5 FAQ per sida + `FAQPage`-schema med exakt textmatchning. Alla svar formulerade uteslutande ur redan verifierat innehåll på sajten (faq.ts, tjänstesidor, guider) — inga nya faktapåståenden ✅ |
| 4 | Dubbel varumärkessuffix: ”Certifieringar & tillstånd \| GridDrone \| GridDrone” | `/certifieringar` | Titel → ”Certifieringar & tillstånd för drönarinspektion” (template lägger till suffix) ✅ |
| 5 | Stavningsinkonsekvens ”drönareinspektion” (24 förekomster) vs ”drönarinspektion” (167) — entitetskonsistens + sökordsform | 14 filer | Normaliserat till ”drönarinspektion” i all visningstext och metadata. URL-slugs (`dronareinspektion-elnat`, `upphandling-dronareinspektion`) orörda — inga indexerade URL:er ändrade ✅ |
| 6 | Synliga breadcrumbs saknades på huvudtjänstesidan och integritetspolicyn | `/tjanster/kraftledningsinspektion`, `/integritetspolicy` | `<Breadcrumbs>`-nav tillagd (+ `BreadcrumbList`-schema på integritetspolicyn) ✅ |
| 7 | För långa titlar (>65 tecken faktisk längd) | `/blogg/helikopter-vs-dronare` (74), `/om-oss` (69), `/blogg/vegetationskontroll-kraftledning` (71), `/guider/upphandling-dronareinspektion` (68), `/guider/feltyper-kraftledningar` (67), `/blogg/termografering-elnat` (66) | Samtliga nedkortade till ≤63 inkl. suffix; H1 och URL:er oförändrade ✅ |
| 8 | För korta/svaga meta descriptions | `/platser/vindkraftinspektion-skane` (108), `/blogg/helikopter-vs-dronare` (115), `/integritetspolicy` (91) | Utökade till 140–157 tecken med ort/sökord + CTA ✅ |
| 9 | Interna länkluckor: flaggskeppsguiden länkade inte till någon tjänstesida; 6 tjänstesidor länkade inte till relaterad guide | `/guider/dronareinspektion-elnat`, `/guider/upphandling-dronareinspektion` + 6 tjänstesidor | ”Relaterat innehåll”-sektion med beskrivande ankartexter (t.ex. ”termografering av kraftledningar med drönare”, inte ”läs mer”) ✅ |

### P2 — åtgärdade

| # | Fynd | Åtgärd |
|---|---|---|
| 10 | Hero-video utan `preload`/`poster` (LCP-risk) | `preload="metadata"` + poster (`/images/kraftledningar.png`) ✅ |
| 11 | H1 ”Vindkraftverksinspektion” avvek från tjänstenamnet ”Vindkraftinspektion” (entitetskonsistens) | H1 → ”Vindkraftinspektion med drönare” ✅ |
| 12 | Ej verifierbar superlativ ”branschledande multirotordrönare” i faq.ts | → ”professionella multirotordrönare” ✅ |
| — | `/llms.txt` saknades | Skapad i `public/llms.txt` enligt llmstxt.org: beskrivning, tjänstelista med URL:er, guider, geografisk täckning, kontakt. Endast verifierade formuleringar från sajten ✅ |
| — | Platssidornas titlar ”Sökord Ort \| Drönare \| GridDrone” (dubbel pipe) | → mönstret ur kravspecen: ”Kraftledningsinspektion Stockholm – drönare & termografi \| GridDrone” (66–68 tecken faktiskt — något över 60, medvetet enligt specexemplet; sökord + ort syns alltid före trunkering) ✅ |
| — | Sitemap `lastmod` låg kvar på 2026-04-05 | Uppdaterad till 2026-06-11 (i princip alla sidor ändras i denna release). Policyn ”fast datum som bumpas vid innehållsändring” behålls — den är ärligare mot Google än ett build-datum som ändras vid varje deploy utan innehållsändring |

### P2 — rekommenderade (ej åtgärdade)

1. **Unik OG-bild per sektionstyp.** Idag genereras en global OG-bild via `/opengraph-image`. Rekommendation: segmentvisa `opengraph-image.tsx` för `/tjanster`, `/guider`, `/blogg` (kräver att `createPageMetadata` slutar sätta explicit `images` för dessa sektioner, alternativt får en `ogImage`-parameter).
2. **Favicon-set ofullständigt.** Endast `favicon.ico` finns. Lägg till `apple-icon.png` (180×180) och `manifest.webmanifest` i `src/app/` — kräver en kvadratisk logotyp-asset av ägaren.
3. **Hreflang `sv-SE` självrefererande** sätts på alla sidor via `alternates.languages`. Ofarligt men onödigt på en enspråkig sajt; kan tas bort ur `metadata.ts` för renare head.
4. **Integritetspolicyn anger ”Senast uppdaterad: 2025-01-01”** — datumet ligger före övrigt innehåll på sajten. [VERIFIERAS] med ägaren och uppdatera.
5. **Lighthouse/CWV-mätning** kunde inte köras härifrån. Kör efter deploy: `npx unlighthouse --site https://www.griddrone.se` eller PageSpeed Insights på `/`, en tjänstesida, en guide, en platssida. JS-bundlarna är små (87–105 kB first load) och allt prerendras statiskt, så risken är låg; det som främst påverkar LCP är hero-videon (nu med poster).

### AEO-status per checklistepunkt

- **Svar-först-struktur:** Huvudtjänstesidan har explicit ”Answer-First”-block; guiderna inleder med direkta definitioner och frågeformulerade H2 (”Vad är …?”, ”Vilka tillstånd krävs …?”). ✅
- **FAQ-täckning:** Alla 9 tjänstesidor + 7 guider + jämförelsesidan + startsidan har nu FAQ med `FAQPage`-schema och exakt textmatchning mot synligt innehåll. ✅
- **Entitetskonsistens:** `#organization`-@id refereras nu från Organization, WebSite, Service (provider) och Article (author/publisher). Stavning och tjänstenamn normaliserade. ✅
- **llms.txt:** ✅ (`https://www.griddrone.se/llms.txt` efter deploy)
- **Citerbarhet:** Konkreta uppgifter (RTK/centimeternoggrannhet, SWEREF99 TM, GeoTIFF/shapefiler/CSV, SORA/PDRA/LUC) konsekvent formulerade; en ostödd superlativ borttagen. ✅
- **Jämförelseinnehåll:** `/jamforelser/helikopter-vs-dronare-inspektion` använder riktig HTML-`<table>`, har sammanfattning överst, FAQ + nu även Article-schema. ✅
- **Datumsignaler:** Synligt ”Uppdaterad:” + `dateModified` på alla guider/blogginlägg. ✅

---

## Verifiering

**Build:** `npm run build` ✅ — `✓ Generating static pages (60/60)`, alla sidor `○ (Static)`. `npm run lint` ✅ — inga fel/varningar. `npx tsc --noEmit` ✅.

**JSON-LD:** All structured data på samtliga 49 sidor extraherad ur renderad HTML och parsad — **0 syntaxfel**. Schematyper per sidtyp:

| Sidtyp | Scheman |
|---|---|
| Alla sidor (global) | `Organization` (@id `…#organization`) + `WebSite` (publisher → @id) |
| Startsida | + `FAQPage`, `HowTo` |
| Tjänstesidor (9) | + `Service` (provider → @id), `BreadcrumbList`, `FAQPage` (alla 9), `HowTo` (2) |
| Platssidor (7) | + `Service`, `BreadcrumbList` |
| Branschsidor (5) | + `Service`, `BreadcrumbList` (energibolag även `FAQPage`) |
| Guider (7) | + `Article`, `FAQPage`, `BreadcrumbList`, `HowTo` (2) |
| Blogg (6) | + `Article`, `BreadcrumbList` |
| Jämförelse | + `Article`, `FAQPage`, `BreadcrumbList` |

**Rendering:** stickprov i server-HTML bekräftar att title, meta, JSON-LD, H1 och FAQ-svarstext (även i stängd accordion) finns i `.next/server/app/*.html` — inget SEO-kritiskt renderas enbart client-side. Interna länkar: crawl av samtliga `href` i byggd HTML → **0 brutna länkar**. 404-sida: egen `not-found.tsx` med H1 ”Sidan hittades inte” + vidarelänkar (Next.js svarar 404, inte 200).

**Redirects (körs av dig efter deploy — gick inte härifrån):**

```bash
for u in "http://griddrone.se/" "https://griddrone.se/" "http://www.griddrone.se/" \
  "https://www.griddrone.se/" "https://griddrone.se/tjanster/kraftledningsinspektion" \
  "http://www.griddrone.se/guider/dronareinspektion-elnat"; do
  echo "== $u"; curl -sI "$u" | grep -iE "^HTTP|^location"; done
# Förväntat: http→https och apex→www med 301/308 i max 1 hopp; www-https → 200
curl -s -A "Googlebot" https://www.griddrone.se/tjanster/kraftledningsinspektion | grep -ci "<h1"   # → 1
curl -sI https://www.griddrone.se/ | grep -i x-robots-tag   # → tomt (ingen header som skriver över)
```

`vercel.json` innehåller apex→www-redirect (308, permanent); http→https hanteras automatiskt av Vercel — kedjan blir max 1 hopp per variant.

---

## Efter deploy — att göra i verktygen

1. **Google Search Console:** Skicka om `https://www.griddrone.se/sitemap.xml` (Index → Sitemaps).
2. **Begär omindexering** (URL-granskning → Begär indexering) för nyckelsidor: `/`, `/tjanster/kraftledningsinspektion`, de 4 tjänstesidorna som fick FAQ, `/guider/dronareinspektion-elnat`, `/jamforelser/helikopter-vs-dronare-inspektion` samt platssidorna (nya titlar).
3. **Rich Results Test** (search.google.com/test/rich-results): validera FAQ på en tjänstesida + Article på en guide och ett blogginlägg.
4. **Bing Webmaster Tools:** skicka om sitemapen; verifiera att sajten är registrerad (Bing driver även Copilot/ChatGPT-sök).
5. Kör redirect-testerna och Lighthouse enligt ovan.
6. [VERIFIERAS] med ägaren: datum i integritetspolicyn, kvadratisk logotyp för apple-touch-icon, ev. sociala profiler för `sameAs` i Organization-schemat.
