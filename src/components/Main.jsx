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
  searchTerm,
}) => {
  function handleDeleteEmployee({ employeeCode }) {
    let updatedList = employeeList.filter(
      (employee) => employee.employeeCode !== employeeCode
    );
    setEmployeeList(updatedList);
    setselectedEmployee(null);
  }

  return (
    <main className=' flex gap-6 h-[100%] overflow-y-auto p-[24px] m-[-24px]'>
      <EmployeeLists
        employeeList={employeeList}
        onSelectEmployee={onSelectEmployee}
        selectedEmployee={selectedEmployee}
        searchTerm={searchTerm}
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
