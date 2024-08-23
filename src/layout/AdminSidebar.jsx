import { MdAdminPanelSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";

const AdminSidebar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className="space-y-5 p-8 flex flex-col justify-between h-full md:h-[calc(100vh-98px)]">
            <div>
                {/* Header */}
                <div className="mb-5">
                    <MdAdminPanelSettings size={40} className="text-grayText" />
                    <p className="font-semibold text-grayText">Admin</p>
                </div>
                <hr />
                <ul className="space-y-5 pt-5">
                    <li>
                        <NavLink to='/admin-dashboard/facilities-table' className={({ isActive }) => isActive ? 'text-grayText font-bold underline' : 'text-grayText'}>All Facilities</NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-dashboard/create-facility' className={({ isActive }) => isActive ? 'text-grayText font-bold underline' : 'text-grayText'}>Create Facility</NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-dashboard/all-bookings' className={({ isActive }) => isActive ? 'text-grayText font-bold underline' : 'text-grayText'}>All Bookings</NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className="mb-3">
                <Link to='/login'>
                    <button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100" onClick={handleLogout}>Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default AdminSidebar