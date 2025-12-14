const InProgress = ({ task }) => {
  return (
    <div className="shrink-0 w-full bg-linear-to-r from-blue-600/90 to-cyan-500/80 text-white rounded-xl p-5 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center ">
        <h3 className="px-2 py-1 bg-red-600 rounded-md text-white ext-sm border-white border">
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

export default InProgress;
