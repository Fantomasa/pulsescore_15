import Image from "next/image";
import Event from "./Event";
import { SingleLiveEventSchema } from "@/services/live-score/schemas";

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
        <Image
          style={{ height: "15px", width: "20px" }}
          className="w-auto h-auto"
          src={`/tournament/${tournamentName}.png`}
          alt={tournamentName}
          width={20}
          height={20}
        />
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
