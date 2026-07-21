export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Vilka typer av luftledningar inspekterar ni?",
    answer:
      "Vi utför inspektion av luftledningar i distributions- och regionnät. Inspektionen anpassas efter spänningsnivå och nätägarens specifika krav på dokumentation och bildunderlag.",
  },
  {
    question: "Hur lång tid tar en inspektion?",
    answer:
      "Tidsåtgången beror på ledningens längd, terräng, väderförhållanden och vilken typ av inspektion som genomförs. Vid en initial genomgång uppskattar vi tidsåtgången baserat på era GIS-underlag och ger er ett detaljerat schema.",
  },
  {
    question: "Vilka data och leveranser ingår?",
    answer:
      "Standardleveransen omfattar georefererade högupplösta bilder, strukturerad rapport per stolpe/sektion och kartlager kompatibla med vanliga GIS-system. Exakt format och detaljnivå anpassas efter er specifikation.",
  },
  {
    question: "Hur säkerställer ni kvaliteten på insamlad data?",
    answer:
      "Vi arbetar med standardiserade bildvinklar och kontrollpunkter för varje stolpe och ledningssektion. Alla bilder genomgår en kvalitetskontroll (QA) innan leverans, och saknade eller otillräckliga bilder kompletteras.",
  },
  {
    question: "Hur hanteras arbetsmiljö och säkerhet (HSE)?",
    answer:
      "Alla uppdrag genomförs enligt gällande luftfartsregler och med riskanalys anpassad för arbete i närheten av elektriska anläggningar. Våra piloter är EASA-utbildade med BVLOS-behörighet och mörkerflyg. Vi följer nätägarens säkerhetsföreskrifter.",
  },
  {
    question: "Kan ni utföra akutinspektion efter storm eller annan händelse?",
    answer:
      "Ja, vi erbjuder akutinspektion med kort mobiliseringstid. Vid stormskador eller andra akuta händelser kan vi snabbt ge er en översikt av skadeläget för prioritering av reparationsinsatser.",
  },
  {
    question: "Hur fungerar det vid upphandling?",
    answer:
      "Vi kan tillhandahålla information som behövs för upphandling: metodbeskrivning, leveransformat, QA-process och prissättningsmodell. Vi kan anpassa leveransen efter ert förfrågningsunderlag.",
  },
  {
    question: "Vilken utrustning använder ni?",
    answer:
      "Vi använder professionella multirotordrönare med högupplösta RGB-kameror, RTK-positionering för centimeternoggrann georeferering och radiometrisk värmekamera för termografering. LiDAR finns som tillval för 3D-kartläggning och vegetationskontroll. Utrustningen anpassas efter uppdragets krav.",
  },
  {
    question: "Hur levereras data och hur snabbt?",
    answer:
      "Data levereras digitalt i överenskommet format. Leveranstiden beror på uppdragets omfattning och avtalas vid beställning. Akutinspektion har kortare leveranstid.",
  },
  {
    question: "Vad behöver ni från oss för att ge en offert?",
    answer:
      "För en träffsäker offert behöver vi: ungefärlig sträcka (km ledning) eller antal stolpar, nättyp och spänningsnivå, eventuella GIS-underlag samt önskad inspektionstyp och leveransformat.",
  },
  {
    question: "Påverkar inspektionen driften av elnätet?",
    answer:
      "Drönarinspektion genomförs normalt utan driftstopp. Vi flyger i säkert avstånd från spänningsförande delar och koordinerar med nätägaren för att minimera eventuell påverkan på driften.",
  },
  {
    question: "Hur hanterar ni vår data?",
    answer:
      "All data hanteras konfidentiellt och enligt avtal med uppdragsgivaren. Vi lagrar data säkert under avtalad period och delar aldrig information med tredje part utan ert godkännande.",
  },
  {
    question: "Kan ni integrera data med vårt befintliga system?",
    answer:
      "Vi levererar data i standardiserade format (t.ex. GeoTIFF, shapefiler, CSV) som är kompatibla med de flesta GIS- och nätförvaltningssystem. Vid behov anpassar vi leveransformatet efter ert system.",
  },
  {
    question: "Vad driver priset för en inspektion?",
    answer:
      "De viktigaste prisdrivarna är: ledningens längd, terrängens tillgänglighet, inspektionstyp (översiktlig vs detaljerad), krav på leveranser/analys samt mobiliseringsavstånd. Kontakta oss för en kostnadsuppskattning baserad på ert specifika behov.",
  },
  {
    question: "Hur fungerar kraftledningsinspektion med drönare?",
    answer:
      "Drönaren flyger längs kraftledningen och fotograferar varje stolpe, isolator, traverser och ledningsgata med högupplöst kamera. Bilderna georefereras med GPS-koordinater och levereras i en strukturerad rapport. Inspektionen utförs utan driftstopp och med säkert avstånd till spänningsförande delar.",
  },
  {
    question: "Vad är BVLOS och vilka tillstånd krävs i Sverige?",
    answer:
      "BVLOS (Beyond Visual Line of Sight) innebär att drönaren flyger bortom pilotens synhåll. Det krävs specifika tillstånd från Transportstyrelsen, inklusive godkänd riskbedömning (PDRA/SORA), redundanta kommunikationssystem och dokumenterade säkerhetsprocedurer. BVLOS möjliggör inspektion av långa ledningssträckor utan ompositionering.",
  },
  {
    question: "Hur mycket billigare är drönare jämfört med helikopter för elnätsinspektion?",
    answer:
      "Kostnadsbesparingen varierar beroende på uppdragets förutsättningar. Generellt har drönarinspektioner lägre driftkostnad per kilometer jämfört med helikopter, särskilt vid kortare till medellånga sträckor. Använd vår kostnadskalkylator för en uppskattning baserad på era parametrar.",
  },
  {
    question: "Hur snabbt kan GridDrone mobilisera efter en storm?",
    answer:
      "Vi har beredskap för snabb mobilisering efter stormlarm. Exakt mobiliseringstid beror på stormens omfattning, väderlägessituation och geografisk placering. Abonnemangskunder prioriteras vid stormskadeinspektioner.",
  },
  {
    question: "Vad är termografering av elnät och vad kan det hitta?",
    answer:
      "Termografering innebär att använda en radiometrisk värmekamera för att identifiera temperaturavvikelser i elnätskomponenter. Det kan hitta varmgångar i skarvar, överbelastade transformatorer, defekta isolatorer med interna fel och kontaktmotstånd i kopplingsanordningar.",
  },
  {
    question: "Hur inspekteras järnvägskontaktledningar med drönare?",
    answer:
      "Drönaren flyger längs spåret och fotograferar kontaktledningssystemets komponenter — hängare, bärlina, kontakttråd, isolatorer och fästanordningar. Inspektionen utförs under trafikfria tidsfönster i samordning med trafikledningen.",
  },
  {
    question: "Vad ingår i ett prediktivt underhållsabonnemang?",
    answer:
      "Schemalagda inspektioner med överenskommen frekvens, historisk datalagring med trendanalyser, prioriterad respons vid stormskada, dedikerad kontaktperson och årlig sammanfattningsrapport med rekommendationer.",
  },
  {
    question: "Kan drönare flyga säkert nära högspänningsledningar?",
    answer:
      "Ja, inspektionen utförs med säkert avstånd till spänningsförande delar och enligt gällande luftfartsregler. Våra piloter är utbildade i arbete nära elektriska anläggningar och följer nätägarens säkerhetsföreskrifter.",
  },
  {
    question: "Hur ser en inspektionsrapport ut?",
    answer:
      "Rapporten innehåller försättsblad med uppdragsdata, sammanfattningstabell med fynd per klassificering, GPS-karta med fyndmarkeringar, detaljerade fyndkort med foto, koordinat och åtgärdsrekommendation, samt teknisk bilaga. Se vår exempelrapport för ett anonymiserat exempel.",
  },
];
