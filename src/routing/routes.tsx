import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/detail", element: <UserDetailPage /> },
]);

export default router;
