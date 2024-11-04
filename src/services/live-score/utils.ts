import { LiveEventsResult, SingleLiveEventSchema } from "./schemas";

export function sortByTournament(redisSearchResult: LiveEventsResult, userFavorites: Array<string>) {
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

  return sortByFavorites(sortedTournaments, userFavorites);
}
export function sortByFavorites(
  sortedTournaments: Map<string, Map<string, SingleLiveEventSchema[]>>,
  userFavorites: Array<string>
): Map<string, Map<string, SingleLiveEventSchema[]>> {
  const favoriteKeys = new Set(userFavorites);

  const favoriteTournaments = new Map<string, Map<string, SingleLiveEventSchema[]>>();
  const nonFavoriteTournaments = new Map<string, Map<string, SingleLiveEventSchema[]>>();

  for (const [region, leagues] of sortedTournaments) {
    const favoriteLeagues = new Map<string, SingleLiveEventSchema[]>();
    const nonFavoriteLeagues = new Map<string, SingleLiveEventSchema[]>();

    for (const [league, events] of leagues) {
      const favoriteKey = createFavoriteKey(region, league);

      if (favoriteKeys.has(favoriteKey)) {
        favoriteLeagues.set(league, events);
      } else {
        nonFavoriteLeagues.set(league, events);
      }
    }

    if (favoriteLeagues.size > 0) {
      favoriteTournaments.set(region, new Map([...favoriteLeagues]));
    }

    nonFavoriteTournaments.set(region, new Map([...leagues]));
  }

  return new Map([...favoriteTournaments, ...nonFavoriteTournaments]);
}

const C_DELIMITER = "-";

export function createFavoriteKey(tName: string, lName: string) {
  return `${tName}${C_DELIMITER}${lName}`;
}

export function getTournamentLeagueNameFromKey(tlName: string) {
  const splitArr = tlName.split(C_DELIMITER);

  return {
    tournamentName: splitArr[0],
    leagueName: splitArr[1]
  };
}
