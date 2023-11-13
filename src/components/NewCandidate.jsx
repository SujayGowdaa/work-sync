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
  const [blur, setBlur] = useState({
    isNameValid: false,
    isEmployeeCodeValid: false,
  });

  function handleOnBlur() {
    newInput.name.trim().length === 0 &&
    newInput.employeeCode.trim().length === 0
      ? setBlur({
          isNameValid: undefined,
          isEmployeeCodeValid: undefined,
        })
      : newInput.name.trim().length >= 1 &&
        newInput.employeeCode.trim().length === 0
      ? setBlur({
          isNameValid: true,
          isEmployeeCodeValid: undefined,
        })
      : newInput.employeeCode.trim().length >= 1 &&
        newInput.name.trim().length === 0
      ? setBlur({
          isNameValid: undefined,
          isEmployeeCodeValid: true,
        })
      : setBlur({
          isNameValid: true,
          isEmployeeCodeValid: true,
        });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      newInput.name.trim().length === 0 &&
      newInput.employeeCode.trim().length === 0
    ) {
      setBlur({
        isNameValid: undefined,
        isEmployeeCodeValid: undefined,
      });
      alert('Please enter a name and employee code');
      return;
    } else if (newInput.name.trim().length === 0) {
      alert('Please enter a name');
    } else if (newInput.employeeCode.trim().length === 0) {
      alert('Please enter a employee code');
    } else {
      setEmployeeList((ps) => [...ps, newInput]);
      setNewInput({
        name: '',
        joiningDate: '',
        employeeCode: '',
        phoneNumber: '',
        designation: '',
        department: '',
        emailAddress: '',
        image: 'https://i.pravatar.cc/48?u=',
      });
    }
  }

  function handleInputChange(identifier, value) {
    setNewInput((ps) => ({
      ...ps,
      [identifier]: value,
      image: 'https://i.pravatar.cc/48?u=' + ps.employeeCode,
    }));
  }

  return (
    <aside className='card w-[400px] bg-White drop-shadow-xl rounded-xl h-[100%] overflow-y-scroll'>
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
            className={` ${
              blur.isNameValid ?? ' outline outline-1 outline-red-500'
            }`}
            value={newInput.name}
            onChange={handleInputChange}
            type='text'
            title='Name'
            id='name'
            onBlur={handleOnBlur}
          />
          {blur.isNameValid ?? (
            <p className=' text-[12px] font-Poppins text-red-500 mt-[-18px]'>
              Please Enter a name
            </p>
          )}
          <Input
            value={newInput.department}
            onChange={handleInputChange}
            type='text'
            title='Department'
            id='department'
          />
          <Input
            value={newInput.designation}
            onChange={handleInputChange}
            type='text'
            title='Designation'
            id='designation'
          />
          <Input
            value={newInput.phoneNumber}
            onChange={handleInputChange}
            type='Number'
            title='Number'
            id='phoneNumber'
          />
          <Input
            className={` ${
              blur.isEmployeeCodeValid ?? ' outline outline-1 outline-red-500'
            }`}
            value={newInput.employeeCode}
            onChange={handleInputChange}
            type='text'
            title='Employee Code'
            id='employeeCode'
            onBlur={handleOnBlur}
          />
          {blur.isEmployeeCodeValid ?? (
            <p className=' text-[12px] font-Poppins text-red-500 mt-[-18px]'>
              Please Enter a employee code
            </p>
          )}
          <Input
            value={newInput.emailAddress}
            onChange={handleInputChange}
            type='email'
            title='Email Address'
            id='emailAddress'
          />
          <Input
            value={newInput.joiningDate}
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
            className=' bg-transparent outline outline-1 outline-red-400 text-red-400'
          >
            <AiFillCloseSquare className=' text-lg' />
            Close
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default NewCandidate;
