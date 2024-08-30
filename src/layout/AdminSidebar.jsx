import { createContext, useContext, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";
import { ArrowLeft } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../components/ui/dropdown-menu";

const SidebarContext = createContext()

// eslint-disable-next-line react/prop-types
const AdminSidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true)
    const user = useSelector(useCurrentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col gap-10 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* Header */}
                    <div className={`overflow-hidden transition-all w-0  ${expanded ? "w-32" : "w-0"
                        }`}>
                        {/* <FaUser size={40} className="text-grayText" />
                        <p className="font-semibold text-grayText">User</p> */}
                        <div className="flex justify-center items-center">
                            {/* w-fit */}
                            <Link to='/' className="w-fit flex items-center justify-between gap-4 bg-primary hover:bg-primary/80 text-grayText font-medium py-2 px-3 rounded-full ease-in-out duration-100">
                                <ArrowLeft />
                                Back
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-grayText hover:bg-grayText/80 transition-all duration-100"
                    >
                        {expanded ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 space-y-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex items-center justify-center p-3">
                    <FaUser size={40} className="text-grayText" />
                    <div
                        className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
                    >
                        <div className="">
                            <h4 className="font-semibold text-grayText text-xl">{user?.name}</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <FiMoreVertical size={20} className="text-grayText" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel onClick={handleLogout}>Logout</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </nav>
        </aside>
    )
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({ icon, text, active, alert, link }) {
    const { expanded } = useContext(SidebarContext)

    return (
        <Link
            to={link}
            className={`
          relative flex items-center justify-center ${expanded ? 'py-2 px-3' : 'py-0 px-0'} my-1
          font-medium rounded-md cursor-pointer
          transition-colors group bg-grayText
          ${active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
      `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                    }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-secondary ${expanded ? "" : "top-2"
                        }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-grayText text-secondary text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
                >
                    {text}
                </div>
            )}
        </Link>
    )
}

export default AdminSidebar