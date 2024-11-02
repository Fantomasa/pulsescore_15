import { getLiveEvents } from "@/services/live-score/live-score";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let sport = searchParams.get("sport");

  // console.log({ sport });

  if (!sport) sport = "football";

  const data = await getLiveEvents(sport);

  return NextResponse.json(data);
}
