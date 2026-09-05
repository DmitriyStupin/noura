import type {RecordCategories, RecordType} from "@/types/record.ts";
import RecordForm from "@/components/RecordForm/RecordForm.tsx";
import RecordsTable from "@/components/RecordsTable/RecordsTable.tsx";
import {type Dispatch, type SetStateAction, useState} from "react";

type EntryPageProps = {
  category: RecordCategories
  records: RecordType[]
  setRecords: Dispatch<SetStateAction<RecordType[]>>
}

const EntryPage = (props: EntryPageProps) => {
  const {category, records, setRecords} = props

  const [inputText, setInputText] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const filteredRecords = records.filter((record) => record.category === category)

  const addNewRecord = () => {
    if (inputText.trim().length === 0 || selectedDate === undefined) {
      return
    }

    const newRecord = {
      date: selectedDate,
      text: inputText.trim(),
      category: category
    }

    setRecords(prev => [...prev, {id: Date.now(), ...newRecord}])
    setInputText('')
    setSelectedDate(undefined)
  }

  const categoryWords = {
    'weight': 'Вес',
    'protein': 'Белки',
    'carbs': 'Углеводы',
    'trainer': 'Тренажеры',
  }

  return (
    <div className={'flex flex-col gap-5 max-w-7xl mx-auto px-3'}>
      <h1 className={"text-3xl md:text-4xl font-medium"}>{categoryWords[category]}</h1>
      <RecordForm
        addNewRecord={addNewRecord}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        inputText={inputText}
        setInputText={setInputText}
      />
      <h2 className={"text-xl font-medium"}>Записи</h2>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <RecordsTable records={filteredRecords} />
      </div>
    </div>
  );
};

export default EntryPage;