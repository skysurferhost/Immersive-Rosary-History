# Rosary precision update — 8 November 2026

The existing cinematic site was edited in place. The previously corrected globe controller, daylight Earth, irregular feathered terrain, removed papal platforms, chapter artwork, opening Mary, and golden timeline were preserved. No new artwork was generated.

## Camera paths

Every chapter now defines a local subject, entrance offset, viewing distance, safe approach distance, and exit offset in cameraAnchors. The next station supplies its transition destination. Curved celestial bridges connect the anchors with continuous motion and controlled look targets. All poses depend on scroll position, so reverse scrolling follows the same path.

Annunciation approaches the relationship between Mary and Gabriel. Fátima approaches the combined composition of Our Lady and all three children. Lepanto approaches the central fleet at sea level. These scenes have zero lateral exit offsets. The other chapters retain different elevations and entrance directions, with focal coordinates reviewed against the actual artwork. Portrait framing uses the viewport aspect ratio; a projected-bounds test keeps both sides of the three principal compositions visible during their focused approach.

Environment opacity now reaches zero before travel would cross the old image plane. The starfield and golden route remain during the celestial bridge. This is an art-directed camera and layered artwork implementation, not volumetric people or a newly generated scene.

## Rosary geometry

The supplied PDF was both rendered and read. Its physical arrangement differs from the old model: the first decade's Our Father sits on the pendant near the centerpiece. That bead was moved from the loop to the pendant. The model now has 54 loop beads and five pendant beads: exactly 53 Hail Marys and six Our Fathers, plus a separate centerpiece and crucifix. IDs and decade assignments remain stable.

The selection code had enlarged beads to 120–130% of their normal dimensions. Selection and hover now change illumination only. Every Hail Mary shares the same geometry, as does every Our Father. Increased loop/pendant spacing prevents overlap; caps follow the loop tangent. The adjacent bead's role is determined by its prayer assignment, never its golden appearance. The final composition was scaled to accommodate the corrected pendant.

## PDF prayer sequence

All 22 numbered stages expand into 75 individual prayer steps, including all 59 bead prayers, six Glory Bes, five Fatima Prayers, Apostles' Creed, Hail Holy Queen, Final Prayer, and opening/concluding Signs of the Cross. Turning off the existing optional Fatima setting produces 70 steps without extra beads.

All seven printed prayer texts were transcribed from the supplied PDF, including Holy Spirit, the concluding petition within Hail Holy Queen, and the final Amen in the Fatima Prayer. The PDF names but does not print the Sign of the Cross formula; its standard English wording is supplied explicitly rather than claimed as a transcription.

The PDF's mystery names, Scripture references, four groups, and weekday schedule are displayed. Existing Assumption reflection was preserved; the guide's Luke 1:46–55 reference is separately labelled as a guide reference. Physical selection, prayer progression, and camera movement remain separate. The centerpiece opens Hail Holy Queen, while the crucifix opens the Sign of the Cross. Resetting the view and changing mystery sets preserve the current prayer position. Next/Previous, restart, decade highlighting, and direct mystery entry work with the readable prayer panel.

## Historical review

Reviewed all 14 chapter texts and nine map descriptions against the sources below. Existing corrected chronology was retained: the opening is explicitly a thematic prologue, the biblical return is labelled, and the historical narrative proceeds through medieval developments, 1569, 1571, 1883, 1917, 1974, 2002, and the documented 2021 initiative. The cross-century chapter is explicitly a thematic survey.

The gradual development of the prayer, Dominic's later devotional tradition, Dominic of Prussia's meditations, Alan/Sprenger confraternities, papal documents, reported Fátima apparitions, and modern global practices remain distinguished. The modern shrine dates and intentions match the Vatican News table. Historical artwork was visually reviewed as artistic reconstruction, not authenticated historical portraiture or photography. No new historical date correction was necessary in this pass. Mystery names and reference ranges were corrected to the supplied guide.

Sources reviewed:
- John Paul II, Rosarium Virginis Mariae, 1, 19–21, 38 (16 October 2002): https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html
- Paul VI, Marialis Cultus, 42–55 (2 February 1974): https://www.vatican.va/content/paul-vi/en/apost_exhortations/documents/hf_p-vi_exh_19740202_marialis-cultus.html
- Dominican Order, confraternity history: https://www.op.org/confraternity-of-the-most-holy-rosary/
- English Dominicans, traditional Rosary and Pius V: https://english.op.org/about-us/rosary/what-is-the-rosary/
- Leo XIII, Supremi Apostolatus Officio (1 September 1883): https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_01091883_supremi-apostolatus-officio.html
- USCCB, Luke 1: https://bible.usccb.org/bible/luke/1
- Shrine of Fátima, apparition narratives: https://www.fatima.pt/en/pages/narrative-of-the-apparitions-
- Vatican News, May 2021 shrine schedule: https://www.vaticannews.va/en/church/news/2021-05/shrines-around-the-world-linked-for-recitation-of-the-rosary.html
- Catholic Encyclopedia, older historical scholarship used with its date in mind: https://www.newadvent.org/cathen/13184b.htm and https://www.newadvent.org/cathen/05112b.htm

## Final invitation

Pray the Immersive Rosary now has an antique-gold border, a four-second breathing halo, a brighter hover/focus treatment, and reduced-motion styling. The original https://www.sky-surfer.com/immersive-rosary destination is unchanged. Text is not blurred. Revisit the Journey was exercised and returned to the opening.

## Validation and limits

PASS: validate.mjs, validate-redesign.mjs, validate-immersion.mjs, validate-globe.mjs, and validate-precision.mjs. Coverage includes bead counts and topology, pairwise nonoverlap, fixed geometry during selection, all four prayer sequences and all 22 stages, globe selection geometry, reverse camera determinism, camera join continuity, layer reversal, and central subject projection bounds at 1440×900, 768×1024, 390×844, and 844×390.

Browser checks: desktop prayer entry; phone initial prayers, mystery-set switching with preserved progress, readable long text; landscape direct fifth-mystery entry and navigation through Hail Holy Queen, Final Prayer and concluding Sign; tablet conclusion display; reset-view preservation; disabled Next at completion; finale URL and four-second glow CSS; Revisit. A landscape overlap was observed, corrected, and rechecked. A long all-prayers UI run timed out; exhaustive sequence validation is the passing programmatic test, not a claimed completed browser traversal.

Remaining limitations: WebGL is unavailable in the cloud browser, so rendered 3D transitions, lighting, hover appearance, actual bead picking, drag rotation and real multitouch pinch have not been visually/device-certified. Mathematical framing tests do not substitute for GPU review. The text refers to a screen recording, but no recording file was available among this turn's uploaded files; the actual code and supplied images/PDF were reviewed. The existing artwork remains layered planes with procedural scenery, not fully modeled historical figures.
