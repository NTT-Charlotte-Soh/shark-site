export interface NotAShark {
  id: string;
  name: string;
  actualGroup: string;
  explanation: string;
}

export const notSharks: NotAShark[] = [
  {
    id: "shark-catfish",
    name: "Shark Catfish",
    actualGroup: "Catfish (Order Siluriformes)",
    explanation:
      "Despite the name, shark catfish are bony fish (class Osteichthyes), not cartilaginous fish. They get their common name from a shark-like dorsal fin shape and streamlined body, but they have a bony internal skeleton, barbels (whisker-like sensory organs), and gill coverings — none of which true sharks have.",
  },
  {
    id: "remora",
    name: "Shark Sucker / Remora",
    actualGroup: "Remoras (Family Echeneidae), a group of bony fish",
    explanation:
      "Remoras are bony fish best known for attaching themselves to sharks, rays, and other large marine animals using a modified sucker-like dorsal fin. They are unrelated to sharks taxonomically — the name 'shark sucker' refers only to their hitchhiking behavior, not their biology.",
  },
  {
    id: "iridescent-shark",
    name: "Iridescent Shark",
    actualGroup: "Shark catfish (Pangasiidae), a freshwater catfish family",
    explanation:
      "The iridescent shark (Pangasianodon hypophthalmus) is a popular freshwater aquarium fish native to Southeast Asia. It is a true catfish with a bony skeleton and barbels. Its 'shark' name comes only from its sleek, torpedo-like body shape.",
  },
  {
    id: "red-tailed-black-shark",
    name: "Red-Tailed Black Shark",
    actualGroup: "Cyprinid fish (Family Cyprinidae), related to carp and minnows",
    explanation:
      "This small, popular freshwater aquarium fish (Epalzeorhynchos bicolor) is a member of the carp family. It has a black body and bright red tail with a shark-like dorsal fin shape, but it is a bony freshwater fish entirely unrelated to true sharks.",
  },
];

export const trueSharkTraits: string[] = [
  "Cartilaginous skeleton instead of bone",
  "Multiple exposed gill slits (typically five to seven) on each side",
  "A full set of fins supporting a streamlined, hydrodynamic body shape",
  "Tough, tooth-like placoid scales (dermal denticles) covering the skin",
  "Teeth that are continuously shed and replaced throughout life",
  "Electroreception via the ampullae of Lorenzini and other advanced senses",
];
