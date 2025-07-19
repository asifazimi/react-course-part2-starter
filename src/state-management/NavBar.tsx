import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import { useTask } from "./tasks/TaskList";
import { mountStoreDevtool } from "simple-zustand-devtools";

const NavBar = () => {
  const { tasks } = useTask();
  const counter = useCounterStore((s) => s.counter);

  console.log("NavBar rendered");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <span className="badge text-bg-info">Counter: {counter}</span>
      <LoginStatus />
    </nav>
  );
};

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("NavBar Store", useCounterStore);
}

export default NavBar;
