import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import DOBDropdown from "../../other/DOBDropdown";

const CreateEmployeeModal = ({
  showModal,
  setShowModal,
  setShowConfirm,
  setEmployeeName,
}) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [dob, setDob] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateId = () => Math.floor(Date.now() % 100000);

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("One number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("One special character");

    return errors;
  };

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newEmployee = {
      id: generateId(),
      adminId: userData.loggedInUserData.adminId,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      dob: dob,
      gender: formData.gender,
      tasks: [],
      taskCount: { pending: 0, completed: 0, inProgress: 0, failed: 0 },
    };

    const existingEmployee =
      userData.employees.find((e) => e.email == newEmployee.email) ||
      userData.admin.find((e) => e.email == newEmployee.email);
    if (existingEmployee) {
      setError("Email already exits!");
      return false;
    }
    const pwdIssues = validatePassword(formData.password);

    if (pwdIssues.length > 0) {
      setError("Password must contain: " + pwdIssues.join(", "));
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setUserData((prev) => ({
        ...prev,
        employees: [...prev.employees, newEmployee],
        employeesOfAdmin: [...prev.employeesOfAdmin, newEmployee],
      }));
      setEmployeeName(formData.name);
      setShowConfirm(true);
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
      setDob("");
    }, 2000);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 mx-4">
      <div
        className="bg-linear-to-br from-gray-900/90 to-black/90 rounded-2xl p-8 w-[720px] shadow-lg shadow-black/40 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold text-emerald-400">
            Create <span className="text-white">New Employee</span>
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-red-500 float-right rounded-full hover:bg-gray-600 px-2.5 text-3xl md:text-2xl font-bold hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            &times;
          </button>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 text-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="emp-name"
              className="mb-1 text-md font-medium text-gray-300"
            >
              Employee Name
            </label>
            <input
              id="emp-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              placeholder="Enter employee name..."
              className="bg-gray-900  border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="emp-email"
              className="mb-1 text-md font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="emp-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              placeholder="Enter employee email..."
              className="bg-gray-900  border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor="emp-password"
              className="mb-1 text-md font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="emp-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password..."
              className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9.5 text-gray-400"
            >
              {showPassword ? (
                <EyeOffIcon size={20} className="cursor-pointer" />
              ) : (
                <EyeIcon size={20} className="cursor-pointer" />
              )}
            </button>
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor="emp-confirm"
              className="mb-1 text-md font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              id="emp-confirm"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
              placeholder="Confirm password..."
              className="bg-gray-900  border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9.5 text-gray-400"
            >
              {showConfirmPassword ? (
                <EyeOffIcon size={20} className="cursor-pointer" />
              ) : (
                <EyeIcon size={20} className="cursor-pointer" />
              )}
            </button>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 block">Date of Birth</label>
            <DOBDropdown value={dob} onChange={setDob} />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="emp-gender"
              className="mb-1 text-md font-medium text-gray-300"
            >
              Gender
            </label>
            <div className="relative w-full">
              <select
                id="emp-gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                autoComplete="off"
                required
                className="appearance-none bg-gray-900 border border-emerald-500/40 
               text-gray-200 py-2 px-4 pr-10 text-sm md:text-[15px] 
               rounded-full w-full outline-none focus:border-emerald-400 
               transition-colors placeholder:text-gray-400"
              >
                <option
                  className="bg-gray-900 text-[8px] md:text-sm text-gray-100"
                  value=""
                >
                  Select gender
                </option>
                <option
                  className="bg-gray-900 text-[8px] md:text-sm text-gray-100"
                  value="Male"
                >
                  Male
                </option>
                <option
                  className="bg-gray-900 text-[8px] md:text-sm text-gray-100"
                  value="Female"
                >
                  Female
                </option>
                <option
                  className="bg-gray-900 text-[8px] md:text-sm text-gray-100"
                  value="Other"
                >
                  Other
                </option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                ▼
              </span>
            </div>
          </div>

          {error && (
            <div className="md:col-span-2 flex justify-center">
              <p className="text-red-500 text-center text-sm">{error}</p>
            </div>
          )}

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`flex justify-center w-auto md:w-[25%] mt-2 md:mt-3 items-center gap-2 px-6 py-2 text-md md:text-lg md:px-3 md:py-2 md:text-[15px] text-black rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/30 ${
                loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "Creating..." : "Create Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeModal;
