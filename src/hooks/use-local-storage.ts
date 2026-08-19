"use client";

import { useCallback, useSyncExternalStore } from "react";

const snapshotCache = new Map<string, { raw: string | null; value: unknown }>();

function readValue<T>(key: string, fallback: T): T {
  const raw = window.localStorage.getItem(key);
  const cached = snapshotCache.get(key);
  if (cached && cached.raw === raw) {
    return cached.value as T;
  }
  let value = fallback;
  if (raw) {
    try {
      value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  snapshotCache.set(key, { raw, value });
  return value;
}

export function useLocalStorage<T>(key: string, fallback: T) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handler = () => onStoreChange();
      window.addEventListener("storage", handler);
      window.addEventListener(`local-${key}`, handler);
      return () => {
        window.removeEventListener("storage", handler);
        window.removeEventListener(`local-${key}`, handler);
      };
    },
    [key],
  );

  const getSnapshot = useCallback(() => readValue(key, fallback), [key, fallback]);
  const getServerSnapshot = useCallback(() => fallback, [fallback]);
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (next: T | ((current: T) => T)) => {
      const current = readValue(key, fallback);
      const resolved =
        typeof next === "function" ? (next as (current: T) => T)(current) : next;
      const raw = JSON.stringify(resolved);
      window.localStorage.setItem(key, raw);
      snapshotCache.set(key, { raw, value: resolved });
      window.dispatchEvent(new Event(`local-${key}`));
    },
    [key, fallback],
  );

  return [value, setValue] as const;
}
