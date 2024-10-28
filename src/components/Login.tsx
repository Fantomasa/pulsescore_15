"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BsGoogle } from "react-icons/bs";

export default function Login() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-min">
        <DropdownMenuCheckboxItem className="gap-2">
          <p>Google</p>
          <BsGoogle />
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="gap-2">
          {/* <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Login</button>
          </form> */}
          <p>Github</p>
          <GitHubLogoIcon />{" "}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
