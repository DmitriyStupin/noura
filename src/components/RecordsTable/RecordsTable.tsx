import {
  Table,
  TableBody, TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {format} from "date-fns";
import type {RecordType} from "@/types/record.ts";

type RecordsTableType = {
  records: RecordType[]
}

const RecordsTable = (props: RecordsTableType) => {
  const {records} = props

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Дата</TableHead>
          <TableHead >Текст</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record) => (
          <TableRow key={record.id}>
            <TableCell>{format(record.date, 'PPP')}</TableCell>
            <TableCell >{record.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecordsTable;