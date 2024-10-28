/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { authenticationStore } from "../store/authorization";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext({
  session: null,
});

export const AuthProvider = ({ children }) => {
  const getSession = authenticationStore((state) => state.getSession);
  const sessionData = getSession();
  const [session, setSession] = useState(sessionData);

  const updateSession = () => {
    setSession(getSession());
  };

  if (!session) {
    return <Navigate to="/" />;
  }

  const value = { session, updateSession };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
