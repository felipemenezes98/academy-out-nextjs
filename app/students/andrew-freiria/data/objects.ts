export type NEO = {
  id: string;
  name: string;
  type: "Asteroid" | "Comet";
  discovery: string;
  velocity: string;
  distanceKm: number;
  distanceLabel: string;
  approachDate: string;
  sizeLabel: string;
  orbitClass: string;
  risk: "Low" | "Monitor";
  observations: string;
  description: string;
};

export const objects: NEO[] = [
  {
    id: "2026-ab12",
    name: "2026 AB12",
    type: "Asteroid",
    discovery: "2026",
    velocity: "16.8 km/s",
    distanceKm: 780000,
    distanceLabel: "780,000 km",
    approachDate: "Aug 11, 2026",
    sizeLabel: "420 m",
    orbitClass: "Apollo",
    risk: "Low",
    observations: "48",
    description: "A fictional Apollo-class near-Earth asteroid used to demonstrate the Earth Watch interface.",
  },
  {
    id: "2026-cd3",
    name: "2026 CD3",
    type: "Asteroid",
    discovery: "2026",
    velocity: "18.2 km/s",
    distanceKm: 1240000,
    distanceLabel: "1.24M km",
    approachDate: "Aug 14, 2026",
    sizeLabel: "760 m",
    orbitClass: "Apollo",
    risk: "Low",
    observations: "63",
    description: "A fictional object with a relatively large estimated diameter and a distant approach.",
  },
  {
    id: "2026-xy7",
    name: "2026 XY7",
    type: "Comet",
    discovery: "2025",
    velocity: "21.4 km/s",
    distanceKm: 2310000,
    distanceLabel: "2.31M km",
    approachDate: "Aug 19, 2026",
    sizeLabel: "1.2 km",
    orbitClass: "Jupiter-family",
    risk: "Low",
    observations: "31",
    description: "A fictional comet included to show how different near-Earth object types can coexist in the explorer.",
  },
  {
    id: "2026-ef1",
    name: "2026 EF1",
    type: "Asteroid",
    discovery: "2026",
    velocity: "12.7 km/s",
    distanceKm: 3180000,
    distanceLabel: "3.18M km",
    approachDate: "Aug 22, 2026",
    sizeLabel: "180 m",
    orbitClass: "Aten",
    risk: "Low",
    observations: "22",
    description: "A fictional Aten-class asteroid with a small estimated diameter.",
  },
  {
    id: "2026-gh4",
    name: "2026 GH4",
    type: "Asteroid",
    discovery: "2026",
    velocity: "24.1 km/s",
    distanceKm: 4100000,
    distanceLabel: "4.10M km",
    approachDate: "Aug 27, 2026",
    sizeLabel: "95 m",
    orbitClass: "Apollo",
    risk: "Monitor",
    observations: "17",
    description: "A fictional fast-moving asteroid included for dashboard filtering and comparison.",
  },
  {
    id: "2026-jk8",
    name: "2026 JK8",
    type: "Asteroid",
    discovery: "2024",
    velocity: "14.3 km/s",
    distanceKm: 5620000,
    distanceLabel: "5.62M km",
    approachDate: "Sep 02, 2026",
    sizeLabel: "2.4 km",
    orbitClass: "Amor",
    risk: "Low",
    observations: "74",
    description: "A fictional large Amor-class object with a relatively distant approach.",
  },
];

export const highlights = [
  { label: "Near Earth", value: "12", description: "objects currently monitored" },
  { label: "Closest approach", value: "780K km", description: "in the current dataset" },
  { label: "Largest object", value: "2.4 km", description: "estimated diameter" },
  { label: "Fastest object", value: "24.1 km/s", description: "relative velocity" },
];
