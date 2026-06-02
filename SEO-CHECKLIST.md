# SEO-CHECKLIST — GridDrone (griddrone.se)

Status per den tekniska SEO-genomgången. Kanonisk form: **https://www.griddrone.se**
(Vercel 301-redirectar non-www → www via `vercel.json`).

> **Viktig korrigering av förutsättningarna:** Uppdragsbeskrivningen utgick från att
> sajten är en React/Vite-SPA byggd i Lovable som serverar tom HTML till crawlers.
> Så är det **inte**. Repot är en **Next.js 14 (App Router)**-applikation och varje
> publik route prerenderas till statisk HTML vid build (`○ (Static)` i build-utskriften).
> Verifierat med `curl -A "Googlebot"` — fullständig HTML med `<title>`, canonical,
> brödtext och JSON-LD finns i råsvaret innan JS körs. Steg 1 (rendering) var alltså
> redan löst av ramverket; ingen SSR-migrering eller prerender-plugin behövs.

---

## ✅ Klart (verifierat i denna genomgång)

### Steg 1 — Rendering
- Next.js App Router. Alla publika rutter byggs som statisk HTML (SSG).
- Verifierat: `curl -A "Googlebot" http://localhost:3300/` och `/tjanster/termografering-kraftledning`
  returnerar `<title>`, `<link rel="canonical">`, synlig brödtext och `application/ld+json`
  i råsvaret — inte bara efter JS-hydrering.

### Steg 2 — Canonical i kod
- `createPageMetadata()` i `src/lib/metadata.ts` sätter absolut `canonical` per sida.
- `SITE_URL` defaultar till `https://www.griddrone.se` (https + www).
- `trailingSlash: false` i `next.config.mjs` → konsekvent utan avslutande slash.
- Rot-layout (`src/app/layout.tsx`) sätter canonical för startsidan.

### Steg 3 — Per-sida metadata
- Unik `title` + `description` per route via `createPageMetadata()`.
- Open Graph + Twitter Card (`summary_large_image`) på alla sidor.
- `<html lang="sv">` i rot-layout.
- Dynamiska OG/Twitter-bilder via `src/app/opengraph-image.tsx` och `twitter-image.tsx`.

### Steg 4 — JSON-LD (i renderad HTML)
- `Organization` + `WebSite` injiceras i rot-layout (syns på alla sidor).
- `Organization`: `areaServed: Sweden`, **inget `sameAs`**, **ingen adress/geo**, ingen `LocalBusiness`.
  `hasCredential` medvetet borttaget tills certifieringar är verifierade (enligt CLAUDE.md).
- `Service` per tjänstesida (`serviceType`, `areaServed: SE`).
- `BreadcrumbList` på undersidor.
- `FAQPage` på sidor med vanliga frågor.
- `HowTo` finns som typ för guider.
- `WebSite` utan `SearchAction` — korrekt, eftersom sajten saknar sökruta. Lägg till
  `SearchAction` först om/när en sökfunktion införs.

### Steg 5 — Crawl/indexering
- Dynamisk `sitemap.xml` (`src/app/sitemap.ts`) med alla publika URL:er + `lastmod`.
- `robots.txt` (`src/app/robots.ts`) tillåter crawl, pekar på sitemap, släpper in AI-botar (AEO).
- **Inga `noindex` kvar** från utvecklingsfasen (sökning i `src/` bekräftar detta).

### Steg 6 — Innehåll & tjänstetexter
- Dedikerade landningssidor finns för kraft/elnät-reviret:
  - `/tjanster/kraftledningsinspektion` (+ underdelar: luftledningar, inspektionsprogram,
    dataleveranser, metodik-kvalitet, datasäkerhet, faq, case)
  - `/tjanster/termografering-kraftledning`
  - `/tjanster/transformatorstation-inspektion`
  - `/tjanster/vegetationskontroll`, `/bvlos-inspektion`, `/stormskadeinspektion`,
    `/vindkraftinspektion`, `/jarnvagsinspektion`, `/underhallsabonnemang`
- H1 → H2/H3-hierarki, FAQ-sektioner, nationella signaler ("i hela Sverige"), ingen ort.
- Bilder via `next/image` med alt-text; inga råa `<img>`-taggar.
- Termografi-sidans FAQ utökad i denna omgång från 4 → 6 frågor (inom 5–8-spec).

### Steg 7 — Prestanda (Core Web Vitals)
- **Font:** Inter laddas nu via `next/font/google` (self-hostat, `display: swap`).
  Tidigare refererade Tailwind `"Inter"` utan att fonten lästes in → tyst fallback till
  system-ui. Nu serveras `.woff2` från `/_next/static/media/...` och preloadas av Next —
  ingen render-blockerande extern begäran, ingen preconnect behövs, minimerad CLS.
- Bilder: `next/image` (lazy-load som standard, `priority` endast på logotyp/hero),
  AVIF/WebP via `images.formats` i `next.config.mjs`.
- Code-splitting per route sköts av Next; shared JS ≈ 87 kB.

---

## 🔧 Återstår / rekommenderas (kräver ägarens input eller senare arbete)

- **Verifierad fakta före publicering:** Texter som nämner certifieringar/behörigheter
  (t.ex. "EASA-utbildade piloter med BVLOS-behörighet" i default-description) måste
  bekräftas av ägaren innan de står kvar — enligt `CLAUDE.md` får inget antas. Markera
  overifierat med `[VERIFIERAS]`.
- **`lastmod` i sitemap** är ett fast datum (`2026-04-05`). Uppdatera vid större
  innehållsändringar, eller koppla till filändringsdatum om dynamik önskas.
- **`SearchAction`** läggs till i `WebSite`-JSON-LD om en sökruta införs.
- **Mät CWV på riktigt** (PageSpeed Insights / Search Console efter deploy) för att
  bekräfta grön LCP/CLS/INP i fält, inte bara i teori.

---

## 👤 Manuella steg i Google Search Console (ägaren måste göra själv)

1. **Lägg till och verifiera egenskaper** i Search Console:
   - Domän-egenskap (`griddrone.se`) — verifieras via DNS TXT-post. Täcker www + non-www + alla subdomäner.
   - (Valfritt) URL-prefix-egenskap för `https://www.griddrone.se` om du vill ha separat vy.
2. **Skicka in sitemap:** under *Sitemaps*, ange `sitemap.xml` (full URL:
   `https://www.griddrone.se/sitemap.xml`).
3. **URL-inspektion + Begär indexering** för de viktigaste sidorna:
   - Startsidan `https://www.griddrone.se/`
   - `/tjanster/kraftledningsinspektion`
   - `/tjanster/termografering-kraftledning`
   - `/tjanster/transformatorstation-inspektion`
   - Övriga tjänstesidor efter prioritet.
4. **Bekräfta att www är den indexerade formen** — kontrollera att non-www 301-redirectar
   till www (sker redan via `vercel.json`).
5. **Bevaka *Indexering* och *Sidupplevelse*-rapporterna** efter någon vecka och åtgärda
   eventuella "Upptäckt – ej indexerad"-sidor.
6. **(Valfritt) Bing Webmaster Tools** — samma sitemap, för Bing/Copilot-synlighet.

---

## Verifieringskommandon

```bash
npm run build      # alla publika rutter ska visas som ○ (Static)
npm run start      # starta produktionsservern lokalt

# Bekräfta att texten finns i råsvaret (inte bara efter JS):
curl -s -A "Googlebot" https://www.griddrone.se/ | grep -E '<title>|canonical|ld\+json'
curl -s -A "Googlebot" https://www.griddrone.se/tjanster/kraftledningsinspektion | grep -i 'kraftledning'
curl -s https://www.griddrone.se/robots.txt
curl -s https://www.griddrone.se/sitemap.xml | head
```
