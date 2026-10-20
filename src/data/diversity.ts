export interface DiversityExample {
  id: string;
  commonName: string;
  scientificName: string;
  imageKey: string;
  description: string;
  habitat: string;
  size: string;
  adaptation: string;
}

export const diversityExamples: DiversityExample[] = [
  {
    id: "whale-shark",
    commonName: "Whale Shark",
    scientificName: "Rhincodon typus",
    imageKey: "whaleShark",
    description:
      "The largest fish in the ocean, the whale shark is a gentle filter feeder despite its massive size, often seen gliding slowly near the surface.",
    habitat: "Warm tropical and subtropical open oceans and coastal waters worldwide",
    size: "Up to around 18–20 m (59–65 ft), though most sighted individuals are smaller",
    adaptation:
      "Filter-feeds using specialized gill structures to strain plankton, small fish, and fish eggs from huge volumes of water.",
  },
  {
    id: "great-white",
    commonName: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    imageKey: "greatWhite",
    description:
      "A powerful apex predator with a torpedo-shaped body, the great white is built for speed and is one of the most well-studied large sharks.",
    habitat: "Coastal and offshore temperate waters worldwide",
    size: "Typically 3.5–6 m (11–20 ft)",
    adaptation:
      "Countershading (dark above, white below) helps conceal it from prey, while a highly developed sense of smell and electroreception aid long-distance hunting.",
  },
  {
    id: "great-hammerhead",
    commonName: "Great Hammerhead Shark",
    scientificName: "Sphyrna mokarran",
    imageKey: "greatHammerhead",
    description:
      "Instantly recognizable by its wide, flattened head (called a cephalofoil), the great hammerhead is a highly mobile hunter of rays and other fish.",
    habitat: "Tropical and warm temperate coastal and offshore waters worldwide",
    size: "Up to about 6 m (20 ft)",
    adaptation:
      "The wide head spreads electroreceptors over a larger area, improving its ability to detect prey — especially stingrays buried in sand — and may also improve maneuverability.",
  },
  {
    id: "spotted-wobbegong",
    commonName: "Spotted Wobbegong (a Carpet Shark)",
    scientificName: "Orectolobus maculatus",
    imageKey: "spottedWobbegong",
    description:
      "A member of the carpet shark order, the wobbegong is a flattened, bottom-dwelling shark named for its carpet-like, mottled camouflage pattern.",
    habitat: "Shallow reefs, rocky areas, and sandy seafloor around Australia",
    size: "Up to about 3 m (10 ft)",
    adaptation:
      "Elaborate skin flaps around the mouth and cryptic coloration allow it to lie motionless on the seafloor, ambushing fish and invertebrates that pass too close.",
  },
  {
    id: "goblin-shark",
    commonName: "Goblin Shark (a Deep-Sea Shark)",
    scientificName: "Mitsukurina owstoni",
    imageKey: "goblinShark",
    description:
      "A rarely seen deep-sea shark with an unmistakable long, flattened snout and jaws that can shoot forward to snatch prey — sometimes called a 'living fossil' lineage.",
    habitat: "Deep continental slopes and seamounts worldwide, usually below 250 m",
    size: "Up to about 3.8–6 m (12–20 ft), reports vary",
    adaptation:
      "Its elongated snout is packed with electroreceptors to detect prey in total darkness, and its jaws can rapidly extend forward in a slingshot-like strike.",
  },
];
