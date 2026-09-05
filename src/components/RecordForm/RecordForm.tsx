import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {format} from "date-fns";

type RecordFormProps = {
  inputText: string
  selectedDate: Date | undefined
  setInputText: (inputText: string) => void
  setSelectedDate: (selectedDate: Date | undefined) => void
  addNewRecord: () => void
}

const RecordForm = (props: RecordFormProps) => {
  const {inputText, selectedDate, setInputText, setSelectedDate, addNewRecord} = props

  return (
    <>
      <Input placeholder={'Введите текст'} value={inputText} onChange={(event) => setInputText(event.target.value)} />
      <Popover>
        <PopoverTrigger render={<Button variant={'outline'}>{selectedDate ? format(selectedDate, 'PPP') : <span>Выберите дату</span>}</Button>} />
        <PopoverContent>
          <Calendar mode={"single"} selected={selectedDate} onSelect={setSelectedDate} />
        </PopoverContent>
      </Popover>
      <Button onClick={addNewRecord}>Добавить новую запись</Button>
    </>
  );
};

export default RecordForm;