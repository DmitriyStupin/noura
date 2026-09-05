import {Button} from "@/components/ui/button";
import {Menu, Moon, Sun} from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet.tsx";
import {Link} from "react-router-dom";
import {useTheme} from "@/components/theme-provider.tsx";

const Header = () => {
  const {theme, setTheme} = useTheme()

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
          onClick={() => {
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }}
        >
          {theme === 'light' ? (
            <Moon className='size-8' />
          ) :
            <Sun className='size-8' />
          }
        </Button>
      </div>
      <SheetContent
        side={"left"}
        showCloseButton={false}
      >
        <SheetHeader>
          <h2 className='text-2xl font-medium'>NOURA</h2>
        </SheetHeader>
        <ul className="flex flex-col gap-1">
          <li>
            <SheetClose
              render={<Link
                to={'/'}
                className="block w-full rounded-md p-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >Главная</Link>}
            />
          </li>
          <li>
            <SheetClose
              render={<Link
                to={'/weight'}
                className="block w-full rounded-md p-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >Вес</Link>}
            />
          </li>
          <li>
            <SheetClose
              render={<Link
                to={'/protein'}
                className="block w-full rounded-md p-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >Белки</Link>}
            />
          </li>
          <li>
            <SheetClose
              render={<Link
                to={'/carbs'}
                className="block w-full rounded-md p-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
              >Углеводы</Link>}
            />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Header;