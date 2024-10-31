"use client";

import { CategoryType } from "@/services/pre-match/schemas";
import Category from "./Categories/Category";
import { ArrowLeft } from "lucide-react";
import { useSideNav } from "./context";

export default function SideNav({ categories }: { categories: CategoryType[] }) {
  const { isSideNavOpen, toggleSideNav } = useSideNav();

  return (
    <div className="flex gap-2">
      <ul
        className={`text-left justify-start fixed md:relative ${
          isSideNavOpen ? "left-0" : "-left-full"
        } bg-secondary md:left-0 transition-all duration-300 w-1/3 md:w-auto shadow-lg md:shadow-none mt-12 z-10 rounded-md overflow-y-auto max-h-[80vh] md:max-h-fit md:mr-2 border`}
      >
        {categories.map((category) => (
          <Category key={category.category} category={category} />
        ))}
      </ul>
      <button
        className={`flex items-center gap-1 fixed z-10 mt-2 text-xs md:hidden bg-secondary/80 rounded-md p-2 border`}
        onClick={() => toggleSideNav()}
      >
        <ArrowLeft size={15} /> <p>Leagues</p>
      </button>
    </div>
  );
}
