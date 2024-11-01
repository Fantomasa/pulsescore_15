import { SingleLiveEventSchema } from "@/services/live-score/schemas";

export default function Event({ event }: { event: SingleLiveEventSchema }) {
  const homeAwayArr = event.name.value.split(" - ");
  const home = homeAwayArr[0] || "Home";
  const away = homeAwayArr[1] || "Away";

  const score = getScore(event);

  return (
    <div className="flex flex-row items-center gap-4 p-4 rounded-md bg-secondary my-2 text-sm">
      {/* Timer or match period */}
      <div className="w-1/5 text-center">
        <p className={`text-xs`}>{event.scoreboard.period}</p>
      </div>

      {/* Team names */}
      <div className="flex flex-col text-start w-2/5">
        <span className="min-w-[140px] truncate font-bold">{home}</span>
        <span className="min-w-[140px] truncate font-bold">{away}</span>
      </div>

      {/* Scores */}
      {event.stage === "Live" && (
        <div className="flex flex-col w-2/5 justify-center">
          <div id="home" className="flex items-center gap-4 justify-center">
            <ul className="flex gap-1">
              {score.homeGames.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>
            <span className="min-w-7 text-right">{score.home}</span>
          </div>
          <div id="away" className="flex items-center gap-4 justify-center">
            <ul className="flex gap-1">
              {score.homeGames.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>
            <span className="min-w-7 text-right">{score.away}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function getScore(event: SingleLiveEventSchema): { home: string; away: string; homeGames: Array<string>; awayGames: Array<string> } {
  const homePoints = event.scoreboard?.points?.length > 0 ? event.scoreboard.points[0] : 0;
  const awayPoints = event.scoreboard?.points?.length > 1 ? event.scoreboard.points[1] : 0;

  return {
    homeGames: event.scoreboard?.setsValues?.player1,
    awayGames: event.scoreboard?.setsValues?.player2,
    home: `${homePoints}`,
    away: `${awayPoints}`
  };
}
