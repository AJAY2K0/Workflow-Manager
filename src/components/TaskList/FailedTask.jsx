const FailedTask = ({ task }) => {
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-rose-500/90 to-red-400/80 text-white rounded-xl p-5 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 text-sm bg-red-600 rounded-md text-white border border-black">
          {task.category}
        </h3>
        <h4 className="text-sm font-semibold">
          {task.date}
        </h4>
      </div>

      <h2 className="text-xl font-serif mt-3 md:mt-3 sm:mt-5">
        {task.title}
      </h2>

      <p className="text-sm mt-1 font-mono">
        {task.description}
      </p>

      <div className="flex justify-center items-center mt-5">
        <button className="text-sm w-full font-medium px-2 py-1 border border-black bg-red-700 text-white rounded-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
