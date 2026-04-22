export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  sizePrices?: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "burger",
    name: "برجر",
    description: "ألذ أنواع البرجر المشوي الطازج",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    color: "orange",
    icon: "🍔"
  },

  
  {
    id: "pizza",
    name: "بيتزا",
    description: "بيتزا إيطالية أصلية بعجينة طازجة",
    image: "/noto.png",
    color: "red",
    icon: "🍕"
  },


  {
    id: "broasted",
    name: "بروستد",
    description: "دجاج بروستد مقرمش ولذيذ",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    color: "yellow",
    icon: "🍗"
  },
  {
    id: "sandwiches",
    name: "ساندويتشات",
    description: "تشكيلة متنوعة من الساندويتشات",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
    color: "green",
    icon: "🥪"
  },
  {
    id: "drinks",
    name: "مشروبات",
    description: "مشروبات باردة وساخنة منعشة",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    color: "blue",
    icon: "🥤"
  },



];

export const products: Product[] = [
  // Burgers
  {
    id: "burger-1",
    name: "لحم همبرغر",
    description: "برغر لحم مشوي طازج مع خس وطماطم ومخلل وصوص برغر مميز",
    price: 285,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-2",
    name: "موشرم همبرغر",
    description: "برغر لحم مع مشروم طازج وجبنة وصوص كريمي غني",
    price: 285,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-3",
    name: "لحم همبرغر دبل",
    description: "قطعتا لحم مشويتان مع جبنة وخضار طازجة وصوص خاص",
    price: 385,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-4",
    name: "لحم همبرغر اكسترا",
    description: "برغر لحم كبير مع إضافات اكسترا وجبنة وصوص غني",
    price: 450,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-5",
    name: "برغر زنجر",
    description: "فيليه دجاج زنجر مقرمش مع خس وصوص مايونيز حار",
    price: 260,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-6",
    name: "برغر زنجر اكسترا",
    description: "زنجر دجاج مع جبنة وإضافات اكسترا وصوص مميز",
    price: 350,
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-7",
    name: "برغر دجاج",
    description: "برغر دجاج طري مع خس ومخلل وصوص خفيف",
    price: 225,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-8",
    name: "برغر دجاج دبل",
    description: "برغر دجاج بقطعتين مع جبنة وخضار وصوص خاص",
    price: 285,
    image: "https://images.unsplash.com/photo-1619881590738-a111d176d906?w=800&q=80",
    categoryId: "burger"
  },
  // Pizzas
  {
    id: "pizza-1",
    name: "مارغريتا",
    description: "صوص طماطم، جبنة موزاريلا طازجة، ريحان",
    price: 40,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    categoryId: "pizza",
    sizePrices: { s: 30, m: 40, l: 50, xl: 60 }
  },
  {
    id: "pizza-2",
    name: "بيبروني",
    description: "بيبروني حار مع جبنة موزاريلا وصوص طماطم",
    price: 48,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    categoryId: "pizza",
    sizePrices: { s: 38, m: 48, l: 58, xl: 68 }
  },
  {
    id: "pizza-3",
    name: "خضروات",
    description: "تشكيلة من الخضروات الطازجة مع جبنة موزاريلا",
    price: 42,
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&q=80",
    categoryId: "pizza",
    sizePrices: { s: 32, m: 42, l: 52, xl: 62 }
  },
  {
    id: "pizza-4",
    name: "سوبريم",
    description: "لحم، دجاج، فلفل، بصل، زيتون، مشروم",
    price: 55,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categoryId: "pizza",
    sizePrices: { s: 45, m: 55, l: 65, xl: 75 }
  },
  // Broasted
  {
    id: "broasted-1",
    name: "وجبة بروستد",
    description: " قطعة دجاج + كريم توم+بطاطس  + صوص",
    price: 335,
    image: "/p2.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-2",
    name: "وجبة جناح",
    description: "أجنحة دجاج متبلة ومقرمشة تقدم مع بطاطس وصوص",
    price: 300,
    image: "/p3.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-3",
    name: "وجبة فخاد",
    description: "قطع فخاذ دجاج متبلة ومقلية حتى القرمشة مع بطاطس",
    price: 360,
    image: "/p4.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-4",
    name: "وجبة كريسبي",
    description: "قطع دجاج كريسبي ذهبية مع بطاطس وصوص كريمي",
    price: 335,
    image:  "/p1.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-5",
    name: "وجبة سبايسي حد",
    description: "وجبة دجاج حارة جدًا لعشاق النكهة القوية مع بطاطس",
    price: 335,
    image: "/p1.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-6",
    name: "وجبة اسكالوب",
    description: "اسكالوب دجاج مقرمش مع تتبيلة مميزة وبطاطس",
    price: 340,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-7",
    name:  "/p5.png",
    description: "قطع ناغيت دجاج ذهبية مع بطاطس وصوص غمس",
    price: 250,
    image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-8",
    name: "وجبة سوبريم",
    description: "وجبة دجاج سوبريم غنية بالنكهة مع بطاطس وصوص خاص",
    price: 350,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-9",
    name: "وجبة كوردون بلو",
    description: "صدر دجاج كوردون بلو محشو بالجبنة ويقدم مع بطاطس",
    price: 375,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80",
    categoryId: "broasted"
  },
  // Sandwiches
  {
    id: "sandwich-1",
    name: "صندويش كريسبي خبز",
    description: "قطع دجاج كريسبي مقرمشة داخل خبز طازج مع صوص خاص وخضار",
    price: 260,
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-2",
    name: "صندويش كريسبي صمون",
    description: "دجاج كريسبي بصمون طري مع خس ومخلل ومايونيز",
    price: 260,
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-3",
    name: "صندويش فاهيتا",
    description: "شرائح دجاج فاهيتا متبلة مع فلفل ملون وبصل وصوص غني",
    price: 270,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-4",
    name: "صندويش مكسيكانو",
    description: "ساندويش حار بنكهة مكسيكية مع دجاج وصوص جبنة وخضار",
    price: 240,
    image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-5",
    name: "زنجر كريب",
    description: "كريب محشو بقطع زنجر مقرمشة مع جبنة وصوص كريمي",
    price: 260,
    image: "https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-6",
    name: "صندويش سوبريم",
    description: "ساندويش غني بالدجاج والخضار والجبنة مع صوص السوبريم",
    price: 250,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80",
    categoryId: "sandwiches"
  },
  // Drinks
  {
    id: "drink-1",
    name: "عصير برتقال طازج",
    description: "عصير برتقال طبيعي 100%",
    price: 15,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80",
    categoryId: "drinks"
  },
  {
    id: "drink-2",
    name: "موهيتو",
    description: "نعناع طازج، ليمون، سكر، صودا",
    price: 18,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    categoryId: "drinks"
  },
  {
    id: "drink-3",
    name: "سموذي فراولة",
    description: "فراولة طازجة مع حليب وآيس كريم",
    price: 20,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80",
    categoryId: "drinks"
  },
  {
    id: "drink-4",
    name: "قهوة عربية",
    description: "قهوة عربية أصيلة مع هيل",
    price: 12,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    categoryId: "drinks"
  },
  // Desserts
  {
    id: "dessert-1",
    name: "كنافة نابلسية",
    description: "كنافة تقليدية بالجبنة مع قطر",
    price: 25,
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=800&q=80",
    categoryId: "desserts"
  },
  {
    id: "dessert-2",
    name: "تشيز كيك",
    description: "تشيز كيك نيويورك كريمي",
    price: 28,
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=800&q=80",
    categoryId: "desserts"
  },
  {
    id: "dessert-3",
    name: "براوني شوكولاتة",
    description: "براوني دافئ مع آيس كريم فانيلا",
    price: 22,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35b7f49?w=800&q=80",
    categoryId: "desserts"
  },

   
  {
    id: "dessert-4",
    name: "بقلاوة",
    description: "بقلاوة فستق تركية أصلية",
    price: 30,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    categoryId: "desserts"
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(category => category.id === categoryId);
}

export function getProductById(productId: string): Product | undefined {
  return products.find(product => product.id === productId);
}
