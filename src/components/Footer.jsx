import { FaMapPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-secondary text-grayText">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0  ">
                        <img src={Logo} alt="" className='w-20 h-20 object-contain' />
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <Link to='/about'>
                            About Us
                        </Link>
                        <Link to='/contact'>
                            Contact Us
                        </Link>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer