"use client";

import { useEffect } from "react";

export function RefreshCache({ check, time = 15 }: { check: () => Promise<void>; time: number }) {
  useEffect(() => {
    const interval = setInterval(() => {
      check();
    }, time * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [check, time]);

  return null;
}
