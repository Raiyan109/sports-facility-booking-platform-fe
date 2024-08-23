import { createContext, useContext, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarContext = createContext()

// eslint-disable-next-line react/prop-types
const UserSidebar = ({ children }) => {

    const [expanded, setExpanded] = useState(true)

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* Header */}
                    <div className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                        }`}>
                        <FaUser size={40} className="text-grayText" />
                        <p className="font-semibold text-grayText">User</p>
                    </div>
                    <hr />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <FiMoreVertical size={20} />
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
          relative flex items-center py-2 px-3 my-1
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
            bg-indigo-100 text-indigo-800 text-sm
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

export default UserSidebar