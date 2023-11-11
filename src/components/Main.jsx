import Preview from './Preview';
import EmployeeLists from './EmployeeLists';
import NewCandidate from './NewCandidate';
import { useState } from 'react';

const Main = () => {
  const [selectedEmployee, setselectedEmployee] = useState(null);

  function handleSelectEmployee(employee) {
    selectedEmployee !== null &&
    selectedEmployee.employeeCode === employee.employeeCode
      ? setselectedEmployee(null)
      : setselectedEmployee(employee);
  }

  return (
    <main className=' flex gap-6 '>
      <EmployeeLists
        onSelect={handleSelectEmployee}
        selectedEmployee={selectedEmployee}
      />
      {selectedEmployee !== null && (
        <Preview selectedEmployee={selectedEmployee} />
      )}
    </main>
  );
};

export default Main;
