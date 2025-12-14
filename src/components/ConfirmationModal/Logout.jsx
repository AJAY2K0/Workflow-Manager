import { Loader2 } from "lucide-react";

const Logout = ({ handleLogout, setShowLogoutConfirm,loading }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div
        className="bg-linear-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl border border-gray-700 shadow-lg shadow-black/40 w-80 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold text-emerald-400 mb-2">
          Confirm Logout
        </h3>
        <p className="text-gray-300 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            disabled={loading}
            className={`flex justify-center gap-1 text-sm text-nowrap bg-linear-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:scale-[1.05] hover:shadow-md hover:shadow-red-500/40 transition-all duration-300 cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading && <Loader2 className="animate-spin" size={20} />}
            {loading ? "Logging out..." : "Yes, Logout"}
          </button>
          <button
            onClick={() => setShowLogoutConfirm(false)}
            disabled={loading}
            className="text-sm bg-linear-to-r from-gray-700 to-gray-800 text-gray-200 px-4 py-2 rounded-lg font-medium hover:scale-[1.05] hover:shadow-md hover:shadow-gray-500/30 transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
