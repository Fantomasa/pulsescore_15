"use client";

import { CategoryType } from "@/services/pre-match/pre-match";
import React, { useState } from "react";
import League from "./League";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Category({ category }: { category: CategoryType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={category.category} className="my-1.5">
      <button className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-1.5">
          {isOpen ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
          <span>{category.category}</span>
        </div>
      </button>

      {isOpen && (
        <ul className="pl-5 ml-[4px] border-l">
          {category.leagues.map((league) => (
            <League key={league.seasonId} league={league} />
          ))}
        </ul>
      )}
    </li>
  );
}
