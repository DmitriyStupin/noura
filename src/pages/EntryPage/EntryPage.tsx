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
    if (inputText.length === 0 || selectedDate === undefined) {
      return
    }

    const newRecord = {
      date: selectedDate,
      text: inputText,
      category: category
    }

    setRecords(prev => [...prev, {id: prev.length + 1, ...newRecord}])
    setInputText('')
    setSelectedDate(undefined)
  }

  return (
    <>
      <RecordForm
        addNewRecord={addNewRecord}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        inputText={inputText}
        setInputText={setInputText}
      />
      <RecordsTable records={filteredRecords} />
    </>
  );
};

export default EntryPage;