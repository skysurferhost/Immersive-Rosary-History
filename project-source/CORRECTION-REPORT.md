# Globe, environment and historical audit — 7 November 2026

This update corrects the existing project. No new artwork was generated. Daylight Earth, the original chapter artwork, natural starfield and 59-bead Rosary remain.

## Technical changes

- Replaced blocking map dialogs with a persistent, independently scrolling destination panel. The globe has its own viewport, with a stacked layout on phones and portrait tablets.
- Destination buttons and direct marker selection share one selection path: quaternion focus animation, comfortable zoom, active ring, correct description and sources. Region filtering, chronological/name sorting, Earth overview and related-chapter navigation are available.
- Coordinate projection is tested against the NASA texture/Three.js spherical convention. The previous longitude sign was actually correct; the initial diagnosis was corrected during testing. Abrupt assignment and blocked/disconnected interaction were the real defects.
- Direct marker picking uses screen-space tolerance, with a larger touch radius and backside/horizon rejection. Marker sizes and category colors are distinct; clouds remain below the marker surface.
- Drag and pinch stay in globe mode. Keyboard arrows rotate the globe rather than advancing the journey. Journey progress is held and restored. The focus animation can be interrupted by dragging; reduced motion snaps to the requested orientation.
- Existing spline camera and golden path retained. All historical scene materials now fade at entry/exit instead of popping at visibility cutoffs. The Annunciation, Fátima and Lepanto retain separated layers through departure. Loaded galley materials join the same fade system.
- Removed autoplay painting-video substitution at Lepanto: geometry supplies the sea and ship motion. Camera travel remains scroll-driven and reversible.

## Ground/environment audit

| Scene | Correction |
|---|---|
| Annunciation | Removed 27×24 rectangle and detached rectangular threshold. Added a smaller irregular limestone surface with procedural joints/grain and feathered edges, aligned with figure baseline. Retained matching courtyard backdrop and jar. |
| Fátima | Removed 27×24 rectangle. Added uneven countryside geometry with irregular boundary, subdued earth/vegetation color and atmospheric edge fade. |
| Pius V | Removed the floor and detached desk/document props. Preserved the contextual portrait. |
| Leo XIII | Removed the floor and disconnected bookcase props. Preserved the Vatican library artwork. |
| Paul VI | Removed the floor and floating mullions. Preserved the historical portrait composition. |
| John Paul II | Removed the floor. Preserved the portrait and interactive Luminous Mystery medallions. |
| Lepanto | Feathered the sea boundary so its rectangular extent does not read as a stage. Preserved the actual GLB fleet. |
| Dominic, Alan, early prayer, Psalter, regional communities, contemporary prayer | No ground rectangles existed in these scene constructors. Retained deliberate artwork presentation instead of inventing generic medieval stages. |

The ground shader adds subtle contact darkening; this is an artistic approximation, not ray-traced shadows or a full ambient-occlusion pass. No claim is made that it matches the requested production realism without GPU review.

## Transitions

- Existing ascent/descent, lateral approaches, sea approach, papal portrait bypasses, Earth pullback and final reveal remain.
- Added reversible spatial fades across all fourteen historical scenes, with separate foreground/background integration for Annunciation and Fátima.
- Lepanto's visible motion comes from its dimensional fleet and water, not an autoplay painting.
- Global chapter's Explore action now enters the map directly.
- Numerical camera position/derivative continuity and forward/reverse equivalence pass at all fourteen seams. A full visual judgment of cinematic quality remains pending on WebGL hardware. Dominic/Alan and several other chapters are still deliberate artworks, not fully reconstructed walk-through environments.

## Historical and chronological audit

| Chapter | Finding / correction |
|---|---|
| Origins | Explicitly labelled thematic prologue spanning early prayer to medieval practice, not the creation of a complete early-Christian Rosary. |
| Biblical foundations | Explicit return to events before Christ's birth, citing Luke 1:28 and 1:42. Formation of the later prayer is distinguished from the biblical events. |
| Dominic | c.1170–1221; traditional Rosary association qualified, not treated as a proven origin of the complete modern form. |
| Marian Psalter | Medieval development; Dominic of Prussia's Carthusian contribution contextualized from c.1409 onward. |
| Alan/confraternities | 1470s promotion and Cologne foundation in 1475 distinguished from earlier origins. |
| Pius V | 1569 Consueverunt Romani Pontifices retained; traditional form explained. |
| Lepanto | 7 October 1571 retained; naval event, intercession and later feast distinguished from apparition. |
| Spread | Explicit thematic survey of the 17th–19th centuries, overlapping later dated chapters. |
| Leo XIII | 1 September 1883, Supremi Apostolatus Officio retained. |
| Fátima | Reported 1917 apparitions; three children and private-revelation qualification retained. |
| Paul VI | 2 February 1974, Marialis Cultus; scriptural/Christ-centered contemplation and distinction from liturgy retained. |
| John Paul II | 16 October 2002, Rosarium Virginis Mariae; Luminous Mysteries described as proposed, not invented ancient history. |
| Global | Dated to May 2021 initiative; modern prayer examples distinguished from historical development. |
| Today | Contemporary application, not another dated historical milestone. |

The first two chapters deliberately use a prologue followed by biblical foundations. This is explained in the interface rather than falsely presented as strict chronology. Existing AI papal portraits remain identified as interpretations, not authentic photographs. No new independent likeness certification is claimed.

## Reviewed sources

- [John Paul II, Rosarium Virginis Mariae](https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html), especially 1–2 and 19–21.
- [Paul VI, Marialis Cultus](https://www.vatican.va/content/paul-vi/en/apost_exhortations/documents/hf_p-vi_exh_19740202_marialis-cultus.html), 42–55.
- [Dominican Order, Confraternity history](https://www.op.org/confraternity-of-the-most-holy-rosary/).
- [Dominican Order, St Dominic](https://www.op.org/st-dominic/).
- [English Dominicans, What is the Rosary?](https://english.op.org/about-us/rosary/what-is-the-rosary/).
- [Leo XIII, Supremi Apostolatus Officio](https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_01091883_supremi-apostolatus-officio.html).
- [Shrine of Fátima, apparition narratives](https://www.fatima.pt/en/pages/narrative-of-the-apparitions-) and [Catechism §67](https://www.vatican.va/archive/ENG0015/__PH.HTM).
- [Catholic Encyclopedia, Rosary](https://www.newadvent.org/cathen/13184b.htm) and [Dominic of Prussia](https://www.newadvent.org/cathen/05112b.htm). These are older historical scholarship, used alongside current official Church sources.
- [Vatican News, dated May 2021 shrine schedule](https://www.vaticannews.va/en/church/news/2021-05/shrines-around-the-world-linked-for-recitation-of-the-rosary.html).

## Destination audit

| Destination | Category / evidence | Placement |
|---|---|---|
| Rome & Vatican | Historical teaching; papal documents above | 41.9022, 12.4537; representative Vatican point |
| Cologne | Historical confraternity, 1475; Dominican history | 50.9333, 6.9500; city point, not reconstructed medieval building |
| Toulouse | Dominican community, 1215; official biography. Replaces vague Southern France | 43.6044, 1.4419; city point, not apparition site |
| Gulf of Patras | Battle, 1571; Leo XIII's account of prayer and commemoration | 38.2500, 21.2500; approximate sea region, not a precise battle coordinate |
| Cova da Iria | Reported private revelation, 1917; shrine narratives | 39.6313, -8.6732; chapel reference |
| Antipolo | Modern Rosary event, 7 May 2021; Vatican schedule | 14.5877, 121.1767; cathedral/shrine |
| Algiers | Modern Rosary event, 12 May 2021; Vatican schedule | 36.8011, 3.0425; Our Lady of Africa |
| Sydney | Modern Rosary event, 16 May 2021; Vatican schedule | -33.8712, 151.2134; St Mary's Cathedral |
| Mexico City | Modern Rosary event, 26 May 2021; Vatican schedule | 19.4848, -99.1178; Guadalupe basilica complex |

All four questioned modern destinations were substantiated by that specific prayer initiative. Their inclusion does not assert foundational importance in Rosary history. Each panel links its historical source and a separate geographic reference. Map points are appropriate for a world-scale educational globe, not survey-grade coordinates.

## Test results and limitations

- PASS: 59 beads (53 Hail Mary, six Our Father); fourteen chapters, twenty mysteries, nine destinations.
- PASS: all nine destinations' controller focus, front hemisphere position, selected highlight, projected marker picking at four viewport sizes, drag interruption and overview reset; backside rejection.
- PASS: scene constructors and reversible updates; no papal floor geometry; irregular terrain replacement.
- PASS: browser selection of all nine destinations displays matching details without a modal. Region filtering, overview, map keyboard isolation, return to the saved chapter and guided prayer advancement checked.
- PASS: reading/UI layouts inspected at desktop, 390×844, 844×390 and 768×1024; tablet heading overlap corrected.
- NOT VERIFIED: actual GPU-rendered marker clicks, terrain/shader appearance, camera framing during all transitions, physical-device touch/pinch, trackpad feel, frame rate, and full visual forward/back traversal. Browser WebGL is disabled. Mathematical tests are not a substitute for those checks.

This is a functional correction release with explicit remaining visual/device validation, not a claim that every acceptance criterion has passed.
