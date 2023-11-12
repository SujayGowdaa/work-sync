/* eslint-disable react/prop-types */
import Card from './Card';

const EmployeeLists = ({ onSelect, selectedEmployee, employeeList }) => {
  return (
    <div className=' bg-White p-6 flex flex-col w-full gap-3 rounded-xl drop-shadow-xl '>
      {employeeList.map((e, index) => {
        return (
          <Card
            selectedEmployee={selectedEmployee}
            onClick={onSelect}
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
