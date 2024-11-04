import { sortByTournament } from "@/services/live-score/utils";
import { LiveEventsResult } from "@/services/live-score/schemas";
import { useUserFavorites } from "./context";

import SingleLeague from "./SingleLeague";

export default function SportEvents({ liveEvents }: { liveEvents: LiveEventsResult }) {
  const { userFavorites } = useUserFavorites();

  const data = sortByTournament(liveEvents, userFavorites);
  const tournamentsNames = Array.from(data.keys());

  return (
    <div>
      <p className="text-xs">Total Events: {liveEvents.total}</p>
      <div className="mt-10">
        {tournamentsNames.map((tournament) => {
          const currentTournament = data.get(tournament);
          if (!currentTournament) return <></>;

          const leagues = Array.from(currentTournament.keys());

          return (
            <div key={tournament}>
              {leagues.map((l) => (
                <SingleLeague key={tournament + "-" + l} tournamentName={tournament} leagueName={l} events={currentTournament.get(l)!} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
