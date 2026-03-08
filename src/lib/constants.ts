export const CONTACT_EMAIL = "info@griddrone.se";
export const COMPANY_NAME = "GridDrone";

export const NAV_ITEMS = [
  {
    label: "Tjänster",
    href: "/tjanster",
  },
  {
    label: "Branscher",
    href: "/branscher/energibolag",
  },
  {
    label: "Exempelrapport",
    href: "/exempelrapport",
  },
  {
    label: "Kostnadskalkylator",
    href: "/roi-kalkylator",
  },
  {
    label: "Om oss",
    href: "/om-oss",
  },
  {
    label: "Blogg",
    href: "/blogg",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
] as const;

export const SERVICE_ITEMS = [
  {
    label: "Kraftledningsinspektion",
    href: "/tjanster/kraftledningsinspektion",
    description: "Visuell inspektion av luftledningar, stolpar och isolatorer",
  },
  {
    label: "Termografering",
    href: "/tjanster/termografering-kraftledning",
    description: "Radiometrisk värmekamerainspektion av elnät och stationer",
  },
  {
    label: "Transformatorstation",
    href: "/tjanster/transformatorstation-inspektion",
    description: "Visuell och termisk kontroll av transformatorstationer",
  },
  {
    label: "Vegetationskontroll",
    href: "/tjanster/vegetationskontroll",
    description: "LiDAR-baserad kartläggning av kraftledningsgator",
  },
  {
    label: "BVLOS-inspektion",
    href: "/tjanster/bvlos-inspektion",
    description: "Inspektera långa ledningssträckor utan siktlinjekrav",
  },
  {
    label: "Stormskadeinspektion",
    href: "/tjanster/stormskadeinspektion",
    description: "Akut skadekartläggning och prioritering efter storm",
  },
  {
    label: "Vindkraftinspektion",
    href: "/tjanster/vindkraftinspektion",
    description: "Inspektion av rotorblad, torn och nacelle",
  },
  {
    label: "Järnvägsinspektion",
    href: "/tjanster/jarnvagsinspektion",
    description: "Inspektion av kontaktledningar längs järnväg",
  },
  {
    label: "Underhållsabonnemang",
    href: "/tjanster/underhallsabonnemang",
    description: "Schemalagd inspektion med historisk jämförelse och trendanalys",
  },
] as const;

export const BRANCH_ITEMS = [
  {
    label: "Nätägare & energibolag",
    href: "/branscher/energibolag",
    description: "Regionala & lokala nätägare och elnätsleverantörer",
  },
  {
    label: "Trafikverket",
    href: "/branscher/trafikverket",
    description: "Järnväg & kontaktledning",
  },
  {
    label: "Vindkraft",
    href: "/branscher/vindkraft",
    description: "Vindkraftoperatörer",
  },
  {
    label: "Kommuner",
    href: "/branscher/kommuner",
    description: "Kommuner & kommunala energibolag",
  },
  {
    label: "Försäkring",
    href: "/branscher/forsakring",
    description: "Försäkringsbolag — skadedokumentation",
  },
] as const;
