import Preview from './Preview';
import EmployeeLists from './EmployeeLists';
import { useState } from 'react';

const Main = () => {
  const [employeeList, setEmployeeList] = useState([
    {
      name: 'John Doe',
      joiningDate: '2023-01-01',
      employeeCode: 'EMP001',
      phoneNumber: '123-456-7890',
      designation: 'Software Engineer',
      department: 'Engineering',
      emailAddress: 'john.doe@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP011',
    },
    {
      name: 'Jane Smith',
      joiningDate: '2023-02-15',
      employeeCode: 'EMP002',
      phoneNumber: '234-567-8901',
      designation: 'Product Manager',
      department: 'Management',
      emailAddress: 'jane.smith@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP502',
    },
    {
      name: 'Bob Johnson',
      joiningDate: '2023-03-10',
      employeeCode: 'EMP003',
      phoneNumber: '345-678-9012',
      designation: 'Graphic Designer',
      department: 'Design',
      emailAddress: 'bob.johnson@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP703',
    },
    {
      name: 'Emily Davis',
      joiningDate: '2023-04-20',
      employeeCode: 'EMP004',
      phoneNumber: '456-789-0123',
      designation: 'HR Manager',
      department: 'HR Department',
      emailAddress: 'emily.davis@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP503',
    },
    {
      name: 'Alex Turner',
      joiningDate: '2023-05-05',
      employeeCode: 'EMP005',
      phoneNumber: '567-890-1234',
      designation: 'Marketing Specialist',
      department: 'Marketing',
      emailAddress: 'alex.turner@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP305',
    },
    {
      name: 'Sara Miller',
      joiningDate: '2023-06-15',
      employeeCode: 'EMP006',
      phoneNumber: '678-901-2345',
      designation: 'Financial Analyst',
      department: 'Finance',
      emailAddress: 'sara.miller@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP406',
    },
    {
      name: 'Chris White',
      joiningDate: '2023-07-25',
      employeeCode: 'EMP007',
      phoneNumber: '789-012-3456',
      designation: 'Operations Manager',
      department: 'Operations',
      emailAddress: 'chris.white@example.com',
      image: 'https://i.pravatar.cc/48?u=EM107',
    },
  ]);
  const [selectedEmployee, setselectedEmployee] = useState(null);

  function handleSelectEmployee(employee) {
    selectedEmployee !== null &&
    selectedEmployee.employeeCode === employee.employeeCode
      ? setselectedEmployee(null)
      : setselectedEmployee(employee);
  }

  function handleDeleteEmployee({ employeeCode }) {
    let updatedList = employeeList.filter(
      (employee) => employee.employeeCode !== employeeCode
    );
    setEmployeeList(updatedList);
    setselectedEmployee(null);
  }

  return (
    <main className=' flex gap-6 '>
      <EmployeeLists
        employeeList={employeeList}
        onSelect={handleSelectEmployee}
        selectedEmployee={selectedEmployee}
      />
      {selectedEmployee !== null && (
        <Preview
          selectedEmployee={selectedEmployee}
          onDelete={handleDeleteEmployee}
        />
      )}
    </main>
  );
};

export default Main;
