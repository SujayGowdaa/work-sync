/* eslint-disable react/prop-types */
import Preview from './Preview';
import EmployeeLists from './EmployeeLists';
import NewCandidate from './NewCandidate';

const Main = ({
  isAddEmployee,
  setAddEmployee,
  employeeList,
  setEmployeeList,
  onSelectEmployee,
  selectedEmployee,
  setselectedEmployee,
  setNewEmployee,
}) => {
  function handleDeleteEmployee({ employeeCode }) {
    let updatedList = employeeList.filter(
      (employee) => employee.employeeCode !== employeeCode
    );
    setEmployeeList(updatedList);
    setselectedEmployee(null);
  }

  return (
    <main className=' flex gap-6 max-h-[100vh] overflow-y-hidden'>
      <EmployeeLists
        employeeList={employeeList}
        onSelectEmployee={onSelectEmployee}
        selectedEmployee={selectedEmployee}
      />
      {selectedEmployee !== null && (
        <Preview
          selectedEmployee={selectedEmployee}
          onDelete={handleDeleteEmployee}
        />
      )}
      {isAddEmployee && (
        <NewCandidate
          setAddEmployee={setAddEmployee}
          setNewEmployee={setNewEmployee}
          setEmployeeList={setEmployeeList}
        />
      )}
    </main>
  );
};

export default Main;
