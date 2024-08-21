import { Outlet } from "react-router-dom"
import UserSidebar from "./UserSidebar"


const UserDashboard = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start">
            <header className="w-2/5 lg:w-1/5 bg-secondary">
                <UserSidebar />
            </header>
            <main className="p-8 bg-secondary w-full">
                <p>For admin content</p>
                <Outlet />
            </main>
        </div>
    )
}

export default UserDashboard