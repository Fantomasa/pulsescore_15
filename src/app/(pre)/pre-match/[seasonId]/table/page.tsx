import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TablePage() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Pos</TableHead>
          <TableHead></TableHead>
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
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell></TableCell>
          <TableCell>Ludogorec Razgrad</TableCell>
          <TableCell>12</TableCell>
          <TableCell>11</TableCell>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
          <TableCell>21</TableCell>
          <TableCell>34</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
