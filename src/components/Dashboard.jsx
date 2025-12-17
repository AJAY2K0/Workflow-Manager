import React, { useState, useMemo } from 'react';
import { Users, CheckCircle2, Clock, XCircle, Plus, LogOut, BarChart3, Filter, Search } from 'lucide-react';
import TaskCard from './TaskCard';
import EmployeeCard from './EmployeeCard';
import AddEmployeeModal from './AddEmployeeModal';
import AddTaskModal from './AddTaskModal';
import { calculateStats, filterTasks } from '../utils/helpers';

const Dashboard = ({
  currentUser,
  employees,
  tasks,
  onLogout,
  onAddEmployee,
  onAddTask,
  onUpdateTaskStatus
}) => {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = useMemo(() => calculateStats(tasks, currentUser), [tasks, currentUser]);
  const filteredTasks = useMemo(
    () => filterTasks(tasks, searchQuery, statusFilter, currentUser),
    [tasks, searchQuery, statusFilter, currentUser]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Workflow Manager</h1>
              <p className="text-sm text-gray-600">
                {currentUser.role === 'admin' ? 'Admin Dashboard' : 'Employee Dashboard'}
              </p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Stat label="Total" value={stats.total} icon={<BarChart3 />} />
          <Stat label="Pending" value={stats.pending} icon={<Clock />} />
          <Stat label="Ongoing" value={stats.ongoing} icon={<Clock />} />
          <Stat label="Completed" value={stats.completed} icon={<CheckCircle2 />} />
          <Stat label="Failed" value={stats.failed} icon={<XCircle />} />
        </div>

        {/* Actions */}
        {currentUser.role === 'admin' && (
          <div className="flex gap-4 mb-6">
            <button onClick={() => setShowAddEmployee(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              <Plus className="inline w-4 h-4 mr-1" /> Add Employee
            </button>
            <button onClick={() => setShowAddTask(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              <Plus className="inline w-4 h-4 mr-1" /> Assign Task
            </button>
          </div>
        )}

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              employees={employees}
              currentUser={currentUser}
              onUpdateStatus={onUpdateTaskStatus}
            />
          ))}
        </div>

        {/* Employee List */}
        {currentUser.role === 'admin' && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Employees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {employees.filter(e => e.role === 'employee').map(emp => (
                <EmployeeCard key={emp.id} employee={emp} />
              ))}
            </div>
          </div>
        )}
      </div>

      {showAddEmployee && (
        <AddEmployeeModal onClose={() => setShowAddEmployee(false)} onSubmit={onAddEmployee} />
      )}

      {showAddTask && (
        <AddTaskModal
          employees={employees.filter(e => e.role === 'employee')}
          onClose={() => setShowAddTask(false)}
          onSubmit={onAddTask}
        />
      )}
    </div>
  );
};

const Stat = ({ label, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow border">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-3xl font-bold">{value}</p>
    <div className="text-blue-600 mt-2">{icon}</div>
  </div>
);

export default Dashboard;
