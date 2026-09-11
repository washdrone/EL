export interface InspectionCosts {
  distance: number;
  frequency: number;
  current: number;
  drone: number;
  currentFixed: number;
  droneFixed: number;
}
/** Compare like-for-like inputs; never infer market prices. */
export function calculateInspectionCosts(n: InspectionCosts) {
  if (
    Object.values(n).some((v) => !Number.isFinite(v) || v < 0) ||
    n.distance <= 0 ||
    !Number.isInteger(n.frequency) ||
    n.frequency <= 0
  )
    return null;
  const current = (n.distance * n.current + n.currentFixed) * n.frequency;
  const drone = (n.distance * n.drone + n.droneFixed) * n.frequency;
  return Number.isFinite(current) && Number.isFinite(drone)
    ? { current, drone, difference: current - drone }
    : null;
}
