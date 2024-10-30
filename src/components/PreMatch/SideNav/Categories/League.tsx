import { LeagueType } from "@/services/pre-match/schemas";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSideNav } from "../context";

export default function League({ league }: { league: LeagueType }) {
  const { toggleSideNav } = useSideNav();
  const params = useParams<{ seasonId: string }>();

  return (
    <li
      onClick={() => toggleSideNav()}
      className={`hover:text-primary hover:underline mt-2 text-xs md:text-sm ${params.seasonId === league.seasonId ? "text-primary" : ""}`}
    >
      <Link href={`/pre-match/${league.seasonId}/table`}>{league.name}</Link>
    </li>
  );
}
