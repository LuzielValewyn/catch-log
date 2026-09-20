---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: Del's Catch Log (index.html, all tabs)

Scope and mode: whole app, Operate mode. Public visitors first; owner tools (Log Entry, New Gear, edit/delete) behind the existing owner gate.

Audience, job, proof: public visitors, mostly on phones, must grasp in seconds who Del is and how many fish he has caught; the owner logs entries and reads patterns. Proof is real Firestore data; nothing invented. Fish names stay trilingual, water types stay Air Laut / Air Tawar, UI copy stays English. Constraints: single static index.html, Firebase and Leaflet kept, contrast at least 4.5:1, functional text at least 11px.

Chosen direction: The Arrivals Board (Riau Islands ferry-terminal arrivals boards). Memorable moment: the monumental amber LED total of lifetime catches with dim ghost cells that ticks to its value.

Unresolved: forecast/marine navigator module and the visitor/owner version split are out of scope; font pairing (Archivo + Doto) chosen at build.

## Direction contract

THESIS: Every fish Del has caught is an arrival: numbered, dated and posted on one dark board. The surface refuses the stat-card grid; it reads as one board with fixed slots.

OWN-WORLD: Matte black-blue ground (#090D12), board panels (#0F151C) with hairline rules and no blur or drop shadows, LED amber (#FFB23E) as the single signal, aqua for salt and leaf green for fresh, each also carried by a shape (wave, drop, hatch). Archivo (variable width) for text, Doto dot-matrix for numerals only. Del's illustrated portrait is the one warm plate.

STORY: A visitor understands whose log this is and how big it is, sees the newest arrivals, then explores patterns by time, water, gear, place and map; the owner posts a new arrival.

FIRST VIEWPORT: Top deck with brand, tabs, clock. Below, one hero board: Del's portrait plate at left, the LED total (up to 224px, ghost cells behind) with first and latest catch dates at right, and a ruled row of five cells (species, saltwater, freshwater, trips, locations). The recent-arrivals board starts right beneath. On phones the portrait becomes a slim row and cells go two-up.

FORM: Arrivals board with fixed-slot rows (No., date, water mark, species, location); position 7 on my ordered list; seed key 24e0e189.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
