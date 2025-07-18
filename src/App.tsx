import "./App.css";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <TaskProvider>
      <NavBar />
      <HomePage />
      <Counter />
    </TaskProvider>
  );
}

export default App;
