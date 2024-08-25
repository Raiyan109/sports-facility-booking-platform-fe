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
import AllBookings from "../components/AllBookings";
import CreateBooking from "../pages/CreateBooking";
import UserBookings from "../pages/UserBookings";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
      {
        path: "all-bookings",
        element: <AllBookings />,
      },
    ]
  },
  {
    path: "user-dashboard",
    element: <UserDashboard />,
    children: [
      {
        path: "/user-dashboard",
        element: <UserBookings />,
      },
      {
        path: "create-booking",
        element: <CreateBooking />,
      },

    ]
  },
]);

export default routes;
