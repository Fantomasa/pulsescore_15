"use client";

import { useQuery } from "@tanstack/react-query";
import { LiveEventsResult } from "@/services/live-score/schemas";

import SportEvents from "./SportEvents";
import Spinner from "../common/Spinner";

export default function LiveScoreComponent({ sport }: { sport: string }) {
  const {
    data: liveData,
    isLoading,
    isError
  } = useQuery<LiveEventsResult>({
    queryKey: ["live-score", sport],
    queryFn: () => fetch(`/api/live-score?sport=${sport}`).then((res) => res.json()),
    refetchInterval: 5000
  });

  if (isLoading)
    return (
      <div className="w-full mx-auto">
        <Spinner />
      </div>
    );

  if (isError || !liveData || (liveData && liveData?.total <= 0)) {
    return (
      <div className="flex gap-2 items-center text-center justify-center">
        No avaible events for <p className="font-bold text-xl uppercase">{sport}</p>
      </div>
    );
  }

  return <>{liveData && <SportEvents liveEvents={liveData} />}</>;
}
