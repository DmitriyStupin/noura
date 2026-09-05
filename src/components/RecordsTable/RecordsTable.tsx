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
          <TableHead className={'text-muted-foreground text-sm font-medium px-4 py-3'}>Дата</TableHead>
          <TableHead className={'text-muted-foreground text-sm font-medium px-4 py-3'}>Текст</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.length === 0 && (
          <TableRow>
            <TableCell colSpan={2} className={'text-center px-4 py-4 text-sm'}>Записей ещё нет</TableCell>
          </TableRow>
        )}
        {records.map((record) => (
          <TableRow key={record.id} className={'hover:bg-accent'}>
            <TableCell className={'px-4 py-4 text-sm text-muted-foreground w-32'}>{format(record.date, 'dd.MM.yyyy')}</TableCell>
            <TableCell className={'px-4 py-4 text-sm'}>{record.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecordsTable;