export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: "Starters" | "Mains" | "Desserts" | "Drinks";
  description: string;
  rating: number;
  calories: string;
  prepTime: string;
  imageUrl: string;
  isSaved?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Burrata & Heirloom",
    price: 14.50,
    category: "Starters",
    description: "Fresh burrata, vine tomatoes, basil oil, fleur de sel.",
    rating: 4.8,
    calories: "320 kcal",
    prepTime: "8m",
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    isSaved: true,
  },
  {
    id: "2",
    name: "Truffle Arancini",
    price: 12.00,
    category: "Starters",
    description: "Black truffle risotto balls, aged parmigiano, garlic aioli.",
    rating: 4.6,
    calories: "410 kcal",
    prepTime: "12m",
    imageUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "3",
    name: "Wagyu Ribeye",
    price: 34.00,
    category: "Mains",
    description: "A5 wagyu cut, charred baby carrots, red wine bone marrow jus.",
    rating: 4.9,
    calories: "680 kcal",
    prepTime: "20m",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "4",
    name: "Wild King Salmon",
    price: 26.50,
    category: "Mains",
    description: "Pan-seared skin, celery root purée, glazed asparagus spears.",
    rating: 4.7,
    calories: "520 kcal",
    prepTime: "16m",
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "5",
    name: "Handmade Truffle Gnocchi",
    price: 22.00,
    category: "Mains",
    description: "Potato gnocchi, wild forest mushrooms, shaved black winter truffle.",
    rating: 4.8,
    calories: "580 kcal",
    prepTime: "14m",
    imageUrl:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "6",
    name: "Valrhona Molten Cake",
    price: 9.50,
    category: "Desserts",
    description: "Warm dark chocolate core, vanilla bean gelato, gold flakes.",
    rating: 4.9,
    calories: "490 kcal",
    prepTime: "10m",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "7",
    name: "Bronte Pistachio Gelato",
    price: 8.00,
    category: "Desserts",
    description: "Sicilian roasted pistachios, crushed wafer, wildflower honey drizzle.",
    rating: 4.7,
    calories: "280 kcal",
    prepTime: "5m",
    imageUrl:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "8",
    name: "Smoked Maple Old Fashioned",
    price: 13.00,
    category: "Drinks",
    description: "Small-batch rye bourbon, maple syrup, angostura, aromatic smoke.",
    rating: 4.8,
    calories: "190 kcal",
    prepTime: "4m",
    imageUrl:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "9",
    name: "Botanical Hibiscus Spritz",
    price: 11.50,
    category: "Drinks",
    description: "Sparkling prosecco, wild hibiscus extract, fresh mint, lime.",
    rating: 4.5,
    calories: "140 kcal",
    prepTime: "3m",
    imageUrl:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
  {
    id: "10",
    name: "Artisan Espresso Tonic",
    price: 6.50,
    category: "Drinks",
    description: "Double extraction single-origin espresso over cold Mediterranean tonic.",
    rating: 4.4,
    calories: "45 kcal",
    prepTime: "3m",
    imageUrl:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    isSaved: false,
  },
];