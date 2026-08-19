"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

const STORAGE_KEY = "tss-wishlist";
const EMPTY_IDS: string[] = [];

type WishlistContextValue = {
  ids: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  remove: (productId: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useLocalStorage<string[]>(STORAGE_KEY, EMPTY_IDS);

  const toggle = useCallback(
    (productId: string) => {
      setIds((current) =>
        current.includes(productId)
          ? current.filter((id) => id !== productId)
          : [...current, productId],
      );
    },
    [setIds],
  );

  const remove = useCallback(
    (productId: string) => {
      setIds((current) => current.filter((id) => id !== productId));
    },
    [setIds],
  );

  const value = useMemo(
    () => ({
      ids,
      toggle,
      remove,
      has: (productId: string) => ids.includes(productId),
    }),
    [ids, toggle, remove],
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
