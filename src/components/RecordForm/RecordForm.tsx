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
    <div className={'flex flex-col gap-3 md:flex-row'}>
      <Input className={'h-12 text-base '} placeholder={'Введите текст'} value={inputText} onChange={(event) => setInputText(event.target.value)} />
      <Popover>
        <PopoverTrigger render={<Button className={'h-12 text-base'} variant={'outline'}>{selectedDate ? format(selectedDate, 'dd.MM.yyyy') : <span>Выберите дату</span>}</Button>} />
        <PopoverContent>
          <Calendar mode={"single"} selected={selectedDate} onSelect={setSelectedDate} />
        </PopoverContent>
      </Popover>
      <Button className={'h-12 text-base'} onClick={addNewRecord}>Добавить новую запись</Button>
    </div>
  );
};

export default RecordForm;