import { createContext, useEffect, useState } from "react";
import { getLocalStorage, saveLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserDataState] = useState(() => getLocalStorage());

  const setUserData = (updater) => {
    setUserDataState((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      saveLocalStorage(next);

      return next;
    });
  };

  useEffect(() => {
    if (userData) saveLocalStorage(userData);
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
