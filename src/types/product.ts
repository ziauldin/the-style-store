export type Collection = "fashion" | "home";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: Collection;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  currency: "PKR";
  material?: string;
  images: string[];
  colors?: string[];
  sizes?: string[];
  stock: number;
  rating?: number;
  reviewCount?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isHandmade?: boolean;
  careInstructions?: string;
  dimensions?: string;
};

export type CartItem = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
};

export type ProductSort =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "best-selling";

export type ProductFilters = {
  categories?: string[];
  collection?: Collection;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  onSale?: boolean;
  materials?: string[];
  colors?: string[];
  sizes?: string[];
  query?: string;
};
