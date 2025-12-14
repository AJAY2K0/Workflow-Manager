const NewTask = ({ task }) => {
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-yellow-500/90 to-orange-400/80 rounded-xl p-5  text-black border-black border-3 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 bg-red-600 rounded-md text-white text-sm border border-black">
          {task.category}
        </h3>
        <h4 className="text-sm font-semibold">
          {task.date}
        </h4>
      </div>

      <h2 className="text-xl font-serif mt-3">
        {task.title}
      </h2>

      <p className="text-sm mt-1 font-mono">
        {task.description}
      </p>
    </div>
  );
};

export default NewTask;
