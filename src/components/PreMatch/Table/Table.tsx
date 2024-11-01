"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CategorySchema, TableRow as IncomingTableRow, TournamentSchema } from "@/services/pre-match/schemas";
import { getUniquePromotions } from "@/services/utils";
import { ArrowRight } from "lucide-react";
import { BsCircleFill } from "react-icons/bs";

const PROMOTIONS = {
  CH: "Champions League",
  EL: "UEFA Europa League",
  CLQ: "Conference League Qualification",
  R: "Relegation",
  P: "Promotion",
  PPO: "Promotion Playoff",
  QP: "Qualification Playoff"
};

function getPromotionClass(promotionName: string) {
  if (!promotionName) return "";

  let className = "text-orange-600";

  if (promotionName === PROMOTIONS.CH || promotionName === PROMOTIONS.P) {
    className = "text-blue-400";
    return className;
  }

  if (promotionName === PROMOTIONS.CLQ || promotionName.includes(PROMOTIONS.QP)) {
    className = "text-orange-400";
    return className;
  }

  if (promotionName === PROMOTIONS.EL || promotionName.includes(PROMOTIONS.PPO)) {
    className = "text-green-400";
    return className;
  }

  if (promotionName === PROMOTIONS.R) {
    className = "text-red-600";
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
  const promotions = getUniquePromotions(tableRows);

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
        <TableCaption>
          {promotions.map((promotion) => {
            return (
              <div key={promotion} className="flex items-center gap-2 justify-start">
                <span>
                  <BsCircleFill size={10} className={`${getPromotionClass(promotion)}`} />
                </span>
                <span>{promotion}</span>
              </div>
            );
          })}
        </TableCaption>
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
