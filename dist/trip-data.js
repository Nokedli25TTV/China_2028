// A megadott dátumok tervezett váltónapok, még nem foglalások.
window.chinaTrip = {
  start: '2028-06-14',
  end: '2028-07-17',
  travelers: 5,
  possibleTravelers: [5,6],
  hotelNights: 31,
  cities: [
    {id:'kiutazas',name:'Kiutazás Budapestről',transit:true,nights:0,period:'június 14.',blurb:'Indulás a Budapest Liszt Ferenc Nemzetközi Repülőtérről.',days:[
      {n:1,title:'Elindulunk Hongkong felé',route:['Budapest Liszt Ferenc Nemzetközi Repülőtér','Repülés Hongkongba'],note:'Az indulási idő, az esetleges átszállás és az érkezés a későbbi repülőjegyhez igazodik. Az első szálláséjszaka június 15.',load:'könnyű',travel:true}
    ]},
    {id:'hongkong',name:'Hongkong',nights:3,period:'június 15–18.',blurb:'Kikötői panorámák, hegyek és a régi Hongkong utcái.',days:[
      {n:2,title:'Megérkezés a Victoria Harbourhoz',route:['Érkezés Hongkongba','Szállás elfoglalása','Tsim Sha Tsui sétány','Avenue of Stars'],note:'Könnyű érkezési nap; a kikötőparti séta a repülés utáni energiaszinthez igazítható.',load:'könnyű',travel:true},
      {n:3,title:'Hongkong-sziget régi és új arca',route:['Star Ferry','Central–Mid-Levels mozgólépcső','Tai Kwun','Man Mo templom','Victoria Peak'],note:'Városi séta hagyományos utcákkal és felhőkarcolókkal. A Peak kilátását az időjáráshoz igazítsuk.',load:'aktív'},
      {n:4,title:'Lantau és Tai O halászfalu',route:['Ngong Ping 360 felvonó','Tian Tan Buddha','Po Lin kolostor','Tai O halászfalu'],note:'Egész napos kirándulás. Rossz időben helyette a Chi Lin kolostor, a Nan Lian kert és Kowloon lehet a tartalék.',load:'közepes'}
    ]},
    {id:'macao',name:'Makaó',nights:1,period:'június 18–19.',blurb:'Portugál–kínai örökség, mozaikos terek és történelmi utcák.',days:[
      {n:5,title:'Átkelés Makaó történelmi központjába',route:['Átkelés Hongkongból Makaóba','Senado tér','Szent Pál-templom romjai','Monte-erőd'],note:'A hídon közlekedő busz vagy a komp közül a szállásokhoz illeszkedőt választjuk. Az óváros a fő program; a Monte-erőd elhagyható.',load:'közepes',travel:true}
    ]},
    {id:'guangzhou',name:'Guangzhou',nights:2,period:'június 19–21.',blurb:'Kantoni udvarházak és a Gyöngy-folyó modern városképe.',days:[
      {n:6,title:'Makaóból a kantoni nagyvárosba',route:['Határátlépés Makaóból Zhuhaiba','Gyorsvasút Zhuhai felől Guangzhouba','Shamian-sziget','Yongqing Fang'],note:'Határátlépés és vasúti utazás után csak könnyű séta került a napra.',load:'könnyű',travel:true},
      {n:7,title:'Kantoni örökség és folyóparti fények',route:['Chen család ősi csarnoka','Beijing Road történelmi útvonala','Huacheng tér','Canton Tower esti panorámája'],note:'Hagyományos építészet után a modern városi tengely következik. A torony belső kilátója választható program.',load:'közepes'}
    ]},
    {id:'shenzhen',name:'Shenzhen',nights:2,period:'június 21–23.',blurb:'Technológia, új városi terek és zöld öblök.',days:[
      {n:8,title:'Érkezés Kína technológiai központjába',route:['Gyorsvasút Guangzhou felől','Civic Center','Lianhuashan Park','Futian esti látképe'],note:'A rövidebb városközi utazás mellé kényelmes városi séta és panoráma kerül.',load:'könnyű',travel:true},
      {n:9,title:'Régi település és kortárs Shenzhen',route:['Nantou ősi város','OCT Loft művésznegyed','Shenzhen Bay Park','Talent Park esti fényjátéka'],note:'Régi utcák, művésznegyed és vízpart. A fényprogram aktuális napjait később ellenőrizzük.',load:'közepes'}
    ]},
    {id:'sanghaj',name:'Shanghai · Sanghaj',nights:4,period:'június 23–27.',blurb:'Art deco, vízi városok és Pudong felhőkarcolói.',days:[
      {n:10,title:'Repülés Sanghajba',route:['Repülés Shenzhenből Sanghajba','Nanjing Road','Bund rakpart'],note:'Utazási nap, egyetlen összefüggő esti sétával. Kései érkezéskor a Bund másik estére tehető.',load:'könnyű',travel:true},
      {n:11,title:'Kertek és a régi Sanghaj',route:['Yu-kert','Városisten temploma','Óvárosi utcák','Xintiandi','Egykori francia negyed'],note:'Hagyományos kert, shikumen épületek és fákkal szegélyezett utcák. A két városrész között közlekedéssel számolunk.',load:'közepes'},
      {n:12,title:'Pudong és a modern horizont',route:['Lujiazui sétány','Shanghai Tower','Pudong Art Museum','Huangpu-part esti fényei'],note:'A torony és a múzeum belső programja érdeklődés és jegyfoglalás szerint választható.',load:'közepes'},
      {n:13,title:'Zhujiajiao vízi városa',route:['Zhujiajiao csatornái','Kezhi-kert','Fangsheng híd','Régi teaházak és sikátorok'],note:'Lassabb kirándulónap. A ki- és visszautazás miatt másik nagy programot már nem teszünk mellé.',load:'közepes'}
    ]},
    {id:'nanjing',name:'Nanjing',nights:2,period:'június 27–29.',blurb:'Régi főváros, folyóparti lámpások és zöld mauzóleumkertek.',days:[
      {n:14,title:'Nanjing óvárosi hangulata',route:['Gyorsvasút Sanghajból Nanjingba','Laomendong történelmi negyed','Fuzimiao Konfuciusz-templom','Qinhuai folyópart'],note:'Érkezés után a város déli történelmi negyedeit járjuk be, esti folyóparti sétával.',load:'közepes',travel:true},
      {n:15,title:'A Bíbor-hegy történelmi emlékei',route:['Szun Jat-szen-mauzóleum','Ming Xiaoling mauzóleum','Szent út kőszobrai'],note:'Zöld, de sok gyaloglással és lépcsővel járó nap. Az egyes helyszínek közti transzfert is tervezzük meg.',load:'aktív'}
    ]},
    {id:'xian',name:'Xi’an',nights:2,period:'június 29. – július 1.',blurb:'Városfal, bazárutcák és az első császár agyagkatonái.',days:[
      {n:16,title:'Utazás Xi’anba',route:['Gyorsvasút Nanjingból Xi’anba','Xi’an városfala','Harangtorony','Muszlim negyed'],note:'Hosszabb vasúti utazás. A városfal bejárása az érkezéstől függ; a környékbeli esti séta önmagában is elég.',load:'könnyű',travel:true},
      {n:17,title:'A terrakotta hadsereg és a Tang-kor',route:['Terrakotta Hadsereg múzeuma','Qin Shi Huang mauzóleumpark','Nagy Vadlúd Pagoda','Datang Everbright City'],note:'A fő program a terrakotta hadsereg. A pagoda és az esti sétány csak akkor kerül sorra, ha marad energia a visszaút után.',load:'aktív'}
    ]},
    {id:'peking',name:'Peking',nights:3,period:'július 1–4.',blurb:'Császári terek, hutongok és a nagy fal.',days:[
      {n:18,title:'Érkezés a fővárosba',route:['Gyorsvasút Xi’anból Pekingbe','Qianmen kapu','Dashilar történelmi negyed'],note:'Utazási nap rövid óvárosi sétával; a belső látogatások a tényleges érkezéshez igazodnak.',load:'könnyű',travel:true},
      {n:19,title:'A császári Peking',route:['Tienanmen tér','Tiltott Város','Jingshan park','Shichahai tavak'],note:'A tér és a palota foglalásaihoz igazítjuk a sorrendet. A tavaknál már csak nyugodt séta a cél.',load:'aktív'},
      {n:20,title:'A kínai nagy fal',route:['Mutianyu falu','Mutianyu nagy fal','Hegyi kilátópontok','Olimpiai park és Madárfészek'],note:'A nagy fal az egész nap fő programja. Az olimpiai park csak választható esti megálló.',load:'aktív'}
    ]},
    {id:'chengdu',name:'Chengdu',nights:3,period:'július 4–7.',blurb:'Pandák, teaházak és Szecsuán nyugodtabb utcái.',days:[
      {n:21,title:'Repülés Szecsuánba',route:['Repülés Pekingből Chengduba','People’s Park teaház','Kuanzhai sikátorok'],note:'Könnyű érkezési nap, teázással és helyi vacsorával.',load:'könnyű',travel:true},
      {n:22,title:'Pandák és szecsuáni kultúra',route:['Chengdu Panda Base','Wenshu kolostor','Wenshufang negyed','Szecsuáni opera'],note:'A pandák a fő program; a templom és az esti előadás a foglalásokhoz és az energiaszinthez igazítható.',load:'közepes'},
      {n:23,title:'Chengdu lassabb oldala',route:['Wuhou-szentély','Jinli történelmi utca','Anshun híd'],note:'Pihenősebb nap a következő hosszú utazás előtt. Leshan csak ennek a napnak az egész napos alternatívája legyen.',load:'könnyű'}
    ]},
    {id:'furong',name:'Furong Zhen',nights:1,period:'július 7–8.',blurb:'Vízesés fölé épült óváros és tujia cölöpházak.',days:[
      {n:24,title:'Út a vízesés fölötti óvárosba',route:['Vasúti utazás Chengduból Furongzhenbe','Furong óvárosi utcái','Furong vízesése','Tujia cölöpházak esti fényei'],note:'Elsősorban utazási nap. A vasúti kapcsolatot és az esetleges átszállást külön ellenőrizzük; az óváros esti sétája a cél.',load:'közepes',travel:true}
    ]},
    {id:'chongqing',name:'Chongqing',nights:5,period:'július 8–13.',blurb:'Többszintes metropolisz, folyók, régi utcák és karsztvidék.',days:[
      {n:25,title:'Megérkezés a hegyek városába',route:['Vasúti utazás Furongzhenből Chongqingba','Jiefangbei tér','Bayi ételutca','Hongya-barlang esti fényei'],note:'Utazás után a szálláshoz közeli belvárosra és az esti fényekre koncentrálunk.',load:'könnyű',travel:true},
      {n:26,title:'Chongqing futurisztikus arca',route:['Liziba monorail állomás','Eling Park','Yangce-folyó kötélpályája','Longmenhao régi utca','Nanbin folyópart'],note:'Látványos, de sok szintkülönbséggel járó nap. Ha sok, az Eling Park vagy a kötélpálya kihagyható.',load:'aktív'},
      {n:27,title:'Lassabb nap a folyók találkozásánál',route:['Shancheng történelmi ösvény','Shibati lépcsős negyed','Chaotianmen tér','Raffles City Chongqing'],note:'Rugalmas városi nap a wulongi kirándulás előtt. A múzeumi program másik napra került, hogy ne hétfővel számoljunk.',load:'könnyű'},
      {n:28,title:'Wulong karsztvidéke',route:['Wulong','Három Természetes Híd','Hegyi panorámapontok'],note:'Egész napos kirándulás sok gyaloglással. A hosszú oda-vissza út miatt estére nincs kötött városi program.',load:'aktív'},
      {n:29,title:'Régi városrészek és helyi élet',route:['Ciqikou óváros','Baolun templom','Három-szurdok Múzeum','Nép Nagycsarnoka'],note:'A távolabbi Ciqikou után a belvárosi történelmi helyszínek jönnek. A 2028-as múzeumi nyitvatartást még ellenőrizzük; este maradjon idő a csomagolásra.',load:'közepes'}
    ]},
    {id:'szingapur',name:'Szingapúr',nights:3,period:'július 13–16.',blurb:'Trópusi kertek, több kultúra és a Marina Bay horizontja.',days:[
      {n:30,title:'Repülés Szingapúrba',route:['Repülés Chongqingból Szingapúrba','Szállás elfoglalása','Merlion Park','Marina Bay sétány'],note:'Belépés egy új országba. A vízparti séta elhagyható, ha késői a megérkezés.',load:'könnyű',travel:true},
      {n:31,title:'A kertváros futurisztikus oldala',route:['Gardens by the Bay','Cloud Forest','Supertree Grove','Marina Bay Sands környéke'],note:'A szabadtéri kerteket beltéri pihenőkkel váltogatjuk. A fizetős belépőket külön választjuk ki.',load:'közepes'},
      {n:32,title:'Szingapúr több kultúrája',route:['Chinatown','Buddha Tooth Relic templom','Little India','Kampong Gelam és Haji Lane'],note:'Színes negyedek, templomok és hawker ételek. A távolabbi városrészek között metróval számolunk.',load:'közepes'},
      {n:33,title:'Búcsú Szingapúrtól',route:['Utazás a Changi repülőtérre','Jewel Changi és Rain Vortex','Hazafelé tartó repülés'],note:'Kijelentkezés a szállásról július 16-án. A Jewel csak a járathoz igazítható, választható program; Budapest a terv szerint július 17-én következik.',load:'könnyű',travel:true}
    ]},
    {id:'hazaerkezes',name:'Hazaérkezés Budapestre',transit:true,nights:0,period:'július 17.',blurb:'Az út lezárása és hazautazás a repülőtérről.',days:[
      {n:34,title:'Újra Budapesten',route:['Érkezés Budapestre','Hazautazás és pihenés'],note:'A hazaérkezés pontos napját és időpontját a később kiválasztott repülőjegy erősíti meg.',load:'könnyű',travel:true}
    ]}
  ]
};
