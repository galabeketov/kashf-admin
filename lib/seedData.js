// kashf-admin/lib/seedData.js
// Real tours from Samandar Ikromov - Travel Easy Uzbekistan
// 11 tours, 3 languages (EN/UZ/RU), professional content

export const sampleTours = [
  // ================================================================
  // TOUR 1 — TASHKENT CITY TOUR
  // ================================================================
  {
    id: "tashkent-city-tour",
    duration: 1,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Tashkent City Tour",
      uz: "Toshkent Shahar Ekskursiyasi",
      ru: "Экскурсия по Ташкенту",
    },
    description: {
      en: "Tashkent is the capital of Uzbekistan and one of the largest cities in Central Asia, with a history spanning over 2,200 years. I will take you through the city's architectural monuments and bazaars — from ancient Islamic heritage to Soviet-era grandeur and modern Tashkent. We will spend the full day sightseeing, or if your time is limited, we can focus on the city highlights.",
      uz: "Toshkent — O'zbekiston poytaxti va Markaziy Osiyodagi eng yirik shaharlardan biri bo'lib, 2200 yildan ortiq tarixga ega. Men sizni shaharning me'moriy obidalari va bozorlaridan olib o'taman — qadimiy islom merosidan sovet davri ulug'vorligiga va zamonaviy Toshkentga qadar. Butun kun davomida sayohat qilamiz yoki vaqtingiz cheklangan bo'lsa, shaharning asosiy diqqatga sazovor joylarini ko'rsataman.",
      ru: "Ташкент — столица Узбекистана и один из крупнейших городов Центральной Азии с историей более 2200 лет. Я проведу вас через архитектурные памятники и базары города — от древнего исламского наследия до советского величия и современного Ташкента. Мы проведём весь день, осматривая достопримечательности, или, если ваше время ограничено, сосредоточимся на главных местах города.",
    },
    includes: {
      en: [
        "Private transport & driver throughout the day",
        "Professional licensed tour guide (Samandar)",
        "All entrance fees to monuments",
        "Tashkent Metro art stations tour",
        "Traditional Uzbek lunch at a local restaurant",
        "Hotel pickup and drop-off",
      ],
      uz: [
        "Kun davomida xususiy transport va haydovchi",
        "Professional litsenziyalangan gid (Samandar)",
        "Barcha obidalarga kirish chiptalari",
        "Toshkent metro san'at stansiyalari sayrasi",
        "Mahalliy restoranda an'anaviy o'zbek tushlig'i",
        "Mehmonxonadan olib ketish va kuzatib qo'yish",
      ],
      ru: [
        "Частный транспорт и водитель на весь день",
        "Профессиональный лицензированный гид (Самандар)",
        "Входные билеты ко всем памятникам",
        "Тур по художественным станциям Ташкентского метро",
        "Традиционный узбекский обед в местном ресторане",
        "Трансфер от/до отеля",
      ],
    },
    itinerary: [
      {
        title: {
          en: "09:00 — Start of the Tour",
          uz: "09:00 — Sayraning boshlanishi",
          ru: "09:00 — Начало экскурсии",
        },
        description: {
          en: "Hotel pickup. Drive to the Old City. Visit the Memorial for the Victims of Repression, overview of the Tashkent TV Tower (distant view), Central Asian Plov Center, Minor Mosque (White Mosque), and the Monument of Courage.",
          uz: "Mehmonxonadan olib ketish. Eski shaharga yo'l olish. Qatag'on qurbonlari xotirasiga bag'ishlangan memorial, Toshkent Teleminorasi (uzoqdan ko'rinish), Markaziy Osiyo Osh markazi, Minor masjidi (Oq masjid) va Jasorat monumentini ziyorat qilish.",
          ru: "Встреча у отеля. Поездка в Старый город. Посещение Мемориала жертвам репрессий, обзор Ташкентской телебашни (вид издали), Центра плова Средней Азии, мечети Минор (Белая мечеть) и Монумента Мужества.",
        },
      },
      {
        title: {
          en: "Khast Imam & Old City",
          uz: "Xast Imom va Eski Shahar",
          ru: "Хаст Имам и Старый город",
        },
        description: {
          en: "Visit the Khast Imam architectural complex: Kaffal-as-Shoshi Mausoleum, Barak-Khan Madrasah, Khast-Imam Mosque, and Mui-Muborak Madrasah — home to the original Koran of the Caliph Usman. Walk through the residential blocks of the old town.",
          uz: "Xast Imom me'moriy majmuasini ziyorat qiling: Kaffol Shoshiy maqbarasi, Baroqxon madrasasi, Xast Imom masjidi va Muyi Muborak madrasasi — Xalifa Usmon Qur'onining asl nusxasi saqlanadigan joy. Eski shahar turar-joy kvartallarida yuring.",
          ru: "Посещение архитектурного комплекса Хаст Имам: мавзолей Каффаль-аш-Шаши, медресе Баракхан, мечеть Хаст Имам и медресе Муи Мубарак — хранилище подлинного Корана халифа Усмана. Прогулка по жилым кварталам старого города.",
        },
      },
      {
        title: {
          en: "13:00–14:00 — Lunch",
          uz: "13:00–14:00 — Tushlik",
          ru: "13:00–14:00 — Обед",
        },
        description: {
          en: "Traditional Uzbek lunch at a local restaurant. Try authentic plov, samsa, shashlik, and fresh bread (non).",
          uz: "Mahalliy restoranda an'anaviy o'zbek tushlig'i. Haqiqiy palov, samsa, shashlik va yangi non (non) tatib ko'ring.",
          ru: "Традиционный узбекский обед в местном ресторане. Попробуйте настоящий плов, самсу, шашлык и свежий хлеб (нон).",
        },
      },
      {
        title: {
          en: "Chorsu Bazaar & Metro Tour",
          uz: "Chorsu bozori va Metro sayrasi",
          ru: "Базар Чорсу и экскурсия по метро",
        },
        description: {
          en: "Visit Chorsu Market — the most picturesque bazaar in the city. Then ride the famous Tashkent Metro, visiting the most beautifully decorated art stations. Continue to Mustakillik Square (Independence Square), Palace of the Grand Duke Romanov, Theater of Alisher Navoi (external view), Amir Temur Square, and Tashkent Metro.",
          uz: "Chorsu bozorini ziyorat qiling — shahardagi eng manzarali bozor. Keyin mashhur Toshkent metrosi bilan sayohat qiling va eng chiroyli bezatilgan san'at stansiyalarini ko'ring. So'ngra Mustaqillik maydoni, Romanovlar katta gertsogi saroyi, Alisher Navoiy teatri (tashqi ko'rinish), Amir Temur maydoni va Toshkent metrosiga o'ting.",
          ru: "Посещение базара Чорсу — самого живописного рынка города. Затем поездка на знаменитом Ташкентском метро с посещением красивейших художественных станций. Продолжение на площадь Мустакиллик (Независимости), Дворец Великого Князя Романова, Театр Алишера Навои (внешний вид), площадь Амира Темура.",
        },
      },
      {
        title: {
          en: "18:00 — End of Tour",
          uz: "18:00 — Sayraning yakunlanishi",
          ru: "18:00 — Конец экскурсии",
        },
        description: {
          en: "Transfer back to your hotel or any desired location in Tashkent.",
          uz: "Mehmonxonangizga yoki Toshkentdagi istalgan joyga transfer.",
          ru: "Трансфер обратно в отель или в любое желаемое место в Ташкенте.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 2 — DAY TOUR TO SAMARKAND
  // ================================================================
  {
    id: "samarkand-day-tour",
    duration: 1,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Day Tour to Samarkand from Tashkent",
      uz: "Toshkentdan Samarqandga Bir Kunlik Sayohat",
      ru: "Однодневная поездка в Самарканд из Ташкента",
    },
    description: {
      en: "Samarkand is the most ancient city of Uzbekistan and Central Asia — the crossroads of the greatest Silk Road and the melting pot of world cultures. Founded in the 7th century BC, as ancient as Rome, Athens and Babylon, Samarkand was the capital of Tamerlane's Empire and one of the best-preserved Islamic architecture cities in the world. The legendary Registan Square has been considered one of the main architectural wonders of Central Asia for centuries.",
      uz: "Samarqand — O'zbekiston va Markaziy Osiyoning eng qadimiy shahri, buyuk Ipak Yo'lining kesishgan nuqtasi va jahon madaniyatlarining qorishma maskani. Miloddan avvalgi 7-asrda asos solingan, Rim, Afina va Bobil kabi qadimiy Samarqand Amir Temur imperiyasining poytaxti va dunyodagi eng yaxshi saqlangan islom me'morchiligi shaharlaridan biri bo'lgan. Afsonaviy Registon maydoni asrlar davomida Markaziy Osiyoning asosiy me'moriy mo'jizalaridan biri hisoblanib kelgan.",
      ru: "Самарканд — древнейший город Узбекистана и Центральной Азии, перекрёсток великого Шёлкового пути и плавильный котёл мировых культур. Основанный в VII веке до н.э., столь же древний, как Рим, Афины и Вавилон, Самарканд был столицей империи Тамерлана и одним из лучших городов исламской архитектуры в мире. Легендарная площадь Регистан веками считается одним из главных архитектурных чудес Центральной Азии.",
    },
    includes: {
      en: [
        "Round-trip high-speed train tickets Tashkent–Samarkand (2h 10min)",
        "Professional licensed tour guide (Samandar)",
        "All entrance fees",
        "Traditional Samarkand lunch (plov, samsa, shashlik)",
        "Tashkent railway station transfer",
      ],
      uz: [
        "Toshkent–Samarqand yuqori tezlikdagi poyezdda ikki tomonlama chipta (2 soat 10 daqiqa)",
        "Professional litsenziyalangan gid (Samandar)",
        "Barcha kirish chiptalari",
        "An'anaviy Samarqand tushlig'i (palov, samsa, shashlik)",
        "Toshkent temir yo'l stansiyasiga transfer",
      ],
      ru: [
        "Билеты на скоростной поезд туда-обратно Ташкент–Самарканд (2ч 10мин)",
        "Профессиональный лицензированный гид (Самандар)",
        "Все входные билеты",
        "Традиционный самаркандский обед (плов, самса, шашлык)",
        "Трансфер до/от железнодорожного вокзала Ташкента",
      ],
    },
    itinerary: [
      {
        title: {
          en: "07:15 — Transfer to Railway Station",
          uz: "07:15 — Temir yo'l stansiyasiga transfer",
          ru: "07:15 — Трансфер на ж/д вокзал",
        },
        description: {
          en: "Hotel pickup and transfer to Tashkent Central Railway Station.",
          uz: "Mehmonxonadan olib ketish va Toshkent markaziy temir yo'l stansiyasiga transfer.",
          ru: "Встреча у отеля и трансфер на Центральный железнодорожный вокзал Ташкента.",
        },
      },
      {
        title: {
          en: "08:00 — Departure to Samarkand",
          uz: "08:00 — Samarqandga jo'nash",
          ru: "08:00 — Отправление в Самарканд",
        },
        description: {
          en: 'Departure by high-speed train "Afrosiyob" to Samarkand (2 hours 10 minutes).',
          uz: '"Afrosiyob" yuqori tezlikdagi poyezdida Samarqandga jo\'nash (2 soat 10 daqiqa).',
          ru: 'Отправление скоростным поездом "Афросиёб" в Самарканд (2 часа 10 минут).',
        },
      },
      {
        title: {
          en: "10:10 — Samarkand Sightseeing",
          uz: "10:10 — Samarqandni ko'rish",
          ru: "10:10 — Осмотр достопримечательностей Самарканда",
        },
        description: {
          en: "Arrival in Samarkand. Visit: Gur-e-Amir Mausoleum (Tamerlane's and Timurids' tombs), Registan Ensemble — the most famous cultic site in Uzbekistan with three magnificent madrasahs (Ulugbek Madrasah, Sher-Dor Madrasah, Tillya-Kari Madrasah). Old City and Khast-Imam architectural complex. Bibi-Khanum Mosque, Siab Bazaar, Ulugbek Observatory, Shakhi-Zinda Necropolis.",
          uz: "Samarqandga kelish. Ziyorat joylari: Go'ri Amir maqbarasi (Amir Temur va Temuriylar qabrlari), Registon ansambli — uchta muhtasham madrasali O'zbekistondagi eng mashhur tarixiy joy (Ulug'bek madrasasi, Sher-Dor madrasasi, Tillo-Kori madrasasi). Eski shahar va Xast Imom me'moriy majmuasi. Bibi Xonim masjidi, Siyob bozori, Ulug'bek rasadxonasi, Shohizinda nekropoli.",
          ru: "Прибытие в Самарканд. Посещение: мавзолей Гур-э-Амир (гробницы Тамерлана и Тимуридов), ансамбль Регистан — самое известное культовое место Узбекистана с тремя великолепными медресе (медресе Улугбека, Шер-Дор, Тилля-Кари). Старый город и архитектурный комплекс Хаст Имам. Мечеть Биби-Ханым, базар Сиаб, обсерватория Улугбека, некрополь Шахи-Зинда.",
        },
      },
      {
        title: {
          en: "Lunch in Samarkand",
          uz: "Samarqandda Tushlik",
          ru: "Обед в Самарканде",
        },
        description: {
          en: "Traditional Samarkand lunch at a local restaurant. Samarkand plov is considered the best in Uzbekistan.",
          uz: "Mahalliy restoranda an'anaviy Samarqand tushlig'i. Samarqand palovi O'zbekistondagi eng yaxshi deb hisoblanadi.",
          ru: "Традиционный самаркандский обед в местном ресторане. Самаркандский плов считается лучшим в Узбекистане.",
        },
      },
      {
        title: {
          en: "16:20 — Return to Tashkent",
          uz: "16:20 — Toshkentga qaytish",
          ru: "16:20 — Возвращение в Ташкент",
        },
        description: {
          en: "Transfer to Samarkand railway station. Departure at 17:00 by high-speed train. Arrival in Tashkent at 19:10. Transfer to your hotel.",
          uz: "Samarqand temir yo'l stansiyasiga transfer. 17:00 da yuqori tezlikdagi poyezdda jo'nash. 19:10 da Toshkentga yetib kelish. Mehmonxonangizga transfer.",
          ru: "Трансфер на ж/д вокзал Самарканда. Отправление в 17:00 скоростным поездом. Прибытие в Ташкент в 19:10. Трансфер в отель.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 3 — DAY TOUR TO BUKHARA
  // ================================================================
  {
    id: "bukhara-day-tour",
    duration: 1,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Day Tour to Bukhara",
      uz: "Buxoroga Bir Kunlik Sayohat",
      ru: "Однодневная поездка в Бухару",
    },
    description: {
      en: "Bukhara is an ancient city on the Silk Road trade route between East and West, one of the most important medieval centers of Islamic theology and culture. It still contains hundreds of well-preserved mosques, madrassas, bazaars and caravanserais dating largely from the 9th to the 17th centuries. Bukhara's old city is a UNESCO World Heritage Site.",
      uz: "Buxoro — Sharq va G'arb o'rtasidagi Ipak Yo'li savdo yo'lidagi qadimiy shahar, islom ilohiyoti va madaniyatining eng muhim o'rta asr markazlaridan biri. U hozir ham asosan 9-17-asrlarga oid yuzlab yaxshi saqlangan masjidlar, madrasalar, bozorlar va karvonsaroylarni o'z ichiga oladi. Buxoro eski shahri YuNESKO Jahon merosi ro'yxatiga kiritilgan.",
      ru: "Бухара — древний город на торговом пути Шёлкового пути между Востоком и Западом, один из важнейших средневековых центров исламского богословия и культуры. Здесь сохранились сотни хорошо сохранившихся мечетей, медресе, базаров и каравансараев, относящихся преимущественно к IX–XVII векам. Старый город Бухары включён в список Всемирного наследия ЮНЕСКО.",
    },
    includes: {
      en: [
        "Round-trip train or flight Tashkent–Bukhara",
        "Professional licensed tour guide (Samandar)",
        "All entrance fees",
        "Traditional Bukhara lunch",
        "All local transfers",
      ],
      uz: [
        "Toshkent–Buxoro ikki tomonlama poyezd yoki reys",
        "Professional litsenziyalangan gid (Samandar)",
        "Barcha kirish chiptalari",
        "An'anaviy Buxoro tushlig'i",
        "Barcha mahalliy transferlar",
      ],
      ru: [
        "Билеты туда-обратно Ташкент–Бухара (поезд или рейс)",
        "Профессиональный лицензированный гид (Самандар)",
        "Все входные билеты",
        "Традиционный бухарский обед",
        "Все местные трансферы",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Arrival in Bukhara",
          uz: "Buxoroga yetib kelish",
          ru: "Прибытие в Бухару",
        },
        description: {
          en: "Transfer to the old city. Begin sightseeing: Samanids Mausoleum — the oldest Islamic building in Central Asia (9th–10th centuries), Chasma-Ayub Mausoleum, Bolo-House Mosque, The Ark (Bukhara Emir's ancient fortress-residence).",
          uz: "Eski shaharga transfer. Sayohatni boshlash: Somoniylar maqbarasi — Markaziy Osiyodagi eng qadimiy islom binosi (9–10-asrlar), Chashmai Ayyub maqbarasi, Bolo Hovuz masjidi, Ark (Buxoro amirining qadimiy qal'a-qarorgohi).",
          ru: "Трансфер в старый город. Начало осмотра: мавзолей Саманидов — древнейшее исламское сооружение Центральной Азии (IX–X вв.), мавзолей Чашма-Айюб, мечеть Боло-Хауз, Арк (древняя крепость-резиденция эмиров Бухары).",
        },
      },
      {
        title: {
          en: "Poi-Kalon Complex & Trading Domes",
          uz: "Poi Kalon majmuasi va savdo gumurazlari",
          ru: "Комплекс Пои Калян и торговые купола",
        },
        description: {
          en: "Poi-Kalon Ensemble: Mir-Arab Madrasah, Kalon Minaret (47 meters, 12th century), Kalon Mosque. Visit the medieval trading domes: Toki Zargaron (Jewellers' Dome), Tim Abdullah Khan, Toki Sarrafon. Lyabi-Hauz Ensemble — the heart of old Bukhara with a beautiful reflecting pool.",
          uz: "Poi Kalon ansambli: Mir Arab madrasasi, Kalon minorasi (47 metr, 12-asr), Kalon masjidi. O'rta asr savdo gumurazlarini ziyorat qiling: Toqi Sarrofon, Toqi Telpakfurushon, Tim Abdullaxon. Lyabi Hovuz ansambli — chiroyli hovuz bilan eski Buxoroning qalbi.",
          ru: "Ансамбль Пои Калян: медресе Мир-Араб, минарет Калян (47 м, XII в.), мечеть Калян. Посещение средневековых торговых куполов: Токи Заргарон, Тим Абдулла Хан, Токи Саррофон. Ансамбль Ляби-Хауз — сердце старой Бухары с красивым отражающим бассейном.",
        },
      },
      {
        title: {
          en: "Chor Minor & Return",
          uz: "Chor Minor va qaytish",
          ru: "Чор Минор и возвращение",
        },
        description: {
          en: "Chor Minor (Four Minarets) — one of the most unique buildings in Bukhara. Magoki Attori Mosque — one of the oldest mosques in Central Asia. Shopping for local crafts: silk scarves, ceramics, and miniatures. Transfer to station for return to Tashkent.",
          uz: "Chor Minor (To'rt minora) — Buxorodagi eng o'ziga xos binolardan biri. Magoki Attori masjidi — Markaziy Osiyodagi eng qadimiy masjidlardan biri. Mahalliy hunarmandchilik buyumlari xaridlari: ipak ro'mollar, kulolchilik va miniatyuralar. Toshkentga qaytish uchun stansiyaga transfer.",
          ru: "Чор Минор (Четыре минарета) — одно из самых уникальных зданий Бухары. Мечеть Магоки-Аттори — одна из древнейших мечетей Центральной Азии. Покупка местных ремёсел: шёлковые платки, керамика, миниатюры. Трансфер на вокзал для возвращения в Ташкент.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 4 — KHIVA / URGENCH
  // ================================================================
  {
    id: "khiva-urgench-tour",
    duration: 2,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Khiva & Urgench Tour",
      uz: "Xiva va Urganch Sayrasi",
      ru: "Тур Хива и Ургенч",
    },
    description: {
      en: "Khiva is one of the most extraordinary cities in Central Asia — an entire ancient city enclosed within walls, perfectly preserved like an open-air museum. The Ichan Kala (inner city) is a UNESCO World Heritage Site. Here cultural and spiritual values have been concentrated for centuries: outstanding scientific centres, schools, architecture, craftsmanship and applied art flourished. Many of the world's greatest scholars — Avicenna, al-Khorezmi, Mirzo Ulugbek, Nakshbandi, al-Bukhoriy, at-Termeziy, Beruniy, Alisher Navoiy — were born in this region.",
      uz: "Xiva — Markaziy Osiyodagi eng g'ayrioddiy shaharlardan biri bo'lib, devorlar bilan o'ralgan butun qadimiy shahar ochiq muzey kabi mukammal saqlanib qolgan. Ichan Qal'a (ichki shahar) YuNESKO Jahon merosi ro'yxatiga kiritilgan. Bu yerda asrlar davomida madaniy va ma'naviy qadriyatlar to'plangan: ajoyib ilmiy markazlar, maktablar, me'morchilik, hunarmandchilik va amaliy san'at gullab-yashnagan. Dunyodagi ko'plab buyuk olimlar — Ibn Sino, al-Xorazmiy, Mirzo Ulug'bek, Naqshbandiy, al-Buxoriy, at-Termiziy, Beruniy, Alisher Navoiy — bu mintaqada tug'ilgan.",
      ru: "Хива — один из самых удивительных городов Центральной Азии: целый древний город, заключённый в стены, сохранившийся как музей под открытым небом. Ичан Кала (внутренний город) включена в список Всемирного наследия ЮНЕСКО. Здесь веками концентрировались культурные и духовные ценности: процветали научные центры, школы, архитектура, ремёсла и прикладное искусство. Многие великие учёные мира — Авиценна, аль-Хорезми, Мирзо Улугбек, Накшбанди, аль-Бухари, ат-Термизи, Беруни, Алишер Навои — родились в этом регионе.",
    },
    includes: {
      en: [
        "Flight or fast train Tashkent–Urgench–Tashkent",
        "Hotel with breakfast (1 night in Khiva old city)",
        "Professional licensed tour guide (Samandar)",
        "All entrance fees to monuments",
        "All local transport and transfers",
        "Sunset walk on Khiva city walls",
      ],
      uz: [
        "Toshkent–Urganch–Toshkent reys yoki tez poyezd",
        "Nonushta bilan mehmonxona (Xiva eski shahrida 1 kecha)",
        "Professional litsenziyalangan gid (Samandar)",
        "Barcha obidalarga kirish chiptalari",
        "Barcha mahalliy transport va transferlar",
        "Xiva shahar devorlarida quyosh botishini tomosha qilish",
      ],
      ru: [
        "Перелёт или скоростной поезд Ташкент–Ургенч–Ташкент",
        "Отель с завтраком (1 ночь в старом городе Хивы)",
        "Профессиональный лицензированный гид (Самандар)",
        "Входные билеты ко всем памятникам",
        "Весь местный транспорт и трансферы",
        "Вечерняя прогулка по городским стенам Хивы",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Day 1 — Arrival in Urgench, Transfer to Khiva",
          uz: "1-kun — Urganchga yetib kelish, Xivaga transfer",
          ru: "День 1 — Прибытие в Ургенч, трансфер в Хиву",
        },
        description: {
          en: "Flight from Tashkent to Urgench (1.5 hours). Transfer to Khiva (30 minutes). Check-in to a hotel inside the ancient Ichan Kala. First walk through the illuminated old city in the evening.",
          uz: "Toshkentdan Urganchga reys (1,5 soat). Xivaga transfer (30 daqiqa). Qadimiy Ichan Qal'a ichidagi mehmonxonaga joylashish. Kechqurun yoritilgan eski shaharda birinchi sayr.",
          ru: "Рейс из Ташкента в Ургенч (1,5 часа). Трансфер в Хиву (30 минут). Заселение в отель внутри древней Ичан Калы. Первая вечерняя прогулка по освещённому старому городу.",
        },
      },
      {
        title: {
          en: "Day 2 — Full Khiva City Tour",
          uz: "2-kun — Xiva shahrini to'liq ko'rish",
          ru: "День 2 — Полная экскурсия по Хиве",
        },
        description: {
          en: "Full day inside Ichan Kala: Kunya-Ark Citadel, Mukhammad-Aminxon Madrasah, Kurya-Ark fortress, Mukhammad-Rakhimxon Madrasah, Pakhlavan Mahmud's Mausoleum, Islam-Khoja Madrasah and Minaret. Afternoon: Djuma Mosque (213 wooden columns), Museum of Khoresmian Music, Tash-Hauli Palace, Kutlug-Inak-Murad Madrasah. Sunset from the city walls — one of the most spectacular views in Uzbekistan. Flight back to Tashkent.",
          uz: "Ichan Qal'ada to'liq kun: Ko'hna Ark qal'asi, Muhammad Aminxon madrasasi, Ko'rg'on Ark qal'asi, Muhammad Rahimxon madrasasi, Pahlavon Mahmud maqbarasi, Islom Xo'ja madrasasi va minorasi. Tushdan keyin: Juma masjidi (213 yog'och ustun), Xorazm musiqa muzeyi, Tosh Hovli saroyi, Qutlug'murod Inoq madrasasi. Shahar devorlaridan quyosh botishi — O'zbekistondagi eng spektakulyar manzaralardan biri. Toshkentga qaytish reysiga transfer.",
          ru: "Полный день в Ичан Кале: цитадель Куня-Арк, медресе Мухаммад Аминхана, крепость Курья-Арк, медресе Мухаммад Рахимхана, мавзолей Пахлавана Махмуда, медресе и минарет Ислам-Ходжи. После обеда: мечеть Джума (213 деревянных колонн), Музей хорезмийской музыки, дворец Таш-Хаули, медресе Кутлуг-Мурад Инак. Закат с городских стен — один из самых захватывающих видов в Узбекистане. Трансфер на рейс обратно в Ташкент.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 5 — NUKUS / KARAKALPAKSTAN
  // ================================================================
  {
    id: "nukus-karakalpakstan-tour",
    duration: 2,
    price: 0,
    featured: false,
    published: true,
    images: [],
    title: {
      en: "Nukus & Karakalpakstan Tour",
      uz: "Nukus va Qoraqalpog'iston Sayrasi",
      ru: "Тур Нукус и Каракалпакстан",
    },
    description: {
      en: "Karakalpakstan is one of the most unique and least visited regions of Uzbekistan. This tour takes you to Nukus — home to the famous Savitsky Museum (one of the largest collections of Russian avant-garde art in the world), the Aral Sea disaster zone in Moynak, ancient Zoroastrian fortresses, and the ruins of ancient Khorezm civilization.",
      uz: "Qoraqalpog'iston — O'zbekistonning eng noyob va kam tashrif buyuriladigan hududlaridan biri. Bu sayohat sizni Nukusga olib boradi — mashhur Savitskiy muzeyi (dunyodagi rus avangard san'atining eng katta to'plamlaridan biri), Mo'ynaq shahridagi Orol dengizi falokati zonasi, qadimiy zardushtiylik qal'alari va qadimiy Xorazm tsivilizatsiyasi xarobalari.",
      ru: "Каракалпакстан — один из самых уникальных и малопосещаемых регионов Узбекистана. Этот тур везёт вас в Нукус — дом знаменитого музея Савицкого (одна из крупнейших коллекций русского авангарда в мире), зону Аральской катастрофы в Муйнаке, древние зороастрийские крепости и руины древней цивилизации Хорезма.",
    },
    includes: {
      en: [
        "Transport Tashkent–Nukus by car or flight",
        "Hotel with breakfast (1 night in Nukus)",
        "Professional licensed tour guide (Samandar)",
        "Savitsky Museum entrance",
        "All local transport",
        "Visit to Moynak Aral Sea ghost ships",
      ],
      uz: [
        "Toshkent–Nukus avtomobil yoki reys bilan transport",
        "Nonushta bilan mehmonxona (Nukusda 1 kecha)",
        "Professional litsenziyalangan gid (Samandar)",
        "Savitskiy muzeyi kirish chiptasi",
        "Barcha mahalliy transport",
        "Mo'ynaq Orol dengizi arvoh kemalari tashrifi",
      ],
      ru: [
        "Транспорт Ташкент–Нукус на машине или рейсом",
        "Отель с завтраком (1 ночь в Нукусе)",
        "Профессиональный лицензированный гид (Самандар)",
        "Вход в Музей Савицкого",
        "Весь местный транспорт",
        "Посещение кораблей-призраков Аральского моря в Муйнаке",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Day 1 — Tashkent to Nukus, Moynak",
          uz: "1-kun — Toshkentdan Nukusga, Mo'ynaq",
          ru: "День 1 — Ташкент–Нукус, Муйнак",
        },
        description: {
          en: "Depart by car to Moynak (3 hours from Nukus). Arrival in Moynak around noon. Visit the Cemetery of the Dead Ships on the former coast of the Aral Sea — one of the most surreal and haunting landscapes in the world. Visit the museum of local lore. Drive back to Nukus. On the way back, visit Khodzheyli city, Mizdakhan necropolis — the ancient cemetery, and view Gaur-Kala — the ruins of the ancient fortress of Zoroastrians. Arrival in Nukus. Free time in hotel.",
          uz: "Mo'ynaqqa avtomobil bilan jo'nash (Nukusdan 3 soat). Mo'ynaqqa tushlikda yetib kelish. Orol dengizining sobiq qirg'og'idagi o'lik kemalar qabristoni tashrifi — dunyodagi eng g'ayrioddiy va xayratlanarli manzaralardan biri. Mahalliy o'lkashunoslik muzeyiga tashrif. Nukusga qaytish. Qaytayotganda Xo'jayli shahri, Mizdahkon nekropoli — qadimiy qabristonni ko'rish va Govurkala — qadimiy zardushtiylar qal'asi xarobalarini tomosha qilish. Nukusga yetib kelish. Mehmonxonada bo'sh vaqt.",
          ru: "Отправление на машине в Муйнак (3 часа от Нукуса). Прибытие в Муйнак около полудня. Посещение Кладбища мёртвых кораблей на бывшем берегу Аральского моря — одного из самых сюрреалистических и тревожащих пейзажей в мире. Посещение музея местного края. Возвращение в Нукус. По дороге — посещение Хожейли, некрополь Миздахкан — древнее кладбище, и осмотр Гаур-Калы — руин древней крепости зороастрийцев. Прибытие в Нукус. Свободное время в отеле.",
        },
      },
      {
        title: {
          en: "Day 2 — Savitsky Museum & Ancient Fortresses",
          uz: "2-kun — Savitskiy muzeyi va qadimiy qal'alar",
          ru: "День 2 — Музей Савицкого и древние крепости",
        },
        description: {
          en: "Morning visit to the Savitsky Art Museum in Nukus — one of the largest collections of Russian avant-garde art outside Russia, with over 90,000 items. Then explore the ancient Khorezm fortresses in the desert: Toprak-Kala, Ayaz-Kala (with stunning views over the Kyzylkum Desert). Departure back to Tashkent by car or flight.",
          uz: "Ertalab Nukusdagi Savitskiy San'at muzeyiga tashrif — Rossiyadan tashqarida 90 000 dan ortiq eksponat bilan rus avangard san'atining eng katta to'plamlaridan biri. Keyin cho'ldagi qadimiy Xorazm qal'alarini o'rganing: Toprok Qal'a, Ayoz Qal'a (Qizilqum cho'li ustidan hayratlanarli manzaralar bilan). Avtomobil yoki reys bilan Toshkentga jo'nash.",
          ru: "Утреннее посещение Нукусского художественного музея Савицкого — одной из крупнейших коллекций русского авангарда за пределами России, более 90 000 экспонатов. Затем исследование древних хорезмийских крепостей в пустыне: Топрак-Кала, Аяз-Кала (с захватывающими видами над пустыней Кызылкум). Отправление обратно в Ташкент на машине или рейсом.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 6 — DAY TOUR TO CHIMGAN & AMIRSOY
  // ================================================================
  {
    id: "chimgan-amirsoy-day-tour",
    duration: 1,
    price: 0,
    featured: false,
    published: true,
    images: [],
    title: {
      en: "Day Tour to Chimgan Mountains & Charvak Lake",
      uz: "Chimgan Tog'lari va Charvak Ko'liga Bir Kunlik Sayohat",
      ru: "Однодневная поездка в горы Чимган и на Чарвакское озеро",
    },
    description: {
      en: "Escape the city for a day of fresh mountain air and spectacular scenery. The Chimgan Mountains and Charvak Reservoir are popular spots outside Tashkent, just two hours away. The main peak of the area — Greater Chimgan (3,309 m / 10,856 ft) — looks like a peak of a giant star. Lake Charvak is a popular resort in the Tashkent region, visited by thousands of people from all over Uzbekistan and neighbouring countries. The Amirsoy mountain resort offers a cable car ride up to 2,290 meters above sea level.",
      uz: "Bir kunlik toza tog' havosi va hayratlanarli manzaralar uchun shahardan qoching. Chimgan tog'lari va Charvak suv ombori Toshkent tashqarisidagi mashhur joy bo'lib, atigi ikki soat masofada joylashgan. Hududning asosiy cho'qqisi — Katta Chimgan (3309 m) — ulkan yulduzning cho'qqisiga o'xshaydi. Charvak ko'li Toshkent viloyatidagi mashhur kurort bo'lib, butun O'zbekiston va qo'shni mamlakatlardan minglab odamlar tashrif buyuradi. Amirsoy tog' kurortida dengiz sathidan 2290 metr balandlikka kanat yo'li sayohati mavjud.",
      ru: "Вырвитесь из города на день свежего горного воздуха и захватывающих видов. Горы Чимган и Чарвакское водохранилище — популярные места за пределами Ташкента, всего в двух часах езды. Главная вершина района — Большой Чимган (3309 м) — выглядит как вершина гигантской звезды. Чарвакское озеро — популярный курорт Ташкентской области, который посещают тысячи людей со всего Узбекистана и соседних стран. Горный курорт Амирсой предлагает поездку на канатной дороге на высоту 2290 метров над уровнем моря.",
    },
    includes: {
      en: [
        "Private van or sedan from Tashkent (round trip)",
        "Professional tour guide (Samandar)",
        "Amirsoy cable car tickets",
        "Charvak Lake visit",
        "Picnic lunch with mountain views",
      ],
      uz: [
        "Toshkentdan xususiy avtobus yoki sedan (ikki tomonlama)",
        "Professional gid (Samandar)",
        "Amirsoy kanat yo'li chiptalari",
        "Charvak ko'liga tashrif",
        "Tog' manzaralari bilan piknik tushlig'i",
      ],
      ru: [
        "Частный микроавтобус или седан из Ташкента (туда-обратно)",
        "Профессиональный гид (Самандар)",
        "Билеты на канатную дорогу Амирсой",
        "Посещение Чарвакского озера",
        "Пикник-обед с горными видами",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Morning — Departure from Tashkent",
          uz: "Ertalab — Toshkentdan jo'nash",
          ru: "Утро — Отправление из Ташкента",
        },
        description: {
          en: "Depart by van or sedan from Tashkent to Amirsoy Skiing Resort (about 2 hours drive). Take a ride on the cable car to 2,290 m above sea level. Enjoy stunning panoramic views of the Tian Shan mountain range. Breathe clean mountain air, see giant plane trees and petroglyphs — ancient rock carvings.",
          uz: "Toshkentdan Amirsoy tog' kurortiga avtobus yoki sedan bilan jo'nash (taxminan 2 soat). Dengiz sathidan 2290 m balandlikga kanat yo'lida sayohat. Tyan-Shan tog' tizmalarining hayratlanarli panoramik manzaralaridan bahramand bo'ling. Toza tog' havosini nafas oling, ulkan chinorlarni va petrogliflarni — qadimiy tosh o'ymakorliklarini ko'ring.",
          ru: "Отправление на микроавтобусе или седане из Ташкента на горнолыжный курорт Амирсой (около 2 часов езды). Поездка на канатной дороге на высоту 2290 м над уровнем моря. Наслаждайтесь потрясающими панорамными видами горного хребта Тянь-Шань. Дышите чистым горным воздухом, смотрите на гигантские чинары и петроглифы — древние наскальные рисунки.",
        },
      },
      {
        title: {
          en: "Afternoon — Charvak Lake",
          uz: "Tushdan keyin — Charvak ko'li",
          ru: "После обеда — Чарвакское озеро",
        },
        description: {
          en: "Continue drive to Charvak Lake. The reservoir was created in 1970 by damming the Chirchiq River. The lake is surrounded by beautiful mountains on three sides. Enjoy the turquoise waters, swim in summer, or simply relax with the mountain scenery. Picnic lunch by the lake. Evening return to Tashkent.",
          uz: "Charvak ko'liga sayohati davom ettirish. Suv ombori 1970 yilda Chirchiq daryasini to'sib yaratilgan. Ko'l uch tomondan chiroyli tog'lar bilan o'ralgan. Yozda moviy suvlarda suzib, tog' manzarasida dam oling yoki shunchaki dam oling. Ko'l bo'yida piknik tushlig'i. Kechqurun Toshkentga qaytish.",
          ru: "Продолжение поездки на Чарвакское озеро. Водохранилище было создано в 1970 году путём перекрытия реки Чирчик. Озеро окружено красивыми горами с трёх сторон. Наслаждайтесь бирюзовыми водами, купайтесь летом или просто отдыхайте с горным пейзажем. Пикник-обед у озера. Вечером возвращение в Ташкент.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 7 — DAY TOUR TO ZAAMIN
  // ================================================================
  {
    id: "zaamin-day-tour",
    duration: 1,
    price: 0,
    featured: false,
    published: true,
    images: [],
    title: {
      en: "Day Tour to Zaamin National Park",
      uz: "Zomin Milliy Bog'iga Bir Kunlik Sayohat",
      ru: "Однодневная поездка в Национальный парк Заамин",
    },
    description: {
      en: "Zaamin tourism zone is an ecologically pure region which has preserved its original appearance and has unique flora and fauna. Located in the Zaamin State Reserve in the Jizzakh Region of Uzbekistan, on the tourist route between Samarkand and Tashkent. It is known from history that Zaamin was part of one of the most ancient regions in Central Asia: Ustrushana, surrounded by ancient regions of Sogd, Bactria, Fergana and Chach. The age of Zaamin exceeds two thousand years. Zaamin is especially beautiful in spring and autumn.",
      uz: "Zomin turizm zonasi — o'z asl ko'rinishini saqlab qolgan va noyob o'simlik va hayvonot dunyosiga ega ekologik jihatdan toza hudud. Samarqand va Toshkent o'rtasidagi turist yo'nalishida, Jizzax viloyatidagi Zomin davlat qo'riqxonasi hududida joylashgan. Tarixdan ma'lumki, Zomin Markaziy Osiyodagi eng qadimiy hududlardan biri — Ustrushana tarkibida bo'lgan, qadimiy Sug'd, Baqtriya, Farg'ona va Choch hududlari bilan o'ralgan. Zominning yoshi ikki ming yildan oshadi. Zomin ayniqsa bahor va kuzda juda chiroyli bo'ladi.",
      ru: "Зааминская туристическая зона — экологически чистый регион, сохранивший первозданный облик и уникальную флору и фауну. Расположен на территории Зааминского государственного заповедника в Джизакской области Узбекистана, на туристическом маршруте между Самаркандом и Ташкентом. Из истории известно, что Заамин был частью одного из древнейших регионов Центральной Азии: Уструшана, окружённая древними областями Согда, Бактрии, Ферганы и Чача. Возраст Заамина превышает две тысячи лет. Заамин особенно красив весной и осенью.",
    },
    includes: {
      en: [
        "Private transport from Tashkent (round trip, ~3.5 hours each way)",
        "Professional tour guide (Samandar)",
        "National park entrance fee",
        "Hiking in the nature reserve",
        "Picnic lunch in the mountains",
      ],
      uz: [
        "Toshkentdan xususiy transport (ikki tomonlama, har tomoni ~3,5 soat)",
        "Professional gid (Samandar)",
        "Milliy bog'ga kirish to'lovi",
        "Tabiat qo'riqxonasida piyoda sayohat",
        "Tog'da piknik tushlig'i",
      ],
      ru: [
        "Частный транспорт из Ташкента (туда-обратно, ~3,5 часа в одну сторону)",
        "Профессиональный гид (Самандар)",
        "Вход в национальный парк",
        "Пешая прогулка в природном заповеднике",
        "Пикник-обед в горах",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Morning — Drive to Zaamin",
          uz: "Ertalab — Zominga sayohat",
          ru: "Утро — Поездка в Заамин",
        },
        description: {
          en: "Early morning departure from Tashkent. Drive through the Jizzakh steppes (approximately 3.5 hours). Arrival at the Zaamin State Reserve.",
          uz: "Toshkentdan erta tongda jo'nash. Jizzax dashtlari orqali sayohat (taxminan 3,5 soat). Zomin davlat qo'riqxonasiga yetib kelish.",
          ru: "Ранний выезд из Ташкента. Поездка через Джизакские степи (около 3,5 часов). Прибытие в Зааминский государственный заповедник.",
        },
      },
      {
        title: {
          en: "Exploring Zaamin",
          uz: "Zominni o'rganish",
          ru: "Исследование Заамина",
        },
        description: {
          en: "Explore the national park with a local ranger. In the depths of the pine forests you can find rare birds: ring dove, bunting, turtle dove, blackbird, Turkestan owl and Turkestan starling. Also here you can find the unusual white-winged grosbeak. The national park is an ideal place for ecotourism, and Zaamin mountains are a candidate for the UNESCO List of Natural World Heritage. Picnic lunch surrounded by nature. Return to Tashkent in the evening.",
          uz: "Mahalliy qo'riqchi bilan milliy bog'ni o'rganing. Qarag'ay o'rmonlarining qa'rida noyob qushlarni topishingiz mumkin: halqa kabutari, chirik, kaptarcha, qoratumshuk, Turkiston boyqushi va Turkiston starlingi. Shuningdek, bu yerda g'ayrioddiy oq qanotli qorachig'ini topishingiz mumkin. Milliy bog' ekologik turizm uchun ideal joy, Zomin tog'lari esa YuNESKO Tabiiy jahon merosi ro'yxatiga nomzod. Tabiat qo'ynida piknik tushlig'i. Kechqurun Toshkentga qaytish.",
          ru: "Исследование национального парка с местным рейнджером. В глубине сосновых лесов можно найти редких птиц: кольчатую горлицу, овсянку, горлицу, дрозда, туркестанскую сову и туркестанского скворца. Здесь также можно найти необычного белокрылого клеста. Национальный парк — идеальное место для экотуризма, горы Заамина являются кандидатом на включение в Список природного наследия ЮНЕСКО. Пикник на природе. Возвращение в Ташкент вечером.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 8 — DAY TOUR TO TAJIKISTAN (SEVEN LAKES)
  // ================================================================
  {
    id: "tajikistan-seven-lakes-tour",
    duration: 1,
    price: 0,
    featured: false,
    published: true,
    images: [],
    title: {
      en: "Day Tour to Tajikistan — Seven Lakes (Marguzor)",
      uz: "Tojikistonga Bir Kunlik Sayohat — Yetti Ko'l (Marg'uzor)",
      ru: "Однодневная поездка в Таджикистан — Семь озёр (Маргузор)",
    },
    description: {
      en: "Seven Lakes tour will immerse you in one of Tajikistan's most beautiful natural sights, located near Penjikent (Panjakent) in the country's far west. You'll enjoy a comfortable car ride along a winding gorge in the Fann Mountains, where each stretch of its meandering road leads to a new lake. Each of the seven lakes is unique in its size, depth, shape and amazing shades of color that collectively form rainbow hues of beauty. The famous 7 lakes of Tajikistan are commonly known as Marguzor Lakes, part of the Fann Mountains system. Their waters may vary from deep blue to indigo due to the sun position.",
      uz: "Yetti Ko'l sayrasi sizni Tojikistonning mamlakatning g'arbiy qismidagi Panjakent yaqinida joylashgan eng chiroyli tabiiy ko'rinishlaridan biriga olib boradi. Fon tog'larida zig'ir o'tkir do'ngliklar bo'ylab qulay avtomobil sayridan bahramand bo'lasiz, bu yerda zig'ir yo'lning har bir qismi yangi ko'lga olib boradi. Yetti ko'lning har biri o'lchami, chuqurligi, shakli va kamalak go'zalligi ranglari bilan noyobdir. Tojikistonning mashhur 7 ko'li Fon tog' tizimining bir qismi bo'lgan Marg'uzor ko'llari nomi bilan mashhur. Ularning suvlari quyosh holatiga qarab chuqur ko'kdan nil rangigacha o'zgarishi mumkin.",
      ru: "Тур к Семи озёрам погрузит вас в одно из красивейших природных мест Таджикистана, расположенных вблизи Пенджикента на дальнем западе страны. Вы насладитесь комфортной поездкой на машине по извилистому ущелью в Фанских горах, где каждый участок извилистой дороги ведёт к новому озеру. Каждое из семи озёр уникально своими размерами, глубиной, формой и удивительными оттенками цвета, которые в совокупности образуют радужные краски красоты. Знаменитые 7 озёр Таджикистана широко известны как озёра Маргузор, являющиеся частью системы Фанских гор.",
    },
    includes: {
      en: [
        "Private car from Samarkand to Penjikent and Seven Lakes (round trip)",
        "Professional tour guide (Samandar)",
        "Uzbekistan–Tajikistan border crossing assistance",
        "All transport within Tajikistan",
        "Penjikent city tour (ancient Sogdian city, 5,500 years old)",
        "Lunch at a local Tajik restaurant",
      ],
      uz: [
        "Samarqanddan Panjakent va Yetti Ko'lga xususiy avtomobil (ikki tomonlama)",
        "Professional gid (Samandar)",
        "O'zbekiston–Tojikiston chegarasidan o'tishda yordam",
        "Tojikiston ichidagi barcha transport",
        "Panjakent shahar sayrasi (5500 yillik qadimiy So'g'd shahri)",
        "Mahalliy tojik restoranida tushlik",
      ],
      ru: [
        "Частный автомобиль из Самарканда в Пенджикент и к Семи озёрам (туда-обратно)",
        "Профессиональный гид (Самандар)",
        "Помощь при пересечении границы Узбекистан–Таджикистан",
        "Весь транспорт по Таджикистану",
        "Экскурсия по Пенджикенту (древний согдийский город, 5500 лет)",
        "Обед в местном таджикском ресторане",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Early Morning — Departure from Samarkand",
          uz: "Erta Ertalab — Samarqanddan Jo'nash",
          ru: "Ранее утро — Отправление из Самарканда",
        },
        description: {
          en: "Early morning departure from Samarkand by private car. Drive to the Uzbekistan–Tajikistan border (approximately 1 hour). Border crossing formalities. Continue to Penjikent.",
          uz: "Samarqanddan xususiy avtomobil bilan erta tongda jo'nash. O'zbekiston–Tojikiston chegarasiga sayohat (taxminan 1 soat). Chegara rasmiyliklari. Panjakentga davom etish.",
          ru: "Ранний выезд из Самарканда на частном автомобиле. Поездка до узбекско-таджикской границы (около 1 часа). Пограничные формальности. Продолжение в Пенджикент.",
        },
      },
      {
        title: {
          en: "Penjikent City Tour",
          uz: "Panjakent Shahar Sayrasi",
          ru: "Экскурсия по Пенджикенту",
        },
        description: {
          en: "A short Penjikent city tour including the Ancient Sogdian City (Penjikent ruins, 5,500 years old), a religious Madrasah and Mosque, and the Central Bazaar with local handicrafts.",
          uz: "Qisqa Panjakent shahar sayrasi: qadimiy So'g'd shahri (Panjakent xarobalari, 5500 yillik), diniy madrasa va masjid, hamda mahalliy hunarmandchilik buyumlari bilan markaziy bozor.",
          ru: "Короткая экскурсия по Пенджикенту: Древний Согдийский город (руины Пенджикента, 5500 лет), религиозное медресе и мечеть, Центральный базар с местными ремёслами.",
        },
      },
      {
        title: {
          en: "Seven Lakes (Marguzor)",
          uz: "Yetti Ko'l (Marg'uzor)",
          ru: "Семь озёр (Маргузор)",
        },
        description: {
          en: "Drive into the Fann Mountains to the Seven Lakes. Visit all 7 lakes: Nezhigon, Soya, Gushor, Nofin, Hurdak, Marguzor, Hazorchashma. Each lake has its own unique color and character. High mountain peaks reaching 4,000m above sea level, waterfalls, villages, old ruins, traditional bazaar, religious site and many other places of interest. Return to Samarkand in the evening.",
          uz: "Fon tog'lariga Yetti Ko'lga sayohat. Barcha 7 ko'lni ziyorat qilish: Nezhigon, Soya, Gushor, Nofin, Xurdak, Marg'uzor, Hazorchashma. Har bir ko'l o'ziga xos rang va xarakterga ega. Dengiz sathidan 4000 m balandlikka yetadigan baland tog' cho'qqilari, sharsharalar, qishloqlar, qadimiy xarobalar, an'anaviy bozor, din joylari va boshqa ko'plab diqqatga sazovor joylar. Kechqurun Samarqandga qaytish.",
          ru: "Поездка в Фанские горы к Семи озёрам. Посещение всех 7 озёр: Нежигон, Соя, Гушор, Нофин, Хурдак, Маргузор, Хазорчашма. Каждое озеро имеет свой уникальный цвет и характер. Высокие горные вершины высотой до 4000 м над уровнем моря, водопады, деревни, старые руины, традиционный базар, религиозные места и множество других достопримечательностей. Возвращение в Самарканд вечером.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 9 — TASHKENT-BUKHARA-SAMARKAND-TASHKENT (8 DAYS)
  // ================================================================
  {
    id: "tashkent-bukhara-samarkand-8-days",
    duration: 8,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Treasures of Uzbekistan: Tashkent–Bukhara–Samarkand (8 Days)",
      uz: "O'zbekiston Xazinalari: Toshkent–Buxoro–Samarqand (8 Kun)",
      ru: "Сокровища Узбекистана: Ташкент–Бухара–Самарканд (8 дней)",
    },
    description: {
      en: "An unforgettable tour along the heart of the Great Silk Road. The ancient cities still keep the spirit of Alexander's troops, Arab cavalry, Mongol invasion and Tamerlane's Empire. Samarkand, Bukhara, and Khiva — where cultural and spiritual values had been long since concentrated, outstanding scientific centres and schools were established, architecture, craftsmanship, and applied art were flourishing. This tour gives you the opportunity to visit 9 regions of Uzbekistan and learn history, culture, traditions and customs of a land with its own centuries-old unique civilizations.",
      uz: "Buyuk Ipak Yo'lining qalbi bo'ylab unutilmas sayohat. Qadimiy shaharlar hali ham Iskandar Zulqarnayn qo'shinlari, arab otliqlari, mo'g'ul bosqini va Amir Temur imperiyasining ruhini saqlab kelmoqda. Samarqand, Buxoro va Xiva — madaniy va ma'naviy qadriyatlar uzoq vaqtdan beri to'plangan, ajoyib ilmiy markazlar va maktablar tashkil etilgan, me'morchilik, hunarmandchilik va amaliy san'at gullab-yashnagan joylar. Bu sayohat sizga O'zbekistonning 9 viloyatini ziyorat qilish va o'z asriy noyob tsivilizatsiyalariga ega bo'lgan mamlakat tarixi, madaniyati, an'analari va urf-odatlarini o'rganish imkonini beradi.",
      ru: "Незабываемое путешествие по сердцу Великого Шёлкового пути. Древние города по сей день хранят дух войск Александра Великого, арабской кавалерии, монгольского нашествия и империи Тамерлана. Самарканд, Бухара и Хива — места, где издавна концентрировались культурные и духовные ценности, создавались выдающиеся научные центры и школы, процветали архитектура, ремёсла и прикладное искусство. Этот тур даёт возможность посетить 9 регионов Узбекистана и познакомиться с историей, культурой, традициями и обычаями страны с собственными вековыми уникальными цивилизациями.",
    },
    includes: {
      en: [
        "Hotels with breakfast (7 nights)",
        "All transport and transfers throughout",
        "Fast train tickets Tashkent–Samarkand and Bukhara–Tashkent",
        "Professional licensed tour guide (Samandar) throughout",
        "All entrance fees to monuments and museums",
        "Shakhrisabz day trip by car",
        "Airport/railway station transfers",
      ],
      uz: [
        "Nonushta bilan mehmonxonalar (7 kecha)",
        "Butun sayohat davomida barcha transport va transferlar",
        "Toshkent–Samarqand va Buxoro–Toshkent tez poyezd chiptalari",
        "Butun sayohat davomida professional litsenziyalangan gid (Samandar)",
        "Barcha obida va muzeylarga kirish chiptalari",
        "Shahrisabzga avtomobil bilan bir kunlik sayohat",
        "Aeroport/temir yo'l stansiyasi transferlari",
      ],
      ru: [
        "Отели с завтраком (7 ночей)",
        "Весь транспорт и трансферы на протяжении тура",
        "Билеты на скоростной поезд Ташкент–Самарканд и Бухара–Ташкент",
        "Профессиональный лицензированный гид (Самандар) на протяжении всего тура",
        "Входные билеты ко всем памятникам и музеям",
        "Однодневная поездка в Шахрисабз на машине",
        "Трансферы аэропорт/ж/д вокзал",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Day 1 — Arrival in Tashkent",
          uz: "1-kun — Toshkentga yetib kelish",
          ru: "День 1 — Прибытие в Ташкент",
        },
        description: {
          en: "Airport pickup and transfer to hotel. Free time. Evening sightseeing of Independence Square and Amir Temur Square. Welcome dinner at a traditional Uzbek restaurant.",
          uz: "Aeroportdan kutib olish va mehmonxonaga transfer. Bo'sh vaqt. Kechqurun Mustaqillik maydoni va Amir Temur maydonida sayr. An'anaviy o'zbek restoranida xush kelibsiz kechki ovqat.",
          ru: "Встреча в аэропорту и трансфер в отель. Свободное время. Вечерняя прогулка по площади Независимости и площади Амира Темура. Приветственный ужин в традиционном узбекском ресторане.",
        },
      },
      {
        title: {
          en: "Day 2 — Tashkent Full Day",
          uz: "2-kun — Toshkent To'liq Kun",
          ru: "День 2 — Полный день в Ташкенте",
        },
        description: {
          en: "Full Tashkent city tour: Khast Imam complex, Chorsu Bazaar, Metro art stations, Museum of History, Applied Arts Museum, Navoi Opera Theatre, and Amir Temur Museum.",
          uz: "Toshkentni to'liq ko'rish: Xast Imom majmuasi, Chorsu bozori, metro san'at stansiyalari, Tarix muzeyi, Amaliy san'at muzeyi, Navoiy opera teatri va Amir Temur muzeyi.",
          ru: "Полная экскурсия по Ташкенту: комплекс Хаст Имам, базар Чорсу, художественные станции метро, Музей истории, Музей прикладного искусства, Оперный театр Навои и Музей Амира Темура.",
        },
      },
      {
        title: {
          en: "Day 3 — Tashkent to Samarkand",
          uz: "3-kun — Toshkentdan Samarqandga",
          ru: "День 3 — Из Ташкента в Самарканд",
        },
        description: {
          en: "Morning fast train to Samarkand. Full day: Registan Square, Shah-i-Zinda, Bibi Khanum Mosque, Gur-e-Amir Mausoleum, Ulugbek Observatory, Siab Bazaar. Overnight in Samarkand.",
          uz: "Ertalab tez poyezdda Samarqandga. To'liq kun: Registon maydoni, Shohizinda, Bibi Xonim masjidi, Go'ri Amir maqbarasi, Ulug'bek rasadxonasi, Siyob bozori. Samarqandda tunash.",
          ru: "Утренний скоростной поезд в Самарканд. Полный день: площадь Регистан, Шах-и-Зинда, мечеть Биби-Ханым, мавзолей Гур-э-Амир, обсерватория Улугбека, базар Сиаб. Ночёвка в Самарканде.",
        },
      },
      {
        title: {
          en: "Day 4 — Shakhrisabz & Bukhara",
          uz: "4-kun — Shahrisabz va Buxoro",
          ru: "День 4 — Шахрисабз и Бухара",
        },
        description: {
          en: "Morning drive to Shakhrisabz — birthplace of Tamerlane. Visit Ak-Saray Palace ruins, Kok-Gumbaz Mosque and Dorut Tilavat complex. Continue by car to Bukhara through scenic mountain roads. Overnight Bukhara.",
          uz: "Ertalab Shahrisabzga — Amir Temur vataniga. Oqsaroy xarobalari, Ko'k Gumbaz masjidi va Do'rut Tilavat majmuasini ko'rish. Tog' yo'llari orqali Buxoroga avtomobil bilan davom etish. Buxoroda tunash.",
          ru: "Утром поездка в Шахрисабз — родину Тамерлана. Посещение руин дворца Ак-Сарай, мечети Кок-Гумбаз и комплекса Дорут-Тиловат. Продолжение на машине в Бухару через живописные горные дороги. Ночёвка в Бухаре.",
        },
      },
      {
        title: {
          en: "Day 5 — Bukhara Full Day",
          uz: "5-kun — Buxoro To'liq Kun",
          ru: "День 5 — Полный день в Бухаре",
        },
        description: {
          en: "Full day Bukhara: Ark Fortress, Kalon Minaret & Mosque, Lyabi-Hauz Ensemble, Chor Minor, Samanids Mausoleum, Bolo-Hauz Mosque, all four trading domes, Magoki Attori Mosque. Evening illuminated old city walk.",
          uz: "Buxorada to'liq kun: Ark qal'asi, Kalon minorasi va masjidi, Lyabi Hovuz ansambli, Chor Minor, Somoniylar maqbarasi, Bolo Hovuz masjidi, to'rtta savdo gumurazlari, Magoki Attori masjidi. Kechqurun yoritilgan eski shaharda sayr.",
          ru: "Полный день в Бухаре: крепость Арк, минарет и мечеть Калян, ансамбль Ляби-Хауз, Чор Минор, мавзолей Саманидов, мечеть Боло-Хауз, все четыре торговых купола, мечеть Магоки Аттори. Вечерняя прогулка по освещённому старому городу.",
        },
      },
      {
        title: {
          en: "Day 6 — Bukhara to Tashkent",
          uz: "6-kun — Buxorodan Toshkentga",
          ru: "День 6 — Из Бухары в Ташкент",
        },
        description: {
          en: "Fast train or domestic flight from Bukhara to Tashkent. Afternoon free for shopping at Chorsu Bazaar. Farewell dinner.",
          uz: "Buxorodan Toshkentga tez poyezd yoki ichki reys. Tushdan keyin Chorsu bozorida xarid uchun bo'sh vaqt. Xayrlashuv kechki ovqati.",
          ru: "Скоростной поезд или внутренний рейс из Бухары в Ташкент. Послеобеденное свободное время для покупок на базаре Чорсу. Прощальный ужин.",
        },
      },
      {
        title: {
          en: "Day 7 — Chimgan & Charvak",
          uz: "7-kun — Chimgan va Charvak",
          ru: "День 7 — Чимган и Чарвак",
        },
        description: {
          en: "Day trip to Amirsoy Mountains (cable car, panoramic views) and Charvak Lake. Lunch with mountain views.",
          uz: "Amirsoy tog'lariga (kanat yo'li, panoramik manzaralar) va Charvak ko'liga bir kunlik sayohat. Tog' manzaralari bilan tushlik.",
          ru: "Однодневная поездка в горы Амирсой (канатная дорога, панорамные виды) и Чарвакское озеро. Обед с горными видами.",
        },
      },
      {
        title: {
          en: "Day 8 — Departure",
          uz: "8-kun — Jo'nab ketish",
          ru: "День 8 — Отъезд",
        },
        description: {
          en: "Free morning. Transfer to Tashkent International Airport for departure.",
          uz: "Erkin ertalab. Toshkent xalqaro aeroportiga transfer.",
          ru: "Свободное утро. Трансфер в Ташкентский международный аэропорт.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 10 — TASHKENT-URGENCH-BUKHARA-SAMARKAND-TASHKENT (8 DAYS)
  // ================================================================
  {
    id: "silk-road-complete-8-days",
    duration: 8,
    price: 0,
    featured: true,
    published: true,
    images: [],
    title: {
      en: "Complete Silk Road: Tashkent–Khiva–Bukhara–Samarkand (8 Days)",
      uz: "To'liq Ipak Yo'li: Toshkent–Xiva–Buxoro–Samarqand (8 Kun)",
      ru: "Полный Шёлковый путь: Ташкент–Хива–Бухара–Самарканд (8 дней)",
    },
    description: {
      en: "The ultimate Uzbekistan experience — a complete journey along the legendary Silk Road. From the bustling capital Tashkent to the fairy-tale walled city of Khiva, through the medieval treasures of Bukhara, and finally to the magnificent Registan of Samarkand. This tour crosses the Kyzylkum Desert, the ancient fortresses of Khorezm, and visits all the UNESCO World Heritage Sites of Uzbekistan. Every day brings new wonders of the ancient world.",
      uz: "O'zbekistonning eng to'liq tajribasi — afsonaviy Ipak Yo'li bo'ylab to'liq sayohat. Gavjum poytaxt Toshkentdan ertakdek devorli Xiva shahriga, Buxoroning o'rta asr xazinalariga va nihoyat Samarqandning muhtasham Registoniga qadar. Bu sayohat Qizilqum cho'lini kesib o'tadi, Xorazmning qadimiy qal'alarini ziyorat qiladi va O'zbekistonning barcha YuNESKO Jahon meros joylariga boradi. Har kuni qadimiy dunyoning yangi mo'jizalarini ochadi.",
      ru: "Лучший опыт Узбекистана — полное путешествие по легендарному Шёлковому пути. От шумной столицы Ташкента до сказочного города в стенах Хивы, через средневековые сокровища Бухары, и наконец к величественному Регистану Самарканда. Этот тур пересекает пустыню Кызылкум, посещает древние крепости Хорезма и все объекты Всемирного наследия ЮНЕСКО в Узбекистане. Каждый день открывает новые чудеса древнего мира.",
    },
    includes: {
      en: [
        "Hotels with breakfast (7 nights)",
        "Flight Tashkent–Urgench (included)",
        "Fast train Tashkent–Samarkand and Bukhara–Tashkent",
        "Car Khiva–Bukhara through Kyzylkum Desert",
        "Professional licensed tour guide (Samandar) throughout",
        "All entrance fees and museum tickets",
        "All local transfers",
      ],
      uz: [
        "Nonushta bilan mehmonxonalar (7 kecha)",
        "Toshkent–Urganch reysı (kiritilgan)",
        "Toshkent–Samarqand va Buxoro–Toshkent tez poyezd",
        "Xiva–Buxoro Qizilqum cho'li orqali avtomobil",
        "Butun sayohat davomida professional litsenziyalangan gid (Samandar)",
        "Barcha kirish chiptalari va muzey chiptalari",
        "Barcha mahalliy transferlar",
      ],
      ru: [
        "Отели с завтраком (7 ночей)",
        "Перелёт Ташкент–Ургенч (включён)",
        "Скоростной поезд Ташкент–Самарканд и Бухара–Ташкент",
        "Автомобиль Хива–Бухара через пустыню Кызылкум",
        "Профессиональный лицензированный гид (Самандар) на протяжении всего тура",
        "Все входные и музейные билеты",
        "Все местные трансферы",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Day 1 — Tashkent Arrival",
          uz: "1-kun — Toshkentga Kelish",
          ru: "День 1 — Прибытие в Ташкент",
        },
        description: {
          en: "Arrival in Tashkent. Hotel check-in. Evening city orientation walk at Independence Square and Amir Temur Square. Welcome dinner.",
          uz: "Toshkentga kelish. Mehmonxonaga joylashish. Kechqurun Mustaqillik maydoni va Amir Temur maydonida shahar tanishuv sayrasi. Xush kelibsiz kechki ovqat.",
          ru: "Прибытие в Ташкент. Заселение в отель. Вечерняя ознакомительная прогулка по площади Независимости и площади Амира Темура. Приветственный ужин.",
        },
      },
      {
        title: {
          en: "Day 2 — Tashkent City Tour",
          uz: "2-kun — Toshkent Sayrasi",
          ru: "День 2 — Экскурсия по Ташкенту",
        },
        description: {
          en: "Full Tashkent tour: Khast Imam, Chorsu Bazaar, Metro stations, Museum of History, Applied Arts Museum, Navoi Opera Theatre.",
          uz: "To'liq Toshkent sayrasi: Xast Imom, Chorsu bozori, metro stansiyalari, Tarix muzeyi, Amaliy san'at muzeyi, Navoiy opera teatri.",
          ru: "Полная экскурсия по Ташкенту: Хаст Имам, базар Чорсу, станции метро, Музей истории, Музей прикладного искусства, Оперный театр Навои.",
        },
      },
      {
        title: {
          en: "Day 3 — Tashkent to Khiva (via flight)",
          uz: "3-kun — Toshkentdan Xivaga (reys orqali)",
          ru: "День 3 — Из Ташкента в Хиву (рейсом)",
        },
        description: {
          en: "Early morning transfer to airport. Flight to Urgench (1.5 hours). Transfer to Khiva (30 min). Afternoon: Khiva City Tour — Ichan Kala (inner city), Kunya-Ark Citadel, Mukhammad-Aminxon Madrasah, Pakhlavan Mahmud Mausoleum, Islam Khoja Minaret. 19:00–20:00 Dinner. Overnight in Khiva.",
          uz: "Erta tongda aeroportga transfer. Urganchga reys (1,5 soat). Xivaga transfer (30 daqiqa). Tushdan keyin: Xiva shahar sayrasi — Ichan Qal'a, Ko'hna Ark qal'asi, Muhammad Aminxon madrasasi, Pahlavon Mahmud maqbarasi, Islom Xo'ja minorasi. 19:00–20:00 Kechki ovqat. Xivada tunash.",
          ru: "Ранний трансфер в аэропорт. Рейс в Ургенч (1,5 часа). Трансфер в Хиву (30 минут). После обеда: экскурсия по Хиве — Ичан Кала, цитадель Куня-Арк, медресе Мухаммад Аминхана, мавзолей Пахлавана Махмуда, минарет Ислам-Ходжи. 19:00–20:00 Ужин. Ночёвка в Хиве.",
        },
      },
      {
        title: {
          en: "Day 4 — Khiva to Bukhara (Desert Road)",
          uz: "4-kun — Xivadan Buxoroga (Cho'l yo'li)",
          ru: "День 4 — Из Хивы в Бухару (дорога через пустыню)",
        },
        description: {
          en: "Depart from Khiva to ancient Khoresmian city ruins and Cross Amudarya river by car. Visit Ayazkala Yurt camp and fortress. 12:00 Drive to Urgench. 15:50 Transfer to Railway station. 16:18 Depart by train to Bukhara. Cross one of the majestic deserts of Central Asia — Kyzylkum. 22:40 Arrival in Bukhara. Transfer to hotel.",
          uz: "Xivadan qadimiy Xorazm shahri xarobalariga jo'nash va Amudaryo daryasidan avtomobil bilan o'tish. Ayozkala yurt lageri va qal'asiga tashrif. 12:00 Urganchga jo'nash. 15:50 Temir yo'l stansiyasiga transfer. 16:18 Buxoroga poyezdda jo'nash. Markaziy Osiyoning ulug'vor cho'llaridan birini kesib o'tish — Qizilqum. 22:40 Buxoroga yetib kelish. Mehmonxonaga transfer.",
          ru: "Отправление из Хивы к руинам древнехорезмийского города и переправа через реку Амударья на машине. Посещение юрточного лагеря и крепости Аяз-Кала. 12:00 Поездка в Ургенч. 15:50 Трансфер на железнодорожный вокзал. 16:18 Отправление поездом в Бухару. Пересечение одной из величественных пустынь Центральной Азии — Кызылкум. 22:40 Прибытие в Бухару. Трансфер в отель.",
        },
      },
      {
        title: {
          en: "Day 5 — Bukhara Full Day",
          uz: "5-kun — Buxoro To'liq Kun",
          ru: "День 5 — Полный день в Бухаре",
        },
        description: {
          en: "Full day in Bukhara: Samanids Mausoleum, Chashma-Ayub Mausoleum, Bolo-House Mosque, The Ark, Poi-Kalon Ensemble (Mir-Arab Madrasah, Kalon Minaret, Kalon Mosque), Toki Zargaron trading domes, Lyabi-Hauz Ensemble, Chor Minor, Magoki Attori Mosque.",
          uz: "Buxoroda to'liq kun: Somoniylar maqbarasi, Chashmai Ayyub maqbarasi, Bolo Hovuz masjidi, Ark, Poi Kalon ansambli (Mir Arab madrasasi, Kalon minorasi, Kalon masjidi), Toqi Sarrofon savdo gumurazlari, Lyabi Hovuz ansambli, Chor Minor, Magoki Attori masjidi.",
          ru: "Полный день в Бухаре: мавзолей Саманидов, мавзолей Чашма-Айюб, мечеть Боло-Хауз, Арк, ансамбль Пои Калян (медресе Мир-Араб, минарет Калян, мечеть Калян), торговый купол Токи Заргарон, ансамбль Ляби-Хауз, Чор Минор, мечеть Магоки Аттори.",
        },
      },
      {
        title: {
          en: "Day 6 — Bukhara to Samarkand",
          uz: "6-kun — Buxorodan Samarqandga",
          ru: "День 6 — Из Бухары в Самарканд",
        },
        description: {
          en: "Train or car from Bukhara to Samarkand. Afternoon sightseeing: Registan Square, Gur-e-Amir, Shah-i-Zinda. Overnight in Samarkand.",
          uz: "Buxorodan Samarqandga poyezd yoki avtomobil. Tushdan keyin sightseeing: Registon maydoni, Go'ri Amir, Shohizinda. Samarqandda tunash.",
          ru: "Поезд или машина из Бухары в Самарканд. Послеобеденная экскурсия: площадь Регистан, Гур-э-Амир, Шах-и-Зинда. Ночёвка в Самарканде.",
        },
      },
      {
        title: {
          en: "Day 7 — Samarkand Full Day",
          uz: "7-kun — Samarqand To'liq Kun",
          ru: "День 7 — Полный день в Самарканде",
        },
        description: {
          en: "Full day Samarkand: Bibi Khanum Mosque, Siab Bazaar, Ulugbek Observatory, all three Registan madrasahs in detail, Afrosiab Museum, local crafts. Evening train to Tashkent.",
          uz: "Samarqandda to'liq kun: Bibi Xonim masjidi, Siyob bozori, Ulug'bek rasadxonasi, Registondagi uchala madrasani batafsil ko'rish, Afrosiyob muzeyi, mahalliy hunarmandchilik. Kechqurun Toshkentga poyezd.",
          ru: "Полный день в Самарканде: мечеть Биби-Ханым, базар Сиаб, обсерватория Улугбека, подробный осмотр всех трёх медресе Регистана, Музей Афросиаба, местные ремёсла. Вечерний поезд в Ташкент.",
        },
      },
      {
        title: {
          en: "Day 8 — Tashkent & Departure",
          uz: "8-kun — Toshkent va Jo'nash",
          ru: "День 8 — Ташкент и отъезд",
        },
        description: {
          en: "Arrival in Tashkent. Free time or last-minute shopping. Transfer to Tashkent International Airport for departure.",
          uz: "Toshkentga yetib kelish. Bo'sh vaqt yoki oxirgi daqiqa xaridlar. Toshkent xalqaro aeroportiga transfer.",
          ru: "Прибытие в Ташкент. Свободное время или покупки в последнюю минуту. Трансфер в Ташкентский международный аэропорт.",
        },
      },
    ],
  },

  // ================================================================
  // TOUR 11 — TASHKENT-NUKUS-MOYNAK-KHIVA-TASHKENT (5 DAYS)
  // ================================================================
  {
    id: "tashkent-nukus-khiva-5-days",
    duration: 5,
    price: 0,
    featured: false,
    published: true,
    images: [],
    title: {
      en: "Tashkent–Nukus–Moynak–Khiva–Tashkent (5 Days)",
      uz: "Toshkent–Nukus–Mo'ynaq–Xiva–Toshkent (5 Kun)",
      ru: "Ташкент–Нукус–Муйнак–Хива–Ташкент (5 дней)",
    },
    description: {
      en: "A unique tour combining the highlights of three very different worlds: the modern capital Tashkent, the remote Karakalpakstan with its haunting Aral Sea disaster zone and the Savitsky avant-garde museum, and the fairy-tale walled city of Khiva. This tour will give you the opportunity to visit 9 regions of Uzbekistan and learn the history, culture, traditions and customs of a land with its own centuries-old unique civilizations.",
      uz: "Uchta juda xilma-xil dunyoning diqqatga sazovor joylarini birlashtirgan noyob sayohat: zamonaviy poytaxt Toshkent, uning xayratlanarli Orol dengizi falokati zonasi va Savitskiy avangard muzeyi bilan masofaviy Qoraqalpog'iston va ertakdek devorli Xiva shahri. Bu sayohat sizga O'zbekistonning 9 viloyatini ziyorat qilish va o'z asriy noyob tsivilizatsiyalariga ega bo'lgan mamlakat tarixi, madaniyati, an'analari va urf-odatlarini o'rganish imkonini beradi.",
      ru: "Уникальный тур, объединяющий лучшее из трёх совершенно разных миров: современной столицы Ташкента, отдалённого Каракалпакстана с его тревожащей зоной Аральской катастрофы и музеем авангарда Савицкого, и сказочного Хивы в стенах. Этот тур даст возможность посетить 9 регионов Узбекистана и познакомиться с историей, культурой, традициями и обычаями страны с собственными вековыми уникальными цивилизациями.",
    },
    includes: {
      en: [
        "Hotels with breakfast (4 nights)",
        "All transport by car, train and domestic flight",
        "Professional licensed tour guide (Samandar) throughout",
        "Savitsky Museum entrance in Nukus",
        "Moynak Aral Sea ships visit",
        "Ancient Khorezm fortresses (Toprak-Kala, Ayaz-Kala)",
        "All Khiva entrance fees",
        "All transfers",
      ],
      uz: [
        "Nonushta bilan mehmonxonalar (4 kecha)",
        "Avtomobil, poyezd va ichki reys bilan barcha transport",
        "Butun sayohat davomida professional litsenziyalangan gid (Samandar)",
        "Nukusdagi Savitskiy muzeyi kirish chiptasi",
        "Mo'ynaq Orol dengizi kemalari tashrifi",
        "Qadimiy Xorazm qal'alari (Toprok Qal'a, Ayoz Qal'a)",
        "Barcha Xiva kirish chiptalari",
        "Barcha transferlar",
      ],
      ru: [
        "Отели с завтраком (4 ночи)",
        "Весь транспорт на машине, поезде и внутреннем рейсе",
        "Профессиональный лицензированный гид (Самандар) на протяжении всего тура",
        "Вход в Музей Савицкого в Нукусе",
        "Посещение кораблей Аральского моря в Муйнаке",
        "Древние хорезмийские крепости (Топрак-Кала, Аяз-Кала)",
        "Все входные билеты в Хиве",
        "Все трансферы",
      ],
    },
    itinerary: [
      {
        title: {
          en: "Day 1 — Tashkent Arrival",
          uz: "1-kun — Toshkentga Kelish",
          ru: "День 1 — Прибытие в Ташкент",
        },
        description: {
          en: "Arrival in Tashkent. Hotel check-in. Free time. Sightseeing tour across Tashkent: Memorial for the Victims of Repression, Tashkent TV tower (distant view), Central Asian Plov Center, Minor Mosque, Monument of Courage, OldCity-Khast-Imam architectural complex, Chorsu market, Mustakillik Square, Palace of the Grand duke Romanov, Theater of Alisher Navoiy, Amir Temur's square, Tashkent Metro. 19:00 Dinner. Overnight in the hotel.",
          uz: "Toshkentga kelish. Mehmonxonaga joylashish. Bo'sh vaqt. Toshkent bo'ylab sayohat: Qatag'on qurbonlari yodgorligi, Toshkent TV minorasi (uzoqdan ko'rinish), Markaziy Osiyo Osh markazi, Minor masjidi, Jasorat monumenti, Eski shahar-Xast Imom me'moriy majmuasi, Chorsu bozori, Mustaqillik maydoni, Romanovlar katta hertsogi saroyi, Alisher Navoiy teatri, Amir Temur maydoni, Toshkent metro. 19:00 Kechki ovqat. Mehmonxonada tunash.",
          ru: "Прибытие в Ташкент. Заселение в отель. Свободное время. Экскурсия по Ташкенту: Мемориал жертвам репрессий, Ташкентская телебашня (вид издали), Центр плова Средней Азии, мечеть Минор, Монумент Мужества, историко-архитектурный комплекс Хаст Имам, базар Чорсу, площадь Мустакиллик, Дворец Великого Князя Романова, Театр Алишера Навои, площадь Амира Темура, метро Ташкента. 19:00 Ужин. Ночёвка в отеле.",
        },
      },
      {
        title: {
          en: "Day 2 — Tashkent to Nukus, Moynak",
          uz: "2-kun — Toshkentdan Nukusga, Mo'ynaq",
          ru: "День 2 — Ташкент–Нукус, Муйнак",
        },
        description: {
          en: "Early morning flight or train to Nukus (capital of Karakalpakstan). Then depart by car to Moynak (3 hours). Visit the Cemetery of the Dead Ships on the former coast of the Aral Sea. Visit the museum of local lore. Drive back to Nukus, visiting Khodzheyli city, Mizdakhan necropolis and view of Gaur-Kala fortress ruins. 19:00–20:00 Dinner. Overnight in Nukus.",
          uz: "Erta tongda Nukusga (Qoraqalpog'iston poytaxti) reys yoki poyezd. Keyin Mo'ynaqqa avtomobil bilan jo'nash (3 soat). Orol dengizining sobiq qirg'og'idagi o'lik kemalar qabristoniga tashrif. Mahalliy o'lkashunoslik muzeyiga tashrif. Nukusga qaytish, Xo'jayli shahri, Mizdahkon nekropolini ko'rish va Govurkala qal'asi xarobalarini tomosha qilish. 19:00–20:00 Kechki ovqat. Nukusda tunash.",
          ru: "Ранний утренний рейс или поезд в Нукус (столица Каракалпакстана). Затем выезд на машине в Муйнак (3 часа). Посещение Кладбища мёртвых кораблей на бывшем берегу Аральского моря. Посещение музея местного края. Возвращение в Нукус через город Хожейли, некрополь Миздахкан и осмотр руин крепости Гаур-Кала. 19:00–20:00 Ужин. Ночёвка в Нукусе.",
        },
      },
      {
        title: {
          en: "Day 3 — Nukus to Khiva",
          uz: "3-kun — Nukusdan Xivaga",
          ru: "День 3 — Нукус–Хива",
        },
        description: {
          en: "09:00 Depart to Khiva by car (3 hours). On the way, visit the ruins of Dzhanpyk-Kala ancient fortress and the archaeological site of Toprak-Kala. Arrival in Khiva. Check-in. Lunch. After lunch, walk across the ancient Khiva old city — Ichan Kala. 19:00–20:00 Dinner. Overnight in hotel.",
          uz: "09:00 Xivaga avtomobil bilan jo'nash (3 soat). Yo'lda Janpiq Qal'a qadimiy qal'asi xarobalari va Toprok Qal'a arxeologik yodgorligiga tashrif. Xivaga yetib kelish. Joylashish. Tushlik. Tushlikdan keyin qadimiy Xiva eski shahri — Ichan Qal'a bo'ylab yurish. 19:00–20:00 Kechki ovqat. Mehmonxonada tunash.",
          ru: "09:00 Выезд в Хиву на машине (3 часа). По дороге — посещение руин древней крепости Джанпык-Кала и археологического памятника Топрак-Кала. Прибытие в Хиву. Заселение. Обед. После обеда прогулка по древнему старому городу Хивы — Ичан Кала. 19:00–20:00 Ужин. Ночёвка в отеле.",
        },
      },
      {
        title: {
          en: "Day 4 — Full Khiva City Tour & Departure",
          uz: "4-kun — Xiva To'liq Sayrasi va Jo'nash",
          ru: "День 4 — Полная экскурсия по Хиве и отъезд",
        },
        description: {
          en: "Khiva tour: Ichan-Kala (walled inner city), Mukhammad-Aminxon Madrasah, Kurya-Ark fortress, Mukhammad-Rakhimxon Madrasah, Pakhlavan Mahmud's Mausoleum, Islam-Khoja Madrasah and Minaret. 13:00–14:00 Lunch. Continue: Djuma Mosque (213 wooden columns), Museum of Khoresmian Music, Tash-Hauli Palace, Kutlug-Inak-Murad Madrasah. 18:30 Transfer to Urgench. 19:00–20:00 Dinner in Urgench. After dinner, transfer to Urgench airport for the evening flight to Tashkent. Arrival in Tashkent. Transfer to hotel. Check-in.",
          uz: "Xiva sayrasi: Ichan Qal'a (devorli ichki shahar), Muhammad Aminxon madrasasi, Ko'rg'on Ark qal'asi, Muhammad Rahimxon madrasasi, Pahlavon Mahmud maqbarasi, Islom Xo'ja madrasasi va minorasi. 13:00–14:00 Tushlik. Davom etish: Juma masjidi (213 yog'och ustun), Xorazm musiqa muzeyi, Tosh Hovli saroyi, Qutlug'murod Inoq madrasasi. 18:30 Urganchga transfer. 19:00–20:00 Urganchda kechki ovqat. Kechki ovqatdan keyin Toshkentga kechki reys uchun Urganch aeroportiga transfer. Toshkentga yetib kelish. Mehmonxonaga transfer. Joylashish.",
          ru: "Экскурсия по Хиве: Ичан-Кала (огороженный внутренний город), медресе Мухаммад Аминхана, крепость Куря-Арк, медресе Мухаммад Рахимхана, мавзолей Пахлавана Махмуда, медресе и минарет Ислам-Ходжи. 13:00–14:00 Обед. Продолжение: мечеть Джума (213 деревянных колонн), Музей хорезмийской музыки, дворец Таш-Хаули, медресе Кутлуг-Мурад Инак. 18:30 Трансфер в Ургенч. 19:00–20:00 Ужин в Ургенче. После ужина — трансфер в аэропорт Ургенча на вечерний рейс в Ташкент. Прибытие в Ташкент. Трансфер в отель. Заселение.",
        },
      },
      {
        title: {
          en: "Day 5 — Tashkent Free Day & Departure",
          uz: "5-kun — Toshkentda Bo'sh Kun va Jo'nash",
          ru: "День 5 — Свободный день в Ташкенте и отъезд",
        },
        description: {
          en: "The program for this day depends on the timing of your departure flight. Transfer to the airport. End of tour. If wished, the tour program can be tailored to your interests.",
          uz: "Bu kun uchun dastur sizning jo'nash reysining vaqtiga bog'liq. Aeroportga transfer. Sayohat yakuni. Istasangiz, tur dasturi sizning qiziqishlaringizga moslashtirilishi mumkin.",
          ru: "Программа этого дня зависит от времени вашего вылетного рейса. Трансфер в аэропорт. Конец тура. По желанию, программа тура может быть адаптирована под ваши интересы.",
        },
      },
    ],
  },
];

// ================================================================
// GUIDE SETTINGS — Real data from Samandar Ikromov
// ================================================================
export const realSettings = {
  guide: {
    name: {
      en: "Samandar Ikromov",
      uz: "Samandar Ikromov",
      ru: "Самандар Икромов",
    },
    title: {
      en: "Professional Tour Guide & Travel Consultant · Uzbekistan",
      uz: "Professional Gid va Sayohat Maslahatchisi · O'zbekiston",
      ru: "Профессиональный гид и консультант по путешествиям · Узбекистан",
    },
    bio1: {
      en: "Hello! I'm Samandar Ikromov — your personal travel companion in Uzbekistan. I'm on a mission to uncover the hidden gems and unique experiences that this incredible country has to offer. Whether it's the ancient streets of Samarkand or the vibrant markets of Bukhara, together we'll create memories that last a lifetime.",
      uz: "Salom! Men Samandar Ikromov — O'zbekistondagi shaxsiy sayohat hamkoringizman. Men bu ajoyib mamlakatning yashirin durdonalari va noyob tajribalarini ochib berishga intilyapman. Samarqandning qadimiy ko'chalari bo'lsin yoki Buxoroning jonli bozorlari — birga umr bo'yi esda qoladigan xotiralar yaratamiz.",
      ru: "Здравствуйте! Я Самандар Икромов — ваш личный спутник по путешествиям в Узбекистане. Я стремлюсь открыть скрытые жемчужины и уникальные впечатления этой удивительной страны. Будь то древние улицы Самарканда или оживлённые рынки Бухары — вместе мы создадим воспоминания на всю жизнь.",
    },
    bio2: {
      en: "I specialize in customized private tours and business trip logistics across Uzbekistan. With deep knowledge of Silk Road history, local culture and languages (English, Russian, Uzbek), I ensure every journey is authentic, informative and unforgettable. Every tour is personally guided by me — no strangers, no large groups.",
      uz: "Men O'zbekiston bo'ylab moslashtirilgan xususiy turlar va biznes sayohatlarini tashkil etishga ixtisoslashganman. Ipak Yo'li tarixi, mahalliy madaniyat va tillari (ingliz, rus, o'zbek) bo'yicha chuqur bilimlari bilan har bir sayohat haqiqiy, ma'lumotli va unutilmas bo'lishini ta'minlayman. Har bir tur shaxsan men tomonidan boshqariladi — begonalar yo'q, katta guruhlar yo'q.",
      ru: "Я специализируюсь на индивидуальных частных турах и организации деловых поездок по Узбекистану. Обладая глубокими знаниями истории Шёлкового пути, местной культуры и языков (английский, русский, узбекский), я обеспечиваю, чтобы каждое путешествие было аутентичным, познавательным и незабываемым. Каждый тур лично сопровождаю я — никаких посторонних, никаких больших групп.",
    },
    photo: "/img/about/samandar.jpg",
    stats: [
      {
        num: "614+",
        label: {
          en: "Happy Clients",
          uz: "Mamnun Mijozlar",
          ru: "Довольных клиентов",
        },
      },
      {
        num: "18+",
        label: {
          en: "Countries Served",
          uz: "Xizmat Ko'rsatilgan Davlatlar",
          ru: "Обслуженных стран",
        },
      },
      {
        num: "11+",
        label: { en: "Tour Packages", uz: "Tur Paketlari", ru: "Турпакетов" },
      },
      {
        num: "5★",
        label: {
          en: "Average Rating",
          uz: "O'rtacha Baho",
          ru: "Средняя оценка",
        },
      },
    ],
  },
  contact: {
    phone: "+998 99 062 17 36",
    whatsapp: "https://wa.me/998990621736",
    telegram: "https://t.me/+998990621736",
    facebook: "https://facebook.com/samanuz13",
    instagram: "https://instagram.com/samanuz13",
    email: "samandarwtf13@gmail.com",
    location: {
      en: "Tashkent, Uzbekistan",
      uz: "Toshkent, O'zbekiston",
      ru: "Ташкент, Узбекистан",
    },
  },
  hero: {
    title: {
      en: "Discover the Wonders of the Silk Road",
      uz: "Ipak Yo'lining Mo'jizalarini Kashf Eting",
      ru: "Откройте для себя чудеса Шёлкового пути",
    },
    subtitle: {
      en: "Private guided tours across Uzbekistan's legendary Silk Road cities — Samarkand, Bukhara, Khiva, Tashkent & beyond. Customized tours and business trip logistics.",
      uz: "O'zbekistonning afsonaviy Ipak Yo'li shaharlari bo'ylab xususiy gidli turlar — Samarqand, Buxoro, Xiva, Toshkent va undan narisi. Moslashtirilgan turlar va biznes sayohat logistikasi.",
      ru: "Частные экскурсии по легендарным городам Шёлкового пути Узбекистана — Самарканд, Бухара, Хива, Ташкент и другие. Индивидуальные туры и логистика деловых поездок.",
    },
    backgroundImage: "/img/masthead/1/bg.webp",
  },
  stats: [
    {
      num: "614+",
      label: {
        en: "Happy Clients",
        uz: "Mamnun Mijozlar",
        ru: "Довольных клиентов",
      },
    },
    {
      num: "18+",
      label: {
        en: "Travelling Countries",
        uz: "Sayohat Mamlakatlari",
        ru: "Стран путешествия",
      },
    },
    {
      num: "11+",
      label: { en: "Tour Packages", uz: "Tur Paketlari", ru: "Турпакетов" },
    },
  ],
  features: [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: {
        en: "Private Tours Only",
        uz: "Faqat Xususiy Turlar",
        ru: "Только частные туры",
      },
      text: {
        en: "Every tour is exclusively yours. No strangers, no large groups — just you and your perfect Uzbekistan experience with a dedicated personal guide.",
        uz: "Har bir tur faqat sizniki. Begonalar yo'q, katta guruhlar yo'q — faqat siz va shaxsiy gid bilan mukammal O'zbekiston tajribangiz.",
        ru: "Каждый тур исключительно ваш. Никаких посторонних, никаких больших групп — только вы и ваш идеальный опыт Узбекистана с личным гидом.",
      },
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: {
        en: "All Services Included",
        uz: "Barcha Xizmatlar Kiritilgan",
        ru: "Все услуги включены",
      },
      text: {
        en: "Hotels, transport, train tickets, airport transfers, entrance fees — everything arranged. Support to get Uzbekistan visa, rent car, rent apartment for longer stays.",
        uz: "Mehmonxonalar, transport, poyezd chiptalari, aeroport transferlari, kirish to'lovlari — hammasi tashkil etilgan. O'zbekiston vizasini olishda yordam, avtomobil ijarasi, uzoq muddatli qolish uchun kvartira ijarasi.",
        ru: "Отели, транспорт, железнодорожные билеты, трансферы в аэропорт, входные билеты — всё организовано. Помощь с получением визы в Узбекистан, аренда автомобиля, аренда квартиры для длительного проживания.",
      },
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: {
        en: "Business Travel Expert",
        uz: "Biznes Sayohat Mutaxassisi",
        ru: "Эксперт по деловым поездкам",
      },
      text: {
        en: "Specialized in business trip logistics across Uzbekistan. Interpretation (EN/RU/UZ), meeting support, venue booking, consulting for business travellers.",
        uz: "O'zbekiston bo'ylab biznes sayohat logistikasiga ixtisoslashgan. Tarjima (EN/RU/UZ), uchrashuvlarga yordam, joy bron qilish, biznes sayohatchilar uchun maslahat.",
        ru: "Специализация на логистике деловых поездок по Узбекистану. Переводы (EN/RU/UZ), поддержка встреч, бронирование площадок, консультации для деловых путешественников.",
      },
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah M.",
      country: {
        en: "🇬🇧 United Kingdom",
        uz: "🇬🇧 Buyuk Britaniya",
        ru: "🇬🇧 Великобритания",
      },
      avatar: "/img/avatars/testimonials/1.png",
      text: {
        en: "Samandar made our trip absolutely magical. His knowledge of Silk Road history and culture brought every monument to life. The 8-day tour exceeded all our expectations — professional, punctual, and deeply knowledgeable!",
        uz: "Samandar sayohatimizni mutlaqo sehrli qildi. Uning Ipak Yo'li tarixi va madaniyati haqidagi bilimlari har bir obidani jonlantirdi. 8 kunlik tur barcha kutganlarimizdan oshib ketdi — professional, aniq va chuqur bilimli!",
        ru: "Самандар сделал наше путешествие поистине волшебным. Его знания истории и культуры Шёлкового пути оживили каждый памятник. 8-дневный тур превзошёл все наши ожидания — профессиональный, пунктуальный и глубоко эрудированный!",
      },
      tour: "8 Days Treasures of Uzbekistan",
      rating: 5,
    },
    {
      id: 2,
      name: "Thomas K.",
      country: { en: "🇩🇪 Germany", uz: "🇩🇪 Germaniya", ru: "🇩🇪 Германия" },
      avatar: "/img/avatars/testimonials/2.png",
      text: {
        en: "We saw places that typical tours completely miss. Samandar's local knowledge is extraordinary. The Aral Sea trip to Moynak was one of the most powerful experiences of my life. Highly recommended!",
        uz: "Biz odatiy turlar butunlay o'tkazib yuboradigan joylarni ko'rdik. Samandarning mahalliy bilimlari ajoyib. Mo'ynaqqa Orol dengizi sayrasi hayotimdagi eng kuchli tajribalardan biri bo'ldi. Qattiq tavsiya qilaman!",
        ru: "Мы увидели места, которые обычные туры полностью упускают. Местные знания Самандара исключительны. Поездка к Аральскому морю в Муйнак стала одним из самых сильных впечатлений в моей жизни. Очень рекомендую!",
      },
      tour: "Nukus & Karakalpakstan Tour",
      rating: 5,
    },
    {
      id: 3,
      name: "Yuki T.",
      country: { en: "🇯🇵 Japan", uz: "🇯🇵 Yaponiya", ru: "🇯🇵 Япония" },
      avatar: "/img/avatars/testimonials/3.png",
      text: {
        en: "Registan at sunset was breathtaking! Samandar arranged everything seamlessly — hotels, trains, transfers. As a solo traveller, I felt completely safe and well taken care of. Will definitely come back!",
        uz: "Registonda quyosh botishi hayratlanarli edi! Samandar hammani muammosiz tashkil qildi — mehmonxonalar, poyezdlar, transferlar. Yolg'iz sayohatchi sifatida o'zimni butunlay xavfsiz his qildim. Albatta qaytib kelaman!",
        ru: "Регистан на закате — это захватывало дух! Самандар организовал всё безупречно — отели, поезда, трансферы. Как соло-путешественница, я чувствовала себя в полной безопасности. Обязательно вернусь!",
      },
      tour: "Day Tour to Samarkand",
      rating: 5,
    },
  ],
};
