import { useContext, useState } from "react";

import { Trash2 } from "lucide-react";
import DeleteEmployee from "../../ConfirmationModal/DeleteEmployee";
import ShowNewTask from "../../ConfirmationModal/TaskModal/ShowNewTask";
import ShowInProgress from "../../ConfirmationModal/TaskModal/ShowInProgress";
import { AuthContext } from "../../../context/AuthProvider";
import ShowCompletedTask from "../Employee/FilteredTask/ShowCompletedTask";
import ShowFailedTask from "../Employee/FilteredTask/ShowFailedTask";

const AllEmployeeTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employeeData, setEmployeeData] = useState();
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [showInProgressTaskModal, setShowInProgressTaskModal] = useState(false);
  const [showFailedTask, setShowFailedTask] = useState(false);
  const [showCompletedTask, setShowCompletedTask] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleDeleteConfirm = () => {
    setLoading(true);
    const updatedEmployees = userData.employees.filter(
      (emp) => emp.id !== employeeToDelete
    );
    const updatedEmployeesOfAdmin = userData.employeesOfAdmin.filter(
      (emp) => emp.id !== employeeToDelete
    );
    setTimeout(()=>{
      setUserData({
      ...userData,
      employees: updatedEmployees,
      employeesOfAdmin: updatedEmployeesOfAdmin,
    });
    setLoading(false)
    setEmployeeToDelete(null);
    },2000)
  };

  const handleShowNewModal = (data) => {
    setEmployeeData(data);
    setShowNewTaskModal(true);
  };
  const handleShowInProgressModal = (data) => {
    setEmployeeData(data);
    setShowInProgressTaskModal(true);
  };
  const handleShowFailedModal = (data) => {
    setEmployeeData(data);
    setShowFailedTask(true);
  };

  const handleShowCompletedModal = (data) => {
    setEmployeeData(data);
    setShowCompletedTask(true);
  };

  const handleCancelDelete = () => setEmployeeToDelete(null);

  return (
    <div
      id="taskList"
      className="relative flex flex-col p-6 md:p-6 mt-5 md:mt-5 md:h-auto h-auto overflow-auto bg-linear-to-br from-gray-900 to-black rounded-2xl shadow-lg backdrop-blur-md border border-gray-800"
    >
      <h2 className="text-lg md:text-2xl font-semibold text-emerald-400 mb-5 md:mb-6">
        Employee <span className="text-white">Task Overview</span>
      </h2>

      {userData.employeesOfAdmin.length > 0 && (
        <div className="grid gap-1 grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.3fr] md:grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1.5fr_0.8fr] items-center text-[10px] md:text-[15px] p-2 md:px-6 md:py-3 mb-1 bg-linear-to-r from-blue-600 to-indigo-500 rounded-lg text-white font-semibold shadow-md sticky top-0 z-10">
          <h2 className="text-center whitespace-nowrap">Employee Name</h2>
          <h2 className="text-center">New</h2>
          <h2 className="text-center">Ongoing</h2>
          <h2 className="text-center">Completed</h2>
          <h2 className="text-center">Failed</h2>
          <h2 className="text-center"></h2>
        </div>
      )}

      <div className="mt-2">
        <div className="flex flex-col gap-2">
          {showNewTaskModal && (
            <ShowNewTask
              data={employeeData}
              onClose={() => setShowNewTaskModal(false)}
            />
          )}
          {showInProgressTaskModal && (
            <ShowInProgress
              data={employeeData}
              onClose={() => setShowInProgressTaskModal(false)}
            />
          )}
          {showFailedTask && (
            <ShowFailedTask
              data={employeeData}
              onClose={() => setShowFailedTask(false)}
            />
          )}
          {showCompletedTask && (
            <ShowCompletedTask
              data={employeeData}
              onClose={() => setShowCompletedTask(false)}
            />
          )}

          {userData.employeesOfAdmin.length === 0 ? (
            <div className="flex flex-col items-center justify-center pt-7 select-none animate-pulse">
              <h1
                className="
                text-center 
                text-transparent 
                bg-clip-text 
                bg-linear-to-r 
                from-rose-600 
                to-red-400 
                font-serif 
                text-[12px] 
                tracking-wide 
                drop-shadow-sm
                md:text-xl
              "
              >
                NO EMPLOYEE AVAILABLE
              </h1>
              <div className="flex flex-col justify-center items-center text-neutral-500 dark:text-neutral-400 text-[8px] md:text-sm font-light ">
                <p className="">It’s a little quiet here.</p>
                <p>Add someone to brighten the roster.</p>
              </div>

              <div className="mt-8 h-auto w-24 rounded-full bg-linear-to-tr from-rose-500/20 to-red-300/20 blur-2xl" />
            </div>
          ) : (
            userData.employeesOfAdmin.map((emp) => (
              <div
                key={emp.id}
                className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.3fr] md:grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1.5fr_0.8fr] items-center px-3 py-1 md:px-6 md:py-3 bg-white/10 border border-emerald-500/50 rounded-lg text-gray-100 hover:scale-[1.02] hover:shadow-lg hover:border-emerald-400/80 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-center font-medium text-[10px] md:text-sm text-emerald-300 whitespace-nowrap">
                  {emp.name}
                </h2>

                <button
                  onClick={() => handleShowNewModal(emp)}
                  className="cursor-pointer hover:text-yellow-200 text-center md:text-sm text-[10px] text-yellow-400 font-semibold hover:scale-125 duration-200"
                >
                  {emp.taskCount.pending}
                </button>

                <button
                  onClick={() => handleShowInProgressModal(emp)}
                  className="cursor-pointer hover:text-blue-200 text-center md:text-sm text-[10px] text-blue-400 font-semibold hover:scale-125 duration-200"
                >
                  {emp.taskCount.inProgress}
                </button>

                <button
                  onClick={() => handleShowCompletedModal(emp)}
                  className="cursor-pointer hover:text-green-200 text-center md:text-sm text-[10px] text-green-400 font-semibold hover:scale-125 duration-200"
                >
                  {emp.taskCount.completed}
                </button>

                <button
                  onClick={() => handleShowFailedModal(emp)}
                  className="cursor-pointer hover:text-red-200 text-center md:text-sm text-[10px] text-red-400 font-semibold hover:scale-125 duration-200"
                >
                  {emp.taskCount.failed}
                </button>

                <button
                  onClick={() => setEmployeeToDelete(emp.id)}
                  className="text-red-500 hover:text-red-400 cursor-pointer hover:scale-150 duration-300 text-center md:mx-10 m-0"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      {employeeToDelete && (
        <DeleteEmployee
          handleDelete={handleDeleteConfirm}
          handleCancel={handleCancelDelete}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AllEmployeeTask;
