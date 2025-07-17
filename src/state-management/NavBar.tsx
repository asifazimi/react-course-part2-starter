import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import { useTask } from "./tasks/TaskList";

const NavBar = () => {
  const { tasks } = useTask();
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <span className="badge text-bg-info">Counter: {counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
