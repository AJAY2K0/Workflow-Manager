import { useState } from "react";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import ForgotPasswordModal from "./ForgotPasswordModal";

const LoginPage = ({ handleLogin, setHandleUI, error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(async () => {
      try {
        await handleLogin(email, password, remember);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center h-svh bg-linear-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl bottom-10 right-20 animate-pulse"></div>
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-emerald-500/30 rounded-3xl p-5 md:p-8 sm:p-10 w-[90%] max-w-md shadow-2xl shadow-emerald-900/30">
        <div className="flex flex-col items-center mb-6 md:mb-3">
          <h1 className="text-2xl md:text-md font-semibold text-emerald-400 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm md:text-sm mt-1">
            Please sign in to continue
          </p>
        </div>

        <form onSubmit={formHandler} className="flex flex-col w-full">
          <label className="text-gray-300 font-medium mb-1 md:text-[15px]">
            Email
          </label>
          <input
            className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 mb-4 text-lg md:text-[15px] rounded-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
          />

          <label className="text-gray-300 font-medium mb-1 md:text-[15px]">
            Password
          </label>
          <div className="relative mb-4">
            <input
              className="bg-gray-900 border border-emerald-500/40 text-gray-200 py-2 px-4 pr-10 text-lg md:text-[15px] rounded-full w-full outline-none focus:border-emerald-400 transition-colors placeholder:text-gray-400"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute mt-3 md:mt-2.5 right-4 text-gray-500 hover:text-emerald-400"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center space-x-2 text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-emerald-500"
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowForgot(true);
              }}
              className="text-emerald-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm mb-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`flex justify-center items-center gap-2 px-6 py-2 text-lg md:px-3 md:py-2 md:text-[15px] text-black rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-900/30 cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && <Loader2 className="animate-spin" size={20} />}
            {loading ? "Logging in..." : "Log in"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setHandleUI("Create")}
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Signup
            </button>
          </p>
        </form>
      </div>
      {showForgot && (
        <ForgotPasswordModal
          show={showForgot}
          onClose={() => setShowForgot(false)}
        />
      )}
    </div>
  );
};

export default LoginPage;
