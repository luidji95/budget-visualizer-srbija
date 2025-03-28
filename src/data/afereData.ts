export interface Afera {
  id: number;
  naziv: string;
  godina: number;
  opis: string;
  kategorija: string;
  izvor: string;
  ikonica?: string; // opcionalno za prikaz u UI
  detalji?: string;
}

export const afereData: Afera[] = [
  {
    id: 40,
    naziv: "Veze ministra zdravlja sa Zemunskim klanom",
    godina: 2002,
    opis: "Navodne veze ministra zdravlja Zlatibora Lončara sa vođom Zemunskog klana Dušanom Spasojevićem, uključujući optužbe o dobijanju stana kao nagrade.",
    kategorija: "Korupcija",
    izvor: "https://www.krik.rs/ministar-loncar-u-stanu-zemunskog-klana/",
    ikonica: "🏠",
    detalji:
      "Prema svedočenjima svedoka saradnika tokom suđenja za ubistvo premijera Zorana Đinđića, tadašnji lekar Zlatibor Lončar je navodno imao bliske veze sa Dušanom Spasojevićem, vođom Zemunskog klana. Tvrdilo se da je Lončar, kao lekar, ubrizgao smrtonosnu injekciju Veselinu Božoviću, rivalu klana, dok je ovaj bio hospitalizovan. Kao nagradu, Lončar je navodno dobio stan na Novom Beogradu, kupljen od supruge Sretka Kalinića, člana klana. Fotografije koje prikazuju Lončara u društvu Spasojevića dodatno su pojačale sumnje u njihove veze.",
  },
  {
    id: 26,
    naziv: "Afera 'Kofer'",
    godina: 2006,
    opis: "Slučaj pokušaja podmićivanja viceguvernera Narodne banke Srbije Dejana Simića sa 100.000 evra.",
    kategorija: "Korupcija",
    izvor:
      "https://www.danas.rs/vesti/politika/zasto-je-ivica-dacic-dobio-nadimak-koferce/",
    ikonica: "💼",
    detalji:
      "U januaru 2006. godine, u stanu viceguvernera Narodne banke Srbije Dejana Simića, policija je pronašla kofer sa 100.000 evra, namenjenih kao mito za vraćanje dozvole za rad Kreditno-eksportnoj banci. U stanu su zatečeni Simić i funkcioner Socijalističke partije Srbije (SPS) Vladan Zagrađanin, blizak saradnik Ivice Dačića. Iako je slučaj izazvao veliku pažnju javnosti, sudski epilog je bio oslobađajuća presuda za aktere afere. Ivica Dačić je zbog ove afere dobio nadimak 'Koferče'.",
  },
  {
    id: 45,
    naziv: "Propast Agrobanke",
    godina: 2012,
    opis: "Oduzimanje dozvole za rad Agrobanci zbog finansijskih malverzacija i gubitaka.",
    kategorija: "Finansije",
    izvor:
      "https://www.blic.rs/vesti/tema-dana/propala-agrobanka-drzava-ostecena-za-300-miliona-evra/7m6k5ee",
    ikonica: "🌾",
    detalji:
      "Narodna banka Srbije je 2012. godine oduzela dozvolu za rad Agrobanci zbog utvrđenih finansijskih malverzacija i gubitaka koji su premašili 300 miliona evra. Ova banka, koja je bila u većinskom državnom vlasništvu, odobravala je kredite bez adekvatnog obezbeđenja, što je dovelo do njene nelikvidnosti",
  },
  {
    id: 35,
    naziv: "Briselski sporazum",
    godina: 2013,
    opis: "Sporazum između Beograda i Prištine o normalizaciji odnosa, uključujući formiranje Zajednice srpskih opština.",
    kategorija: "Diplomatija",
    izvor: "https://www.srbija.gov.rs/cinjenice/283757",
    ikonica: "🤝",
    detalji:
      "Briselski sporazum, potpisan 19. aprila 2013. godine, predstavlja prvi sporazum o principima normalizacije odnosa između Beograda i Prištine. Ključna tačka sporazuma je formiranje Zajednice/Asocijacije opština sa srpskom većinom na Kosovu, koja bi imala određeni stepen autonomije. Sporazum takođe predviđa integraciju srpskih bezbednosnih struktura u kosovske institucije i organizaciju lokalnih izbora u skladu sa kosovskim zakonima.",
  },
  {
    id: 43,
    naziv: "Kontroverze oko poslovanja Air Serbia",
    godina: 2013,
    opis: "Partnerstvo između Vlade Srbije i Etihad Airways-a u osnivanju nacionalne avio-kompanije Air Serbia.",
    kategorija: "Privreda",
    izvor: "https://www.bbc.com/serbian/lat/srbija-50156591",
    ikonica: "✈️",
    detalji:
      "Godine 2013., Vlada Srbije je sklopila partnerstvo sa kompanijom Etihad Airways iz Ujedinjenih Arapskih Emirata radi osnivanja nove nacionalne avio-kompanije Air Serbia. Ovaj sporazum je uključivao prodaju 49% udela u kompaniji Etihadu. Kritičari su postavljali pitanja o transparentnosti ugovora, finansijskim obavezama Srbije i dugoročnoj održivosti ovog partnerstva.",
  },
  {
    id: 37,
    naziv: "Ukidanje srpskih institucija na Kosovu",
    godina: 2013,
    opis: "Integracija srpskih bezbednosnih i pravosudnih struktura u kosovske institucije prema Briselskom sporazumu.",
    kategorija: "Politika",
    izvor: "https://sr.wikipedia.org/wiki/Бриселски_споразум_(2013)",
    ikonica: "🏛️",
    detalji:
      "Kao deo implementacije Briselskog sporazuma iz 2013. godine, srpske bezbednosne i pravosudne strukture na Kosovu su integrisane u kosovske institucije. To je uključivalo raspuštanje srpskih policijskih i pravosudnih organa i njihovu integraciju u kosovske sisteme, što je izazvalo različite reakcije među srpskim stanovništvom na Kosovu.",
  },
  {
    id: 22,
    naziv: "Saobraćajna nesreća Aleksandra Mitrovića",
    godina: 2013,
    opis: "Aleksandar Mitrović, sin vlasnika TV Pink Željka Mitrovića, usmrtio je 17-godišnju Andreu Bojanić na pešačkom prelazu.",
    kategorija: "Saobraćaj",
    izvor:
      "https://www.blic.rs/vesti/hronika/sin-zeljka-mitrovica-devojku-dzipom-bmw-odbacio-20-metara/nb78q6n",
    ikonica: "🚗",
    detalji:
      "U julu 2013. godine, Aleksandar Mitrović je džipom BMW X5 udario 17-godišnju Andreu Bojanić na pešačkom prelazu u Ustaničkoj ulici u Beogradu, usmrtivši je na licu mesta. Nakon nesreće, Mitrović je napustio mesto događaja, ali se kasnije predao policiji u pratnji oca i advokata. Suđenje je trajalo godinama, a Mitrović je osuđen na 11 meseci kućnog zatvora, što je izazvalo negodovanje javnosti zbog blage kazne.",
  },
  {
    id: 27,
    naziv: "Afera 'Krađa beba'",
    godina: 2013,
    opis: "Sumnje u sistematsku krađu novorođenčadi iz porodilišta u Srbiji tokom više decenija.",
    kategorija: "Pravosuđe",
    izvor:
      "https://www.slobodnaevropa.org/a/nestale-bebe-u-srbiji-%C4%8Dinjenice-i-njihove-posledice/30466633.html",
    ikonica: "👶",
    detalji:
      "Tokom više decenija, roditelji širom Srbije iznosili su tvrdnje da su im u porodilištima saopštavali da su im novorođenčad preminula, dok su kasnije sumnjali da su njihove bebe zapravo prodate ili date na usvajanje. Ovi slučajevi su kulminirali 2013. godine, kada je Evropski sud za ljudska prava u Strazburu presudio u korist Zorice Jovanović, majke koja je tvrdila da je njena beba nestala iz porodilišta. Srbija je potom donela zakon koji omogućava roditeljima da traže informacije o sudbini svoje dece i potencijalno dobiju novčanu nadoknadu.",
  },
  {
    id: 33,
    naziv: "Podrška Gerharda Šredera Srbiji",
    godina: 2014,
    opis: "Bivši nemački kancelar Gerhard Šreder izrazio je podršku evropskim integracijama Srbije tokom posete Beogradu.",
    kategorija: "Diplomatija",
    izvor:
      "https://balkaninsight.com/2014/04/11/germany-s-schroeder-optimistic-on-serbia-eu-goal/",
    ikonica: "🇩🇪",
    detalji:
      "U aprilu 2014. godine, bivši nemački kancelar Gerhard Šreder posetio je Beograd i sastao se sa tadašnjim prvim potpredsednikom Vlade Srbije, Aleksandrom Vučićem. Tom prilikom, Šreder je izrazio optimizam u vezi sa evropskim putem Srbije, ističući da su nade Srbije za pridruživanje EU do 2020. godine realistične i u skladu sa istorijskim težnjama srpskog naroda. Takođe je pohvalio napore Srbije u poboljšanju odnosa sa susednim zemljama i sprovođenju neophodnih reformi.",
  },

  {
    id: 6,
    naziv: "Afera doktorat Siniše Malog",
    godina: 2014,
    opis: "Optužbe za plagijat doktorske disertacije ministra finansija Siniše Malog.",
    kategorija: "Obrazovanje",
    izvor: "https://www.istinomer.rs/akter/sinisa-mali/",
    ikonica: "🎓",
    detalji:
      "Siniša Mali, ministar finansija Srbije, suočio se sa optužbama za plagijat svoje doktorske disertacije odbrane 2013. godine na Univerzitetu u Beogradu. Nakon višegodišnje istrage i pritiska javnosti, Univerzitet je 2019. godine poništio njegov doktorat, potvrđujući da je rad plagijat. Uprkos tome, Mali je nastavio da obavlja visoke državne funkcije.",
  },
  {
    id: 12,
    naziv: "Projekat Beograd na vodi",
    godina: 2014,
    opis: "Pokretanje urbanističkog projekta 'Beograd na vodi' uz kontroverze oko finansiranja i uticaja na gradsku infrastrukturu.",
    kategorija: "Urbanizam",
    izvor: "https://sr.wikipedia.org/wiki/Beograd_na_vodi",
    ikonica: "🏙️",
    detalji:
      "Projekat 'Beograd na vodi' pokrenut je 2014. godine kao zajednička inicijativa Vlade Srbije i kompanije Eagle Hills iz Ujedinjenih Arapskih Emirata. Cilj projekta je revitalizacija područja uz reku Savu, uključujući izgradnju stambenih i poslovnih objekata, hotela i tržnih centara. Projekat je izazvao brojne kontroverze zbog netransparentnosti u procesu planiranja, eksproprijacije zemljišta, kao i zbog sumnji u vezi sa finansiranjem i uticajem na postojeću gradsku infrastrukturu.",
  },
  {
    id: 7,
    naziv: "Afera Megatrend",
    godina: 2014,
    opis: "Kontroverze oko validnosti diploma sa Univerziteta Megatrend, uključujući diplomu Nebojše Stefanovića.",
    kategorija: "Obrazovanje",
    izvor: "https://nova.rs/vesti/politika/nebojsa-stefanovic-ko-je/",
    ikonica: "🏫",
    detalji:
      "Godine 2014. otkriveno je da je Nebojša Stefanović diplomirao na Megatrend International Expert Consortium Limited u Londonu, firmi koja nije bila akreditovana obrazovna institucija. Kasnije mu je Fakultet za poslovne studije Univerziteta Megatrend u Beogradu priznao tu diplomu. Ove informacije dovele su u pitanje validnost njegovog obrazovanja i pokrenule širu debatu o kvalitetu i akreditaciji privatnih univerziteta u Srbiji.",
  },
  {
    id: 4,
    naziv: "Afera Helikopter",
    godina: 2015,
    opis: "Pad vojnog helikoptera Mi-17 tokom spasilačke misije, pri čemu je poginulo sedam osoba.",
    kategorija: "Vojna avijacija",
    izvor:
      "https://balkans.aljazeera.net/opinions/2015/4/8/afera-helikopter-neodgovornost-sije-zrtve",
    ikonica: "🚁",
    detalji:
      "Dana 13. marta 2015. godine, vojni helikopter Mi-17 srušio se u blizini aerodroma 'Nikola Tesla' u Beogradu tokom pokušaja da transportuje bolesnu bebu iz Novog Pazara. U nesreći je poginulo sedam osoba, uključujući posadu, medicinsko osoblje i bebu. Istraga je pokazala da je do nesreće došlo zbog loših vremenskih uslova i proceduralnih grešaka, ali niko od nadležnih nije preuzeo odgovornost, što je izazvalo ogorčenje javnosti.",
  },
  {
    id: 34,
    naziv: "Savetodavna uloga Tonija Blera u Vladi Srbije",
    godina: 2015,
    opis: "Bivši britanski premijer Toni Bler angažovan je kao savetnik Vlade Srbije, što je izazvalo kontroverze zbog njegove uloge tokom bombardovanja SRJ 1999. godine.",
    kategorija: "Politika",
    izvor:
      "https://www.theguardian.com/world/2015/feb/18/tony-blair-advising-serbian-government",
    ikonica: "🇬🇧",
    detalji:
      "U februaru 2015. godine, objavljeno je da je bivši britanski premijer Toni Bler angažovan kao savetnik Vlade Srbije, predvođene Aleksandrom Vučićem. Ova vest izazvala je kontroverze u javnosti, s obzirom na Blerovu ključnu ulogu u donošenju odluke o bombardovanju Savezne Republike Jugoslavije 1999. godine tokom sukoba na Kosovu. Angažovanje Blera kao savetnika tumačeno je kao pokušaj poboljšanja međunarodnog imidža Srbije i unapređenja odnosa sa zapadnim zemljama.",
  },
  {
    id: 16,
    naziv: "Afera '24 stana u Bugarskoj'",
    godina: 2015,
    opis: "Otkrivanje da je Siniša Mali, tadašnji gradonačelnik Beograda, bio vlasnik 24 luksuzna apartmana u Bugarskoj.",
    kategorija: "Korupcija",
    izvor:
      "https://www.krik.rs/sinisa-mali-tajno-kupio-24-stana-na-bugarskom-primorju/",
    ikonica: "🏘️",
    detalji:
      "Istraživanje iz 2015. godine otkrilo je da je Siniša Mali, tadašnji gradonačelnik Beograda, preko ofšor kompanija kupio 24 luksuzna apartmana u bugarskom letovalištu 'Sveti Nikola'. Vrednost ovih nekretnina procenjena je na oko pet miliona evra. Ova otkrića su pokrenula sumnje u vezi s poreklom novca i potencijalnim pranjem novca, ali su nadležni organi odbacili optužbe, navodeći da nema dokaza o nezakonitim radnjama.",
  },
  {
    id: 38,
    naziv: "Dodeljivanje pozivnog broja Kosovu",
    godina: 2016,
    opis: "Kosovo je dobilo međunarodni pozivni broj +383 uz saglasnost Srbije.",
    kategorija: "Telekomunikacije",
    izvor: "https://sr.wikipedia.org/wiki/Бриселски_споразум_(2013)",
    ikonica: "📞",
    detalji:
      "U okviru tehničkog dijaloga između Beograda i Prištine, dogovoreno je da Kosovo dobije sopstveni međunarodni pozivni broj +383. Ova odluka je sprovedena 2016. godine, čime je Kosovo steklo nezavisnost u telekomunikacionom smislu, dok je Srbija zauzvrat dobila određene garancije vezane za telekomunikacione operatere na Kosovu.",
  },
  {
    id: 3,
    naziv: "Afera Savamala",
    godina: 2016,
    opis: "Nelegalno rušenje objekata u beogradskoj četvrti Savamala od strane nepoznatih osoba pod fantomkama.",
    kategorija: "Urbanizam",
    izvor:
      "https://n1info.rs/vesti/savamala-fantomi-koji-su-srusili-pravnu-drzavu/",
    ikonica: "🏗️",
    detalji:
      "U noći između 24. i 25. aprila 2016. godine, grupa nepoznatih osoba pod fantomkama srušila je više objekata u Hercegovačkoj ulici u beogradskoj četvrti Savamala. Tokom rušenja, građanima je onemogućen prolaz, a pojedinci su vezivani i maltretirani. Policija nije reagovala na pozive građana te noći. Ovaj događaj izazvao je brojne proteste i postao simbol bahatosti vlasti i urušavanja pravne države.",
  },
  {
    id: 17,
    naziv: "Nelegalna gradnja na Pančićevom vrhu",
    godina: 2017,
    opis: "Izgradnja nelegalnog objekta na Pančićevom vrhu na Kopaoniku u zaštićenoj zoni Nacionalnog parka.",
    kategorija: "Urbanizam",
    izvor: "https://birn.rs/trgovci-otpadom-i-kafana-na-pancicevom-vrhu/",
    ikonica: "🏔️",
    detalji:
      "Godine 2017., na Pančićevom vrhu na Kopaoniku, u zaštićenoj zoni Nacionalnog parka, izgrađen je nelegalni objekat površine preko 1.000 kvadratnih metara. Investitorka Snežana Mitković iz Smedereva dobila je dozvolu za privremeni objekat od 150 kvadratnih metara, ali je izgradila znatno veći objekat. Uprkos rešenju o rušenju iz 2018. godine, objekat nije uklonjen, što je izazvalo negodovanje javnosti i postavilo pitanja o sprovođenju zakona.",
  },
  {
    id: 39,
    naziv: "Kontrola nad jezerom Gazivode",
    godina: 2018,
    opis: "Pitanje upravljanja i kontrole nad hidroelektranom i jezerom Gazivode na severu Kosova.",
    kategorija: "Energetika",
    izvor: "https://www.slobodnaevropa.org/a/29368899.html",
    ikonica: "💧",
    detalji:
      "Jezero Gazivode i prateća hidroelektrana nalaze se na severu Kosova i od strateškog su značaja za snabdevanje vodom i električnom energijom. Kontrola nad ovim resursima bila je predmet sporenja između Beograda i Prištine, posebno u kontekstu pregovora o normalizaciji odnosa. U septembru 2018. godine, kosovske specijalne jedinice ROSU preuzele su kontrolu nad ovim područjem, što je izazvalo dodatne tenzije između dve strane.",
  },
  {
    id: 8,
    naziv: "Ubistvo Olivera Ivanovića",
    godina: 2018,
    opis: "Atentat na kosovskog političara Olivera Ivanovića ispred sedišta njegove stranke u Severnoj Mitrovici.",
    kategorija: "Politika",
    izvor:
      "https://www.slobodnaevropa.org/a/oliver-ivanovic-sest-godina-od-ubistva/32776440.html",
    ikonica: "⚖️",
    detalji:
      "Oliver Ivanović, istaknuti srpski političar sa Kosova, ubijen je 16. januara 2018. godine sa šest hitaca u leđa ispred prostorija svoje stranke u Severnoj Mitrovici. Ubistvo je izazvalo šok i osudu javnosti, ali uprkos brojnim istragama, nalogodavci i izvršioci još uvek nisu identifikovani, što je dovelo do brojnih spekulacija i teorija zavere.",
  },
  {
    id: 10,
    naziv: "Privatizacija PKB-a",
    godina: 2018,
    opis: "Prodaja Poljoprivredne korporacije Beograd (PKB) kompaniji Al Dahra iz Ujedinjenih Arapskih Emirata.",
    kategorija: "Privatizacija",
    izvor:
      "https://www.insajder.net/arhiva/tema/prodaja-pkb-drzava-al-dahri-naplacivala-hektar-4-700-evra-a-sada-zemljiste-prodaje-po-osam-puta-vecoj-ceni-video",
    ikonica: "🌾",
    detalji:
      "PKB, nekada jedan od najvećih poljoprivrednih kombinata u Evropi, privatizovan je 2018. godine prodajom imovine kompaniji Al Dahra iz Ujedinjenih Arapskih Emirata. Al Dahra je za 17.000 hektara poljoprivrednog zemljišta platila 80 miliona evra, odnosno oko 4.700 evra po hektaru. Ova prodaja izazvala je kontroverze u javnosti zbog niske cene po kojoj je zemljište prodato, kao i zbog zabrinutosti za budućnost poljoprivredne proizvodnje u Srbiji.",
  },
  {
    id: 11,
    naziv: "Privatizacija RTB Bor",
    godina: 2018,
    opis: "Prodaja Rudarsko-topioničarskog basena Bor kineskoj kompaniji Zijin Mining Group.",
    kategorija: "Privatizacija",
    izvor:
      "https://www.insajder.net/arhiva/tema/privatizacija-rtb-a-bor-kao-amnestija",
    ikonica: "⛏️",
    detalji:
      "RTB Bor, jedini rudnik bakra u Srbiji, prodat je 2018. godine kineskoj kompaniji Zijin Mining Group. Pre prodaje, RTB Bor je bio poznat po ogromnim dugovima, od kojih je čak 70% bilo prema državi. Tokom godina, država je odobravala stotine miliona novih kredita bez jasnih planova za njihovo vraćanje. Privatizacija je sprovedena bez detaljnog objašnjenja o nastanku dugova i bez transparentnosti u vezi sa uslovima prodaje.",
  },
  {
    id: 19,
    naziv: "Slučaj 'Jutka'",
    godina: 2018,
    opis: "Optužbe protiv Milutina Jeličića Jutke, predsednika opštine Brus, za seksualno uznemiravanje više žena.",
    kategorija: "Pravosuđe",
    izvor: "https://www.istinomer.rs/akter/milutin-jelicic/",
    ikonica: "⚖️",
    detalji:
      "Milutin Jeličić Jutka, predsednik opštine Brus, suočio se 2018. godine s optužbama za seksualno uznemiravanje više žena, uključujući svoju sekretaricu Mariju Lukić. Uprkos brojnim prijavama, procesuiranje slučaja je bilo sporo, što je izazvalo proteste i osude javnosti. Jeličić je podneo ostavku 2019. godine, a 2020. je osuđen na tri meseca zatvora za nedozvoljene polne radnje.",
  },
  {
    id: 21,
    naziv: "Paljenje kuće novinara Milana Jovanovića",
    godina: 2018,
    opis: "U decembru 2018. godine, kuća novinara Milana Jovanovića zapaljena je nakon što je bačen 'Molotovljev koktel'.",
    kategorija: "Napad na novinare",
    izvor:
      "https://www.glasamerike.net/a/balkan-srbija-sloboda-medija-novinari-mediji-milan-jovanovic-dragoljub-simonovic-grocka-paljenje-kuce-apleacioni-sud/7586476.html",
    ikonica: "🔥",
    detalji:
      "U noći između 11. i 12. decembra 2018. godine, nepoznati počinioci su bacili 'Molotovljev koktel' u garažu kuće novinara Milana Jovanovića u Vrčinu, izazvavši požar koji je uništio kuću. Jovanović i njegova supruga su uspeli da se spasu, ali je incident izazvao osudu javnosti i međunarodnih organizacija. Bivši predsednik opštine Grocka, Dragoljub Simonović, osuđen je na četiri godine zatvora zbog podstrekavanja na paljenje kuće.",
  },
  {
    id: 13,
    naziv: "Zatvaranje Glavne železničke stanice u Beogradu",
    godina: 2018,
    opis: "Zatvaranje Glavne železničke stanice u Beogradu nakon 134 godine rada i premeštanje saobraćaja na stanicu Prokop.",
    kategorija: "Saobraćaj",
    izvor:
      "https://www.ekspres.net/drustvo/posle-134-godine-od-1-jula-zatvara-se-glavna-zeleznicka-stanica-u-beogradu",
    ikonica: "🚉",
    detalji:
      "Glavna železnička stanica u Beogradu zatvorena je 1. jula 2018. godine nakon 134 godine rada. Saobraćaj je preusmeren na stanicu Beograd Centar, poznatu kao Prokop. Ova odluka izazvala je nezadovoljstvo među građanima zbog nepristupačnosti nove stanice, nedostatka adekvatne infrastrukture i sentimentalne vrednosti koju je stara stanica imala za Beograđane.",
  },
  {
    id: 24,
    naziv: "Projekat 'Gondola' na Kalemegdanu",
    godina: 2019,
    opis: "Planiranje izgradnje gondole koja bi povezivala Kalemegdan i Ušće, uprkos protivljenju stručne javnosti.",
    kategorija: "Urbanizam",
    izvor: "https://www.bbc.com/serbian/lat/srbija-47868380",
    ikonica: "🚡",
    detalji:
      "U 2019. godini, gradske vlasti Beograda najavile su planove za izgradnju gondole koja bi povezivala Kalemegdan i Ušće preko reke Save. Projekat je naišao na oštro protivljenje stručne javnosti, uključujući arhitekte, urbaniste i istoričare umetnosti, koji su upozoravali na potencijalno narušavanje kulturno-istorijskog značaja Kalemegdana i vizuelnog identiteta grada. Uprkos protestima, pripremni radovi su započeti, ali je projekat kasnije obustavljen.",
  },
  {
    id: 14,
    naziv: "Rekonstrukcija Trga Republike",
    godina: 2019,
    opis: "Kontroverzna rekonstrukcija Trga Republike u Beogradu, uključujući zamenu kolovoznih kocki i višestruke popravke.",
    kategorija: "Urbanizam",
    izvor: "https://n1info.rs/vesti/vesic-vucic-trg-republike-granit/",
    ikonica: "🛠️",
    detalji:
      "Rekonstrukcija Trga Republike u Beogradu započeta je 2018. godine i završena 2019. godine. Projekat je obuhvatio zamenu kolovoznih kocki, što je izazvalo brojne kritike zbog lošeg kvaliteta radova, višestrukih popravki i visokih troškova. Tadašnji zamenik gradonačelnika Goran Vesić izjavio je da se 'Trg rekonstruiše jednom u nekoliko vekova', što je dodatno izazvalo negodovanje javnosti zbog učestalih problema nakon rekonstrukcije.",
  },
  {
    id: 1,
    naziv: "Afera Krušik",
    godina: 2019,
    opis: "Otkrivene nepravilnosti u poslovanju fabrike oružja 'Krušik' i hapšenje uzbunjivača Aleksandra Obradovića.",
    kategorija: "Korupcija",
    izvor:
      "https://www.slobodnaevropa.org/a/afera-krušik-godinu-i-po-dana-bez-epiloga/31157691.html",
    ikonica: "🏭",
    detalji:
      "Aleksandar Obradović, zaposleni u fabrici 'Krušik' u Valjevu, otkrio je dokumente koji ukazuju na korupciju i malverzacije u vezi sa prodajom oružja. Nakon što je informacije podelio sa medijima, uhapšen je u septembru 2019. godine pod optužbom za odavanje poslovne tajne. Njegovo hapšenje izazvalo je proteste i osude javnosti, dok su nadležni organi nastavili istragu o poslovanju fabrike.",
  },
  {
    id: 2,
    naziv: "Afera Jovanjica",
    godina: 2019,
    opis: "Otkrivena najveća ilegalna plantaža marihuane u Evropi na imanju 'Jovanjica' u vlasništvu Predraga Koluvije.",
    kategorija: "Narkotici",
    izvor:
      "https://www.krik.rs/pocelo-objedinjeno-sudjenje-u-slucaju-jovanjica/",
    ikonica: "🌿",
    detalji:
      "U novembru 2019. godine, policija je na imanju 'Jovanjica' u blizini Stare Pazove otkrila ilegalnu plantažu marihuane sa preko 1,6 tona ove droge. Vlasnik imanja, Predrag Koluvija, uhapšen je i optužen za organizovanje kriminalne grupe koja se bavila proizvodnjom i distribucijom narkotika. Afera je izazvala veliku pažnju javnosti zbog navodnih veza Koluvije sa pojedinim državnim funkcionerima i pripadnicima bezbednosnih službi.",
  },
  {
    id: 42,
    naziv: "Izveštaji REM-a o medijskom izveštavanju",
    godina: 2019,
    opis: "Kontroverze oko izveštaja Regulatornog tela za elektronske medije (REM) o zastupljenosti političkih aktera u medijima.",
    kategorija: "Mediji",
    izvor:
      "https://www.cenzolovka.rs/pritisci-i-napadi/izvestaj-rem-a-potvrdio-neravnopravnu-zastupljenost-u-medijima/",
    ikonica: "📺",
    detalji:
      "REM je 2019. godine objavio izveštaj o zastupljenosti političkih aktera u medijima tokom predizborne kampanje. Izveštaj je pokazao značajnu neravnopravnost u medijskom predstavljanju, pri čemu su vladajuće stranke imale znatno više vremena u etru u odnosu na opozicione. Ovi nalazi izazvali su kritike o nepristrasnosti i efikasnosti REM-a kao regulatornog tela.",
  },
  {
    id: 5,
    naziv: "Afera Naplatna rampa Doljevac",
    godina: 2019,
    opis: "Saobraćajna nesreća na naplatnoj rampi Doljevac u kojoj je poginula Stanika Gligorijević, uz kontroverze oko identiteta vozača.",
    kategorija: "Saobraćaj",
    izvor:
      "https://www.juznevesti.com/hronika/pet-godina-od-nesrece-u-doljevcu-i-pet-godina-skrivanja-celog-snimka/",
    ikonica: "🛣️",
    detalji:
      "Dana 31. januara 2019. godine, na naplatnoj rampi Doljevac dogodila se saobraćajna nesreća u kojoj je vozilo 'Koridora Srbije' udarilo u automobil u kojem je bila Stanika Gligorijević, koja je tom prilikom poginula. U vozilu 'Koridora Srbije' nalazio se tadašnji direktor Zoran Babić. Kontroverze su nastale oko identiteta vozača i dostupnosti snimaka nesreće, što je izazvalo sumnje u pokušaj zataškavanja odgovornosti.",
  },
  {
    id: 9,
    naziv: "Afera ruski špijun",
    godina: 2019,
    opis: "Otkrivanje snimka na kojem ruski obaveštajac predaje novac srpskom zvaničniku.",
    kategorija: "Bezbednost",
    izvor:
      "https://www.blic.rs/vesti/politika/afera-ruski-spijun-trese-srbiju-bilo-je-50-pokusaja-da-snimak-ugleda-svetlo-dana-ali/d3kq2nd",
    ikonica: "🕵️",
    detalji:
      "U novembru 2019. godine, u javnosti se pojavio snimak na kojem ruski obaveštajac predaje novac srpskom zvaničniku. Ovaj događaj izazvao je buru reakcija i postavio pitanja o prisustvu stranih obaveštajnih službi u Srbiji, kao i o bezbednosnoj situaciji u zemlji. Vlada Srbije je pokrenula istragu kako bi rasvetlila okolnosti ovog incidenta.",
  },
  {
    id: 31,
    naziv: "Donacija Srbije Svetskoj zdravstvenoj organizaciji",
    godina: 2020,
    opis: "Vlada Srbije donirala je dva miliona evra Svetskoj zdravstvenoj organizaciji (SZO) za borbu protiv pandemije COVID-19.",
    kategorija: "Donacije",
    izvor:
      "https://www.blic.rs/vesti/drustvo/srbija-donirala-dva-miliona-evra-direktor-szo-se-na-tviteru-zahvalio-za-milion/edetdnm",
    ikonica: "💰",
    detalji:
      "U maju 2020. godine, Vlada Srbije je donirala ukupno dva miliona evra Svetskoj zdravstvenoj organizaciji (SZO) kao podršku u borbi protiv pandemije COVID-19. Generalni direktor SZO, Tedros Adhanom Ghebreyesus, zahvalio se Vladi Srbije na donaciji putem Tvitera, ističući solidarnost Srbije u globalnoj borbi protiv virusa.",
  },
  {
    id: 44,
    naziv: "Prodaja Komercijalne banke",
    godina: 2020,
    opis: "Vlada Srbije prodala je svoj udeo u Komercijalnoj banci slovenačkoj NLB banci.",
    kategorija: "Finansije",
    izvor:
      "https://www.slobodnaevropa.org/a/komercijalna-banka-nlb-prodaja/30442633.html",
    ikonica: "🏦",
    detalji:
      "U februaru 2020. godine, Vlada Srbije je prodala svoj udeo od 83,23% u Komercijalnoj banci slovenačkoj NLB banci za 387 miliona evra. Ova odluka izazvala je različite reakcije u javnosti, s obzirom na značaj Komercijalne banke kao jedne od najvećih domaćih finansijskih institucija i pitanja o uticaju ove prodaje na domaći bankarski sektor.",
  },
  {
    id: 41,
    naziv: "Upad huligana na zgrade tokom pandemije",
    godina: 2020,
    opis: "Grupa maskiranih osoba palila je baklje i uzvikivala parole sa krovova zgrada u Beogradu tokom policijskog časa.",
    kategorija: "Nasilje",
    izvor: "https://www.bbc.com/serbian/lat/srbija-52621684",
    ikonica: "🔥",
    detalji:
      "Tokom aprila 2020. godine, za vreme trajanja policijskog časa uvedenog zbog pandemije COVID-19, grupa maskiranih osoba penjala se na krovove zgrada u Beogradu, palila baklje, puštala glasnu muziku i uzvikivala parole podrške vlastima. Ovi incidenti izazvali su zabrinutost među stanovnicima i postavili pitanja o umešanosti određenih političkih struktura u organizaciju ovih događaja.",
  },
  {
    id: 32,
    naziv: "Milionski poslovi porodice Kisić sa javnim preduzećima",
    godina: 2020,
    opis: "Firme povezane sa porodicom Kisić sklopile su ugovore vredne milione evra sa javnim preduzećima u Srbiji.",
    kategorija: "Korupcija",
    izvor: "https://birn.rs/poslovi-porodice-kisic/",
    ikonica: "🏢",
    detalji:
      "Istraživanje Balkanske istraživačke mreže (BIRN) iz 2020. godine otkrilo je da su firme povezane sa Bojanom Kisićem, bratom tadašnje ministarke Darije Kisić Tepavčević, sklopile najmanje 27 ugovora sa javnim institucijama u Srbiji od 2013. godine, ukupne vrednosti oko 26,8 miliona evra. Ovi poslovi su izazvali sumnje u potencijalni sukob interesa i korupciju, s obzirom na porodične veze između Bojana Kisića i visokih državnih funkcionera.",
  },

  {
    id: 18,
    naziv: "Dezinformacije tokom pandemije COVID-19",
    godina: 2020,
    opis: "Širenje lažnih informacija i teorija zavere u vezi s pandemijom COVID-19.",
    kategorija: "Zdravstvo",
    izvor:
      "https://balkans.aljazeera.net/opinions/2020/4/6/teorije-zavjere-ko-nam-je-smjestio-covid-19",
    ikonica: "🦠",
    detalji:
      "Tokom pandemije COVID-19, 2020. godine, došlo je do masovnog širenja dezinformacija i teorija zavere, uključujući tvrdnje da je virus veštački stvoren, da su mere zaštite nepotrebne ili štetne, te da vakcine sadrže mikročipove. Ove dezinformacije su umanjile poverenje javnosti u zdravstvene institucije i otežale borbu protiv pandemije.",
  },
  {
    id: 25,
    naziv: "Projekat 'Beogradski metro'",
    godina: 2021,
    opis: "Kontroverze oko planiranja i izgradnje beogradskog metroa, uključujući izbor trase i finansiranje.",
    kategorija: "Infrastruktura",
    izvor:
      "https://rs.n1info.com/vesti/a640888-strucnjaci-o-beogradskom-metrou/",
    ikonica: "🚇",
    detalji:
      "Planovi za izgradnju beogradskog metroa postoje decenijama, ali su konkretni koraci preduzeti tek 2021. godine. Projekat je izazvao kontroverze zbog izbora trase, koja prema mišljenju stručnjaka ne povezuje ključne tačke u gradu, kao i zbog netransparentnosti u vezi sa finansiranjem i saradnjom sa stranim partnerima. Građani i stručna javnost izrazili su zabrinutost da projekat neće rešiti saobraćajne probleme Beograda i da će predstavljati veliki finansijski teret za grad.",
  },
  {
    id: 15,
    naziv: "Afera 'Značke BIA'",
    godina: 2022,
    opis: "Optužbe protiv pripadnika BIA za zloupotrebu službenog položaja i saradnju s kriminalnim strukturama.",
    kategorija: "Bezbednost",
    izvor:
      "https://www.kurir.rs/crna-hronika/3984865/pripadnica-bia-i-njen-muz-nisu-jedine-prljave-znacke-cosovic-kada-klupko-krene-da-se-odmotava-odmotace-se-do-kraja-video",
    ikonica: "🕵️",
    detalji:
      "U 2022. godini, nekoliko pripadnika Bezbednosno-informativne agencije (BIA) našlo se pod istragom zbog sumnje na zloupotrebu službenog položaja i saradnju s kriminalnim grupama. Ovi incidenti su poljuljali poverenje javnosti u bezbednosne institucije i pokrenuli pitanja o integritetu službenika koji bi trebalo da garantuju sigurnost države.",
  },
  {
    id: 36,
    naziv: "Ohridski sporazum",
    godina: 2023,
    opis: "Sporazum o putu ka normalizaciji odnosa između Kosova i Srbije, postignut uz posredovanje Evropske unije.",
    kategorija: "Diplomatija",
    izvor:
      "https://sr.wikipedia.org/wiki/Нацрт_споразума_о_путу_ка_нормализацији_односа_Косова_и_Србије",
    ikonica: "🕊️",
    detalji:
      "Ohridski sporazum, poznat i kao Sporazum o putu ka normalizaciji odnosa između Kosova i Srbije, usmeno su prihvatili premijer Kosova Aljbin Kurti i predsednik Srbije Aleksandar Vučić 27. februara 2023. godine, dok je plan za njegovu implementaciju usaglašen 18. marta 2023. u Ohridu. Sporazum predviđa međusobno poštovanje teritorijalnog integriteta, rešavanje sporova mirnim putem i uzdržavanje od blokiranja članstva u međunarodnim organizacijama.",
  },
  {
    id: 46,
    naziv: "Pad nadstrešnice na železničkoj stanici u Novom Sadu",
    godina: 2024,
    opis: "Urušavanje nadstrešnice na glavnoj železničkoj stanici u Novom Sadu dovelo je do smrti 15 osoba i povreda nekoliko drugih.",
    kategorija: "Infrastrukturni incident",
    izvor:
      "https://sh.wikipedia.org/wiki/Uru%C5%A1avanje_nadstre%C5%A1nice_%C5%BDelezni%C4%8Dke_stanice_Novi_Sad",
    ikonica: "🏗️",
    detalji:
      "Dana 1. novembra 2024. godine, nadstrešnica iznad glavnog ulaza železničke stanice u Novom Sadu se urušila, uzrokujući smrt 15 osoba, uključujući i jedno šestogodišnje dete. Tri osobe su povređene, od kojih je jedna preminula 17 dana nakon tragedije, a druga 21. marta 2025. godine, čime je ukupan broj žrtava porastao na 16. Ova nesreća izazvala je masovne proteste širom Srbije, usmerene protiv korupcije i lošeg upravljanja infrastrukturnim projektima. Više javno tužilaštvo u Beogradu podiglo je optužnice protiv nekoliko osoba zbog propusta koji su doveli do ove tragedije.",
  },
  {
    id: 47,
    naziv: "Kontroverze oko upotrebe 'zvučnog topa' tokom protesta",
    godina: 2025,
    opis: "Navodi o upotrebi 'zvučnog topa' od strane policije tokom protesta u Beogradu izazvali su kontroverze i zahteve za istragom.",
    kategorija: "Policijska taktika",
    izvor:
      "https://www.slobodnaevropa.org/a/zvucni-top-srbija-policija-protest-studenti/33353133.html",
    ikonica: "🔊",
    detalji:
      "Tokom protesta u Beogradu 15. marta 2025. godine, pojavili su se navodi da je policija upotrebila 'zvučni top' - uređaj koji emituje intenzivne zvučne talase za razbijanje okupljanja. Ovi navodi su izazvali zabrinutost i zahteve za istragom. Prvo osnovno javno tužilaštvo u Beogradu saopštilo je da nijedna državna institucija nije upotrebila 'zvučni top' tog dana. Predsednik Srbije Aleksandar Vučić izjavio je da Srbija nema šta da krije i da je spremna da omogući proveru ovih navoda od strane međunarodnih tela. Kontroverze oko ovog incidenta dodatno su pojačale tenzije između vlasti i građana, koji zahtevaju transparentnost i odgovornost u postupanju policije tokom javnih okupljanja.",
  },
];
