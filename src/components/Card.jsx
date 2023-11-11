const Card = () => {
  return (
    <div className=' flex items-center p-6 drop-shadow-lg outline outline-1 outline-LightGrey gap-4 bg-White rounded-lg'>
      <span className=' h-6 w-6 bg-LightGrey flex items-center justify-center rounded-full p-4 text-MediumGrey'>
        1
      </span>
      <div className=' rounded-full overflow-hidden'>
        <img
          className=' w-full h-auto'
          src='https://i.pravatar.cc/48?u=499476'
          alt='cus'
        />
      </div>
      <div className=' flex w-full justify-between gap-6 font-Poppins font-medium text-MediumGrey '>
        <span className=' text-[16px] text-Purple font-bold uppercase'>
          Kevin miller
        </span>
        <span>IT Department</span>
        <span>E12345</span>
        <span className='  col-span-2'>kevin.miller@example.com</span>
        <span className=' '>2021-09-28</span>
      </div>
    </div>
  );
};

export default Card;
