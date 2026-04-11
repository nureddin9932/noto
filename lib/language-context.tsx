"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "ar" | "tr"

interface Translations {
  // General
  menu: string
  home: string
  chooseCategory: string
  browseMenu: string
  noProducts: string
  categoryNotFound: string
  backToHome: string
  price: string
  currency: string
  
  // Welcome
  welcomeTitle: string
  welcomeMessage: string
  startBrowsing: string
  
  // Footer
  footerTagline: string
  footerDescription: string
  quickLinks: string
  followUs: string
  madeWith: string
  inSaudi: string
  allRights: string
  
  // Categories
  categories: {
    burger: { name: string; description: string; heroText: string }
    pizza: { name: string; description: string; heroText: string }
    broasted: { name: string; description: string; heroText: string }
    sandwiches: { name: string; description: string; heroText: string }
    drinks: { name: string; description: string; heroText: string }
    desserts: { name: string; description: string; heroText: string }
  }
  
  // Products
  products: {
    [key: string]: { name: string; description: string }
  }
}

const translations: Record<Language, Translations> = {
  ar: {
    menu: "قائمة الطعام",
    home: "الرئيسية",
    chooseCategory: "اختر من أقسامنا المتنوعة",
    browseMenu: "تصفح القائمة",
    noProducts: "لا توجد منتجات في هذا القسم حالياً",
    categoryNotFound: "القسم غير موجود",
    backToHome: "العودة للرئيسية",
    price: "السعر",
    currency: "ر.س",
    welcomeTitle: "أهلاً بك في نوتو",
    welcomeMessage: "اكتشف قائمتنا المميزة واستمتع بتجربة طعام لا تُنسى",
    startBrowsing: "ابدأ التصفح",
    footerTagline: "نوتو - تجربة طعام استثنائية",
    footerDescription: "نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات الطازجة",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    madeWith: "صُنع بكل",
    inSaudi: "في تركيا، الريحانية",
    allRights: "جميع الحقوق محفوظة",
    categories: {
      burger: { 
        name: "برجر", 
        description: "ألذ أنواع البرجر المشوي الطازج",
        heroText: "استمتع بأشهى البرجر المحضر من لحم الأنجوس الطازج مع تشكيلة واسعة من الإضافات اللذيذة"
      },
      pizza: { 
        name: "بيتزا", 
        description: "بيتزا إيطالية أصلية بعجينة طازجة",
        heroText: "بيتزا إيطالية أصلية محضرة بعجينة طازجة يومياً مع أجود أنواع الجبن والطماطم"
      },
      broasted: { 
        name: "بروستد", 
        description: "دجاج بروستد مقرمش ولذيذ",
        heroText: "دجاج بروستد مقرمش من الخارج وطري من الداخل، محضر بخلطة توابل سرية"
      },
      sandwiches: { 
        name: "ساندويتشات", 
        description: "تشكيلة متنوعة من الساندويتشات",
        heroText: "تشكيلة واسعة من الساندويتشات الشهية المحضرة بخبز طازج ومكونات فاخرة"
      },
      drinks: { 
        name: "مشروبات", 
        description: "مشروبات باردة وساخنة منعشة",
        heroText: "مشروبات منعشة وطازجة لإكمال وجبتك، من العصائر الطبيعية إلى القهوة الفاخرة"
      },
      desserts: { 
        name: "حلويات", 
        description: "أشهى الحلويات الشرقية والغربية",
        heroText: "تشكيلة فاخرة من الحلويات الشرقية والغربية المحضرة بأيدي أمهر الطهاة"
      }
    },
    products: {
      "burger-1": { name: "برجر كلاسيك", description: "برجر لحم أنجوس طازج مع جبنة شيدر وخس وطماطم وصوص خاص" },
      "burger-2": { name: "دبل تشيز برجر", description: "شريحتين من لحم الأنجوس مع جبنة مزدوجة وبصل مكرمل" },
      "burger-3": { name: "برجر دجاج مقرمش", description: "صدر دجاج مقرمش مع صوص رانش وخضروات طازجة" },
      "burger-4": { name: "برجر مشروم", description: "برجر لحم مع مشروم سوتيه وجبنة سويسرية" },
      "burger-5": { name: "برجر سبايسي", description: "برجر حار مع صوص هالبينو وجبنة بيبر جاك" },
      "pizza-1": { name: "مارغريتا", description: "صوص طماطم، جبنة موزاريلا طازجة، ريحان" },
      "pizza-2": { name: "بيبروني", description: "بيبروني حار مع جبنة موزاريلا وصوص طماطم" },
      "pizza-3": { name: "خضروات", description: "تشكيلة من الخضروات الطازجة مع جبنة موزاريلا" },
      "pizza-4": { name: "سوبريم", description: "لحم، دجاج، فلفل، بصل، زيتون، مشروم" },
      "broasted-1": { name: "بروستد 3 قطع", description: "3 قطع دجاج بروستد مقرمش مع بطاطس" },
      "broasted-2": { name: "بروستد 6 قطع", description: "6 قطع دجاج بروستد مقرمش مع بطاطس وكول سلو" },
      "broasted-3": { name: "وجبة عائلية", description: "12 قطعة بروستد مع بطاطس كبير وسلطات" },
      "broasted-4": { name: "ستربس دجاج", description: "قطع صدر دجاج مقرمشة مع صوص الاختيار" },
      "sandwich-1": { name: "كلوب ساندويتش", description: "دجاج مشوي، بيكون، خس، طماطم، مايونيز" },
      "sandwich-2": { name: "ستيك ساندويتش", description: "شرائح ستيك طرية مع فلفل وبصل مكرمل" },
      "sandwich-3": { name: "شاورما عربي", description: "شاورما لحم أو دجاج مع مخللات وثوم" },
      "drink-1": { name: "عصير برتقال طازج", description: "عصير برتقال طبيعي 100%" },
      "drink-2": { name: "موهيتو", description: "نعناع طازج، ليمون، سكر، صودا" },
      "drink-3": { name: "سموذي فراولة", description: "فراولة طازجة مع حليب وآيس كريم" },
      "drink-4": { name: "قهوة عربية", description: "قهوة عربية أصيلة مع هيل" },
      "dessert-1": { name: "كنافة نابلسية", description: "كنافة تقليدية بالجبنة مع قطر" },
      "dessert-2": { name: "تشيز كيك", description: "تشيز كيك نيويورك كريمي" },
      "dessert-3": { name: "براوني شوكولاتة", description: "براوني دافئ مع آيس كريم فانيلا" },
      "dessert-4": { name: "بقلاوة", description: "بقلاوة فستق تركية أصلية" }
    }
  },
  tr: {
    menu: "Menü",
    home: "Ana Sayfa",
    chooseCategory: "Çeşitli kategorilerimizden seçin",
    browseMenu: "Menüye Göz At",
    noProducts: "Bu kategoride şu anda ürün bulunmamaktadır",
    categoryNotFound: "Kategori bulunamadı",
    backToHome: "Ana Sayfaya Dön",
    price: "Fiyat",
    currency: "TL",
    welcomeTitle: "Noto'ya Hoş Geldiniz",
    welcomeMessage: "Özel menümüzü keşfedin ve unutulmaz bir yemek deneyimi yaşayın",
    startBrowsing: "Keşfetmeye Başla",
    footerTagline: "Noto - Olağanüstü Yemek Deneyimi",
    footerDescription: "En taze malzemelerle özenle hazırlanmış en lezzetli yemekleri sunuyoruz",
    quickLinks: "Hızlı Bağlantılar",
    followUs: "Bizi Takip Edin",
    madeWith: "Sevgiyle",
    inSaudi: "Türkiye, Reyhanlı'da yapılmıştır",
    allRights: "Tüm hakları saklıdır",
    categories: {
      burger: { 
        name: "Burger", 
        description: "En lezzetli taze ızgara burgerler",
        heroText: "Taze Angus etinden yapılmış en lezzetli burgerlerle çeşitli lezzetli eklemelerle keyfini çıkarın"
      },
      pizza: { 
        name: "Pizza", 
        description: "Taze hamurlu otantik İtalyan pizzası",
        heroText: "Her gün taze hamurla hazırlanan, en kaliteli peynir ve domates ile otantik İtalyan pizzası"
      },
      broasted: { 
        name: "Broasted", 
        description: "Çıtır ve lezzetli broasted tavuk",
        heroText: "Dışı çıtır içi yumuşak broasted tavuk, gizli baharat karışımıyla hazırlanmış"
      },
      sandwiches: { 
        name: "Sandviçler", 
        description: "Çeşitli lezzetli sandviçler",
        heroText: "Taze ekmek ve premium malzemelerle hazırlanan geniş sandviç çeşitleri"
      },
      drinks: { 
        name: "İçecekler", 
        description: "Serinletici sıcak ve soğuk içecekler",
        heroText: "Yemeğinizi tamamlamak için doğal meyve sularından premium kahveye kadar taze ve serinletici içecekler"
      },
      desserts: { 
        name: "Tatlılar", 
        description: "En iyi Doğu ve Batı tatlıları",
        heroText: "En yetenekli şefler tarafından hazırlanan lüks Doğu ve Batı tatlıları koleksiyonu"
      }
    },
    products: {
      "burger-1": { name: "Klasik Burger", description: "Cheddar peyniri, marul, domates ve özel soslu taze Angus et burger" },
      "burger-2": { name: "Double Cheese Burger", description: "Çift Angus et köftesi, çift peynir ve karamelize soğan" },
      "burger-3": { name: "Çıtır Tavuk Burger", description: "Ranch sosu ve taze sebzelerle çıtır tavuk göğsü" },
      "burger-4": { name: "Mantar Burger", description: "Sote mantar ve İsviçre peynirli et burger" },
      "burger-5": { name: "Acılı Burger", description: "Jalapeno sosu ve pepper jack peynirli acılı burger" },
      "pizza-1": { name: "Margherita", description: "Domates sosu, taze mozzarella peyniri, fesleğen" },
      "pizza-2": { name: "Pepperoni", description: "Mozzarella peyniri ve domates soslu acılı pepperoni" },
      "pizza-3": { name: "Sebzeli", description: "Mozzarella peynirli çeşitli taze sebzeler" },
      "pizza-4": { name: "Supreme", description: "Et, tavuk, biber, soğan, zeytin, mantar" },
      "broasted-1": { name: "3 Parça Broasted", description: "Patates kızartması ile 3 çıtır broasted tavuk parçası" },
      "broasted-2": { name: "6 Parça Broasted", description: "Patates kızartması ve coleslaw ile 6 çıtır broasted tavuk parçası" },
      "broasted-3": { name: "Aile Menüsü", description: "Büyük patates kızartması ve salatalarla 12 broasted parça" },
      "broasted-4": { name: "Tavuk Şeritler", description: "Tercih edilen sosla çıtır tavuk göğsü şeritleri" },
      "sandwich-1": { name: "Club Sandviç", description: "Izgara tavuk, pastırma, marul, domates, mayonez" },
      "sandwich-2": { name: "Steak Sandviç", description: "Biber ve karamelize soğanlı yumuşak biftek dilimleri" },
      "sandwich-3": { name: "Arap Şavurma", description: "Turşu ve sarımsaklı et veya tavuk şavurma" },
      "drink-1": { name: "Taze Portakal Suyu", description: "%100 doğal portakal suyu" },
      "drink-2": { name: "Mojito", description: "Taze nane, limon, şeker, soda" },
      "drink-3": { name: "Çilek Smoothie", description: "Süt ve dondurma ile taze çilek" },
      "drink-4": { name: "Arap Kahvesi", description: "Kakule ile otantik Arap kahvesi" },
      "dessert-1": { name: "Nablus Künefe", description: "Şerbetli geleneksel peynirli künefe" },
      "dessert-2": { name: "Cheesecake", description: "Kremalı New York cheesecake" },
      "dessert-3": { name: "Çikolatalı Brownie", description: "Vanilya dondurması ile sıcak brownie" },
      "dessert-4": { name: "Baklava", description: "Otantik Türk fıstıklı baklava" }
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    const savedLang = localStorage.getItem("noto-language") as Language
    if (savedLang && (savedLang === "ar" || savedLang === "tr")) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("noto-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === "ar" ? "rtl" : "ltr"
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
