import { LiveEventsResult } from "@/services/live-score/schemas";

export default function FootballEvents({ liveEvents }: { liveEvents: LiveEventsResult }) {
  return (
    <div className="text-xs">
      Total Events: {liveEvents.total}
      <ul className="bg-secondary">
        {liveEvents.data.map((x) => (
          <li key={x.id}>{x.name.value}</li>
        ))}
      </ul>
    </div>
  );
}
