"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const acitveClass = "text-primary bg-secondary";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 justify-between items-center font-bold">
      <NavLink href="/pre-match" pathname={pathname}>
        Leagues
      </NavLink>
      <NavLink href="/live-score" pathname={pathname}>
        Live
      </NavLink>
    </nav>
  );
}

function NavLink({ href, pathname, children }: { href: string; pathname: string; children: React.ReactNode }) {
  return (
    <Link
      className={`p-2 bg-foreground rounded-md items-center border hover:text-primary hover:bg-secondary ${
        pathname.includes(href) ? acitveClass : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
