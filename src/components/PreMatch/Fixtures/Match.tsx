import { FixtureMatchSchema } from "@/services/pre-match/schemas";
import { Info } from "lucide-react";

export default function Match({ fixture }: { fixture: FixtureMatchSchema }) {
  return (
    <div className="flex justify-between mb-2 border rounded-md p-2">
      <div id="date-container" className="flex gap-2">
        <span>{fixture.time.date}</span>
        <span>{fixture.time.time}</span>
      </div>

      <div className="flex ml-2">
        <div
          id="home-team"
          className={`w-[100px] truncate ${fixture.result.winner && fixture.result.winner === "home" ? "font-bold underline" : ""}`}
        >
          <span>{fixture.teams.home.name}</span>
        </div>

        <div id="score" className="flex gap-2 w-[50px]">
          <span>{fixture.result.home}</span>
          <span>:</span>
          <span>{fixture.result.away}</span>
        </div>

        <div
          id="away-team"
          className={`w-[100px] truncate ${fixture.result.winner && fixture.result.winner === "away" ? "font-bold underline" : ""}`}
        >
          <span>{fixture.teams.away.name}</span>
        </div>
      </div>

      <Info />
    </div>
  );
}
