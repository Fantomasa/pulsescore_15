import { LiveEventsResult } from "@/services/live-score/schemas";

export default function FootballEvents({ liveEvents }: { liveEvents: LiveEventsResult }) {
  return <div className="text-xs">Total Events: {liveEvents.total}</div>;
}
