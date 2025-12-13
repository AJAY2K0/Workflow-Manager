import { useContext, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AuthContext } from "../../context/AuthProvider";
import AccountCreatedModal from "../ConfirmationModal/AccountCreatedModal";
import DOBDropdown from "../other/DOBDropdown";

const Signup = ({ setHandleUI }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dob, setDob] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("One number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("One special character");

    return errors;
  };

  const handleRegister = (newAccount) => {
    const enteredEmail =
      userData.admin.find((e) => newAccount.email === e.email) ||
      userData.employees.find((e) => newAccount.email === e.email);

    if (enteredEmail) {
      setError("Email already registered. Please Login");
      return false;
    }

    setUserData((prev) => ({
      ...prev,
      admin: [...prev.admin, newAccount],
    }));

    setUserName(newAccount.name);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
    setDob("");
    return true;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    const pwdIssues = validatePassword(formData.password);

    if (pwdIssues.length > 0) {
      setError("Password must contain: " + pwdIssues.join(", "));
      setLoading(false);
      return;
    }

    const newAccount = {
      adminId: Math.floor(Date.now() % 100000000),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      dob: dob,
      gender: formData.gender,
    };

    setTimeout(()=>{
      try {
      const success = handleRegister(newAccount);
      if (success) {
        setShowModal(true);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
    },2000)
  };

  return (
    <>
      {showModal && (
        <AccountCreatedModal
          open={showModal}
          onClose={() => {
            setShowModal(false);
            setHandleUI("Login");
          }}
          userName={userName}
        />
      )}
      <div className="flex items-center justify-center h-svh bg-linear-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl bottom-10 right-20 animate-pulse"></div>

        <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-emerald-500/30 rounded-3xl p-5 md:p-8 sm:p-10 w-[90%] md:w-[60%] lg:w-[55%] xl:w-[60%] max-w-4xl shadow-2xl shadow-emerald-900/30">
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-2xl md:text-md font-semibold text-emerald-400 tracking-wide">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm md:text-sm mt-1">
              Fill the details to get started
            </p>
          </div>

          <form onSubmit={submitHandler} className="flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1 text-sm md:text-[15px]">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1 text-sm md:text-[15px]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1 text-sm md:text-[15px]">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 pr-10 text-sm md:text-[15px] rounded-full w-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2.5 right-4 text-gray-500 hover:text-emerald-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1 text-sm md:text-[15px]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 pr-10 text-sm md:text-[15px] rounded-full w-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-2.5 right-4 text-gray-500 hover:text-emerald-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-300 mb-1 block">
                  Date of Birth
                </label>
                <DOBDropdown value={dob} onChange={setDob} />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1 text-sm md:text-[15px]">
                  Gender
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 text-sm md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors appearance-none pr-10 w-full"
                    required
                  >
                    <option value="" className="text-[8px] md:text-sm">
                      Select gender
                    </option>
                    <option value="male" className="text-[8px] md:text-sm">
                      Male
                    </option>
                    <option value="female" className="text-[8px] md:text-sm">
                      Female
                    </option>
                    <option value="other" className="text-[8px] md:text-sm">
                      Other
                    </option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-center text-sm mb-3">{error}</p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`flex justify-center w-auto md:w-[50%] mt-2 md:mt-3 items-center gap-2 px-6 py-2 text-md md:text-lg md:px-3 md:py-2 md:text-[15px] text-black rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/30 ${
                  loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setHandleUI("Login")}
                className="text-emerald-400 hover:underline cursor-pointer"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
