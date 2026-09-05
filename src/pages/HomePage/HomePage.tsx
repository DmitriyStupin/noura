import type {RecordType} from "@/types/record.ts";
import RecordsTable from "@/components/RecordsTable/RecordsTable.tsx";

type HomePageProps = {
  records: RecordType[]
  name: string
}

const HomePage = (props: HomePageProps) => {
  const {records, name} = props

  const latestRecords = [...records].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)

  const getGreeting = () => {
    const timeNow = new Date().getHours()
    if (timeNow >= 6 && timeNow < 12) {
      return 'Доброе утро'
    }
    if (timeNow >= 12 && timeNow < 17) {
      return 'Добрый день'
    }
    if (timeNow >= 17 && timeNow < 23) {
      return 'Добрый вечер'
    }
    return 'Доброй ночи'
  }

  return (
    <div className='flex flex-col gap-5 max-w-7xl mx-auto px-3'>
      <h1 className="text-3xl md:text-4xl font-medium">
        {getGreeting()}, {name}!
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