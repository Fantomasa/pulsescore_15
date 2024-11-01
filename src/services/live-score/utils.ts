import { LiveEventsResult, SingleLiveEventSchema } from "./schemas";

export function sortByTournament(redisSearchResult: LiveEventsResult) {
  const tournaments = new Map<string, Map<string, SingleLiveEventSchema[]>>();

  for (let tIdx = 0; tIdx < redisSearchResult?.data.length; tIdx++) {
    const event = redisSearchResult.data[tIdx];

    if (event.name.value.split(" - ").length !== 2) continue; //remove events without two teams: Some bug from scrapping process

    if (!tournaments.has(event.region.name.value)) {
      tournaments.set(event.region.name.value, new Map());
    }

    if (!tournaments.get(event.region.name.value)?.has(event.competition.name.value)) {
      tournaments.get(event.region.name.value)?.set(event.competition.name.value, new Array<SingleLiveEventSchema>());
    }

    tournaments.get(event.region.name.value)?.get(event.competition.name.value)?.push(event);
  }

  return tournaments;
}
