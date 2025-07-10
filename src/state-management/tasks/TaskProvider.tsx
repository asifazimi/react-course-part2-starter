import { useReducer } from "react";
import TaskContext from "./taskContext";

interface Props {
  children: React.ReactNode;
}

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...state];
    case "DELETE":
      return state.filter((t) => t.id !== action.taskId);
    default:
      return state;
  }
};

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
