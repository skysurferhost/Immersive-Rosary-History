# The Rosary Through Time

New independent Three.js website. The files in `dist/` are both the editable source and production static build; there is no bundler or installation step. All paths are relative, supporting root domains and GitHub Pages project paths.

## Run locally

Run `python3 -m http.server 8000 --directory dist` from this directory, then open http://localhost:8000. Do not double-click index.html: browsers restrict ES modules when loaded through file://.

## Structure

- dist/index.html / style.css: responsive, accessible interface.
- dist/app.js: 3D historical environments, reversible scroll-driven camera, artifact mode, prayers, audio, controls.
- dist/chapter-scenes.js: unique historical artwork assignments and supporting scene geometry.
- dist/environments.js: layered Annunciation and Fátima environments, sea geometry and contextual papal props.
- dist/vendor/: bundled Three.js GLTF loader and geometry utilities.
- dist/timeline.js: layered golden path, progress-driven leading glow and continuous camera poses.
- dist/models.js: deterministic 59-bead Rosary and textured Earth. Rosary hardware is merged; prayer beads remain separate selectable meshes.
- dist/content.js: 14 historical chapters, 20 mysteries, complete traditional English prayers, nine geographic locations.
- dist/assets/: original generated artwork, web JPEG derivatives, Earth texture, and any integrated video.
- dist/sources.html: human-readable historical/artwork sources.
- source-notes.md: source qualifications and editorial guidance.
- ASSET-MANIFEST.md: provenance and licenses.
- TESTING.md: actual checks and remaining verification.

## Controls

Mouse wheel/trackpad or swipe moves the camera along a continuous 3D path. Reverse input reverses the same path. Begin enters chapter 1. Timeline jumps to any chapter; keyboard arrows/PageUp/PageDown move between chapters. Navigation opens Rosary or globe exploration and saves the timeline progress. Return restores it. Settings enables reduced motion and graphics resolution presets.

Rosary: drag rotates, wheel/pinch zooms, hover previews a prayer name, click/tap pins full text. Guided Prayer includes the Creed, introductory beads, Glory Be, five decades, optional Fatima prayers, Hail Holy Queen, and concluding prayer. Mysteries are selectable. Next/previous also works by keyboard. 59 prayer beads = 53 Hail Mary + 6 Our Father; the crucifix/centerpiece are not beads. The raw mesh array has loop beads first; the guided sequence explicitly reorders the pendant.

World Map: choose a destination from the accessible list or select a visible gold marker. Drag rotates; wheel/pinch zooms. Locations distinguish historic development from contemporary devotional sites.

Audio is initially off. Enable the music-note button for original synthesized organ-like ambient harmony. Settings includes volume. It is not a recorded organ/cello/harp performance.

## Deployment

Upload the contents of dist to any static HTTPS host. For GitHub Pages: create a repository, place the dist contents at the repository root (or configure a Pages deployment to publish dist), and enable Pages. A `.nojekyll` file is included. No secrets or backend are required.

For rosary.sky-surfer.com, configure your chosen host's custom domain, then create the DNS record it specifies. Domain/DNS changes have not been made. The provided Sites preview is owner-private; use an appropriately public static host when embedding for church visitors.

## Squarespace iframe

After publishing to your actual public URL, insert a Code Block:

```html
<iframe src="https://rosary.sky-surfer.com/" title="The Rosary Through Time" style="display:block;width:100%;height:100svh;min-height:600px;border:0" allow="fullscreen" allowfullscreen loading="lazy"></iframe>
<p><a href="https://rosary.sky-surfer.com/" target="_blank" rel="noopener">Open the full immersive journey</a></p>
```

The URL above is a proposed custom domain, not a claim that DNS is configured. Replace it with the actual deployed public URL. In standalone mode the entire viewport receives journey wheel/swipe input. Inside an iframe, the pointer/finger must be inside the frame, and its input stays within the immersive journey; the Squarespace page outside scrolls normally. A standalone link is recommended for small phones. Full-screen support depends on the browser and parent iframe permission.

## Scope and release qualification

This is an implemented working build, but not a claim that every ambitious production criterion in the supplied brief has passed. GPU rendering, device performance, touch gestures, and visual transitions require final review on actual WebGL-enabled hardware. See TESTING.md for specific outstanding points. No experimental flags are required by the code.

## Globe and ground correction

See CORRECTION-REPORT.md for the historical audit, destination evidence, environment changes and test limits. `globe-controls.js` owns geographic focus and marker selection; `map-ui.js` provides the persistent destination panel; `terrain.js` supplies irregular feathered ground. No new artwork was generated in this correction.


Latest update: see PRECISION-UPDATE.md for corrected camera anchors, PDF prayer topology and explicit GPU/device verification limits. Run node validate-precision.mjs in addition to the existing checks.
