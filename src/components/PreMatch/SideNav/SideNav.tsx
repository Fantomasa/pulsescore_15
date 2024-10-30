"use client";

import { CategoryType } from "@/services/pre-match/pre-match";
import Category from "./Categories/Category";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { useSideNav } from "./context";

export default function SideNav({ categories }: { categories: CategoryType[] }) {
  const { isSideNavOpen, toggleSideNav } = useSideNav();

  return (
    <div className="flex gap-2">
      <ul
        className={`text-left justify-start fixed md:relative ${
          isSideNavOpen ? "left-0" : "-left-full"
        } md:left-0 transition-all duration-300 w-1/3 md:w-auto shadow-lg md:shadow-none mt-12 z-10 rounded-md`}
      >
        {categories.map((category) => (
          <Category key={category.category} category={category} />
        ))}
      </ul>
      <Button size="sm" variant={"ghost"} className={`fixed z-1 mt-2 text-xs md:hidden`} onClick={() => toggleSideNav()}>
        <ArrowLeft /> <p>Leagues</p>
      </Button>
    </div>
  );
}
