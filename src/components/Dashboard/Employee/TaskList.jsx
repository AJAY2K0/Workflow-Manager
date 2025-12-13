import NewTask from "../../TaskList/NewTask";
import CompleteTask from "../../TaskList/CompleteTask";
import InProgress from "../../TaskList/InProgress";
import FailedTask from "../../TaskList/FailedTask";

const TaskList = ({ data }) => {
  const validTasks = data.tasks.filter(
    (t) => t.pending || t.completed || t.inProgress || t.failed
  );

  const hasNoTasks = validTasks.length === 0;
  return (
    <div
      id="taskList"
      className="
        w-full
        mt-6 p-6
        md:mt-10
        rounded-2xl
        bg-linear-to-br from-gray-900/90 to-black/90 
        border border-gray-800 
        backdrop-blur-md 
        shadow-xl shadow-black/30
        flex flex-col sm:flex-row
        gap-5
        overflow-x-hidden 
        md:grid md:grid-cols-3 md:gap-5 md:overflow-x-hidden
        lg:flex-nowrap lg:overflow-x-auto
        scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-800
      "
    >
      {hasNoTasks && (
        <div
          className="
          w-full
          py-20 
          text-gray-400 
          text-center 
          flex justify-center items-center 
          md:col-span-3
        "
        >
          <h1 className="text-xl font-medium animate-pulse">
            No tasks available at the moment.
          </h1>
        </div>
      )}

      {!hasNoTasks &&
        data.tasks.map((elem, index) => {
          const Wrapper = ({ children }) => (
            <div className="w-full sm:w-[48%] md:min-w-full lg:min-w-full">
              {children}
            </div>
          );

          if (elem.pending)
            return (
              <Wrapper key={index}>
                <NewTask task={elem} name={data.name} />
              </Wrapper>
            );

          if (elem.completed)
            return (
              <Wrapper key={index}>
                <CompleteTask task={elem} />
              </Wrapper>
            );

          if (elem.inProgress)
            return (
              <Wrapper key={index}>
                <InProgress task={elem} name={data.name} />
              </Wrapper>
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
  );
};

export default TaskList;
