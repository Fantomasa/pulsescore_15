"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TableRow as IncomingTableRow } from "@/services/pre-match/schemas";

export default function TableComponent({ tableRows }: { tableRows: Array<IncomingTableRow> }) {
  return (
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
          <TableRow key={row._id}>
            <TableCell>{row.pos}</TableCell>
            <TableCell>{row.changeTotal}</TableCell>
            <TableCell>{row.team.name}</TableCell>
            <TableCell>{row.total}</TableCell>
            <TableCell>{row.winTotal}</TableCell>
            <TableCell>{row.drawTotal}</TableCell>
            <TableCell>{row.lossTotal}</TableCell>
            <TableCell>{row.goalDiffTotal}</TableCell>
            <TableCell>{row.pointsTotal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
