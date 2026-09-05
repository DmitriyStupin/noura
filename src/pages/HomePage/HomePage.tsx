import type {RecordType} from "@/types/record.ts";
import RecordsTable from "@/components/RecordsTable/RecordsTable.tsx";

type HomePageProps = {
  records: RecordType[]
}

const HomePage = (props: HomePageProps) => {
  const {records} = props

  const latestRecords = [...records].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)

  return (
    <div className='flex flex-col gap-5 max-w-7xl mx-auto px-3'>
      <h1 className="text-3xl md:text-4xl font-medium">
        Доброе утро, Имя!
      </h1>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>
          Последние записи
        </h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <RecordsTable records={latestRecords} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;