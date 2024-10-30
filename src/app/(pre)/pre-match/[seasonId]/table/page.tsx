import TableComponent from "@/components/PreMatch/Table/Table";
import { getTable } from "@/services/pre-match/pre-match";

export default async function TablePage({ params }: { params: Promise<{ seasonId: string }> }) {
  const seasonId = (await params).seasonId;
  const tableResult = await getTable(seasonId);

  return <TableComponent tableRows={tableResult.data[0].tablerows} />;
}
