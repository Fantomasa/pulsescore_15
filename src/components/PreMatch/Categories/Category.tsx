"use client";

import { CategoryType } from "@/services/pre-match/pre-match";
import React, { useState } from "react";
import League from "./League";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Category({ category }: { category: CategoryType }) {
  const [isOpen, setIsOpen] = useState(category.category === "England" ? true : false);

  return (
    <li key={category.category} className="my-1.5 bg-foreground p-1 rounded-md hover:bg-foreground/50">
      <button className="flex font-bold items-center gap-2 w-full hover:text-primary hover:underline" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-1.5 text-start">
          {isOpen ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
          <span>{category.category}</span>
        </div>
      </button>

      {isOpen && (
        <ul className="pl-5 ml-[4px] border-l p-2">
          {category.leagues.map((league) => (
            <League key={league.seasonId} league={league} />
          ))}
        </ul>
      )}
    </li>
  );
}
