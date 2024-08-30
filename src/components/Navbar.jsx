import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../assets/logo.png'
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector(useCurrentUser)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout())
  }
  const activeLink = 'text-primary font-bold flex items-center px-4 -mb-1 text-xl'
  return (
    <div>
      <header className="py-6 mt-3">
        <div className="flex justify-between h-8 lg:h-8 py-2 lg:py-3">
          <div className="flex gap-10">
            <Link to='/' className="flex items-center p-2 text-xl">
              <img src={logo} alt="" className="w-28 h-28 object-contain" />
            </Link>
          </div>



          <div className="gap-10  hidden lg:flex">
            <ul className="items-stretch hidden space-x-5 lg:flex text-grayText">
              <li className="flex">
                <Link to='/' className="flex items-center -mb-1 border-b-2 border-transparent relative text-[17px]">
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link to='/all-facilities-list' className="flex items-center -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  Facilities
                </Link>
              </li>
              <li className="flex">
                <Link to='/about' className="flex items-center -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  About Us
                </Link>
              </li>
              <li className="flex">
                <Link to='/contact' className="flex items-center -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  Contact Us
                </Link>
              </li>
              {user && <li className="flex">
                <Link to={user?.role === 'admin' ? `/admin-dashboard` : `/user-dashboard`} className="flex items-center -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  <button className="bg-transparent border-accent border-2 text-accent px-4 py-2 hover:shadow-lg rounded-full text-sm active:scale-95">Dashboard</button>
                </Link>
              </li>}
              <li className="flex">
                {user ?
                  <Link to='/login' className="flex items-center -mb-1">
                    <button className="bg-accent text-white px-4 py-2 hover:shadow-lg rounded-full text-sm active:scale-95" onClick={handleLogout}>Logout</button>
                  </Link>
                  :
                  <Link to='/signUp' className="flex items-center -mb-1">
                    <Button text='Sign Up' />
                  </Link>}
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center lg:hidden">
            <button className="p-4" onClick={toggleMobileMenu}>
              <BiMenuAltRight size={24} className="text-grayText" />
            </button>
          </div>
        </div>

      </header>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          // w-[450px]
          className="lg:hidden bg-secondary text-grayText mt-7 py-5 absolute  md:w-[600] top-16 inset-0 bg-opacity-60 backdrop-blur-sm z-10">
          <ul className="flex flex-col items-center space-y-3 mt-4">
            <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link to='/all-facilities-list' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-4xl leading-snug hover:underline">
                Facilities
              </Link>
            </li>
            <li className="flex">
              <Link to='/about' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-4xl leading-snug hover:underline">
                About Us
              </Link>
            </li>
            <li className="flex">
              <Link to='/contact' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-4xl leading-snug hover:underline">
                Contact Us
              </Link>
            </li>
            {user && <li className="flex">
              <Link to={user?.role === 'admin' ? `/admin-dashboard` : `/user-dashboard`} className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-4xl leading-snug hover:underline">
                Dashboard
              </Link>
            </li>}
            <li className="flex">
              {user ?
                <Link to='/login' className="flex items-center -mb-1">
                  <button className="bg-primary text-white px-12 py-2 hover:shadow-lg rounded-full text-2xl active:scale-95" onClick={handleLogout}>Logout</button>
                </Link>
                :
                <Link to='/signUp' className="flex items-center -mb-1">
                  <button className="bg-primary text-white px-12 py-2 hover:shadow-lg rounded-full text-2xl active:scale-95">Sign Up</button>
                </Link>}
            </li>
            {/* <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-5xl leading-snug hover:underline">
                Contact
              </Link>
            </li> */}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;