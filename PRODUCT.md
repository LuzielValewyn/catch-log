# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Open to the public: anyone can visit. Visitors enter a name at a gate (stored in localStorage, visit logged to Firestore) or continue as guest. The owner, Delvirio ("Del"), unlocks edit mode with a password. Del fishes mostly around Karimun and the Riau Islands, Indonesia, in both saltwater and freshwater.

## Product Purpose

Del's lifetime fishing catch log, one species at a time. Every fish is one he caught himself, logged the day it happened. It exists to:

1. Archive catches: date, time of day, species (Indonesian, English, Latin names), water type, location and coordinates, weather, weight, bait or lure, method, fight level, gear set, notes, photo.
2. Analyze fishing patterns: catches over time (year, month, week, day), slicer filters, a location map with heatmap, per-species views.
3. Grow into a conditions and forecast tool: current weather, wind, waves, currents, moon and similar marine conditions, plus forecasts. Planned, not built.

Success: every catch is recorded completely and is easy to find; patterns about when, where and with what bait fish bite become visible; visitors understand who Del is and what he has caught.

## Positioning

A personal, first-person record: every entry is a fish the owner really caught, in a specific region (Karimun and the Riau Islands), rather than a generic fishing-app template. A neighbouring product could not truthfully copy the personal record of one angler's catches.

## Operating Context

- Owner logs entries from the field and at home (GPS "use my location", pick on map, or paste `lat, lng`), on both phone and desktop; the app has a sidebar for desktop and a bottom nav for mobile.
- Fish names are Indonesian first (e.g. Kakap), with English and Latin names automatic or manual.
- Water types use the Indonesian terms Air Laut (saltwater) and Air Tawar (freshwater).
- Gear is tracked as named sets (rod, reel) that entries reference.

## Capabilities and Constraints

- Existing implementation: single static `index.html`, Firestore for data (Firebase 10.13.0), Leaflet with leaflet.heat for the map, Fraunces, IBM Plex Sans and IBM Plex Mono from Google Fonts. Tabs: Dashboard, Catch Log, Species, Log Entry and New Gear (the last two owner only).
- Interface language stays English; fish names stay trilingual (Indonesian, English, Latin).
- Two versions of the product are intended: a showcase version for visitors ("show off") and a full owner version with all tools. Today this is approximated by guest versus owner edit mode; how the split should work in the future is undecided.
- Planned and undecided: marine navigator features and a forecast module (weather, wind, waves, currents, moon and so on). Data sources and scope are not chosen yet.

## Brand Commitments

Name: "Del's Catch Log". The owner appears as Delvirio (avatar photo in the brand mark and a fishing photo on an "about me" card and modal). Voice is first-person and plain: "Hi, I'm Delvirio, this is my lifetime fishing catch log, one species at a time."

## Evidence on Hand

- Real catch data lives in Firestore (project `del-s-catch-log`), not in the repo.
- Two photos of Del are embedded in `index.html` (avatar and fishing photo).
- No testimonials, press, or third-party proof exist. Do not fabricate any.

## Product Principles

1. The record is the product. Every entry is real and complete; never invent catches, counts or claims.
2. Two audiences, one truth: visitors get a showcase, the owner gets the complete tool, both from the same data.
3. Patterns over totals. Filters, time levels and the map exist so Del can learn when, where and with what fish bite.
4. Useful in the field. Logging a catch must work quickly on a phone, with location and photo capture close at hand.
5. Grounded in place. The Karimun and Riau Islands context and the Indonesian fish names are part of the identity, not localisation afterthoughts.
