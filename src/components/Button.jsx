/* eslint-disable react/prop-types */
const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      className={` w-[100px] flex items-center justify-center gap-1 font-medium px-3 py-2 rounded-md text-sm font-Poppins shadow-md ${className}`}
      type={type}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export default Button;
