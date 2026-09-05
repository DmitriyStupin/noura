import Header from "@/components/Header/Header";
import HomePage from "@/pages/HomePage/HomePage";
import EntryPage from "@/pages/EntryPage/EntryPage.tsx";
import {useEffect, useState} from "react";
import type {RecordType} from "@/types/record.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NameDialog from "@/components/NameDialog/NameDialog.tsx";

export function App() {
  const [records, setRecords] = useState<RecordType[]>(() => {
    try {
      const savedRecords = localStorage.getItem('records')
      const parsedRecords = savedRecords ? JSON.parse(savedRecords) : []

      return parsedRecords.map((parsedRecord: RecordType) => ({
        ...parsedRecord,
        date: new Date(parsedRecord.date)
      }))
    } catch (error) {
      console.error('Ошибка при чтении из localStorage', error)
      return []
    }
  })

  const [name, setName] = useState(() => {
    return localStorage.getItem('name') ?? ''
  })

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records]);

  return (
    <BrowserRouter>
      <Header />
      <NameDialog name={name} setName={setName} />
      <Routes>
        <Route
          path={'/'}
          element={<HomePage records={records} name={name} />}
        />
        <Route
          path={'/weight'}
          element={<EntryPage
            category={'weight'}
            records={records}
            setRecords={setRecords}
          />}
        />
        <Route
          path={'/protein'}
          element={<EntryPage
            category={'protein'}
            records={records}
            setRecords={setRecords}
          />}
        />
        <Route
          path={'/carbs'}
          element={<EntryPage
            category={'carbs'}
            records={records}
            setRecords={setRecords}
          />}
        />
        <Route
          path={'/trainer'}
          element={<EntryPage
            category={'trainer'}
            records={records}
            setRecords={setRecords}
          />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
