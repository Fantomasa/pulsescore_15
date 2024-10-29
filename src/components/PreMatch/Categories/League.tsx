import { LeagueType } from "@/services/pre-match/pre-match";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function League({ league }: { league: LeagueType }) {
  const params = useParams<{ seasonId: string }>();

  return (
    <li className={`hover:text-primary mt-2 text-xs md:text-sm ${params.seasonId === league.seasonId ? "text-primary" : ""}`}>
      <Link href={`/pre-match/${league.seasonId}/table`}>{league.name}</Link>
    </li>
  );
}
