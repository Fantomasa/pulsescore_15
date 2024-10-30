import TableComponent from "@/components/PreMatch/Table/Table";
import Transition from "@/components/Transition";
import { getTable } from "@/services/pre-match/pre-match";

export default async function TablePage({ params }: { params: Promise<{ seasonId: string }> }) {
  const seasonId = (await params).seasonId;
  const tableResult = await getTable(seasonId);

  if (tableResult.data.length <= 0) return <div className="flex text-2xl mx-auto justify-center">Sorry no information found</div>;

  return (
    <Transition>
      <TableComponent tableRows={tableResult.data[0].tablerows} />
    </Transition>
  );
}
