export const inspectionLabels: Record<string, string> = {
  arlig: "Årlig översiktsinspektion",
  detaljerad: "Detaljerad komponentinspektion",
  kraftledning: "Kraftledningsinspektion",
  termografi: "Termografering",
  vegetation: "Vegetationskontroll",
  station: "Transformatorstation",
  vindkraft: "Vindkraftinspektion",
  jarnvag: "Järnvägsinspektion",
  bvlos: "BVLOS-inspektion",
  abonnemang: "Underhållsabonnemang",
  storm: "Storm- / akutinspektion",
  lidar: "LiDAR / kartläggning (tillägg)",
  annan: "Annat / vet ej",
};
export function validInspection(value: unknown): string {
  return typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(inspectionLabels, value)
    ? value
    : "";
}
