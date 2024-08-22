import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import { Facilities } from "../pages/Facilities";
import AdminDashboard from "../layout/AdminDashboard";
import UserDashboard from "../layout/UserDashboard";
import CreateFacility from "../pages/CreateFacility";
import FacilitiesTable from "../pages/FacilitiesTable";

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
    path: "admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "facilities-table",
        element: <FacilitiesTable />,
      },
      {
        path: "create-facility",
        element: <CreateFacility />,
      },
    ]
  },
  {
    path: "user-dashboard",
    element: <UserDashboard />,
  },
]);

export default routes;
