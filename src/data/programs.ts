export interface InspectionProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  deliverables: string[];
  frequency: string;
  cta: string;
}

export const inspectionPrograms: InspectionProgram[] = [
  {
    id: "arlig",
    title: "Årlig översiktsinspektion",
    subtitle: "Systematisk genomgång av hela ledningsnätet",
    description:
      "Planerad inspektion av ledningssträckor för att identifiera synliga avvikelser, vegetationsintrång och komponentstatus. Ger er ett aktuellt underlag för underhållsplanering.",
    features: [
      "Standardiserade bildvinklar per stolpe",
      "Vegetationsbedömning längs ledningsgata",
      "Komponentöversikt (isolatorer, traverser, linor)",
      "Georefererad dokumentation",
    ],
    deliverables: [
      "Bildprotokoll per stolpe/sektion",
      "Avvikelserapport med prioritering",
      "Kartlager (GIS-kompatibelt)",
    ],
    frequency: "Årligen eller enligt underhållsplan",
    cta: "Boka genomgång",
  },
  {
    id: "detaljerad",
    title: "Detaljerad komponentinspektion",
    subtitle: "Närbild och detaljgranskning av kritiska komponenter",
    description:
      "Fördjupad inspektion med fokus på enskilda komponenter: isolatorer, kopplingar, korrosion, mekanisk skada. Används för punktinspektion eller som uppföljning av identifierade avvikelser.",
    features: [
      "Högupplösta närbilder av komponenter",
      "Dokumentation av skador och slitage",
      "Jämförelse mot tidigare inspektion (vid repeterbarhet)",
      "Underlag för åtgärdsbeslut",
    ],
    deliverables: [
      "Detaljerat bildprotokoll per komponent",
      "Statusklassificering",
      "Åtgärdsrekommendation",
    ],
    frequency: "Vid behov eller som uppföljning",
    cta: "Begär offert",
  },
  {
    id: "storm",
    title: "Storm- och akutinspektion",
    subtitle: "Snabb insats efter storm, åska eller annan händelse",
    description:
      "Akut inspektion med kort mobiliseringstid för att snabbt kartlägga skadeläget efter stormar, trädfällning eller andra händelser. Ger er beslutsunderlag för prioritering av reparationer.",
    features: [
      "Kort mobiliseringstid",
      "Översiktlig skadekartläggning",
      "Prioriteringsunderlag för reparation",
      "Dokumentation för försäkring och rapportering",
    ],
    deliverables: [
      "Skaderapport med bilder och position",
      "Prioriteringslista",
      "Kartöversikt över drabbade sektioner",
    ],
    frequency: "Vid akut behov",
    cta: "Kontakta oss direkt",
  },
];

export const optionalAddons = [
  {
    id: "termografi",
    title: "Termografisk inspektion",
    description:
      "Värmekamera för att identifiera hotspots i kopplingar och komponenter. Erbjuds som tillägg till övriga inspektionstyper.",
    note: "Valbart tillägg – diskuteras vid offertförfrågan.",
  },
  {
    id: "lidar",
    title: "LiDAR och 3D-kartläggning",
    description:
      "Laserscanning för detaljerad 3D-modell av ledning och omgivande vegetation. Används för vegetationsanalys och avståndsmätning.",
    note: "Valbart tillägg – tillgänglighet och pris vid förfrågan.",
  },
];
