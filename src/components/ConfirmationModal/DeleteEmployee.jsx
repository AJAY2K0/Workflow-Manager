import { Loader2 } from "lucide-react";
import { createPortal } from "react-dom";

const DeleteEmployee = ({ handleDelete, handleCancel, loading }) => {
  return createPortal(
    <div>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-linear-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl border border-gray-700 shadow-lg shadow-black/40 w-96 text-center">
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">
            Confirm Delete
          </h3>
          <p className="text-gray-300 mb-6">
            Are you sure you want to delete this employee?
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              disabled={loading}
              className={`flex justify-center items-center text-wrap bg-linear-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-[1.05] hover:shadow-md hover:shadow-red-500/40 transition-all duration-300 cursor-pointer ${
                loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "" : "Yes"}
            </button>

            <button
              onClick={handleCancel}
              disabled={loading}
              className="bg-linear-to-r from-gray-700 to-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:scale-[1.05] hover:shadow-md hover:shadow-gray-500/30 transition-all duration-300 cursor-pointer"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteEmployee;
