# Introduction, daily mysteries, and global prayer navigation

- Added small original outline mouse/finger SVGs beside the introduction action. The motion uses translateY only; mobile says “Swipe Up To Begin The Journey” and desktop says “Scroll To Begin The Journey.” Decorative icons ignore input. The cue fades as the journey starts and is hidden with the introduction. Compact-phone spacing keeps it above navigation.
- Retained Begin the Journey's shared four-second golden invitation glow. Both the gesture and glow respect OS reduced motion and the site's reduced-motion setting.
- Mobile Return to Timeline previously depended on competing absolute positioning, narrow heading widths and fixed offsets. Mobile-only rules now use a reserved flex layout, minimum 44px targets, safe-area insets and dynamic-height limits on expanded destination cards. Desktop positioning remains unchanged. Returning uses the existing saved historical position.
- Renamed the worldwide tab to “Global Rosary Prayer — 2021,” with “32 Participating Locations.” It shares the final invitation's gold pulse; its selected state uses a brighter steady outline. Historical Development and all 32 records, coordinates, intentions and source links are unchanged. Vatican News's distinction between the 30-shrine initiative and its 32 scheduled location entries remains explained.
- Centralized local weekday mapping in rosary-session.js using Date.getDay(). First Rosary entry chooses the daily set. Manual choice, bead selection and navigation preserve the session, including across midnight. New Prayer Session intentionally recalculates the local default and starts at the opening prayer. Select Today's Mysteries intentionally chooses the daily set without losing the prayer step. Today's label is separate from the selected dropdown and refreshes on selection, entry and returning to the browser tab.
- All twenty revised meditations, Scripture references, fifteen-decade explanation and Pope St. Pius V wording are unchanged. No new rendering dependencies or geometry changes.

## Verification

All 13 validation scripts passed, including new tests of seven weekdays, New York/Tokyo timezone boundaries, manual selection across midnight and re-entry, and explicit new sessions. Existing checks cover 59 beads, 75 prayer steps, five Fatima Prayers, globe markers, Three.js scene construction, journey input, model assets and Track 1 audio integrity.

Browser checks: desktop 1280×800, portrait 390×844, landscape 844×390, small phone 320×568. Return buttons stayed within each viewport; mobile targets were 44px tall. Globe return did not overlap the expanded information panel in any tested size. Returning restored chapter progress 1.000. All 32 entries were present. Manual Luminous selection and prayer step survived exit/re-entry; selecting today's set preserved the step; a new session reset intentionally. Both gesture and globe pulse stopped under reduced motion. Small-phone intro cue was verified above navigation. Preserved Assumption text and citation displayed correctly.

Limitations: cloud browser has no WebGL rendering. These were responsive browser checks, not physical-phone, pinch-gesture or GPU appearance tests. Camera/globe/gesture regression checks are programmatic. No claim of new real-device certification. No screen recording was attached alongside this turn's text instructions.

Source checked: https://www.vaticannews.va/en/church/news/2021-05/shrines-around-the-world-linked-for-recitation-of-the-rosary.html
