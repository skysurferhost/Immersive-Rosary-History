# May 2021 schedule and coordinates

Verified 8 November 2026 against the Vatican News schedule:
https://www.vaticannews.va/en/church/news/2021-05/shrines-around-the-world-linked-for-recitation-of-the-rosary.html

The article has 32 rows: two on May 1, one on each subsequent day. It describes 30 shrines plus the Vatican opening and closing events. Names and intentions in JSON preserve schedule wording with normalized whitespace. Localities and country names are normalized; the schedule's “America” is separated into North America and South America for geographic filtering, and “Bosnia” becomes Bosnia and Herzegovina.

Every coordinate has a retrieved geographic source URL. These are mapped site points, not surveying measurements. The precision field discloses building versus complex locations. The small number of secondary mapping sources should not be represented as authoritative surveying data.

Important identity checks:
- Walsingham is the Catholic national shrine at Houghton Saint Giles / Slipper Chapel, not the Anglican shrine in the village.
- Aparecida is the new national basilica, not the old historical basilica.
- Nazareth is the Catholic Basilica of the Annunciation, not the Greek Orthodox church.
- Ta' Pinu uses the mapped church building, not the nearby locality point.
- Medjugorje uses Saint James parish church, not Apparition Hill. This is a geographic choice, not a claim about supernatural events.
- Zarvanytsia uses the Marian spiritual centre, not the village centre. Discover.ua point agrees with the centre's position in geographic listings. A different travel site confusingly supplied village coordinates and was not used.
- Banneux uses Belgium's church listing coordinates (50.538, 5.751), rounded to 0.001 degrees and inside the shrine grounds. This is about 100 m precision, not an exact chapel point.
- Vatican Gardens uses the mapped garden complex centre; it must not be called the exact ceremony position. The separate opening point is St Peter's Basilica. At world scale the two markers need coincident-point handling; do not displace their geographic coordinates to fake separation.

Elele and Nyaunglebin were verified as shrine-specific GCatholic locations, avoiding town-centre substitutions:
- https://gcatholic.org/churches/africa/6566.htm supplies full Plus Code 6FQ84RMG+HQ. Decoded 10-character cell centre: 5.1339375, 6.8269375.
- https://gcatholic.org/churches/asia-south/86835 supplies full Plus Code 7M9RXP2C+72. Decoded cell centre: 17.9506875, 96.7200625.
These Plus Code cells are 0.000125 degrees wide/high (approximately 14 m). The shrine points' actual real-world accuracy depends on the directory, not on the displayed number of decimal places. Elele's source also distinguishes the Our Lady of Lourdes parish 3 km south; a separate travel page erroneously mixed these sites, so its coordinates were rejected.

Nyaunglebin's identity and Hospital Road address are corroborated by the official Archdiocese of Yangon:
https://catholicarchdioceseofyangon.com/parish.php?parish=Shrine+of+Our+Lady+of+Lourdes+Catholic+Church+%28Nyaunglebin%29

Primary corroboration for Zarvanytsia's shrine identity:
https://map.ugcc.ua/view/118-sobor-zarvanytskoy-materi-bozhoy-mariyskogo-duhovnogo-tsentru-s-zarvanytsya-ternopilska-obl

No coordinates in JSON remain knowingly substituted with an unlabelled town centre. Coordinates were not satellite-image surveyed. No artwork generated or site source edited during this research task.
