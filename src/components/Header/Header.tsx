import {Button} from "@/components/ui/button";
import { Menu, Sun } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-3'>
      <Button variant={'ghost'} size={"icon-lg"} className='size-11'>
        <Menu className='size-8' />
      </Button>
      <h2 className='text-2xl font-medium'>NOURA</h2>
      <Button variant={'ghost'} size={"icon-lg"} className='size-11'>
        <Sun className='size-8'  />
      </Button>
    </div>
  );
};

export default Header;