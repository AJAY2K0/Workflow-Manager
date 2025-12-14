import "./App.css";
import Login from "../src/components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard.jsx";
import AdminDashBoard from "./components/Dashboard/Admin/AdminDashBoard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";
import { getLocalStorage } from "./utils/localStorage.jsx";

function App() {
  const [user, setUser] = useState({
    role: "",
    data: "",
  });
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    setLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    let employeesOfAdmin;
    if (userData) {
      const adminData = userData.admin.find(
        (e) => email == e.email && e.password == password
      );
      if (adminData) {
        employeesOfAdmin = userData.employees.filter(
          (e) => e.adminId === adminData.adminId
        );
      }
      const employeeData = userData.employees.find(
        (e) => email == e.email && e.password == password
      );

      if (adminData) {
        const loggedIn = { role: "Admin", data: adminData };
        localStorage.setItem("loggedInUser", JSON.stringify(loggedIn));
        setUserData((prev) => ({
          ...prev,
          loggedInUserData: adminData,
          employeesOfAdmin: employeesOfAdmin,
        }));
        setUser(loggedIn);
      } else if (employeeData) {
        const loggedIn = { role: "Employee", data: employeeData };
        localStorage.setItem("loggedInUser", JSON.stringify(loggedIn));

        setUserData((prev) => {
          const { employeesOfAdmin, ...rest } = prev;
          return {
            ...rest,
            loggedInUserData: employeeData,
          };
        });
        setUser(loggedIn);
      } else {
        setError("invalid credentials");
      }
    } else {
      return;
    }
  };
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-blue-700 rounded-full animate-spin"></div>
        </div>
        <p className="mt-6 text-lg font-medium animate-pulse">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#111] font-mono">
        {!user.role ? (
          <Login handleLogin={handleLogin} error={error} setError={setError} />
        ) : (
          ""
        )}
        {user.role == "Admin" ? (
          <AdminDashBoard
            changeUser={setUser}
            name={user.data.name}
            role={user.role}
          />
        ) : (
          ""
        )}
        {user.role == "Employee" ? (
          <EmployeeDashboard
            changeUser={setUser}
            name={user.data.name}
            role={user.role}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
