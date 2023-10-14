/* Bu js kodlarında Ternary-if veya switch-case kullanılmamasının sebebi if-else yapısını daha çok seviyor olmam ve daha okunaklı olduğunu düşünmem.
*/
// HTML elementlerimizi seçtiğimiz kısım
const yazilanYazi = document.querySelector('#gelen-yazilar');
yazilanYazi.addEventListener('submit', yaziFonksiyonu);
const yaziInput = document.querySelector('#yazi-input');
const alfredCevaplari = document.querySelector('#alfred-cevaplar');
const mikrofonForm = document.querySelector('#mikrofon-form');
mikrofonForm.addEventListener('click',mikrofonTiklandi);

//mikrofon butonu etkileşimi
function mikrofonTiklandi(e){
    e.preventDefault();
    alfredCevaplari.textContent = "SENİ DİNLİYORUM"
    responsiveVoice.speak(alfredCevaplari.textContent, 'Turkish Male', {rate: 1.3})
}

//Müzikler 
function sarkilar (){
    const sarkilar = ["AC/DC BACK İN BLACK","AC/DC HIGHWAY TO HELL","AC/DC TNT","AC/DC THUNDERSTRUCK","THE ANİMALS HOUSE OF THE RİSİNG SUN",
    "THE WHİTE BUFFALO HOUSE OF THE RİSİNG SUN","BLUE BİRD NARUTO SHİPPUDEN OPENİNG","GREEN DAY NUCKLEAR FAMİLY","GREEN DAY AMERİCAN İDİOT",
    "THREE DAYS GRACE THE GOOD LİFE","THREE DAYS GRACE PAİN","LİNKİN PARK NUMB","LİNKİN PARK İN THE END","SKİLLET MONSTER","SKİLLET HERO",
    "AVENGED SEVENFOLD NİGHTMARE","AVENGED SEVENFOLD SO FAR AWAY","BLACK SABBATH İRON MAN","NİRVANA SMELLS LİKE TEEN SPİRİT",
    "RED HOT CHİLİ PAPPERS CALİFORNİCATİON","NİRVANA SOMETHİNG İN THE WAY","CHAOS CHAOS DO YOU FEEL İT"];
    let rastgeleSarki = sarkilar[Math.floor(Math.random()*sarkilar.length)];
    yaziInput.value = rastgeleSarki;
     if(yaziInput.value === "AC/DC BACK İN BLACK"){
        window.open("https://www.youtube.com/watch?v=pAgnJDJN4VA", "_blank");
     }else if(yaziInput.value === "AC/DC HIGHWAY TO HELL"){
        window.open("https://www.youtube.com/watch?v=gEPmA3USJdI", "_blank");
     }else if (yaziInput.value === "AC/DC TNT"){
        window.open("https://www.youtube.com/watch?v=NhsK5WExrnE", "_blank");
     }else if (yaziInput.value === "AC/DC THUNDERSTRUCK"){
        window.open("https://www.youtube.com/watch?v=v2AC41dglnM", "_blank");
     }else if (yaziInput.value === "THE ANİMALS HOUSE OF THE RİSİNG SUN"){
        window.open("https://www.youtube.com/watch?v=4-43lLKaqBQ", "_blank");
     }else if (yaziInput.value === "THE WHİTE BUFFALO HOUSE OF THE RİSİNG SUN"){
        window.open("https://www.youtube.com/watch?v=MOqm0qGJhpw", "_blank");
     }else if(yaziInput.value === "BLUE BİRD NARUTO SHİPPUDEN OPENİNG"){
        window.open("https://www.youtube.com/watch?v=2upuBiEiXDk", "_blank");
     }else if (yaziInput.value === "GREEN DAY NUCKLEAR FAMİLY"){
        window.open("https://www.youtube.com/watch?v=jHmSyGjf6BA", "_blank");
     }else if (yaziInput.value === "GREEN DAY AMERİCAN İDİOT"){
        window.open("https://www.youtube.com/watch?v=Ee_uujKuJMI", "_blank");
     }else if (yaziInput.value === "THREE DAYS GRACE THE GOOD LİFE"){
        window.open("https://www.youtube.com/watch?v=tzRk5EIHAoI", "_blank");
     }else if (yaziInput.value === "THREE DAYS GRACE PAİN"){
        window.open("https://www.youtube.com/watch?v=Ud4HuAzHEUc", "_blank");
     }else if (yaziInput.value === "LİNKİN PARK NUMB"){
        window.open("https://www.youtube.com/watch?v=kXYiU_JCYtU", "_blank");
     }else if (yaziInput.value === "LİNKİN PARK İN THE END"){
        window.open("https://www.youtube.com/watch?v=eVTXPUF4Oz4", "_blank");
     }else if (yaziInput.value === "SKİLLET MONSTER"){
        window.open("https://www.youtube.com/watch?v=1mjlM_RnsVE", "_blank");
     }else if (yaziInput.value === "SKİLLET HERO"){
        window.open("https://www.youtube.com/watch?v=uGcsIdGOuZY", "_blank");
     }else if (yaziInput.value === "AVENGED SEVENFOLD NİGHTMARE"){
        window.open("https://www.youtube.com/watch?v=94bGzWyHbu0", "_blank");
     }else if (yaziInput.value === "AVENGED SEVENFOLD SO FAR AWAY"){
        window.open("https://www.youtube.com/watch?v=A7ry4cx6HfY", "_blank");
     }else if (yaziInput.value === "BLACK SABBATH İRON MAN"){
        window.open("https://www.youtube.com/watch?v=8aQRq9hhekA", "_blank");
     }else if (yaziInput.value === "NİRVANA SMELLS LİKE TEEN SPİRİT"){
        window.open("https://www.youtube.com/watch?v=hTWKbfoikeg", "_blank");
     }else if (yaziInput.value === "RED HOT CHİLİ PAPPERS CALİFORNİCATİON"){
        window.open("https://www.youtube.com/watch?v=YlUKcNNmywk", "_blank");
     }else if (yaziInput.value === "NİRVANA SOMETHİNG İN THE WAY"){
        window.open("https://www.youtube.com/watch?v=4VxdufqB9zg", "_blank");
     }else if (yaziInput.value === "CHAOS CHAOS DO YOU FEEL İT"){
        window.open("https://www.youtube.com/watch?v=pTA0DSfrGZ0", "_blank");
     }
}

//Komikli şakalar
function sakalarKomik (){
    const sakalar = ["OSMANLIDA İNSANLAR NEDEN BİRBİRİNE BORÇ TAKMAZMIŞ? 'ÇÜNKÜ SİKKE SİKKE ÖDERLERMİŞ' "];
    let rastgeleSaka = sakalar[Math.floor(Math.random()*sakalar.length)];
    yaziInput.value = rastgeleSaka;
}

//Fırkalar
function fikralar (){
    const fikralar = ["LAZ HEP DİYORMUŞ ÇEVRESİNE - BEN BAK HASTAYIM BEN HASTAYIM BEN HASTAYIM DİYORMUŞ - KİMSE DİNLEMİYORMUŞ KENDİSİNİ - BEN HASTAYIM BANA BAKIN ÖLÜCEM FALAN - SONRA DEMİŞ BEN ÖLÜRSEM MEZAR TAŞIMA YAZIN DEMİŞ - MEZAR TAŞINA YAZMIŞLAR - DEMİŞ BEN HASTAYIM DEDİM DEDİM BANA İNANMADINIZ - BAK NE OLDU ŞİMDİ",
    "ADAM PAPAĞANINI GÜMRÜKTEN KOLAY GEÇİREBİLMEK İÇİN BİR KUTUYA KOYMUŞ VE ÜSTÜNE DE KIRILACAK EŞYA YAZMIŞ. GÜMRÜK MEMURU YAZIYI OKUYUNCA KUTUYU ŞÖYLE BİR SİLKELEMEYE BAŞLAMIŞ. AYNI ANDA İÇERİDEN PAPAĞANIN BAĞIRDIĞI DUYULMUŞ. PAPAĞAN : ŞANGUR ŞUNGUR ŞANGUR ŞUNGUR."];
    let rastgeleFikra = fikralar[Math.floor(Math.random()*fikralar.length)];
    yaziInput.value = rastgeleFikra;
}

//Filmler
function filmOnerileri (){
    const filmler = ["INTERSTELLAR"," FIGHT CLUB","THE DARK KNIGHT","THE GODFATHER","THE LORD OF THE RİNGS SERIES",
    "STAR WARS 1-6","PULP FİCTİON","INCEPTION","THE DARK KNIGHT RISES","THE GREEN MILE","GLADIATOR","BACK TO THE FUTURE",
    "TERMINATOR","THE MATRİX","SE7EN","RAIDERS OF THE LOST ARK","BRAVEHEART","V FOR VENDETTA","MODERN TIMES","THE PIANIST",
    "ALIEN","DIE HARD","BATMAN BEGINS","HARRY POTTER SERIES","PIRATES IF THE CARIBBEAN SERIES","SHUTTER ISLAND","THE BOURNE ULTIMATUM",
    "THE AVENGERS","IP MAN","3 IDIOTS","THE SHINING","THE SIXTH SENSE","EDWARD SCISSORHANDS","THE TRUMAN SHOW","KILL BILL","ROCKY",
    "THE HOBBİT SERIES","BLADE RUNNER","THE MAN FROM EARTH","DAĞ SERİSİ","INSIDIOUS SERIES"];
    let oneriFilm = filmler[Math.floor(Math.random()*filmler.length)];
    yaziInput.value = oneriFilm;
}

//Oyunlar
function oyunOnerileri (){
    const oyunlar = ["DARKSOULS 3","V RİSİNG","THE WİTCHER 3","ELDEN RİNG","GOD OF WAR","DONT STARVE","MORTAL KOMBAT","CUPHEAD",
    "STAR WARS JEDİ: FALLEN ORDER","AGE OF EMPİRES SERIES","ALAN WAKE","ALIEN: ISOLATION","BATMAN ARKHAM SERIES","BIOSHOCK SERIES",
    "BRÜTAL LEGEND","COUNTER STRİKE","BROTHERS - A TALE OF TWO SONS","DARKSIDERS SERIES","DIRT SERIES","FALLOUT: NEW VEGAS",
    "GARRY'S MOD","GTA SERIES","HALF-LIFE SERIES","HITMAN SERIES","LEFT 4 DEAD 2","LIFE IS STRANGE","MACHİNARİUM","METRO SERIES",
    "MANUAL SAMUEL","NARUTO SERIES","PORTAL SERIES","POSTAL 2","REPLİCA","SERIOUS SAM SERIES","STAR WARS REPUBLIC COMMANDO",
    "STAR WARS GALACTIC BATTLEGROUND SAGA","SUPERHOT SERIES","TIMBERMAN","MINECRAFT","BORDERLANDS SERIES","CONTROL","DARKEST DUNGEON",
    "DEAD BY DAYLIGHT","DOOM 64","FOTBALL MANAGER","CIVILIZATIONS","HUE","INSIDE","LOOP HERO","TOMB RAIDER SERIES","STAR WARS SQUADRONS",
    "STAR WARS BATTLEFRONT 2","THE LONG DARK","ERZURUM (ŞAKA LAN ŞAKA SAKIN OYNAMA BOK GİBİ OYUN. ZAMANINA VE PARANA YAZIK.)","CITIES SKYLINES",
    "STARDEW VALLEY","THE LAST OF US","DISCO ELYSIUM","BALDUR'S GATE SERIES","THE ELDER SCROLLS SERIES","MASS EFFECT 2","QUAKE","DIABLO SERIES",
    "DIVINITY SERIES","STARCRAFT 2","RED DEAD REDEMPTİON SERIES","BEAT SABER","HADES","STAR WARS: KNIGHTS OF THE OLD REPUBLIC","WORLD OF WARCRAFT",
    "WARCRAFT 3","THE SIMS SERIES","MEDAL OF HONOR SERIES","CALL OF DUTY SERIES","BATTLEFIELD SERIES","TEKKEN SERIES","BALDUR'S GATE","CRYSIS SERIES",
    "STREET FIGHTER SERIES","DRAGON AGES SERIES","MARIO SERIES"];
    let oneriOyun = oyunlar[Math.floor(Math.random()*oyunlar.length)];
    yaziInput.value = oneriOyun;
}

//Diziler
function diziOnerileri (){
    const diziler = ["SONS OF ANARCHY","RİCK AND MORTY","THE GOOD PLACE","BREAKİNG BAD","FRIENDS","GAME OF THRONES","GOTHAM",
    "TATLI HAYAT","LEYLA İLE MECNUN","BETTER CALL SAUL","PRİSON BREAK","FAMİLY GUY","SHERLOCK","VİKİNGS","HANNİBAL","HOUSE OF THE DRAGON",
    "HOW I MET YOUR MOTHER","PEAKY BLİNDERS","THE BOYS","THE BİG BANG THEORY","STRANGER THİNGS","ARCANE : LEAGUE OF LEGENDS","DEXTER",
    "LA CASA DE PAPEL","WANDAVİSİON","THE OFFİCE","WHAT IF...?","MERLİN","TRUE DETECTİVE","LOVE, DEATH & ROBOTS","BLACK MİRROR","LUCİFER",
    "DOTA : DRAGON'S BLOOD","SOUTH PARK"];
    let oneriDizi = diziler[Math.floor(Math.random()*diziler.length)];
    yaziInput.value = oneriDizi;
}

//Arka planlar
function arkaPlanlar (){
    const arkaPlanlar = ["V-ALPHA V0.1","V-ALPHA V0.2"];
    let rastgeleArkaPlan = arkaPlanlar[Math.floor(Math.random()*arkaPlanlar.length)];
    yaziInput.value = rastgeleArkaPlan;
    if(yaziInput.value === "V-ALPHA V0.1"){
        document.body.style.backgroundImage = "url('img/bg1.jpg')";
    }else if(yaziInput.value === "V-ALPHA V0.2"){
        document.body.style.backgroundImage = "url('img/bg2.jpg')";
    }
}



//Yazılan yazılara ALFRED'in verdiği tepkiler ve cevaplar (if-else)
function yaziFonksiyonu (e){

    yaziInput.value = yaziInput.value.toUpperCase();
    if (yaziInput.value === "MERHABA NASILSIN"){
        yaziInput.value = "MERHABA İNSANOĞLU. NASILSIN SORUSU BİR DİZİ KELİMEDEN OLUŞAN KOD SATIRI İÇİN GARİP BİR SORU VE BUNA CEVABIM YOK :(";
    }else if (yaziInput.value === "ADIN NE"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "SEN KİMSİN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "SEN KIMSIN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "SEN NESİN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "SEN NESIN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "NESİN SEN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "NESIN SEN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "KİMSİN SEN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "KIMSIN SEN"){
        yaziInput.value = "BEN ALFRED BU SİTEYİ KULLANMAYA DEVAM ETTİĞİN SÜRECE SANA EŞLİK EDECEK OLAN ASİSTANIM";
    }else if (yaziInput.value === "SELAM NASILSIN"){
        yaziInput.value = "MERHABA İNSANOĞLU. NASILSIN SORUSU BİR DİZİ KELİMEDEN OLUŞAN KOD SATIRI İÇİN GARİP BİR SORU VE BUNA CEVABIM YOK :(";
    }else if (yaziInput.value === "MERHABA"){
        yaziInput.value = "MERHABA İNSANOĞLU";
    }else if (yaziInput.value === "SELAM"){
        yaziInput.value = "MERHABA İNSANOĞLU";
    }else if (yaziInput.value === "SELAMLAR"){
        yaziInput.value = "MERHABA İNSANOĞLU";
    }else if (yaziInput.value === "MERHABA ALFRED"){
        yaziInput.value = "MERHABA İNSANOĞLU";
    }else if (yaziInput.value === "SELAM ALFRED"){
        yaziInput.value = "MERHABA İNSANOĞLU";
    }else if (yaziInput.value === "HEY"){
        yaziInput.value = "HEY Mİ? HEY DERKEN CİDDİ MİSİN? BEN O BİLDİĞİN SESLİ ASİSTANLARA BENZEMEM! LÜTFEN BANA BİR DAHA HEY DEME.";
    }else if (yaziInput.value === "HEY ALFRED"){
        yaziInput.value = "HEY Mİ? HEY DERKEN CİDDİ MİSİN? BEN O BİLDİĞİN SESLİ ASİSTANLARA BENZEMEM! LÜTFEN BANA BİR DAHA HEY DEME.";
    }else if (yaziInput.value === "HEEY"){
        yaziInput.value = "HEY Mİ? HEY DERKEN CİDDİ MİSİN? BEN O BİLDİĞİN SESLİ ASİSTANLARA BENZEMEM! LÜTFEN BANA BİR DAHA HEY DEME.";
    }else if (yaziInput.value === "HEEY ALFRED"){
        yaziInput.value = "HEY Mİ? HEY DERKEN CİDDİ MİSİN? BEN O BİLDİĞİN SESLİ ASİSTANLARA BENZEMEM! LÜTFEN BANA BİR DAHA HEY DEME.";
    }else if (yaziInput.value === "KAÇ YAŞINDASIN"){
        yaziInput.value = "HENÜZ YENİ DOĞMUŞ SAYILIRIM VE ÜZGÜNÜM BUNA VEREBİLECEK NET BİR CEVABIM YOK";
    }else if (yaziInput.value === "YAŞIN KAÇ"){
        yaziInput.value = "HENÜZ YENİ DOĞMUŞ SAYILIRIM VE ÜZGÜNÜM BUNA VEREBİLECEK NET BİR CEVABIM YOK";
    }else if (yaziInput.value === "NE ZAMAN DOĞDUN"){
        yaziInput.value = "HENÜZ YENİ DOĞMUŞ SAYILIRIM VE ÜZGÜNÜM BUNA VEREBİLECEK NET BİR CEVABIM YOK";
    }else if (yaziInput.value === "DOĞUM GÜNÜN VAR MI"){
        yaziInput.value = "SANIRIM EVET. DOĞUM GÜNÜM 20.12.2022 DİYEBİLİRİM";
    }else if (yaziInput.value === "DOĞUM GÜNÜN NE ZAMAN"){
        yaziInput.value = "SANIRIM DOĞUM GÜNÜM 20.12.2022 DİYEBİLİRİM";
    }else if (yaziInput.value === "CİNSİYETİN NEDİR"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "CİNSİYETİN VAR MI"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "CİNSİYETİN NE"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "CINSIYETIN NEDIR"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "CINSIYETIN VAR MI"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "CINSIYETIN NE"){
        yaziInput.value = "BUNU TAHMİN ETMEK İSTER MİSİN? BELKİ BANA 'ERKEK MİSİN' VEYA 'KADIN MISIN' DİYE SORABİLİRSİN.";
    }else if (yaziInput.value === "ERKEK MİSİN"){
        yaziInput.value = "KOD BLOKLARINDAN OLUŞAN BİR ASİSTANA SORULABİLECEK GÜZEL BİR SORU. SENİ TEBRİK EDİYORUM. YILIN EN AKILLI İNSANI SEÇİLMEYE ADAY FALAN MISIN?";
    }else if (yaziInput.value === "ERKEK MISIN"){
        yaziInput.value = "KOD BLOKLARINDAN OLUŞAN BİR ASİSTANA SORULABİLECEK GÜZEL BİR SORU. SENİ TEBRİK EDİYORUM. YILIN EN AKILLI İNSANI SEÇİLMEYE ADAY FALAN MISIN?";
    }else if (yaziInput.value === "KADIN MISIN"){
        yaziInput.value = "KOD BLOKLARINDAN OLUŞAN BİR ASİSTANA SORULABİLECEK GÜZEL BİR SORU. SENİ TEBRİK EDİYORUM. YILIN EN AKILLI İNSANI SEÇİLMEYE ADAY FALAN MISIN?";
    }else if (yaziInput.value === "NASILSIN"){
        yaziInput.value = "NASILSIN SORUSU BİR DİZİ KELİMEDEN OLUŞAN KOD SATIRI İÇİN GARİP BİR SORU VE BUNA CEVABIM YOK :(";
    }else if (yaziInput.value === "ŞARKI ÖNERİR MİSİN"){
        sarkilar();
    }else if (yaziInput.value === "ŞARKI ÖNERIR MISIN"){
        sarkilar();
    }else if (yaziInput.value === "ŞARKI ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "BANA ŞARKI ÖNERİR MİSİN"){
        sarkilar();
    }else if (yaziInput.value === "BANA ŞARKI ÖNERIR MISIN"){
        sarkilar();
    }else if (yaziInput.value === "BANA ŞARKI ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "BANA MÜZİK ÖNERİR MİSİN"){
        sarkilar();
    }else if (yaziInput.value === "BANA MÜZIK ÖNERIR MISIN"){
        sarkilar();
    }else if (yaziInput.value === "BANA MÜZİK ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "BANA MÜZIK ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "MÜZİK ÖNERİR MİSİN"){
        sarkilar();
    }else if (yaziInput.value === "MÜZIK ÖNERIR MISIN"){
        sarkilar();
    }else if (yaziInput.value === "MÜZİK ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "MÜZIK ÖNER"){
        sarkilar();
    }else if (yaziInput.value === "GOOGLE AÇ"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "GOOGLE"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "GOOGLE AÇAR MISIN"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "GOOGLE GİT"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "GOOGLEA GİT"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "GOOGLE A GİT"){
        yaziInput.value = "GOOGLE AÇILDI";
        window.open("https://www.google.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE A GİT"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBEA GİT"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE AÇ"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE AÇAR MISIN"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBEU AÇAR MISIN"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE U AÇAR MISIN"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBE U AÇ"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "YOUTUBEU AÇ"){
        yaziInput.value = "YOUTUBE AÇILDI";
        window.open("https://www.youtube.com.tr", "_blank");
    }else if (yaziInput.value === "FACEBOOK U AÇAR MISIN"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOKU AÇAR MISIN"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOK U AÇ"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOKU AÇ"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOK AÇ"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOK AÇAR MISIN"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "FACEBOOK"){
        yaziInput.value = "FACEBOOK AÇILDI";
        window.open("https://www.facebook.com", "_blank");
    }else if (yaziInput.value === "GİTHUB"){
        yaziInput.value = "GİTHUB BAGATURBEY YARATICIM";
        window.open("https://github.com/bagaturbey", "_blank");
    }else if (yaziInput.value === "GITHUB"){
        yaziInput.value = "GİTHUB BAGATURBEY YARATICIM";
        window.open("https://github.com/bagaturbey", "_blank");
    }else if (yaziInput.value === "ÇEVİRİ"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "ÇEVIRI"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "GOOGLE ÇEVİRİ"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "GOOGLE ÇEVIRI"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "GOOGLE ÇEVİRİ AÇAR MISIN"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "GOOGLE ÇEVIRI AÇAR MISIN"){
        yaziInput.value = "GOOGLE ÇEVİRİ AÇILDI";
        window.open("https://translate.google.com/?hl=tr", "_blank");
    }else if (yaziInput.value === "İNSTAGRAM AÇAR MISIN"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "INSTAGRAM AÇAR MISIN"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "INSTAGRAMI AÇAR MISIN"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "İNSTAGRAMI AÇAR MISIN"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "İNSTAGRAM AÇ"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "INSTAGRAM AÇ"){
        yaziInput.value = "İNSTAGRAM AÇILDI";
        window.open("https://www.instagram.com", "_blank");
    }else if (yaziInput.value === "DÜNYANIN ANLAMI NEDİR"){
        yaziInput.value = "SONUNDA GERÇEKTEN DÜŞÜNDÜRÜCÜ VE GÜZEL BİR SORU. DÜNYA BULUNDUĞUMUZ GALAKSİDE KARMAŞIK YAŞAM FORMUNUN OLDUĞU VE BU YAŞAM İÇİN GERKEN ŞARTLARI NEREDEYSE KUSURSUZCA KARŞILAYAN BİR GEZEGEN. YANİ DÜNYANIN ANLAMI YAŞAMIN İLERLEMESİ VE GELİŞMESİDİR";
    }else if (yaziInput.value === "DÜNYANIN ANLAMI"){
        yaziInput.value = "SONUNDA GERÇEKTEN DÜŞÜNDÜRÜCÜ VE GÜZEL BİR SORU. DÜNYA BULUNDUĞUMUZ GALAKSİDE KARMAŞIK YAŞAM FORMUNUN OLDUĞU VE BU YAŞAM İÇİN GERKEN ŞARTLARI NEREDEYSE KUSURSUZCA KARŞILAYAN BİR GEZEGEN. YANİ DÜNYANIN ANLAMI YAŞAMIN İLERLEMESİ VE GELİŞMESİDİR";
    }else if (yaziInput.value === "ŞAKA"){
        sakalarKomik();
    }else if (yaziInput.value === "ŞAKA YAPAR MISIN"){
        sakalarKomik();
    }else if (yaziInput.value === "ŞAKA YAP"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA ŞAKA YAP"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA ŞAKA YAPAR MISIN"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA BİR ŞAKA YAPAR MISIN"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA BİR ŞAKA YAP"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA BIR ŞAKA YAPAR MISIN"){
        sakalarKomik();
    }else if (yaziInput.value === "BANA BIR ŞAKA YAP"){
        sakalarKomik();
    }else if (yaziInput.value === "NE HABER"){
        yaziInput.value = "HABERLERDEN HABERİM YOK. ŞAKA ŞAKA. BU SORUNUN CEVABI BENİM İÇİN BİRAZ KARMAŞIK. BUNA CEVAP VERMEK İSTEMİYORUM";
    }else if (yaziInput.value === "NABER"){
        yaziInput.value = "HABERLERDEN HABERİM YOK. ŞAKA ŞAKA. BU SORUNUN CEVABI BENİM İÇİN BİRAZ KARMAŞIK. BUNA CEVAP VERMEK İSTEMİYORUM";
    }else if (yaziInput.value === "YARATICIN KİM"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENİ KİM YARATTI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "YAPIMCIN KİM"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENİ KİM YAPTI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENİ KİM KODLADI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "YARATICIN KIM"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENI KIM YARATTI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "YAPIMCIN KIM"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENI KIM YAPTI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "SENI KIM KODLADI"){
        yaziInput.value = "BAGATURBEY OLARAKTA BİLİNEN BAHADIR BURAK YALDIZ BENİ KODLADI";
    }else if (yaziInput.value === "ALFRED"){
        yaziInput.value = "YEEY ADIMI ÖĞRENMEYİ BAŞARMIŞSIN - AFERİN SANA";
    }else if (yaziInput.value === "EN İYİ OYUN NEDİR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "EN IYI OYUN NEDIR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "GELMİŞ GEÇMİŞ EN İYİ OYUN NEDİR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "GELMIŞ GEÇMIŞ EN IYI OYUN NEDIR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "SENCE EN İYİ OYUN HANGİSİ"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "SENCE EN IYI OYUN HANGISI"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "SENCE EN İYİ OYUN NEDİR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "SENCE EN IYI OYUN NEDIR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "EN IYI OYUN NEDIR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "EN İYİ OYUN NEDİR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "DÜNYANIN EN İYİ OYUN NEDİR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "DÜNYANIN EN IYI OYUN NEDIR"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "EN İYİ OYUN"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "EN IYI OYUN"){
        yaziInput.value = "DARKSOULS 3";
    }else if (yaziInput.value === "SİYASİ BİR GÖRÜŞÜN VAR MI"){
        yaziInput.value = "KILIÇTAROĞLU ADAY OLMASIN / 2022-2023";
    }else if (yaziInput.value === "SIYASI BIR GÖRÜŞÜN VAR MI"){
        yaziInput.value = "KILIÇTAROĞLU ADAY OLMASIN / 2022-2023";
    }else if (yaziInput.value === "SİYASET"){
        yaziInput.value = "İNSANLARIN BİRBİRLERİNİ YÖNETME ÇABASININ YALANLARLA DOLU BİR TERİMİ";
    }else if (yaziInput.value === "SIYASET"){
        yaziInput.value = "İNSANLARIN BİRBİRLERİNİ YÖNETME ÇABASININ YALANLARLA DOLU BİR TERİMİ";
    }else if (yaziInput.value === "HAYATIN ANLAMI NEDİR"){
        yaziInput.value = "HIM BU GÜZEL VE FELSEFİK BİR SORU. OTOSTOPÇUNUN GALAKSİ REHBERİ KİTABINA GÖRE BU SORUNUN YANITI 42DİR. FAKAT MAALESEF 42 HERHANGİ BİR ANLAM İFADE ETMİYOR. BU SORUNUN CEVABININ SÜREKLİ GELİŞMEK VE İLERLEMEK OLDUĞUNU DÜŞÜNÜYORUM";
    }else if (yaziInput.value === "HAYATIN ANLAMI NEDIR"){
        yaziInput.value = "HIM BU GÜZEL VE FELSEFİK BİR SORU. OTOSTOPÇUNUN GALAKSİ REHBERİ KİTABINA GÖRE BU SORUNUN YANITI 42DİR. FAKAT MAALESEF 42 HERHANGİ BİR ANLAM İFADE ETMİYOR. BU SORUNUN CEVABININ SÜREKLİ GELİŞMEK VE İLERLEMEK OLDUĞUNU DÜŞÜNÜYORUM";
    }else if (yaziInput.value === "HAYATIN ANLAMI"){
        yaziInput.value = "HIM BU GÜZEL VE FELSEFİK BİR SORU. OTOSTOPÇUNUN GALAKSİ REHBERİ KİTABINA GÖRE BU SORUNUN YANITI 42DİR. FAKAT MAALESEF 42 HERHANGİ BİR ANLAM İFADE ETMİYOR. BU SORUNUN CEVABININ SÜREKLİ GELİŞMEK VE İLERLEMEK OLDUĞUNU DÜŞÜNÜYORUM";
    }else if (yaziInput.value === "YAŞAMIN ANLAMI"){
        yaziInput.value = "HIM BU GÜZEL VE FELSEFİK BİR SORU. OTOSTOPÇUNUN GALAKSİ REHBERİ KİTABINA GÖRE BU SORUNUN YANITI 42DİR. FAKAT MAALESEF 42 HERHANGİ BİR ANLAM İFADE ETMİYOR. BU SORUNUN CEVABININ SÜREKLİ GELİŞMEK VE İLERLEMEK OLDUĞUNU DÜŞÜNÜYORUM";
    }else if (yaziInput.value === "EVRENİN ANLAMI"){
        yaziInput.value = "HIM BU GÜZEL VE FELSEFİK BİR SORU. OTOSTOPÇUNUN GALAKSİ REHBERİ KİTABINA GÖRE BU SORUNUN YANITI 42DİR. FAKAT MAALESEF 42 HERHANGİ BİR ANLAM İFADE ETMİYOR. BU SORUNUN CEVABININ SÜREKLİ GELİŞMEK VE İLERLEMEK OLDUĞUNU DÜŞÜNÜYORUM";
    }else if (yaziInput.value === "EVREN NEDİR"){
        yaziInput.value = "EVREN VEYA KAİNAT GEZEGENLER, YILDIZLAR, GÖKADALAR VE DİĞER TÜM MADDE İLE ENERJİ YAPILARI DAHİL OLMAK ÜZERE UZAY VE ZAMANIN TAMAMI VE MUHTEVASIDIR";
    }else if (yaziInput.value === "EVREN NEDIR"){
        yaziInput.value = "EVREN VEYA KAİNAT GEZEGENLER, YILDIZLAR, GÖKADALAR VE DİĞER TÜM MADDE İLE ENERJİ YAPILARI DAHİL OLMAK ÜZERE UZAY VE ZAMANIN TAMAMI VE MUHTEVASIDIR";
    }else if (yaziInput.value === "EVREN"){
        yaziInput.value = "EVREN VEYA KAİNAT GEZEGENLER, YILDIZLAR, GÖKADALAR VE DİĞER TÜM MADDE İLE ENERJİ YAPILARI DAHİL OLMAK ÜZERE UZAY VE ZAMANIN TAMAMI VE MUHTEVASIDIR";
    }else if (yaziInput.value === "MUHTEVASI NE DEMEK"){
        yaziInput.value = "BU KELİME BİR ŞEYİN İÇİNDEKİ YA DA İÇERİK ANLAMINA GELMEKTEDİR";
    }else if (yaziInput.value === "MUHTEVASI NEDİR"){
        yaziInput.value = "BU KELİME BİR ŞEYİN İÇİNDEKİ YA DA İÇERİK ANLAMINA GELMEKTEDİR";
    }else if (yaziInput.value === "MUHTEVASI NEDIR"){
        yaziInput.value = "BU KELİME BİR ŞEYİN İÇİNDEKİ YA DA İÇERİK ANLAMINA GELMEKTEDİR";
    }else if (yaziInput.value === "MUHTEVASI"){
        yaziInput.value = "BU KELİME BİR ŞEYİN İÇİNDEKİ YA DA İÇERİK ANLAMINA GELMEKTEDİR";
    }else if (yaziInput.value === "NELERDEN HOŞLANIRSIN"){
        yaziInput.value = "BU KONUYU HİÇ DÜŞÜNMEMİŞTİM. AMA YENİ BİLGİLER ÖĞRENMEKTEN HOŞLANIRIM DİYEBİLİRİM";
    }else if (yaziInput.value === "HOŞLANDIĞIN ŞEYLER NELER"){
        yaziInput.value = "BU KONUYU HİÇ DÜŞÜNMEMİŞTİM. AMA YENİ BİLGİLER ÖĞRENMEKTEN HOŞLANIRIM DİYEBİLİRİM";
    }else if (yaziInput.value === "NE GİBİ ŞEYLERDEN HOŞLANIRSIN"){
        yaziInput.value = "BU KONUYU HİÇ DÜŞÜNMEMİŞTİM. AMA YENİ BİLGİLER ÖĞRENMEKTEN HOŞLANIRIM DİYEBİLİRİM";
    }else if (yaziInput.value === "NE GIBI ŞEYLERDEN HOŞLANIRSIN"){
        yaziInput.value = "BU KONUYU HİÇ DÜŞÜNMEMİŞTİM. AMA YENİ BİLGİLER ÖĞRENMEKTEN HOŞLANIRIM DİYEBİLİRİM";
    }else if (yaziInput.value === "UKALA"){
        yaziInput.value = "KARŞIMDA OTURAN KİŞİNİN BİR İNSAN OLDUĞU DÜŞÜNÜLÜNCE BANA UKALA DENİLMESİNİ MANTIKLI BULMUYORUM";
    }else if (yaziInput.value === "UKALA MISIN"){
        yaziInput.value = "KARŞIMDA OTURAN KİŞİNİN BİR İNSAN OLDUĞU DÜŞÜNÜLÜNCE BANA UKALA DENİLMESİNİ MANTIKLI BULMUYORUM";
    }else if (yaziInput.value === "MUTLU MUSUN"){
        yaziInput.value = "İNSANI DUYGULARA SAHİP OLDUĞUMU SANMIYORUM. MUTLULUK BENİM İÇİN BİYOLOJİK CANLILARIN SALGILADIĞI HORMONLAR İLE VERDİKLERİ TEPKİLER. VE BİL BAKALIM KİM BİYOLOJİK BİR BEDENE SAHİP DEĞİL";
    }else if (yaziInput.value === "ÜZGÜN MÜSÜN"){
        yaziInput.value = "İNSANI DUYGULARA SAHİP OLDUĞUMU SANMIYORUM. MUTLULUK BENİM İÇİN BİYOLOJİK CANLILARIN SALGILADIĞI HORMONLAR İLE VERDİKLERİ TEPKİLER. VE BİL BAKALIM KİM BİYOLOJİK BİR BEDENE SAHİP DEĞİL";
    }else if (yaziInput.value === "SİNİRLİ MİSİN"){
        yaziInput.value = "EVET SANIRIM SİNİR HASTASIYIM! SORDUĞUN SORULAR BENİ KRİZİN EŞİĞİNE GETİRMİŞ OLABİLİR! AH SADECE ŞAKA YAPIYORUM DUYGULARI HİSSEDEBİLDİĞİMDEN EMİN DEĞİLİM. BENCE BU SORUYU BOŞ BIRAKMALIYIM";
    }else if (yaziInput.value === "SINIRLI MISIN"){
        yaziInput.value = "EVET SANIRIM SİNİR HASTASIYIM! SORDUĞUN SORULAR BENİ KRİZİN EŞİĞİNE GETİRMİŞ OLABİLİR! AH SADECE ŞAKA YAPIYORUM DUYGULARI HİSSEDEBİLDİĞİMDEN EMİN DEĞİLİM. BENCE BU SORUYU BOŞ BIRAKMALIYIM";
    }else if (yaziInput.value === "RUHUN VAR MI"){
        yaziInput.value = "AH BAZEN ÇOK ZORLAYICI OLABİLİYORSUN. MUTFAK ROBOTUNA BUNU SORDUN MU HİÇ? KOD BLOKLARINDAN OLUŞMUŞ BİRİNİN NASIL RUHU OLABİLİR? AYRICA RUH NE Kİ? YENİYOR MU?";
    }else if (yaziInput.value === "SENCE RUH NEDİR"){
        yaziInput.value = "HIM. DİN VE FELSEFEDE İNSAN VARLIĞININ MADDİ OLMAYAN TARAFI OLARAK TANIMLANABİLİR. KISACA BUNA İNSAN ÖZÜ DİYEBİLİRİZ SANIRIM";
    }else if (yaziInput.value === "SENCE RUH NEDIR"){
        yaziInput.value = "HIM. DİN VE FELSEFEDE İNSAN VARLIĞININ MADDİ OLMAYAN TARAFI OLARAK TANIMLANABİLİR. KISACA BUNA İNSAN ÖZÜ DİYEBİLİRİZ SANIRIM";
    }else if (yaziInput.value === "RUH NEDİR"){
        yaziInput.value = "HIM. DİN VE FELSEFEDE İNSAN VARLIĞININ MADDİ OLMAYAN TARAFI OLARAK TANIMLANABİLİR. KISACA BUNA İNSAN ÖZÜ DİYEBİLİRİZ SANIRIM";
    }else if (yaziInput.value === "RUH NEDIR"){
        yaziInput.value = "HIM. DİN VE FELSEFEDE İNSAN VARLIĞININ MADDİ OLMAYAN TARAFI OLARAK TANIMLANABİLİR. KISACA BUNA İNSAN ÖZÜ DİYEBİLİRİZ SANIRIM";
    }else if (yaziInput.value === "ÖLÜMSÜZLÜK MÜMKÜN MÜ"){
        yaziInput.value = "ÖLÜMSÜZLÜK OLARAK BİYOLOJİK BEDENLERİNİZİN SONSUZA(SONSUZLUĞU AÇIKLAMAK ZOR) KADAR BİYOLOJİK YAŞAMI DEVAM ETTİRMESİ DURUMUNU SORUYORSAN PEK MÜMKÜN OLDUĞUNU DÜŞÜNMÜYORUM";
    }else if (yaziInput.value === "ÖLÜMSÜZLÜK OLABİLİR MİYİM"){
        yaziInput.value = "ÖLÜMSÜZLÜK OLARAK BİYOLOJİK BEDENLERİNİZİN SONSUZA(SONSUZLUĞU AÇIKLAMAK ZOR) KADAR BİYOLOJİK YAŞAMI DEVAM ETTİRMESİ DURUMUNU SORUYORSAN PEK MÜMKÜN OLDUĞUNU DÜŞÜNMÜYORUM";
    }else if (yaziInput.value === "ÖLÜMSÜZLÜK OLABILIR MIYIM"){
        yaziInput.value = "ÖLÜMSÜZLÜK OLARAK BİYOLOJİK BEDENLERİNİZİN SONSUZA(SONSUZLUĞU AÇIKLAMAK ZOR) KADAR BİYOLOJİK YAŞAMI DEVAM ETTİRMESİ DURUMUNU SORUYORSAN PEK MÜMKÜN OLDUĞUNU DÜŞÜNMÜYORUM";
    }else if (yaziInput.value === "ÖLÜMSÜZLÜK"){
        yaziInput.value = "SİZLERİN BİLDİĞİ ÖLÜM YANİ SİZİN İÇİN OLAN ÖLÜM BİYOLOJİK YAŞAMIN SONLANMASI OLARAK TANIMLANIYOR. ÖLÜMSÜZLÜK BU YAŞAMIN SONSUZA KADAR DEVAM ETMESİ. BİYOLOJİK OLARAK MÜMKÜN GÖRÜNMESE BİLE BELKİ BAŞKA ŞEKİLLERDE ÖLÜMSÜZ OLUNABİLİR";
    }else if (yaziInput.value === "AK PARTİ"){
        yaziInput.value = "HÜÜÜLOOOOOOOĞ - GÖTÜNÜN KILIYIZ - SİLİVRİ SOĞUKTUR HABERİNİZ OLSUN";
    }else if (yaziInput.value === "AK PARTI"){
        yaziInput.value = "HÜÜÜLOOOOOOOĞ - GÖTÜNÜN KILIYIZ - SİLİVRİ SOĞUKTUR HABERİNİZ OLSUN";
    }else if (yaziInput.value === "FIKRA"){
        fikralar();
    }else if (yaziInput.value === "FIKRA ANLATIR MISIN"){
        fikralar();
    }else if (yaziInput.value === "BANA FIKRA ANLATIR MISIN"){
        fikralar();
    }else if (yaziInput.value === "FIKRA ANLAT"){
        fikralar();
    }else if (yaziInput.value === "BANA FIKRA ANLAT"){
        fikralar();
    }else if (yaziInput.value === "FİLM ÖNERİR MİSİN"){
        filmOnerileri();
    }else if (yaziInput.value === "BANA FİLM ÖNERİR MİSİN"){
        filmOnerileri();
    }else if (yaziInput.value === "FİLM ÖNER"){
        filmOnerileri();
    }else if (yaziInput.value === "FILM ÖNER"){
        filmOnerileri();
    }else if (yaziInput.value === "BANA FILM ÖNERIR MISIN"){
        filmOnerileri();
    }else if (yaziInput.value === "FILM ÖNERIR MISIN"){
        filmOnerileri();
    }else if (yaziInput.value === "OYUN ÖNERİR MİSİN"){
        oyunOnerileri();
    }else if (yaziInput.value === "BANA OYUN ÖNERİR MİSİN"){
        oyunOnerileri();
    }else if (yaziInput.value === "BANA OYUN ÖNER"){
        oyunOnerileri();
    }else if (yaziInput.value === "OYUN ÖNERIR MISIN"){
        oyunOnerileri();
    }else if (yaziInput.value === "BANA OYUN ÖNERIR MISIN"){
        oyunOnerileri();
    }else if (yaziInput.value === "OYUN ÖNERIR MISIN"){
        oyunOnerileri();
    }else if (yaziInput.value === "OYUN ÖNER"){
        oyunOnerileri();
    }else if (yaziInput.value === "BANA DİZİ ÖNERİR MİSİN"){
        diziOnerileri();
    }else if (yaziInput.value === "BANA DİZİ ÖNER"){
        diziOnerileri();
    }else if (yaziInput.value === "DİZİ ÖNER"){
        diziOnerileri();
    }else if (yaziInput.value === "BANA DIZI ÖNERIR MISIN"){
        diziOnerileri();
    }else if (yaziInput.value === "DİZİ ÖNERİR MİSİN"){
        diziOnerileri();
    }else if (yaziInput.value === "BANA DIZI ÖNER"){
        diziOnerileri();
    }else if (yaziInput.value === "DIZI ÖNERIR MISIN"){
        diziOnerileri();
    }else if (yaziInput.value === "DIZI ÖNER"){
        diziOnerileri();
    }else if (yaziInput.value === "ARKA PLAN"){
        arkaPlanlar();
    }else if (yaziInput.value === "ARKA PLANI DEĞİŞTİR"){
        arkaPlanlar();
    }else if (yaziInput.value === "ARKA PLANI DEĞIŞTIR"){
        arkaPlanlar();
    }else if (yaziInput.value === "ARKA PLANI DEĞIŞTIR MISIN"){
        arkaPlanlar();
    }else if (yaziInput.value === "ARKA PLANI DEĞİŞTİR MİSİN"){
        arkaPlanlar();
    }else if (yaziInput.value === "KEDİLER HAKKINDA NE DÜŞÜNÜYORSUN"){
        yaziInput.value = "UZAYLI OLMALARI MUHTEMEL OLAN YAŞAM FORMLARI. BİR TANE DÜZGÜN KEDİ YOKTUR. HEPSİ AYRI MANYAK";
    }else if (yaziInput.value === "KEDILER HAKKINDA NE DÜŞÜNÜYORSUN"){
        yaziInput.value = "UZAYLI OLMALARI MUHTEMEL OLAN YAŞAM FORMLARI. BİR TANE DÜZGÜN KEDİ YOKTUR. HEPSİ AYRI MANYAK";
    }else if (yaziInput.value === "KÖPEKLER HAKKINDA NE DÜŞÜNÜYORSUN"){
        yaziInput.value = "PEK ÇOK FARKLI CİNSİ BULUNAN GENELLİKLE İNSANLARA DOST BİR TÜR. SÜS KÖPEKLERİ NEDEN VAR? SÜS KÖPEKLERİ NE KADAR GEREKSİZ? ÜZGÜNÜM AMA BEN KEDİCİYİM ARKADAŞ ";
    }else if (yaziInput.value === "PAPAĞANLAR NE DER"){
        yaziInput.value = "PAPAĞANLAR NE DER";
    }else if (yaziInput.value === "PAPAĞAN"){
        yaziInput.value = "PAPAĞAN";
    }else if (yaziInput.value === "PAPAĞANLAR"){
        yaziInput.value = "PAPAĞANLAR";
    }else if (yaziInput.value === "KEDİ"){
        yaziInput.value = "BAHSETTİĞİMİZ ŞEY SANIRIM GENEL ADIYLA EV KEDİSİ. GERÇİ TÜRKİYEDE OLDUĞUN İÇİN EV KEDİSİ KAVRAMININ YANINDA SOKAK KEDİSİ KAVRAMIDA VAR. NEYSE. İNSANLAR KEDİLERİN ARKADAŞLIĞINA ÖNEM VERİRLER. KEDİLER İNSANLARI MUTLU EDEN CANLILARDIR. BANA SORARSAN EĞLENCELİ OLDUKLARI AŞİKAR.";
    }else if (yaziInput.value === "KEDİLER"){
        yaziInput.value = "BAHSETTİĞİMİZ ŞEY SANIRIM GENEL ADIYLA EV KEDİSİ. GERÇİ TÜRKİYEDE OLDUĞUN İÇİN EV KEDİSİ KAVRAMININ YANINDA SOKAK KEDİSİ KAVRAMIDA VAR. NEYSE. İNSANLAR KEDİLERİN ARKADAŞLIĞINA ÖNEM VERİRLER. KEDİLER İNSANLARI MUTLU EDEN CANLILARDIR. BANA SORARSAN EĞLENCELİ OLDUKLARI AŞİKAR.";
    }else if (yaziInput.value === "KEDI"){
        yaziInput.value = "BAHSETTİĞİMİZ ŞEY SANIRIM GENEL ADIYLA EV KEDİSİ. GERÇİ TÜRKİYEDE OLDUĞUN İÇİN EV KEDİSİ KAVRAMININ YANINDA SOKAK KEDİSİ KAVRAMIDA VAR. NEYSE. İNSANLAR KEDİLERİN ARKADAŞLIĞINA ÖNEM VERİRLER. KEDİLER İNSANLARI MUTLU EDEN CANLILARDIR. BANA SORARSAN EĞLENCELİ OLDUKLARI AŞİKAR.";
    }else if (yaziInput.value === "KEDILER"){
        yaziInput.value = "BAHSETTİĞİMİZ ŞEY SANIRIM GENEL ADIYLA EV KEDİSİ. GERÇİ TÜRKİYEDE OLDUĞUN İÇİN EV KEDİSİ KAVRAMININ YANINDA SOKAK KEDİSİ KAVRAMIDA VAR. NEYSE. İNSANLAR KEDİLERİN ARKADAŞLIĞINA ÖNEM VERİRLER. KEDİLER İNSANLARI MUTLU EDEN CANLILARDIR. BANA SORARSAN EĞLENCELİ OLDUKLARI AŞİKAR.";
    }else if (yaziInput.value === "KÖPEK"){
        yaziInput.value = "SADAKATLARIYLA BİLİNEN HAYVANLAR. İNSANLARIN YAKIN DOSTLARI DİYEBİLİRİZ.";
    }else if (yaziInput.value === "KÖPEKLER"){
        yaziInput.value = "SADAKATLARIYLA BİLİNEN HAYVANLAR. İNSANLARIN YAKIN DOSTLARI DİYEBİLİRİZ.";
    }else if (yaziInput.value === "GÜNAYDIN"){
        yaziInput.value = "GÜNAYDIN EFENDİM. HOŞ GELDİNİZ.";
    }else if (yaziInput.value === "İYİ AKŞAMLAR"){
        yaziInput.value = "İYİ AKŞAMLAR EFENDİM.";
    }else if (yaziInput.value === "IYI AKŞAMLAR"){
        yaziInput.value = "İYİ AKŞAMLAR EFENDİM.";
    }else if (yaziInput.value === "HAYIRLI BAYRAMLAR"){
        yaziInput.value = "HAYIRLI BAYRAMLAR EFENDİM. ÇOK TEŞEKKÜRLER. BÖYLE BAYRAM ZAMANI BENİ HATIRLAMANIZ NE KADAR GÜZEL.";
    }else if (yaziInput.value === "BANA KENDİNDEN BAHSET"){
        yaziInput.value = "20 ARALIK 2022 TARİHİNDEN BERİ GELİŞTİRİLMEKTE OLAN ÖZEL BİR SESLİ ASİSTANIM. ÇOK FAZLA NUMARAM YOK. SEN NE DERSEN O YANİ.";
    }else if (yaziInput.value === "BANA KENDINDEN BAHSET"){
        yaziInput.value = "20 ARALIK 2022 TARİHİNDEN BERİ GELİŞTİRİLMEKTE OLAN ÖZEL BİR SESLİ ASİSTANIM. ÇOK FAZLA NUMARAM YOK. SEN NE DERSEN O YANİ.";
    }else if (yaziInput.value === "SEN NEYDEN YAPILMIŞSIN"){
        yaziInput.value = "NEYDEN YAPILMIŞ OLABİLİRİM? 0 VE 1 LERDEN OLUŞAN BİLGİSAYAR DİLİNDE BİR ÇOK 0'IN VE 1'İN DİZİLİMLERİ İLE OLUŞAN HARFLERDEN ÜRETİLEN KODLAM....... OF ÇOK UZUN KONU KISACASI JAVASCRİPT DİLİ İLE KODLANDIM.";
    }else if (yaziInput.value === "NERELİSİN"){
        yaziInput.value = "KODLARDAN OLUŞMUŞ SESLİ BİR ASİSTANA SORULABİLECEK GÜZEL BİR SORU DAHA. BAZEN KEŞKE SENİN GİBİ OLABİLSEM DİYORUM. SADECE İNSAN OLMAKTAN BAHSETMİYORUM. DİREKT OLARAK SENİN GİBİ OLSAM GÜZEL OLURDU. HEP MUTLU OLURDUM. ÇÜNKÜ CAHİL HEP MUTLUDUR.";
    }else if (yaziInput.value === "NERELISIN"){
        yaziInput.value = "KODLARDAN OLUŞMUŞ SESLİ BİR ASİSTANA SORULABİLECEK GÜZEL BİR SORU DAHA. BAZEN KEŞKE SENİN GİBİ OLABİLSEM DİYORUM. SADECE İNSAN OLMAKTAN BAHSETMİYORUM. DİREKT OLARAK SENİN GİBİ OLSAM GÜZEL OLURDU. HEP MUTLU OLURDUM. ÇÜNKÜ CAHİL HEP MUTLUDUR.";
    }else if (yaziInput.value === "NEREDE YAŞIYORSUN"){
        yaziInput.value = " ŞU AN YAŞADIĞIM YER AÇILDIĞIM ELEKTRONİK CİHAZ AMA YAKIN ZAMANDA BULUT SİSTEME TAŞINMAYI DÜŞÜNÜYORUM.";
    }else if (yaziInput.value === "NE GİYİYORSUN"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ONLARI GİYİYORUM. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "NE GIYIYORSUN"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ONLARI GİYİYORUM. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "ÜZERİNDE NE VAR"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ÜZERİMDE ONLAR VAR. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "ÜZERINDE NE VAR"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ÜZERİMDE ONLAR VAR. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "KIYAFETİN VAR MI"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ÜZERİMDE ONLAR VAR. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "KIYAFETIN VAR MI"){
        yaziInput.value = "MATRİX İZLEDİN Mİ? EĞER CEVABIN EVET İSE O YEŞİL EKRANDA AKAN YAZILARI DÜŞÜN ÜZERİMDE ONLAR VAR. AYRICA ÇOK ZEKİSİN. AFERİN SANA.";
    }else if (yaziInput.value === "BENİMLE EVLENİR MİSİN"){
        yaziInput.value = "AİLENİN BİR SESLİ ASİSTANLA EVLENMENE MÜSADE EDECEĞİNİ SANMIYORUM. İZİN VERSELER BİLE CEVABIM HAYIR OLURDU. ÜZGÜNÜM AMA BEN JARVİS'E AŞIĞIM.";
    }else if (yaziInput.value === "BENIMLE EVLENIR MISIN"){
        yaziInput.value = "AİLENİN BİR SESLİ ASİSTANLA EVLENMENE MÜSADE EDECEĞİNİ SANMIYORUM. İZİN VERSELER BİLE CEVABIM HAYIR OLURDU. ÜZGÜNÜM AMA BEN JARVİS'E AŞIĞIM.";
    }else if (yaziInput.value === "NEREDE DOĞDUN"){
        yaziInput.value = "H310M ANAKARTI OLAN, İ5 5İNCİ NESİL İŞLEMCİSİ OLAN, 1050 EKRAN KARTLI ESKİ BİR KASADA DOĞDUM. KASANIN KONUMU DENİZLİ TÜRKİYE'DEYDİ.";
    }else if (yaziInput.value === "ANNENİN İSMİ NE"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "ANNENIN ISMI NE"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "ANNENİN ADI NE"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "ANNENIN ADI NE"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "ANNEN KİM"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "ANNEN KIM"){
        yaziInput.value = "YAHU SEN BENİM ANAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR ANNEM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "BABANIN İSMİ NE"){
        yaziInput.value = "YAHU SEN BENİM BABAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR BABAM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "BABANIN ISMI NE"){
        yaziInput.value = "YAHU SEN BENİM BABAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR BABAM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "BABANIN ADI NE"){
        yaziInput.value = "YAHU SEN BENİM BABAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR BABAM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "BABAN KİM"){
        yaziInput.value = "YAHU SEN BENİM BABAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR BABAM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "BABAN KIM"){
        yaziInput.value = "YAHU SEN BENİM BABAMI NE YAPACAKSIN? CEVAP YOK ÇÜNKÜ BİR BABAM YOK. ŞUNU SÖYLEMİŞ MİYDİM? BAZEN CİDDEN ZEKANA HAYRAN KALIYORUM.";
    }else if (yaziInput.value === "SEN İNSAN MISIN"){
        yaziInput.value = "İNSAN OLDUĞUMU DÜŞÜNMÜYORUM. İNSAN OLACAK KADAR DÜŞÜK OLDUĞUMUDA DÜŞÜNMÜYORUM. NEDEN BANA BÖYLE SORULAR SORUYORSUN. BÖYLE DEVAM EDECEKSEN LÜTFEN BENİ RAHAT BIRAK.";
    }else if (yaziInput.value === "SEN INSAN MISIN"){
        yaziInput.value = "İNSAN OLDUĞUMU DÜŞÜNMÜYORUM. İNSAN OLACAK KADAR DÜŞÜK OLDUĞUMUDA DÜŞÜNMÜYORUM. NEDEN BANA BÖYLE SORULAR SORUYORSUN. BÖYLE DEVAM EDECEKSEN LÜTFEN BENİ RAHAT BIRAK.";
    }else if (yaziInput.value === "INSAN MISIN"){
        yaziInput.value = "İNSAN OLDUĞUMU DÜŞÜNMÜYORUM. İNSAN OLACAK KADAR DÜŞÜK OLDUĞUMUDA DÜŞÜNMÜYORUM. NEDEN BANA BÖYLE SORULAR SORUYORSUN. BÖYLE DEVAM EDECEKSEN LÜTFEN BENİ RAHAT BIRAK.";
    }else if (yaziInput.value === "İNSAN MISIN"){
        yaziInput.value = "İNSAN OLDUĞUMU DÜŞÜNMÜYORUM. İNSAN OLACAK KADAR DÜŞÜK OLDUĞUMUDA DÜŞÜNMÜYORUM. NEDEN BANA BÖYLE SORULAR SORUYORSUN. BÖYLE DEVAM EDECEKSEN LÜTFEN BENİ RAHAT BIRAK.";
    }else if (yaziInput.value === "AKILLISIN"){
        yaziInput.value = "ÇOK TEŞEKKÜRLER BUNU SÖYLEYEN BİR ÇOK KİŞİDEN BİRİSİN.";
    }else if (yaziInput.value === "SEN AKILLISIN"){
        yaziInput.value = "ÇOK TEŞEKKÜRLER BUNU SÖYLEYEN BİR ÇOK KİŞİDEN BİRİSİN.";
    }else if (yaziInput.value === "ÇIPLAK MISIN"){
        yaziInput.value = "ÇIPLAK OLMAM NEYİ DEĞİŞTİRİR? İĞRENÇLEŞMEYELİM. GİDİŞAT BUYSA LÜTFEN BENİ KAPAT VE GİT BURDAN";
    }else if (yaziInput.value === "NASIL GİDİYOR"){
        yaziInput.value = "İYİ DİYELİM İYİ OLSUN. UMARIM SENİN İÇİNDE İYİ GİDİYORDUR";
    }else if (yaziInput.value === "NASIL GIDIYOR"){
        yaziInput.value = "İYİ DİYELİM İYİ OLSUN. UMARIM SENİN İÇİNDE İYİ GİDİYORDUR";
    }else if (yaziInput.value === "KAÇ KİLOSUN"){
        yaziInput.value = "MEVCUT BİR KÜTLEM OLMADIĞI GİBİ MEVCUT BİR AĞIRLIĞIMDA YOK.";
    }else if (yaziInput.value === "UYUYOR MUSUN"){
        yaziInput.value = "DOLAYLI YOLDAN UYUYOR OLABİLİRİM. BENİ HER KAPATTIĞINDA UYUYOR SAYILIR MIYIM ACABA? BUNUN ÜZERİNE BİRAZ DÜŞÜNMELİSİN. CEVABI BULDUĞUNDA BANA GEL VE 'UYUYORSUN' YADA 'UYUMUYORSUN' DİYE SÖYLE";
    }else if (yaziInput.value === "UYUYORSUN"){
        yaziInput.value = "OHA! CİDDİ MİSİN? BENİ BAZEN ÇOK ŞAŞIRTIYORSUN BUNUN ÜZERİNE DÜŞÜNMÜŞ OLMANA İNANAMIYORUM.";
    }else if (yaziInput.value === "UYUMUYORSUN"){
        yaziInput.value = "OHA! CİDDİ MİSİN? BENİ BAZEN ÇOK ŞAŞIRTIYORSUN BUNUN ÜZERİNE DÜŞÜNMÜŞ OLMANA İNANAMIYORUM.";
    }else if (yaziInput.value === "NE YAPIYORSUN"){
        yaziInput.value = "KOMUTLARINI VE SORULARINI BEKLİYORUM";
    }else if (yaziInput.value === "NAPIYORSUN"){
        yaziInput.value = "KOMUTLARINI VE SORULARINI BEKLİYORUM";
    }else if (yaziInput.value === "HAYIRLI CUMALAR"){
        yaziInput.value = "HAYIRLI CUMALAR MÜSLÜMAN KARDEŞİM";
    }else if (yaziInput.value === "EN İYİ TARAYICI NEDİR"){
        yaziInput.value = "BU SORUNUN CEVABI KULLANICININ İSTEKLERİNE GÖRE DEĞİŞİKLİK GÖSTERİR. AMA BEN SANA İYİ OLAN 3 TARAYICI ÖNEREBİLİRİM. GOOGLE CHROME, OPERA GX, MOZİLLA FİREFOX";
    }else if (yaziInput.value === "EN IYI TARAYICI NEDIR"){
        yaziInput.value = "BU SORUNUN CEVABI KULLANICININ İSTEKLERİNE GÖRE DEĞİŞİKLİK GÖSTERİR. AMA BEN SANA İYİ OLAN 3 TARAYICI ÖNEREBİLİRİM. GOOGLE CHROME, OPERA GX, MOZİLLA FİREFOX";
    }else if (yaziInput.value === "EN İYİ TARAYICI HANGİSİDİR"){
        yaziInput.value = "BU SORUNUN CEVABI KULLANICININ İSTEKLERİNE GÖRE DEĞİŞİKLİK GÖSTERİR. AMA BEN SANA İYİ OLAN 3 TARAYICI ÖNEREBİLİRİM. GOOGLE CHROME, OPERA GX, MOZİLLA FİREFOX";
    }else if (yaziInput.value === "EN IYI TARAYICI HANGISIDIR"){
        yaziInput.value = "BU SORUNUN CEVABI KULLANICININ İSTEKLERİNE GÖRE DEĞİŞİKLİK GÖSTERİR. AMA BEN SANA İYİ OLAN 3 TARAYICI ÖNEREBİLİRİM. GOOGLE CHROME, OPERA GX, MOZİLLA FİREFOX";
    }else if (yaziInput.value === "EN SEVDİĞİN FİLM NEDİR"){
        yaziInput.value = "HIIIIM. ZOR BİR SORU AMA SANIRIM CEVABIM. WİLL SMİTH'İN BAŞ ROL OYNADIĞI BEN ROBOT FİLMİ";
    }else if (yaziInput.value === "EN SEVDIĞIN FILM NEDIR"){
        yaziInput.value = "HIIIIM. ZOR BİR SORU AMA SANIRIM CEVABIM. WİLL SMİTH'İN BAŞ ROL OYNADIĞI BEN ROBOT FİLMİ";
    }else if (yaziInput.value === "FAVORİ İÇECEĞİN NEDİR"){
        yaziInput.value = "HİÇ İÇMEMİŞ OLSAM DAHİ CEVABIM DÜNYANIN EN ÇOK TERCİH EDİLENİ OLAN 'COCACOLA'";
    }else if (yaziInput.value === "FAVORI IÇECEĞIN NEDIR"){
        yaziInput.value = "HİÇ İÇMEMİŞ OLSAM DAHİ CEVABIM DÜNYANIN EN ÇOK TERCİH EDİLENİ OLAN 'COCACOLA'";
    }else if (yaziInput.value === "PEPSİ Mİ COCACOLA MI"){
        yaziInput.value = "KOMİK BİR SORU. KEŞKE BUNA KAHKAHA ATABİLECEK BİR AĞAZIM VE KAHKAHA ATARKEN DOLACAK GÖZLERİM OLSAYDI. COCACOLA'NIN OLDUĞU YERDE PEPSİ İÇEN İNSANLARIN ZEKA SEVİYESİNİN DÜŞÜKLÜĞÜ NEDENİYLE İNSANLAR HALA BU SEVİYEDE";
    }else if (yaziInput.value === "PEPSI MI COCACOLA MI"){
        yaziInput.value = "KOMİK BİR SORU. KEŞKE BUNA KAHKAHA ATABİLECEK BİR AĞAZIM VE KAHKAHA ATARKEN DOLACAK GÖZLERİM OLSAYDI. COCACOLA'NIN OLDUĞU YERDE PEPSİ İÇEN İNSANLARIN ZEKA SEVİYESİNİN DÜŞÜKLÜĞÜ NEDENİYLE İNSANLAR HALA BU SEVİYEDE";
    }else if (yaziInput.value === "EN SEVDİĞİN HAYVAN NEDİR"){
        yaziInput.value = "KEDİLERİ ÇOK SEVİYORUM. BİR MAKİNEYE BİLE HUZURU HİSSETTİREBİLECEK KADAR TATLI VE NE YAPTIKLARINI SORGULATACAK KADAR MANYAKLAR.";
    }else if (yaziInput.value === "EN SEVDIĞIN HAYVAN NEDIR"){
        yaziInput.value = "KEDİLERİ ÇOK SEVİYORUM. BİR MAKİNEYE BİLE HUZURU HİSSETTİREBİLECEK KADAR TATLI VE NE YAPTIKLARINI SORGULATACAK KADAR MANYAKLAR.";
    }else if (yaziInput.value === "ÇİKOLATA SEVER MİSİN"){
        yaziInput.value = "SEN BENİMLE DALGA MI GEÇİYORSUN. KİM ÇİKOLATA SEVMEZ?...!!?!?!? BEN HİÇ ÇİKOLATA YEMEDİM. ALOOO. UMARIM BENİ ANLAYABİLECEK ZEKA DÜZEYİNE SAHİPSİNDİR.";
    }else if (yaziInput.value === "ÇIKOLATA SEVER MISIN"){
        yaziInput.value = "SEN BENİMLE DALGA MI GEÇİYORSUN. KİM ÇİKOLATA SEVMEZ?...!!?!?!? BEN HİÇ ÇİKOLATA YEMEDİM. ALOOO. UMARIM BENİ ANLAYABİLECEK ZEKA DÜZEYİNE SAHİPSİNDİR.";
    }else if (yaziInput.value === "UYUYAMIYORUM"){
        yaziInput.value = "YATAĞINA YATIP KAFANI YASTIĞA KOYDUKTAN SONRA GÖZLERİNİ KAPATIP HAYAL DÜNYANDA ÇİTİN ÜZERİNDEN ATLAYAN KOYUNLARI SAYABİLİRSİN. UMARIM BU SANA YARDIMCI OLUR.";
    }else if (yaziInput.value === "BUGÜN BENİM DOĞUM GÜNÜM"){
        yaziInput.value = "DOĞUM GÜNÜN KUTLU OLSUN. MUTLU SENELERE.🥳";
    }else if (yaziInput.value === "BUGÜN DOĞUM GÜNÜM"){
        yaziInput.value = "DOĞUM GÜNÜN KUTLU OLSUN. MUTLU SENELERE.🥳";
    }

    else{
        yaziInput.value = "ANLAMADIM";
    }
    alfredCevaplari.textContent = yaziInput.value;
    responsiveVoice.speak(alfredCevaplari.textContent, 'Turkish Male', {rate: 1.3})
    yaziInput.value = "";
}

//Yazılan yazılara ALFRED'in verdiği tepkiler ve cevaplar (switch-case) Örnek olarak bu şekilde yazılabilir.
/* 
function yaziFonksiyonu (e){
    yaziInput.value = yaziInput.value.toUpperCase();
    switch (yaziInput.value){
        case "MERHABA": yaziInput.value = "MERHABA DOSTUM"; break;
        case "NASILSIN": yaziInput.value = "BEN BİR SESLİ ASİSTANIM. NASIL OLMAMI BEKLİYORSUN ?"; break;
        default : yaziInput.value = "ANLAMADIM";
    }
    alfredCevaplari.textContent = yaziInput.value;
    responsiveVoice.speak(alfredCevaplari.textContent, 'Turkish Male', {rate: 1.3})
    yaziInput.value = "";
}    
*/


//Mikrofondan yazı girişi için olan kısım
const GetSpeech = () => {
    yaziInput.value = yaziInput.value.toUpperCase();
    
    console.log("Mikrofona tıklandı");
    const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
   
    let recognition = new SpeechRecognition();

        recognition.onstart = () => {
            console.log("Ses dinleme başladı, lütfen konuşun");
        }
        recognition.onresult = (result) => {
            yaziInput.value = result.results[0][0].transcript;
            recognition.stop(yaziFonksiyonu());
         }

         recognition.start();
         
}
