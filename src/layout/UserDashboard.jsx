import { Outlet } from "react-router-dom"
import UserSidebar, { SidebarItem } from "./UserSidebar"
import { MdSportsHandball, MdCreateNewFolder } from "react-icons/md";

const UserDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-start justify-start">
            <header className=" bg-secondary">
                <UserSidebar>
                    <SidebarItem
                        icon={<MdCreateNewFolder size={20} />}
                        text='Create Booking'
                        link='/user-dashboard/create-booking'
                        alert
                    />
                </UserSidebar>
            </header>
            <main className="p-8 bg-secondary w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default UserDashboard