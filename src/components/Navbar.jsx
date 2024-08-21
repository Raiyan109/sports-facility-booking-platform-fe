import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeLink = 'text-primary font-bold flex items-center px-4 -mb-1 text-xl'
  return (
    <div>
      <header className="py-6 mt-3">
        <div className="flex justify-between h-8 lg:h-8 py-2 lg:py-3">
          <div className="flex gap-10">
            <Link to='/' className="flex items-center p-2 font-anton text-xl">
              <img src={logo} alt="" className="w-20 h-20 object-contain" />
            </Link>
          </div>



          <div className="gap-10  hidden lg:flex">
            <ul className="items-stretch hidden space-x-3 lg:flex text-grayText">
              <li className="flex">
                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-[17px]">
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link to='/about' className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  About
                </Link>
              </li>
              <li className="flex">
                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  Services
                </Link>
              </li>
              <li className="flex">
                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  Class Schedules
                </Link>
              </li>
              <li className="flex">
                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]">
                  Contact
                </Link>
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
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-5xl leading-snug hover:underline">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-5xl leading-snug hover:underline">
                Goals
              </Link>
            </li>
            <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-5xl leading-snug hover:underline">
                Services
              </Link>
            </li>
            <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-5xl leading-snug hover:underline">
                Class Schedules
              </Link>
            </li>
            <li className="flex">
              <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-grayText border-blue-600 text-5xl leading-snug hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;