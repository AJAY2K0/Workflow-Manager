import { useContext, useState } from "react";

import CreateEmployeeModal from "../Dashboard/Admin/CreateEmployeeModal";
import CreateEmployee from "../ConfirmationModal/CreateEmployee";
import Logout from "../ConfirmationModal/Logout";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ name, changeUser, role }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showCreateEmployee, setShowCreateEmployee] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newEmployee, setNewEmployee] = useState("");

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("loggedInUser");
      setUserData((prev) => {
        const { loggedInUserData, employeesOfAdmin, ...rest } = prev;
        return rest;
      });
      changeUser("");
    }, 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-linear-to-br from-gray-900/90 to-black/90 backdrop-blur-md border border-gray-800 px-6 py-4 md:py-3 rounded-2xl shadow-lg shadow-black/30 mb-5 w-full">
        <div>
          <h2 className="font-medium font-serif text-gray-300 text-lg md:text-xl">
            Hello 👋
          </h2>
          <h1 className="font-serif text-[20px] md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 tracking-wide">
            {name}
          </h1>
        </div>

        <div className="flex gap-3 md:gap-5">
          {role == "Admin" ? (
            <button
              onClick={() => setShowCreateEmployee(true)}
              className="text-white text-[12px] md:text-lg font-light bg-linear-to-r from-blue-600 to-cyan-600 md:px-3 md:py-1 px-2 rounded-lg shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 cursor-pointer hover:scale-107 transition-transform duration-150 hover:border border-white"
            >
              Add Employee
            </button>
          ) : (
            ""
          )}

          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="text-white text-[12px] md:text-lg font-light bg-linear-to-r from-red-600 to-red-500 md:px-3 md:py-1 p-2 rounded-lg shadow-md shadow-red-500/30 hover:shadow-red-500/50 cursor-pointer hover:scale-107 transition-transform duration-150 hover:border border-white"
          >
            Logout
          </button>
        </div>
      </div>

      {showCreateEmployee && (
        <CreateEmployeeModal
          showModal={showCreateEmployee}
          setShowModal={setShowCreateEmployee}
          setShowConfirm={setShowConfirm}
          setEmployeeName={setNewEmployee}
        />
      )}

      {showConfirm && (
        <CreateEmployee onClose={setShowConfirm} employeeName={newEmployee} />
      )}

      {showLogoutConfirm && (
        <Logout
          handleLogout={handleLogout}
          setShowLogoutConfirm={setShowLogoutConfirm}
          loading={loading}
        />
      )}
    </>
  );
};

export default Header;
