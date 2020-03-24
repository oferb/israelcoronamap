const CITIES = [
  {
    "id": 1,
    "text": "אבו ג'ווייעד",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU JUWEI'ID"
  },
  {
    "id": 2,
    "text": "אבו גוש",
    "county": "ירושלים",
    "cityNameInEnglish": "ABU GHOSH"
  },
  {
    "id": 3,
    "text": "אבו סנאן",
    "county": "עכו",
    "cityNameInEnglish": "ABU SINAN"
  },
  {
    "id": 4,
    "text": "אבו סריחאן",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU SUREIHAN"
  },
  {
    "id": 5,
    "text": "אבו עבדון",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU ABDUN"
  },
  {
    "id": 6,
    "text": "אבו עמאר",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU AMMAR"
  },
  {
    "id": 7,
    "text": "אבו עמרה",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU AMRE"
  },
  {
    "id": 8,
    "text": "אבו קורינאת",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU QUREINAT"
  },
  {
    "id": 9,
    "text": "אבו קרינאת",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU QUREINAT"
  },
  {
    "id": 10,
    "text": "אבו רובייעה",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU RUBEI'A"
  },
  {
    "id": 11,
    "text": "אבו רוקייק",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU RUQAYYEQ"
  },
  {
    "id": 12,
    "text": "אבו תלול",
    "county": "באר שבע",
    "cityNameInEnglish": "ABU TULUL"
  },
  {
    "id": 13,
    "text": "אבטין",
    "county": "חיפה",
    "cityNameInEnglish": "IBTIN"
  },
  {
    "id": 14,
    "text": "אבטליון",
    "county": "עכו",
    "cityNameInEnglish": "AVTALYON"
  },
  {
    "id": 15,
    "text": "אביאל",
    "county": "חדרה",
    "cityNameInEnglish": "AVI'EL"
  },
  {
    "id": 16,
    "text": "אביבים",
    "county": "צפת",
    "cityNameInEnglish": "AVIVIM"
  },
  {
    "id": 17,
    "text": "אביגדור",
    "county": "אשקלון",
    "cityNameInEnglish": "AVIGEDOR"
  },
  {
    "id": 18,
    "text": "אביחיל",
    "county": "השרון",
    "cityNameInEnglish": "AVIHAYIL"
  },
  {
    "id": 19,
    "text": "אביטל",
    "county": "עפולה",
    "cityNameInEnglish": "AVITAL"
  },
  {
    "id": 20,
    "text": "אביעזר",
    "county": "ירושלים",
    "cityNameInEnglish": "AVI'EZER"
  },
  {
    "id": 21,
    "text": "אבירים",
    "county": "עכו",
    "cityNameInEnglish": "ABBIRIM"
  },
  {
    "id": 22,
    "text": "אבן יהודה",
    "county": "השרון",
    "cityNameInEnglish": "EVEN YEHUDA"
  },
  {
    "id": 23,
    "text": "אבן מנחם",
    "county": "עכו",
    "cityNameInEnglish": "EVEN MENAHEM"
  },
  {
    "id": 24,
    "text": "אבן ספיר",
    "county": "ירושלים",
    "cityNameInEnglish": "EVEN SAPPIR"
  },
  {
    "id": 25,
    "text": "אבן שמואל",
    "county": "אשקלון",
    "cityNameInEnglish": "EVEN SHEMU'EL"
  },
  {
    "id": 26,
    "text": "אבני איתן",
    "county": "גולן",
    "cityNameInEnglish": "AVNE ETAN"
  },
  {
    "id": 27,
    "text": "אבני חפץ",
    "county": "טול כרם",
    "cityNameInEnglish": "AVNE HEFEZ"
  },
  {
    "id": 28,
    "text": "אבנת",
    "county": "ירדן",
    "cityNameInEnglish": "AVENAT"
  },
  {
    "id": 29,
    "text": "אבשלום",
    "county": "באר שבע",
    "cityNameInEnglish": "AVSHALOM"
  },
  {
    "id": 30,
    "text": "אדורה",
    "county": "חברון",
    "cityNameInEnglish": "ADORA"
  },
  {
    "id": 31,
    "text": "אדירים",
    "county": "עפולה",
    "cityNameInEnglish": "ADDIRIM"
  },
  {
    "id": 32,
    "text": "אדמית",
    "county": "עכו",
    "cityNameInEnglish": "ADAMIT"
  },
  {
    "id": 33,
    "text": "אדרת",
    "county": "ירושלים",
    "cityNameInEnglish": "ADDERET"
  },
  {
    "id": 34,
    "text": "אודים",
    "county": "השרון",
    "cityNameInEnglish": "UDIM"
  },
  {
    "id": 35,
    "text": "אודם",
    "county": "גולן",
    "cityNameInEnglish": "ODEM"
  },
  {
    "id": 36,
    "text": "אוהד",
    "county": "באר שבע",
    "cityNameInEnglish": "OHAD"
  },
  {
    "id": 37,
    "text": "אום אל-פחם",
    "county": "חדרה",
    "cityNameInEnglish": "UMM AL-FAHM"
  },
  {
    "id": 38,
    "text": "אום אל-קוטוף",
    "county": "חדרה",
    "cityNameInEnglish": "UMM AL-QUTUF"
  },
  {
    "id": 39,
    "text": "אום בטין",
    "county": "באר שבע",
    "cityNameInEnglish": "UMM BATIN"
  },
  {
    "id": 40,
    "text": "אומן",
    "county": "עפולה",
    "cityNameInEnglish": "OMEN"
  },
  {
    "id": 41,
    "text": "אומץ",
    "county": "השרון",
    "cityNameInEnglish": "OMEZ"
  },
  {
    "id": 42,
    "text": "אופקים",
    "county": "באר שבע",
    "cityNameInEnglish": "OFAQIM"
  },
  {
    "id": 43,
    "text": "אור הגנוז",
    "county": "צפת",
    "cityNameInEnglish": "OR HAGANUZ"
  },
  {
    "id": 44,
    "text": "אור הנר",
    "county": "אשקלון",
    "cityNameInEnglish": "OR HANER"
  },
  {
    "id": 45,
    "text": "אור יהודה",
    "county": "רמת גן",
    "cityNameInEnglish": "OR YEHUDA"
  },
  {
    "id": 46,
    "text": "אור עקיבא",
    "county": "חדרה",
    "cityNameInEnglish": "OR AQIVA"
  },
  {
    "id": 47,
    "text": "אורה",
    "county": "ירושלים",
    "cityNameInEnglish": "ORA"
  },
  {
    "id": 48,
    "text": "אורות",
    "county": "אשקלון",
    "cityNameInEnglish": "OROT"
  },
  {
    "id": 49,
    "text": "אורטל",
    "county": "גולן",
    "cityNameInEnglish": "ORTAL"
  },
  {
    "id": 50,
    "text": "אורים",
    "county": "באר שבע",
    "cityNameInEnglish": "URIM"
  },
  {
    "id": 51,
    "text": "אורנים",
    "county": "חיפה",
    "cityNameInEnglish": "ORANIM"
  },
  {
    "id": 52,
    "text": "אורנית",
    "county": "טול כרם",
    "cityNameInEnglish": "ORANIT"
  },
  {
    "id": 53,
    "text": "אושה",
    "county": "חיפה",
    "cityNameInEnglish": "USHA"
  },
  {
    "id": 54,
    "text": "אזור",
    "county": "חולון",
    "cityNameInEnglish": "AZOR"
  },
  {
    "id": 55,
    "text": "אחווה",
    "county": "אשקלון",
    "cityNameInEnglish": "AHAWA"
  },
  {
    "id": 56,
    "text": "אחוזם",
    "county": "אשקלון",
    "cityNameInEnglish": "AHUZZAM"
  },
  {
    "id": 57,
    "text": "אחוזת ברק",
    "county": "עפולה",
    "cityNameInEnglish": "AHUZZAT BARAQ"
  },
  {
    "id": 58,
    "text": "אחיהוד",
    "county": "עכו",
    "cityNameInEnglish": "AHIHUD"
  },
  {
    "id": 59,
    "text": "אחיטוב",
    "county": "השרון",
    "cityNameInEnglish": "AHITUV"
  },
  {
    "id": 60,
    "text": "אחיסמך",
    "county": "רמלה",
    "cityNameInEnglish": "AHISAMAKH"
  },
  {
    "id": 61,
    "text": "אחיעזר",
    "county": "רמלה",
    "cityNameInEnglish": "AHI'EZER"
  },
  {
    "id": 62,
    "text": "אטרש",
    "county": "באר שבע",
    "cityNameInEnglish": "ATRASH"
  },
  {
    "id": 63,
    "text": "איבים",
    "county": "אשקלון",
    "cityNameInEnglish": "IBBIM"
  },
  {
    "id": 64,
    "text": "אייל",
    "county": "פתח תקווה",
    "cityNameInEnglish": "EYAL"
  },
  {
    "id": 65,
    "text": "איילת השחר",
    "county": "צפת",
    "cityNameInEnglish": "AYYELET HASHAHAR"
  },
  {
    "id": 66,
    "text": "אילון",
    "county": "עכו",
    "cityNameInEnglish": "ELON"
  },
  {
    "id": 67,
    "text": "אילות",
    "county": "באר שבע",
    "cityNameInEnglish": "ELOT"
  },
  {
    "id": 68,
    "text": "אילניה",
    "county": "כנרת",
    "cityNameInEnglish": "ILANIYYA"
  },
  {
    "id": 69,
    "text": "אילת",
    "county": "באר שבע",
    "cityNameInEnglish": "ELAT"
  },
  {
    "id": 70,
    "text": "אירוס",
    "county": "רחובות",
    "cityNameInEnglish": "IRUS"
  },
  {
    "id": 71,
    "text": "איתמר",
    "county": "שכם",
    "cityNameInEnglish": "ITAMAR"
  },
  {
    "id": 72,
    "text": "איתן",
    "county": "אשקלון",
    "cityNameInEnglish": "ETAN"
  },
  {
    "id": 73,
    "text": "איתנים",
    "county": "ירושלים",
    "cityNameInEnglish": "ETANIM"
  },
  {
    "id": 74,
    "text": "אכסאל",
    "county": "עפולה",
    "cityNameInEnglish": "IKSAL"
  },
  {
    "id": 75,
    "text": "אל סייד",
    "county": "באר שבע",
    "cityNameInEnglish": "AL SAYYID"
  },
  {
    "id": 76,
    "text": "אל-עזי",
    "county": "אשקלון",
    "cityNameInEnglish": "AL-AZY"
  },
  {
    "id": 77,
    "text": "אל-עריאן",
    "county": "חדרה",
    "cityNameInEnglish": "AL-ARYAN"
  },
  {
    "id": 78,
    "text": "אל-רום",
    "county": "גולן",
    "cityNameInEnglish": "EL-ROM"
  },
  {
    "id": 79,
    "text": "אלומה",
    "county": "אשקלון",
    "cityNameInEnglish": "ALUMMA"
  },
  {
    "id": 80,
    "text": "אלומות",
    "county": "כנרת",
    "cityNameInEnglish": "ALUMMOT"
  },
  {
    "id": 81,
    "text": "אלון הגליל",
    "county": "עפולה",
    "cityNameInEnglish": "ALLON HAGALIL"
  },
  {
    "id": 82,
    "text": "אלון מורה",
    "county": "שכם",
    "cityNameInEnglish": "ELON MORE"
  },
  {
    "id": 83,
    "text": "אלון שבות",
    "county": "בית לחם",
    "cityNameInEnglish": "ALLON SHEVUT"
  },
  {
    "id": 84,
    "text": "אלוני אבא",
    "county": "עפולה",
    "cityNameInEnglish": "ALLONE ABBA"
  },
  {
    "id": 85,
    "text": "אלוני הבשן",
    "county": "גולן",
    "cityNameInEnglish": "ALLONE HABASHAN"
  },
  {
    "id": 86,
    "text": "אלוני יצחק",
    "county": "חדרה",
    "cityNameInEnglish": "ALLONE YIZHAQ"
  },
  {
    "id": 87,
    "text": "אלונים",
    "county": "עפולה",
    "cityNameInEnglish": "ALLONIM"
  },
  {
    "id": 88,
    "text": "אלי-עד",
    "county": "גולן",
    "cityNameInEnglish": "ELI AL"
  },
  {
    "id": 89,
    "text": "אליאב",
    "county": "אשקלון",
    "cityNameInEnglish": "ELIAV"
  },
  {
    "id": 90,
    "text": "אליכין",
    "county": "השרון",
    "cityNameInEnglish": "ELYAKHIN"
  },
  {
    "id": 91,
    "text": "אליפז",
    "county": "באר שבע",
    "cityNameInEnglish": "ELIFAZ"
  },
  {
    "id": 92,
    "text": "אליפלט",
    "county": "צפת",
    "cityNameInEnglish": "ELIFELET"
  },
  {
    "id": 93,
    "text": "אליקים",
    "county": "עפולה",
    "cityNameInEnglish": "ELYAQIM"
  },
  {
    "id": 94,
    "text": "אלישיב",
    "county": "השרון",
    "cityNameInEnglish": "ELYASHIV"
  },
  {
    "id": 95,
    "text": "אלישמע",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ELISHAMA"
  },
  {
    "id": 96,
    "text": "אלמגור",
    "county": "כנרת",
    "cityNameInEnglish": "ALMAGOR"
  },
  {
    "id": 97,
    "text": "אלמוג",
    "county": "ירדן",
    "cityNameInEnglish": "ALMOG"
  },
  {
    "id": 98,
    "text": "אלעד",
    "county": "פתח תקווה",
    "cityNameInEnglish": "EL'AD"
  },
  {
    "id": 99,
    "text": "אלעזר",
    "county": "בית לחם",
    "cityNameInEnglish": "EL'AZAR"
  },
  {
    "id": 100,
    "text": "אלפי מנשה",
    "county": "טול כרם",
    "cityNameInEnglish": "ALFE MENASHE"
  },
  {
    "id": 101,
    "text": "אלקוש",
    "county": "עכו",
    "cityNameInEnglish": "ELQOSH"
  },
  {
    "id": 102,
    "text": "אלקנה",
    "county": "טול כרם",
    "cityNameInEnglish": "ELQANA"
  },
  {
    "id": 103,
    "text": "אמונים",
    "county": "אשקלון",
    "cityNameInEnglish": "EMUNIM"
  },
  {
    "id": 104,
    "text": "אמירים",
    "county": "צפת",
    "cityNameInEnglish": "AMIRIM"
  },
  {
    "id": 105,
    "text": "אמנון",
    "county": "כנרת",
    "cityNameInEnglish": "AMNUN"
  },
  {
    "id": 106,
    "text": "אמציה",
    "county": "אשקלון",
    "cityNameInEnglish": "AMAZYA"
  },
  {
    "id": 107,
    "text": "אניעם",
    "county": "גולן",
    "cityNameInEnglish": "ANI'AM"
  },
  {
    "id": 108,
    "text": "אסד",
    "county": "באר שבע",
    "cityNameInEnglish": "ASAD"
  },
  {
    "id": 109,
    "text": "אספר",
    "county": "חברון",
    "cityNameInEnglish": "ASEFAR"
  },
  {
    "id": 110,
    "text": "אעבלין",
    "county": "עכו",
    "cityNameInEnglish": "I'BILLIN"
  },
  {
    "id": 111,
    "text": "אעצם",
    "county": "באר שבע",
    "cityNameInEnglish": "A'SAM"
  },
  {
    "id": 112,
    "text": "אפיניש",
    "county": "באר שבע",
    "cityNameInEnglish": "AFEINISH"
  },
  {
    "id": 113,
    "text": "אפיק",
    "county": "גולן",
    "cityNameInEnglish": "AFIQ"
  },
  {
    "id": 114,
    "text": "אפיקים",
    "county": "כנרת",
    "cityNameInEnglish": "AFIQIM"
  },
  {
    "id": 115,
    "text": "אפק",
    "county": "עכו",
    "cityNameInEnglish": "AFEQ"
  },
  {
    "id": 116,
    "text": "אפרת",
    "county": "בית לחם",
    "cityNameInEnglish": "EFRAT"
  },
  {
    "id": 117,
    "text": "ארבל",
    "county": "כנרת",
    "cityNameInEnglish": "ARBEL"
  },
  {
    "id": 118,
    "text": "ארגמן",
    "county": "ירדן",
    "cityNameInEnglish": "ARGAMAN"
  },
  {
    "id": 119,
    "text": "ארז",
    "county": "אשקלון",
    "cityNameInEnglish": "EREZ"
  },
  {
    "id": 120,
    "text": "אריאל",
    "county": "טול כרם",
    "cityNameInEnglish": "ARI'EL"
  },
  {
    "id": 121,
    "text": "ארסוף",
    "county": "השרון",
    "cityNameInEnglish": "ARSUF"
  },
  {
    "id": 122,
    "text": "אשבול",
    "county": "באר שבע",
    "cityNameInEnglish": "ESHBOL"
  },
  {
    "id": 123,
    "text": "אשבל",
    "county": "עכו",
    "cityNameInEnglish": "NAHAL ESHBAL"
  },
  {
    "id": 124,
    "text": "אשדוד",
    "county": "אשקלון",
    "cityNameInEnglish": "ASHDOD"
  },
  {
    "id": 125,
    "text": "אשדות יעקב",
    "county": "כנרת",
    "cityNameInEnglish": "ASHDOT YA'AQOV(IHUD)"
  },
  {
    "id": 126,
    "text": "אשדות יעקב  )מאוחד(",
    "county": "כנרת",
    "cityNameInEnglish": "ASHDOT YA'AQOV(ME'UH"
  },
  {
    "id": 127,
    "text": "אשחר",
    "county": "עכו",
    "cityNameInEnglish": "ESHHAR"
  },
  {
    "id": 128,
    "text": "אשכולות",
    "county": "חברון",
    "cityNameInEnglish": "ESHKOLOT"
  },
  {
    "id": 129,
    "text": "אשל הנשיא",
    "county": "באר שבע",
    "cityNameInEnglish": "ESHEL HANASI"
  },
  {
    "id": 130,
    "text": "אשלים",
    "county": "באר שבע",
    "cityNameInEnglish": "ASHALIM"
  },
  {
    "id": 131,
    "text": "אשקלון",
    "county": "אשקלון",
    "cityNameInEnglish": "ASHQELON"
  },
  {
    "id": 132,
    "text": "אשרת",
    "county": "עכו",
    "cityNameInEnglish": "ASHERAT"
  },
  {
    "id": 133,
    "text": "אשתאול",
    "county": "ירושלים",
    "cityNameInEnglish": "ESHTA'OL"
  },
  {
    "id": 134,
    "text": "אתגר",
    "county": "עכו",
    "cityNameInEnglish": "ETGAR"
  },
  {
    "id": 135,
    "text": "באקה אל-גרביה",
    "county": "חדרה",
    "cityNameInEnglish": "BAQA AL-GHARBIYYE"
  },
  {
    "id": 136,
    "text": "באר אורה",
    "county": "באר שבע",
    "cityNameInEnglish": "BE'ER ORA"
  },
  {
    "id": 137,
    "text": "באר גנים",
    "county": "באר שבע",
    "cityNameInEnglish": "BEER GANNIM"
  },
  {
    "id": 138,
    "text": "באר טוביה",
    "county": "אשקלון",
    "cityNameInEnglish": "BE'ER TUVEYA"
  },
  {
    "id": 139,
    "text": "באר יעקב",
    "county": "רמלה",
    "cityNameInEnglish": "BE'ER YA'AQOV"
  },
  {
    "id": 140,
    "text": "באר מילכה",
    "county": "באר שבע",
    "cityNameInEnglish": "BE'ER MILKA"
  },
  {
    "id": 141,
    "text": "באר שבע",
    "county": "באר שבע",
    "cityNameInEnglish": "BE'ER SHEVA"
  },
  {
    "id": 142,
    "text": "בארות יצחק",
    "county": "פתח תקווה",
    "cityNameInEnglish": "BE'EROT YIZHAQ"
  },
  {
    "id": 143,
    "text": "בארותיים",
    "county": "השרון",
    "cityNameInEnglish": "BE'EROTAYIM"
  },
  {
    "id": 144,
    "text": "בארי",
    "county": "באר שבע",
    "cityNameInEnglish": "BE'ERI"
  },
  {
    "id": 145,
    "text": "בוסתן הגליל",
    "county": "עכו",
    "cityNameInEnglish": "BUSTAN HAGALIL"
  },
  {
    "id": 146,
    "text": "בועיינה-נוג'ידאת",
    "county": "נצרת",
    "cityNameInEnglish": "BU'EINE-NUJEIDAT"
  },
  {
    "id": 147,
    "text": "בוקעאתא",
    "county": "גולן",
    "cityNameInEnglish": "BUQ'ATA"
  },
  {
    "id": 148,
    "text": "בורגתה",
    "county": "השרון",
    "cityNameInEnglish": "BURGETA"
  },
  {
    "id": 149,
    "text": "בחן",
    "county": "השרון",
    "cityNameInEnglish": "BAHAN"
  },
  {
    "id": 150,
    "text": "בטחה",
    "county": "באר שבע",
    "cityNameInEnglish": "BITHA"
  },
  {
    "id": 151,
    "text": "ביצרון",
    "county": "אשקלון",
    "cityNameInEnglish": "BIZZARON"
  },
  {
    "id": 152,
    "text": "ביר אל-מכסור",
    "county": "עכו",
    "cityNameInEnglish": "BIR EL-MAKSUR"
  },
  {
    "id": 153,
    "text": "ביר הדאג'",
    "county": "באר שבע",
    "cityNameInEnglish": "BIR HADAGE"
  },
  {
    "id": 154,
    "text": "ביריה",
    "county": "צפת",
    "cityNameInEnglish": "BIRIYYA"
  },
  {
    "id": 155,
    "text": "בית אורן",
    "county": "חדרה",
    "cityNameInEnglish": "BET OREN"
  },
  {
    "id": 156,
    "text": "בית אל",
    "county": "ראמאללה",
    "cityNameInEnglish": "BET EL"
  },
  {
    "id": 157,
    "text": "בית אלעזרי",
    "county": "רחובות",
    "cityNameInEnglish": "BET EL'AZARI"
  },
  {
    "id": 158,
    "text": "בית אלפא",
    "county": "עפולה",
    "cityNameInEnglish": "BET ALFA"
  },
  {
    "id": 159,
    "text": "בית אריה",
    "county": "ראמאללה",
    "cityNameInEnglish": "BET ARYE"
  },
  {
    "id": 160,
    "text": "בית ברל",
    "county": "פתח תקווה",
    "cityNameInEnglish": "BET BERL"
  },
  {
    "id": 161,
    "text": "בית ג'ן",
    "county": "עכו",
    "cityNameInEnglish": "BEIT JANN"
  },
  {
    "id": 162,
    "text": "בית גוברין",
    "county": "אשקלון",
    "cityNameInEnglish": "BET GUVRIN"
  },
  {
    "id": 163,
    "text": "בית גמליאל",
    "county": "רחובות",
    "cityNameInEnglish": "BET GAMLI'EL"
  },
  {
    "id": 164,
    "text": "בית דגן",
    "county": "רמלה",
    "cityNameInEnglish": "BET DAGAN"
  },
  {
    "id": 165,
    "text": "בית הגדי",
    "county": "באר שבע",
    "cityNameInEnglish": "BET HAGADDI"
  },
  {
    "id": 166,
    "text": "בית הלוי",
    "county": "השרון",
    "cityNameInEnglish": "BET HALEVI"
  },
  {
    "id": 167,
    "text": "בית הלל",
    "county": "צפת",
    "cityNameInEnglish": "BET HILLEL"
  },
  {
    "id": 168,
    "text": "בית העמק",
    "county": "עכו",
    "cityNameInEnglish": "BET HAEMEQ"
  },
  {
    "id": 169,
    "text": "בית הערבה",
    "county": "ירדן",
    "cityNameInEnglish": "BET HAARAVA"
  },
  {
    "id": 170,
    "text": "בית השיטה",
    "county": "עפולה",
    "cityNameInEnglish": "BET HASHITTA"
  },
  {
    "id": 171,
    "text": "בית זיד",
    "county": "עפולה",
    "cityNameInEnglish": "BET ZEID"
  },
  {
    "id": 172,
    "text": "בית זית",
    "county": "ירושלים",
    "cityNameInEnglish": "BET ZAYIT"
  },
  {
    "id": 173,
    "text": "בית זרע",
    "county": "כנרת",
    "cityNameInEnglish": "BET ZERA"
  },
  {
    "id": 174,
    "text": "בית חורון",
    "county": "ראמאללה",
    "cityNameInEnglish": "BET HORON"
  },
  {
    "id": 175,
    "text": "בית חירות",
    "county": "השרון",
    "cityNameInEnglish": "BET HERUT"
  },
  {
    "id": 176,
    "text": "בית חלקיה",
    "county": "רחובות",
    "cityNameInEnglish": "BET HILQIYYA"
  },
  {
    "id": 177,
    "text": "בית חנן",
    "county": "רחובות",
    "cityNameInEnglish": "BET HANAN"
  },
  {
    "id": 178,
    "text": "בית חנניה",
    "county": "חדרה",
    "cityNameInEnglish": "BET HANANYA"
  },
  {
    "id": 179,
    "text": "בית חשמונאי",
    "county": "רמלה",
    "cityNameInEnglish": "BET HASHMONAY"
  },
  {
    "id": 180,
    "text": "בית יהושע",
    "county": "השרון",
    "cityNameInEnglish": "BET YEHOSHUA"
  },
  {
    "id": 181,
    "text": "בית יוסף",
    "county": "עפולה",
    "cityNameInEnglish": "BET YOSEF"
  },
  {
    "id": 182,
    "text": "בית ינאי",
    "county": "השרון",
    "cityNameInEnglish": "BET YANNAY"
  },
  {
    "id": 183,
    "text": "בית יצחק-שער חפר",
    "county": "השרון",
    "cityNameInEnglish": "BET YIZHAQ-SH. HEFER"
  },
  {
    "id": 184,
    "text": "בית לחם הגלילית",
    "county": "עפולה",
    "cityNameInEnglish": "BET LEHEM HAGELILIT"
  },
  {
    "id": 185,
    "text": "בית מאיר",
    "county": "ירושלים",
    "cityNameInEnglish": "BET ME'IR"
  },
  {
    "id": 186,
    "text": "בית נחמיה",
    "county": "רמלה",
    "cityNameInEnglish": "BET NEHEMYA"
  },
  {
    "id": 187,
    "text": "בית ניר",
    "county": "אשקלון",
    "cityNameInEnglish": "BET NIR"
  },
  {
    "id": 188,
    "text": "בית נקופה",
    "county": "ירושלים",
    "cityNameInEnglish": "BET NEQOFA"
  },
  {
    "id": 189,
    "text": "בית עובד",
    "county": "רחובות",
    "cityNameInEnglish": "BET OVED"
  },
  {
    "id": 190,
    "text": "בית עוזיאל",
    "county": "רמלה",
    "cityNameInEnglish": "BET UZZI'EL"
  },
  {
    "id": 191,
    "text": "בית עזרא",
    "county": "אשקלון",
    "cityNameInEnglish": "BET EZRA"
  },
  {
    "id": 192,
    "text": "בית עריף",
    "county": "רמלה",
    "cityNameInEnglish": "BET ARIF"
  },
  {
    "id": 193,
    "text": "בית צבי",
    "county": "חדרה",
    "cityNameInEnglish": "BET ZEVI"
  },
  {
    "id": 194,
    "text": "בית קמה",
    "county": "באר שבע",
    "cityNameInEnglish": "BET QAMA"
  },
  {
    "id": 195,
    "text": "בית קשת",
    "county": "כנרת",
    "cityNameInEnglish": "BET QESHET"
  },
  {
    "id": 196,
    "text": "בית רבן",
    "county": "רחובות",
    "cityNameInEnglish": "BET RABBAN"
  },
  {
    "id": 197,
    "text": "בית רימון",
    "county": "עפולה",
    "cityNameInEnglish": "BET RIMMON"
  },
  {
    "id": 198,
    "text": "בית שאן",
    "county": "עפולה",
    "cityNameInEnglish": "BET SHE'AN"
  },
  {
    "id": 199,
    "text": "בית שמש",
    "county": "ירושלים",
    "cityNameInEnglish": "BET SHEMESH"
  },
  {
    "id": 200,
    "text": "בית שערים",
    "county": "עפולה",
    "cityNameInEnglish": "BET SHE'ARIM"
  },
  {
    "id": 201,
    "text": "בית שקמה",
    "county": "אשקלון",
    "cityNameInEnglish": "BET SHIQMA"
  },
  {
    "id": 202,
    "text": "ביתן אהרן",
    "county": "השרון",
    "cityNameInEnglish": "BITAN AHARON"
  },
  {
    "id": 203,
    "text": "ביתר עילית",
    "county": "בית לחם",
    "cityNameInEnglish": "BETAR ILLIT"
  },
  {
    "id": 204,
    "text": "בלפוריה",
    "county": "עפולה",
    "cityNameInEnglish": "BALFURIYYA"
  },
  {
    "id": 205,
    "text": "בן זכאי",
    "county": "רחובות",
    "cityNameInEnglish": "BEN ZAKKAY"
  },
  {
    "id": 206,
    "text": "בן עמי",
    "county": "עכו",
    "cityNameInEnglish": "BEN AMMI"
  },
  {
    "id": 207,
    "text": "בן שמן )כפר נוער(",
    "county": "רמלה",
    "cityNameInEnglish": "BEN SHEMEN(K.NO'AR)"
  },
  {
    "id": 208,
    "text": "בן שמן",
    "county": "רמלה",
    "cityNameInEnglish": "BEN SHEMEN (MOSHAV)"
  },
  {
    "id": 209,
    "text": "בני ברק",
    "county": "רמת גן",
    "cityNameInEnglish": "BENE BERAQ"
  },
  {
    "id": 210,
    "text": "בני דקלים",
    "county": "אשקלון",
    "cityNameInEnglish": "BNE DKALIM"
  },
  {
    "id": 211,
    "text": "בני דרום",
    "county": "רחובות",
    "cityNameInEnglish": "BENE DAROM"
  },
  {
    "id": 212,
    "text": "בני דרור",
    "county": "השרון",
    "cityNameInEnglish": "BENE DEROR"
  },
  {
    "id": 213,
    "text": "בני יהודה",
    "county": "גולן",
    "cityNameInEnglish": "BENE YEHUDA"
  },
  {
    "id": 214,
    "text": "בני נצרים",
    "county": "באר שבע",
    "cityNameInEnglish": "BENE NEZARIM"
  },
  {
    "id": 215,
    "text": "בני עטרות",
    "county": "פתח תקווה",
    "cityNameInEnglish": "BENE ATAROT"
  },
  {
    "id": 216,
    "text": "בני עי\"ש",
    "county": "רחובות",
    "cityNameInEnglish": "BENE AYISH"
  },
  {
    "id": 217,
    "text": "בני ציון",
    "county": "השרון",
    "cityNameInEnglish": "BENE ZIYYON"
  },
  {
    "id": 218,
    "text": "בני ראם",
    "county": "רחובות",
    "cityNameInEnglish": "BENE RE'EM"
  },
  {
    "id": 219,
    "text": "בניה",
    "county": "רחובות",
    "cityNameInEnglish": "BENAYA"
  },
  {
    "id": 220,
    "text": "בנימינה-גבעת עדה",
    "county": "חדרה",
    "cityNameInEnglish": "BINYAMINA"
  },
  {
    "id": 221,
    "text": "בסמ\"ה",
    "county": "חדרה",
    "cityNameInEnglish": "BASMA"
  },
  {
    "id": 222,
    "text": "בסמת טבעון",
    "county": "עפולה",
    "cityNameInEnglish": "BASMAT TAB'UN"
  },
  {
    "id": 223,
    "text": "בענה",
    "county": "עכו",
    "cityNameInEnglish": "BI NE"
  },
  {
    "id": 224,
    "text": "בצרה",
    "county": "השרון",
    "cityNameInEnglish": "BAZRA"
  },
  {
    "id": 225,
    "text": "בצת",
    "county": "עכו",
    "cityNameInEnglish": "BEZET"
  },
  {
    "id": 226,
    "text": "בקוע",
    "county": "ירושלים",
    "cityNameInEnglish": "BEQOA"
  },
  {
    "id": 227,
    "text": "בקעות",
    "county": "ירדן",
    "cityNameInEnglish": "BEQA'OT"
  },
  {
    "id": 228,
    "text": "בר גיורא",
    "county": "ירושלים",
    "cityNameInEnglish": "BAR GIYYORA"
  },
  {
    "id": 229,
    "text": "בר יוחאי",
    "county": "צפת",
    "cityNameInEnglish": "BAR YOHAY"
  },
  {
    "id": 230,
    "text": "ברוכין",
    "county": "טול כרם",
    "cityNameInEnglish": "BRUKHIN"
  },
  {
    "id": 231,
    "text": "ברור חיל",
    "county": "אשקלון",
    "cityNameInEnglish": "BEROR HAYIL"
  },
  {
    "id": 232,
    "text": "ברוש",
    "county": "באר שבע",
    "cityNameInEnglish": "BEROSH"
  },
  {
    "id": 233,
    "text": "ברכה",
    "county": "שכם",
    "cityNameInEnglish": "BERAKHA"
  },
  {
    "id": 234,
    "text": "ברכיה",
    "county": "אשקלון",
    "cityNameInEnglish": "BEREKHYA"
  },
  {
    "id": 235,
    "text": "ברעם",
    "county": "צפת",
    "cityNameInEnglish": "BAR'AM"
  },
  {
    "id": 236,
    "text": "ברק",
    "county": "עפולה",
    "cityNameInEnglish": "BARAQ"
  },
  {
    "id": 237,
    "text": "ברקאי",
    "county": "חדרה",
    "cityNameInEnglish": "BARQAY"
  },
  {
    "id": 238,
    "text": "ברקן",
    "county": "טול כרם",
    "cityNameInEnglish": "BARQAN"
  },
  {
    "id": 239,
    "text": "ברקת",
    "county": "פתח תקווה",
    "cityNameInEnglish": "BAREQET"
  },
  {
    "id": 240,
    "text": "בת הדר",
    "county": "אשקלון",
    "cityNameInEnglish": "BAT HADAR"
  },
  {
    "id": 241,
    "text": "בת חן",
    "county": "השרון",
    "cityNameInEnglish": "BAT HEN"
  },
  {
    "id": 242,
    "text": "בת חפר",
    "county": "השרון",
    "cityNameInEnglish": "BAT HEFER"
  },
  {
    "id": 243,
    "text": "בת חצור",
    "county": "אשקלון",
    "cityNameInEnglish": "BAT HAZOR"
  },
  {
    "id": 244,
    "text": "בת ים",
    "county": "חולון",
    "cityNameInEnglish": "BAT YAM"
  },
  {
    "id": 245,
    "text": "בת עין",
    "county": "בית לחם",
    "cityNameInEnglish": "BAT AYIN"
  },
  {
    "id": 246,
    "text": "בת שלמה",
    "county": "חדרה",
    "cityNameInEnglish": "BAT SHELOMO"
  },
  {
    "id": 247,
    "text": "ג'דיידה-מכר",
    "county": "עכו",
    "cityNameInEnglish": "JUDEIDE-MAKER"
  },
  {
    "id": 248,
    "text": "ג'ולס",
    "county": "עכו",
    "cityNameInEnglish": "JULIS"
  },
  {
    "id": 249,
    "text": "ג'לג'וליה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "JALJULYE"
  },
  {
    "id": 250,
    "text": "ג'נאביב",
    "county": "באר שבע",
    "cityNameInEnglish": "JUNNABIB"
  },
  {
    "id": 251,
    "text": "ג'סר א-זרקא",
    "county": "חדרה",
    "cityNameInEnglish": "JISR AZ-ZARQA"
  },
  {
    "id": 252,
    "text": "ג'ש )גוש חלב(",
    "county": "צפת",
    "cityNameInEnglish": "JISH(GUSH HALAV)"
  },
  {
    "id": 253,
    "text": "ג'ת",
    "county": "חדרה",
    "cityNameInEnglish": "JAAT"
  },
  {
    "id": 254,
    "text": "גאולי תימן",
    "county": "השרון",
    "cityNameInEnglish": "GE'ULE TEMAN"
  },
  {
    "id": 255,
    "text": "גאולים",
    "county": "השרון",
    "cityNameInEnglish": "GE'ULIM"
  },
  {
    "id": 256,
    "text": "גאליה",
    "county": "רחובות",
    "cityNameInEnglish": "GE'ALYA"
  },
  {
    "id": 257,
    "text": "גבולות",
    "county": "באר שבע",
    "cityNameInEnglish": "GEVULOT"
  },
  {
    "id": 258,
    "text": "גבים",
    "county": "אשקלון",
    "cityNameInEnglish": "GEVIM"
  },
  {
    "id": 259,
    "text": "גבע",
    "county": "עפולה",
    "cityNameInEnglish": "GEVA"
  },
  {
    "id": 260,
    "text": "גבע בנימין",
    "county": "ראמאללה",
    "cityNameInEnglish": "GEVA BINYAMIN"
  },
  {
    "id": 261,
    "text": "גבע כרמל",
    "county": "חדרה",
    "cityNameInEnglish": "GEVA  KARMEL"
  },
  {
    "id": 262,
    "text": "גבעולים",
    "county": "באר שבע",
    "cityNameInEnglish": "GIV'OLIM"
  },
  {
    "id": 263,
    "text": "גבעון החדשה",
    "county": "ראמאללה",
    "cityNameInEnglish": "GIV'ON HAHADASHA"
  },
  {
    "id": 264,
    "text": "גבעות בר",
    "county": "באר שבע",
    "cityNameInEnglish": "GEVA'OT BAR"
  },
  {
    "id": 265,
    "text": "גבעת אבני",
    "county": "כנרת",
    "cityNameInEnglish": "GIV'AT AVNI"
  },
  {
    "id": 266,
    "text": "גבעת אלה",
    "county": "עפולה",
    "cityNameInEnglish": "GIV'AT ELA"
  },
  {
    "id": 267,
    "text": "גבעת ברנר",
    "county": "רחובות",
    "cityNameInEnglish": "GIV'AT BRENNER"
  },
  {
    "id": 268,
    "text": "גבעת השלושה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GIV'AT HASHELOSHA"
  },
  {
    "id": 269,
    "text": "גבעת זאב",
    "county": "ראמאללה",
    "cityNameInEnglish": "GIV'AT ZE'EV"
  },
  {
    "id": 270,
    "text": "גבעת ח\"ן",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GIV'AT HEN"
  },
  {
    "id": 271,
    "text": "גבעת חיים",
    "county": "השרון",
    "cityNameInEnglish": "GIV'AT HAYYIM (IHUD)"
  },
  {
    "id": 272,
    "text": "גבעת חיים )מאוחד(",
    "county": "השרון",
    "cityNameInEnglish": "GIV'AT HAYYIM(ME'UHA"
  },
  {
    "id": 273,
    "text": "גבעת יואב",
    "county": "גולן",
    "cityNameInEnglish": "GIV'AT YO'AV"
  },
  {
    "id": 274,
    "text": "גבעת יערים",
    "county": "ירושלים",
    "cityNameInEnglish": "GIV'AT YE'ARIM"
  },
  {
    "id": 275,
    "text": "גבעת ישעיהו",
    "county": "ירושלים",
    "cityNameInEnglish": "GIV'AT YESHA'YAHU"
  },
  {
    "id": 276,
    "text": "גבעת כ\"ח",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GIV'AT KOAH"
  },
  {
    "id": 277,
    "text": "גבעת ניל\"י",
    "county": "חדרה",
    "cityNameInEnglish": "GIV'AT NILI"
  },
  {
    "id": 278,
    "text": "גבעת עוז",
    "county": "עפולה",
    "cityNameInEnglish": "GIV'AT OZ"
  },
  {
    "id": 279,
    "text": "גבעת שמואל",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GIV'AT SHEMU'EL"
  },
  {
    "id": 280,
    "text": "גבעת שמש",
    "county": "ירושלים",
    "cityNameInEnglish": "GIV'AT SHEMESH"
  },
  {
    "id": 281,
    "text": "גבעת שפירא",
    "county": "השרון",
    "cityNameInEnglish": "GIV'AT SHAPPIRA"
  },
  {
    "id": 282,
    "text": "גבעתי",
    "county": "אשקלון",
    "cityNameInEnglish": "GIV'ATI"
  },
  {
    "id": 283,
    "text": "גבעתיים",
    "county": "רמת גן",
    "cityNameInEnglish": "GIV'ATAYIM"
  },
  {
    "id": 284,
    "text": "גברעם",
    "county": "אשקלון",
    "cityNameInEnglish": "GEVAR'AM"
  },
  {
    "id": 285,
    "text": "גבת",
    "county": "עפולה",
    "cityNameInEnglish": "GEVAT"
  },
  {
    "id": 286,
    "text": "גדות",
    "county": "צפת",
    "cityNameInEnglish": "GADOT"
  },
  {
    "id": 287,
    "text": "גדיש",
    "county": "עפולה",
    "cityNameInEnglish": "GADISH"
  },
  {
    "id": 288,
    "text": "גדעונה",
    "county": "עפולה",
    "cityNameInEnglish": "GID'ONA"
  },
  {
    "id": 289,
    "text": "גדרה",
    "county": "רחובות",
    "cityNameInEnglish": "GEDERA"
  },
  {
    "id": 290,
    "text": "גונן",
    "county": "צפת",
    "cityNameInEnglish": "GONEN"
  },
  {
    "id": 291,
    "text": "גורן",
    "county": "עכו",
    "cityNameInEnglish": "GOREN"
  },
  {
    "id": 292,
    "text": "גורנות הגליל",
    "county": "עכו",
    "cityNameInEnglish": "GORNOT HAGALIL"
  },
  {
    "id": 293,
    "text": "גזית",
    "county": "עפולה",
    "cityNameInEnglish": "GAZIT"
  },
  {
    "id": 294,
    "text": "גזר",
    "county": "רמלה",
    "cityNameInEnglish": "GEZER"
  },
  {
    "id": 295,
    "text": "גיאה",
    "county": "אשקלון",
    "cityNameInEnglish": "GE'A"
  },
  {
    "id": 296,
    "text": "גיבתון",
    "county": "רחובות",
    "cityNameInEnglish": "GIBBETON"
  },
  {
    "id": 297,
    "text": "גיזו",
    "county": "ירושלים",
    "cityNameInEnglish": "GIZO"
  },
  {
    "id": 298,
    "text": "גילון",
    "county": "עכו",
    "cityNameInEnglish": "GILON"
  },
  {
    "id": 299,
    "text": "גילת",
    "county": "באר שבע",
    "cityNameInEnglish": "GILAT"
  },
  {
    "id": 300,
    "text": "גינוסר",
    "county": "כנרת",
    "cityNameInEnglish": "GINNOSAR"
  },
  {
    "id": 301,
    "text": "גיניגר",
    "county": "עפולה",
    "cityNameInEnglish": "GINNEGAR"
  },
  {
    "id": 302,
    "text": "גינתון",
    "county": "רמלה",
    "cityNameInEnglish": "GINNATON"
  },
  {
    "id": 303,
    "text": "גיתה",
    "county": "עכו",
    "cityNameInEnglish": "GITTA"
  },
  {
    "id": 304,
    "text": "גיתית",
    "county": "ירדן",
    "cityNameInEnglish": "GITTIT"
  },
  {
    "id": 305,
    "text": "גלאון",
    "county": "אשקלון",
    "cityNameInEnglish": "GAL'ON"
  },
  {
    "id": 306,
    "text": "גלגל",
    "county": "ירדן",
    "cityNameInEnglish": "GILGAL"
  },
  {
    "id": 307,
    "text": "גליל ים",
    "county": "תל אביב",
    "cityNameInEnglish": "GELIL YAM"
  },
  {
    "id": 308,
    "text": "גלעד )אבן יצחק(",
    "county": "עפולה",
    "cityNameInEnglish": "EVEN YIZHAQ(GAL'ED)"
  },
  {
    "id": 309,
    "text": "גמזו",
    "county": "רמלה",
    "cityNameInEnglish": "GIMZO"
  },
  {
    "id": 310,
    "text": "גן הדרום",
    "county": "רחובות",
    "cityNameInEnglish": "GAN HADAROM"
  },
  {
    "id": 311,
    "text": "גן השומרון",
    "county": "חדרה",
    "cityNameInEnglish": "GAN HASHOMERON"
  },
  {
    "id": 312,
    "text": "גן חיים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GAN HAYYIM"
  },
  {
    "id": 313,
    "text": "גן יאשיה",
    "county": "השרון",
    "cityNameInEnglish": "GAN YOSHIYYA"
  },
  {
    "id": 314,
    "text": "גן יבנה",
    "county": "רחובות",
    "cityNameInEnglish": "GAN YAVNE"
  },
  {
    "id": 315,
    "text": "גן נר",
    "county": "עפולה",
    "cityNameInEnglish": "GAN NER"
  },
  {
    "id": 316,
    "text": "גן שורק",
    "county": "רחובות",
    "cityNameInEnglish": "GAN SOREQ"
  },
  {
    "id": 317,
    "text": "גן שלמה",
    "county": "רחובות",
    "cityNameInEnglish": "GAN SHELOMO"
  },
  {
    "id": 318,
    "text": "גן שמואל",
    "county": "חדרה",
    "cityNameInEnglish": "GAN SHEMU'EL"
  },
  {
    "id": 319,
    "text": "גנות",
    "county": "רמלה",
    "cityNameInEnglish": "GANNOT"
  },
  {
    "id": 320,
    "text": "גנות הדר",
    "county": "השרון",
    "cityNameInEnglish": "GANNOT HADAR"
  },
  {
    "id": 321,
    "text": "גני הדר",
    "county": "רמלה",
    "cityNameInEnglish": "GANNE HADAR"
  },
  {
    "id": 322,
    "text": "גני טל",
    "county": "רחובות",
    "cityNameInEnglish": "GANNE TAL"
  },
  {
    "id": 323,
    "text": "גני יוחנן",
    "county": "רחובות",
    "cityNameInEnglish": "GANNE YOHANAN"
  },
  {
    "id": 324,
    "text": "גני מודיעין",
    "county": "ראמאללה",
    "cityNameInEnglish": "GANNE MODIIN"
  },
  {
    "id": 325,
    "text": "גני עם",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GANNE AM"
  },
  {
    "id": 326,
    "text": "גני תקווה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GANNE TIQWA"
  },
  {
    "id": 327,
    "text": "געש",
    "county": "השרון",
    "cityNameInEnglish": "GA'ASH"
  },
  {
    "id": 328,
    "text": "געתון",
    "county": "עכו",
    "cityNameInEnglish": "GA'TON"
  },
  {
    "id": 329,
    "text": "גפן",
    "county": "ירושלים",
    "cityNameInEnglish": "GEFEN"
  },
  {
    "id": 330,
    "text": "גרופית",
    "county": "באר שבע",
    "cityNameInEnglish": "GEROFIT"
  },
  {
    "id": 331,
    "text": "גשור",
    "county": "גולן",
    "cityNameInEnglish": "GESHUR"
  },
  {
    "id": 332,
    "text": "גשר",
    "county": "כנרת",
    "cityNameInEnglish": "GESHER"
  },
  {
    "id": 333,
    "text": "גשר הזיו",
    "county": "עכו",
    "cityNameInEnglish": "GESHER HAZIW"
  },
  {
    "id": 334,
    "text": "גת",
    "county": "אשקלון",
    "cityNameInEnglish": "GAT(QIBBUZ)"
  },
  {
    "id": 335,
    "text": "גת רימון",
    "county": "פתח תקווה",
    "cityNameInEnglish": "GAT RIMMON"
  },
  {
    "id": 336,
    "text": "דאלית אל-כרמל",
    "county": "חיפה",
    "cityNameInEnglish": "DALIYAT AL-KARMEL"
  },
  {
    "id": 337,
    "text": "דבורה",
    "county": "עפולה",
    "cityNameInEnglish": "DEVORA"
  },
  {
    "id": 338,
    "text": "דבוריה",
    "county": "עפולה",
    "cityNameInEnglish": "DABBURYE"
  },
  {
    "id": 339,
    "text": "דבירה",
    "county": "באר שבע",
    "cityNameInEnglish": "DEVIRA"
  },
  {
    "id": 340,
    "text": "דברת",
    "county": "עפולה",
    "cityNameInEnglish": "DAVERAT"
  },
  {
    "id": 341,
    "text": "דגניה א'",
    "county": "כנרת",
    "cityNameInEnglish": "DEGANYA ALEF"
  },
  {
    "id": 342,
    "text": "דגניה ב'",
    "county": "כנרת",
    "cityNameInEnglish": "DEGANYA BET"
  },
  {
    "id": 343,
    "text": "דוב\"ב",
    "county": "צפת",
    "cityNameInEnglish": "DOVEV"
  },
  {
    "id": 344,
    "text": "דולב",
    "county": "ראמאללה",
    "cityNameInEnglish": "DOLEV"
  },
  {
    "id": 345,
    "text": "דור",
    "county": "חדרה",
    "cityNameInEnglish": "DOR"
  },
  {
    "id": 346,
    "text": "דורות",
    "county": "אשקלון",
    "cityNameInEnglish": "DOROT"
  },
  {
    "id": 347,
    "text": "דחי",
    "county": "עפולה",
    "cityNameInEnglish": "DAHI"
  },
  {
    "id": 348,
    "text": "דייר אל-אסד",
    "county": "עכו",
    "cityNameInEnglish": "DEIR AL-ASAD"
  },
  {
    "id": 349,
    "text": "דייר חנא",
    "county": "עכו",
    "cityNameInEnglish": "DEIR HANNA"
  },
  {
    "id": 350,
    "text": "דייר ראפאת",
    "county": "ירושלים",
    "cityNameInEnglish": "DEIR RAFAT"
  },
  {
    "id": 351,
    "text": "דימונה",
    "county": "באר שבע",
    "cityNameInEnglish": "DIMONA"
  },
  {
    "id": 352,
    "text": "דישון",
    "county": "צפת",
    "cityNameInEnglish": "DISHON"
  },
  {
    "id": 353,
    "text": "דליה",
    "county": "עפולה",
    "cityNameInEnglish": "DALIYYA"
  },
  {
    "id": 354,
    "text": "דלתון",
    "county": "צפת",
    "cityNameInEnglish": "DALTON"
  },
  {
    "id": 355,
    "text": "דמיידה",
    "county": "עכו",
    "cityNameInEnglish": "DEMEIDE"
  },
  {
    "id": 356,
    "text": "דן",
    "county": "צפת",
    "cityNameInEnglish": "DAN"
  },
  {
    "id": 357,
    "text": "דפנה",
    "county": "צפת",
    "cityNameInEnglish": "DAFNA"
  },
  {
    "id": 358,
    "text": "דקל",
    "county": "באר שבע",
    "cityNameInEnglish": "DEQEL"
  },
  {
    "id": 359,
    "text": "דריג'את",
    "county": "באר שבע",
    "cityNameInEnglish": "DERIG'AT"
  },
  {
    "id": 360,
    "text": "האון",
    "county": "כנרת",
    "cityNameInEnglish": "HAON"
  },
  {
    "id": 361,
    "text": "הבונים",
    "county": "חדרה",
    "cityNameInEnglish": "HABONIM"
  },
  {
    "id": 362,
    "text": "הגושרים",
    "county": "צפת",
    "cityNameInEnglish": "HAGOSHERIM"
  },
  {
    "id": 363,
    "text": "הדר עם",
    "county": "השרון",
    "cityNameInEnglish": "HADAR AM"
  },
  {
    "id": 364,
    "text": "הוד השרון",
    "county": "פתח תקווה",
    "cityNameInEnglish": "HOD HASHARON"
  },
  {
    "id": 365,
    "text": "הודיה",
    "county": "אשקלון",
    "cityNameInEnglish": "HODIYYA"
  },
  {
    "id": 366,
    "text": "הודיות",
    "county": "כנרת",
    "cityNameInEnglish": "HODAYOT"
  },
  {
    "id": 367,
    "text": "הוואשלה",
    "county": "באר שבע",
    "cityNameInEnglish": "HAWASHLA"
  },
  {
    "id": 368,
    "text": "הוזייל",
    "county": "באר שבע",
    "cityNameInEnglish": "HUZAYYEL"
  },
  {
    "id": 369,
    "text": "הושעיה",
    "county": "עפולה",
    "cityNameInEnglish": "HOSHA'AYA"
  },
  {
    "id": 370,
    "text": "הזורע",
    "county": "עפולה",
    "cityNameInEnglish": "HAZOREA"
  },
  {
    "id": 371,
    "text": "הזורעים",
    "county": "כנרת",
    "cityNameInEnglish": "HAZORE'IM"
  },
  {
    "id": 372,
    "text": "החותרים",
    "county": "חדרה",
    "cityNameInEnglish": "HAHOTERIM"
  },
  {
    "id": 373,
    "text": "היוגב",
    "county": "עפולה",
    "cityNameInEnglish": "HAYOGEV"
  },
  {
    "id": 374,
    "text": "הילה",
    "county": "עכו",
    "cityNameInEnglish": "HILLA"
  },
  {
    "id": 375,
    "text": "המעפיל",
    "county": "השרון",
    "cityNameInEnglish": "HAMA'PIL"
  },
  {
    "id": 376,
    "text": "הסוללים",
    "county": "עפולה",
    "cityNameInEnglish": "HASOLELIM"
  },
  {
    "id": 377,
    "text": "העוגן",
    "county": "השרון",
    "cityNameInEnglish": "HAOGEN"
  },
  {
    "id": 378,
    "text": "הר אדר",
    "county": "ראמאללה",
    "cityNameInEnglish": "HAR ADAR"
  },
  {
    "id": 379,
    "text": "הר גילה",
    "county": "בית לחם",
    "cityNameInEnglish": "HAR GILLO"
  },
  {
    "id": 380,
    "text": "הר עמשא",
    "county": "באר שבע",
    "cityNameInEnglish": "HAR AMASA"
  },
  {
    "id": 381,
    "text": "הראל",
    "county": "ירושלים",
    "cityNameInEnglish": "HAR'EL"
  },
  {
    "id": 382,
    "text": "הרדוף",
    "county": "עפולה",
    "cityNameInEnglish": "HARDUF"
  },
  {
    "id": 383,
    "text": "הרצליה",
    "county": "תל אביב",
    "cityNameInEnglish": "HERZELIYYA"
  },
  {
    "id": 384,
    "text": "הררית",
    "county": "עכו",
    "cityNameInEnglish": "HARARIT"
  },
  {
    "id": 385,
    "text": "ורד יריחו",
    "county": "ירדן",
    "cityNameInEnglish": "WERED YERIHO"
  },
  {
    "id": 386,
    "text": "ורדון",
    "county": "אשקלון",
    "cityNameInEnglish": "WARDON"
  },
  {
    "id": 387,
    "text": "זבארגה",
    "county": "באר שבע",
    "cityNameInEnglish": "ZABARGA"
  },
  {
    "id": 388,
    "text": "זבדיאל",
    "county": "אשקלון",
    "cityNameInEnglish": "ZAVDI'EL"
  },
  {
    "id": 389,
    "text": "זוהר",
    "county": "אשקלון",
    "cityNameInEnglish": "ZOHAR"
  },
  {
    "id": 390,
    "text": "זיקים",
    "county": "אשקלון",
    "cityNameInEnglish": "ZIQIM"
  },
  {
    "id": 391,
    "text": "זיתן",
    "county": "רמלה",
    "cityNameInEnglish": "ZETAN"
  },
  {
    "id": 392,
    "text": "זכרון יעקב",
    "county": "חדרה",
    "cityNameInEnglish": "ZIKHRON YA'AQOV"
  },
  {
    "id": 393,
    "text": "זכריה",
    "county": "ירושלים",
    "cityNameInEnglish": "ZEKHARYA"
  },
  {
    "id": 394,
    "text": "זמר",
    "county": "השרון",
    "cityNameInEnglish": "ZEMER"
  },
  {
    "id": 395,
    "text": "זמרת",
    "county": "באר שבע",
    "cityNameInEnglish": "ZIMRAT"
  },
  {
    "id": 396,
    "text": "זנוח",
    "county": "ירושלים",
    "cityNameInEnglish": "ZANOAH"
  },
  {
    "id": 397,
    "text": "זרועה",
    "county": "באר שבע",
    "cityNameInEnglish": "ZERU'A"
  },
  {
    "id": 398,
    "text": "זרזיר",
    "county": "עפולה",
    "cityNameInEnglish": "ZARZIR"
  },
  {
    "id": 399,
    "text": "זרחיה",
    "county": "אשקלון",
    "cityNameInEnglish": "ZERAHYA"
  },
  {
    "id": 400,
    "text": "ח'ואלד",
    "county": "חיפה",
    "cityNameInEnglish": "KHAWALED"
  },
  {
    "id": 401,
    "text": "ח'ואלד",
    "county": "נצרת",
    "cityNameInEnglish": "KHAWALED"
  },
  {
    "id": 402,
    "text": "חבצלת השרון",
    "county": "השרון",
    "cityNameInEnglish": "HAVAZZELET HASHARON"
  },
  {
    "id": 403,
    "text": "חבר",
    "county": "עפולה",
    "cityNameInEnglish": "HEVER"
  },
  {
    "id": 404,
    "text": "חברון",
    "county": "חברון",
    "cityNameInEnglish": ""
  },
  {
    "id": 405,
    "text": "חגור",
    "county": "פתח תקווה",
    "cityNameInEnglish": "HAGOR"
  },
  {
    "id": 406,
    "text": "חגי",
    "county": "חברון",
    "cityNameInEnglish": "HAGGAI"
  },
  {
    "id": 407,
    "text": "חגלה",
    "county": "השרון",
    "cityNameInEnglish": "HOGLA"
  },
  {
    "id": 408,
    "text": "חד-נס",
    "county": "גולן",
    "cityNameInEnglish": "HAD-NES"
  },
  {
    "id": 409,
    "text": "חדיד",
    "county": "רמלה",
    "cityNameInEnglish": "HADID"
  },
  {
    "id": 410,
    "text": "חדרה",
    "county": "חדרה",
    "cityNameInEnglish": "HADERA"
  },
  {
    "id": 411,
    "text": "חוג'ייראת )ד'הרה(",
    "county": "עכו",
    "cityNameInEnglish": "HUJEIRAT (DAHRA)"
  },
  {
    "id": 412,
    "text": "חולדה",
    "county": "רמלה",
    "cityNameInEnglish": "HULDA"
  },
  {
    "id": 413,
    "text": "חולון",
    "county": "חולון",
    "cityNameInEnglish": "HOLON"
  },
  {
    "id": 414,
    "text": "חולית",
    "county": "באר שבע",
    "cityNameInEnglish": "HOLIT"
  },
  {
    "id": 415,
    "text": "חולתה",
    "county": "צפת",
    "cityNameInEnglish": "HULATA"
  },
  {
    "id": 416,
    "text": "חוסן",
    "county": "עכו",
    "cityNameInEnglish": "HOSEN"
  },
  {
    "id": 417,
    "text": "חוסנייה",
    "county": "עכו",
    "cityNameInEnglish": "HUSSNIYYA"
  },
  {
    "id": 418,
    "text": "חופית",
    "county": "השרון",
    "cityNameInEnglish": "HOFIT"
  },
  {
    "id": 419,
    "text": "חוקוק",
    "county": "כנרת",
    "cityNameInEnglish": "HUQOQ"
  },
  {
    "id": 420,
    "text": "חורה",
    "county": "באר שבע",
    "cityNameInEnglish": "HURA"
  },
  {
    "id": 421,
    "text": "חורפיש",
    "county": "עכו",
    "cityNameInEnglish": "HURFEISH"
  },
  {
    "id": 422,
    "text": "חורשים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "HORESHIM"
  },
  {
    "id": 423,
    "text": "חזון",
    "county": "כנרת",
    "cityNameInEnglish": "HAZON"
  },
  {
    "id": 424,
    "text": "חיבת ציון",
    "county": "השרון",
    "cityNameInEnglish": "HIBBAT ZIYYON"
  },
  {
    "id": 425,
    "text": "חיננית",
    "county": "ג'נין",
    "cityNameInEnglish": "HINNANIT"
  },
  {
    "id": 426,
    "text": "חיפה",
    "county": "חיפה",
    "cityNameInEnglish": "HAIFA"
  },
  {
    "id": 427,
    "text": "חירות",
    "county": "השרון",
    "cityNameInEnglish": "HERUT"
  },
  {
    "id": 428,
    "text": "חלוץ",
    "county": "עכו",
    "cityNameInEnglish": "HALUZ"
  },
  {
    "id": 429,
    "text": "חלץ",
    "county": "אשקלון",
    "cityNameInEnglish": "HELEZ"
  },
  {
    "id": 430,
    "text": "חמאם",
    "county": "כנרת",
    "cityNameInEnglish": "HAMAM"
  },
  {
    "id": 431,
    "text": "חמד",
    "county": "רמלה",
    "cityNameInEnglish": "HEMED"
  },
  {
    "id": 432,
    "text": "חמדיה",
    "county": "עפולה",
    "cityNameInEnglish": "HAMADYA"
  },
  {
    "id": 433,
    "text": "חמדת",
    "county": "ירדן",
    "cityNameInEnglish": "NAHAL HEMDAT"
  },
  {
    "id": 434,
    "text": "חמרה",
    "county": "ירדן",
    "cityNameInEnglish": "HAMRA"
  },
  {
    "id": 435,
    "text": "חניאל",
    "county": "השרון",
    "cityNameInEnglish": "HANNI'EL"
  },
  {
    "id": 436,
    "text": "חניתה",
    "county": "עכו",
    "cityNameInEnglish": "HANITA"
  },
  {
    "id": 437,
    "text": "חנתון",
    "county": "עפולה",
    "cityNameInEnglish": "HANNATON"
  },
  {
    "id": 438,
    "text": "חספין",
    "county": "גולן",
    "cityNameInEnglish": "HASPIN"
  },
  {
    "id": 439,
    "text": "חפץ חיים",
    "county": "רחובות",
    "cityNameInEnglish": "HAFEZ HAYYIM"
  },
  {
    "id": 440,
    "text": "חפצי-בה",
    "county": "עפולה",
    "cityNameInEnglish": "HEFZI-BAH"
  },
  {
    "id": 441,
    "text": "חצב",
    "county": "אשקלון",
    "cityNameInEnglish": "HAZAV"
  },
  {
    "id": 442,
    "text": "חצבה",
    "county": "באר שבע",
    "cityNameInEnglish": "HAZEVA"
  },
  {
    "id": 443,
    "text": "חצור הגלילית",
    "county": "צפת",
    "cityNameInEnglish": "HAZOR HAGELILIT"
  },
  {
    "id": 444,
    "text": "חצור-אשדוד",
    "county": "אשקלון",
    "cityNameInEnglish": "HAZOR-ASHDOD"
  },
  {
    "id": 445,
    "text": "חצר בארותיים",
    "county": "השרון",
    "cityNameInEnglish": "HAZAR BE'EROTAYIM"
  },
  {
    "id": 446,
    "text": "חצרות חולדה",
    "county": "רמלה",
    "cityNameInEnglish": "HAZROT HULDA"
  },
  {
    "id": 447,
    "text": "חצרות יסף",
    "county": "עכו",
    "cityNameInEnglish": "HAZROT YASAF"
  },
  {
    "id": 448,
    "text": "חצרות כ\"ח",
    "county": "פתח תקווה",
    "cityNameInEnglish": "HAZROT KOAH"
  },
  {
    "id": 449,
    "text": "חצרים",
    "county": "באר שבע",
    "cityNameInEnglish": "HAZERIM"
  },
  {
    "id": 450,
    "text": "חרב לאת",
    "county": "השרון",
    "cityNameInEnglish": "HEREV LE'ET"
  },
  {
    "id": 451,
    "text": "חרוצים",
    "county": "השרון",
    "cityNameInEnglish": "HARUZIM"
  },
  {
    "id": 452,
    "text": "חריש",
    "county": "חדרה",
    "cityNameInEnglish": "HARISH"
  },
  {
    "id": 453,
    "text": "חרמש",
    "county": "ג'נין",
    "cityNameInEnglish": "HERMESH"
  },
  {
    "id": 454,
    "text": "חרשים",
    "county": "עכו",
    "cityNameInEnglish": "HARASHIM"
  },
  {
    "id": 455,
    "text": "חשמונאים",
    "county": "ראמאללה",
    "cityNameInEnglish": "HASHMONA'IM"
  },
  {
    "id": 456,
    "text": "טבריה",
    "county": "כנרת",
    "cityNameInEnglish": "TIBERIAS"
  },
  {
    "id": 457,
    "text": "טובא-זנגריה",
    "county": "צפת",
    "cityNameInEnglish": "TUBA-ZANGARIYYE"
  },
  {
    "id": 458,
    "text": "טורעאן",
    "county": "נצרת",
    "cityNameInEnglish": "TUR'AN"
  },
  {
    "id": 459,
    "text": "טייבה",
    "county": "השרון",
    "cityNameInEnglish": "TAYIBE"
  },
  {
    "id": 460,
    "text": "טייבה )בעמק(",
    "county": "עפולה",
    "cityNameInEnglish": "TAYIBE(BAEMEQ)"
  },
  {
    "id": 461,
    "text": "טירה",
    "county": "השרון",
    "cityNameInEnglish": "TIRE"
  },
  {
    "id": 462,
    "text": "טירת יהודה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "TIRAT YEHUDA"
  },
  {
    "id": 463,
    "text": "טירת כרמל",
    "county": "חיפה",
    "cityNameInEnglish": "TIRAT KARMEL"
  },
  {
    "id": 464,
    "text": "טירת צבי",
    "county": "עפולה",
    "cityNameInEnglish": "TIRAT ZEVI"
  },
  {
    "id": 465,
    "text": "טל שחר",
    "county": "ירושלים",
    "cityNameInEnglish": "TAL SHAHAR"
  },
  {
    "id": 466,
    "text": "טל-אל",
    "county": "עכו",
    "cityNameInEnglish": "TAL-EL"
  },
  {
    "id": 467,
    "text": "טללים",
    "county": "באר שבע",
    "cityNameInEnglish": "TELALIM"
  },
  {
    "id": 468,
    "text": "טלמון",
    "county": "ראמאללה",
    "cityNameInEnglish": "TALMON"
  },
  {
    "id": 469,
    "text": "טמרה",
    "county": "עכו",
    "cityNameInEnglish": "TAMRA"
  },
  {
    "id": 470,
    "text": "טמרה )יזרעאל(",
    "county": "עפולה",
    "cityNameInEnglish": "TAMRA (YIZRE'EL)"
  },
  {
    "id": 471,
    "text": "טנא",
    "county": "חברון",
    "cityNameInEnglish": "TENE"
  },
  {
    "id": 472,
    "text": "טפחות",
    "county": "כנרת",
    "cityNameInEnglish": "TEFAHOT"
  },
  {
    "id": 473,
    "text": "יאנוח-ג'ת",
    "county": "עכו",
    "cityNameInEnglish": "YANUH-JAT"
  },
  {
    "id": 474,
    "text": "יבול",
    "county": "באר שבע",
    "cityNameInEnglish": "YEVUL"
  },
  {
    "id": 475,
    "text": "יבנאל",
    "county": "כנרת",
    "cityNameInEnglish": "YAVNE'EL"
  },
  {
    "id": 476,
    "text": "יבנה",
    "county": "רחובות",
    "cityNameInEnglish": "YAVNE"
  },
  {
    "id": 477,
    "text": "יגור",
    "county": "חיפה",
    "cityNameInEnglish": "YAGUR"
  },
  {
    "id": 478,
    "text": "יגל",
    "county": "רמלה",
    "cityNameInEnglish": "YAGEL"
  },
  {
    "id": 479,
    "text": "יד בנימין",
    "county": "רחובות",
    "cityNameInEnglish": "YAD BINYAMIN"
  },
  {
    "id": 480,
    "text": "יד השמונה",
    "county": "ירושלים",
    "cityNameInEnglish": "YAD HASHEMONA"
  },
  {
    "id": 481,
    "text": "יד חנה",
    "county": "השרון",
    "cityNameInEnglish": "YAD HANNA"
  },
  {
    "id": 482,
    "text": "יד מרדכי",
    "county": "אשקלון",
    "cityNameInEnglish": "YAD MORDEKHAY"
  },
  {
    "id": 483,
    "text": "יד נתן",
    "county": "אשקלון",
    "cityNameInEnglish": "YAD NATAN"
  },
  {
    "id": 484,
    "text": "יד רמב\"ם",
    "county": "רמלה",
    "cityNameInEnglish": "YAD RAMBAM"
  },
  {
    "id": 485,
    "text": "ידידה",
    "county": "ירושלים",
    "cityNameInEnglish": "YEDIDA"
  },
  {
    "id": 486,
    "text": "יהוד-מונוסון",
    "county": "פתח תקווה",
    "cityNameInEnglish": "YEHUD-MONOSON"
  },
  {
    "id": 487,
    "text": "יהל",
    "county": "באר שבע",
    "cityNameInEnglish": "YAHEL"
  },
  {
    "id": 488,
    "text": "יובל",
    "county": "צפת",
    "cityNameInEnglish": "YUVAL"
  },
  {
    "id": 489,
    "text": "יובלים",
    "county": "עכו",
    "cityNameInEnglish": "YUVALIM"
  },
  {
    "id": 490,
    "text": "יודפת",
    "county": "עכו",
    "cityNameInEnglish": "YODEFAT"
  },
  {
    "id": 491,
    "text": "יונתן",
    "county": "גולן",
    "cityNameInEnglish": "YONATAN"
  },
  {
    "id": 492,
    "text": "יושיביה",
    "county": "באר שבע",
    "cityNameInEnglish": "YOSHIVYA"
  },
  {
    "id": 493,
    "text": "יזרעאל",
    "county": "עפולה",
    "cityNameInEnglish": "YIZRE'EL"
  },
  {
    "id": 494,
    "text": "יחיעם",
    "county": "עכו",
    "cityNameInEnglish": "YEHI'AM"
  },
  {
    "id": 495,
    "text": "יטבתה",
    "county": "באר שבע",
    "cityNameInEnglish": "YOTVATA"
  },
  {
    "id": 496,
    "text": "ייט\"ב",
    "county": "ירדן",
    "cityNameInEnglish": "YITAV"
  },
  {
    "id": 497,
    "text": "יכיני",
    "county": "אשקלון",
    "cityNameInEnglish": "YAKHINI"
  },
  {
    "id": 498,
    "text": "ינוב",
    "county": "השרון",
    "cityNameInEnglish": "YANUV"
  },
  {
    "id": 499,
    "text": "ינון",
    "county": "אשקלון",
    "cityNameInEnglish": "YINNON"
  },
  {
    "id": 500,
    "text": "יסוד המעלה",
    "county": "צפת",
    "cityNameInEnglish": "YESUD HAMA'ALA"
  },
  {
    "id": 501,
    "text": "יסודות",
    "county": "רחובות",
    "cityNameInEnglish": "YESODOT"
  },
  {
    "id": 502,
    "text": "יסעור",
    "county": "עכו",
    "cityNameInEnglish": "YAS'UR"
  },
  {
    "id": 503,
    "text": "יעד",
    "county": "עכו",
    "cityNameInEnglish": "YA'AD"
  },
  {
    "id": 504,
    "text": "יעל",
    "county": "עפולה",
    "cityNameInEnglish": "YA'EL"
  },
  {
    "id": 505,
    "text": "יעף",
    "county": "השרון",
    "cityNameInEnglish": "YE'AF"
  },
  {
    "id": 506,
    "text": "יערה",
    "county": "עכו",
    "cityNameInEnglish": "YA'ARA"
  },
  {
    "id": 507,
    "text": "יפיע",
    "county": "נצרת",
    "cityNameInEnglish": "YAFI"
  },
  {
    "id": 508,
    "text": "יפית",
    "county": "ירדן",
    "cityNameInEnglish": "YAFIT"
  },
  {
    "id": 509,
    "text": "יפעת",
    "county": "עפולה",
    "cityNameInEnglish": "YIF'AT"
  },
  {
    "id": 510,
    "text": "יפתח",
    "county": "צפת",
    "cityNameInEnglish": "YIFTAH"
  },
  {
    "id": 511,
    "text": "יצהר",
    "county": "שכם",
    "cityNameInEnglish": "YIZHAR"
  },
  {
    "id": 512,
    "text": "יציץ",
    "county": "רמלה",
    "cityNameInEnglish": "YAZIZ"
  },
  {
    "id": 513,
    "text": "יקום",
    "county": "השרון",
    "cityNameInEnglish": "YAQUM"
  },
  {
    "id": 514,
    "text": "יקיר",
    "county": "טול כרם",
    "cityNameInEnglish": "YAQIR"
  },
  {
    "id": 515,
    "text": "יקנעם",
    "county": "עפולה",
    "cityNameInEnglish": "YOQNE'AM(MOSHAVA)"
  },
  {
    "id": 516,
    "text": "יקנעם עילית",
    "county": "עפולה",
    "cityNameInEnglish": "YOQNE'AM ILLIT"
  },
  {
    "id": 517,
    "text": "יראון",
    "county": "צפת",
    "cityNameInEnglish": "YIR'ON"
  },
  {
    "id": 518,
    "text": "ירדנה",
    "county": "עפולה",
    "cityNameInEnglish": "YARDENA"
  },
  {
    "id": 519,
    "text": "ירוחם",
    "county": "באר שבע",
    "cityNameInEnglish": "YEROHAM"
  },
  {
    "id": 520,
    "text": "ירושלים",
    "county": "ירושלים",
    "cityNameInEnglish": "JERUSALEM"
  },
  {
    "id": 521,
    "text": "ירחיב",
    "county": "פתח תקווה",
    "cityNameInEnglish": "YARHIV"
  },
  {
    "id": 522,
    "text": "ירכא",
    "county": "עכו",
    "cityNameInEnglish": "YIRKA"
  },
  {
    "id": 523,
    "text": "ירקונה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "YARQONA"
  },
  {
    "id": 524,
    "text": "ישע",
    "county": "באר שבע",
    "cityNameInEnglish": "YESHA"
  },
  {
    "id": 525,
    "text": "ישעי",
    "county": "ירושלים",
    "cityNameInEnglish": "YISH'I"
  },
  {
    "id": 526,
    "text": "ישרש",
    "county": "רמלה",
    "cityNameInEnglish": "YASHRESH"
  },
  {
    "id": 527,
    "text": "יתד",
    "county": "באר שבע",
    "cityNameInEnglish": "YATED"
  },
  {
    "id": 528,
    "text": "יתיר",
    "county": "באר שבע",
    "cityNameInEnglish": ""
  },
  {
    "id": 529,
    "text": "כאבול",
    "county": "עכו",
    "cityNameInEnglish": "KABUL"
  },
  {
    "id": 530,
    "text": "כאוכב אבו אל-היג'א",
    "county": "עכו",
    "cityNameInEnglish": "KAOKAB ABU AL-HIJA"
  },
  {
    "id": 531,
    "text": "כברי",
    "county": "עכו",
    "cityNameInEnglish": "KABRI"
  },
  {
    "id": 532,
    "text": "כדורי",
    "county": "כנרת",
    "cityNameInEnglish": "KADOORIE"
  },
  {
    "id": 533,
    "text": "כדיתה",
    "county": "צפת",
    "cityNameInEnglish": "KADDITA"
  },
  {
    "id": 534,
    "text": "כוכב השחר",
    "county": "ראמאללה",
    "cityNameInEnglish": "KOKHAV HASHAHAR"
  },
  {
    "id": 535,
    "text": "כוכב יאיר",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KOKHAV YA'IR"
  },
  {
    "id": 536,
    "text": "כוכב יעקב",
    "county": "ראמאללה",
    "cityNameInEnglish": "KOKHAV YA'AQOV"
  },
  {
    "id": 537,
    "text": "כוכב מיכאל",
    "county": "אשקלון",
    "cityNameInEnglish": "KOKHAV MIKHA'EL"
  },
  {
    "id": 538,
    "text": "כורזים",
    "county": "צפת",
    "cityNameInEnglish": "KORAZIM"
  },
  {
    "id": 539,
    "text": "כחל",
    "county": "צפת",
    "cityNameInEnglish": "KAHAL"
  },
  {
    "id": 540,
    "text": "כחלה",
    "county": "באר שבע",
    "cityNameInEnglish": "KOCHLEA"
  },
  {
    "id": 541,
    "text": "כיסופים",
    "county": "באר שבע",
    "cityNameInEnglish": "KISSUFIM"
  },
  {
    "id": 542,
    "text": "כישור",
    "county": "עכו",
    "cityNameInEnglish": "KISHOR"
  },
  {
    "id": 543,
    "text": "כליל",
    "county": "עכו",
    "cityNameInEnglish": "KELIL"
  },
  {
    "id": 544,
    "text": "כלנית",
    "county": "כנרת",
    "cityNameInEnglish": "KALLANIT"
  },
  {
    "id": 545,
    "text": "כמאנה",
    "county": "עכו",
    "cityNameInEnglish": ""
  },
  {
    "id": 546,
    "text": "כמהין",
    "county": "באר שבע",
    "cityNameInEnglish": "KEMEHIN"
  },
  {
    "id": 547,
    "text": "כמון",
    "county": "עכו",
    "cityNameInEnglish": "KAMMON"
  },
  {
    "id": 548,
    "text": "כנות",
    "county": "אשקלון",
    "cityNameInEnglish": "KANNOT"
  },
  {
    "id": 549,
    "text": "כנף",
    "county": "גולן",
    "cityNameInEnglish": "KANAF"
  },
  {
    "id": 550,
    "text": "כנרת",
    "county": "כנרת",
    "cityNameInEnglish": "KINNERET(MOSHAVA)"
  },
  {
    "id": 551,
    "text": "כנרת )קבוצה(",
    "county": "כנרת",
    "cityNameInEnglish": "KINNERET(QEVUZA)"
  },
  {
    "id": 552,
    "text": "כסיפה",
    "county": "באר שבע",
    "cityNameInEnglish": "KUSEIFE"
  },
  {
    "id": 553,
    "text": "כסלון",
    "county": "ירושלים",
    "cityNameInEnglish": "KESALON"
  },
  {
    "id": 554,
    "text": "כסרא-סמיע",
    "county": "עכו",
    "cityNameInEnglish": "KISRA-SUMEI"
  },
  {
    "id": 555,
    "text": "כעביה-טבאש-חג'אג'רה",
    "county": "נצרת",
    "cityNameInEnglish": "KA'ABIYYE-TABBASH-HA"
  },
  {
    "id": 556,
    "text": "כפר אביב",
    "county": "רחובות",
    "cityNameInEnglish": "KEFAR AVIV"
  },
  {
    "id": 557,
    "text": "כפר אדומים",
    "county": "ראמאללה",
    "cityNameInEnglish": "KEFAR ADUMMIM"
  },
  {
    "id": 558,
    "text": "כפר אוריה",
    "county": "ירושלים",
    "cityNameInEnglish": "KEFAR URIYYA"
  },
  {
    "id": 559,
    "text": "כפר אחים",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR AHIM"
  },
  {
    "id": 560,
    "text": "כפר ביאליק",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR BIALIK"
  },
  {
    "id": 561,
    "text": "כפר ביל\"ו",
    "county": "רחובות",
    "cityNameInEnglish": "KEFAR BILU"
  },
  {
    "id": 562,
    "text": "כפר בלום",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR BLUM"
  },
  {
    "id": 563,
    "text": "כפר בן נון",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR BIN NUN"
  },
  {
    "id": 564,
    "text": "כפר ברא",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KAFAR BARA"
  },
  {
    "id": 565,
    "text": "כפר ברוך",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR BARUKH"
  },
  {
    "id": 566,
    "text": "כפר גדעון",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR GID'ON"
  },
  {
    "id": 567,
    "text": "כפר גלים",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR GALLIM"
  },
  {
    "id": 568,
    "text": "כפר גליקסון",
    "county": "חדרה",
    "cityNameInEnglish": "KEFAR GLIKSON"
  },
  {
    "id": 569,
    "text": "כפר גלעדי",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR GIL'ADI"
  },
  {
    "id": 570,
    "text": "כפר דניאל",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR DANIYYEL"
  },
  {
    "id": 571,
    "text": "כפר האורנים",
    "county": "ראמאללה",
    "cityNameInEnglish": "KEFAR HAORANIM"
  },
  {
    "id": 572,
    "text": "כפר החורש",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR HAHORESH"
  },
  {
    "id": 573,
    "text": "כפר המכבי",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR HAMAKKABI"
  },
  {
    "id": 574,
    "text": "כפר הנגיד",
    "county": "רחובות",
    "cityNameInEnglish": "KEFAR HANAGID"
  },
  {
    "id": 575,
    "text": "כפר הנוער הדתי",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR HANO'AR HADATI"
  },
  {
    "id": 576,
    "text": "כפר הנשיא",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR HANASI"
  },
  {
    "id": 577,
    "text": "כפר הס",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR HESS"
  },
  {
    "id": 578,
    "text": "כפר הרא\"ה",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR HARO'E"
  },
  {
    "id": 579,
    "text": "כפר הרי\"ף",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR HARIF"
  },
  {
    "id": 580,
    "text": "כפר ויתקין",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR VITKIN"
  },
  {
    "id": 581,
    "text": "כפר ורבורג",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR WARBURG"
  },
  {
    "id": 582,
    "text": "כפר ורדים",
    "county": "עכו",
    "cityNameInEnglish": "KEFAR WERADIM"
  },
  {
    "id": 583,
    "text": "כפר זוהרים",
    "county": "ירושלים",
    "cityNameInEnglish": "KEFAR ZOHARIM"
  },
  {
    "id": 584,
    "text": "כפר זיתים",
    "county": "כנרת",
    "cityNameInEnglish": "KEFAR ZETIM"
  },
  {
    "id": 585,
    "text": "כפר חב\"ד",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR HABAD"
  },
  {
    "id": 586,
    "text": "כפר חושן",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR HOSHEN"
  },
  {
    "id": 587,
    "text": "כפר חיטים",
    "county": "כנרת",
    "cityNameInEnglish": "KEFAR HITTIM"
  },
  {
    "id": 588,
    "text": "כפר חיים",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR HAYYIM"
  },
  {
    "id": 589,
    "text": "כפר חנניה",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR HANANYA"
  },
  {
    "id": 590,
    "text": "כפר חסידים א'",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR HASIDIM ALEF"
  },
  {
    "id": 591,
    "text": "כפר חסידים ב'",
    "county": "חיפה",
    "cityNameInEnglish": "KEFAR HASIDIM BET"
  },
  {
    "id": 592,
    "text": "כפר חרוב",
    "county": "גולן",
    "cityNameInEnglish": "KEFAR HARUV"
  },
  {
    "id": 593,
    "text": "כפר טרומן",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR TRUMAN"
  },
  {
    "id": 594,
    "text": "כפר יאסיף",
    "county": "עכו",
    "cityNameInEnglish": "KAFAR YASIF"
  },
  {
    "id": 595,
    "text": "כפר ידידיה",
    "county": "השרון",
    "cityNameInEnglish": "YEDIDYA"
  },
  {
    "id": 596,
    "text": "כפר יהושע",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR YEHOSHUA"
  },
  {
    "id": 597,
    "text": "כפר יונה",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR YONA"
  },
  {
    "id": 598,
    "text": "כפר יחזקאל",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR YEHEZQEL"
  },
  {
    "id": 599,
    "text": "כפר יעבץ",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR YA'BEZ"
  },
  {
    "id": 600,
    "text": "כפר כמא",
    "county": "כנרת",
    "cityNameInEnglish": "KAFAR KAMA"
  },
  {
    "id": 601,
    "text": "כפר כנא",
    "county": "נצרת",
    "cityNameInEnglish": "KAFAR KANNA"
  },
  {
    "id": 602,
    "text": "כפר מונש",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR MONASH"
  },
  {
    "id": 603,
    "text": "כפר מימון",
    "county": "באר שבע",
    "cityNameInEnglish": "KEFAR MAYMON"
  },
  {
    "id": 604,
    "text": "כפר מל\"ל",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KEFAR MALAL"
  },
  {
    "id": 605,
    "text": "כפר מנדא",
    "county": "עכו",
    "cityNameInEnglish": "KAFAR MANDA"
  },
  {
    "id": 606,
    "text": "כפר מנחם",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR MENAHEM"
  },
  {
    "id": 607,
    "text": "כפר מסריק",
    "county": "עכו",
    "cityNameInEnglish": "KEFAR MASARYK"
  },
  {
    "id": 608,
    "text": "כפר מצר",
    "county": "נצרת",
    "cityNameInEnglish": "KAFAR MISR"
  },
  {
    "id": 609,
    "text": "כפר מרדכי",
    "county": "רחובות",
    "cityNameInEnglish": "KEFAR MORDEKHAY"
  },
  {
    "id": 610,
    "text": "כפר נטר",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR NETTER"
  },
  {
    "id": 611,
    "text": "כפר סאלד",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR SZOLD"
  },
  {
    "id": 612,
    "text": "כפר סבא",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KEFAR SAVA"
  },
  {
    "id": 613,
    "text": "כפר סילבר",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR SILVER"
  },
  {
    "id": 614,
    "text": "כפר סירקין",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KEFAR SIRKIN"
  },
  {
    "id": 615,
    "text": "כפר עבודה",
    "county": "השרון",
    "cityNameInEnglish": "KEFAR AVODA"
  },
  {
    "id": 616,
    "text": "כפר עזה",
    "county": "אשקלון",
    "cityNameInEnglish": "KEFAR AZZA"
  },
  {
    "id": 617,
    "text": "כפר עציון",
    "county": "בית לחם",
    "cityNameInEnglish": "KEFAR EZYON"
  },
  {
    "id": 618,
    "text": "כפר פינס",
    "county": "חדרה",
    "cityNameInEnglish": "KEFAR PINES"
  },
  {
    "id": 619,
    "text": "כפר קאסם",
    "county": "פתח תקווה",
    "cityNameInEnglish": "KAFAR QASEM"
  },
  {
    "id": 620,
    "text": "כפר קיש",
    "county": "כנרת",
    "cityNameInEnglish": "KEFAR KISH"
  },
  {
    "id": 621,
    "text": "כפר קרע",
    "county": "חדרה",
    "cityNameInEnglish": "KAFAR QARA"
  },
  {
    "id": 622,
    "text": "כפר ראש הנקרה",
    "county": "עכו",
    "cityNameInEnglish": "KEFAR ROSH HANIQRA"
  },
  {
    "id": 623,
    "text": "כפר רוזנואלד )זרעית(",
    "county": "עכו",
    "cityNameInEnglish": "KEFAR ROZENWALD(ZAR."
  },
  {
    "id": 624,
    "text": "כפר רופין",
    "county": "עפולה",
    "cityNameInEnglish": "KEFAR RUPPIN"
  },
  {
    "id": 625,
    "text": "כפר רות",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR RUT"
  },
  {
    "id": 626,
    "text": "כפר שמאי",
    "county": "צפת",
    "cityNameInEnglish": "KEFAR SHAMMAY"
  },
  {
    "id": 627,
    "text": "כפר שמואל",
    "county": "רמלה",
    "cityNameInEnglish": "KEFAR SHEMU'EL"
  },
  {
    "id": 628,
    "text": "כפר שמריהו",
    "county": "תל אביב",
    "cityNameInEnglish": "KEFAR SHEMARYAHU"
  },
  {
    "id": 629,
    "text": "כפר תבור",
    "county": "כנרת",
    "cityNameInEnglish": "KEFAR TAVOR"
  },
  {
    "id": 630,
    "text": "כפר תפוח",
    "county": "טול כרם",
    "cityNameInEnglish": "KEFAR TAPPUAH"
  },
  {
    "id": 631,
    "text": "כרי דשא",
    "county": "כנרת",
    "cityNameInEnglish": "KARE DESHE"
  },
  {
    "id": 632,
    "text": "כרכום",
    "county": "כנרת",
    "cityNameInEnglish": "KARKOM"
  },
  {
    "id": 633,
    "text": "כרם בן זמרה",
    "county": "צפת",
    "cityNameInEnglish": "KEREM BEN ZIMRA"
  },
  {
    "id": 634,
    "text": "כרם בן שמן",
    "county": "רמלה",
    "cityNameInEnglish": "KEREM BEN SHEMEN"
  },
  {
    "id": 635,
    "text": "כרם יבנה )ישיבה(",
    "county": "רחובות",
    "cityNameInEnglish": "KEREM YAVNE(YESHIVA)"
  },
  {
    "id": 636,
    "text": "כרם מהר\"ל",
    "county": "חדרה",
    "cityNameInEnglish": "KEREM MAHARAL"
  },
  {
    "id": 637,
    "text": "כרם שלום",
    "county": "באר שבע",
    "cityNameInEnglish": "KEREM SHALOM"
  },
  {
    "id": 638,
    "text": "כרמי יוסף",
    "county": "רמלה",
    "cityNameInEnglish": "KARME YOSEF"
  },
  {
    "id": 639,
    "text": "כרמי צור",
    "county": "חברון",
    "cityNameInEnglish": "KARME ZUR"
  },
  {
    "id": 640,
    "text": "כרמי קטיף",
    "county": "אשקלון",
    "cityNameInEnglish": "KARME QATIF"
  },
  {
    "id": 641,
    "text": "כרמיאל",
    "county": "עכו",
    "cityNameInEnglish": "KARMI'EL"
  },
  {
    "id": 642,
    "text": "כרמיה",
    "county": "אשקלון",
    "cityNameInEnglish": "KARMIYYA"
  },
  {
    "id": 643,
    "text": "כרמים",
    "county": "באר שבע",
    "cityNameInEnglish": "KERAMIM"
  },
  {
    "id": 644,
    "text": "כרמל",
    "county": "חברון",
    "cityNameInEnglish": "KARMEL"
  },
  {
    "id": 645,
    "text": "לא רשום",
    "county": "לא ידוע",
    "cityNameInEnglish": ""
  },
  {
    "id": 646,
    "text": "לבון",
    "county": "עכו",
    "cityNameInEnglish": "LAVON"
  },
  {
    "id": 647,
    "text": "לביא",
    "county": "כנרת",
    "cityNameInEnglish": "LAVI"
  },
  {
    "id": 648,
    "text": "לבנים",
    "county": "כנרת",
    "cityNameInEnglish": "LIVNIM"
  },
  {
    "id": 649,
    "text": "להב",
    "county": "באר שבע",
    "cityNameInEnglish": "LAHAV"
  },
  {
    "id": 650,
    "text": "להבות הבשן",
    "county": "צפת",
    "cityNameInEnglish": "LAHAVOT HABASHAN"
  },
  {
    "id": 651,
    "text": "להבות חביבה",
    "county": "חדרה",
    "cityNameInEnglish": "LAHAVOT HAVIVA"
  },
  {
    "id": 652,
    "text": "להבים",
    "county": "באר שבע",
    "cityNameInEnglish": "LEHAVIM"
  },
  {
    "id": 653,
    "text": "לוד",
    "county": "רמלה",
    "cityNameInEnglish": "LOD"
  },
  {
    "id": 654,
    "text": "לוזית",
    "county": "ירושלים",
    "cityNameInEnglish": "LUZIT"
  },
  {
    "id": 655,
    "text": "לוחמי הגיטאות",
    "county": "עכו",
    "cityNameInEnglish": "LOHAME HAGETA'OT"
  },
  {
    "id": 656,
    "text": "לוטם",
    "county": "עכו",
    "cityNameInEnglish": "LOTEM"
  },
  {
    "id": 657,
    "text": "לוטן",
    "county": "באר שבע",
    "cityNameInEnglish": "LOTAN"
  },
  {
    "id": 658,
    "text": "לימן",
    "county": "עכו",
    "cityNameInEnglish": "LIMAN"
  },
  {
    "id": 659,
    "text": "לכיש",
    "county": "אשקלון",
    "cityNameInEnglish": "LAKHISH"
  },
  {
    "id": 660,
    "text": "לפיד",
    "county": "רמלה",
    "cityNameInEnglish": "LAPPID"
  },
  {
    "id": 661,
    "text": "לפידות",
    "county": "עכו",
    "cityNameInEnglish": "LAPPIDOT"
  },
  {
    "id": 662,
    "text": "לקיה",
    "county": "באר שבע",
    "cityNameInEnglish": "LAQYE"
  },
  {
    "id": 663,
    "text": "מאור",
    "county": "חדרה",
    "cityNameInEnglish": "MA'OR"
  },
  {
    "id": 664,
    "text": "מאיר שפיה",
    "county": "חדרה",
    "cityNameInEnglish": "ME'IR SHEFEYA"
  },
  {
    "id": 665,
    "text": "מבוא ביתר",
    "county": "ירושלים",
    "cityNameInEnglish": "MEVO BETAR"
  },
  {
    "id": 666,
    "text": "מבוא דותן",
    "county": "ג'נין",
    "cityNameInEnglish": "MEVO DOTAN"
  },
  {
    "id": 667,
    "text": "מבוא חורון",
    "county": "ראמאללה",
    "cityNameInEnglish": "MEVO HORON"
  },
  {
    "id": 668,
    "text": "מבוא חמה",
    "county": "גולן",
    "cityNameInEnglish": "MEVO HAMMA"
  },
  {
    "id": 669,
    "text": "מבוא מודיעים",
    "county": "רמלה",
    "cityNameInEnglish": "MEVO MODI'IM"
  },
  {
    "id": 670,
    "text": "מבואות ים",
    "county": "השרון",
    "cityNameInEnglish": "MEVO'OT YAM"
  },
  {
    "id": 671,
    "text": "מבואות יריחו",
    "county": "ירדן",
    "cityNameInEnglish": "MEVO'OT YERIHO"
  },
  {
    "id": 672,
    "text": "מבועים",
    "county": "באר שבע",
    "cityNameInEnglish": "MABBU'IM"
  },
  {
    "id": 673,
    "text": "מבטחים",
    "county": "באר שבע",
    "cityNameInEnglish": "MIVTAHIM"
  },
  {
    "id": 674,
    "text": "מבקיעים",
    "county": "אשקלון",
    "cityNameInEnglish": "MAVQI'IM"
  },
  {
    "id": 675,
    "text": "מבשרת ציון",
    "county": "ירושלים",
    "cityNameInEnglish": "MEVASSERET ZIYYON"
  },
  {
    "id": 676,
    "text": "מג'ד אל-כרום",
    "county": "עכו",
    "cityNameInEnglish": "MAJD AL-KURUM"
  },
  {
    "id": 677,
    "text": "מג'דל שמס",
    "county": "גולן",
    "cityNameInEnglish": "MAJDAL SHAMS"
  },
  {
    "id": 678,
    "text": "מגאר",
    "county": "כנרת",
    "cityNameInEnglish": "MUGHAR"
  },
  {
    "id": 679,
    "text": "מגדים",
    "county": "חדרה",
    "cityNameInEnglish": "MEGADIM"
  },
  {
    "id": 680,
    "text": "מגדל",
    "county": "כנרת",
    "cityNameInEnglish": "MIGDAL"
  },
  {
    "id": 681,
    "text": "מגדל העמק",
    "county": "עפולה",
    "cityNameInEnglish": "MIGDAL HAEMEQ"
  },
  {
    "id": 682,
    "text": "מגדל עוז",
    "county": "בית לחם",
    "cityNameInEnglish": "MIGDAL OZ"
  },
  {
    "id": 683,
    "text": "מגדלים",
    "county": "שכם",
    "cityNameInEnglish": "MIGDALIM"
  },
  {
    "id": 684,
    "text": "מגידו",
    "county": "עפולה",
    "cityNameInEnglish": "MEGIDDO"
  },
  {
    "id": 685,
    "text": "מגל",
    "county": "חדרה",
    "cityNameInEnglish": "MAGGAL"
  },
  {
    "id": 686,
    "text": "מגן",
    "county": "באר שבע",
    "cityNameInEnglish": "MAGEN"
  },
  {
    "id": 687,
    "text": "מגן שאול",
    "county": "עפולה",
    "cityNameInEnglish": "MAGEN SHA'UL"
  },
  {
    "id": 688,
    "text": "מגשימים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "MAGSHIMIM"
  },
  {
    "id": 689,
    "text": "מדרך עוז",
    "county": "עפולה",
    "cityNameInEnglish": "MIDRAKH OZ"
  },
  {
    "id": 690,
    "text": "מדרשת בן גוריון",
    "county": "באר שבע",
    "cityNameInEnglish": "MIDRESHET BEN GURION"
  },
  {
    "id": 691,
    "text": "מדרשת רופין",
    "county": "השרון",
    "cityNameInEnglish": "MIDRESHET RUPPIN"
  },
  {
    "id": 692,
    "text": "מודיעין עילית",
    "county": "ראמאללה",
    "cityNameInEnglish": "MODI'IN ILLIT"
  },
  {
    "id": 693,
    "text": "מודיעין-מכבים-רעות",
    "county": "רמלה",
    "cityNameInEnglish": "MODI'IN-MAKKABBIM-RE"
  },
  {
    "id": 694,
    "text": "מולדת",
    "county": "עפולה",
    "cityNameInEnglish": "MOLEDET"
  },
  {
    "id": 695,
    "text": "מוצא עילית",
    "county": "ירושלים",
    "cityNameInEnglish": "MOZA ILLIT"
  },
  {
    "id": 696,
    "text": "מוקייבלה",
    "county": "עפולה",
    "cityNameInEnglish": "MUQEIBLE"
  },
  {
    "id": 697,
    "text": "מורן",
    "county": "עכו",
    "cityNameInEnglish": "MORAN"
  },
  {
    "id": 698,
    "text": "מורשת",
    "county": "עכו",
    "cityNameInEnglish": "MORESHET"
  },
  {
    "id": 699,
    "text": "מזור",
    "county": "פתח תקווה",
    "cityNameInEnglish": "MAZOR"
  },
  {
    "id": 700,
    "text": "מזכרת בתיה",
    "county": "רחובות",
    "cityNameInEnglish": "MAZKERET BATYA"
  },
  {
    "id": 701,
    "text": "מזרע",
    "county": "עפולה",
    "cityNameInEnglish": "MIZRA"
  },
  {
    "id": 702,
    "text": "מזרעה",
    "county": "עכו",
    "cityNameInEnglish": "MAZRA'A"
  },
  {
    "id": 703,
    "text": "מחולה",
    "county": "ירדן",
    "cityNameInEnglish": "MEHOLA"
  },
  {
    "id": 704,
    "text": "מחנה הילה",
    "county": "רחובות",
    "cityNameInEnglish": "MAHANE HILLA"
  },
  {
    "id": 705,
    "text": "מחנה טלי",
    "county": "באר שבע",
    "cityNameInEnglish": "MAHANE TALI"
  },
  {
    "id": 706,
    "text": "מחנה יהודית",
    "county": "עפולה",
    "cityNameInEnglish": "MAHANE YEHUDIT"
  },
  {
    "id": 707,
    "text": "מחנה יוכבד",
    "county": "באר שבע",
    "cityNameInEnglish": "MAHANE YOKHVED"
  },
  {
    "id": 708,
    "text": "מחנה יפה",
    "county": "באר שבע",
    "cityNameInEnglish": "MAHANE YAFA"
  },
  {
    "id": 709,
    "text": "מחנה יתיר",
    "county": "באר שבע",
    "cityNameInEnglish": "MAHANE YATTIR"
  },
  {
    "id": 710,
    "text": "מחנה מרים",
    "county": "אשקלון",
    "cityNameInEnglish": "MAHANE MIRYAM"
  },
  {
    "id": 711,
    "text": "מחנה תל נוף",
    "county": "רחובות",
    "cityNameInEnglish": "MAHANE TEL NOF"
  },
  {
    "id": 712,
    "text": "מחניים",
    "county": "צפת",
    "cityNameInEnglish": "MAHANAYIM"
  },
  {
    "id": 713,
    "text": "מחסיה",
    "county": "ירושלים",
    "cityNameInEnglish": "MAHSEYA"
  },
  {
    "id": 714,
    "text": "מטולה",
    "county": "צפת",
    "cityNameInEnglish": "METULA"
  },
  {
    "id": 715,
    "text": "מטע",
    "county": "ירושלים",
    "cityNameInEnglish": "MATTA"
  },
  {
    "id": 716,
    "text": "מי עמי",
    "county": "חדרה",
    "cityNameInEnglish": "ME AMMI"
  },
  {
    "id": 717,
    "text": "מיטב",
    "county": "עפולה",
    "cityNameInEnglish": "METAV"
  },
  {
    "id": 718,
    "text": "מייסר",
    "county": "חדרה",
    "cityNameInEnglish": "MEISER"
  },
  {
    "id": 719,
    "text": "מיצר",
    "county": "גולן",
    "cityNameInEnglish": "MEZAR"
  },
  {
    "id": 720,
    "text": "מירב",
    "county": "עפולה",
    "cityNameInEnglish": "MERAV"
  },
  {
    "id": 721,
    "text": "מירון",
    "county": "צפת",
    "cityNameInEnglish": "MERON"
  },
  {
    "id": 722,
    "text": "מישר",
    "county": "רחובות",
    "cityNameInEnglish": "MESHAR"
  },
  {
    "id": 723,
    "text": "מיתר",
    "county": "באר שבע",
    "cityNameInEnglish": "METAR"
  },
  {
    "id": 724,
    "text": "מכורה",
    "county": "ירדן",
    "cityNameInEnglish": "MEKHORA"
  },
  {
    "id": 725,
    "text": "מכחול",
    "county": "באר שבע",
    "cityNameInEnglish": "MAKCHUL"
  },
  {
    "id": 726,
    "text": "מכמורת",
    "county": "השרון",
    "cityNameInEnglish": "MIKHMORET"
  },
  {
    "id": 727,
    "text": "מכמנים",
    "county": "עכו",
    "cityNameInEnglish": "MIKHMANNIM"
  },
  {
    "id": 728,
    "text": "מלאה",
    "county": "עפולה",
    "cityNameInEnglish": "MELE'A"
  },
  {
    "id": 729,
    "text": "מלילות",
    "county": "באר שבע",
    "cityNameInEnglish": "MELILOT"
  },
  {
    "id": 730,
    "text": "מלכיה",
    "county": "צפת",
    "cityNameInEnglish": "MALKIYYA"
  },
  {
    "id": 731,
    "text": "מלכישוע",
    "county": "עפולה",
    "cityNameInEnglish": "MALKISHUA"
  },
  {
    "id": 732,
    "text": "מנוחה",
    "county": "אשקלון",
    "cityNameInEnglish": "MENUHA"
  },
  {
    "id": 733,
    "text": "מנוף",
    "county": "עכו",
    "cityNameInEnglish": "MANOF"
  },
  {
    "id": 734,
    "text": "מנות",
    "county": "עכו",
    "cityNameInEnglish": "MANOT"
  },
  {
    "id": 735,
    "text": "מנחמיה",
    "county": "כנרת",
    "cityNameInEnglish": "MENAHEMYA"
  },
  {
    "id": 736,
    "text": "מנרה",
    "county": "צפת",
    "cityNameInEnglish": "MENNARA"
  },
  {
    "id": 737,
    "text": "מנשית זבדה",
    "county": "נצרת",
    "cityNameInEnglish": "MANSHIYYET ZABDA"
  },
  {
    "id": 738,
    "text": "מסד",
    "county": "כנרת",
    "cityNameInEnglish": "MASSAD"
  },
  {
    "id": 739,
    "text": "מסדה",
    "county": "כנרת",
    "cityNameInEnglish": "MASSADA"
  },
  {
    "id": 740,
    "text": "מסילות",
    "county": "עפולה",
    "cityNameInEnglish": "MESILLOT"
  },
  {
    "id": 741,
    "text": "מסילת ציון",
    "county": "ירושלים",
    "cityNameInEnglish": "MESILLAT ZIYYON"
  },
  {
    "id": 742,
    "text": "מסלול",
    "county": "באר שבע",
    "cityNameInEnglish": "MASLUL"
  },
  {
    "id": 743,
    "text": "מסעדה",
    "county": "גולן",
    "cityNameInEnglish": "MAS'ADE"
  },
  {
    "id": 744,
    "text": "מסעודין אל-עזאזמה",
    "county": "באר שבע",
    "cityNameInEnglish": "MAS'UDIN AL-'AZAZME"
  },
  {
    "id": 745,
    "text": "מעברות",
    "county": "השרון",
    "cityNameInEnglish": "MA'BAROT"
  },
  {
    "id": 746,
    "text": "מעגלים",
    "county": "באר שבע",
    "cityNameInEnglish": "MA'GALIM"
  },
  {
    "id": 747,
    "text": "מעגן",
    "county": "כנרת",
    "cityNameInEnglish": "MA'AGAN"
  },
  {
    "id": 748,
    "text": "מעגן מיכאל",
    "county": "חדרה",
    "cityNameInEnglish": "MA'AGAN MIKHA'EL"
  },
  {
    "id": 749,
    "text": "מעוז חיים",
    "county": "עפולה",
    "cityNameInEnglish": "MA'OZ HAYYIM"
  },
  {
    "id": 750,
    "text": "מעון",
    "county": "חברון",
    "cityNameInEnglish": "MA'ON"
  },
  {
    "id": 751,
    "text": "מעונה",
    "county": "עכו",
    "cityNameInEnglish": "ME'ONA"
  },
  {
    "id": 752,
    "text": "מעיליא",
    "county": "עכו",
    "cityNameInEnglish": "MI'ELYA"
  },
  {
    "id": 753,
    "text": "מעין ברוך",
    "county": "צפת",
    "cityNameInEnglish": "MA'YAN BARUKH"
  },
  {
    "id": 754,
    "text": "מעין צבי",
    "county": "חדרה",
    "cityNameInEnglish": "MA'YAN ZEVI"
  },
  {
    "id": 755,
    "text": "מעלה אדומים",
    "county": "בית לחם",
    "cityNameInEnglish": "MA'ALE ADUMMIM"
  },
  {
    "id": 756,
    "text": "מעלה אפרים",
    "county": "ירדן",
    "cityNameInEnglish": "MA'ALE EFRAYIM"
  },
  {
    "id": 757,
    "text": "מעלה גלבוע",
    "county": "עפולה",
    "cityNameInEnglish": "MA'ALE GILBOA"
  },
  {
    "id": 758,
    "text": "מעלה גמלא",
    "county": "גולן",
    "cityNameInEnglish": "MA'ALE GAMLA"
  },
  {
    "id": 759,
    "text": "מעלה החמישה",
    "county": "ירושלים",
    "cityNameInEnglish": "MA'ALE HAHAMISHA"
  },
  {
    "id": 760,
    "text": "מעלה לבונה",
    "county": "ראמאללה",
    "cityNameInEnglish": "MA'ALE LEVONA"
  },
  {
    "id": 761,
    "text": "מעלה מכמש",
    "county": "ראמאללה",
    "cityNameInEnglish": "MA'ALE MIKHMAS"
  },
  {
    "id": 762,
    "text": "מעלה עירון",
    "county": "חדרה",
    "cityNameInEnglish": "MA'ALE IRON"
  },
  {
    "id": 763,
    "text": "מעלה עמוס",
    "county": "בית לחם",
    "cityNameInEnglish": "MA'ALE AMOS"
  },
  {
    "id": 764,
    "text": "מעלה שומרון",
    "county": "טול כרם",
    "cityNameInEnglish": "MA'ALE SHOMERON"
  },
  {
    "id": 765,
    "text": "מעלות-תרשיחא",
    "county": "עכו",
    "cityNameInEnglish": "MA'ALOT-TARSHIHA"
  },
  {
    "id": 766,
    "text": "מענית",
    "county": "חדרה",
    "cityNameInEnglish": "MA'ANIT"
  },
  {
    "id": 767,
    "text": "מעש",
    "county": "פתח תקווה",
    "cityNameInEnglish": "MA'AS"
  },
  {
    "id": 768,
    "text": "מפלסים",
    "county": "אשקלון",
    "cityNameInEnglish": "MEFALLESIM"
  },
  {
    "id": 769,
    "text": "מצדות יהודה",
    "county": "חברון",
    "cityNameInEnglish": "MEZADOT YEHUDA"
  },
  {
    "id": 770,
    "text": "מצובה",
    "county": "עכו",
    "cityNameInEnglish": "MAZZUVA"
  },
  {
    "id": 771,
    "text": "מצליח",
    "county": "רמלה",
    "cityNameInEnglish": "MAZLIAH"
  },
  {
    "id": 772,
    "text": "מצפה",
    "county": "כנרת",
    "cityNameInEnglish": "MIZPA"
  },
  {
    "id": 773,
    "text": "מצפה אבי\"ב",
    "county": "עכו",
    "cityNameInEnglish": "MIZPE AVIV"
  },
  {
    "id": 774,
    "text": "מצפה אילן",
    "county": "חדרה",
    "cityNameInEnglish": "MITSPE ILAN"
  },
  {
    "id": 775,
    "text": "מצפה יריחו",
    "county": "ירדן",
    "cityNameInEnglish": "MIZPE YERIHO"
  },
  {
    "id": 776,
    "text": "מצפה נטופה",
    "county": "עפולה",
    "cityNameInEnglish": "MIZPE NETOFA"
  },
  {
    "id": 777,
    "text": "מצפה רמון",
    "county": "באר שבע",
    "cityNameInEnglish": "MIZPE RAMON"
  },
  {
    "id": 778,
    "text": "מצפה שלם",
    "county": "ירדן",
    "cityNameInEnglish": "MIZPE SHALEM"
  },
  {
    "id": 779,
    "text": "מצר",
    "county": "חדרה",
    "cityNameInEnglish": "MEZER"
  },
  {
    "id": 780,
    "text": "מקווה ישראל",
    "county": "חולון",
    "cityNameInEnglish": "MIQWE YISRA'EL"
  },
  {
    "id": 781,
    "text": "מרגליות",
    "county": "צפת",
    "cityNameInEnglish": "MARGALIYYOT"
  },
  {
    "id": 782,
    "text": "מרום גולן",
    "county": "גולן",
    "cityNameInEnglish": "MEROM GOLAN"
  },
  {
    "id": 783,
    "text": "מרחב עם",
    "county": "באר שבע",
    "cityNameInEnglish": "MERHAV AM"
  },
  {
    "id": 784,
    "text": "מרחביה",
    "county": "עפולה",
    "cityNameInEnglish": "MERHAVYA(MOSHAV)"
  },
  {
    "id": 785,
    "text": "מרחביה",
    "county": "עפולה",
    "cityNameInEnglish": "MERHAVYA(QIBBUZ)"
  },
  {
    "id": 786,
    "text": "מרכז שפירא",
    "county": "אשקלון",
    "cityNameInEnglish": "MERKAZ SHAPPIRA"
  },
  {
    "id": 787,
    "text": "משאבי שדה",
    "county": "באר שבע",
    "cityNameInEnglish": "MASH'ABBE SADE"
  },
  {
    "id": 788,
    "text": "משגב דב",
    "county": "רחובות",
    "cityNameInEnglish": "MISGAV DOV"
  },
  {
    "id": 789,
    "text": "משגב עם",
    "county": "צפת",
    "cityNameInEnglish": "MISGAV AM"
  },
  {
    "id": 790,
    "text": "משהד",
    "county": "נצרת",
    "cityNameInEnglish": "MESHHED"
  },
  {
    "id": 791,
    "text": "משואה",
    "county": "ירדן",
    "cityNameInEnglish": "MASSU'A"
  },
  {
    "id": 792,
    "text": "משואות יצחק",
    "county": "אשקלון",
    "cityNameInEnglish": "MASSUOT YIZHAQ"
  },
  {
    "id": 793,
    "text": "משכיות",
    "county": "ירדן",
    "cityNameInEnglish": "MASKIYYOT"
  },
  {
    "id": 794,
    "text": "משמר איילון",
    "county": "רמלה",
    "cityNameInEnglish": "MISHMAR AYYALON"
  },
  {
    "id": 795,
    "text": "משמר דוד",
    "county": "רמלה",
    "cityNameInEnglish": "MISHMAR DAWID"
  },
  {
    "id": 796,
    "text": "משמר הירדן",
    "county": "צפת",
    "cityNameInEnglish": "MISHMAR HAYARDEN"
  },
  {
    "id": 797,
    "text": "משמר הנגב",
    "county": "באר שבע",
    "cityNameInEnglish": "MISHMAR HANEGEV"
  },
  {
    "id": 798,
    "text": "משמר העמק",
    "county": "עפולה",
    "cityNameInEnglish": "MISHMAR HAEMEQ"
  },
  {
    "id": 799,
    "text": "משמר השבעה",
    "county": "רמלה",
    "cityNameInEnglish": "MISHMAR HASHIV'A"
  },
  {
    "id": 800,
    "text": "משמר השרון",
    "county": "השרון",
    "cityNameInEnglish": "MISHMAR HASHARON"
  },
  {
    "id": 801,
    "text": "משמרות",
    "county": "חדרה",
    "cityNameInEnglish": "MISHMAROT"
  },
  {
    "id": 802,
    "text": "משמרת",
    "county": "השרון",
    "cityNameInEnglish": "MISHMERET"
  },
  {
    "id": 803,
    "text": "משען",
    "county": "אשקלון",
    "cityNameInEnglish": "MASH'EN"
  },
  {
    "id": 804,
    "text": "מתן",
    "county": "פתח תקווה",
    "cityNameInEnglish": "MATTAN"
  },
  {
    "id": 805,
    "text": "מתת",
    "county": "עכו",
    "cityNameInEnglish": "MATTAT"
  },
  {
    "id": 806,
    "text": "מתתיהו",
    "county": "ראמאללה",
    "cityNameInEnglish": "MATTITYAHU"
  },
  {
    "id": 807,
    "text": "נאות גולן",
    "county": "גולן",
    "cityNameInEnglish": "NE'OT GOLAN"
  },
  {
    "id": 808,
    "text": "נאות הכיכר",
    "county": "באר שבע",
    "cityNameInEnglish": "NE'OT HAKIKKAR"
  },
  {
    "id": 809,
    "text": "נאות מרדכי",
    "county": "צפת",
    "cityNameInEnglish": "NE'OT MORDEKHAY"
  },
  {
    "id": 810,
    "text": "נאות סמדר",
    "county": "באר שבע",
    "cityNameInEnglish": "SHIZZAFON"
  },
  {
    "id": 811,
    "text": "נאעורה",
    "county": "עפולה",
    "cityNameInEnglish": "NA'URA"
  },
  {
    "id": 812,
    "text": "נבטים",
    "county": "באר שבע",
    "cityNameInEnglish": "NEVATIM"
  },
  {
    "id": 813,
    "text": "נגבה",
    "county": "אשקלון",
    "cityNameInEnglish": "NEGBA"
  },
  {
    "id": 814,
    "text": "נגוהות",
    "county": "חברון",
    "cityNameInEnglish": "NEGOHOT"
  },
  {
    "id": 815,
    "text": "נהורה",
    "county": "אשקלון",
    "cityNameInEnglish": "NEHORA"
  },
  {
    "id": 816,
    "text": "נהלל",
    "county": "עפולה",
    "cityNameInEnglish": "NAHALAL"
  },
  {
    "id": 817,
    "text": "נהריה",
    "county": "עכו",
    "cityNameInEnglish": "NAHARIYYA"
  },
  {
    "id": 818,
    "text": "נוב",
    "county": "גולן",
    "cityNameInEnglish": "NOV"
  },
  {
    "id": 819,
    "text": "נוגה",
    "county": "אשקלון",
    "cityNameInEnglish": "NOGAH"
  },
  {
    "id": 820,
    "text": "נוה צוף",
    "county": "ראמאללה",
    "cityNameInEnglish": "NEVE TSUF"
  },
  {
    "id": 821,
    "text": "נווה",
    "county": "באר שבע",
    "cityNameInEnglish": "NAVE"
  },
  {
    "id": 822,
    "text": "נווה אבות",
    "county": "חדרה",
    "cityNameInEnglish": "NEWE AVOT"
  },
  {
    "id": 823,
    "text": "נווה אור",
    "county": "עפולה",
    "cityNameInEnglish": "NEWE UR"
  },
  {
    "id": 824,
    "text": "נווה אטי\"ב",
    "county": "גולן",
    "cityNameInEnglish": "NEWE ATIV"
  },
  {
    "id": 825,
    "text": "נווה אילן",
    "county": "ירושלים",
    "cityNameInEnglish": "NEWE ILAN"
  },
  {
    "id": 826,
    "text": "נווה איתן",
    "county": "עפולה",
    "cityNameInEnglish": "NEWE ETAN"
  },
  {
    "id": 827,
    "text": "נווה דניאל",
    "county": "בית לחם",
    "cityNameInEnglish": "NEWE DANIYYEL"
  },
  {
    "id": 828,
    "text": "נווה זוהר",
    "county": "באר שבע",
    "cityNameInEnglish": "NEWE ZOHAR"
  },
  {
    "id": 829,
    "text": "נווה זיו",
    "county": "עכו",
    "cityNameInEnglish": "NEWE ZIV"
  },
  {
    "id": 830,
    "text": "נווה חריף",
    "county": "באר שבע",
    "cityNameInEnglish": "NEWE HARIF"
  },
  {
    "id": 831,
    "text": "נווה ים",
    "county": "חדרה",
    "cityNameInEnglish": "NEWE YAM"
  },
  {
    "id": 832,
    "text": "נווה ימין",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NEWE YAMIN"
  },
  {
    "id": 833,
    "text": "נווה ירק",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NEWE YARAQ"
  },
  {
    "id": 834,
    "text": "נווה מבטח",
    "county": "אשקלון",
    "cityNameInEnglish": "NEWE MIVTAH"
  },
  {
    "id": 835,
    "text": "נווה מיכאל",
    "county": "ירושלים",
    "cityNameInEnglish": "NEWE MIKHA'EL"
  },
  {
    "id": 836,
    "text": "נווה שלום",
    "county": "ירושלים",
    "cityNameInEnglish": "NEWE SHALOM"
  },
  {
    "id": 837,
    "text": "נועם",
    "county": "אשקלון",
    "cityNameInEnglish": "NO'AM"
  },
  {
    "id": 838,
    "text": "נוף איילון",
    "county": "רמלה",
    "cityNameInEnglish": "NOF AYYALON"
  },
  {
    "id": 839,
    "text": "נוף הגליל",
    "county": "נצרת",
    "cityNameInEnglish": "NOF HAGALIL"
  },
  {
    "id": 840,
    "text": "נופים",
    "county": "טול כרם",
    "cityNameInEnglish": "NOFIM"
  },
  {
    "id": 841,
    "text": "נופית",
    "county": "חיפה",
    "cityNameInEnglish": "NOFIT"
  },
  {
    "id": 842,
    "text": "נופך",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NOFEKH"
  },
  {
    "id": 843,
    "text": "נוקדים",
    "county": "בית לחם",
    "cityNameInEnglish": "NOQEDIM"
  },
  {
    "id": 844,
    "text": "נורדיה",
    "county": "השרון",
    "cityNameInEnglish": "NORDIYYA"
  },
  {
    "id": 845,
    "text": "נורית",
    "county": "עפולה",
    "cityNameInEnglish": "NURIT"
  },
  {
    "id": 846,
    "text": "נחושה",
    "county": "ירושלים",
    "cityNameInEnglish": "NEHUSHA"
  },
  {
    "id": 847,
    "text": "נחל עוז",
    "county": "אשקלון",
    "cityNameInEnglish": "NAHAL OZ"
  },
  {
    "id": 848,
    "text": "נחלה",
    "county": "אשקלון",
    "cityNameInEnglish": "NAHALA"
  },
  {
    "id": 849,
    "text": "נחליאל",
    "county": "ראמאללה",
    "cityNameInEnglish": "NAHALI'EL"
  },
  {
    "id": 850,
    "text": "נחלים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NEHALIM"
  },
  {
    "id": 851,
    "text": "נחם",
    "county": "ירושלים",
    "cityNameInEnglish": "NAHAM"
  },
  {
    "id": 852,
    "text": "נחף",
    "county": "עכו",
    "cityNameInEnglish": "NAHEF"
  },
  {
    "id": 853,
    "text": "נחשולים",
    "county": "חדרה",
    "cityNameInEnglish": "NAHSHOLIM"
  },
  {
    "id": 854,
    "text": "נחשון",
    "county": "ירושלים",
    "cityNameInEnglish": "NAHSHON"
  },
  {
    "id": 855,
    "text": "נחשונים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NAHSHONIM"
  },
  {
    "id": 856,
    "text": "נטועה",
    "county": "עכו",
    "cityNameInEnglish": "NETU'A"
  },
  {
    "id": 857,
    "text": "נטור",
    "county": "גולן",
    "cityNameInEnglish": "NATUR"
  },
  {
    "id": 858,
    "text": "נטע",
    "county": "אשקלון",
    "cityNameInEnglish": "NETA"
  },
  {
    "id": 859,
    "text": "נטעים",
    "county": "רחובות",
    "cityNameInEnglish": "NETA'IM"
  },
  {
    "id": 860,
    "text": "נטף",
    "county": "ירושלים",
    "cityNameInEnglish": "NATAF"
  },
  {
    "id": 861,
    "text": "ניין",
    "county": "עפולה",
    "cityNameInEnglish": "NEIN"
  },
  {
    "id": 862,
    "text": "ניל\"י",
    "county": "ראמאללה",
    "cityNameInEnglish": "NILI"
  },
  {
    "id": 863,
    "text": "ניצן",
    "county": "אשקלון",
    "cityNameInEnglish": "NIZZAN"
  },
  {
    "id": 864,
    "text": "ניצן ב'",
    "county": "אשקלון",
    "cityNameInEnglish": "NIZZAN B"
  },
  {
    "id": 865,
    "text": "ניצנה )קהילת חינוך(",
    "county": "באר שבע",
    "cityNameInEnglish": "NIZZANA (QEHILAT HIN"
  },
  {
    "id": 866,
    "text": "ניצני סיני",
    "county": "באר שבע",
    "cityNameInEnglish": "NIZZANE SINAY"
  },
  {
    "id": 867,
    "text": "ניצני עוז",
    "county": "השרון",
    "cityNameInEnglish": "NIZZANE OZ"
  },
  {
    "id": 868,
    "text": "ניצנים",
    "county": "אשקלון",
    "cityNameInEnglish": "NIZZANIM"
  },
  {
    "id": 869,
    "text": "ניר אליהו",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NIR ELIYYAHU"
  },
  {
    "id": 870,
    "text": "ניר בנים",
    "county": "אשקלון",
    "cityNameInEnglish": "NIR BANIM"
  },
  {
    "id": 871,
    "text": "ניר גלים",
    "county": "רחובות",
    "cityNameInEnglish": "NIR GALLIM"
  },
  {
    "id": 872,
    "text": "ניר דוד )תל עמל(",
    "county": "עפולה",
    "cityNameInEnglish": "NIR DAWID (TEL AMAL)"
  },
  {
    "id": 873,
    "text": "ניר ח\"ן",
    "county": "אשקלון",
    "cityNameInEnglish": "NIR HEN"
  },
  {
    "id": 874,
    "text": "ניר יפה",
    "county": "עפולה",
    "cityNameInEnglish": "NIR YAFE"
  },
  {
    "id": 875,
    "text": "ניר יצחק",
    "county": "באר שבע",
    "cityNameInEnglish": "NIR YIZHAQ"
  },
  {
    "id": 876,
    "text": "ניר ישראל",
    "county": "אשקלון",
    "cityNameInEnglish": "NIR YISRA'EL"
  },
  {
    "id": 877,
    "text": "ניר משה",
    "county": "באר שבע",
    "cityNameInEnglish": "NIR MOSHE"
  },
  {
    "id": 878,
    "text": "ניר עוז",
    "county": "באר שבע",
    "cityNameInEnglish": "NIR OZ"
  },
  {
    "id": 879,
    "text": "ניר עם",
    "county": "אשקלון",
    "cityNameInEnglish": "NIR AM"
  },
  {
    "id": 880,
    "text": "ניר עציון",
    "county": "חדרה",
    "cityNameInEnglish": "NIR EZYON"
  },
  {
    "id": 881,
    "text": "ניר עקיבא",
    "county": "באר שבע",
    "cityNameInEnglish": "NIR AQIVA"
  },
  {
    "id": 882,
    "text": "ניר צבי",
    "county": "רמלה",
    "cityNameInEnglish": "NIR ZEVI"
  },
  {
    "id": 883,
    "text": "נירים",
    "county": "באר שבע",
    "cityNameInEnglish": "NIRIM"
  },
  {
    "id": 884,
    "text": "נירית",
    "county": "פתח תקווה",
    "cityNameInEnglish": "NIRIT"
  },
  {
    "id": 885,
    "text": "נמרוד",
    "county": "גולן",
    "cityNameInEnglish": "NIMROD"
  },
  {
    "id": 886,
    "text": "נס הרים",
    "county": "ירושלים",
    "cityNameInEnglish": "NES HARIM"
  },
  {
    "id": 887,
    "text": "נס עמים",
    "county": "עכו",
    "cityNameInEnglish": "NES AMMIM"
  },
  {
    "id": 888,
    "text": "נס ציונה",
    "county": "רחובות",
    "cityNameInEnglish": "NES ZIYYONA"
  },
  {
    "id": 889,
    "text": "נעורים",
    "county": "השרון",
    "cityNameInEnglish": "NE'URIM"
  },
  {
    "id": 890,
    "text": "נעלה",
    "county": "ראמאללה",
    "cityNameInEnglish": "NA'ALE"
  },
  {
    "id": 891,
    "text": "נעמ\"ה",
    "county": "ירדן",
    "cityNameInEnglish": "NAAMA"
  },
  {
    "id": 892,
    "text": "נען",
    "county": "רמלה",
    "cityNameInEnglish": "NA'AN"
  },
  {
    "id": 893,
    "text": "נערן",
    "county": "ירדן",
    "cityNameInEnglish": "NA'ARAN"
  },
  {
    "id": 894,
    "text": "נצאצרה",
    "county": "באר שבע",
    "cityNameInEnglish": "NASASRA"
  },
  {
    "id": 895,
    "text": "נצר חזני",
    "county": "רחובות",
    "cityNameInEnglish": "NEZER HAZZANI"
  },
  {
    "id": 896,
    "text": "נצר סרני",
    "county": "רמלה",
    "cityNameInEnglish": "NEZER SERENI"
  },
  {
    "id": 897,
    "text": "נצרת",
    "county": "נצרת",
    "cityNameInEnglish": "NAZARETH"
  },
  {
    "id": 898,
    "text": "נשר",
    "county": "חיפה",
    "cityNameInEnglish": "NESHER"
  },
  {
    "id": 899,
    "text": "נתיב הגדוד",
    "county": "ירדן",
    "cityNameInEnglish": "NETIV HAGEDUD"
  },
  {
    "id": 900,
    "text": "נתיב הל\"ה",
    "county": "ירושלים",
    "cityNameInEnglish": "NETIV HALAMED-HE"
  },
  {
    "id": 901,
    "text": "נתיב העשרה",
    "county": "אשקלון",
    "cityNameInEnglish": "NETIV HAASARA"
  },
  {
    "id": 902,
    "text": "נתיב השיירה",
    "county": "עכו",
    "cityNameInEnglish": "NETIV HASHAYYARA"
  },
  {
    "id": 903,
    "text": "נתיבות",
    "county": "באר שבע",
    "cityNameInEnglish": "NETIVOT"
  },
  {
    "id": 904,
    "text": "נתניה",
    "county": "השרון",
    "cityNameInEnglish": "NETANYA"
  },
  {
    "id": 905,
    "text": "סאג'ור",
    "county": "עכו",
    "cityNameInEnglish": "SAJUR"
  },
  {
    "id": 906,
    "text": "סאסא",
    "county": "צפת",
    "cityNameInEnglish": "SASA"
  },
  {
    "id": 907,
    "text": "סביון",
    "county": "פתח תקווה",
    "cityNameInEnglish": "SAVYON"
  },
  {
    "id": 908,
    "text": "סגולה",
    "county": "אשקלון",
    "cityNameInEnglish": "SEGULA"
  },
  {
    "id": 909,
    "text": "סואעד )חמרייה(",
    "county": "עכו",
    "cityNameInEnglish": "SAWA'ID(HAMRIYYE)"
  },
  {
    "id": 910,
    "text": "סואעד )כמאנה(",
    "county": "עכו",
    "cityNameInEnglish": "SAWA'ID (KAMANE)"
  },
  {
    "id": 911,
    "text": "סולם",
    "county": "עפולה",
    "cityNameInEnglish": "SULAM"
  },
  {
    "id": 912,
    "text": "סוסיה",
    "county": "חברון",
    "cityNameInEnglish": "SUSEYA"
  },
  {
    "id": 913,
    "text": "סופה",
    "county": "באר שבע",
    "cityNameInEnglish": "SUFA"
  },
  {
    "id": 914,
    "text": "סח'נין",
    "county": "עכו",
    "cityNameInEnglish": "SAKHNIN"
  },
  {
    "id": 915,
    "text": "סייד",
    "county": "באר שבע",
    "cityNameInEnglish": "SAYYID"
  },
  {
    "id": 916,
    "text": "סלמה",
    "county": "עכו",
    "cityNameInEnglish": "SALLAMA"
  },
  {
    "id": 917,
    "text": "סלעית",
    "county": "טול כרם",
    "cityNameInEnglish": "SAL'IT"
  },
  {
    "id": 918,
    "text": "סמר",
    "county": "באר שבע",
    "cityNameInEnglish": "SAMAR"
  },
  {
    "id": 919,
    "text": "סנסנה",
    "county": "חברון",
    "cityNameInEnglish": ""
  },
  {
    "id": 920,
    "text": "סעד",
    "county": "באר שבע",
    "cityNameInEnglish": "SA'AD"
  },
  {
    "id": 921,
    "text": "סעוה",
    "county": "באר שבע",
    "cityNameInEnglish": "SA'WA"
  },
  {
    "id": 922,
    "text": "סער",
    "county": "עכו",
    "cityNameInEnglish": "SA'AR"
  },
  {
    "id": 923,
    "text": "ספיר",
    "county": "באר שבע",
    "cityNameInEnglish": "SAPPIR"
  },
  {
    "id": 924,
    "text": "סתריה",
    "county": "רמלה",
    "cityNameInEnglish": "SITRIYYA"
  },
  {
    "id": 925,
    "text": "ע'ג'ר",
    "county": "גולן",
    "cityNameInEnglish": "GHAJAR"
  },
  {
    "id": 926,
    "text": "עבדון",
    "county": "עכו",
    "cityNameInEnglish": "AVDON"
  },
  {
    "id": 927,
    "text": "עברון",
    "county": "עכו",
    "cityNameInEnglish": "EVRON"
  },
  {
    "id": 928,
    "text": "עגור",
    "county": "ירושלים",
    "cityNameInEnglish": "AGUR"
  },
  {
    "id": 929,
    "text": "עדי",
    "county": "עכו",
    "cityNameInEnglish": "ADI"
  },
  {
    "id": 930,
    "text": "עדנים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ADANIM"
  },
  {
    "id": 931,
    "text": "עוזה",
    "county": "אשקלון",
    "cityNameInEnglish": "UZA"
  },
  {
    "id": 932,
    "text": "עוזייר",
    "county": "נצרת",
    "cityNameInEnglish": "UZEIR"
  },
  {
    "id": 933,
    "text": "עולש",
    "county": "השרון",
    "cityNameInEnglish": "OLESH"
  },
  {
    "id": 934,
    "text": "עומר",
    "county": "באר שבע",
    "cityNameInEnglish": "OMER"
  },
  {
    "id": 935,
    "text": "עופר",
    "county": "חדרה",
    "cityNameInEnglish": "OFER"
  },
  {
    "id": 936,
    "text": "עופרה",
    "county": "ראמאללה",
    "cityNameInEnglish": "OFRA"
  },
  {
    "id": 937,
    "text": "עוצם",
    "county": "אשקלון",
    "cityNameInEnglish": "OZEM"
  },
  {
    "id": 938,
    "text": "עוקבי )בנו עוקבה(",
    "county": "באר שבע",
    "cityNameInEnglish": "UQBI (BANU UQBA)"
  },
  {
    "id": 939,
    "text": "עזוז",
    "county": "באר שבע",
    "cityNameInEnglish": "EZUZ"
  },
  {
    "id": 940,
    "text": "עזר",
    "county": "אשקלון",
    "cityNameInEnglish": "EZER"
  },
  {
    "id": 941,
    "text": "עזריאל",
    "county": "השרון",
    "cityNameInEnglish": "AZRI'EL"
  },
  {
    "id": 942,
    "text": "עזריה",
    "county": "רמלה",
    "cityNameInEnglish": "AZARYA"
  },
  {
    "id": 943,
    "text": "עזריקם",
    "county": "אשקלון",
    "cityNameInEnglish": "AZRIQAM"
  },
  {
    "id": 944,
    "text": "עטאוונה",
    "county": "באר שבע",
    "cityNameInEnglish": "ATAWNE"
  },
  {
    "id": 945,
    "text": "עטרת",
    "county": "ראמאללה",
    "cityNameInEnglish": "ATERET"
  },
  {
    "id": 946,
    "text": "עידן",
    "county": "באר שבע",
    "cityNameInEnglish": "IDDAN"
  },
  {
    "id": 947,
    "text": "עיילבון",
    "county": "כנרת",
    "cityNameInEnglish": "EILABUN"
  },
  {
    "id": 948,
    "text": "עיינות",
    "county": "רחובות",
    "cityNameInEnglish": "AYANOT"
  },
  {
    "id": 949,
    "text": "עילוט",
    "county": "נצרת",
    "cityNameInEnglish": "ILUT"
  },
  {
    "id": 950,
    "text": "עין איילה",
    "county": "חדרה",
    "cityNameInEnglish": "EN AYYALA"
  },
  {
    "id": 951,
    "text": "עין אל-אסד",
    "county": "עכו",
    "cityNameInEnglish": "EIN AL-ASAD"
  },
  {
    "id": 952,
    "text": "עין גב",
    "county": "כנרת",
    "cityNameInEnglish": "EN GEV"
  },
  {
    "id": 953,
    "text": "עין גדי",
    "county": "באר שבע",
    "cityNameInEnglish": "EN GEDI"
  },
  {
    "id": 954,
    "text": "עין דור",
    "county": "עפולה",
    "cityNameInEnglish": "EN DOR"
  },
  {
    "id": 955,
    "text": "עין הבשור",
    "county": "באר שבע",
    "cityNameInEnglish": "EN HABESOR"
  },
  {
    "id": 956,
    "text": "עין הוד",
    "county": "חדרה",
    "cityNameInEnglish": "EN HOD"
  },
  {
    "id": 957,
    "text": "עין החורש",
    "county": "השרון",
    "cityNameInEnglish": "EN HAHORESH"
  },
  {
    "id": 958,
    "text": "עין המפרץ",
    "county": "עכו",
    "cityNameInEnglish": "EN HAMIFRAZ"
  },
  {
    "id": 959,
    "text": "עין הנצי\"ב",
    "county": "עפולה",
    "cityNameInEnglish": "EN HANAZIV"
  },
  {
    "id": 960,
    "text": "עין העמק",
    "county": "עפולה",
    "cityNameInEnglish": "EN HAEMEQ"
  },
  {
    "id": 961,
    "text": "עין השופט",
    "county": "עפולה",
    "cityNameInEnglish": "EN HASHOFET"
  },
  {
    "id": 962,
    "text": "עין השלושה",
    "county": "באר שבע",
    "cityNameInEnglish": "EN HASHELOSHA"
  },
  {
    "id": 963,
    "text": "עין ורד",
    "county": "השרון",
    "cityNameInEnglish": "EN WERED"
  },
  {
    "id": 964,
    "text": "עין זיוון",
    "county": "גולן",
    "cityNameInEnglish": "EN ZIWAN"
  },
  {
    "id": 965,
    "text": "עין חוד",
    "county": "חדרה",
    "cityNameInEnglish": "EIN HOD"
  },
  {
    "id": 966,
    "text": "עין חצבה",
    "county": "באר שבע",
    "cityNameInEnglish": "EN HAZEVA"
  },
  {
    "id": 967,
    "text": "עין חרוד",
    "county": "עפולה",
    "cityNameInEnglish": "EN HAROD (IHUD)"
  },
  {
    "id": 968,
    "text": "עין חרוד )מאוחד(",
    "county": "עפולה",
    "cityNameInEnglish": "EN HAROD(ME'UHAD)"
  },
  {
    "id": 969,
    "text": "עין יהב",
    "county": "באר שבע",
    "cityNameInEnglish": "EN YAHAV"
  },
  {
    "id": 970,
    "text": "עין יעקב",
    "county": "עכו",
    "cityNameInEnglish": "EN YA'AQOV"
  },
  {
    "id": 971,
    "text": "עין כרם-בי\"ס חקלאי",
    "county": "ירושלים",
    "cityNameInEnglish": "EN KAREM-B.S.HAQLA'I"
  },
  {
    "id": 972,
    "text": "עין כרמל",
    "county": "חדרה",
    "cityNameInEnglish": "EN KARMEL"
  },
  {
    "id": 973,
    "text": "עין מאהל",
    "county": "נצרת",
    "cityNameInEnglish": "EIN MAHEL"
  },
  {
    "id": 974,
    "text": "עין נקובא",
    "county": "ירושלים",
    "cityNameInEnglish": "EIN NAQQUBA"
  },
  {
    "id": 975,
    "text": "עין עירון",
    "county": "חדרה",
    "cityNameInEnglish": "EN IRON"
  },
  {
    "id": 976,
    "text": "עין צורים",
    "county": "אשקלון",
    "cityNameInEnglish": "EN ZURIM"
  },
  {
    "id": 977,
    "text": "עין קנייא",
    "county": "גולן",
    "cityNameInEnglish": "EIN QINIYYE"
  },
  {
    "id": 978,
    "text": "עין ראפה",
    "county": "ירושלים",
    "cityNameInEnglish": "EIN RAFA"
  },
  {
    "id": 979,
    "text": "עין שמר",
    "county": "חדרה",
    "cityNameInEnglish": "EN SHEMER"
  },
  {
    "id": 980,
    "text": "עין שריד",
    "county": "השרון",
    "cityNameInEnglish": "EN SARID"
  },
  {
    "id": 981,
    "text": "עין תמר",
    "county": "באר שבע",
    "cityNameInEnglish": "EN TAMAR"
  },
  {
    "id": 982,
    "text": "עינת",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ENAT"
  },
  {
    "id": 983,
    "text": "עיר אובות",
    "county": "באר שבע",
    "cityNameInEnglish": "IR OVOT"
  },
  {
    "id": 984,
    "text": "עכו",
    "county": "עכו",
    "cityNameInEnglish": "AKKO"
  },
  {
    "id": 985,
    "text": "עלומים",
    "county": "באר שבע",
    "cityNameInEnglish": "ALUMIM"
  },
  {
    "id": 986,
    "text": "עלי",
    "county": "שכם",
    "cityNameInEnglish": "ELI"
  },
  {
    "id": 987,
    "text": "עלי זהב",
    "county": "טול כרם",
    "cityNameInEnglish": "ALE ZAHAV"
  },
  {
    "id": 988,
    "text": "עלמה",
    "county": "צפת",
    "cityNameInEnglish": "ALMA"
  },
  {
    "id": 989,
    "text": "עלמון",
    "county": "ראמאללה",
    "cityNameInEnglish": "ALMON"
  },
  {
    "id": 990,
    "text": "עמוקה",
    "county": "צפת",
    "cityNameInEnglish": "AMUQQA"
  },
  {
    "id": 991,
    "text": "עמיחי",
    "county": "ראמאללה",
    "cityNameInEnglish": "AMMIHAY"
  },
  {
    "id": 992,
    "text": "עמינדב",
    "county": "ירושלים",
    "cityNameInEnglish": "AMMINADAV"
  },
  {
    "id": 993,
    "text": "עמיעד",
    "county": "צפת",
    "cityNameInEnglish": "AMMI'AD"
  },
  {
    "id": 994,
    "text": "עמיעוז",
    "county": "באר שבע",
    "cityNameInEnglish": "AMMI'OZ"
  },
  {
    "id": 995,
    "text": "עמיקם",
    "county": "חדרה",
    "cityNameInEnglish": "AMMIQAM"
  },
  {
    "id": 996,
    "text": "עמיר",
    "county": "צפת",
    "cityNameInEnglish": "AMIR"
  },
  {
    "id": 997,
    "text": "עמנואל",
    "county": "טול כרם",
    "cityNameInEnglish": "IMMANU'EL"
  },
  {
    "id": 998,
    "text": "עמקה",
    "county": "עכו",
    "cityNameInEnglish": "AMQA"
  },
  {
    "id": 999,
    "text": "ענב",
    "county": "טול כרם",
    "cityNameInEnglish": "ENAV"
  },
  {
    "id": 1000,
    "text": "עספיא",
    "county": "חיפה",
    "cityNameInEnglish": "ISIFYA"
  },
  {
    "id": 1001,
    "text": "עפולה",
    "county": "עפולה",
    "cityNameInEnglish": "AFULA"
  },
  {
    "id": 1002,
    "text": "עץ אפרים",
    "county": "טול כרם",
    "cityNameInEnglish": "EZ EFRAYIM"
  },
  {
    "id": 1003,
    "text": "עצמון שגב",
    "county": "עכו",
    "cityNameInEnglish": "ATSMON-SEGEV"
  },
  {
    "id": 1004,
    "text": "עראבה",
    "county": "עכו",
    "cityNameInEnglish": "ARRABE"
  },
  {
    "id": 1005,
    "text": "עראמשה",
    "county": "עכו",
    "cityNameInEnglish": "ARAMSHA"
  },
  {
    "id": 1006,
    "text": "ערב אל נעים",
    "county": "עכו",
    "cityNameInEnglish": "ARRAB AL NAIM"
  },
  {
    "id": 1007,
    "text": "ערד",
    "county": "באר שבע",
    "cityNameInEnglish": "ARAD"
  },
  {
    "id": 1008,
    "text": "ערוגות",
    "county": "אשקלון",
    "cityNameInEnglish": "ARUGOT"
  },
  {
    "id": 1009,
    "text": "ערערה",
    "county": "חדרה",
    "cityNameInEnglish": "AR'ARA"
  },
  {
    "id": 1010,
    "text": "ערערה-בנגב",
    "county": "באר שבע",
    "cityNameInEnglish": "AR'ARA-BANEGEV"
  },
  {
    "id": 1011,
    "text": "עשרת",
    "county": "רחובות",
    "cityNameInEnglish": "ASERET"
  },
  {
    "id": 1012,
    "text": "עתלית",
    "county": "חדרה",
    "cityNameInEnglish": "ATLIT"
  },
  {
    "id": 1013,
    "text": "עתניאל",
    "county": "חברון",
    "cityNameInEnglish": "OTNI'EL"
  },
  {
    "id": 1014,
    "text": "פארן",
    "county": "באר שבע",
    "cityNameInEnglish": "PARAN"
  },
  {
    "id": 1015,
    "text": "פדואל",
    "county": "טול כרם",
    "cityNameInEnglish": "PEDU'EL"
  },
  {
    "id": 1016,
    "text": "פדויים",
    "county": "באר שבע",
    "cityNameInEnglish": "PEDUYIM"
  },
  {
    "id": 1017,
    "text": "פדיה",
    "county": "רמלה",
    "cityNameInEnglish": "PEDAYA"
  },
  {
    "id": 1018,
    "text": "פוריה - כפר עבודה",
    "county": "כנרת",
    "cityNameInEnglish": "PORIYYA-KEFAR AVODA"
  },
  {
    "id": 1019,
    "text": "פוריה - נווה עובד",
    "county": "כנרת",
    "cityNameInEnglish": "PORIYYA-NEWE OVED"
  },
  {
    "id": 1020,
    "text": "פוריה עילית",
    "county": "כנרת",
    "cityNameInEnglish": "PORIYYA ILLIT"
  },
  {
    "id": 1021,
    "text": "פוריידיס",
    "county": "חדרה",
    "cityNameInEnglish": "FUREIDIS"
  },
  {
    "id": 1022,
    "text": "פורת",
    "county": "השרון",
    "cityNameInEnglish": "PORAT"
  },
  {
    "id": 1023,
    "text": "פטיש",
    "county": "באר שבע",
    "cityNameInEnglish": "PATTISH"
  },
  {
    "id": 1024,
    "text": "פלך",
    "county": "עכו",
    "cityNameInEnglish": "PELEKH"
  },
  {
    "id": 1025,
    "text": "פלמחים",
    "county": "רחובות",
    "cityNameInEnglish": "PALMAHIM"
  },
  {
    "id": 1026,
    "text": "פני חבר",
    "county": "חברון",
    "cityNameInEnglish": "PENE HEVER"
  },
  {
    "id": 1027,
    "text": "פסגות",
    "county": "ראמאללה",
    "cityNameInEnglish": "PESAGOT"
  },
  {
    "id": 1028,
    "text": "פסוטה",
    "county": "עכו",
    "cityNameInEnglish": "FASSUTA"
  },
  {
    "id": 1029,
    "text": "פעמי תש\"ז",
    "county": "באר שבע",
    "cityNameInEnglish": "PA'AME TASHAZ"
  },
  {
    "id": 1030,
    "text": "פצאל",
    "county": "ירדן",
    "cityNameInEnglish": "PEZA'EL"
  },
  {
    "id": 1031,
    "text": "פקיעין )בוקייעה(",
    "county": "עכו",
    "cityNameInEnglish": "PEQI'IN (BUQEI'A)"
  },
  {
    "id": 1032,
    "text": "פקיעין חדשה",
    "county": "עכו",
    "cityNameInEnglish": "PEQI'IN HADASHA"
  },
  {
    "id": 1033,
    "text": "פרדס חנה-כרכור",
    "county": "חדרה",
    "cityNameInEnglish": "PARDES HANNA-KARKUR"
  },
  {
    "id": 1034,
    "text": "פרדסיה",
    "county": "השרון",
    "cityNameInEnglish": "PARDESIYYA"
  },
  {
    "id": 1035,
    "text": "פרוד",
    "county": "צפת",
    "cityNameInEnglish": "PAROD"
  },
  {
    "id": 1036,
    "text": "פרזון",
    "county": "עפולה",
    "cityNameInEnglish": "PERAZON"
  },
  {
    "id": 1037,
    "text": "פרי גן",
    "county": "באר שבע",
    "cityNameInEnglish": "PERI GAN"
  },
  {
    "id": 1038,
    "text": "פתח תקווה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "PETAH TIQWA"
  },
  {
    "id": 1039,
    "text": "פתחיה",
    "county": "רמלה",
    "cityNameInEnglish": "PETAHYA"
  },
  {
    "id": 1040,
    "text": "צאלים",
    "county": "באר שבע",
    "cityNameInEnglish": "ZE'ELIM"
  },
  {
    "id": 1041,
    "text": "צביה",
    "county": "עכו",
    "cityNameInEnglish": "ZVIYYA"
  },
  {
    "id": 1042,
    "text": "צבעון",
    "county": "צפת",
    "cityNameInEnglish": "ZIV'ON"
  },
  {
    "id": 1043,
    "text": "צובה",
    "county": "ירושלים",
    "cityNameInEnglish": "ZOVA"
  },
  {
    "id": 1044,
    "text": "צוחר",
    "county": "באר שבע",
    "cityNameInEnglish": "ZOHAR"
  },
  {
    "id": 1045,
    "text": "צופיה",
    "county": "רחובות",
    "cityNameInEnglish": "ZOFIYYA"
  },
  {
    "id": 1046,
    "text": "צופים",
    "county": "טול כרם",
    "cityNameInEnglish": "ZUFIN"
  },
  {
    "id": 1047,
    "text": "צופית",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ZOFIT"
  },
  {
    "id": 1048,
    "text": "צופר",
    "county": "באר שבע",
    "cityNameInEnglish": "ZOFAR"
  },
  {
    "id": 1049,
    "text": "צוקי ים",
    "county": "השרון",
    "cityNameInEnglish": "SHOSHANNAT HAAMAQIM("
  },
  {
    "id": 1050,
    "text": "צוקים",
    "county": "באר שבע",
    "cityNameInEnglish": "MAHANE BILDAD"
  },
  {
    "id": 1051,
    "text": "צור הדסה",
    "county": "ירושלים",
    "cityNameInEnglish": "ZUR HADASSA"
  },
  {
    "id": 1052,
    "text": "צור יצחק",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ZUR YIZHAQ"
  },
  {
    "id": 1053,
    "text": "צור משה",
    "county": "השרון",
    "cityNameInEnglish": "ZUR MOSHE"
  },
  {
    "id": 1054,
    "text": "צור נתן",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ZUR NATAN"
  },
  {
    "id": 1055,
    "text": "צוריאל",
    "county": "עכו",
    "cityNameInEnglish": "ZURI'EL"
  },
  {
    "id": 1056,
    "text": "צורית",
    "county": "עכו",
    "cityNameInEnglish": "ZURIT"
  },
  {
    "id": 1057,
    "text": "ציפורי",
    "county": "עפולה",
    "cityNameInEnglish": "ZIPPORI"
  },
  {
    "id": 1058,
    "text": "צלפון",
    "county": "ירושלים",
    "cityNameInEnglish": "ZELAFON"
  },
  {
    "id": 1059,
    "text": "צנדלה",
    "county": "עפולה",
    "cityNameInEnglish": "SANDALA"
  },
  {
    "id": 1060,
    "text": "צפריה",
    "county": "רמלה",
    "cityNameInEnglish": "ZAFRIYYA"
  },
  {
    "id": 1061,
    "text": "צפרירים",
    "county": "ירושלים",
    "cityNameInEnglish": "ZAFRIRIM"
  },
  {
    "id": 1062,
    "text": "צפת",
    "county": "צפת",
    "cityNameInEnglish": "ZEFAT"
  },
  {
    "id": 1063,
    "text": "צרופה",
    "county": "חדרה",
    "cityNameInEnglish": "ZERUFA"
  },
  {
    "id": 1064,
    "text": "צרעה",
    "county": "ירושלים",
    "cityNameInEnglish": "ZOR'A"
  },
  {
    "id": 1065,
    "text": "קבועה",
    "county": "באר שבע",
    "cityNameInEnglish": "QABBO'A"
  },
  {
    "id": 1066,
    "text": "קבוצת יבנה",
    "county": "רחובות",
    "cityNameInEnglish": "QEVUZAT YAVNE"
  },
  {
    "id": 1067,
    "text": "קדומים",
    "county": "טול כרם",
    "cityNameInEnglish": "QEDUMIM"
  },
  {
    "id": 1068,
    "text": "קדימה-צורן",
    "county": "השרון",
    "cityNameInEnglish": "QADIMA-ZORAN"
  },
  {
    "id": 1069,
    "text": "קדמה",
    "county": "אשקלון",
    "cityNameInEnglish": "QEDMA"
  },
  {
    "id": 1070,
    "text": "קדמת צבי",
    "county": "גולן",
    "cityNameInEnglish": "QIDMAT ZEVI"
  },
  {
    "id": 1071,
    "text": "קדר",
    "county": "בית לחם",
    "cityNameInEnglish": "QEDAR"
  },
  {
    "id": 1072,
    "text": "קדרון",
    "county": "רחובות",
    "cityNameInEnglish": "QIDRON"
  },
  {
    "id": 1073,
    "text": "קדרים",
    "county": "כנרת",
    "cityNameInEnglish": "QADDARIM"
  },
  {
    "id": 1074,
    "text": "קודייראת א-צאנע",
    "county": "באר שבע",
    "cityNameInEnglish": "QUDEIRAT AS-SANI"
  },
  {
    "id": 1075,
    "text": "קוואעין",
    "county": "באר שבע",
    "cityNameInEnglish": "QAWA'IN"
  },
  {
    "id": 1076,
    "text": "קוממיות",
    "county": "אשקלון",
    "cityNameInEnglish": "QOMEMIYYUT"
  },
  {
    "id": 1077,
    "text": "קורנית",
    "county": "עכו",
    "cityNameInEnglish": "QORANIT"
  },
  {
    "id": 1078,
    "text": "קטורה",
    "county": "באר שבע",
    "cityNameInEnglish": "QETURA"
  },
  {
    "id": 1079,
    "text": "קיסריה",
    "county": "חדרה",
    "cityNameInEnglish": "QESARIYYA"
  },
  {
    "id": 1080,
    "text": "קלחים",
    "county": "באר שבע",
    "cityNameInEnglish": "QELAHIM"
  },
  {
    "id": 1081,
    "text": "קליה",
    "county": "ירדן",
    "cityNameInEnglish": "QALYA"
  },
  {
    "id": 1082,
    "text": "קלנסווה",
    "county": "השרון",
    "cityNameInEnglish": "QALANSAWE"
  },
  {
    "id": 1083,
    "text": "קלע",
    "county": "גולן",
    "cityNameInEnglish": "QELA"
  },
  {
    "id": 1084,
    "text": "קציר",
    "county": "חדרה",
    "cityNameInEnglish": "QAZIR"
  },
  {
    "id": 1085,
    "text": "קצר א-סר",
    "county": "באר שבע",
    "cityNameInEnglish": ""
  },
  {
    "id": 1086,
    "text": "קצרין",
    "county": "גולן",
    "cityNameInEnglish": "QAZRIN"
  },
  {
    "id": 1087,
    "text": "קרית אונו",
    "county": "רמת גן",
    "cityNameInEnglish": "QIRYAT ONO"
  },
  {
    "id": 1088,
    "text": "קרית ארבע",
    "county": "חברון",
    "cityNameInEnglish": "QIRYAT ARBA"
  },
  {
    "id": 1089,
    "text": "קרית אתא",
    "county": "חיפה",
    "cityNameInEnglish": "QIRYAT ATTA"
  },
  {
    "id": 1090,
    "text": "קרית ביאליק",
    "county": "חיפה",
    "cityNameInEnglish": "QIRYAT BIALIK"
  },
  {
    "id": 1091,
    "text": "קרית גת",
    "county": "אשקלון",
    "cityNameInEnglish": "QIRYAT GAT"
  },
  {
    "id": 1092,
    "text": "קרית טבעון",
    "county": "חיפה",
    "cityNameInEnglish": "QIRYAT TIV'ON"
  },
  {
    "id": 1093,
    "text": "קרית ים",
    "county": "חיפה",
    "cityNameInEnglish": "QIRYAT YAM"
  },
  {
    "id": 1094,
    "text": "קרית יערים",
    "county": "ירושלים",
    "cityNameInEnglish": "QIRYAT YE'ARIM"
  },
  {
    "id": 1095,
    "text": "קרית יערים)מוסד(",
    "county": "ירושלים",
    "cityNameInEnglish": "QIRYAT YE'ARIM(INSTI"
  },
  {
    "id": 1096,
    "text": "קרית מוצקין",
    "county": "חיפה",
    "cityNameInEnglish": "QIRYAT MOTZKIN"
  },
  {
    "id": 1097,
    "text": "קרית מלאכי",
    "county": "אשקלון",
    "cityNameInEnglish": "QIRYAT MAL'AKHI"
  },
  {
    "id": 1098,
    "text": "קרית נטפים",
    "county": "טול כרם",
    "cityNameInEnglish": "QIRYAT NETAFIM"
  },
  {
    "id": 1099,
    "text": "קרית ענבים",
    "county": "ירושלים",
    "cityNameInEnglish": "QIRYAT ANAVIM"
  },
  {
    "id": 1100,
    "text": "קרית עקרון",
    "county": "רחובות",
    "cityNameInEnglish": "QIRYAT EQRON"
  },
  {
    "id": 1101,
    "text": "קרית שלמה",
    "county": "השרון",
    "cityNameInEnglish": "QIRYAT SHELOMO"
  },
  {
    "id": 1102,
    "text": "קרית שמונה",
    "county": "צפת",
    "cityNameInEnglish": "QIRYAT SHEMONA"
  },
  {
    "id": 1103,
    "text": "קרני שומרון",
    "county": "טול כרם",
    "cityNameInEnglish": "QARNE SHOMERON"
  },
  {
    "id": 1104,
    "text": "קשת",
    "county": "גולן",
    "cityNameInEnglish": "QESHET"
  },
  {
    "id": 1105,
    "text": "ראמה",
    "county": "עכו",
    "cityNameInEnglish": "RAME"
  },
  {
    "id": 1106,
    "text": "ראס אל-עין",
    "county": "עכו",
    "cityNameInEnglish": "RAS AL-EIN"
  },
  {
    "id": 1107,
    "text": "ראס עלי",
    "county": "חיפה",
    "cityNameInEnglish": "RAS ALI"
  },
  {
    "id": 1108,
    "text": "ראש העין",
    "county": "פתח תקווה",
    "cityNameInEnglish": "ROSH HAAYIN"
  },
  {
    "id": 1109,
    "text": "ראש פינה",
    "county": "צפת",
    "cityNameInEnglish": "ROSH PINNA"
  },
  {
    "id": 1110,
    "text": "ראש צורים",
    "county": "בית לחם",
    "cityNameInEnglish": "ROSH ZURIM"
  },
  {
    "id": 1111,
    "text": "ראשון לציון",
    "county": "רחובות",
    "cityNameInEnglish": "RISHON LEZIYYON"
  },
  {
    "id": 1112,
    "text": "רבבה",
    "county": "שכם",
    "cityNameInEnglish": "REVAVA"
  },
  {
    "id": 1113,
    "text": "רבדים",
    "county": "אשקלון",
    "cityNameInEnglish": "REVADIM"
  },
  {
    "id": 1114,
    "text": "רביבים",
    "county": "באר שבע",
    "cityNameInEnglish": "REVIVIM"
  },
  {
    "id": 1115,
    "text": "רביד",
    "county": "כנרת",
    "cityNameInEnglish": "RAVID"
  },
  {
    "id": 1116,
    "text": "רגבה",
    "county": "עכו",
    "cityNameInEnglish": "REGBA"
  },
  {
    "id": 1117,
    "text": "רגבים",
    "county": "חדרה",
    "cityNameInEnglish": "REGAVIM"
  },
  {
    "id": 1118,
    "text": "רהט",
    "county": "באר שבע",
    "cityNameInEnglish": "RAHAT"
  },
  {
    "id": 1119,
    "text": "רווחה",
    "county": "אשקלון",
    "cityNameInEnglish": "REWAHA"
  },
  {
    "id": 1120,
    "text": "רוויה",
    "county": "עפולה",
    "cityNameInEnglish": "REWAYA"
  },
  {
    "id": 1121,
    "text": "רוח מדבר",
    "county": "באר שבע",
    "cityNameInEnglish": "RUAH MIDBAR"
  },
  {
    "id": 1122,
    "text": "רוחמה",
    "county": "אשקלון",
    "cityNameInEnglish": "RUHAMA"
  },
  {
    "id": 1123,
    "text": "רומאנה",
    "county": "נצרת",
    "cityNameInEnglish": "RUMMANE"
  },
  {
    "id": 1124,
    "text": "רומת הייב",
    "county": "נצרת",
    "cityNameInEnglish": "RUMAT HEIB"
  },
  {
    "id": 1125,
    "text": "רועי",
    "county": "ירדן",
    "cityNameInEnglish": "RO'I"
  },
  {
    "id": 1126,
    "text": "רותם",
    "county": "ירדן",
    "cityNameInEnglish": "ROTEM"
  },
  {
    "id": 1127,
    "text": "רחוב",
    "county": "עפולה",
    "cityNameInEnglish": "REHOV"
  },
  {
    "id": 1128,
    "text": "רחובות",
    "county": "רחובות",
    "cityNameInEnglish": "REHOVOT"
  },
  {
    "id": 1129,
    "text": "רחלים",
    "county": "שכם",
    "cityNameInEnglish": "REHELIM"
  },
  {
    "id": 1130,
    "text": "ריחאניה",
    "county": "צפת",
    "cityNameInEnglish": "REIHANIYYE"
  },
  {
    "id": 1131,
    "text": "ריחן",
    "county": "ג'נין",
    "cityNameInEnglish": "REHAN"
  },
  {
    "id": 1132,
    "text": "ריינה",
    "county": "נצרת",
    "cityNameInEnglish": "REINE"
  },
  {
    "id": 1133,
    "text": "רימונים",
    "county": "ראמאללה",
    "cityNameInEnglish": "RIMMONIM"
  },
  {
    "id": 1134,
    "text": "רינתיה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "RINNATYA"
  },
  {
    "id": 1135,
    "text": "רכסים",
    "county": "חיפה",
    "cityNameInEnglish": "REKHASIM"
  },
  {
    "id": 1136,
    "text": "רם-און",
    "county": "עפולה",
    "cityNameInEnglish": "RAM-ON"
  },
  {
    "id": 1137,
    "text": "רמות",
    "county": "גולן",
    "cityNameInEnglish": "RAMOT"
  },
  {
    "id": 1138,
    "text": "רמות השבים",
    "county": "פתח תקווה",
    "cityNameInEnglish": "RAMOT HASHAVIM"
  },
  {
    "id": 1139,
    "text": "רמות מאיר",
    "county": "רמלה",
    "cityNameInEnglish": "RAMOT ME'IR"
  },
  {
    "id": 1140,
    "text": "רמות מנשה",
    "county": "עפולה",
    "cityNameInEnglish": "RAMOT MENASHE"
  },
  {
    "id": 1141,
    "text": "רמות נפתלי",
    "county": "צפת",
    "cityNameInEnglish": "RAMOT NAFTALI"
  },
  {
    "id": 1142,
    "text": "רמלה",
    "county": "רמלה",
    "cityNameInEnglish": "RAMLA"
  },
  {
    "id": 1143,
    "text": "רמת גן",
    "county": "רמת גן",
    "cityNameInEnglish": "RAMAT GAN"
  },
  {
    "id": 1144,
    "text": "רמת דוד",
    "county": "עפולה",
    "cityNameInEnglish": "RAMAT DAWID"
  },
  {
    "id": 1145,
    "text": "רמת הכובש",
    "county": "פתח תקווה",
    "cityNameInEnglish": "RAMAT HAKOVESH"
  },
  {
    "id": 1146,
    "text": "רמת השופט",
    "county": "עפולה",
    "cityNameInEnglish": "RAMAT HASHOFET"
  },
  {
    "id": 1147,
    "text": "רמת השרון",
    "county": "תל אביב",
    "cityNameInEnglish": "RAMAT HASHARON"
  },
  {
    "id": 1148,
    "text": "רמת יוחנן",
    "county": "חיפה",
    "cityNameInEnglish": "RAMAT YOHANAN"
  },
  {
    "id": 1149,
    "text": "רמת ישי",
    "county": "עפולה",
    "cityNameInEnglish": "RAMAT YISHAY"
  },
  {
    "id": 1150,
    "text": "רמת מגשימים",
    "county": "גולן",
    "cityNameInEnglish": "RAMAT MAGSHIMIM"
  },
  {
    "id": 1151,
    "text": "רמת צבי",
    "county": "עפולה",
    "cityNameInEnglish": "RAMAT ZEVI"
  },
  {
    "id": 1152,
    "text": "רמת רזיאל",
    "county": "ירושלים",
    "cityNameInEnglish": "RAMAT RAZI'EL"
  },
  {
    "id": 1153,
    "text": "רמת רחל",
    "county": "ירושלים",
    "cityNameInEnglish": "RAMAT RAHEL"
  },
  {
    "id": 1154,
    "text": "רנן",
    "county": "באר שבע",
    "cityNameInEnglish": "RANNEN"
  },
  {
    "id": 1155,
    "text": "רעים",
    "county": "באר שבע",
    "cityNameInEnglish": "RE'IM"
  },
  {
    "id": 1156,
    "text": "רעננה",
    "county": "פתח תקווה",
    "cityNameInEnglish": "RA'ANANA"
  },
  {
    "id": 1157,
    "text": "רקפת",
    "county": "עכו",
    "cityNameInEnglish": "RAQEFET"
  },
  {
    "id": 1158,
    "text": "רשפון",
    "county": "השרון",
    "cityNameInEnglish": "RISHPON"
  },
  {
    "id": 1159,
    "text": "רשפים",
    "county": "עפולה",
    "cityNameInEnglish": "RESHAFIM"
  },
  {
    "id": 1160,
    "text": "רתמים",
    "county": "באר שבע",
    "cityNameInEnglish": "RETAMIM"
  },
  {
    "id": 1161,
    "text": "שאר ישוב",
    "county": "צפת",
    "cityNameInEnglish": "SHE'AR YASHUV"
  },
  {
    "id": 1162,
    "text": "שבי דרום",
    "county": "באר שבע",
    "cityNameInEnglish": "SHAVE DAROM"
  },
  {
    "id": 1163,
    "text": "שבי ציון",
    "county": "עכו",
    "cityNameInEnglish": "SHAVE ZIYYON"
  },
  {
    "id": 1164,
    "text": "שבי שומרון",
    "county": "שכם",
    "cityNameInEnglish": "SHAVE SHOMERON"
  },
  {
    "id": 1165,
    "text": "שבלי - אום אל-גנם",
    "county": "עפולה",
    "cityNameInEnglish": "SHIBLI"
  },
  {
    "id": 1166,
    "text": "שגב-שלום",
    "county": "באר שבע",
    "cityNameInEnglish": "SEGEV-SHALOM"
  },
  {
    "id": 1167,
    "text": "שדה אילן",
    "county": "כנרת",
    "cityNameInEnglish": "SEDE ILAN"
  },
  {
    "id": 1168,
    "text": "שדה אליהו",
    "county": "עפולה",
    "cityNameInEnglish": "SEDE ELIYYAHU"
  },
  {
    "id": 1169,
    "text": "שדה אליעזר",
    "county": "צפת",
    "cityNameInEnglish": "SEDE ELI'EZER"
  },
  {
    "id": 1170,
    "text": "שדה בוקר",
    "county": "באר שבע",
    "cityNameInEnglish": "SEDE BOQER"
  },
  {
    "id": 1171,
    "text": "שדה דוד",
    "county": "אשקלון",
    "cityNameInEnglish": "SEDE DAWID"
  },
  {
    "id": 1172,
    "text": "שדה ורבורג",
    "county": "פתח תקווה",
    "cityNameInEnglish": "SEDE WARBURG"
  },
  {
    "id": 1173,
    "text": "שדה יואב",
    "county": "אשקלון",
    "cityNameInEnglish": "SEDE YO'AV"
  },
  {
    "id": 1174,
    "text": "שדה יעקב",
    "county": "עפולה",
    "cityNameInEnglish": "SEDE YA'AQOV"
  },
  {
    "id": 1175,
    "text": "שדה יצחק",
    "county": "חדרה",
    "cityNameInEnglish": "SEDE YIZHAQ"
  },
  {
    "id": 1176,
    "text": "שדה משה",
    "county": "אשקלון",
    "cityNameInEnglish": "SEDE MOSHE"
  },
  {
    "id": 1177,
    "text": "שדה נחום",
    "county": "עפולה",
    "cityNameInEnglish": "SEDE NAHUM"
  },
  {
    "id": 1178,
    "text": "שדה נחמיה",
    "county": "צפת",
    "cityNameInEnglish": "SEDE NEHEMYA"
  },
  {
    "id": 1179,
    "text": "שדה ניצן",
    "county": "באר שבע",
    "cityNameInEnglish": "SEDE NIZZAN"
  },
  {
    "id": 1180,
    "text": "שדה עוזיהו",
    "county": "אשקלון",
    "cityNameInEnglish": "SEDE UZZIYYAHU"
  },
  {
    "id": 1181,
    "text": "שדה צבי",
    "county": "באר שבע",
    "cityNameInEnglish": "SEDE ZEVI"
  },
  {
    "id": 1182,
    "text": "שדות ים",
    "county": "חדרה",
    "cityNameInEnglish": "SEDOT YAM"
  },
  {
    "id": 1183,
    "text": "שדות מיכה",
    "county": "ירושלים",
    "cityNameInEnglish": "SEDOT MIKHA"
  },
  {
    "id": 1184,
    "text": "שדי אברהם",
    "county": "באר שבע",
    "cityNameInEnglish": "SEDE AVRAHAM"
  },
  {
    "id": 1185,
    "text": "שדי חמד",
    "county": "פתח תקווה",
    "cityNameInEnglish": "SEDE HEMED"
  },
  {
    "id": 1186,
    "text": "שדי תרומות",
    "county": "עפולה",
    "cityNameInEnglish": "SEDE TERUMOT"
  },
  {
    "id": 1187,
    "text": "שדמה",
    "county": "רחובות",
    "cityNameInEnglish": "SHEDEMA"
  },
  {
    "id": 1188,
    "text": "שדמות דבורה",
    "county": "כנרת",
    "cityNameInEnglish": "SHADMOT DEVORA"
  },
  {
    "id": 1189,
    "text": "שדמות מחולה",
    "county": "ירדן",
    "cityNameInEnglish": "SHADMOT MEHOLA"
  },
  {
    "id": 1190,
    "text": "שדרות",
    "county": "אשקלון",
    "cityNameInEnglish": "SEDEROT"
  },
  {
    "id": 1191,
    "text": "שואבה",
    "county": "ירושלים",
    "cityNameInEnglish": "SHO'EVA"
  },
  {
    "id": 1192,
    "text": "שובה",
    "county": "באר שבע",
    "cityNameInEnglish": "SHUVA"
  },
  {
    "id": 1193,
    "text": "שובל",
    "county": "באר שבע",
    "cityNameInEnglish": "SHOVAL"
  },
  {
    "id": 1194,
    "text": "שוהם",
    "county": "רמלה",
    "cityNameInEnglish": "SHOHAM"
  },
  {
    "id": 1195,
    "text": "שומרה",
    "county": "עכו",
    "cityNameInEnglish": "SHOMERA"
  },
  {
    "id": 1196,
    "text": "שומריה",
    "county": "באר שבע",
    "cityNameInEnglish": "SHOMERIYYA"
  },
  {
    "id": 1197,
    "text": "שוקדה",
    "county": "באר שבע",
    "cityNameInEnglish": "SHOQEDA"
  },
  {
    "id": 1198,
    "text": "שורש",
    "county": "ירושלים",
    "cityNameInEnglish": "SHORESH"
  },
  {
    "id": 1199,
    "text": "שורשים",
    "county": "עכו",
    "cityNameInEnglish": "SHORASHIM"
  },
  {
    "id": 1200,
    "text": "שושנת העמקים",
    "county": "השרון",
    "cityNameInEnglish": "SHOSHANNAT HAAMAQIM"
  },
  {
    "id": 1201,
    "text": "שזור",
    "county": "עכו",
    "cityNameInEnglish": "SHEZOR"
  },
  {
    "id": 1202,
    "text": "שחר",
    "county": "אשקלון",
    "cityNameInEnglish": "SHAHAR"
  },
  {
    "id": 1203,
    "text": "שחרות",
    "county": "באר שבע",
    "cityNameInEnglish": "SHAHARUT"
  },
  {
    "id": 1204,
    "text": "שיבולים",
    "county": "באר שבע",
    "cityNameInEnglish": "SHIBBOLIM"
  },
  {
    "id": 1205,
    "text": "שיטים",
    "county": "באר שבע",
    "cityNameInEnglish": "NAHAL SHITTIM"
  },
  {
    "id": 1206,
    "text": "שייח' דנון",
    "county": "עכו",
    "cityNameInEnglish": "SHEIKH DANNUN"
  },
  {
    "id": 1207,
    "text": "שילה",
    "county": "ראמאללה",
    "cityNameInEnglish": "SHILO"
  },
  {
    "id": 1208,
    "text": "שילת",
    "county": "רמלה",
    "cityNameInEnglish": "SHILAT"
  },
  {
    "id": 1209,
    "text": "שכניה",
    "county": "עכו",
    "cityNameInEnglish": "SHEKHANYA"
  },
  {
    "id": 1210,
    "text": "שלווה",
    "county": "אשקלון",
    "cityNameInEnglish": "SHALWA"
  },
  {
    "id": 1211,
    "text": "שלווה במדבר",
    "county": "באר שבע",
    "cityNameInEnglish": "SHALVA BAMIDBAR"
  },
  {
    "id": 1212,
    "text": "שלוחות",
    "county": "עפולה",
    "cityNameInEnglish": "SHELUHOT"
  },
  {
    "id": 1213,
    "text": "שלומי",
    "county": "עכו",
    "cityNameInEnglish": "SHELOMI"
  },
  {
    "id": 1214,
    "text": "שלומית",
    "county": "באר שבע",
    "cityNameInEnglish": "SHLOMIT"
  },
  {
    "id": 1215,
    "text": "שמיר",
    "county": "צפת",
    "cityNameInEnglish": "SHAMIR"
  },
  {
    "id": 1216,
    "text": "שמעה",
    "county": "חברון",
    "cityNameInEnglish": "SHIM'A"
  },
  {
    "id": 1217,
    "text": "שמרת",
    "county": "עכו",
    "cityNameInEnglish": "SHAMERAT"
  },
  {
    "id": 1218,
    "text": "שמשית",
    "county": "עפולה",
    "cityNameInEnglish": "SHIMSHIT"
  },
  {
    "id": 1219,
    "text": "שני",
    "county": "באר שבע",
    "cityNameInEnglish": "SHANI"
  },
  {
    "id": 1220,
    "text": "שניר",
    "county": "צפת",
    "cityNameInEnglish": "SENIR"
  },
  {
    "id": 1221,
    "text": "שעב",
    "county": "עכו",
    "cityNameInEnglish": "SHA'AB"
  },
  {
    "id": 1222,
    "text": "שעורים",
    "county": "כנרת",
    "cityNameInEnglish": "SE'ORIM"
  },
  {
    "id": 1223,
    "text": "שעל",
    "county": "גולן",
    "cityNameInEnglish": "SHA'AL"
  },
  {
    "id": 1224,
    "text": "שעלבים",
    "county": "רמלה",
    "cityNameInEnglish": "SHA'ALVIM"
  },
  {
    "id": 1225,
    "text": "שער אפרים",
    "county": "השרון",
    "cityNameInEnglish": "SHA'AR EFRAYIM"
  },
  {
    "id": 1226,
    "text": "שער הגולן",
    "county": "כנרת",
    "cityNameInEnglish": "SHA'AR HAGOLAN"
  },
  {
    "id": 1227,
    "text": "שער העמקים",
    "county": "חיפה",
    "cityNameInEnglish": "SHA'AR HAAMAQIM"
  },
  {
    "id": 1228,
    "text": "שער מנשה",
    "county": "חדרה",
    "cityNameInEnglish": "SHA'AR MENASHE"
  },
  {
    "id": 1229,
    "text": "שערי תקווה",
    "county": "טול כרם",
    "cityNameInEnglish": "SHA'ARE TIQWA"
  },
  {
    "id": 1230,
    "text": "שפיים",
    "county": "השרון",
    "cityNameInEnglish": "SHEFAYIM"
  },
  {
    "id": 1231,
    "text": "שפיר",
    "county": "אשקלון",
    "cityNameInEnglish": "SHAFIR"
  },
  {
    "id": 1232,
    "text": "שפר",
    "county": "צפת",
    "cityNameInEnglish": "SHEFER"
  },
  {
    "id": 1233,
    "text": "שפרעם",
    "county": "עכו",
    "cityNameInEnglish": "SHEFAR'AM"
  },
  {
    "id": 1234,
    "text": "שקד",
    "county": "ג'נין",
    "cityNameInEnglish": "SHAQED"
  },
  {
    "id": 1235,
    "text": "שקף",
    "county": "אשקלון",
    "cityNameInEnglish": "SHEQEF"
  },
  {
    "id": 1236,
    "text": "שרונה",
    "county": "כנרת",
    "cityNameInEnglish": "SHARONA"
  },
  {
    "id": 1237,
    "text": "שריגים )לי-און(",
    "county": "ירושלים",
    "cityNameInEnglish": "LI-ON"
  },
  {
    "id": 1238,
    "text": "שריד",
    "county": "עפולה",
    "cityNameInEnglish": "SARID"
  },
  {
    "id": 1239,
    "text": "שרשרת",
    "county": "באר שבע",
    "cityNameInEnglish": "SHARSHERET"
  },
  {
    "id": 1240,
    "text": "שתולה",
    "county": "עכו",
    "cityNameInEnglish": "SHETULA"
  },
  {
    "id": 1241,
    "text": "שתולים",
    "county": "אשקלון",
    "cityNameInEnglish": "SHETULIM"
  },
  {
    "id": 1242,
    "text": "תאשור",
    "county": "באר שבע",
    "cityNameInEnglish": "TE'ASHUR"
  },
  {
    "id": 1243,
    "text": "תדהר",
    "county": "באר שבע",
    "cityNameInEnglish": "TIDHAR"
  },
  {
    "id": 1244,
    "text": "תובל",
    "county": "עכו",
    "cityNameInEnglish": "TUVAL"
  },
  {
    "id": 1245,
    "text": "תומר",
    "county": "ירדן",
    "cityNameInEnglish": "TOMER"
  },
  {
    "id": 1246,
    "text": "תושיה",
    "county": "באר שבע",
    "cityNameInEnglish": "TUSHIYYA"
  },
  {
    "id": 1247,
    "text": "תימורים",
    "county": "אשקלון",
    "cityNameInEnglish": "TIMMORIM"
  },
  {
    "id": 1248,
    "text": "תירוש",
    "county": "ירושלים",
    "cityNameInEnglish": "TIROSH"
  },
  {
    "id": 1249,
    "text": "תל אביב - יפו",
    "county": "תל אביב",
    "cityNameInEnglish": "TEL AVIV - YAFO"
  },
  {
    "id": 1250,
    "text": "תל יוסף",
    "county": "עפולה",
    "cityNameInEnglish": "TEL YOSEF"
  },
  {
    "id": 1251,
    "text": "תל יצחק",
    "county": "השרון",
    "cityNameInEnglish": "TEL YIZHAQ"
  },
  {
    "id": 1252,
    "text": "תל מונד",
    "county": "השרון",
    "cityNameInEnglish": "TEL MOND"
  },
  {
    "id": 1253,
    "text": "תל עדשים",
    "county": "עפולה",
    "cityNameInEnglish": "TEL ADASHIM"
  },
  {
    "id": 1254,
    "text": "תל קציר",
    "county": "כנרת",
    "cityNameInEnglish": "TEL QAZIR"
  },
  {
    "id": 1255,
    "text": "תל שבע",
    "county": "באר שבע",
    "cityNameInEnglish": "TEL SHEVA"
  },
  {
    "id": 1256,
    "text": "תל תאומים",
    "county": "עפולה",
    "cityNameInEnglish": "TEL TE'OMIM"
  },
  {
    "id": 1257,
    "text": "תלם",
    "county": "חברון",
    "cityNameInEnglish": "TELEM"
  },
  {
    "id": 1258,
    "text": "תלמי אליהו",
    "county": "באר שבע",
    "cityNameInEnglish": "TALME ELIYYAHU"
  },
  {
    "id": 1259,
    "text": "תלמי אלעזר",
    "county": "חדרה",
    "cityNameInEnglish": "TALME EL'AZAR"
  },
  {
    "id": 1260,
    "text": "תלמי ביל\"ו",
    "county": "באר שבע",
    "cityNameInEnglish": "TALME BILU"
  },
  {
    "id": 1261,
    "text": "תלמי יוסף",
    "county": "באר שבע",
    "cityNameInEnglish": "TALME YOSEF"
  },
  {
    "id": 1262,
    "text": "תלמי יחיאל",
    "county": "אשקלון",
    "cityNameInEnglish": "TALME YEHI'EL"
  },
  {
    "id": 1263,
    "text": "תלמי יפה",
    "county": "אשקלון",
    "cityNameInEnglish": "TALME YAFE"
  },
  {
    "id": 1264,
    "text": "תלמים",
    "county": "אשקלון",
    "cityNameInEnglish": "TELAMIM"
  },
  {
    "id": 1265,
    "text": "תמרת",
    "county": "עפולה",
    "cityNameInEnglish": "TIMRAT"
  },
  {
    "id": 1266,
    "text": "תנובות",
    "county": "השרון",
    "cityNameInEnglish": "TENUVOT"
  },
  {
    "id": 1267,
    "text": "תעוז",
    "county": "ירושלים",
    "cityNameInEnglish": "TA'OZ"
  },
  {
    "id": 1268,
    "text": "תפרח",
    "county": "באר שבע",
    "cityNameInEnglish": "TIFRAH"
  },
  {
    "id": 1269,
    "text": "תקומה",
    "county": "באר שבע",
    "cityNameInEnglish": "TEQUMA"
  },
  {
    "id": 1270,
    "text": "תקוע",
    "county": "בית לחם",
    "cityNameInEnglish": "TEQOA"
  },
  {
    "id": 1271,
    "text": "תראבין א-צאנע",
    "county": "באר שבע",
    "cityNameInEnglish": "TARABIN AS-SANI"
  },
  {
    "id": 1272,
    "text": "תראבין א-צאנע)ישוב(",
    "county": "באר שבע",
    "cityNameInEnglish": "TARABIN AS-SANI"
  },
  {
    "id": 1273,
    "text": "תרום",
    "county": "ירושלים",
    "cityNameInEnglish": "TARUM"
  }
];
