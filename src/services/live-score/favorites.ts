import { prisma } from "@/db/prisma";

export async function getUserFavorites(userId?: string) {
  const init: Array<string> = [];

  if (!userId) return init;

  try {
    const favoritesResult = await prisma.userFavorites.findFirst({
      where: {
        userId: userId
      }
    });

    if (!favoritesResult) return init;

    return favoritesResult.leagueIds;
  } catch (error) {
    console.error("Error get user favorites:", error);
    return init;
  }
}

export async function addUserFavorite(userId: string, leagueId: string) {
  try {
    const existingFavorites = await prisma.userFavorites.findFirst({
      where: { userId: userId }
    });

    if (existingFavorites) {
      if (!existingFavorites.leagueIds.includes(leagueId)) {
        return await prisma.userFavorites.update({
          where: { userId: userId },
          data: { leagueIds: { push: leagueId } }
        });
      }
    } else {
      return await prisma.userFavorites.create({
        data: {
          userId: userId,
          leagueIds: [leagueId]
        }
      });
    }
  } catch (error) {
    console.error("Error adding user favorite:", error);
  }
}

export async function removeUserFavorite(userId: string, leagueId: string) {
  try {
    const existingFavorites = await prisma.userFavorites.findFirst({
      where: { userId: userId }
    });

    // console.log({ existingFavorites });

    if (existingFavorites) {
      if (existingFavorites.leagueIds.includes(leagueId)) {
        const updatedLeagueIds = existingFavorites.leagueIds.filter((id) => id !== leagueId);

        return await prisma.userFavorites.update({
          where: { userId: userId },
          data: { leagueIds: updatedLeagueIds }
        });
      }
    }
  } catch (error) {
    console.error("Error removing user favorite:", error);
  }
}
