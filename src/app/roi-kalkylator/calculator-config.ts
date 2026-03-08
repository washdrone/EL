/**
 * Konfiguration för kostnadskalkylator.
 *
 * Alla värden är generella branschuppskattningar och INTE verifierade
 * GridDrone-priser. Byt ut mot faktiska priser när data finns tillgänglig.
 *
 * Intervall (low/high) används för att visa uppskattade spann snarare
 * än exakta siffror.
 */

export interface CostRange {
  /** Lågt estimat (kr/km) */
  low: number;
  /** Högt estimat (kr/km) */
  high: number;
  /** Typvärde som används i beräkningen (kr/km) */
  typical: number;
}

export interface MethodConfig {
  label: string;
  shortLabel: string;
  costPerKm: CostRange;
}

export const METHODS: Record<string, MethodConfig> = {
  helikopter: {
    label: "Helikopter",
    shortLabel: "helikopter",
    costPerKm: {
      low: 2500,
      high: 5000,
      typical: 3500,
    },
  },
  manuell: {
    label: "Manuell / markbaserad",
    shortLabel: "manuell inspektion",
    costPerKm: {
      low: 3500,
      high: 7000,
      typical: 5000,
    },
  },
};

export const DRONE_COST_PER_KM: CostRange = {
  low: 800,
  high: 2000,
  typical: 1200,
};

export const FREQUENCY_OPTIONS = [
  { value: 1, label: "1 gång per år" },
  { value: 2, label: "2 gånger per år" },
  { value: 4, label: "4 gånger per år (kvartalsvis)" },
] as const;

export const KM_PRESETS = [10, 50, 100, 250, 500] as const;

export const KM_MIN = 1;
export const KM_MAX = 2000;
export const KM_DEFAULT = 50;

/**
 * Faktorer som påverkar faktisk kostnad — visas i transparenssektionen.
 */
export const COST_FACTORS = [
  "Ledningstyp (regionnät, lokalnät, stamnät)",
  "Terräng och tillgänglighet",
  "Datakrav (visuell, termisk, LiDAR)",
  "Mobiliseringskostnad och geografiskt läge",
  "Krav på dokumentation och rapportering",
  "Antal stolpar och spann per km",
  "Säsong och väderförhållanden",
] as const;
