"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const acitveClass = "text-primary underline";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 justify-between items-center font-bold">
      <Link
        className={`p-2 bg-foreground rounded-md items-center border hover:text-primary hover:underline ${
          pathname.includes("pre-match") ? acitveClass : ""
        }`}
        href="/pre-match"
      >
        PreMatch
      </Link>
      <Link className={`hover:text-primary hover:underline ${pathname.includes("live-score") ? acitveClass : ""}`} href="/live-score">
        Live
      </Link>
    </nav>
  );
}
