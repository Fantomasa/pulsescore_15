"use client";

import { CategoryType } from "@/services/pre-match/pre-match";
import Category from "./Categories/Category";
import { useState } from "react";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { SideNavProvider } from "./context";

export default function SideNav({ categories }: { categories: CategoryType[] }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideNavProvider>
      <div className="flex gap-2">
        <ul
          className={`text-left justify-start fixed md:relative ${
            isOpen ? "left-0" : "-left-full"
          } transition-all duration-300 w-1/3 md:w-auto shadow-lg md:shadow-none`}
        >
          {categories.map((category) => (
            <Category key={category.category} category={category} />
          ))}
        </ul>
        <Button size="sm" onClick={() => setIsOpen(!isOpen)}>
          <ArrowLeft /> <p>Leagues</p>
        </Button>
      </div>
    </SideNavProvider>
  );
}
