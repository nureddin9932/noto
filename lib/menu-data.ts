export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
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
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
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
  {
    id: "desserts",
    name: "حلويات",
    description: "أشهى الحلويات الشرقية والغربية",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    color: "pink",
    icon: "🍰"
  }
];

export const products: Product[] = [
  // Burgers
  {
    id: "burger-1",
    name: "برجر كلاسيك",
    description: "برجر لحم أنجوس طازج مع جبنة شيدر وخس وطماطم وصوص خاص",
    price: 35,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-2",
    name: "دبل تشيز برجر",
    description: "شريحتين من لحم الأنجوس مع جبنة مزدوجة وبصل مكرمل",
    price: 45,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-3",
    name: "برجر دجاج مقرمش",
    description: "صدر دجاج مقرمش مع صوص رانش وخضروات طازجة",
    price: 32,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-4",
    name: "برجر مشروم",
    description: "برجر لحم مع مشروم سوتيه وجبنة سويسرية",
    price: 42,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
    categoryId: "burger"
  },
  {
    id: "burger-5",
    name: "برجر سبايسي",
    description: "برجر حار مع صوص هالبينو وجبنة بيبر جاك",
    price: 38,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80",
    categoryId: "burger"
  },
  // Pizzas
  {
    id: "pizza-1",
    name: "مارغريتا",
    description: "صوص طماطم، جبنة موزاريلا طازجة، ريحان",
    price: 40,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    categoryId: "pizza"
  },
  {
    id: "pizza-2",
    name: "بيبروني",
    description: "بيبروني حار مع جبنة موزاريلا وصوص طماطم",
    price: 48,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    categoryId: "pizza"
  },
  {
    id: "pizza-3",
    name: "خضروات",
    description: "تشكيلة من الخضروات الطازجة مع جبنة موزاريلا",
    price: 42,
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&q=80",
    categoryId: "pizza"
  },
  {
    id: "pizza-4",
    name: "سوبريم",
    description: "لحم، دجاج، فلفل، بصل، زيتون، مشروم",
    price: 55,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categoryId: "pizza"
  },
  // Broasted
  {
    id: "broasted-1",
    name: "بروستد 3 قطع",
    description: "3 قطع دجاج بروستد مقرمش مع بطاطس",
    price: 28,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-2",
    name: "بروستد 6 قطع",
    description: "6 قطع دجاج بروستد مقرمش مع بطاطس وكول سلو",
    price: 52,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-3",
    name: "وجبة عائلية",
    description: "12 قطعة بروستد مع بطاطس كبير وسلطات",
    price: 95,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    categoryId: "broasted"
  },
  {
    id: "broasted-4",
    name: "ستربس دجاج",
    description: "قطع صدر دجاج مقرمشة مع صوص الاختيار",
    price: 32,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&q=80",
    categoryId: "broasted"
  },
  // Sandwiches
  {
    id: "sandwich-1",
    name: "كلوب ساندويتش",
    description: "دجاج مشوي، بيكون، خس، طماطم، مايونيز",
    price: 30,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-2",
    name: "ستيك ساندويتش",
    description: "شرائح ستيك طرية مع فلفل وبصل مكرمل",
    price: 38,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-3",
    name: "شاورما عربي",
    description: "شاورما لحم أو دجاج مع مخللات وثوم",
    price: 25,
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
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
