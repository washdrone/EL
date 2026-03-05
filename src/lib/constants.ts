export const CONTACT_EMAIL = "kontakt@example.com";
export const CONTACT_PHONE = "+46 10 000 00 00";
export const COMPANY_NAME = "GridDrone";

export const NAV_ITEMS = [
  {
    label: "Tjänster",
    href: "/tjanster/kraftledningsinspektion",
  },
  {
    label: "Termografering",
    href: "/tjanster/termografering-kraftledning",
  },
  {
    label: "Vindkraft",
    href: "/tjanster/vindkraftinspektion",
  },
  {
    label: "Om oss",
    href: "/om-oss",
  },
  {
    label: "FAQ",
    href: "/tjanster/kraftledningsinspektion/faq",
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
    description: "Drönarbaserad värmekamerainspektion av elnät",
  },
  {
    label: "Vindkraftinspektion",
    href: "/tjanster/vindkraftinspektion",
    description: "Inspektion av rotorblad, torn och nacelle",
  },
  {
    label: "BVLOS-inspektion",
    href: "/tjanster/bvlos-inspektion",
    description: "Lång räckvidd — inspektera långa ledningssträckor effektivt",
  },
  {
    label: "Transformatorstation",
    href: "/tjanster/transformatorstation-inspektion",
    description: "Säker inspektion av transformatorstationer",
  },
  {
    label: "Solcellspark",
    href: "/tjanster/solcellspark-inspektion",
    description: "Termografi och visuell kontroll av solcellsparker",
  },
  {
    label: "Vegetationskontroll",
    href: "/tjanster/vegetationskontroll",
    description: "LiDAR-baserad kartläggning av kraftledningsgator",
  },
] as const;
