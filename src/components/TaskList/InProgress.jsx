import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const InProgress = ({ task, name }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleComplete = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name == name) {
        const updatedTasks = emp.tasks.map((t) => {
          if (t.title == task.title) {
            return {
              ...t,
              pending: false,
              inProgress: false,
              completed: true,
              failed: false,
            };
          }
          return t;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            inProgress: emp.taskCount.inProgress - 1,
            completed: emp.taskCount.completed + 1,
          },
        };
      }
      return emp;
    });

    const updated = { ...userData, employees: updatedEmployees };
    setUserData(updated);
  };

  const handleFail = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name == name) {
        const updatedTasks = emp.tasks.map((t) => {
          if (t.title == task.title) {
            return {
              ...t,
              pending: false,
              inProgress: false,
              completed: false,
              failed: true,
            };
          }
          return t;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            inProgress: emp.taskCount.inProgress - 1,
            failed: emp.taskCount.failed + 1,
          },
        };
      }

      return emp;
    });

    const updated = { ...userData, employees: updatedEmployees };
    setUserData(updated);
  };
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-blue-600/90 to-cyan-500/80 text-white rounded-xl p-5 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 bg-red-600 rounded-md text-white text-sm border-white border">
          {task.category}
        </h3>

        <h4 className="text-sm font-semibold">
          {task.date}
        </h4>
      </div>

      <h2 className="text-xl font-serif mt-3 md:mt-3 md:text-xl sm:mt-5">
        {task.title}
      </h2>

      <p className="text-sm mt-1 md:text-sm sm:text-xl font-mono">
        {task.description}
      </p>

      <div className="flex justify-between gap-2 items-center mt-5 font-medium text-black">
        <button
          onClick={handleComplete}
          className="text-sm px-2 py-1 text-nowrap bg-green-500 rounded-md  hover:border border-white hover:bg-green-400 cursor-pointer"
        >
          Mark as Completed
        </button>

        <button
          onClick={handleFail}
          className="text-sm text-nowrap px-2 py-1 bg-red-600 rounded-md hover:border border-white text-white hover:bg-red-500 cursor-pointer"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default InProgress;
