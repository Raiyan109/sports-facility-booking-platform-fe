import Footer from "../components/Footer"
import { motion } from 'framer-motion'
import contactImg from '../assets/contact.png'
import Navbar from "../components/Navbar"
import { useState } from "react"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import contactFormImg from '../assets/contact-form.jpg'
import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react"

const Contact = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("user");
    const MySwal = withReactContent(Swal);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = {

        }

        MySwal.fire({
            title: "Sign up successfully! ",
            text: "Redirecting to Login page",
            icon: "success",
        });

    };
    return (
        <div>
            <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
                <Navbar />
                <div className="flex flex-col md:flex-row relative py-32">
                    <div className="flex-1 w-full flex justify-center md:justify-between gap-12 pb-10">
                        <motion.div className='rounded-md flex justify-center items-center md:items-stretch flex-col space-y-11'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
                        >
                            <motion.div className='space-y-8'
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                            >
                                <motion.h1 className='text-5xl md:text-[100px] text-center md:text-left font-bold text-accent leading-[1.15]'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                                >
                                    Contact Us
                                </motion.h1>
                                <motion.h1 className='text-lg md:text-2xl text-center md:text-left font-normal text-grayText'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                                >
                                    We&#39;d love to hear from you
                                </motion.h1>
                            </motion.div>

                            <motion.button className='booking-btn'>
                                Book Now
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className='flex-1'>
                        <img src={contactImg} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex justify-center items-center flex-col md:flex-row relative bg-secondary mt-5 mb-20 lg:mt-10 h-auto rounded-2xl">
                    <div className="flex-1 rounded-md w-96 flex flex-col items-center py-12">
                        <h1 className=" text-3xl md:text-5xl text-grayText text-center font-bold">Get in Touch</h1>
                        {/* Mobile view */}
                        <ul className="mt-12 space-y-3 block md:hidden">
                            <li className="flex items-center">
                                <Mail className="text-grayText" size={20} />
                                <a href="#" className="text-white text-sm ml-4">
                                    support@playtimehub.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-grayText" size={20} />
                                <a href="#" className="text-white text-sm ml-4">
                                    01713160709
                                </a>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="text-grayText" size={20} />
                                <a href="#" className="text-white text-sm ml-4">
                                    123 Street 256 House
                                </a>
                            </li>
                        </ul>
                        <div className="space-y-10">
                            <ul className="mt-12 space-y-3 hidden md:block">
                                <li className="flex items-center">
                                    <Mail className="text-grayText" size={20} />
                                    <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                        support@playtimehub.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="text-grayText" size={20} />
                                    <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                        01713160709
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="text-grayText" size={20} />
                                    <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                        123 Street 256 House
                                    </a>
                                </li>
                            </ul>
                            <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
                                    <div>
                                        <label className="block mb-1 text-sm text-grayText">Email</label>
                                        <input
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-grayText">Phone</label>
                                        <input
                                            type="number"
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-grayText">Address</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    {/* w-fit */}
                                    <motion.button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100 flex items-center gap-28 justify-center">
                                        Send message
                                        <SendHorizonal />
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='hidden lg:block flex-1'>
                        <img src={contactFormImg} alt="" className='w-full h-[910px] object-cover rounded-2xl' />
                    </div>
                </div>

                {/* Google Map */}
                <div className="responsive-map mb-20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14592.428723553468!2d90.37924195918481!3d23.88581775724912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b6de8f207%3A0x638eb6830d10167d!2sSector%2010%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1724650366545!5m2!1sen!2sbd" width="600" height="450" allowFullScreen style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Contact