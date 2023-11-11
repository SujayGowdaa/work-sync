import Button from './Button';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Preview = ({ selectedEmployee }) => {
  return (
    <aside className=' bg-White drop-shadow-xl rounded-xl'>
      <div className=' p-6 py-8 flex flex-col gap-6 '>
        <div className=' w-[146px] h-[146px] mx-auto rounded-full overflow-hidden'>
          <img
            className=' w-full h-auto'
            src={selectedEmployee.image}
            alt='man'
          />
        </div>
        <div className=' flex flex-col gap-6 p-3'>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs text-MediumGrey font-normal'>
              Name
            </span>
            <span className=' text-sm font-bold uppercase font-Poppins text-Purple'>
              {selectedEmployee.name}
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs text-MediumGrey font-normal'>
              Employee Code
            </span>
            <span className=' font-Poppins text-sm font-semibold text-DarkGrey'>
              {selectedEmployee.employeeCode}
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs text-MediumGrey font-normal'>
              Designation
            </span>
            <span className=' font-Poppins text-sm font-semibold text-DarkGrey'>
              {selectedEmployee.designation}
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs text-MediumGrey font-normal'>
              Department
            </span>
            <span className=' font-Poppins text-sm font-semibold text-DarkGrey'>
              {selectedEmployee.department}
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs text-MediumGrey font-normal'>
              Phone Number
            </span>
            <span className=' font-Poppins text-sm font-semibold text-DarkGrey'>
              {selectedEmployee.phoneNumber}
            </span>
          </div>
          <div className=' flex flex-col gap-1.5'>
            <span className=' font-Poppins text-xs   text-MediumGrey font-normal'>
              Email Address
            </span>
            <span className=' font-semibold'>
              {selectedEmployee.emailAddress}
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
