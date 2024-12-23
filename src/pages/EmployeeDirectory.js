import React from 'react';
import employees from '../utils/constants';

const EmployeeDirectory = () => {
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Employee Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="p-6 bg-white shadow-md rounded-md flex">
            <div ><h2 className="text-xl font-bold">{employee.name}</h2>
            <p className="text-sm text-gray-700 py-2">Contact: {employee.contact}</p>
            <p className="text-sm text-gray-700 py-2">Address: {employee.address}</p>
            <p className="text-sm text-gray-700 py-2">Department: {employee.department}</p></div>
            <div className='pl-4'><img src={employee.img} alt='yoyo' className='h-36 rounded-lg'/></div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
