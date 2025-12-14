import { CheckCircle } from "lucide-react";

const AccountCreatedModal = ({ open, onClose, userName }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-neutral-900 border border-emerald-500/30 rounded-2xl px-8 py-10 w-[90%] max-w-lg shadow-xl text-center">
        <CheckCircle className="text-emerald-400 mx-auto mb-4" size={60} />

        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Account Created Successfully
        </h1>

        <p className="mt-3 text-emerald-400 text-lg font-medium uppercase tracking-wide">
          {userName}
        </p>

        <p className="text-gray-300 mt-1 text-[15px]">
          Your account has been created.
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-8 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full shadow-md transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AccountCreatedModal;
