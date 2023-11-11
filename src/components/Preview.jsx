import Button from './Button';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Preview = () => {
  return (
    <aside className=' bg-White drop-shadow-xl rounded-xl'>
      <div className=' p-6 flex flex-col gap-6 max-w-[330px]'>
        <div className=' w-[146px] h-[146px] mx-auto rounded-full overflow-hidden'>
          <img
            className=' w-full h-auto'
            src='https://i.pravatar.cc/48?u=499476'
            alt='man'
          />
        </div>
        <div className=' flex flex-col gap-6 p-3'>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>Name</span>
            <span className=' text-sm font-bold text-Purple'>Kevin Miller</span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>
              Designation
            </span>
            <span className=' text-sm font-medium text-DarkGrey'>
              Software Developer
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>
              Department
            </span>
            <span className=' text-sm font-medium text-DarkGrey'>
              IT Department
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>
              Phone Number
            </span>
            <span className=' text-sm font-medium text-DarkGrey'>
              +0 123 456 7890
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>
              Email Address
            </span>
            <span>kevin.miller@example.com</span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' text-xs text-MediumGrey font-normal'>
              Address
            </span>
            <span className=' text-sm font-medium text-DarkGrey'>
              123 Main Street,Cityville,Stateland,Zip Code: 12345,Country:
              Fictiona
            </span>
          </div>
        </div>
        <div className=' flex justify-between p-3 gap-4'>
          <Button className=' text-White bg-amber-500 '>
            <AiFillEdit className=' text-lg' />
            Edit
          </Button>
          <Button className=' text-White bg-red-500'>
            <AiFillDelete className=' text-lg' />
            Delete
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Preview;
