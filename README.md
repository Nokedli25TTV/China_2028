# Kína és Szingapúr 2028

Magyar nyelvű, mobilon is használható utazástervező három főre.

Tervezett időszak: **2028. június 14. – július 17.** (34 nap).

Útvonal: Budapest → Hongkong → Makaó → Guangzhou → Shenzhen → Shanghai / Sanghaj → Nanjing → Xi’an → Peking → Chengdu → Furong Zhen → Chongqing → Szingapúr → Budapest.

A városi időszakok 31 szálláséjszakát jelentenek. A június 14-i és július 16-i éjszaka egyelőre utazási éjszaka; ezt a repülőjegyekkel kell pontosítani. A váltónapok az új állomáshoz tartoznak.

## Használat

A weboldal egyszerű HTML-, CSS- és JavaScript-fájlokból áll, építési lépés és külső csomagok nélkül. A `dist/index.html` közvetlenül megnyitható. A telepíthető és offline működéshez HTTPS vagy helyi HTTP-kiszolgáló szükséges.

- `dist/index.html`: megjelenés, napi nézet, szűrés, útvonalrajz és ellenőrzőközpont.
- `dist/trip-data.js`: várossorrend, tartózkodási időszakok és 34 napi program.
- `dist/spot-descriptions.js`: a kattintható helyszínek rövid ismertetői.
- `dist/sw.js`: offline gyorsítótár.
- `dist/manifest.webmanifest`: telepíthető webalkalmazás adatai.

A „Mai nap” a kiválasztott utazási napot jelenti. Az ellenőrzőközpont állapotai csak az adott böngészőben maradnak meg; nincs közös fiók vagy kiszolgálói adatbázis.

## Tervezési állapot

A dátumok és napi programok kiinduló tervek, nem foglalások. A költségek az új útvonal alapján újraárazandók. A járatokat, határátlépéseket, belépési szabályokat, nyitvatartásokat és a Chengdu–Furongzhen–Chongqing vasúti kapcsolatot 2028 előtt ellenőrizni kell.

A napi útvonalrajz a helyszínek sorrendjét mutatja, nem földrajzi térkép.
