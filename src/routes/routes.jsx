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
import AllFacilitiesList from "../pages/AllFacilitiesList";
import ProtectedRoute from "../layout/ProtectedRoute";
import FacilityDetails from "../pages/FacilityDetails";
import AdminWelcome from "../layout/AdminWelcome";
import MakeAdmin from "../layout/MakeAdmin";
import BookingDetails from "../pages/BookingDetails";
import UserWelcome from "../layout/UserWelcome";
import Custom404 from "../components/Custom404";
import AvailChecking2 from "../pages/AvailChecking2";


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
    path: "/all-facilities-list",
    element: <ProtectedRoute>
      <AllFacilitiesList />
    </ProtectedRoute>
  },
  {
    path: "/all-facilities-list/:id",
    element: <ProtectedRoute>
      <FacilityDetails />
    </ProtectedRoute>
  },
  {
    path: "/my-bookings/:id",
    element: <BookingDetails />
  },
  {
    path: "/availability-checking/:id",
    element: <AvailChecking2 />,
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
        path: "/admin-dashboard",
        element: <AdminWelcome />,
      },
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
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
    ]
  },
  {
    path: "user-dashboard",
    element: <UserDashboard />,
    children: [
      {
        path: "/user-dashboard",
        element: <UserWelcome />,
      },
      {
        path: "my-bookings",
        element: <UserBookings />,
      },
      {
        path: "create-booking",
        element: <CreateBooking />,
      },

    ]
  },
  {
    path: "*",
    element: <Custom404 />,
  },
]);

export default routes;
