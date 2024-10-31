import { fetcher, getErrorMessage } from "../utils";
import { LiveEventsResult } from "./schemas";

const API_LIVE_BASE_URL = process.env.API_LIVE_BASE_URL;
if (!API_LIVE_BASE_URL) throw new Error("API_BASE_URL missing from .env.local file");

const defaultLiveEventsResult: LiveEventsResult = {
  total: 0,
  data: []
};

export async function getLiveEvents(sport: string) {
  try {
    if (!API_LIVE_BASE_URL) throw new Error("API_LIVE_BASE_URL missing from .env.local file");
    const data = await fetcher<LiveEventsResult>(API_LIVE_BASE_URL, "/live-events", `sport=${sport}&markets=0`);

    return data;
  } catch (error) {
    defaultLiveEventsResult.error = getErrorMessage(error);
    return defaultLiveEventsResult;
  }
}
