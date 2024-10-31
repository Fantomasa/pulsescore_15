"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SPORTS } from "./constants";

type NavLink = {
  name: string;
  href: string;
};

const navData: Array<NavLink> = [
  {
    name: SPORTS.FOOTBALL.normal,
    href: `/live-score?sport=${SPORTS.FOOTBALL.lower}`
  }
];

export default function NavComponent() {
  let sport = useSearchParams().get("sport");
  if (!sport) sport = SPORTS.FOOTBALL.lower;

  return (
    <ul className="flex items-center justify-center w-full">
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