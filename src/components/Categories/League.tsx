import { LeagueType } from "@/services/pre-match/pre-match";

export default function League({ league }: { league: LeagueType }) {
  return <li key={league.seasonId}>{league.name}</li>;
}
