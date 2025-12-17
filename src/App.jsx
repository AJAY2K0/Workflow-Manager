import './App.css';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import { useWorkflowManager } from './hooks/useWorkflowManager';

function App() {
  const {
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
  } = useWorkflowManager();

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} employees={employees} />;
  }

  return (
    <div className="app-container">
      <Notification notifications={notifications} />
      <Dashboard
        currentUser={currentUser}
        employees={employees}
        tasks={tasks}
        onLogout={handleLogout}
        onAddEmployee={addEmployee}
        onAddTask={addTask}
        onUpdateTaskStatus={updateTaskStatus}
        addNotification={addNotification}
      />
    </div>
  );
}

export default App;
