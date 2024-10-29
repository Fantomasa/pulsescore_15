import { getTournaments } from "@/services/pre-match/pre-match";

export default async function PreMatch() {
  const categories = await getTournaments();

  return <div>{JSON.stringify(categories)}</div>;
}
