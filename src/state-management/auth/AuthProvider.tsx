import React, { useReducer } from "react";
import AuthContext from "./authContext";

export interface Props {
  children?: React.ReactNode;
}

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
  username: string;
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username || "User";
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
