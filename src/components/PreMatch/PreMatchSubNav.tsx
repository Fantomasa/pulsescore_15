"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function PreMatchSubNav() {
  const params = useParams<{ seasonId: string }>();
  const seasonId = params.seasonId;

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex w-full gap-20 justify-center mt-5 px-10 mb-5">
        <li>
          <Link
            href={`/pre-match/${seasonId}/table`}
            className={`text-center mx-auto justify-center text-sm hover:underline underline-offset-4 ${
              pathname.endsWith("table") ? "underline" : ""
            }`}
          >
            Table
          </Link>
        </li>
        <li>
          <Link
            href={`/pre-match/${seasonId}/fixtures`}
            className={`text-center mx-auto justify-center text-sm hover:underline underline-offset-4 ${
              pathname.endsWith("fixtures") ? "underline" : ""
            }`}
          >
            Fixtures
          </Link>
        </li>
      </ul>
    </nav>
  );
}
