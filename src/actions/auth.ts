"use server";

import { signIn, signOut } from "@/auth";
import { BuiltInProviderType } from "next-auth/providers";

export async function signInAction(provider: BuiltInProviderType) {
  await signIn(provider);
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
