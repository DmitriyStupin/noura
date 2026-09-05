import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

type NameDialogProps = {
  name: string
  setName: (name: string) => void
}

const NameDialog = (props: NameDialogProps) => {
  const {name, setName} = props

  const [openDialog, setOpenDialog] = useState(() => {
    const savedName = localStorage.getItem('name')

    return savedName === null
  })

  const saveName = () => {
    if (name.trim().length === 0) {
      return
    }
    localStorage.setItem('name', name.trim())
    setOpenDialog(false)
  }

  return (
    <Dialog open={openDialog} >
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Добро пожаловать в NOURA</DialogTitle>
          <DialogDescription>Расскажи, как тебя зовут</DialogDescription>
        </DialogHeader>
        <Input
          className={'h-12 text-base '}
          placeholder={'Введите ваше имя'}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          className={'h-12 text-base'}
          onClick={saveName}
        >Продолжить</Button>
      </DialogContent>
    </Dialog>
  );
};

export default NameDialog;