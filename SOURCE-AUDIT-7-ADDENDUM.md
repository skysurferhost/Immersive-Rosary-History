# Final external-link audit addendum (recovered)

These retained results were restored after workspace maintenance; no new network requests were performed during this recovery. The original final sweep on 9 November 2026 scanned top-level authored dist JavaScript, HTML and CSS, including content.js, shrines.js, index.html, sources.html and report/credit pages, plus photo-metadata-7.json. Vendor Three.js implementation links were excluded.

**65 unique URLs checked: 61 returned HTTP 200; four returned HTTP 403 directly but were successfully retrieved through the web retrieval service with correct chapter content. No dead or wrong-destination link was identified in that snapshot.** A 403 alone is not a broken-link verdict; access varies by requester and time.

Compared with the 55-link baseline, 11 URLs were added and the inaccessible Ourém URL was removed. Its Mapcarta Chapel of the Apparitions replacement returned 200 and identified the correct building.

## Scripture verification

| Mystery | Source | Direct result | Content result |
|---|---|---|---|
| Baptism | https://bible.usccb.org/bible/matthew/3 | 200 | Correct chapter; 3:13–17 |
| Cana | https://bible.usccb.org/bible/john/2 | 403 | Web retrieval succeeds; 2:1–11, wedding, Mary and first sign |
| Kingdom | https://bible.usccb.org/bible/mark/1 | 200 | Correct chapter; 1:14–15, proclamation and conversion |
| Transfiguration | https://bible.usccb.org/bible/matthew/17 | 403 | Web retrieval succeeds; 17:1–8 verified |
| Eucharist | https://bible.usccb.org/bible/matthew/26 | 403 | Web retrieval succeeds; correct chapter and Last Supper passage |

Existing Luke 1 also returned 403 directly, but web retrieval verified its correct content. Retain these authoritative links rather than replacing them solely because automated requests are restricted.

## Photographs, licenses and imagery

- St Peter’s Commons page identifies **Wknight94** and offers **CC BY-SA 3.0**. The façade subject, metadata author and license match.
- Fátima Commons page identifies **LLEW**, **CC BY-SA 4.0**, and the exterior of the Basilica of Our Lady of the Rosary. This matches the intended shrine.
- Both Commons pages and both license URLs returned 200. Web retrieval independently confirmed authors and license versions. Preserve visible attribution, source/license links and modification/cropping statements. This confirms source metadata, not an independent comparison of image bytes or rendered crops.
- NASA SVS 2915 returned 200 and identifies Blue Marble imagery. No new NASA URL appeared in the scan. A cloud-composite credit without its own source URL cannot be considered independently verified provenance.
- Every shrine context URL in the final shrines.js was included and returned 200, including the official Ukrainian Greek Catholic Church report. Geographic aggregators establish place identity/context, not apparition authenticity or comprehensive devotional histories.

## Complete final snapshot

Machine-readable companion: final-linkcheck-7.json. These are dated retained results; links added after that scan require their own check. No application files were edited by the audit.

| URL | HTTP | Verification |
|---|---|---|
| https://www.sky-surfer.com/immersive-rosary | 200 | DirectHTTP200 and matching page identity inspected |
| https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.vaticannews.va/en/church/news/2021-05/shrines-around-the-world-linked-for-recitation-of-the-rosary.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://svs.gsfc.nasa.gov/2915/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.vatican.va/content/paul-vi/en/apost_exhortations/documents/hf_p-vi_exh_19740202_marialis-cultus.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_01091883_supremi-apostolatus-officio.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.newadvent.org/cathen/13184b.htm | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.op.org/confraternity-of-the-most-holy-rosary/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.fatima.pt/en/pages/narrative-of-the-apparitions- | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.usccb.org/how-to-pray-the-rosary | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.newadvent.org/cathen/05112b.htm | 200 | DirectHTTP200 and matching page identity inspected |
| https://english.op.org/about-us/rosary/what-is-the-rosary/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/24884214 | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.geonames.org/2886242/koeln.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/Toulouse | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.op.org/st-dominic/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://en.wikipedia.org/wiki/Battle_of_Lepanto | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.vatican.va/archive/ENG0015/__PH.HTM | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W94093055 | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.wikidata.org/wiki/Q2088381 | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.geonames.org/11048737/basilica-de-santa-maria-de-guadalupe.html | 200 | DirectHTTP200 and matching page identity inspected |
| https://dictionaryofsydney.org/building/st_marys_cathedral | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W387358850 | 200 | DirectHTTP200 and matching page identity inspected |
| https://gcatholic.org/churches/africa/6566.htm | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/fr/W208061805 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W97417380 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W469635682 | 200 | DirectHTTP200 and matching page identity inspected |
| https://en.wikipedia.org/wiki/Basilica_of_Our_Lady_of_Aparecida | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W186577050 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/29102824 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W191789187 | 200 | DirectHTTP200 and matching page identity inspected |
| https://www.egliseinfo.be/communaute/Bli/41/sanctuaire-notre-dame-des-pauvres | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/fr/17317934 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W77344557 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W672541959 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W1115592386 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/29635992 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/20621032 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/es/N4958231645 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W1412797204 | 200 | DirectHTTP200 and matching page identity inspected |
| https://en.wikipedia.org/wiki/National_Basilica_Sanctuary_of_the_Charity_del_Cobre | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W280652259 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/36120134 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W66794334 | 200 | DirectHTTP200 and matching page identity inspected |
| https://gcatholic.org/churches/asia-south/86835 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W33779121 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/34443152/Map | 200 | DirectHTTP200 and matching page identity inspected |
| https://discover.ua/en/locations/zarvanickij-duhovnij-centr | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W80328722 | 200 | DirectHTTP200 and matching page identity inspected |
| https://en.wikipedia.org/wiki/Our_Lady_of_Lebanon | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W28778029 | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/36153076 | 200 | DirectHTTP200 and matching page identity inspected |
| https://bible.usccb.org/bible/luke/1 | 403 | DirectHTTP403; alternate web retrieval verified correct Scripture chapter |
| https://commons.wikimedia.org/wiki/File:Facade_of_St._Peter%27s_Basilica.jpg | 200 | DirectHTTP200 and matching page identity inspected |
| https://creativecommons.org/licenses/by-sa/3.0/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://mapcarta.com/W159968550 | 200 | DirectHTTP200 and matching page identity inspected |
| https://commons.wikimedia.org/wiki/File:Sanctuary_of_F%C3%A1tima,_Fatima_Sanktuarium.jpg | 200 | DirectHTTP200 and matching page identity inspected |
| https://creativecommons.org/licenses/by-sa/4.0/ | 200 | DirectHTTP200 and matching page identity inspected |
| https://bible.usccb.org/bible/matthew/3 | 200 | DirectHTTP200 and matching page identity inspected |
| https://bible.usccb.org/bible/john/2 | 403 | DirectHTTP403; alternate web retrieval verified correct Scripture chapter |
| https://bible.usccb.org/bible/mark/1 | 200 | DirectHTTP200 and matching page identity inspected |
| https://bible.usccb.org/bible/matthew/17 | 403 | DirectHTTP403; alternate web retrieval verified correct Scripture chapter |
| https://bible.usccb.org/bible/matthew/26 | 403 | DirectHTTP403; alternate web retrieval verified correct Scripture chapter |
| https://ugcc.ua/en/data/in-zarvanytsia-the-sky-is-open-just-like-the-heart-of-the-blessed-virgin-mary-to-the-prayers-of-each-of-us-his-beatitude-sviatoslav-1787/ | 200 | DirectHTTP200 and matching page identity inspected |
