import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import SuccessAssign from "../../ConfirmationModal/SuccessAssign";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./darkDatepicker.css";
import { Loader2 } from "lucide-react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [assignTo, setAssignTo] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    date: null,
    assignTo: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };
  const today = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const employeesData = [...userData.employees];

      employeesData.forEach((element) => {
        if (element.name == taskData.assignTo) {
          element.tasks = [
            ...element.tasks,
            {
              ...taskData,
              status: "pending",
              pending: true,
              completed: false,
              inProgress: false,
              failed: false,
              date: taskData.date
                ? taskData.date.toLocaleDateString("en-GB")
                : null,
            },
          ];
          element.taskCount = {
            ...element.taskCount,
            pending: element.taskCount.pending + 1,
          };
        }
      });

      setAssignTo(taskData.assignTo);

      setShowSuccessModal(true);

      setUserData((prev) => {
        return { ...prev, employees: employeesData };
      });

      setTaskData({
        title: "",
        date: null,
        assignTo: "",
        category: "",
        description: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="w-full bg-linear-to-br from-gray-900 to-black rounded-2xl p-6 shadow-xl border border-gray-800 backdrop-blur-md">
        <h2 className="text-lg  md:text-2xl font-semibold text-white mb-6">
          Create <span className="text-emerald-400">New Task</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200"
        >
          <div className="flex flex-col">
            <label
              htmlFor="task-title"
              className="mb-2 text-sm font-medium text-gray-400"
            >
              Task Title
            </label>
            <input
              id="task-title"
              type="text"
              name="title"
              placeholder="Enter task title..."
              value={taskData.title}
              onChange={handleChange}
              autoComplete="off"
              required
              className="px-3 py-2 md:p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="task-date"
              className="mb-2 text-sm font-medium text-gray-400"
            >
              Due Date
            </label>

            <DatePicker
              id="task-date"
              selected={taskData.date}
              onChange={(date) => setTaskData({ ...taskData, date })}
              minDate={today}
              dateFormat="dd/MM/yyyy"
              calendarClassName="dark-calendar"
              className="px-3 py-2 md:p-3 w-full rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
              placeholderText="dd/MM/yyyy"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="task-assign"
              className="mb-2 text-sm font-medium text-gray-400"
            >
              Assign to
            </label>
            <select
              id="task-assign"
              name="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
              required
              autoComplete="off"
              className="px-3 py-2 md:p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all select-no-arrow"
            >
              <option
                value=""
                className="bg-black text-[8px] md:text-sm text-gray-100"
              >
                Select employee
              </option>
              {userData.employeesOfAdmin.map((emp, id) => (
                <option
                  key={id}
                  value={emp.name}
                  className="bg-gray-900 text-[8px] md:text-sm text-gray-100"
                  required
                >
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="task-category"
              className="mb-2 text-sm font-medium text-gray-400"
            >
              Category
            </label>
            <input
              id="task-category"
              type="text"
              name="category"
              placeholder="e.g. Design, Development..."
              value={taskData.category}
              onChange={handleChange}
              required
              autoComplete="off"
              className="px-3 py-2 md:p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="task-desc"
              className="mb-2 text-sm font-medium text-gray-400"
            >
              Description
            </label>
            <textarea
              id="task-desc"
              name="description"
              rows="4"
              placeholder="Enter task description..."
              value={taskData.description}
              onChange={handleChange}
              required
              autoComplete="off"
              className="px-3 py-2 md:p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`flex justify-center w-auto md:w-[25%] mt-2 md:mt-3 items-center gap-2 px-6 py-2 text-md md:text-lg md:px-3 md:py-2 md:text-[15px] text-black rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/30 ${
                loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "Creating..." : "Create Task"}
            </button>
          </div>
        </form>
      </div>
      {showSuccessModal && (
        <SuccessAssign onClose={setShowSuccessModal} employeeName={assignTo} />
      )}
    </>
  );
};

export default CreateTask;
