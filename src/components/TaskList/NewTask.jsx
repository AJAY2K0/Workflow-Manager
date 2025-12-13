import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ task, name }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAccept = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name == name) {
        const updatedTasks = emp.tasks.map((t) => {
          if (t.title == task.title) {
            return {
              ...t,
              pending: false,
              inProgress: true,
              completed: false,
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
            pending: emp.taskCount.pending - 1,
            inProgress: emp.taskCount.inProgress + 1,
          },
        };
      }

      return emp;
    });

    const updated = { ...userData, employees: updatedEmployees };
    setUserData(updated);
  };
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-yellow-500/90 to-orange-400/80 rounded-xl p-5  text-black border-black border-3 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 bg-red-600 rounded-md text-white text-sm border border-black">
          {task.category}
        </h3>
        <h4 className="text-sm font-semibold">{task.date}</h4>
      </div>

      <h2 className="text-xl font-serif mt-3 md:mt-3 sm:mt-5">{task.title}</h2>

      <p className="text-sm mt-1 font-mono text-cyan-950">{task.description}</p>

      <div className="flex justify-end items-center mt-5">
        <button
          onClick={handleAccept}
          className="text-sm px-2 py-1 w-full text-white bg-green-700 font-medium rounded-md hover:border border-white hover:bg-green-600 cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default NewTask;
