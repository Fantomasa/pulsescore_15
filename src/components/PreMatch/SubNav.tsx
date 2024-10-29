"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

const activeClassName = "bg-primary text-white hover:text-black hover:bg-white";

export default function SubNav() {
  const params = useParams<{ seasonId: string }>();
  const seasonId = params.seasonId;

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex w-full gap-20 justify-center mt-5 px-10 mb-5">
        <li>
          <Link href={`/pre-match/${seasonId}/table`}>
            <Badge
              className={`text-center mx-auto justify-center text-sm ${pathname.includes("table") ? activeClassName : ""}`}
              variant={"secondary"}
            >
              Table
            </Badge>
          </Link>
        </li>
        <li>
          <Link href={`/pre-match/${seasonId}/fixtures`}>
            <Badge
              className={`text-center mx-auto justify-center text-sm ${pathname.includes("fixtures") ? activeClassName : ""}`}
              variant={"secondary"}
            >
              Fixtures
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
