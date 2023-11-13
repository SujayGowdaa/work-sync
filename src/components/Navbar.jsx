/* eslint-disable react/prop-types */ import logo from '../assets/sync.png';
import { AiFillPlusCircle } from 'react-icons/ai';

const Navbar = ({ setAddEmployee, onSelectEmployee, setSearchTerm }) => {
  function handleSearch(e) {
    setSearchTerm(e.target.value);
    onSelectEmployee(null);
  }

  return (
    <header className=' flex items-center justify-between px-6 py-3 bg-White rounded-xl drop-shadow-xl'>
      <div className=' flex items-center gap-2 '>
        <h1 className=' text-3xl text-DarkGrey font-Poppins font-bold'>
          WorkSync
        </h1>
        <img className=' w-auto h-[50px] ' src={logo} alt='Sync Logo' />
      </div>
      <input
        onChange={handleSearch}
        className=' text-[16px] font-Poppins bg-LightGrey rounded-lg px-4 py-2 text-DarkGrey font-medium focus:outline-MediumGrey w-[400px] placeholder:text-sm'
        type='text'
        placeholder='Search Employee'
      />

      <button
        onClick={() => {
          onSelectEmployee(null);
          setAddEmployee(true);
        }}
        className=' flex text-[14px] items-center gap-2 px-6 py-4 bg-Purple text-White rounded-lg font-Poppins drop-shadow-md'
      >
        <AiFillPlusCircle className=' text-[16px]' />
        Add Employee
      </button>
    </header>
  );
};

export default Navbar;
