import { Outlet } from "react-router-dom"

import { MdSportsHandball, MdCreateNewFolder } from "react-icons/md";
import AdminSidebar, { SidebarItem } from "./AdminSidebar";
import { BookCheck, LayoutDashboard } from "lucide-react";

const AdminDashboard = () => {
    return (
        <div className="flex items-start justify-start">
            <header className=" bg-secondary fixed z-10">
                <AdminSidebar>
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        text='Dashboard'
                        link='/admin-dashboard'
                        alert
                    />
                    <SidebarItem
                        icon={<MdSportsHandball size={20} />}
                        text='All Facilities'
                        link='/admin-dashboard/facilities-table'
                        alert
                    />
                    <SidebarItem
                        icon={<MdCreateNewFolder size={20} />}
                        text='Create Facility'
                        link='/admin-dashboard/create-facility'
                        alert
                    />
                    <SidebarItem
                        icon={<BookCheck size={20} />}
                        text='Booking Management'
                        link='/admin-dashboard/all-bookings'
                        alert
                    />
                </AdminSidebar>
            </header>
            <main className="py-8 pl-24 lg:px-52 w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminDashboard