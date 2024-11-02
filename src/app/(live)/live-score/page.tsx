"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { SPORTS } from "@/components/Live/constants";
import LiveScoreComponent from "@/components/Live/LiveScore";
import { useSearchParams } from "next/navigation";

const queryClient = new QueryClient();

export default function LiveScore() {
  const params = useSearchParams();
  let sport = params.get("sport");

  if (sport !== SPORTS.FOOTBALL.lower && sport !== SPORTS.BASKETBALL.lower && sport !== SPORTS.TENNIS.lower) sport = SPORTS.FOOTBALL.lower;

  return (
    <QueryClientProvider client={queryClient}>
      <LiveScoreComponent sport={sport} />
    </QueryClientProvider>
  );
}
