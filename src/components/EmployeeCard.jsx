import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <h3 className="font-semibold">{employee.name}</h3>
      <p className="text-sm text-gray-600">{employee.email}</p>

      <div className="flex gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-xl font-bold text-green-600">{employee.tasksCompleted}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-xl font-bold text-blue-600">{employee.activeTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
