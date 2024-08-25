import { motion } from 'framer-motion'
import aboutImg from '../assets/Your_paragraph_text__1_-removebg-preview-removebg-preview.png'
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
const About = () => {
    return (
        // w-full h-[calc(100vh-8ch)]
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
                                    About Us
                                </motion.h1>
                                <motion.h1 className='text-lg md:text-2xl text-center md:text-left font-normal text-grayText'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                                >
                                    At <span className='text-accent font-bold'>PlayTime Hub</span>, our mission is to empower sports enthusiasts by making it simple and convenient to find and book the perfect sports facilities. We believe in fostering a community where everyone, from casual players to dedicated athletes, has easy access to quality venues. Our core values are accessibility, reliability, and community engagement, as we strive to create a seamless experience for all users.
                                    {/* . We offer a wide range of sports and facilities to fullfil your need. */}
                                </motion.h1>
                            </motion.div>

                            <motion.button className='booking-btn'>
                                Book Now
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className='flex-1'>
                        <img src={aboutImg} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                {/* Team */}
                <Team />

                {/* Get in touch */}
                <GetInTouch />

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;