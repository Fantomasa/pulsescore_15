import { getTournaments } from "@/services/pre-match/pre-match";
import Category from "@/components/Categories/Category";

export default async function PreMatch() {
  const categories = await getTournaments();

  return (
    <ul>
      {categories.map((category) => (
        <Category key={category.category} category={category} />
      ))}
    </ul>
  );
}
