import { CategoryType } from "@/services/pre-match/pre-match";
import Category from "./Categories/Category";

export default function SideNav({ categories }: { categories: CategoryType[] }) {
  return (
    <ul className="text-left justify-start">
      {categories.map((category) => (
        <Category key={category.category} category={category} />
      ))}
    </ul>
  );
}
