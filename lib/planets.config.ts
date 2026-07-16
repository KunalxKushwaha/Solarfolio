export type PlanetConfig = {
  id: string;
  name: string;
  label: string;
  sectionTitle: string;
  color: string;
  emissive: string;
  size: number;
  distance: number;      // distance from sun along Z
  yOffset: number;       // vertical offset for cinematic variety
  rings?: boolean;
  atmosphere?: boolean;
  rotationSpeed: number;
};

// Camera travels along -Z. Each planet sits further along the journey.
export const PLANETS: PlanetConfig[] = [
  { id: 'mercury', name: 'Mercury', label: '01', sectionTitle: 'About Me',
    color: '#b8a58a', emissive: '#3a2f22', size: 0.9, distance: -30, yOffset: 0.4, rotationSpeed: 0.05 },
  { id: 'venus',   name: 'Venus',   label: '02', sectionTitle: 'Tech Stack',
    color: '#e6b47a', emissive: '#5a3212', size: 1.4, distance: -60, yOffset: -0.6, atmosphere: true, rotationSpeed: 0.03 },
  { id: 'earth',   name: 'Earth',   label: '03', sectionTitle: 'Projects',
    color: '#3a7bd5', emissive: '#0a2a55', size: 1.7, distance: -95, yOffset: 0.3, atmosphere: true, rotationSpeed: 0.08 },
  { id: 'mars',    name: 'Mars',    label: '04', sectionTitle: 'Experience',
    color: '#c1440e', emissive: '#3a1004', size: 1.2, distance: -130, yOffset: -0.4, rotationSpeed: 0.07 },
  { id: 'jupiter', name: 'Jupiter', label: '05', sectionTitle: 'Strengths',
    color: '#d9a066', emissive: '#4a3018', size: 3.2, distance: -175, yOffset: 0.8, rotationSpeed: 0.12 },
  { id: 'saturn',  name: 'Saturn',  label: '06', sectionTitle: 'Certifications',
    color: '#e0c68a', emissive: '#4a3b1a', size: 2.6, distance: -220, yOffset: -0.5, rings: true, rotationSpeed: 0.1 },
  { id: 'uranus',  name: 'Uranus',  label: '07', sectionTitle: 'Achievements',
    color: '#9fdcdc', emissive: '#1a4a4a', size: 2.0, distance: -265, yOffset: 0.5, atmosphere: true, rotationSpeed: 0.09 },
  { id: 'neptune', name: 'Neptune', label: '08', sectionTitle: 'Contact',
    color: '#4166f5', emissive: '#0a1a5a', size: 2.0, distance: -310, yOffset: -0.3, atmosphere: true, rotationSpeed: 0.09 }
];

export const JOURNEY_END = -360; // final ending camera position
