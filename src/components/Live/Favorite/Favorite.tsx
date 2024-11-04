"use client";

import { Star } from "lucide-react";
import { addUserFavoriteAction, removeUserFavoriteAction } from "@/actions/favorites";
import { useUserFavorites } from "../context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Favorite({ isFavorite, tlName }: { isFavorite: boolean; tlName: string }) {
  const { pushToUserFavorites, removeFromUserFavorites } = useUserFavorites();
  const { toast } = useToast();
  const router = useRouter();

  return (
    <>
      {isFavorite ? (
        <button
          onClick={async () => {
            const result = await removeUserFavoriteAction(tlName);
            if (result.success) {
              removeFromUserFavorites(tlName);
              toast({
                title: "Removed from favorites",
                description: result.message
              });
            } else {
              router.push("/login");
              toast({
                description: result.message
              });
            }
          }}
        >
          <Star fill="white" />
        </button>
      ) : (
        <button
          onClick={async () => {
            const result = await addUserFavoriteAction(tlName);
            if (result.success) {
              pushToUserFavorites(tlName);
              toast({
                title: "Added to favorites",
                description: result.message
              });
            } else {
              router.push("/login");
              toast({
                description: result.message
              });
            }
          }}
        >
          <Star />
        </button>
      )}
    </>
  );
}
