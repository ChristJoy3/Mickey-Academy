"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Read on the client so the page stays fully prerendered under cacheComponents.
export default function FooterYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year}</>;
}
