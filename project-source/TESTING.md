# Verification and remaining production work

## Completed checks

- JavaScript syntax checks for app, models, and content.
- Model construction with bundled Three.js: exactly 59 selectable beads, 53 Hail Mary, 6 Our Father, 59 unique indices; five loop decades each contain 11 beads.
- Historical content: 14 chapters, four sets of five mysteries, full prayer texts, source links and nine locations.
- Artwork contact-sheet visual review: Mary, Dominic, Lepanto, John Paul II.
- Browser UI: opening, Begin control, chapter content, Rosary navigation, mystery selector switching to Luminous, Creed → Our Father guided-prayer advancement.
- Responsive iframe review at 390×844 and 844×390, plus desktop browser viewport. Small-height fallback message overlap fixed.
- Local image assets served successfully; standalone ES modules load.

## Important verification limit

The available test browser reports GL_VENDOR/GL_RENDERER Disabled and cannot create a WebGL context. Therefore GPU scene appearance, picking accuracy on actual rendered meshes, animation frame rate, fullscreen rendering, real-device pinch/swipe, and visual forward/reverse transition smoothness were NOT verified here. A readable artistic fallback activates when WebGL is unavailable. That fallback is not claimed to be the immersive 3D experience.

## Implemented technical behavior awaiting hardware visual QA

Actual Three.js PerspectiveCamera position and look target change with journey progress. The Catmull–Rom path has varying x/y/z positions with ascent/descent and curved approach offsets. The same progress reverses motion. Chapters exist at distinct world coordinates; only nearby chapter groups render. Prayer-counter assembly and the two regional scenes follow progress. Rosary/globe modes have separate drag/pinch input and retain journey progress. The Rosary uses 73 mesh draws after merging static chain/cap hardware. Pixel ratio is capped and graphics presets are available. Reduced motion snaps between chapters.

## Remaining differences from the full production ambition

- Not all eight named transition concepts in the brief are individually realized: camera flight, ascent/descent, close passage, manuscript motion, and Earth/object focus are implemented; a fully dimensional living-painting reconstruction and particle-dissolve artifact transformation are not complete.
- Four retained generated paintings plus eleven distinct replacement scenes are integrated. Chapter artwork is unique; most historical people remain textured planes with supporting spatial geometry, not full volumetric characters. A bespoke museum-detail environment for each chapter remains unfinished.
- The crucifix remains stylized procedural geometry. Lepanto now includes an AI-generated GLB galley with procedural loading/error placeholders.
- Textures are JPEG/PNG, not KTX2; visibility culling and merged geometry are implemented, but not a full streaming/LOD pipeline. No WebGPU-specific enhancement is included.
- Audio is original synthesized ambient harmony, not a produced instrumental recording.
- No measured GPU frame-time budget, screen-reader audit, or physical-device certification is claimed.
- Sources were researched, but external source availability may change. A separate scholarly review and asset-rights audit were not commissioned.

This release should be described as a working build with explicit production-review limits, not as all acceptance tests passed.

## November redesign verification

- Reviewed all eleven replacement scenes; rejected and replaced the first Pius V asset for an anachronistic dome. Papal subjects, Annunciation context, Fátima’s three children and rural setting checked visually.
- validate-redesign.mjs passes camera continuity and derivative checks at all 14 interior seams, identical reverse poses, tube-to-camera parameter alignment, reversible glow progress, distinct chapter asset assignments and file existence.
- Re-ran 59-bead and historical content checks.
- Desktop Fátima, phone portrait Fátima, phone landscape Paul VI, and tablet Leo XIII fallback layouts reviewed; image subjects and text remain separate. The mobile landscape opening instruction now uses Swipe Up To Begin The Journey.
- Globe and final-community chapter detail controls link directly into globe exploration and guided Rosary prayer.
- GPU rendering remains unavailable in this test browser. Numerical checks do not constitute visual certification of 3D smoothness, scene framing or shader appearance.

## Immersion update verification

- validate-immersion.mjs constructs all fourteen chapter scenes, checks reversible environment fades, daylight/cloud texture assignment, nine Earth markers, finite path-distance shader input, and camera-relative lighting direction.
- validate.mjs and validate-redesign.mjs pass bead/content invariants and camera seam/reverse-path checks.
- Reviewed new environmental artwork, transparent figure cutouts and a mathematical mesh projection of the galley. GPU textured model appearance remains unverified.
- Browser fallback checks include 390×844, 844×390, and 768×1024 layouts, chapter navigation and destination detail selection.
- Annunciation and Fátima now use separated foreground figures, background environments and actual geometric ground/props. People remain 2.5D cutouts. Lepanto uses actual water and GLB ships. This does not constitute a fully volumetric historical world.
- Earth lighting, atmospheric shader, mesh picking, final Rosary/Earth composition and frame rate still require WebGL-enabled hardware review. No GPU performance result is claimed.

## Current correction release

CORRECTION-REPORT.md supersedes earlier descriptions of papal floors, destination modal behavior and autoplay Lepanto video. `node validate-globe.mjs` covers every destination. Browser UI checks cover every destination and four layouts; WebGL and physical-device tests remain outstanding.


Latest update: see PRECISION-UPDATE.md for corrected camera anchors, PDF prayer topology and explicit GPU/device verification limits. Run node validate-precision.mjs in addition to the existing checks.
