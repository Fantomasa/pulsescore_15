"use client";

import Link from "next/link";

const acitveClass = "text-primary bg-secondary";

export default function NavLink({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) {
  return (
    <Link
      className={`w-[70px] md:w-[80] md:text-sm text-xs text-center p-2 bg-secondary rounded-md items-center border hover:text-primary hover:bg-secondary ${
        href.includes(currentPath) && currentPath !== "/" ? acitveClass : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
