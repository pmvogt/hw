export interface OrbitCard {
  id: string;
  title: string;
  body: string;
  /** latitude degrees (-90..90) */
  lat: number;
  /** longitude degrees (-180..180) */
  lon: number;
  /** Placeholder / partner image above the card copy */
  imageSrc: string;
  /**
   * Distinct spoke hue (muted industrial, not amber-family variants).
   * Kept desaturated so they sit with black / gold / white without rainbow noise.
   */
  spokeColor: string;
}

/** Brand amber: used by the Power spoke and the hub plate. */
export const HUB_SPOKE_COLOR = "#e8a020";

/**
 * Six clear hues, one per input — defense-HUD tempered, not neon:
 * bone · brand gold · rust · steel · olive · ice
 */
export const ORBIT_CARDS: OrbitCard[] = [
  {
    id: "comms",
    title: "Comms",
    body: "Starlink",
    lat: 28,
    lon: 0,
    imageSrc: "/figma/card-thumbs/comms.png",
    spokeColor: "#e4ddd0",
  },
  {
    id: "power",
    title: "Power",
    body: "Eco Flow",
    lat: 12,
    lon: 60,
    imageSrc: "/figma/card-thumbs/power.png",
    spokeColor: "#e8a020",
  },
  {
    id: "sensors",
    title: "SENSORS",
    body: "Luminar",
    lat: 18,
    lon: 120,
    imageSrc: "/figma/card-thumbs/sensors.png",
    spokeColor: "#6f92b0",
  },
  {
    id: "robotics",
    title: "ROBOTICS",
    body: "Boston Dynamics",
    lat: 22,
    lon: 180,
    imageSrc: "/figma/card-thumbs/robotics.png",
    spokeColor: "#8b9a62",
  },
  {
    id: "compute",
    title: "Compute",
    body: "Qualcomm",
    lat: 2,
    lon: -120,
    imageSrc: "/figma/card-thumbs/compute.png",
    spokeColor: "#c45c48",
  },
  {
    id: "llms",
    title: "LLMs",
    body: "DeepMind, NVIDIA",
    lat: 24,
    lon: -35,
    imageSrc: "/figma/card-thumbs/llms.png",
    spokeColor: "#9aa6b8",
  },
];

export const GLOBE_RADIUS = 1.55;
export const CARD_RADIUS = 2.05;
export const CARD_RADIUS_COMPACT = 1.68;

/** Shared harness plaque just above the north pole (kept inside the viewport). */
export const HARNESS_HUB: [number, number, number] = [0, GLOBE_RADIUS * 1.04, 0];

export function latLonToVec(lat: number, lon: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}
