"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../common/NavLink";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 justify-center items-center font-bold">
      <NavLink href="/pre-match" currentPath={pathname}>
        Leagues
      </NavLink>
      <NavLink href="/live-score?sport=football" currentPath={pathname}>
        Live
      </NavLink>
    </nav>
  );
}
