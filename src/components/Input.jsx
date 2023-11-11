/* eslint-disable react/prop-types */
const Input = ({ title, id, type }) => {
  return (
    <div className=' flex flex-col gap-1.5'>
      <label className=' text-xs text-MediumGrey font-normal' htmlFor={id}>
        {title}
      </label>
      <input
        className=' bg-LightGrey rounded-md px-2 py-1 font-Poppins text-sm text-DarkGrey focus:outline-Purple resize-none'
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;