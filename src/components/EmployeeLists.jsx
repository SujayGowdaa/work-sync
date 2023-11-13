/* eslint-disable react/prop-types */
import Card from './Card';

const EmployeeLists = ({
  onSelectEmployee,
  selectedEmployee,
  employeeList,
  searchTerm,
}) => {
  let filteredList = [];

  employeeList.filter((employee) => {
    if (searchTerm === '') {
      filteredList.push(employee);
      return;
    } else if (
      employee.name
        .trim()
        .replaceAll(' ', '')
        .toLowerCase()
        .includes(searchTerm.trim().replaceAll(' ', '').toLowerCase())
    ) {
      filteredList.push(employee);
      return;
    }
  });

  return (
    <div className=' container bg-White p-6 flex flex-col max-w-full gap-3 rounded-xl drop-shadow-xl overflow-y-scroll '>
      {filteredList.map((e, index) => {
        return (
          <Card
            selectedEmployee={selectedEmployee}
            onClick={onSelectEmployee}
            key={e.employeeCode}
            employeeCode={e.employeeCode}
            name={e.name}
            index={index + 1}
            joiningDate={e.joiningDate}
            phoneNumber={e.phoneNumber}
            department={e.department}
            designation={e.designation}
            image={e.image}
            emailAddress={e.emailAddress}
          />
        );
      })}
    </div>
  );
};

export default EmployeeLists;
