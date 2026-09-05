import Header from "@/components/Header/Header";
import HomePage from "@/pages/HomePage/HomePage";
import EntryPage from "@/pages/EntryPage/EntryPage.tsx";
import {useState} from "react";
import type {RecordType} from "@/types/record.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  const [records, setRecords] = useState<RecordType[]>([
    {
      id: 1,
      date: new Date(),
      text: 'Тут просто выводится текст',
      category: 'weight'
    },
    {
      id: 2,
      date: new Date(),
      text: 'Тут просто выводится текст 2',
      category: 'protein'
    },
  ])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/weight'} element={<EntryPage category={'weight'} records={records} setRecords={setRecords} />} />
        <Route path={'/protein'} element={<EntryPage category={'protein'} records={records} setRecords={setRecords} />} />
        <Route path={'/carbs'} element={<EntryPage category={'carbs'} records={records} setRecords={setRecords} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
