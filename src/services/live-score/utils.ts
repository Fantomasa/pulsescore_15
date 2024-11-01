import { LiveEventsResult, SingleLiveEventSchema } from "./schemas";

export function sortByTournament(redisSearchResult: LiveEventsResult) {
  const tournaments = new Map<string, Map<string, SingleLiveEventSchema[]>>();

  for (let tIdx = 0; tIdx < redisSearchResult?.data.length; tIdx++) {
    const event = redisSearchResult.data[tIdx];

    if (event.name.value.split(" - ").length !== 2) continue;

    if (!tournaments.has(event.region.name.value)) {
      tournaments.set(event.region.name.value, new Map());
    }

    if (!tournaments.get(event.region.name.value)?.has(event.competition.name.value)) {
      tournaments.get(event.region.name.value)?.set(event.competition.name.value, []);
    }

    tournaments.get(event.region.name.value)?.get(event.competition.name.value)?.push(event);
  }

  const sortedTournaments = new Map(
    [...tournaments.entries()].sort((a, b) => a[0].localeCompare(b[0])) // Sort regions by name
  );

  for (const [region, leagues] of sortedTournaments) {
    const sortedLeagues = new Map(
      [...leagues.entries()].sort((a, b) => a[0].localeCompare(b[0])) // Sort leagues by name
    );

    for (const [league, events] of sortedLeagues) {
      events.sort((eventA, eventB) => {
        const [homeTeamA, awayTeamA] = eventA.name.value.split(" - ");
        const [homeTeamB, awayTeamB] = eventB.name.value.split(" - ");

        const homeComparison = homeTeamA.localeCompare(homeTeamB);
        return homeComparison !== 0 ? homeComparison : awayTeamA.localeCompare(awayTeamB);
      });

      sortedLeagues.set(league, events);
    }

    sortedTournaments.set(region, sortedLeagues);
  }

  return sortedTournaments;
}
