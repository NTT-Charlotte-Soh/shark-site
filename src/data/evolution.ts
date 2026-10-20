export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: "early-shark-like-fish",
    period: "~450–420 million years ago",
    title: "Earliest shark-like fish appear",
    description:
      "Fossil scales and teeth from shark-like fish date back more than 400 million years, placing early relatives of modern sharks among the oldest vertebrate lineages still represented today.",
  },
  {
    id: "devonian-diversification",
    period: "~419–359 million years ago (Devonian)",
    title: "Early diversification",
    description:
      "During the Devonian, often called the 'Age of Fishes,' early chondrichthyans diversified alongside armored placoderms and the first bony fish.",
  },
  {
    id: "end-devonian-extinction",
    period: "~359 million years ago",
    title: "Survives the End-Devonian extinction",
    description:
      "A major extinction event eliminated many fish lineages, but ancestral shark lineages persisted, setting the stage for further diversification in the following period.",
  },
  {
    id: "carboniferous-permian",
    period: "~359–252 million years ago",
    title: "Expansion through the Carboniferous and Permian",
    description:
      "Chondrichthyans diversified into many unusual forms. The group continued to survive significant environmental changes, including the Permian–Triassic extinction — the most severe mass extinction in Earth's history.",
  },
  {
    id: "mesozoic-radiation",
    period: "~252–66 million years ago (Mesozoic)",
    title: "Modern shark groups emerge",
    description:
      "Many of the major shark orders alive today began to appear during the Mesozoic, alongside dinosaurs — but sharks are a separate, much older lineage that was already ancient by this time.",
  },
  {
    id: "ktpg-extinction",
    period: "~66 million years ago",
    title: "Survives the Cretaceous–Paleogene extinction",
    description:
      "The extinction event that eliminated the non-avian dinosaurs also wiped out many marine species, yet shark lineages again persisted and continued to diversify afterward.",
  },
  {
    id: "modern-diversity",
    period: "Present day",
    title: "Over 500 living species",
    description:
      "Modern sharks now include more than 500 described species spanning enormous differences in size, habitat, and behavior — from the filter-feeding whale shark to small, deep-sea dogfish.",
  },
];

export const evolutionFacts: string[] = [
  "Sharks are cartilaginous fishes in the class Chondrichthyes, which also includes rays, skates, and chimaeras (ghost sharks).",
  "Shark-like fish appear in the fossil record more than 400 million years ago — well before dinosaurs, trees with flowers, or even many land plants existed.",
  "Sharks have survived multiple mass-extinction events, including the Permian–Triassic extinction (the most severe in Earth's history) and the Cretaceous–Paleogene extinction that eliminated the dinosaurs.",
  "Sharks are not 'unchanged' prehistoric relics. Fossil evidence shows that shark body shapes, teeth, and species have continued to change and diversify over hundreds of millions of years — the sharks alive today are the product of continuous evolution, not a frozen snapshot of the past.",
  "Chondrichthyes (sharks, rays, skates, chimaeras) split from the lineage leading to bony fish (Osteichthyes) deep in vertebrate history. Bony fish, in turn, gave rise to the lineage that eventually led to land vertebrates (tetrapods), including amphibians, reptiles, birds, and mammals — meaning sharks and humans share a very distant common ancestor, but have been evolving along separate paths for several hundred million years.",
];
