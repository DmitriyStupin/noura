import RecordsTable from "@/components/RecordsTable/RecordsTable";
import {useState} from "react";
import RecordForm from "@/components/RecordForm/RecordForm.tsx";

const HomePage = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      date: new Date(),
      text: 'Тут просто выводится текст'
    },
    {
      id: 2,
      date: new Date(),
      text: 'Тут просто выводится текст 2'
    },
  ])

  const [inputText, setInputText] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const addNewRecord = () => {
    if (inputText.length === 0 || selectedDate === undefined) {
      return
    }

    const newRecord = {
      date: selectedDate,
      text: inputText
    }

    setRecords(prev => [...prev, {id: prev.length + 1, ...newRecord}])
    setInputText('')
    setSelectedDate(undefined)
  }

  return (
    <div className='flex flex-col gap-10 max-w-7xl mx-auto px-3'>
      <h1 className='text-6xl font-medium'>
        Доброе утро, Имя!
      </h1>
      <RecordForm
        addNewRecord={addNewRecord}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        inputText={inputText}
        setInputText={setInputText}
      />
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>
          Последние записи
        </h2>
        <RecordsTable records={records} />
      </section>
    </div>
  );
};

export default HomePage;