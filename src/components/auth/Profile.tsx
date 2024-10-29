"use client";

import { Session } from "next-auth";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { signOutAction } from "@/actions/auth";

export default function Profile({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer size-8 md:size-10">
          <AvatarImage src={session.user?.image ? session.user?.image : ""} />
          <AvatarFallback>{session?.user?.name ? session?.user?.name.substring(0, 2).toUpperCase() : ""}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="profile-dropdown">
        <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={signOutAction}>
          <Button type="submit" variant="ghost">
            Logout
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
