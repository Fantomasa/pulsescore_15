import { auth } from "@/auth";
import { UserFavoritesProvider } from "@/components/Live/context";
import LiveScoreWrapper from "@/components/Live/LiveScoreWrapper";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS } from "@/metadata";
import { getUserFavorites } from "@/services/live-score/favorites";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Live Score`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default async function LiveScore() {
  const data = await auth();

  const userFavorites = await getUserFavorites(data?.user?.id);

  return (
    <UserFavoritesProvider initUserFavorites={userFavorites}>
      <LiveScoreWrapper />
    </UserFavoritesProvider>
  );
}
