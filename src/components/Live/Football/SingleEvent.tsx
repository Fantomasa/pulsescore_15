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
          className="w-auto h-auto" // Set the width and height in tailwind CSS classes
          src={`/tournament/${tournamentName}.png`}
          alt={tournamentName}
          width={20} // Maintain aspect ratio here
          height={15} // Maintain aspect ratio here
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
