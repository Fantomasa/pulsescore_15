"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BsGoogle } from "react-icons/bs";
import { signInAction } from "@/actions/auth";

export default function Login() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 bg-transparent text-white">
        <DropdownMenuCheckboxItem>
          <form className="flex gap-2 items-center" action={() => signInAction("google")}>
            <button type="submit">Google</button>
            <BsGoogle />
          </form>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem>
          <form className="flex gap-2 items-center" action={() => signInAction("github")}>
            <button type="submit">GitHub</button>
            <GitHubLogoIcon />
          </form>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
