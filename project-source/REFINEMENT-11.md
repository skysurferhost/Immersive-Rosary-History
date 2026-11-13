# Refinement 11 — Historical wording, worldwide prayer, soundtrack and sources

12 November 2026. The existing Three.js site is retained. No Spline dependencies or new scenes were introduced.

## Implemented
1. Simplified the Origins, Biblical Foundations, Dominic, Across the Centuries, Fátima and Global Rosary chapter descriptions. Removed repetitive negative qualifications from all nine Historical Development descriptions. Dates and source links remain; Dominic is still explicitly identified as Catholic tradition, and the 1917 apparitions as reported. Historical and theological detail remains in Sources & Credits.
2. Renamed the tab to **32 Locations Around the World**, with a restrained five-second gold invitation pulse, stable selected glow, focus outline and reduced-motion support. All 32 location records, intentions, coordinates and photograph credits are byte-for-byte unchanged. Cards now present name and date/country before the photograph. The source explanation retains the Vatican's 30-shrine description.
3. The Fatima Prayer always follows the Glory Be after each decade. Removed its checkbox and conditional sequence logic. Preserved the PDF prayer text, 75 prayer steps, 59 beads, 53 Hail Mary beads and six Our Father beads.
4. Bundled the exact supplied Track 1 MP3 (300.024 seconds, 12,000,960 bytes). One persistent audio element uses a relative path, looping, a 15% initial volume and a 2.5-second fade-in. Eligible gestures attempt playback; blocked playback leaves Play available. Pause, mute and volume preferences are remembered for the session. Removed synthesis, upload controls and obsolete technical music text. Music controls are directly accessible from the music icon.
5. Sources & Artwork Notes opens in the existing in-page dialog. It loads the canonical sources.html content, so the standalone resource and overlay share one source. The overlay scrolls independently, offers Close and Return to the Journey, supports Escape, and returns focus. Camera updates and input are paused while the dialog is open; the live journey, globe and Rosary state remains in memory. Music continues independently.
6. Reset View centers the complete Rosary using aspect-aware framing and clears both target and smoothed pan, without changing selected prayer or mystery. Close zoom and pan ranges remain. A smaller Rosary near plane helps reveal close detail.
7. Applied **Select an Image** and **A Contemplative Pace** capitalization; removed reconstruction notices from the Settings interface while preserving artwork provenance in Sources.

## Verification
- All 12 automated validation scripts pass, including camera continuity, scene construction, globe picking, lower-text input handling, simulated two-pointer Rosary controls, bead topology, model integrity and photo credits.
- Added tests for all five permanent Fatima Prayers, unchanged worldwide dataset, full reset framing at desktop/tablet/phone aspect ratios, exact supplied MP3 hash, single playback instance, fade curve, pause/mute behavior and recovery from rejected autoplay.
- Chromium preview: Begin starts Track 1; Play/Pause and Mute/Unmute work; volume control displays 15%. Media duration is 300.024 seconds, readyState 4, no error, and playback time advances while Sources is open.
- Sources overlay scrolling left journey progress at 1.000 before/during/after. Escape and Return to the Journey close the overlay without navigation.
- Pompeii selection and worldwide mode persisted across opening/closing Sources; globe zoom remained 7.01. Guided Prayer stayed at prayer 19/75 (Glory Be) after reset and opening/closing Sources. Next reached the Fatima Prayer; Previous returned to Glory Be.
- Responsive previews inspected at desktop 1363×936, phone portrait 390×844, phone landscape 844×390 and tablet 768×1024. Overlay layout and globe return controls remain reachable.

## Limits
The available browser reports WebGL unavailable. Responsive previews are not physical-phone tests. Native pinch/rotation, actual GPU appearance, close-zoom clipping on hardware and mobile performance remain unverified. The complete five-minute loop boundary was not auditioned; looping is configured and tested as an audio property. Mobile browsers may control volume at the system level. Physical-device and Squarespace-embedded playback acceptance testing remains outstanding.

The available recording was Screen Recording 2026-11-09 224417.mp4. No newer recording accompanied this update.

## Export
The ZIP places the complete static website at its root, including index.html, local scripts, assets, the exact MP3, sources.html and attribution. Upload the extracted root contents to a static host or GitHub Pages; do not upload the ZIP as a single website file. Serve over HTTP(S), rather than opening index.html with file://. Project source, test scripts, licenses and reports are retained under project-source/ for maintenance.
