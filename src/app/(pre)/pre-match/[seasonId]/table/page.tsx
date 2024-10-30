import TableComponent from "@/components/PreMatch/Table/Table";
import Transition from "@/components/Transition";
import { getTable } from "@/services/pre-match/pre-match";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function TablePage({ params }: { params: Promise<{ seasonId: string }> }) {
  const seasonId = (await params).seasonId;
  const tableResult = await getTable(seasonId);

  if (tableResult.data.length <= 0) {
    return (
      <div className="flex flex-col text-lg mx-auto justify-center text-center">
        <span>The Current League don&apos;t have Table.</span>
        <span className="flex gap-2 text-center mx-auto">
          You can see the
          <Link className="flex items-center gap-1 underline underline-offset-2 text-primary" href={`/pre-match/${seasonId}/fixtures`}>
            fixtures
            <ArrowRight />
          </Link>
        </span>
      </div>
    );
  }

  const categoryData = tableResult.data[0].realcategory;
  const tournametData = tableResult.data[0].tournament;

  return (
    <Transition>
      <TableComponent categoryData={categoryData} tournamentData={tournametData} tableRows={tableResult.data[0].tablerows} />
    </Transition>
  );
}
