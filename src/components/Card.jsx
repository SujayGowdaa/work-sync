const employees = [
  {
    name: 'John Doe',
    joiningDate: '2023-01-01',
    employeeCode: 'EMP001',
    phoneNumber: '123-456-7890',
    designation: 'Software Engineer',
    department: 'Engineering',
    emailAddress: 'john.doe@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Jane Smith',
    joiningDate: '2023-02-15',
    employeeCode: 'EMP002',
    phoneNumber: '234-567-8901',
    designation: 'Product Manager',
    department: 'Management',
    emailAddress: 'jane.smith@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Bob Johnson',
    joiningDate: '2023-03-10',
    employeeCode: 'EMP003',
    phoneNumber: '345-678-9012',
    designation: 'Graphic Designer',
    department: 'Design',
    emailAddress: 'bob.johnson@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Emily Davis',
    joiningDate: '2023-04-20',
    employeeCode: 'EMP004',
    phoneNumber: '456-789-0123',
    designation: 'HR Manager',
    department: 'HR Department',
    emailAddress: 'emily.davis@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Alex Turner',
    joiningDate: '2023-05-05',
    employeeCode: 'EMP005',
    phoneNumber: '567-890-1234',
    designation: 'Marketing Specialist',
    department: 'Marketing',
    emailAddress: 'alex.turner@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Sara Miller',
    joiningDate: '2023-06-15',
    employeeCode: 'EMP006',
    phoneNumber: '678-901-2345',
    designation: 'Financial Analyst',
    department: 'Finance',
    emailAddress: 'sara.miller@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
  {
    name: 'Chris White',
    joiningDate: '2023-07-25',
    employeeCode: 'EMP007',
    phoneNumber: '789-012-3456',
    designation: 'Operations Manager',
    department: 'Operations',
    emailAddress: 'chris.white@example.com',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
];

const Card = () => {
  console.log(employees.length);

  return (
    <>
      {employees.map((e, i) => {
        return (
          <div
            key={e.employeeCode}
            className=' flex items-center p-6 drop-shadow-lg outline outline-1 outline-LightGrey gap-6 bg-White rounded-lg'
          >
            <span className=' h-6 w-6 bg-LightGrey flex items-center justify-center rounded-full p-4 text-MediumGrey'>
              {i + 1}
            </span>
            <div className=' w-[50px] rounded-full overflow-hidden'>
              <img
                className='w-full h-auto object-cover'
                src={`https://i.pravatar.cc/48?${e.employeeCode}`}
                alt='cus'
              />
            </div>
            <div className=' flex w-full justify-between font-Poppins font-normal text-MediumGrey '>
              <span className=' basis-[120px] text-[16px] text-Purple font-bold uppercase'>
                {e.name}
              </span>
              <span className=' basis-[130px]'>{e.department}</span>
              <span className=' basis-2'>{e.employeeCode}</span>
              <span className='  basis-[230px]'>{e.emailAddress}</span>
              <span className=' basis-[100px]'>{e.joiningDate}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
