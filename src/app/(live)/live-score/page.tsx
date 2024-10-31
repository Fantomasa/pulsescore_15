import { getLiveEvents } from "@/services/live-score/live-score";
import React from "react";

export default async function LiveScore({ searchParams }: { searchParams: Promise<{ sport: string }> }) {
  let { sport } = await searchParams;

  if (sport !== "football" && sport !== "basketball" && sport !== "tennis") sport = "football";

  const liveData = await getLiveEvents(sport);

  if (liveData.total <= 0) {
    return (
      <div className="flex gap-2 items-center text-center justify-center">
        No avaible events for <p className="font-bold text-xl uppercase">{sport}</p>
      </div>
    );
  }

  return <div>{JSON.stringify(liveData)}</div>;
}
