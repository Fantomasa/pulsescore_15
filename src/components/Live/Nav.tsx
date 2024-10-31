"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

const navData: Array<NavLink> = [
  {
    name: "Football",
    href: "/live-score?sport=football"
  },
  {
    name: "Basketball",
    href: "/live-score?sport=basketball"
  },
  {
    name: "Tennis",
    href: "/live-score?sport=tennis"
  }
];

export default function NavComponent() {
  let sport = useSearchParams().get("sport");
  if (!sport) sport = "football";

  return (
    <ul className="flex items-center justify-between w-full">
      {navData.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={`hover:underline underline-offset-4 ${link.href.includes(sport?.toLowerCase()) && "underline"}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
