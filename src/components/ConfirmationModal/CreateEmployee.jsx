import { CheckCircle } from "lucide-react";

const CreateEmployee = ({ onClose, employeeName }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-8 w-full max-w-md animate-scaleIn mx-5">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />

          <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
            Employee Created Successfully
          </h2>

          <div className="text-neutral-600 dark:text-neutral-300 mb-6">
            {employeeName ? (
              <p>
                <span className="font-serif text-lg text-emerald-500 uppercase">
                  {employeeName}
                </span>
                <br />
                has been added to your team.
              </p>
            ) : (
              <p>The new employee has been added to your team.</p>
            )}
          </div>

          <button
            onClick={() => {
              onClose(false);
            }}
            className="px-6 py-2 rounded-lg bg-linear-to-r from-green-500/90 to-emerald-400/80 hover:bg-emerald-600 text-white font-medium transition hover:scale-105 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
