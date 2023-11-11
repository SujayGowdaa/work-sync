/* eslint-disable react/prop-types */
const Card = ({
  onClick,
  name,
  employeeCode,
  index,
  department,
  emailAddress,
  joiningDate,
  selectedEmployee,
}) => {
  let selected;
  selectedEmployee !== null
    ? (selected = selectedEmployee.employeeCode === employeeCode)
    : null;

  return (
    <div
      onClick={() =>
        onClick({
          name,
          employeeCode,
          index,
          department,
          emailAddress,
          joiningDate,
        })
      }
      key={employeeCode}
      className={` ${
        selected
          ? ' bg-Purple transition-colors duration-200 ease-out'
          : ' bg-White outline outline-1 outline-LightGrey transition-colors duration-200 ease-in'
      } flex items-center p-6 drop-shadow-lg  gap-6  rounded-lg select-none  `}
    >
      <span
        className={`${
          selected ? ' bg-White text-Purple' : ' text-MediumGrey bg-LightGrey'
        } h-6 w-6 text-sm font-Poppins font-medium flex items-center justify-center rounded-full p-4`}
      >
        {index}
      </span>
      <div className=' w-[50px] rounded-full overflow-hidden'>
        <img
          className='w-full h-auto object-cover'
          src={`https://i.pravatar.cc/48?${employeeCode}`}
          alt='cus'
        />
      </div>
      <div
        className={`${
          selected ? ' text-LightGrey' : ' text-MediumGrey'
        } flex w-full justify-between font-Poppins font-normal `}
      >
        <span
          className={` ${
            selected ? ' text-White' : ' text-Purple'
          } basis-[120px] text-[16px]  font-bold uppercase`}
        >
          {name}
        </span>
        <span className=' basis-[130px]'>{department}</span>
        <span className=' basis-2'>{employeeCode}</span>
        <span className='  basis-[230px]'>{emailAddress}</span>
        <span className=' basis-[100px]'>{joiningDate}</span>
      </div>
    </div>
  );
};

export default Card;
