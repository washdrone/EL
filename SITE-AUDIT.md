# Sajtgranskning – EL Drönartjänster

Datum: 2026-02-22
Granskare: Claude (AI-revision)

---

## 1. Executive summary

Sajten är en Next.js 14 (App Router) B2B-webbplats med 10 publicerade sidor riktade mot elnätsbolag och upphandlare. Grundstrukturen är bra: tydlig sidhierarki, konsekvent design, JSON-LD schema på alla sidor, och standardiserat metadata-system.

**Kritiska buggar som fixats i denna revision:**
- SEO-titlar visade dubbel suffix ("| Drönare för elnätsinspektion | EL Drönartjänster")
- Bruten internlänk i CaseCard (länkade till obefintlig case-detaljsida)
- Hårdkodat telefonnummer i StickyCTA istället för konstant
- SITE_NAME-inkonsekvens ("Drönare för elnätsinspektion" vs "EL Drönartjänster")
- Blandspråk "GDPR-compliant" → "GDPR-anpassad"
- Datasäkerhet-sidan var orphan (ej länkad från någon annan sida)

**Kvarstående krav som MÅSTE verifieras av er (se sektion 5).**

---

## 2. Övergripande sajtanalys

### Ramverk och teknik
- **Framework:** Next.js 14.2.35 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3.4.x med anpassat färgsystem
- **Font:** Inter via Google Fonts CDN (ej next/font)
- **Hosting:** Vercel (konfigurerat)
- **Analytics:** GA4 via next/script (kräver env-variabel NEXT_PUBLIC_GA_ID)

### Sidstruktur (10 publicerade sidor + 1 API-route)
| URL | Typ | Sökintention |
|---|---|---|
| `/` | Redirect → hub | - |
| `/elnatsinspektion-med-dronare` | Hub/startssida | Informationsöversikt |
| `.../luftledningar` | Tjänstesida | Vad inspekteras |
| `.../inspektionsprogram` | Tjänstesida | Val av inspektionstyp |
| `.../dataleveranser` | Tjänstesida | Vad man får |
| `.../metodik-kvalitet` | Tjänstesida | Metodik, QA, upphandling |
| `.../datasakerhet` | Stödsida | Datasäkerhet, GDPR |
| `.../faq` | Stödsida | Frågor & svar |
| `.../case` | Referenssida | Social proof |
| `.../kontakt` | Konvertering | Lead capture |
| `/integritetspolicy` | Legal | Integritetspolicy |
| `/api/lead` | API | Formulärmottagare |

### Styrkor
- Konsekvent designsystem (färger, typsnitt, spacing)
- Strukturerad data (JSON-LD) på alla sidor
- Bra intern länkstruktur mellan tjänstesidor
- Breadcrumbs på alla undersidor
- Sticky CTA på mobil
- Dynamisk sitemap.ts och robots.ts
- Säkerhetshuvuden (X-Frame-Options, CSP-basics)
- GDPR-medveten kontaktsida med integritetspolicy-länk

### Brister (identifierade och delvis åtgärdade)
- Inga riktiga bilder (bara SVG-placeholders)
- Placeholder-kontaktuppgifter (example.com)
- Placeholder SITE_URL (example.com)
- Inga OG-bilder för social delning
- Ingen favicon
- Referensuppdrag kan vara fiktivt (måste verifieras)
- Case-sidan har bara ett case
- Trust badges med regulatoriska påståenden som ej verifierats

---

## 3. Content consistency map

### Kärnbudskap
"Professionell drönareinspektion av elnät och luftledningar med standardiserad datainsamling."

### Målgrupp
Elnätsbolag (DSO/TSO), nätägare, underhållsorganisationer, upphandlare.

### Terminologi-standard (ska användas konsekvent)
| Term | Använd | Undvik |
|---|---|---|
| Drönareinspektion | ✓ | Drönarinspektion |
| Luftledningar | ✓ | Kraftledningar (om ej specifikt) |
| Stolpe | ✓ | Mast (om ej regionnät) |
| Georefererade bilder | ✓ | GPS-taggade foton |
| GIS-kompatibel | ✓ | GIS-redo (OK som kortform) |
| Elnätsbolag | ✓ | Energibolag (för generiskt) |
| Nätförvaltningssystem | ✓ | NIS (om ej förkortning krävs) |
| Inspektionsprogram | ✓ | Tjänstepaket |
| Avvikelse | ✓ | Fel/skada (mer neutralt) |

### CTA-hierarki
1. **Primär:** "Boka genomgång" → kontaktsida
2. **Sekundär:** "Begär offert" → kontaktsida
3. **Tertiär:** "Kontakta oss" → kontaktsida
4. **Navigering:** "Läs mer", "Se alla" → undersidor

### Intern länkstrategi
- Hub → alla undersidor (via ProgramCards, ProcessSteps, FAQ, etc.)
- Luftledningar → Inspektionsprogram, Dataleveranser
- Inspektionsprogram → Kontakt (via CTA)
- Dataleveranser → Metodik, Inspektionsprogram
- Metodik → Kontakt (via CTA)
- ComplianceModule → Datasäkerhet (ny länk, tillagd)
- Alla sidor → Kontakt (via CTABand)
- Footer → alla nav-sidor + integritetspolicy

---

## 4. Sida-för-sida förbättringsförslag

| Sida | SEO-titel (efter fix) | Problem innan | Förbättring gjord | Kvarvarande |
|---|---|---|---|---|
| Hub | Elnätsinspektion med drönare \| EL... | Dubbel titelsuffix | Fixat titelsystem | - |
| Luftledningar | Inspektion av luftledningar... | OK | - | - |
| Inspektionsprogram | Inspektionsprogram för elnät... | OK | - | - |
| Dataleveranser | Dataleveranser vid drönareinspektion... | Titel 66 tecken | Kortad | - |
| Metodik | Metodik och kvalitetssäkring... | Titel 79 tecken | Kortad | Verifiera ramavtalspåstående |
| Datasäkerhet | Datasäkerhet vid drönareinspektion... | Orphan, 64 tecken | Fixat länk, kortat | - |
| FAQ | Vanliga frågor om drönareinspektion... | 66 tecken | Kortad | - |
| Case | Referensuppdrag – drönareinspektion... | Bruten länk | Länk borttagen | Verifiera caset |
| Kontakt | Kontakt och offert... | OK-ish | Optimerad titel | Verifiera e-post/telefon |
| Integritetspolicy | Integritetspolicy | OK | - | Verifiera datum |

---

## 5. MÅSTE VERIFIERAS (kritiskt – publicera ej utan verifiering)

### A. Regulatoriska påståenden
| Påstående | Fil | Rad/plats | Vad som krävs |
|---|---|---|---|
| "Transportstyrelsens godkännande" | ProofBar.tsx | trustBadges | Ange specifik tillståndstyp (UAS-operatörstillstånd, EASA-kategori, LUC, etc.) |
| "Ansvarsförsäkrad" | ProofBar.tsx | trustBadges | Verifiera att UAS-ansvarsförsäkring existerar och är giltig |
| "gällande luftfartsregler och med nödvändiga tillstånd" | ComplianceModule.tsx | Regelefterlevnad | Specificera vilka tillstånd ni innehar |
| "riskanalys utförs inför varje uppdrag" | ComplianceModule.tsx | Regelefterlevnad | Verifiera att detta är standard i processen |

### B. Erfarenhetspåståenden
| Påstående | Fil | Vad som krävs |
|---|---|---|
| "Vi har erfarenhet av att arbeta inom ramavtal" | metodik-kvalitet/page.tsx | Verifiera att ni faktiskt deltagit i ramavtalsupphandlingar |
| Referensuppdrag "Elnätsbolag, Mellansverige" | CaseCard.tsx | Är detta ett verkligt uppdrag? Om ja: specificera. Om nej: ta bort. |

### C. Kontaktuppgifter (placeholder)
| Fält | Nuvarande | Vad som krävs |
|---|---|---|
| CONTACT_EMAIL | kontakt@example.com | Ersätt med riktig e-post |
| CONTACT_PHONE | +46 10 000 00 00 | Ersätt med riktigt nummer |
| SITE_URL | https://example.com | Sätt via env NEXT_PUBLIC_SITE_URL |
| GA4 ID | (tom) | Sätt via env NEXT_PUBLIC_GA_ID |

### D. Integritetspolicy
| Fält | Nuvarande | Vad som krävs |
|---|---|---|
| "Senast uppdaterad: 2025-01-01" | integritetspolicy/page.tsx | Verifiera/uppdatera datum |
| Lagringsperiod "24 månader" | integritetspolicy/page.tsx | Verifiera att detta stämmer med er policy |

---

## 6. Cleanup-plan

### Sidor
| Sida/URL | Problem | Åtgärd | Status |
|---|---|---|---|
| /elnatsinspektion-med-dronare/datasakerhet | Orphan – ej länkad | Länk tillagd i ComplianceModule | Implementerad |
| /elnatsinspektion-med-dronare/case/[slug] | CaseCard länkade hit, men sidan finns ej | Borttagen "Läs mer"-länk | Implementerad |
| src/pages/ (i tailwind content) | Mappen finns inte | Borttagen ur tailwind.config.ts | Implementerad |

### Kod
| Fil/komponent | Problem | Risknivå | Åtgärd | Status |
|---|---|---|---|---|
| StickyCTA.tsx | Hårdkodat tel:+4610000000 | Hög | Använder nu CONTACT_PHONE | Implementerad |
| metadata.ts SITE_NAME | "Drönare för elnätsinspektion" ≠ layout.tsx "EL Drönartjänster" | Hög (SEO) | Ändrat till "EL Drönartjänster" | Implementerad |
| metadata.ts title | Dubbel suffix: `title | SITE_NAME | EL Drönartjänster` | Kritisk (SEO) | title utan suffix, layout template hanterar | Implementerad |
| ProofBar.tsx | "GDPR-compliant" (engelska) | Låg | → "GDPR-anpassad" | Implementerad |
| CaseCard.tsx | Bruten Link import, bruten href | Medium | Borttagen Link, import removed | Implementerad |
| ComplianceModule.tsx | Ingen länk till datasäkerhet | Låg | Länk tillagd | Implementerad |
| public/ mapp | Tom – inga bilder, favicon eller OG | Medium | **Kräver riktiga assets** | Kräver beslut |
| ImagePlaceholder.tsx | SVG-placeholder, inte riktiga bilder | Låg | Behåll tills foton finns | Kvarvarande |

---

## 7. SEO-granskningsram (per sida)

Varje sida har kontrollerats för:
- [x] Unik SEO-titel (< 60 tecken)
- [x] Unik meta description (< 160 tecken)
- [x] Exakt 1 H1 per sida
- [x] Logisk H2/H3-hierarki
- [x] JSON-LD structured data (Service, BreadcrumbList, FAQPage)
- [x] Canonical URL
- [x] OpenGraph-data
- [x] Intern länkning (minst 1 inkommande + 1 utgående)
- [x] CTA kopplat till sidans syfte
- [x] Breadcrumbs
- [x] Keywords i title + H1

**Kvarstående SEO-uppgifter:**
- [ ] Lägg till OG-bild (kräver riktig bild eller genererad)
- [ ] Lägg till favicon (kräver design)
- [ ] Sätt riktigt NEXT_PUBLIC_SITE_URL (påverkar canonical, sitemap, OG)
- [ ] Verifiera att GA4 är konfigurerat

---

## 8. Teknisk/branschmässig granskning (drönartjänster)

### Korrekt använda termer
- "Drönareinspektion" ✓ (korrekt svensk term)
- "Georefererade bilder med EXIF" ✓ (tekniskt korrekt)
- "Standardiserade flygprofiler" ✓ (branschterm)
- "QA innan leverans" ✓ (vanlig praxis)
- "GIS-kompatibla kartlager (Shapefile, GeoJSON, KML)" ✓ (korrekta format)
- "SWEREF 99 TM" ✓ (standard koordinatsystem i Sverige)
- "Termografisk inspektion" ✓ (korrekt för värmekamerainspektion)
- "LiDAR" ✓ (korrekt akronym)
- "HSE" ✓ (branschstandard)
- "Riskanalys" ✓ (EASA-krav)

### Realistiska beskrivningar
- "Normalt ingen frånkoppling krävs" ✓ (korrekt hedging – beror på avstånd och spänningsnivå)
- "Kort mobiliseringstid" ✓ (hedgat, utan specifik tidsangivelse)
- "Tidsåtgången beror på ledningens längd, terräng, väderförhållanden..." ✓ (korrekt)

### VARNING – formuleringar som kräver verifiering
- "Alla flygningar genomförs i enlighet med gällande luftfartsregler" → OK som generell formulering, men specificera tillståndstyp om möjligt
- Trust badges ("Transportstyrelsens godkännande", "Ansvarsförsäkrad") → MÅSTE VERIFIERAS

---

## 9. QA-checklista före publicering

### Faktakontroll
- [ ] Alla påståenden i sektion 5 är verifierade
- [ ] Kontaktuppgifter (e-post, telefon) är riktiga
- [ ] SITE_URL pekar på rätt domän
- [ ] Referensuppdrag är verifierat (eller borttaget)
- [ ] Integritetspolicy datum är korrekt

### SEO
- [ ] Alla titlar < 60 tecken (kontrollera i browser)
- [ ] Alla meta descriptions < 160 tecken
- [ ] Canonical URLs pekar rätt (inte example.com)
- [ ] Sitemap genereras korrekt (besök /sitemap.xml)
- [ ] Robots.txt tillåter crawling (besök /robots.txt)
- [ ] OG-bilder finns (eller acceptera att de saknas)
- [ ] Favicon finns

### Teknik
- [ ] `npm run build` lyckas utan fel
- [ ] Alla sidor laddar utan 404
- [ ] Kontaktformuläret fungerar (testa POST /api/lead)
- [ ] StickyCTA telefonnummer ringer rätt nummer
- [ ] GA4 spårar korrekt (kontrollera i GA4 Realtime)
- [ ] Säkerhetshuvuden sätts (X-Frame-Options, etc.)

### Innehåll
- [ ] Inga engelska ord i svensk text (utom branschtermer: GDPR, HSE, GIS, QA, FAQ)
- [ ] Konsekvent terminologi enligt content consistency map
- [ ] Inga motsägelser mellan sidor
- [ ] Alla CTA:s leder till kontaktsidan
- [ ] Inga brutna internlänkar

### Kod
- [ ] Inga oanvända imports
- [ ] Inga hårdkodade URL:er eller telefonnummer
- [ ] CONTACT_EMAIL och CONTACT_PHONE används via constants
- [ ] Inga console.log i produktion (utom lead API)

---

## 10. Prioriterad åtgärdsplan

### Prio 1: Kritiskt (blockerande)
1. ~~Fix dubbel SEO-titel~~ ✅
2. ~~Fix bruten internlänk (CaseCard)~~ ✅
3. Ersätt placeholder-kontaktuppgifter (CONTACT_EMAIL, CONTACT_PHONE)
4. Sätt NEXT_PUBLIC_SITE_URL till riktig domän

### Prio 2: Hög (SEO-påverkan)
5. ~~Fix SITE_NAME-inkonsekvens~~ ✅
6. ~~Optimera SEO-titlar (< 60 tecken)~~ ✅
7. Lägg till OG-bild (genererad eller fotograferad)
8. Lägg till favicon
9. Verifiera regulatoriska påståenden (Transportstyrelsen, försäkring)

### Prio 3: Medium (trovärdighet)
10. ~~Fix orphan datasäkerhet-sida~~ ✅
11. Verifiera referensuppdrag eller ta bort
12. Ersätt SVG-placeholders med riktiga bilder
13. Lägg till fler referensuppdrag (om de finns)
14. Verifiera ramavtalspåstående

### Prio 4: Låg (underhåll)
15. ~~Fix GDPR-compliant → GDPR-anpassad~~ ✅
16. ~~Fix hårdkodat telefonnummer i StickyCTA~~ ✅
17. ~~Rensa oanvänd tailwind content path~~ ✅
18. Konfigurera CRM-integration för leadformuläret
19. Konfigurera GA4

---

## 11. Sammanfattning av kodändringar i denna revision

| Fil | Ändring |
|---|---|
| `src/lib/metadata.ts` | SITE_NAME: "Drönare för elnätsinspektion" → "EL Drönartjänster"; title utan suffix (layout template hanterar) |
| `src/components/StickyCTA.tsx` | Importerar CONTACT_PHONE; ersatt hårdkodat tel:+4610000000 |
| `src/components/ProofBar.tsx` | "GDPR-compliant" → "GDPR-anpassad"; MÅSTE VERIFIERAS-kommentar på trust badges |
| `src/components/CaseCard.tsx` | Borttagen bruten "Läs mer"-länk; MÅSTE VERIFIERAS-kommentar på sample case |
| `src/components/ComplianceModule.tsx` | Tillagd länk till datasäkerhetsida |
| `tailwind.config.ts` | Borttagen oanvänd `src/pages/` content path |
| `.../dataleveranser/page.tsx` | Kortare SEO-titel |
| `.../metodik-kvalitet/page.tsx` | Kortare SEO-titel |
| `.../datasakerhet/page.tsx` | Kortare SEO-titel |
| `.../faq/page.tsx` | Kortare SEO-titel |
| `.../kontakt/page.tsx` | Optimerad SEO-titel |
| `.../case/page.tsx` | Kortare SEO-titel |
| `.../page.tsx` (hub) | Kontextuell internlänk till luftledningar-sidan i intro |
| `.../dataleveranser/page.tsx` | Extra internlänk till datasäkerhet (relaterat-sektion) |
| `src/app/sitemap.ts` | Fix lastModified: statiskt byggdatum istf new Date() |
