# Refinement 12 — Fátima, Sources navigation and music spacing

## Changes
- Removed the requested Fátima Catechism §67 sentence from the canonical Sources description. The existing reference link remains available; unrelated Catholic teaching and credits remain intact.
- Replaced the vague shrine sentence with the supplied Sanctuary of Our Lady of Fátima paragraph, identifying Cova da Iria, Portugal, all three children, 1917, Sister Lúcia’s memoirs, early interviews and historical documentation. Retained the Rosary, conversion and peace sentence and existing apparition narrative link. Added the sanctuary’s documentation directory to its source references. Simplified the historical globe period to “1917 · Cova da Iria”.
- Removed the Sources & Artwork Notes header button, including its shared mobile navigation entry. Kept the original link beneath A Contemplative Pace, its in-page overlay, close/Escape controls and Return to the Journey.
- The music panel already used the heading Music in the latest source. Removed the remaining public “Track 1 recording” wording from Sources. Added a measured 14-pixel gap before Play/Pause, consistent 14-pixel label/control spacing, and comfortable 44-pixel buttons. Graphics and reduced-motion controls retain their existing actions.

## Preserved
Three.js, all scene and camera code, historical artwork, the 59-bead Rosary and corpus/INRI models, centerpiece, all 75 prayer steps, both globe modes and all 32 worldwide records, photographs, intentions, inline credits, mysteries and final prayer link. The MP3, audio configuration, source overlay implementation, prayer sequence and shrine dataset are byte-for-byte unchanged. Music playback logic is unchanged; only its heading received a styling class.

## Validation
All 12 existing automated validation scripts passed. These cover scene construction and reversible camera paths, marker picking, prayer topology, model integrity, photo attribution, touch-handler simulations, MP3 identity, singleton playback/fade, explicit pause/mute and autoplay rejection recovery.

Chromium UI checks at desktop 1363×936, responsive phone portrait 390×844 and landscape 844×390:
- Header has no Sources item; Settings retains the link.
- Music gap measured 14 pixels. Play/Pause, Mute/Unmute and volume adjustment work. An eligible interaction starts playback. Audio continues while Sources is open; configured looping remains enabled.
- Landscape music panel fits without an internal scrollbar (clientHeight and scrollHeight both 390).
- Sources internal navigation scrolls its panel (scrollTop 1102 on desktop, 1124 in landscape). Return and Escape close without navigating away.
- Fátima journey progress stayed at 66.6667% before and after Sources, with the same chapter.
- Guided Prayer stayed at stage 2/22, prayer 2/75 after Sources. Pompeii’s selected location card remained identical after Sources in worldwide mode.
- Full Fátima paragraph and source link are available in the chapter detail panel on phone portrait. The existing compact timeline excerpt remains, preserving artwork space.

Limits: this browser reports WebGL unavailable and uses the existing fallback artwork. Actual GPU rendering, native phone gestures and physical-device performance are not certified. Zoom-state preservation is covered by unchanged overlay/globe logic and existing automated checks, not a new hardware interaction test. No new screen recording was attached to this request; the supplied text was read in full.

## Historical references checked
- https://www.fatima.pt/en/documentacao/
- https://www.santuario-fatima.pt/pt/news/documentacao-critica-fatima-selecao-documentos-1917-1930
The sanctuary describes its published documentary selection as including interviews/interrogations, testimony, letters and other historical records.

## Export
Complete static website at ZIP root, including the unchanged MP3 and all assets. Maintenance source and this report are in project-source/. Serve over HTTP(S); retain relative folder structure.
