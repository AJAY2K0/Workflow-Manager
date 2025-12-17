import { useState, useEffect } from 'react';
import { sampleEmployees, sampleTasks } from '../utils/constants';

export const useWorkflowManager = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setEmployees(sampleEmployees);
    setTasks(sampleTasks);
  }, []);

  const handleLogin = (role) => {
    const user = employees.find(emp => emp.role === role);
    if (user) {
      setCurrentUser(user);
      addNotification(`Welcome back, ${user.name}!`);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    addNotification('Logged out successfully!');
  };

  const addNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const addEmployee = (employeeData) => {
    const newEmployee = {
      id: employees.length + 1,
      ...employeeData,
      role: 'employee',
      tasksCompleted: 0,
      activeTasks: 0,
    };
    setEmployees([...employees, newEmployee]);
    addNotification(`Employee ${newEmployee.name} added successfully!`);
    return true;
  };

  const addTask = (taskData) => {
    const newTask = {
      id: tasks.length + 1,
      ...taskData,
      assignedBy: currentUser.id,
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTasks([...tasks, newTask]);

    setEmployees(employees.map(emp =>
      emp.id === parseInt(taskData.assignedTo)
        ? { ...emp, activeTasks: emp.activeTasks + 1 }
        : emp
    ));

    addNotification('Task created and assigned successfully!');
    return true;
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const task = tasks.find(t => t.id === taskId);
    const oldStatus = task?.status;

    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));

    if (task) {
      setEmployees(employees.map(emp => {
        if (emp.id === task.assignedTo) {
          let updates = { ...emp };

          if ((oldStatus === 'pending' || oldStatus === 'ongoing') && newStatus === 'completed') {
            updates.tasksCompleted = emp.tasksCompleted + 1;
            updates.activeTasks = Math.max(0, emp.activeTasks - 1);
          } else if ((oldStatus === 'pending' || oldStatus === 'ongoing') && newStatus === 'failed') {
            updates.activeTasks = Math.max(0, emp.activeTasks - 1);
          }

          return updates;
        }
        return emp;
      }));
    }

    addNotification(`Task status updated to ${newStatus}!`);
  };

  return {
    currentUser,
    employees,
    tasks,
    notifications,
    handleLogin,
    handleLogout,
    addEmployee,
    addTask,
    updateTaskStatus,
    addNotification,
  };
};
