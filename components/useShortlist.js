"use client";

import { useCallback, useEffect, useState } from "react";

export const SHORTLIST_KEY = "halden-shortlist";
const EVENT = "halden-shortlist";

function readIds() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(SHORTLIST_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id) => typeof id === "string");
  } catch {
    return [];
  }
}

export function useShortlist() {
  const [ids, setIds] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function sync() {
      setIds(readIds());
    }
    sync();
    setReady(true);
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id) => {
    const current = readIds();
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    window.localStorage.setItem(SHORTLIST_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { ids, ready, toggle };
}
