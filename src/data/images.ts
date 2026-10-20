// Centralized image metadata with verified sources from Wikimedia Commons.
// Every entry includes credit, license, and source link for the
// "Sources and Image Credits" section and inline display.

export interface ImageCredit {
  src: string;
  alt: string;
  creator: string;
  license: string;
  sourceUrl: string;
  speciesShown: string;
}

export const images: Record<string, ImageCredit> = {
  commonThresher: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Thresher_shark.jpg",
    alt: "Common thresher shark (Alopias vulpinus) swimming near the surface, showing its extremely long, scythe-like upper tail lobe.",
    creator: "NOAA Fisheries Apex Predators Investigation",
    license: "Public Domain (U.S. Government work)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thresher_shark.jpg",
    speciesShown: "Common thresher shark (Alopias vulpinus)",
  },
  bigeyeThresher: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alopias_superciliosus.jpg",
    alt: "Bigeye thresher shark (Alopias superciliosus) viewed from the side, showing its notably large, upward-oriented eyes and long tail fin.",
    creator: "PIRO-NOAA Observer Program",
    license: "Public Domain (U.S. Government work)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alopias_superciliosus.jpg",
    speciesShown: "Bigeye thresher shark (Alopias superciliosus)",
  },
  pelagicThresher: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Pelagic_thresher_shark_%28Alopias_pelagicus%29.jpg",
    alt: "Pelagic thresher shark (Alopias pelagicus) swimming in open water off Tabango, Philippines, showing its slender build and long tail.",
    creator: "Pierre Pericard (iNaturalist)",
    license: "CC BY 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pelagic_thresher_shark_(Alopias_pelagicus).jpg",
    speciesShown: "Pelagic thresher shark (Alopias pelagicus)",
  },
  greatWhite: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
    alt: "Great white shark (Carcharodon carcharias) swimming near Isla Guadalupe, Mexico, showing its torpedo-shaped body and conical snout.",
    creator: "Terry Goss (Pterantula)",
    license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:White_shark.jpg",
    speciesShown: "Great white shark (Carcharodon carcharias)",
  },
  whaleShark: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Male_whale_shark_at_Georgia_Aquarium.jpg",
    alt: "Whale shark (Rhincodon typus) at the Georgia Aquarium, showing its enormous size, broad flattened head, and distinctive white-spotted pattern.",
    creator: "Zac Wolf",
    license: "CC BY-SA 2.5",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Male_whale_shark_at_Georgia_Aquarium.jpg",
    speciesShown: "Whale shark (Rhincodon typus)",
  },
  greatHammerhead: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Sphyrna_mokarran_at_georgia.jpg",
    alt: "Great hammerhead shark (Sphyrna mokarran) at the Georgia Aquarium, showing its wide, flattened hammer-shaped head.",
    creator: "Josh Hallett",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sphyrna_mokarran_at_georgia.jpg",
    speciesShown: "Great hammerhead shark (Sphyrna mokarran)",
  },
  spottedWobbegong: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Orectolobus_maculatus_montague_island.jpg",
    alt: "Spotted wobbegong (Orectolobus maculatus), a type of carpet shark, resting camouflaged on the seafloor at Montague Island, Australia.",
    creator: "Andrew J. Green / Reef Life Survey",
    license: "CC BY 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Orectolobus_maculatus_montague_island.jpg",
    speciesShown: "Spotted wobbegong (Orectolobus maculatus)",
  },
  goblinShark: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Goblin_shark_%28Mitsukurina_owstoni%29.jpg",
    alt: "Goblin shark (Mitsukurina owstoni), a deep-sea shark, shown underwater with its elongated, flattened snout and protrusible jaws.",
    creator: "Michigan State University / U.S. Fish and Wildlife Service",
    license: "Public Domain (U.S. Government work)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Goblin_shark_(Mitsukurina_owstoni).jpg",
    speciesShown: "Goblin shark (Mitsukurina owstoni)",
  },
};
