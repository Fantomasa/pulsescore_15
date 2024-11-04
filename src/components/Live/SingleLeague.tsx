"use client";

import { SingleLiveEventSchema } from "@/services/live-score/schemas";
import TournamentImage from "../common/TournamentImage";
import Favorite from "./Favorite/Favorite";
import { useUserFavorites } from "./context";
import { createFavoriteKey } from "@/services/live-score/utils";

import FootballEvent from "./Event/FootballEvent";
import BasketballEvent from "./Event/BasketballEvent";
import TennisEvent from "./Event/TennisEvent";
import { useSearchParams } from "next/navigation";
import { SPORTS } from "./constants";

export default function SingleLeague({
  tournamentName,
  leagueName,
  events
}: {
  tournamentName: string;
  leagueName: string;
  events: SingleLiveEventSchema[];
}) {
  const searchParams = useSearchParams();
  let sport = searchParams.get("sport");
  if (!sport) sport = SPORTS.FOOTBALL.lower;

  const { userFavorites } = useUserFavorites();
  const tlName = createFavoriteKey(tournamentName, leagueName);

  return (
    <div className="">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div id="name" className="flex flex-row gap-2 items-center">
          <TournamentImage tournament={tournamentName} />
          <div className="text-start flex flex-col">
            <span className="font-bold text-base">{leagueName}</span>
            <span className="text-xs">{tournamentName}</span>
          </div>
        </div>
        <div id="star">
          <Favorite isFavorite={userFavorites.includes(tlName)} tlName={tlName} />
        </div>
      </div>
      {events.map((e, idx) => {
        if (sport.toLowerCase() === SPORTS.FOOTBALL.lower) return <FootballEvent key={e.id + idx} event={e} />;
        else if (sport.toLowerCase() === SPORTS.BASKETBALL.lower) return <BasketballEvent key={e.id + idx} event={e} />;
        else if (sport.toLowerCase() === SPORTS.TENNIS.lower) return <TennisEvent key={e.id + idx} event={e} />;
      })}
    </div>
  );
}
