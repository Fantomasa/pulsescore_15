import { LeagueType } from "@/services/pre-match/pre-match";
import Link from "next/link";

export default function League({ league }: { league: LeagueType }) {
  return (
    <li>
      <Link href={`/pre-match/${league.seasonId}`}>{league.name}</Link>
    </li>
  );
}
