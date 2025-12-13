const PasswordResetSuccess = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="m-5 md:m-0 bg-linear-to-br from-gray-900/90 to-black/90 border border-gray-700 rounded-2xl shadow-lg shadow-black/40 px-10 py-8 text-center min-w-[380px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-emerald-400 mb-3">
          Password Reset Successful
        </h2>

        <p className="text-gray-300 mb-5 text-sm">
          Your password has been updated successfully.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
