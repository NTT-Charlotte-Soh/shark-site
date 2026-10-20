export interface ThresherSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  imageKey: string;
  identification: string[];
  maxSize: string;
  range: string;
  habitatDepth: string;
  diet: string;
  conservationStatus: string;
  threats: string[];
  notes?: string;
}

export const thresherSpecies: ThresherSpecies[] = [
  {
    id: "common-thresher",
    commonName: "Common Thresher Shark",
    scientificName: "Alopias vulpinus",
    imageKey: "commonThresher",
    identification: [
      "Extremely long, scythe-shaped upper tail lobe — nearly as long as the rest of the body",
      "Dark blue-gray to brownish-gray back with a white underside",
      "A distinctive white patch that extends above the pectoral fins",
      "Slender, conical snout and relatively small mouth with small teeth",
    ],
    maxSize: "Up to about 6 m (20 ft) total length, roughly half of which is the tail",
    range:
      "Found worldwide in temperate and subtropical waters, including the Atlantic, Pacific, and Indian Oceans; common off the U.S. West Coast and in the Mediterranean.",
    habitatDepth:
      "Primarily a coastal and open-ocean (epipelagic) species, typically from the surface down to about 100–200 m, though it can dive deeper.",
    diet:
      "Schooling fish such as mackerel, herring, and sardines, along with squid. Known to use rapid tail-whips to stun or kill multiple prey at once.",
    conservationStatus: "Vulnerable (IUCN Red List)",
    threats: [
      "Targeted commercial and recreational fishing for meat and fins",
      "Bycatch in gillnet and longline fisheries",
      "Slow reproduction, which limits population recovery after depletion",
    ],
  },
  {
    id: "bigeye-thresher",
    commonName: "Bigeye Thresher Shark",
    scientificName: "Alopias superciliosus",
    imageKey: "bigeyeThresher",
    identification: [
      "Unusually large, upward-facing eyes adapted for low-light hunting",
      "Deep horizontal grooves on the top of the head above the eyes",
      "Long upper tail lobe, similar in proportion to other thresher species",
      "Purplish-brown to gray coloration on the back",
    ],
    maxSize: "Up to about 4.9 m (16 ft) total length",
    range:
      "Circumglobal in tropical and temperate waters, found in the Atlantic, Pacific, and Indian Oceans.",
    habitatDepth:
      "A deeper-diving species than other threshers; regularly moves between near-surface waters at night and depths of 300–500 m (occasionally deeper) during the day, taking advantage of its enlarged eyes in dim light.",
    diet:
      "Primarily small to medium pelagic and deep-water fish, as well as squid, captured using tail-slap hunting behavior similar to other thresher species.",
    conservationStatus: "Vulnerable (IUCN Red List)",
    threats: [
      "High bycatch rates in pelagic longline fisheries targeting tuna and swordfish",
      "Low reproductive output, producing very few pups per litter",
      "Fin and meat demand in international seafood trade",
    ],
    notes:
      "Its oversized eyes and daily vertical migration between deep and shallow water are among the most distinctive adaptations of any shark species.",
  },
  {
    id: "pelagic-thresher",
    commonName: "Pelagic Thresher Shark",
    scientificName: "Alopias pelagicus",
    imageKey: "pelagicThresher",
    identification: [
      "Slender, streamlined body built for sustained open-ocean swimming",
      "Smaller head and eyes compared to the bigeye thresher",
      "Dark blue-gray to purplish coloration on the back, lacking the pale pectoral patch of the common thresher",
      "Long, whip-like upper tail lobe",
    ],
    maxSize: "Up to about 3.9 m (13 ft) total length",
    range:
      "Mainly found in the Indo-Pacific, including waters off the Philippines, Taiwan, and parts of the Indian Ocean; strongly associated with open, offshore waters rather than coastlines.",
    habitatDepth:
      "A truly oceanic (pelagic) species, generally staying in the upper few hundred meters of open water far from shore, though it can also be seen near productive seamounts and reef drop-offs such as those in the Philippines.",
    diet:
      "Small schooling fish and squid, hunted using the same tail-strike technique used by other Alopias species.",
    conservationStatus: "Endangered (IUCN Red List)",
    threats: [
      "Heavy fishing pressure throughout much of its Indo-Pacific range",
      "High value in international shark fin markets",
      "Limited management and enforcement in many areas where it is caught",
    ],
  },
];
