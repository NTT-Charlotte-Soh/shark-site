# Thresher Sharks: Evolution, Diversity, and Survival

An educational, single-page React website about thresher sharks (genus *Alopias*), shark evolution, taxonomy, and diversity — built with React, TypeScript, and Vite, and served in production via Nginx inside Docker.

No backend, database, login, or API keys are required.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) (Docker Desktop includes both on Windows/macOS).
- No local Node.js installation is required — the application is built entirely inside the Docker image.

## Setup and Run

From the `shark-site` directory, run:

```bash
docker compose up --build
```

This will:

1. Build the React/TypeScript application using a Node.js build stage.
2. Copy the production build output into an Nginx image configured for single-page application routing.
3. Start the container and map it to port `8080` on your host machine.

Once the containers are running, open your browser to:

```
http://localhost:8080
```

## Stopping the Application

```bash
docker compose down
```

## Rebuilding After Code Changes

```bash
docker compose up --build
```

## Project Structure

```
shark-site/
├── Dockerfile              # Multi-stage build: Node (build) -> Nginx (serve)
├── nginx.conf               # Nginx config with SPA fallback routing to index.html
├── docker-compose.yml        # Maps container port 80 -> host port 8080
├── index.html                # Vite HTML entry point
├── src/
│   ├── main.tsx               # React root render
│   ├── App.tsx                # Top-level layout: Navbar, sections, Footer
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky, keyboard-accessible navigation
│   │   ├── Footer.tsx
│   │   └── CreditedImage.tsx   # Image component with credit, loading/error states
│   ├── sections/
│   │   ├── Hero.tsx                   # Home / hero section
│   │   ├── WhatIsAShark.tsx           # True shark traits + "not a shark" comparisons
│   │   ├── Evolution.tsx              # Evolutionary history + timeline
│   │   ├── Taxonomy.tsx               # Taxonomic classification + diversity grid
│   │   ├── ThresherOverview.tsx       # Genus Alopias overview
│   │   ├── ThresherSpeciesSection.tsx # Accordion detail panels for 3 species
│   │   ├── Comparison.tsx             # Responsive species comparison table/cards
│   │   ├── Conservation.tsx           # Threats + "How You Can Help"
│   │   └── SourcesAndCredits.tsx      # Sources + full image credit table
│   ├── data/
│   │   ├── images.ts         # Centralized image metadata & credits
│   │   ├── threshers.ts      # The 3 living thresher shark species
│   │   ├── diversity.ts      # Shark diversity examples (whale shark, etc.)
│   │   ├── notSharks.ts      # Animals called "shark" that aren't true sharks
│   │   ├── evolution.ts      # Evolutionary timeline + facts
│   │   └── sources.ts        # Scientific/educational source list
│   └── styles/
│       ├── index.css          # Base theme, layout, navbar, hero, typography
│       ├── diversity.css      # Taxonomy & diversity grid styles
│       ├── species.css        # Timeline + species accordion styles
│       ├── tables.css         # Comparison table + credit table styles
│       ├── conservation.css   # Conservation callout styles
│       └── misc.css           # Footer + small utility rules
└── package.json
```

## Accessibility & Design Notes

- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<table>`, `<dl>`) with a logical heading hierarchy (`h1` → `h2` → `h3`/`h4`).
- Skip-to-content link, visible focus states, and a fully keyboard-operable navigation menu (including mobile toggle).
- All images include descriptive, species-specific alt text and an inline credit/license link.
- Respects `prefers-reduced-motion` by disabling animations and smooth scrolling for users who request reduced motion.
- The species comparison table scrolls horizontally on narrow viewports and is paired with an accessible stacked-card fallback.

## Image & Content Sourcing

All photographs are sourced from Wikimedia Commons (public domain or Creative Commons licensed) with full credit, license, and source links provided inline and in the "Sources and Image Credits" section of the site. Scientific and conservation content references the IUCN Red List, NOAA Fisheries, FishBase, and other reputable natural-history sources (see the site's Sources section for direct links).
