import { getLiveEvents } from "@/services/live-score/live-score";
import React from "react";

export default async function LiveScore() {
  const liveData = await getLiveEvents();

  liveData.total = 0;
  if (liveData.total <= 0) {
    return <div></div>;
  }
  return <div>{JSON.stringify(liveData)}</div>;
}
