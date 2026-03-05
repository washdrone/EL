# CLAUDE.md – Projektregler för EL (GridDrone)

## Absolut regel: Gissa aldrig, anta aldrig

**All fakta som anges på sajten MÅSTE komma från verifierade källor.**

- Hitta ALDRIG på siffror, specifikationer, certifieringar, utrustningsmodeller, prestanda eller andra faktapåståenden.
- Anta ALDRIG att företaget har en viss certifiering, tillstånd, försäkring eller utrustning utan att det är bekräftat.
- Anta ALDRIG att företaget har utfört specifika uppdrag, arbetat med specifika kunder eller har viss erfarenhet.
- Använd ALDRIG generiska branschsiffror (t.ex. "50-80% billigare", "15+ km per dag") som om de vore företagets egna verifierade data.
- Nämn ALDRIG specifika kundnamn (t.ex. E.ON, Vattenfall, Ellevio) om det inte finns bekräftad affärsrelation.
- Presentera ALDRIG påståenden som fakta i structured data (JSON-LD, meta-taggar) om de inte är verifierade.

### Vad du ska göra istället

1. **Fråga ägaren** om du behöver specifik information (certifieringar, utrustning, kundrelationer, prestanda).
2. **Använd platshållare** tydligt markerade med `[VERIFIERAS]` om information saknas och sidan ändå behöver en struktur.
3. **Skriv villkorat** – t.ex. "beroende på uppdragets omfattning" istället för att ange en specifik siffra.
4. **Referera till källor** när du anger branschfakta – ange varifrån uppgiften kommer.

### Omfattning

Denna regel gäller för:
- Alla sidor (startsida, tjänstesidor, om oss, certifieringar, branscher, platser, blogg)
- Alla komponenter (ProofBar, Hero, CaseCard, JsonLd, Footer, etc.)
- All metadata (SEO-titlar, meta descriptions, OpenGraph)
- All structured data (JSON-LD)
- Alla datafiler (faq.ts, programs.ts, constants.ts)

## Teknikstack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Vercel (hosting)

## Kommandon

- `npm run dev` – starta utvecklingsserver
- `npm run build` – bygga för produktion
- `npm run lint` – köra ESLint
