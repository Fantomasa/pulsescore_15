import { FixtureMatchSchema } from "@/services/pre-match/schemas";
import Match from "./Match";

export default function FixturesComponent({ matches }: { matches: Array<FixtureMatchSchema> }) {
  return (
    <div>
      {matches.map((x) => (
        <Match key={x._id} fixture={x} />
      ))}
    </div>
  );
}
