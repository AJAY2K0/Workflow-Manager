import { useContext } from "react";
import Header from "../../Header/Header";
import TaskNumber from "./TaskNumber";
import TaskList from "./TaskList";
import { AuthContext } from "../../../context/AuthProvider";

const EmployeeDashboard = ({ changeUser, name, role }) => {
  const [userData, setUserData] = useContext(AuthContext);

  let employeeData;

  userData.employees.map((emp) => {
    if (emp.name == name) {
      employeeData = { ...emp };
    }
  });
  return (
    <>
      <div className="p-4 min-h-screen">
        <Header name={name} changeUser={changeUser} role={role} />

        <TaskNumber data={employeeData} />

        <TaskList data={employeeData} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
