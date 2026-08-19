"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { CartItem, Product } from "@/types/product";
import { createCartItemId, getCartSubtotal } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/use-local-storage";

const STORAGE_KEY = "tss-cart";
const EMPTY_CART: CartItem[] = [];

type AddItemInput = {
  product: Product;
  quantity?: number;
  color?: string;
  size?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (input: AddItemInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>(STORAGE_KEY, EMPTY_CART);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    ({ product, quantity = 1, color, size }: AddItemInput) => {
      const id = createCartItemId(product.id, size, color);
      setItems((current) => {
        const existing = current.find((item) => item.id === id);
        if (existing) {
          return current.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [
          ...current,
          {
            id,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity,
            color,
            size,
          },
        ];
      });
      setIsOpen(true);
    },
    [setItems],
  );

  const removeItem = useCallback(
    (id: string) => {
      setItems((current) => current.filter((item) => item.id !== id));
    },
    [setItems],
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity < 1) {
        setItems((current) => current.filter((item) => item.id !== id));
        return;
      }
      setItems((current) =>
        current.map((item) => (item.id === id ? { ...item, quantity } : item)),
      );
    },
    [setItems],
  );

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: getCartSubtotal(items),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, isOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
