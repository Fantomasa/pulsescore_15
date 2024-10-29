import { CategoryType } from "@/services/pre-match/pre-match";
import React from "react";
import League from "./League";

export default function Category({ category }: { category: CategoryType }) {
  return (
    <li key={category.category} className="my-1.5">
      <span className="flex items-center gap-1.5">
        {/* <Image src={`/tournament/default.png`} alt={category.category} width={12} height={12} /> */}
        {category.category}
      </span>

      <ul className="pl-6">
        {category.leagues.map((league) => (
          <League key={league.seasonId} league={league} />
        ))}
      </ul>
    </li>
  );
}
