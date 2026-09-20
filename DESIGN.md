---
name: Del's Catch Log
description: A dark-only fishing log posted as one arrivals board: fixed-slot rows, hairline rules, one LED amber signal.
colors:
  ground: "#090D12"
  board: "#0F151C"
  plate: "#151D27"
  raise: "#1B2632"
  rule: "#243040"
  rule-strong: "#354456"
  ink: "#E9EEF3"
  ink-2: "#A3B4C4"
  ink-3: "#8093A6"
  amber: "#FFB23E"
  on-amber: "#0B0F14"
  coral: "#FF6B57"
  salt: "#4FC3D9"
  fresh: "#8FD16B"
  portrait-plate: "#EDE6D6"
typography:
  led-display:
    fontFamily: "Doto, Archivo, sans-serif"
    fontSize: "clamp(110px, 17vw, 264px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.03em"
  led-cell:
    fontFamily: "Doto, Archivo, sans-serif"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  led-row:
    fontFamily: "Doto, Archivo, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 85"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.45
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  row-name:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.45
    fontVariation: "'wdth' 92"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
  full: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "20px"
  xl: "28px"
  gutter: "32px"
components:
  panel-box:
    backgroundColor: "{colors.board}"
    rounded: "{rounded.md}"
    padding: "18px 20px 20px"
  arrival-row:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.row-name}"
    padding: "13px 4px"
  arrival-row-hover:
    backgroundColor: "{colors.plate}"
  led-total:
    textColor: "{colors.amber}"
    typography: "{typography.led-display}"
  board-cell:
    textColor: "{colors.ink}"
    typography: "{typography.led-cell}"
    padding: "14px 20px 16px"
  water-split-bar:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    height: "8px"
  time-slot:
    textColor: "{colors.ink}"
    typography: "{typography.led-row}"
    padding: "12px 4px"
  time-slot-hover:
    backgroundColor: "{colors.plate}"
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.on-amber}"
    rounded: "{rounded.md}"
    padding: "13px"
  button-primary-disabled:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink-3}"
  button-outline:
    textColor: "{colors.amber}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  nav-item:
    textColor: "{colors.ink-2}"
    padding: "0 14px"
    height: "60px"
  nav-item-active:
    textColor: "{colors.amber}"
---

# Design System: Del's Catch Log

## Overview

**Creative North Star: "The Arrivals Board"**

Every fish Del has caught is an arrival: numbered, dated and posted on one dark board, like a ferry-terminal arrivals board in the Riau Islands. The app reads as a single board with fixed slots, not a grid of stat cards. Panels are matte, separated by hairline rules, and never blurred or shadowed. It is dark-only (`color-scheme: dark`) and carries no traditional or nautical ornament.

One signal carries the whole system: LED amber. Numerals are dot-matrix (Doto) and everything else is Archivo, a variable-width grotesque squeezed narrow for headings and left at normal width for reading. Water type is never colour alone: saltwater is aqua with a wave mark, freshwater is leaf green with a drop mark and diagonal hatch. The one warm object on the page is Del's illustrated portrait on a cream plate.

**Key Characteristics:**
- Fixed-slot rows: number, date, water mark, species, location, always in the same columns.
- The monumental amber LED total with dim ghost cells (`8888`) behind it.
- Hairline rules and tonal steps for depth; no blur, no panel shadows.
- Amber is the single signal; aqua and green mean water type only.
- Numerals in Doto dot-matrix; text in Archivo.
- Compact 4px corners; 2px on bars.

## Colors

A blue-black ground with slightly lifted board tones, one hot amber, and two water hues that always travel with a shape.

### Primary
- **LED Amber** (`{colors.amber}`): the single signal. The LED total, arrival numbers, active tab and underline, primary button, active toggle, focus ring, chart bars, count bubbles, links (`card-link`). On-amber text is `{colors.on-amber}`.

### Secondary
- **Saltwater Aqua** (`{colors.salt}`): Air Laut only: wave mark, saltwater count, the salt segment of the split bar, map marker fill.
- **Freshwater Leaf** (`{colors.fresh}`): Air Tawar only: drop mark, freshwater count, hatched segment of the split bar and hatched gear-chart bars.

### Tertiary
- **Alert Coral** (`{colors.coral}`): destructive and error only: delete button, error banners, "clear" links.

### Neutral
- **Matte Ground** (`{colors.ground}`): page, top deck, inset wells (input, bar tracks, notes block).
- **Board** (`{colors.board}`): every panel.
- **Plate** (`{colors.plate}`): row hover, opened catch row, modal box.
- **Raise** (`{colors.raise}`): disabled buttons, file-picker button.
- **Rule** (`{colors.rule}`) and **Rule Strong** (`{colors.rule-strong}`): hairlines between rows; the strong rule under column headers and around input strokes.
- **Ink** (`{colors.ink}`), **Ink 2** (`{colors.ink-2}`), **Ink 3** (`{colors.ink-3}`): primary text, secondary text and chart axes, tertiary labels and placeholders. Ink 3 is the floor for readable text on Board.
- **Portrait Plate** (`{colors.portrait-plate}`): backing behind Del's portrait and avatar only.

### Named Rules
**The One Signal Rule.** Amber is the only accent. If something needs emphasis, it goes amber or it goes ink; it does not get a new hue.
**The Shape Carries It Rule.** Salt and fresh are always paired with their mark (wave, drop, hatch). Colour alone never states water type.
**The Ink Line Rule.** The cumulative line on charts is neutral ink (`{colors.ink-2}`, dashed), so it never competes with amber bars.

## Typography

**Display / Numerals Font:** Doto (with Archivo, sans-serif), weights 400 to 800, used at 800
**Body Font:** Archivo (with system-ui, sans-serif), variable width 62 to 125 and weight 100 to 900

**Character:** Dot-matrix numerals against a tight grotesque: the board speaks in dots, the labels in narrow bold. Width is a real axis here: headings run 82 to 92 percent width, body stays at 100.

### Hierarchy
- **LED Display** (Doto 800, clamp(110px, 17vw, 264px), 0.95): the lifetime total only; 84 to 138px on phones.
- **LED Cell** (Doto 800, 34px, 1; 28px on phones): board-cell numerals.
- **LED Row** (Doto 800, 18 to 20px, 1): arrival numbers, time-slot counts, location counts.
- **Headline** (Archivo 800, 26px, 1.1, width 85): page title; 22px on phones.
- **Title** (Archivo 800, 16px, width 88): box titles; 14px inside split boxes.
- **Row Name** (Archivo 700, 16px, width 92): species in rows.
- **Body** (Archivo 400 to 600, 13.5 to 14.5px, 1.45): rows, forms, notes (notes capped at 68ch).
- **Label** (Archivo 700, 12px, letter-spacing 0.06em, uppercase): board column headers and data labels only. Never above a heading as a lead-in.

### Named Rules
**The Dots Are Numbers Rule.** Doto sets numerals only. Words, dates, names and units are Archivo.
**The Tabular Rule.** `font-variant-numeric: tabular-nums` is on the body so counts and dates hold their slots.
**The Eleven Floor Rule.** No functional text under 11px; chart axis text is the only 11px.

## Layout

One centred column, max 1360px, 32px side padding (16px on phones), 28px top. A sticky 60px deck (brand, tabs, clock, status) carries navigation; on phones (max 760px) the deck is brand only and a fixed bottom bar takes the tabs. Content uses a 12-column grid with 16px gaps; spans collapse to full width at 1100px.

The first viewport is the hero board: a 248px portrait plate at left (200px under 1100px; a slim 92px row on phones), and at right the LED total, first and latest catch dates, and a ruled row of cells (species, water pair at 2.4fr, trips, locations; two-up on phones, water first). The recent-arrivals board follows directly. Arrival rows use a fixed grid of 56px number, 96px date, 26px water mark, name up to 340px, then location, with 18px column gaps; on phones they fold to number, name over date, water mark. Rhythm is 4, 8, 12, 16, 20, 28, 32px.

## Elevation & Depth

Flat by tonal step and hairline. Depth is Ground, then Board, then Plate (hover, opened row, modal), separated by 1px rules. Panels carry no blur and no shadow. Motion is short and quiet: 140 to 240ms ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), a 500ms bar fill, a 320ms row-in; all disabled under `prefers-reduced-motion`.

### Named Rules
**The Flat Board Rule.** Panels, rows and cells are separated by rules and tone, never by shadow or blur.

## Shapes

Small, square-shouldered forms: 4px on panels, inputs and buttons; 2px on bars and swatches; 3px on inner controls; 6px on the modal only. Circles are reserved for the avatar and portrait ring (2px amber border), status dot and chart points. Wave, drop and 45-degree hatch (2px stripe, 5px period) are the recurring geometry for water. Icons are 20px stroke line SVGs at 1.75px.

## Components

### Arrival Row
Fixed-slot row on Board: amber LED number, ink date, water mark, bold species over ink-2 trilingual name, ink-2 location. 13px vertical padding, hairline `rule` beneath, `plate` on hover. The Catch Log version adds a chevron and expands in place to a photo and data grid.

### LED Total
Amber Doto with a ghost layer of `8888` in the same amber at 10% opacity behind it, right-aligned; the number ticks up to its value.

### Board Cell
Uppercase label (with water mark where relevant), Doto numeral, small delta line; cells divided by a left hairline. The water cell holds the salt and fresh counts side by side plus the split bar.

### Water Split Bar
8px bar in a Ground well, 2px corners: solid aqua for salt, fresh as hatched green with a 1px green inset outline.

### Time-of-Day Slot
A button row: 64px name, 10px amber fill track, 40px LED count. Hairline between slots, plate on hover, zero counts dim to ink-3, unselected slots fade to 40% when one is picked.

### Buttons
- **Primary:** solid amber, on-amber text, 4px corners, 13px padding, 800 weight, full width in forms. Hover brightens 8%; active nudges 1px down; disabled is Raise with ink-3 text.
- **Outline:** transparent, 1px amber border, amber text, 8px 16px; hover fills 14% amber. Destructive variant swaps to coral.
- **Toggle:** Ground fill, rule-strong border; active becomes solid amber.

### Inputs / Fields
Ground fill, 1px rule-strong border, 4px corners, 10px 12px padding, 14.5px text. Hover lifts the border to ink-3; focus gives a 2px amber outline and amber border. Labels sit above in 12.5px ink-2 bold. Selects use a drawn chevron; date inputs are dark scheme.

### Navigation
Tabs in the deck: icon plus label, 14px 600 at 92% width, ink-2, ink on hover, amber when active with a 2px amber underline that scales in from the left. The phone bottom bar stacks icon over 12px label, with the underline moving to the top edge.

### Panel Box
Board fill, 1px rule, 4px corners, 18px 20px 20px padding; title row at 16px 800 with an optional amber link at the right.

## Do's and Don'ts

### Do:
- **Do** keep every panel on Board with a 1px `rule` border and 4px corners.
- **Do** post lists as fixed-slot rows with hairline dividers, not cards.
- **Do** set every numeral in Doto and everything else in Archivo.
- **Do** pair salt with the wave mark and fresh with the drop mark and hatch.
- **Do** keep amber to the one signal role and use ink for anything else that needs weight.
- **Do** keep functional text at 11px or above and ink-3 as the dimmest readable text.

### Don't:
- **Don't** add blur, glass, or drop shadows to panels, rows or cells.
- **Don't** introduce a second accent hue or use water colours for anything but water type.
- **Don't** use light surfaces; the only warm light plate is the portrait.
- **Don't** put Doto on words, names or dates.
- **Don't** lay stats out as a grid of separate cards; extend the board's cells and rows.
