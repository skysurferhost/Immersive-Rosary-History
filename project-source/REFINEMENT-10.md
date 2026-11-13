# Refinement 10 — Three.js, devotional sculpture and interface cleanup

11 November 2026. Existing project preserved.

## Architecture audit
No Spline runtime, Spline embed, .splinecode scene, or @splinetool dependency is present. A separate Spline authoring experiment was never integrated and is no longer used. Three.js mathematical camera splines remain intact. ARCHITECTURE.md records the Three.js-only development direction; validate-architecture.mjs checks served source for Spline runtime dependencies. No new artwork was generated in this refinement.

## Mobile scrolling
The prior correction remains in place: handlers previously belonged only to the WebGL canvas, so lower chapter text intercepted the initial gesture. Journey gestures now use a document capture handler scoped to journey mode, with a nine-pixel drag threshold, horizontal rejection and explicit capture release. Active globe/Rosary viewers, navigation and native scrolling panels retain their own input. This update preserves that fix and passes its regression suite.

## Crucifix
Replaced the procedural corpus with an adapted, licensed 3D scan of The Hunt Museum's Crucifix (HCM066), available at https://zenodo.org/records/18948596 under CC BY 4.0. Extracted the corpus, repaired boundaries, fitted it uniformly to the existing cross and reduced it to 38,371 triangles / 690,980 bytes. The sculpture has actual facial, torso, limb, hair, crown and drapery depth; it is not a flat image or assembled stretched primitives. Three.js GLTFLoader loads it locally with a shared antique-metal material. Existing cross, INRI, centerpiece and 59-bead topology remain. Attribution and adaptation information are in Sources & Credits and provenance-update10.

Offline front, oblique and side renders were reviewed during preparation. Asset parsing, finite coordinates, depth and fit are checked automatically. Actual browser GPU appearance and mobile performance remain unverified in this environment.

## Captions, sources and mystery panels
Each photographed globe destination now shows its proper shrine/building name plus linked creator and license immediately below the photograph. Camera-angle descriptions remain only in alternative text; processing notes are absent from public captions. Historical dates, intentions and sources remain.

Mystery dialogs are compact, with one Scripture citation below the description and the existing Pray This Mystery action. Removed the duplicate Guide reference presentation. Selection and prayer progress are preserved. Sources & Credits has Historical Sources, Images & Credits, and About This Experience sections; technical reports no longer dominate visitor navigation.

## Globe layout
Return to Timeline has a dedicated header area independent of expanded/collapsed cards. Phone landscape previous/next controls remain in normal card flow instead of covering the photograph. The panel retains one main scrolling region. Historical Development and the existing 30 Shrines mode (32 dated schedule entries) remain intact.

## Verification
All eleven automated validation scripts pass: architecture, GLB, captions/credits, mysteries, datasets, camera continuity, scene construction, 59 beads, 75-prayer sequence, globe focus/picking, pointer ownership, lower-text journey input, Rosary rotation/pan and simulated two-pointer zoom.

Browser review during this refinement verified the compact mystery dialog, prayer selection and retained progress after closing another mystery; shrine-mode navigation; and the portrait photo name, linked attribution and separated Return to Timeline control. Prior responsive checks covered desktop, portrait and landscape layout, and the full supplied grotto photograph. These are responsive browser checks, not physical phone certification.

Outstanding acceptance tests: actual touch swipes across the whole viewport in both orientations, native pinch zoom, in-browser GPU rendering/performance, and full live music/keyboard/end-navigation regression. The available browser reports WebGL unavailable. No claim of complete real-device testing is made.
