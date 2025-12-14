import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import FailedTask from "../../../TaskList/FailedTask";
import { createPortal } from "react-dom";

const ShowFailedTask = ({ data, onClose }) => {
  const [userData, setUserData] = useContext(AuthContext);

  let employeeData;
  userData.employees.map((emp) => {
    if (emp.name == data.name) {
      employeeData = { ...emp };
    }
  });

  const validTasks = data.tasks.filter((t) => t.failed);

  const hasNoTasks = validTasks.length === 0;

  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-80">
      <div
        className="
        w-full max-w-4xl 
        max-h-[90vh] 
        overflow-y-auto 
        rounded-2xl 
        bg-linear-to-br from-gray-900/90 to-black/90 
        border border-gray-800 
        shadow-2xl shadow-black/50 
        py-2
        md:p-6
        m-5 md:m-0
        "
      >
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-500 float-right rounded-full hover:bg-gray-600 px-2.5 text-3xl md:text-2xl mr-2 md:pb-1 font-bold hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            ×
          </button>
        )}

        <div
          id="taskList"
          className="
            w-full
            p-6
            rounded-2xl
            shadow-xl shadow-black/30
            flex flex-wrap 
            gap-5
            overflow-x-hidden 
            lg:flex-nowrap lg:overflow-x-auto
            scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-800
          "
        >
          {hasNoTasks && (
            <div className="w-full text-center py-20">
              <h1 className=" text-xl font-semibold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                No tasks available at the moment.
              </h1>
            </div>
          )}

          {!hasNoTasks &&
            data.tasks.map((elem, index) => {
              const Wrapper = ({ children }) => (
                <div className="w-full sm:w-[48%] lg:min-w-[350px] lg:max-w-[400px]">
                  {children}
                </div>
              );

              if (elem.failed)
                return (
                  <Wrapper key={index}>
                    <FailedTask task={elem} />
                  </Wrapper>
                );

              return null;
            })}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShowFailedTask;
