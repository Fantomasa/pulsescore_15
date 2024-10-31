import { SPORTS } from "@/components/Live/constants";
import { getLiveEvents } from "@/services/live-score/live-score";

export default async function LiveScore({ searchParams }: { searchParams: Promise<{ sport: string }> }) {
  let { sport } = await searchParams;

  if (sport !== SPORTS.FOOTBALL.lower && sport !== SPORTS.BASKETBALL.lower && sport !== SPORTS.TENNIS.lower) sport = SPORTS.FOOTBALL.lower;

  const liveData = await getLiveEvents(sport);

  if (liveData.total <= 0) {
    return (
      <div className="flex gap-2 items-center text-center justify-center">
        No avaible events for <p className="font-bold text-xl uppercase">{sport}</p>
      </div>
    );
  }

  return <div></div>;
}
