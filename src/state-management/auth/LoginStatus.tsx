import useAuthStore from "./AuthStore";

const LoginStatus = () => {
  const { user, logout, login } = useAuthStore();

  return (
    <div>
      <span className="mx-2">{user}</span>
      {user ? (
        <a onClick={logout} href="#">
          Logout
        </a>
      ) : (
        <a onClick={() => login("Mohammad Asif Azimi")} href="#">
          Login
        </a>
      )}
    </div>
  );
};

export default LoginStatus;
