export interface Source {
  id: string;
  name: string;
  url: string;
  note?: string;
}

export const sources: Source[] = [
  {
    id: "iucn",
    name: "IUCN Red List of Threatened Species",
    url: "https://www.iucnredlist.org/",
    note: "Primary source for conservation status assessments of thresher sharks and other species.",
  },
  {
    id: "noaa-fisheries",
    name: "NOAA Fisheries — Sharks",
    url: "https://www.fisheries.noaa.gov/species/thresher-shark",
    note: "U.S. government source for thresher shark biology, fisheries management, and conservation.",
  },
  {
    id: "fishbase",
    name: "FishBase",
    url: "https://www.fishbase.se/",
    note: "Global species database used for size, habitat, and distribution reference data.",
  },
  {
    id: "florida-museum",
    name: "Florida Museum of Natural History — Ichthyology Department",
    url: "https://www.floridamuseum.ufl.edu/discover-fish/",
    note: "Natural-history institution resource on shark biology, taxonomy, and evolution.",
  },
  {
    id: "monterey-bay-aquarium",
    name: "Monterey Bay Aquarium — Animal Guide",
    url: "https://www.montereybayaquarium.org/animals",
    note: "Public aquarium educational resource referenced for general shark biology and conservation framing.",
  },
  {
    id: "smithsonian-ocean",
    name: "Smithsonian Ocean — Sharks",
    url: "https://ocean.si.edu/ocean-life/sharks-rays",
    note: "Smithsonian Institution educational resource on shark evolution and diversity.",
  },
];
