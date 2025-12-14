import { useState } from "react";

import ShowCompletedTask from "./FilteredTask/ShowCompletedTask";
import ShowNewTask from "./FilteredTask/ShowNewTask";
import ShowFailedTask from "./FilteredTask/ShowFailedTask";
import ShowInProgressTask from "./FilteredTask/ShowInProgressTask";

const TaskNumber = ({ data }) => {
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-start justify-between w-full md:mt-10 mt-6">
      
      <button
        className="flex flex-col justify-center items-center bg-linear-to-r from-yellow-500/90 to-orange-400/80 text-black shadow-lg shadow-red-900/30 rounded-2xl p-3 md:p-5 sm:w-1/4 md:w-[23%] hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => {
          setPending(true);
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl">
          {data.taskCount.pending}
        </h2>
        <h3 className="text-[16px]  md:text-xl font-serif font-medium opacity-90">
          New Task
        </h3>
      </button>

      <button
        className="flex flex-col justify-center items-center bg-linear-to-r from-blue-600/90 to-cyan-500/80 text-white shadow-lg shadow-red-900/30 rounded-2xl p-3 md:p-5 sm:w-1/4 md:w-[23%] hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => {
          setInProgress(true);
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl">
          {data.taskCount.inProgress}
        </h2>
        <h3 className="text-[16px]  md:text-xl font-serif md:text- font-medium opacity-90 whitespace-nowrap">
          Ongoing
        </h3>
      </button>

      <button
        className="flex flex-col justify-center items-center bg-linear-to-r from-green-500/90 to-emerald-400/80 text-black shadow-lg shadow-red-900/30 rounded-2xl p-3 md:p-5 sm:w-1/4 md:w-[23%] hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => {
          setCompleted(true);
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl">
          {data.taskCount.completed}
        </h2>
        <h3 className="text-[16px]  md:text-xl font-serif md:text- font-medium opacity-90">
          Completed
        </h3>
      </button>

      <button
        className="flex flex-col justify-center items-center bg-linear-to-r from-rose-500/90 to-red-400/80 text-white shadow-lg shadow-red-900/30 rounded-2xl p-3 md:p-5 sm:w-1/4 md:w-[23%] hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => {
          setFailed(true);
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl">
          {data.taskCount.failed}
        </h2>
        <h3 className="text-[16px]  md:text-xl font-serif md:text- font-medium opacity-90">
          Failed
        </h3>
      </button>

      {pending && <ShowNewTask data={data} onClose={() => setPending(false)} />}

      {completed && (
        <ShowCompletedTask data={data} onClose={() => setCompleted(false)} />
      )}

      {inProgress && (
        <ShowInProgressTask data={data} onClose={() => setInProgress(false)} />
      )}

      {failed && (
        <ShowFailedTask data={data} onClose={() => setFailed(false)} />
      )}
    </div>
  );
};

export default TaskNumber;
