import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CartItem } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: "PKR" = "PKR") {
  return `${currency} ${amount.toLocaleString("en-PK")}`;
}

export function createCartItemId(
  productId: string,
  size?: string,
  color?: string,
) {
  return [productId, size ?? "default", color ?? "default"].join("__");
}

export function getDiscountPercent(price: number, compareAtPrice?: number) {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getStockLabel(stock: number) {
  if (stock <= 0) return "Out of Stock";
  if (stock <= 3) return `Only ${stock} Left`;
  return "In Stock";
}
