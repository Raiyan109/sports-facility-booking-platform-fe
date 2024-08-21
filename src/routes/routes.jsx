import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import { Facilities } from "../pages/Facilities";
import AdminDashboard from "../layout/AdminDashboard";
import UserDashboard from "../layout/UserDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "adminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "userDashboard",
    element: <UserDashboard />,
  },
]);

export default routes;
