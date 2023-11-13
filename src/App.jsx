import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import user from '../src/assets/user.jpg';

export default function App() {
  const [employeeList, setEmployeeList] = useState([
    {
      name: 'Sujay Gowda',
      joiningDate: '2023-11-13',
      employeeCode: 'EMP100',
      phoneNumber: '123-456-7890',
      designation: 'Web Developer',
      department: 'Software Developement',
      emailAddress: 'sujay.gowda@example.com',
      image: user,
    },
    {
      name: 'Chin Gowda',
      joiningDate: '2023-11-13',
      employeeCode: 'EMP000',
      phoneNumber: '123-456-7890',
      designation: 'Cardiac Surgeon',
      department: 'Cardiology',
      emailAddress: 'chin.gowda@example.com',
      image: 'https://i.pravatar.cc/48?u=EMP190',
    },
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
  const [isAddEmployee, setAddEmployee] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  function handleSelectEmployee(employee) {
    selectedEmployee !== null &&
    selectedEmployee.employeeCode === employee.employeeCode
      ? setselectedEmployee(null)
      : setselectedEmployee(employee);
    setAddEmployee(false);
  }

  return (
    <div className=' flex flex-col min-w-[1440px] h-screen bg-Cream p-12 gap-6 mx-auto'>
      <Navbar
        setAddEmployee={setAddEmployee}
        onSelectEmployee={setselectedEmployee}
        setEmployeeList={setEmployeeList}
        employeeList={employeeList}
        setSearchTerm={setSearchTerm}
      />
      <Main
        selectedEmployee={selectedEmployee}
        setselectedEmployee={setselectedEmployee}
        onSelectEmployee={handleSelectEmployee}
        isAddEmployee={isAddEmployee}
        setAddEmployee={setAddEmployee}
        employeeList={employeeList}
        setEmployeeList={setEmployeeList}
        searchTerm={searchTerm}
      />
    </div>
  );
}
