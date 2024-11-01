"use client";

import Link from "next/link";

const acitveClass = "text-primary bg-secondary";

export default function NavLink({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) {
  return (
    <Link
      className={`w-[80] md:text-sm text-xs text-center p-2 bg-secondary rounded-md items-center border md:hover:text-primary md:hover:bg-secondary ${
        href.includes(currentPath) && currentPath !== "/" ? acitveClass : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
