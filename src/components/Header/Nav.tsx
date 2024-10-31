"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../common/NavLink";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 justify-start items-center font-bold">
      <NavLink href="/fixtures" currentPath={pathname}>
        Fixtures
      </NavLink>
      <NavLink href="/live-score?sport=football" currentPath={pathname}>
        Live
      </NavLink>
      <NavLink href="/about-us" currentPath={pathname}>
        About us
      </NavLink>
    </nav>
  );
}
