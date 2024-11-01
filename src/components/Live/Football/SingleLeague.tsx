import Event from "./Event";
import { SingleLiveEventSchema } from "@/services/live-score/schemas";
import TournamentImage from "../../common/TournamentImage";

export default function SingleLeague({
  tournamentName,
  leagueName,
  events
}: {
  tournamentName: string;
  leagueName: string;
  events: SingleLiveEventSchema[];
}) {
  return (
    <div className="">
      <div className="flex flex-row gap-2 items-center">
        <TournamentImage tournament={tournamentName} />
        <div className="text-start flex flex-col">
          <span className="font-bold text-base">{leagueName}</span>
          <span className="text-xs">{tournamentName}</span>
        </div>
      </div>
      {events.map((e, idx) => {
        return <Event key={idx} event={e} />;
      })}
    </div>
  );
}
