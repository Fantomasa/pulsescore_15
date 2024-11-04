import { SingleLiveEventSchema } from "@/services/live-score/schemas";

export default function BasketballEvent({ event }: { event: SingleLiveEventSchema }) {
  const homeAwayArr = event.name.value.split(" - ");
  const home = homeAwayArr[0] || "Home";
  const away = homeAwayArr[1] || "Away";

  const score = getScore(event);
  const homeScore = score.home;
  const awayScore = score.away;

  return (
    <div className="flex flex-row items-center gap-4 p-4 rounded-md bg-secondary my-2 text-sm">
      {/* Timer or match period */}
      <div className="w-1/5 text-center">
        <p className={`text-xs`}>{getBasketballPlayTime(event)}</p>
      </div>

      {/* Team names */}
      <div className="flex flex-col text-start w-3/5">
        <span className="min-w-[180px] truncate font-bold">{home}</span>
        <span className="min-w-[180px] truncate font-bold">{away}</span>
      </div>

      {/* Scores */}
      {event.stage === "Live" && (
        <div className="flex flex-col w-1/5 text-center">
          <span className="min-w-[50px] font-semibold">{homeScore}</span>
          <span className="min-w-[50px] font-semibold">{awayScore}</span>
        </div>
      )}
    </div>
  );
}

function getBasketballPlayTime(event: SingleLiveEventSchema) {
  try {
    if (event.stage === "Live") {
      const period = event.scoreboard.period;
      let timeDisplay = period;

      if (event.scoreboard?.indicator) {
        timeDisplay = `${period} ${event.scoreboard.indicator}'`;
      }

      return timeDisplay;
    }

    const date = new Date(event.startDate);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function getScore(event: SingleLiveEventSchema): { home: number; away: number } {
  const homeScore = event.scoreboard?.totalPoints?.player1[255];
  const awayScore = event.scoreboard?.totalPoints?.player2[255];

  return {
    home: homeScore,
    away: awayScore
  };
}
