import CreateTask from "./CreateTask";
import Header from "../../Header/Header";
import AllEmployeeTask from "./AllEmployeeTask";

const AdminDashBoard = ({ name, changeUser, role }) => {
  return (
    <div className="min-h-screen p-4">
      <Header name={name} changeUser={changeUser} role={role} />
      <CreateTask />
      <AllEmployeeTask />
    </div>
  );
};

export default AdminDashBoard;
