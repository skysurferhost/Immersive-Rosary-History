# Simplified Interactive Rosary controls

Removed New Prayer Session, Start/Restart Prayer, and Highlight Decade from the markup, their click handlers, the obsolete session restart method, and active-decade UI state. Removed the obsolete selector and adjusted the remaining label, reset and mystery-list spacing. Normal current-bead and hover highlighting remains intact.

Entering the Interactive Rosary still selects the local daily mystery on first entry and immediately displays the prayer interface. Previous/Next, individual bead selection, Pray This Mystery, manual mystery selection, Select Today's Mysteries and Reset view remain. Returning to an existing session retains choice and prayer progress. Geometry, prayer-sequence.js, Catholic content, globe and music are unchanged.

Validation: syntax check and existing daily-session, precision, update8 interaction and base validators passed. These cover seven local weekdays, timezone differences, manual-choice persistence, 59 beads, 75 prayer steps, Fatima Prayers, invariant highlight geometry, rotation/pan/zoom input rules and full prayer data. Browser checks at desktop 1280×800, portrait 390×844 and landscape 844×390 confirmed zero removed controls, Next from Sign of the Cross to Apostles' Creed, Previous back, manual choices, Pray This Mystery, Reset view, and retained prayer 34 after exit/re-entry.

Limitations: cloud browser WebGL is unavailable; responsive UI tests passed, but physical-phone gestures and GPU appearance were not newly verified.
