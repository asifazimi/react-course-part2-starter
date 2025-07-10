import { useContext } from "react";
import AuthContext from "./authContext";

export const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  return (
    <div>
      <span className="mx-2">{user}</span>
      {user ? (
        <a
          onClick={() => dispatch({ type: "LOGOUT", username: user })}
          href="#"
        >
          Logout
        </a>
      ) : (
        <a
          onClick={() =>
            dispatch({
              type: "LOGIN",
              username: "Mohammad Asif Azimi",
            })
          }
          href="#"
        >
          Login
        </a>
      )}
    </div>
  );
};

export default LoginStatus;
