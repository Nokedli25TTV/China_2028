// Tervezési célárak 2026. október 23-i tájékozódás alapján, nem foglalási ajánlatok.
window.chinaBudget = {
  researchedAt: '2026-10-23',
  contingencyRate: 0.15,
  fx: {HUF:1,CNY:49,HKD:42,MOP:41,SGD:255,USD:326},
  hotels: [
    {city:'Hongkong',nights:3,currency:'HKD',roomRate:1000},
    {city:'Makaó',nights:1,currency:'MOP',roomRate:850},
    {city:'Guangzhou',nights:2,currency:'CNY',roomRate:400},
    {city:'Shenzhen',nights:2,currency:'CNY',roomRate:450},
    {city:'Sanghaj',nights:4,currency:'CNY',roomRate:600},
    {city:'Nanjing',nights:2,currency:'CNY',roomRate:400},
    {city:'Xi’an',nights:2,currency:'CNY',roomRate:380},
    {city:'Peking',nights:3,currency:'CNY',roomRate:600},
    {city:'Chengdu',nights:3,currency:'CNY',roomRate:400},
    {city:'Furong Zhen',nights:1,currency:'CNY',roomRate:500},
    {city:'Chongqing',nights:5,currency:'CNY',roomRate:400},
    {city:'Szingapúr',nights:3,currency:'SGD',roomRate:220}
  ],
  flights: [
    {route:'Budapest → Hongkong',date:'június 14–15.',amount:130000,type:'longhaul'},
    {route:'Szingapúr → Budapest',date:'július 16–17.',amount:140000,type:'longhaul'},
    {route:'Chongqing → Szingapúr',date:'július 13.',amount:65000,type:'regional'},
    {route:'Peking → Chengdu',date:'július 4.',amount:70000,type:'domestic'}
  ],
  rail: [
    {route:'Zhuhai → Guangzhou',cny:80},
    {route:'Guangzhou → Shenzhen',cny:90},
    {route:'Shenzhen → Sanghaj',cny:700},
    {route:'Sanghaj → Nanjing',cny:160},
    {route:'Nanjing → Xi’an',cny:550},
    {route:'Xi’an → Peking',cny:580},
    {route:'Chengdu → Furongzhen',cny:650},
    {route:'Furongzhen → Chongqing',cny:300}
  ],
  food: [
    {region:'Szárazföldi Kína',days:24,currency:'CNY',daily:130},
    {region:'Hongkong',days:3,currency:'HKD',daily:250},
    {region:'Makaó',days:1,currency:'MOP',daily:250},
    {region:'Szingapúr',days:4,currency:'SGD',daily:45},
    {region:'Budapesti indulás és hazaérkezés',days:2,currency:'HUF',daily:6000}
  ],
  attractions: [
    {city:'Hongkong',amount:23000,detail:'Peak és Ngong Ping 360 normál kabin, kisebb kiegészítések.'},
    {city:'Makaó',amount:1000,detail:'Főként ingyenes óvárosi séta, kisebb belépőtartalék.'},
    {city:'Guangzhou',amount:10000,detail:'Chen család csarnoka, Canton Tower választott szintje.'},
    {city:'Shenzhen',amount:0,detail:'A tervben szereplő utcák és parkok; fizetős élményprogram nélkül.'},
    {city:'Sanghaj',amount:23000,detail:'Yu-kert, Shanghai Tower, múzeumi és zhujiajiaói belépők.'},
    {city:'Nanjing',amount:7000,detail:'Fuzimiao és a mauzóleumok fizetős részei.'},
    {city:'Xi’an',amount:14000,detail:'Városfal, Terrakotta Hadsereg, pagoda és kisebb kiegészítések.'},
    {city:'Peking',amount:15000,detail:'Tiltott Város, Jingshan, Mutianyu belépő, helyi shuttle és felvonó.'},
    {city:'Chengdu',amount:17000,detail:'Panda Base, Wuhou-szentély, szecsuáni opera.'},
    {city:'Furong Zhen',amount:7000,detail:'Óvárosi belépő és kisebb programtartalék.'},
    {city:'Chongqing',amount:18000,detail:'Kötélpálya, Wulong belépő és helyi shuttle, választott kilátó.'},
    {city:'Szingapúr',amount:20000,detail:'Cloud Forest + Flower Dome, egy magaslati séta vagy kilátó.'}
  ],
  costs: [
    {id:'longhaul',label:'Budapest–Ázsia repülők',kind:'flight',type:'longhaul',detail:'Budapest → Hongkong és Szingapúr → Budapest együtt; turistaosztály, poggyászkerettel.'},
    {id:'regional',label:'Chongqing → Szingapúr',kind:'flight',type:'regional',detail:'Külön nemzetközi repülés; feladott poggyászra és alap ülésválasztásra is hagyott kerettel.'},
    {id:'domestic',label:'Belföldi repülés · Peking → Chengdu',kind:'flight',type:'domestic',detail:'Egy kínai belföldi járat. A Shenzhen → Sanghaj szakasz nagysebességű vonattal megy, a vasútnál szerepel.'},
    {id:'hotels',label:'Szállás · 31 éjszaka',kind:'hotels',detail:'Mindkét létszámhoz 3 szoba. 5 fő: 2+2+1; 6 fő: 2+2+2. Saját fürdő, jellemzően középkategória, nem luxus.'},
    {id:'food',label:'Étkezés · 34 nap',kind:'food',detail:'Napi főétkezések, egyszerű reggeli és étkezéshez tartozó alap ital; snack és extra kávé külön soron.'},
    {id:'rail',label:'Vasút · 7 városközi szakasz',kind:'rail',detail:'Másodosztályú célárak. A Furonghoz vezető két út több vonatot is jelenthet; az átszállás kerete itt szerepel.'},
    {id:'border',label:'Hongkong → Makaó átkelés',kind:'person',amount:10000,detail:'Egyirányú busz vagy komp és az átkeléshez szükséges kisebb helyi csatlakozások. A Zhuhai–Guangzhou vonat a vasútnál szerepel.'},
    {id:'public-transit',label:'Helyi tömegközlekedés',kind:'person',amount:55000,detail:'Városi metrók, buszok, helyi kompok. A reptéri / pályaudvari transzferek és kirándulások külön soron.'},
    {id:'transfers',label:'Közös transzferek és taxik',kind:'group',amount:240000,detail:'Teljes csapatra összesen: reptéri és pályaudvari kijutások, nagyautó vagy két taxi, csomagokkal. A napi metró nincs itt újra felszámítva.'},
    {id:'excursions',label:'Kirándulások közlekedése',kind:'group',amount:180000,detail:'Teljes csapatra összesen: Mutianyu, Wulong, a Terrakotta Hadsereg és Zhujiajiao kijutási kerete. A belépők és a helyszíni shuttle a programok során szerepelnek.'},
    {id:'hungary-airport',label:'Budapesti reptéri kijutás és hazaút',kind:'group',amount:0,detail:'A szülők viszik ki és hozzák haza a repülőtérre, ezért ingyenes. Ha ez mégsem így lesz, taxi vagy transzfer árát külön kell kérni.'},
    {id:'attractions',label:'Belépők és programok',kind:'attractions',detail:'A városonkénti programcsomag, a kiválasztott felvonókkal és kilátókkal. Ugyanazt a jegyet csak egyszer számoljuk.'},
    {id:'insurance',label:'Utasbiztosítás · 34 nap',kind:'person',amount:50000,detail:'Személyenkénti keret Ázsiára, az összes célterülettel. Életkor, egészségi állapot és fedezet szerint eltérhet; nem egyedi biztosítási ajánlat.'},
    {id:'internet',label:'Internet / eSIM',kind:'person',amount:24000,detail:'Telefononként egy regionális adatcsomag, amely 30 napnál tovább érvényes, vagy hosszabbítás. Példa: jelenlegi 50 GB / 90 nap csomag 69 USD; a telefon kompatibilitása ellenőrizendő.'},
    {id:'snacks',label:'Snack, extra ital, kávé',kind:'person',amount:55000,detail:'Napi kb. 1600 Ft külön keret. Nem tartalmazza újra a főétkezéseket.'},
    {id:'gifts',label:'Ajándék és vásárlás',kind:'person',amount:45000,detail:'Szabadon alakítható személyes keret; nagyobb elektronika és különleges vásárlás nincs benne.'},
    {id:'admin',label:'Vízum / adminisztráció kerete',kind:'person',amount:30000,detail:'Félretett összeg, nem állítás arról, hogy 2028-ban biztosan vízum kell. A 2028-as szabályok alapján csökkenhet vagy emelkedhet.'},
    {id:'laundry',label:'Mosás és apró utazási kiadások',kind:'person',amount:20000,detail:'Mosoda, csomagmegőrző, kisebb használati cikkek és hasonló kiadások.'},
    {id:'fees',label:'Foglalási, banki és ATM-díjak',kind:'person',amount:12000,detail:'Kisebb fizetési és közvetítői díjak kerete. A tervezési árfolyam külön szerepel, a visszatéríthető kaució nem végleges költség.'}
  ],
  sources: [
    {title:'MNB · hivatalos árfolyamok',url:'https://www.mnb.hu/en/arfolyamok',note:'2026. október 22.: CNY 48,89; HKD 41,60; SGD 255,47; USD 326,23 Ft. A kalkulátor ezekhez kerekített értékeket használ (CNY 49, HKD 42, SGD 255, USD 326). A MOP a dollárhoz kötött árfolyamból, kb. 41 Ft.'},
    {title:'Liligo · Budapest–Hongkong',url:'https://www.liligo.hu/jaratok/utvonalak/budapest/hongkong',note:'Oda-vissza ár 197 863 Ft-tól, az elmúlt három hónap megfigyelése szerint; októberben általában a legolcsóbb. Egyirányra kb. 100 ezer Ft, a nyári indulásra ehhez felárat számoltunk.'},
    {title:'Austrian · Budapest–Hongkong',url:'https://www.austrian.com/lhg/hu/hu/o-d/cy-cy/budapest-hongkong',note:'Oda-vissza kezdőár 230 900 Ft a keresési oldalon. Nem a mi dátumainkra szóló ajánlat.'},
    {title:'Skyscanner · Budapest–Szingapúr',url:'https://www.skyscanner.com/routes/bud/sins/budapest-to-singapore.html',note:'Havi egyirányú táblázat (Budapest → Szingapúr): júniusban kb. 326 USD, júliusban kb. 421 USD. A júliusi visszaútra a júliusi értéket vettük alapul (kb. 140 ezer Ft).'},
    {title:'Singapore Airlines · Chongqing–Szingapúr',url:'https://www.singaporeair.com/en-sg/flights-from-chong-qing-to-singapore-sg',note:'Oda-vissza economy ár 2 062–2 601 CNY 2026-os nyári–őszi időszakra, adókkal. Egyirányra kb. 65 ezer Ft-ot számoltunk.'},
    {title:'Shenzhen–Sanghaj vonat · útvonal-útmutató',url:'https://chinafortravelers.com/tools/rail-map/shenzhen-to-shanghai/',note:'Másodosztályú G-vonat kb. 552–710 CNY a 2026-os útmutató szerint; a menetidő forrásonként 7–10 óra. A 700 CNY-os tervezési ár ebbe a sávba esik; a végső árat a 12306-on kell ellenőrizni.'},
    {title:'Trip.com · Hongkongi szállások',url:'https://www.trip.com/hotels/hong-kong-hotels-list-58/',note:'Árszintellenőrzés; a kalkulátor városi szobakerete nem konkrét foglalás.'},
    {title:'Trip.com · Sanghaji háromcsillagos szállások',url:'https://us.trip.com/hotels/star3/city/cn/shanghai.html',note:'Középkategóriás árszintek és közzétett átlagok.'},
    {title:'Trip.com · Szingapúri háromcsillagos szállások',url:'https://us.trip.com/hotels/star3/city/sg/singapore.html',note:'A drágább szingapúri blokk szobakeretének ellenőrzéséhez.'},
    {title:'China Railway · 12306',url:'https://www.12306.cn/en/index.html',note:'A konkrét dátumok és vonatok hivatalos, későbbi ellenőrzési pontja; a mostani táblázat célárakat tartalmaz.'},
    {title:'ChinaVigators · Peking–Xi’an vonat',url:'https://www.chinavigators.com/beijing-to-xian-train/',note:'Másodosztályú nagysebességű jegy a forrásokban kb. 515–600 CNY. A 580 CNY-os tervezési ár ebbe a sávba esik; a végső árat a 12306-on kell ellenőrizni.'},
    {title:'Peak Tram · 2026-os díjak',url:'https://thepeak.com.hk/sites/peak/files/2025-12/%5BPress%20Release%5D%20The%20Peak%20Tram%20Announces%20Fare%20Adjustment.pdf',note:'Felnőtt oda-vissza 116 HKD a 2025. december 29-től érvényes díjak szerint. A hongkongi belépőkeretben ezzel számoltunk.'},
    {title:'Ngong Ping 360 · hivatalos árlista',url:'https://www.np360.com.hk/media/s3wo0t3n/immediate-release-ngong-ping-360-announces-new-ticket-prices.pdf',note:'Normál kabinos felnőtt retúr 295 HKD a közzétett árlistán.'},
    {title:'Tiltott Város · hivatalos látogatói oldal',url:'https://intl.dpm.org.cn/visit.html',note:'Nyári felnőtt alapbelépő jelenleg 60 CNY; a külön galériák felárasak.'},
    {title:'Gardens by the Bay · hivatalos belépők',url:'https://www.gardensbythebay.com.sg/en/things-to-do/attractions/flower-dome.html',note:'Nem helyi felnőttek Flower Dome + Cloud Forest csomagja jelenleg 46 SGD. A 2028-as kiállítás és ár változhat.'},
    {title:'Airalo · regionális eSIM',url:'https://www.airalo.com/asia-esim/asialink-7-days-1gb',note:'Az oldalon szereplő 50 GB / 90 nap csomag 69 USD; Kína, Hongkong, Makaó és Szingapúr is szerepel a lefedettségben.'},
    {title:'Allianz · utasbiztosítás',url:'https://www.allianz.hu/hu_HU/lakossagi/utasbiztositasok/utasbiztositas.html',note:'Időtartam és feltételek ellenőrzése. Az árhoz személyes ajánlat kell; a kalkulátor csak keretet tesz félre.'},
    {title:'Kínai nagykövetség · jelenlegi vízumdíjak',url:'https://hu.china-embassy.gov.cn/hu/lsyw/vizum1/202512/t20251225_11787050.htm',note:'A közzétett díjkedvezmény 2026 végéig szól. Ebből nem következtetünk 2028-as díjra vagy vízumkötelezettségre.'},
    {title:'Szingapúr · hivatalos közlekedési díjak',url:'https://www.ptc.gov.sg/fares/public-transport-fares-and-passes/',note:'A helyi közlekedési keret árszintjének ellenőrzéséhez.'}
  ]
};

window.calculateTripBudget = function(partySize) {
  if (![5,6].includes(partySize)) throw new RangeError('5 vagy 6 fő választható.');
  const model = window.chinaBudget;
  const roomCount = 3;
  const sum = items => items.reduce((total,value) => total + value,0);
  const hotelTotal = sum(model.hotels.map(hotel => hotel.nights * hotel.roomRate * model.fx[hotel.currency] * roomCount));
  const foodPerPerson = sum(model.food.map(food => food.days * food.daily * model.fx[food.currency]));
  const railPerPerson = sum(model.rail.map(rail => rail.cny * model.fx.CNY));
  const attractionPerPerson = sum(model.attractions.map(place => place.amount));
  const lines = model.costs.map(item => {
    let group;
    if (item.kind === 'hotels') group = hotelTotal;
    else if (item.kind === 'food') group = foodPerPerson * partySize;
    else if (item.kind === 'rail') group = railPerPerson * partySize;
    else if (item.kind === 'attractions') group = attractionPerPerson * partySize;
    else if (item.kind === 'flight') group = sum(model.flights.filter(flight => flight.type === item.type).map(flight => flight.amount)) * partySize;
    else group = item.amount * (item.kind === 'group' ? 1 : partySize);
    return {...item,group,perPerson:group / partySize};
  });
  const baseTotal = sum(lines.map(line => line.group));
  const reserveTotal = Math.round(baseTotal * model.contingencyRate);
  return {partySize,roomCount,roomLayout:partySize === 5 ? '2 + 2 + 1' : '2 + 2 + 2',hotelTotal,lines,baseTotal,reserveTotal,total:baseTotal+reserveTotal,perPerson:(baseTotal+reserveTotal)/partySize,basePerPerson:baseTotal/partySize};
};
