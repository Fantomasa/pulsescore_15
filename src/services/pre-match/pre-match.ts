import { fetcher, getErrorMessage } from "../utils";

const API_BASE_URL = process.env.API_BASE_URL;
if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");

export type TournamentsResult = {
  total: number;
  data: {
    id: number;
    name: string;
    category: string;
    seasonId: string;
    sport: string;
  }[];
  error?: string;
};

const defaultTournamentsResult: TournamentsResult = {
  total: 0,
  data: []
};

export async function getTournaments() {
  try {
    if (!API_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");
    const data = await fetcher(API_BASE_URL, "tournaments");

    return data;
  } catch (error) {
    defaultTournamentsResult.error = getErrorMessage(error);
    return defaultTournamentsResult;
  }
}
