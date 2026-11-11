# Redesign audit and chapter asset matrix

Initial audit: chapters 6,9,11 showed documents instead of Pius V, Leo XIII, Paul VI. Chapters2 and10 reused opening Mary. Chapters4/8 reused modern rosary geometry without enough contextual distinction. Chapters1/5 reused the same floating manuscript. The timeline was a constant-opacity single-pixel line; camera modulo offsets had unequal derivatives at boundaries.

| Chapter | Primary subject / replacement | Supporting environment | Transition | Verification |
|---|---|---|---|---|
| 1 | Early Christian Psalm prayer, loose counting pebbles | Late antique stone dwelling; no modern Rosary | Prayer-gathering approach | Generated historical illustration; visual review passed for subject/context; interpretive reconstruction |
| 2 | Annunciation with Gabriel and Mary | Layered Nazareth courtyard, foreground figures, ground, threshold and jar | Reversible layered entry | Generated sacred art; visual review passed for subject/context; interpretive reconstruction |
| 3 | St. Dominic | Medieval Dominican clothing and study | Curved reveal | Existing reviewed art retained; interpretive likeness |
| 4 | Marian Psalter and prayer counters | Early15th-century Carthusian cell | Bead assembly | Generated illustration; visual review passed for subject/context; interpretive reconstruction |
| 5 | Blessed Alan preaching to confraternity | Late medieval community | Social-scene pullback | Interpretive likeness; visual review passed for subject/context; interpretive reconstruction |
| 6 | Pius V | 1569 Renaissance Vatican, document secondary | Seal-to-pope approach | Generated likeness; visual review passed for subject/context; interpretive reconstruction |
| 7 | Sixteenth-century galleys at Lepanto | Wave geometry, three GLB galleys and distant horizon | Sea-level descent | Existing art/video reviewed |
| 8 | Two separately dated communities | Mexico c.1750; France c.1880 | Lateral passage between scenes | Illustrative scenes, not claims about a specific event; visual review passed for subject/context; interpretive reconstruction |
| 9 | Leo XIII | Nineteenth-century Vatican library | Ascending reveal | Generated likeness; visual review passed for subject/context; interpretive reconstruction |
| 10 | Our Lady of Fátima, Lúcia, Francisco, Jacinta | Separate landscape and figure layers, ground, rocks and trees | Landscape descent | Devotional reconstruction; visual review passed for subject/context; interpretive reconstruction |
| 11 | Paul VI | 1974 Vatican; document secondary | Restrained lateral approach | Generated likeness; visual review passed for subject/context; interpretive reconstruction |
| 12 | John Paul II | Five interactive mystery medallions | Orbiting reveal | Existing reviewed art retained |
| 13 | Interactive 3D Earth | NASA daylight surface, clouds, atmosphere and source-linked markers | Earth pullback | Geometry/data checks; GPU appearance unverified |
| 14 | Contemporary diverse Catholic community praying | Parish garden | Peaceful pullback | Illustrative scene; visual review passed for subject/context; interpretive reconstruction |

Opening Mary is used only in the introduction. It is not assigned as chapter artwork or as the chapter fallback. Every asset has a fixed chapter assignment in dist/chapter-scenes.js. Core Rosary, globe, historical content, prayer sequences and navigation are preserved.

Visual sources: Vatican Paul VI biography and Marialis Cultus; Vatican Leo XIII collection; Library of Congress Leo XIII portrait; Shrine of Fátima Narrative of the Apparitions and chronology of the seers; traditional Pius V portrait conventions. These are reference sources, not a claim that AI output is an authentic likeness or primary document. All reconstructed scenes are labeled artistic.

Immersion update: camera approaches and left/right/panoramic compositions vary by chapter. New environments and Earth pass structural checks; their GPU appearance is not yet visually certified.
