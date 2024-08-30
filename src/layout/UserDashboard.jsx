import { Outlet } from "react-router-dom"
import UserSidebar, { SidebarItem } from "./UserSidebar"
import { MdSportsHandball, MdCreateNewFolder } from "react-icons/md";
import { LayoutDashboard } from "lucide-react";

const UserDashboard = () => {
    return (
        <div className="flex items-start justify-start">
            <header className=" bg-secondary fixed z-10">
                <UserSidebar>
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        text='Dashboard'
                        link='/user-dashboard'
                        alert
                    />
                    <SidebarItem
                        icon={<MdSportsHandball size={20} />}
                        text='My Bookings'
                        link='/user-dashboard/my-bookings'
                        alert
                    />
                    <SidebarItem
                        icon={<MdCreateNewFolder size={20} />}
                        text='Create Booking'
                        link='/user-dashboard/create-booking'
                        alert
                    />
                </UserSidebar>
            </header>
            <main className="py-8 pl-24 lg:px-52 w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default UserDashboard