"use server";

import { auth } from "@/auth";
import { addUserFavorite, removeUserFavorite } from "@/services/live-score/favorites";

type ActionResult = {
  message: string;
  success: boolean;
};

const loginMessage = "Please login";

export async function addUserFavoriteAction(tlName: string): Promise<ActionResult> {
  const data = await auth();

  if (!data) {
    return {
      message: loginMessage,
      success: false
    };
  }
  if (!data.user?.id) {
    return {
      message: loginMessage,
      success: false
    };
  }

  await addUserFavorite(data.user?.id, tlName);

  return {
    message: `${tlName} added to favorites`,
    success: true
  };
}

export async function removeUserFavoriteAction(tlName: string): Promise<ActionResult> {
  const data = await auth();

  if (!data) {
    return {
      message: loginMessage,
      success: false
    };
  }
  if (!data.user?.id) {
    return {
      message: loginMessage,
      success: false
    };
  }

  await removeUserFavorite(data.user?.id, tlName);

  return {
    message: `${tlName} removed from favorites`,
    success: true
  };
}
