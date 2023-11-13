/* eslint-disable react/prop-types */
import Button from './Button';
import { AiFillSave, AiFillCloseSquare } from 'react-icons/ai';
import Input from './Input';
import { useState } from 'react';

const NewCandidate = ({ setAddEmployee, setEmployeeList }) => {
  const [newInput, setNewInput] = useState({
    name: '',
    joiningDate: '',
    employeeCode: '',
    phoneNumber: '',
    designation: '',
    department: '',
    emailAddress: '',
    image: 'https://i.pravatar.cc/48?u=',
  });

  function handleSubmit(e) {
    e.preventDefault();
    setEmployeeList((ps) => [...ps, newInput]);
  }

  function handleInputChange(identifier, value) {
    setNewInput((ps) => ({
      ...ps,
      [identifier]: value,
      image: 'https://i.pravatar.cc/48?u=' + ps.employeeCode,
    }));
  }

  return (
    <aside className=' bg-White drop-shadow-xl rounded-xl h-[100%]'>
      <form className=' p-6 py-8 flex flex-col gap-6 '>
        <div className=' w-[146px] h-[146px] mx-auto rounded-full overflow-hidden'>
          <img
            className=' w-full h-auto'
            src='https://i.pravatar.cc/48?u=499476'
            alt='man'
          />
        </div>
        <div className=' flex flex-col gap-6 p-3'>
          <Input
            onChange={handleInputChange}
            type='text'
            title='Name'
            id='name'
          />
          <Input
            onChange={handleInputChange}
            type='text'
            title='Department'
            id='department'
          />
          <Input
            onChange={handleInputChange}
            type='text'
            title='Designation'
            id='designation'
          />
          <Input
            onChange={handleInputChange}
            type='Number'
            title='Number'
            id='phoneNumber'
          />
          <Input
            onChange={handleInputChange}
            type='text'
            title='Employee Code'
            id='employeeCode'
          />
          <Input
            onChange={handleInputChange}
            type='email'
            title='Email Address'
            id='emailAddress'
          />
          <Input
            onChange={handleInputChange}
            type='date'
            title='Date'
            id='joiningDate'
          />
        </div>
        <div className=' flex justify-between p-3 gap-4'>
          <Button
            onClick={handleSubmit}
            type='submit'
            className=' text-White bg-green-500 '
          >
            <AiFillSave className=' text-lg' />
            Save
          </Button>
          <Button
            onClick={() => setAddEmployee(false)}
            type='button'
            className=' bg-transparent outline outline-1 outline-MediumGrey text-MediumGrey'
          >
            <AiFillCloseSquare className=' text-lg' />
            Cancle
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default NewCandidate;
