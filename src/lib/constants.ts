export const SITE = {
  name: "The Style Store",
  tagline: "Elevate Your Style",
  description:
    "Discover handmade dresses, elegant chadars, premium home textiles, and warm shawls crafted with care.",
  url: "https://thestylestore.pk",
  email: "hello@thestylestore.pk",
  whatsappNumber: "923001234567",
  instagram: "https://instagram.com/thestylestore",
  tiktok: "https://www.tiktok.com/@thestylestore",
  facebook: "https://facebook.com/thestylestore",
} as const;

export const ANNOUNCEMENTS = [
  "Nationwide Delivery Across Pakistan",
  "Handmade With Care",
  "Premium Fashion & Home Collection",
] as const;

export const MATERIALS = [
  "Cotton",
  "Lawn",
  "Khaddar",
  "Wool",
  "Linen",
  "Polyester",
] as const;

export const PRICE_RANGES = [
  { id: "under-3000", label: "Under PKR 3,000", min: 0, max: 2999 },
  { id: "3000-6000", label: "PKR 3,000 – 6,000", min: 3000, max: 6000 },
  { id: "6000-10000", label: "PKR 6,000 – 10,000", min: 6000, max: 10000 },
  { id: "over-10000", label: "Over PKR 10,000", min: 10000, max: Infinity },
] as const;

export const FASHION_CATEGORY_SLUGS = [
  "dresses",
  "warm-shawls",
  "chadars",
] as const;

export const HOME_CATEGORY_SLUGS = [
  "bedsheets",
  "sofa-covers",
  "fan-covers",
  "chadars",
] as const;

export const SORT_OPTIONS: { value: string; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
];

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hello The Style Store, I have a question about your collection.",
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
