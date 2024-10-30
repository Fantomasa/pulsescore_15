import { FixtureMatchSchema } from "@/services/pre-match/schemas";

export default function FixturesComponent({ matches }: { matches: Array<FixtureMatchSchema> }) {
  return <div>{JSON.stringify(matches)}</div>;
}
