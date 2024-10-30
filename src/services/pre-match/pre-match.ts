import { fetcher, getErrorMessage, sortTournaments } from "../utils";
import { FixturesResult, TableResult, TournamentsResult } from "./schemas";

const API_BASE_URL = process.env.API_BASE_URL;
if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");

const defaultTournamentsResult: TournamentsResult = {
  total: 0,
  data: []
};

export async function getTournaments() {
  try {
    if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");
    const data = await fetcher<TournamentsResult>(API_BASE_URL, "/tournaments");

    return sortTournaments(data);
  } catch (error) {
    defaultTournamentsResult.error = getErrorMessage(error);
    return [];
  }
}

const defaultTableResult: TableResult = {
  total: 0,
  data: []
};

export async function getTable(seasonId: string) {
  try {
    if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");
    const data = await fetcher<TableResult>(API_BASE_URL, `/tables/${seasonId}`);

    return data;
  } catch (error) {
    defaultTableResult.error = getErrorMessage(error);
    return defaultTableResult;
  }
}

const defaultFixturesResult: FixturesResult = {
  total: 0,
  data: []
};

export async function getFixtures(seasonId: string) {
  try {
    if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");
    const data = await fetcher<FixturesResult>(API_BASE_URL, `/fixtures/${seasonId}`);

    return data;
  } catch (error) {
    defaultFixturesResult.error = getErrorMessage(error);
    return defaultFixturesResult;
  }
}
