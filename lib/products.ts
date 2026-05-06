export type Variant = {
  id: string;
  name: string;
  color: string;
};

export type NutritionData = {
  energy: string;
  protein: string;
  carbohydrates: string;
  sodium: string;
  iron: string;
  calcium: string;
  fat: string;
};

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  weight: string;
  price: number;
  currency: string;
  usage: string;
  variants: Variant[];
  nutrition: NutritionData;
  description: string;
  ingredients: string;
  howToUse: string;
};

export const products: Product[] = [
  {
    name: "Kannur Kalyana Biriyani Masala",
    slug: "kannur-kalyana-biriyani-masala",
    tagline: "The secret behind every Malabar wedding feast",
    weight: "200g",
    price: 249,
    currency: "₹",
    usage: "2 tsp for 1 kg",
    variants: [
      { id: "crimson", name: "Heritage Crimson", color: "#8B1A1A" },
      { id: "olive",   name: "Malabar Olive",    color: "#6B7340" },
      { id: "navy",    name: "Coastal Navy",     color: "#1A2744" },
    ],
    nutrition: {
      energy:         "583 kcal / 100g",
      protein:        "17.4%",
      carbohydrates:  "68.8%",
      sodium:         "0.15%",
      iron:           "11.95 mg / 100g",
      calcium:        "124.4 mg / 100g",
      fat:            "8.75%",
    },
    description:
      "Crafted from a century-old recipe passed down through generations of Malabar wedding cooks, Kannur Kalyana Biriyani Masala is the soul of every Thalassery biryani. A precise blend of whole spices, stone-ground on traditional chakki, this masala carries the warmth of the Malabar coast in every grain. No artificial colours, no preservatives — just the honest flavour of Kannur.",
    ingredients:
      "Coriander, Cumin, Black Pepper, Cardamom, Cloves, Cinnamon, Star Anise, Mace, Nutmeg, Bay Leaf, Fennel Seeds, Dried Ginger, Turmeric, Red Chilli, Salt.",
    howToUse:
      "Use 2 teaspoons per 1 kg of meat or vegetables. Marinate protein with masala, yoghurt, and salt for 30 minutes. Layer with parboiled rice, saffron milk, caramelised onions, and ghee. Dum cook on low flame for 25–30 minutes. Serve with raita and pickle.",
  },
  {
    name: "Matghoot Masala",
    slug: "matghoot-masala",
    tagline: "Born from the clay pots of Malabar kitchens",
    weight: "200g",
    price: 229,
    currency: "₹",
    usage: "2 tsp for 1 kg",
    variants: [
      { id: "kraft", name: "Kraft Heritage", color: "#C8956C" },
      { id: "navy",  name: "Coastal Navy",   color: "#1A2744" },
    ],
    nutrition: {
      energy:         "583 kcal / 100g",
      protein:        "17.4%",
      carbohydrates:  "68.8%",
      sodium:         "0.15%",
      iron:           "11.95 mg / 100g",
      calcium:        "124.4 mg / 100g",
      fat:            "8.75%",
    },
    description:
      "Matghoot is the ancient Malabar slow-cook — a tradition of clay pot cooking where spices bloom slowly over wood fire. This masala is formulated for that very method: earthy, bold, and deeply aromatic. Used in Matghoot biryani and Malabar meat curries, it brings the rustic soul of coastal Kerala to every kitchen.",
    ingredients:
      "Black Pepper, Coriander, Cumin, Cardamom, Cloves, Dried Chilli, Cinnamon, Fennel, Bay Leaf, Mace, Dried Ginger, Turmeric, Salt.",
    howToUse:
      "Use 2 teaspoons per 1 kg of meat. Rub masala into meat with coconut oil, ginger-garlic paste, and salt. Cook low and slow in a clay pot or heavy-bottomed pan. Add water gradually and let the masala bloom fully. Finish with coconut milk for a rich Malabar curry.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
