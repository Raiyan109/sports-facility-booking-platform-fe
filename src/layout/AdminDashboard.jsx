import { Outlet } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"

const AdminDashboard = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start">
            <header className="w-2/5 lg:w-1/5 bg-secondary">
                <AdminSidebar />
            </header>
            <main className="p-8 w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminDashboard