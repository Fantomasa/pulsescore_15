import TableComponent from "@/components/PreMatch/Table/Table";
import { getTable } from "@/services/pre-match/pre-match";

export default async function TablePage({ params }: { params: Promise<{ seasonId: string }> }) {
  const seasonId = (await params).seasonId;
  const table = await getTable(seasonId);

  return <div>{JSON.stringify(table.data)}</div>;
}
