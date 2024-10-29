import { CategoryType } from "@/services/pre-match/pre-match";
import Category from "./Categories/Category";

export default function SideNav({ categories }: { categories: CategoryType[] }) {
  return (
    <ul>
      {categories.map((category) => (
        <Category key={category.category} category={category} />
      ))}
    </ul>
  );
}
