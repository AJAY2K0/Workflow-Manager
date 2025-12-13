import { createPortal } from "react-dom";

const SuccessAssign = ({ onClose, employeeName }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-linear-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl border border-gray-700 shadow-lg shadow-black/40 w-96 text-center">
        <h3 className="text-xl font-semibold text-emerald-400 mb-3 animate-bounce">
          Success
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          The task has been successfully assigned to
          <span className=" text-xl uppercase font-serif font-medium bg-linear-to-r from-blue-300/90 to-cyan-100/80 text-transparent bg-clip-text ">
            {" "}
            {employeeName}
          </span>
        </p>

        <button
          onClick={() => onClose(false)}
          className="bg-linear-to-r from-green-500/90 to-emerald-400/80 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-[1.05] hover:shadow-md hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>,
    document.body
  );
};

export default SuccessAssign;
