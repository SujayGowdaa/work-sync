import Button from './Button';
import { AiFillSave, AiFillCloseSquare } from 'react-icons/ai';
import Input from './Input';

const NewCandidate = () => {
  return (
    <aside className=' bg-White drop-shadow-xl rounded-xl'>
      <form className=' p-6 flex flex-col gap-6 max-w-[330px]'>
        <div className=' w-[146px] h-[146px] mx-auto rounded-full overflow-hidden'>
          <img
            className=' w-full h-auto'
            src='https://i.pravatar.cc/48?u=499476'
            alt='man'
          />
        </div>
        <div className=' flex flex-col gap-6 p-3'>
          <Input type='text' title='Name' id='name' />
          <Input type='text' title='Designation' id='designation' />
          <Input type='Number' title='Number' id='number' />
          <Input type='email' title='Email Address' id='email' />
          <div className=' flex flex-col gap-1.5'>
            <label
              htmlFor='address'
              className=' text-xs text-MediumGrey font-normal'
            >
              Address
            </label>
            <textarea
              className='bg-LightGrey rounded-md p-1 h-[98px]  focus:outline-Purple p-2 resize-none font-Poppins text-sm text-DarkGrey'
              id='address'
              type='text'
            />
          </div>
        </div>
        <div className=' flex justify-between p-3 gap-4'>
          <Button className=' text-White bg-green-500 '>
            <AiFillSave className=' text-lg' />
            Save
          </Button>
          <Button className=' bg-transparent outline outline-1 outline-MediumGrey text-MediumGrey'>
            <AiFillCloseSquare className=' text-lg' />
            Cancle
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default NewCandidate;
