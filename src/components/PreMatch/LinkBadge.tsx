"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";

const activeClassName = "bg-primary text-white hover:text-black hover:bg-white";

function LinkBadge({ seasonId, path }: { seasonId: string; path: string }) {
  const pathname = usePathname();
  console.log({ pathname, path });

  return (
    <Link href={`/pre-match/${seasonId}/${path}`}>
      <Badge
        className={`text-center mx-auto justify-center text-sm ${pathname.includes(path) ? activeClassName : ""}`}
        variant={"secondary"}
      >
        {path.toUpperCase()}
      </Badge>
    </Link>
  );
}

export default LinkBadge;
