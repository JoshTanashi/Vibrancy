"use client";

import { useSyncExternalStore } from "react";

const KEY = "vibrancy-intro-seen";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return sessionStorage.getItem(KEY) === "1";
}

function getServerSnapshot() {
  return true;
}

export function useSessionIntroGate() {
  const seen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function markSeen() {
    sessionStorage.setItem(KEY, "1");
  }

  return { shouldPlay: !seen, markSeen };
}
