# Rendering architecture

Three.js is the sole interactive 3D engine for The Rosary Through Time. Preserve the existing journey, camera path, Earth, Rosary, input ownership, music and navigation. Do not rebuild these scenes or introduce Spline runtime packages, embeds, scene files or new Spline authoring dependencies.

Detailed devotional objects should use optimized, attributed GLB/glTF assets loaded by the existing Three.js GLTFLoader. Preserve correct Rosary topology and devotional iconography. Historical imagery may use Higgsfield when appropriate; new artwork is not a substitute for interaction or performance fixes.

The Spline authoring experiment was not integrated into this website. Three.js mathematical spline curves are camera/path geometry, not dependencies on the Spline product, and must remain intact.

Run `node validate-architecture.mjs` with the existing regression suites before publication. Real-phone input and GPU performance require hardware verification; responsive previews and synthetic pointer tests are not substitutes.
