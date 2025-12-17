import React from 'react';
import { Users, Calendar } from 'lucide-react';
import { getPriorityColor, getStatusColor, formatDate } from '../utils/helpers';

const TaskCard = ({ task, employees, currentUser, onUpdateStatus }) => {
  const assignedEmployee = employees.find(emp => emp.id === task.assignedTo);

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-600 mb-2">{task.description}</p>

      <div className="flex gap-3 text-sm mb-3">
        <span className={getPriorityColor(task.priority)}>{task.priority}</span>
        <span className={getStatusColor(task.status)}>{task.status}</span>
      </div>

      <div className="text-sm text-gray-500 flex gap-4">
        <span><Users className="inline w-4 h-4" /> {assignedEmployee?.name}</span>
        <span><Calendar className="inline w-4 h-4" /> {formatDate(task.dueDate)}</span>
      </div>

      {currentUser.role === 'employee' && task.status !== 'completed' && (
        <div className="mt-4 flex gap-2">
          {task.status === 'pending' && (
            <button onClick={() => onUpdateStatus(task.id, 'ongoing')} className="bg-blue-600 text-white px-4 py-2 rounded">
              Start
            </button>
          )}
          {task.status === 'ongoing' && (
            <>
              <button onClick={() => onUpdateStatus(task.id, 'completed')} className="bg-green-600 text-white px-4 py-2 rounded">
                Complete
              </button>
              <button onClick={() => onUpdateStatus(task.id, 'failed')} className="bg-red-600 text-white px-4 py-2 rounded">
                Fail
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
