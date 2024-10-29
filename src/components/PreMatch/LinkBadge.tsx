"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";

const activeClassName = "bg-primary text-white hover:text-black hover:bg-white";
const nonActiveClassName = "bg-white text-black hover:bg-primary hover:text-white";

function LinkBadge({ seasonId, path }: { seasonId: string; path: string }) {
  const pathname = usePathname();

  return (
    <Link href={`/pre-match/${seasonId}/${path}`}>
      <Badge
        className={`text-center mx-auto justify-center text-sm ${pathname.includes(path) ? activeClassName : nonActiveClassName}`}
        variant={"secondary"}
      >
        {path.toUpperCase()}
      </Badge>
    </Link>
  );
}

export default LinkBadge;
