const CompleteTask = ({ task }) => {
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-green-500/90 to-emerald-400/80 text-black rounded-xl p-5 border-3 hover:scale-105 transition-transform duration-300">
      
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 bg-red-500 rounded-md text-white text-sm border border-black">
          {task.category}
        </h3>

        <h4 className="text-sm font-semibold">
          {task.date}
        </h4>
      </div>
      
      <h2 className="text-xl font-serif mt-3 md:mt-3 sm:mt-5">
        {task.title}
      </h2>

      <p className="text-sm mt-1 md:text-sm sm:text-xl font-mono">
        {task.description}
      </p>

      <div className="flex justify-center items-center mt-5">
        <button
          disabled
          className="w-full text-sm font-medium px-2 py-1 bg-black text-gray-200 rounded-md"
        >
          Completed
        </button>
      </div>
      
    </div>
  );
};

export default CompleteTask;
