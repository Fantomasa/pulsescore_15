"use client";

import Link from "next/link";

const acitveClass = "text-primary bg-secondary";

export default function NavLink({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) {
  return (
    <Link
      className={`p-2 bg-foreground rounded-md items-center border hover:text-primary hover:bg-secondary ${
        currentPath.includes(href) ? acitveClass : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
