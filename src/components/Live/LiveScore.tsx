"use client";

import { useQuery } from "@tanstack/react-query";

import BasketballEvents from "@/components/Live/Basketball/BasketballEvents";
import FootballEvents from "@/components/Live/Football/FootballEvents";
import TennisEvents from "@/components/Live/Tennis/TennisEvents";
import { SPORTS } from "./constants";
import { LiveEventsResult } from "@/services/live-score/schemas";
import Spinner from "../common/Spinner";

export default function LiveScoreComponent({ sport }: { sport: string }) {
  const { data: liveData, isLoading } = useQuery<LiveEventsResult>({
    queryKey: ["live-score", sport],
    queryFn: () => fetch(`/api/live-score?sport=${sport}`).then((res) => res.json()),
    refetchInterval: 5000
  });

  // console.log({ liveData });

  if (isLoading) return <Spinner />;

  if (!liveData || (liveData && liveData?.total <= 0)) {
    return (
      <div className="flex gap-2 items-center text-center justify-center">
        No avaible events for <p className="font-bold text-xl uppercase">{sport}</p>
      </div>
    );
  }

  return (
    <>
      {/* {JSON.stringify(liveData)} */}
      {sport === SPORTS.FOOTBALL.lower && liveData && <FootballEvents liveEvents={liveData} />}
      {sport === SPORTS.BASKETBALL.lower && liveData && <BasketballEvents liveEvents={liveData} />}
      {sport === SPORTS.TENNIS.lower && liveData && <TennisEvents liveEvents={liveData} />}
    </>
  );
}
