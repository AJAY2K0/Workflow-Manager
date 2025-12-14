import { useContext, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { AuthContext } from "../../context/AuthProvider";
import PasswordResetSuccess from "../ConfirmationModal/PasswordResetSuccess";
import DOBDropdown from "../other/DOBDropdown";

const ForgotPasswordModal = ({ show, onClose }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("One number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("One special character");

    return errors;
  };

  const handlePasswordReset = () => {
    const resetEmployee = userData.employees.find(
      (e) => e.email === email && e.dob === dob
    );
    const resetAdmin = userData.admin.find(
      (e) => e.email === email && e.dob === dob
    );

    if (!resetEmployee && !resetAdmin) {
      setError("Incorrect Email/DOB");
      setLoading(false);
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return false;
    }

    const pwdIssues = validatePassword(password);

    if (pwdIssues.length > 0) {
      setError("Password must contain: " + pwdIssues.join(", "));
      setLoading(false);
      return false;
    }

    if (resetAdmin) {
      if (resetAdmin.password === password) {
        setError("Password already exists");
        setLoading(false);
        return false;
      }

      const filteredAdmins = userData.admin.filter(
        (e) => e.email !== resetAdmin.email
      );

      const updatedAdmin = { ...resetAdmin, password: password };
      const updatedAdminData = [...filteredAdmins, updatedAdmin];

      setUserData((prev) => ({
        ...prev,
        admin: updatedAdminData,
      }));
    }

    if (resetEmployee) {
      if (resetEmployee.password === password) {
        setError("Password already exists");
        return false;
      }

      const filteredEmployees = userData.employees.filter(
        (e) => e.email !== resetEmployee.email
      );

      const updatedEmployee = { ...resetEmployee, password: password };
      const updatedEmployeesData = [...filteredEmployees, updatedEmployee];

      setUserData((prev) => ({
        ...prev,
        employees: updatedEmployeesData,
      }));
    }
    setEmail("");
    setDob("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      try {
        const success = handlePasswordReset();
        if (success) {
          setShowSuccessModal(true);
        }
      } catch (err) {
        setError("Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg z-50">
      <div
        className="relative z-50 backdrop-blur-xl bg-white/5 border border-emerald-500/30 rounded-3xl p-6 md:p-8 w-[90%] max-w-md shadow-2xl shadow-emerald-900/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl -bottom-10 -right-10 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-emerald-400 text-center">
            Reset Password
          </h2>
          <p className="text-gray-400 text-center text-sm mt-1">
            Enter your details to reset the password
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-gray-300 text-sm font-medium">Email</label>
              <input
                type="email"
                className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 rounded-full w-full outline-none focus:border-emerald-400 placeholder:text-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium">
                Date of Birth
              </label>
              <DOBDropdown value={dob} onChange={setDob} />
            </div>

            <div className="relative">
              <label className="text-gray-300 text-sm font-medium">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 rounded-full w-full outline-none focus:border-emerald-400 placeholder:text-gray-400"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[35px] right-4 text-gray-500 hover:text-emerald-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <label className="text-gray-300 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 rounded-full w-full outline-none focus:border-emerald-400 placeholder:text-gray-400"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-[35px] right-4 text-gray-500 hover:text-emerald-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-center text-sm mb-3">{error}</p>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-md text-gray-300 border border-gray-600 hover:border-emerald-500 hover:text-emerald-400 rounded-full transition-all"
              >
                Cancel
              </button>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex justify-center w-auto items-center gap-2 px-6 py-2 text-md text-black rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/30 ${
                    loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading && <Loader2 className="animate-spin" size={20} />}
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showSuccessModal && <PasswordResetSuccess onClose={onClose} />}
    </div>
  );
};

export default ForgotPasswordModal;
