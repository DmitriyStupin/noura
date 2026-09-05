import {Button} from "@/components/ui/button";
import {Menu, Sun} from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet.tsx";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Sheet>
      <div className='flex items-center justify-between p-3'>
        <SheetTrigger
          render={<Button
            variant={'ghost'}
            size={"icon-lg"}
            className='size-11'
          ><Menu className='size-8' /></Button>}
        />
        <h2 className='text-2xl font-medium'>NOURA</h2>
        <Button
          variant={'ghost'}
          size={"icon-lg"}
          className='size-11'
        >
          <Sun className='size-8' />
        </Button>
      </div>
      <SheetContent side={"left"}>
        <SheetHeader>
          <h2 className='text-2xl font-medium'>NOURA</h2>
        </SheetHeader>
        <ul className="">
          <li>
            <SheetClose render={<Link to={'/'}>Главная</Link>} />
          </li>
          <li>
            <SheetClose render={<Link to={'/weight'}>Вес</Link>} />
          </li>
          <li>
            <SheetClose render={<Link to={'/protein'}>Белки</Link>} />
          </li>
          <li>
            <SheetClose render={<Link to={'/carbs'}>Углеводы</Link>} />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Header;