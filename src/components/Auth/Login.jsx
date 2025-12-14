import React, { useState } from "react";
import CreateAccount from "./Signup";
import LoginPage from "./LoginPage";

const Login = ({ handleLogin, error, setError }) => {
  const [handleUI, setHandleUI] = useState("Login");
  return (
    <>
      {handleUI == "Login" && <LoginPage handleLogin={handleLogin} setHandleUI={setHandleUI} error={error} setError={setError} />}
      {handleUI == "Create" && <CreateAccount setHandleUI={setHandleUI} />}
    </>
  );
};

export default Login;
