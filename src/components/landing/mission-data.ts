export interface OrbitCard {
  id: string;
  title: string;
  body: string;
  /** latitude degrees (-90..90) */
  lat: number;
  /** longitude degrees (-180..180) */
  lon: number;
}

/** Evenly spaced around the equator band so orbit mode rarely looks empty. */
export const ORBIT_CARDS: OrbitCard[] = [
  { id: "comms", title: "Comms", body: "Starlink", lat: 28, lon: 0 },
  { id: "power", title: "Power", body: "Eco Flow", lat: 12, lon: 60 },
  { id: "sensors", title: "SENSORS", body: "Luminar", lat: 18, lon: 120 },
  { id: "robotics", title: "ROBOTICS", body: "Boston Dynamics", lat: 22, lon: 180 },
  { id: "compute", title: "Compute", body: "Qualcomm", lat: -8, lon: -120 },
  { id: "llms", title: "LLMs", body: "DeepMind, NVIDIA", lat: -18, lon: -60 },
];

export const GLOBE_RADIUS = 1.55;
export const CARD_RADIUS = 2.05;
export const CARD_RADIUS_COMPACT = 1.68;

export function latLonToVec(lat: number, lon: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}
