"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CategorySchema, TableRow as IncomingTableRow, TournamentSchema } from "@/services/pre-match/schemas";
import { ArrowRight } from "lucide-react";

const PROMOTIONS = {
  CH: "Champions League",
  EL: "UEFA Europa League",
  CLQ: "Conference League Qualification",
  R: "Relegation",
  P: "Promotion"
};

function getPromotionClass(promotionName: string) {
  let className = "";
  if (promotionName === PROMOTIONS.CH || promotionName === PROMOTIONS.P) {
    className = "text-blue-300";
    return className;
  }

  if (promotionName === PROMOTIONS.R) {
    className = "text-red-400";
    return className;
  }

  if (promotionName === PROMOTIONS.CLQ) {
    className = "text-orange-400";
    return className;
  }

  if (promotionName === PROMOTIONS.EL) {
    className = "text-green-400";
    return className;
  }

  return className;
}

export default function TableComponent({
  categoryData,
  tournamentData,
  tableRows
}: {
  categoryData: CategorySchema;
  tournamentData: TournamentSchema;
  tableRows: Array<IncomingTableRow>;
}) {
  return (
    <div>
      <div className="flex gap-2 items-center text-lg w-full justify-center">
        <span>{categoryData.name}</span>
        <ArrowRight size={15} />
        <span>
          {tournamentData.name} {tournamentData.year}
        </span>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Pos</TableHead>
            <TableHead>Ch</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>P</TableHead>
            <TableHead>W</TableHead>
            <TableHead>D</TableHead>
            <TableHead>L</TableHead>
            <TableHead>DIFF</TableHead>
            <TableHead>PTS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row._id} className={`${getPromotionClass(row.promotion?.name)}`}>
              <TableCell>{row.pos}</TableCell>
              <TableCell>{row.changeTotal}</TableCell>
              <TableCell>{row.team.name}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.winTotal}</TableCell>
              <TableCell>{row.drawTotal}</TableCell>
              <TableCell>{row.lossTotal}</TableCell>
              <TableCell>{row.goalDiffTotal}</TableCell>
              <TableCell className="font-extrabold">{row.pointsTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
