"use client";

import { usePathname } from "next/navigation";
import NavLink from "../common/NavLink";

function Nav() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-between w-full">
      <NavLink href="/live-score?sport=football" currentPath={pathname}>
        Football
      </NavLink>

      <NavLink href="/live-score?sport=basketball" currentPath={pathname}>
        Basketball
      </NavLink>

      <NavLink href="/live-score?sport=tennis" currentPath={pathname}>
        Tennis
      </NavLink>
    </ul>
  );
}

export default Nav;
