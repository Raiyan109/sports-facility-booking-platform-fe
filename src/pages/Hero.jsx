import { motion } from 'framer-motion'
import heroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        // w-full h-[calc(100vh-8ch)]
        <div className="flex flex-col md:flex-row relative h-screen py-32">
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
                            Book Your Facility
                        </motion.h1>
                        <motion.h1 className='text-lg md:text-2xl text-center md:text-left font-normal text-grayText'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                        >
                            Find and book your sport facility with just a few clicks.
                            {/* . We offer a wide range of sports and facilities to fullfil your need. */}
                        </motion.h1>
                    </motion.div>

                    <Link to='/all-facilities-list'>
                        <motion.button className='booking-btn'>
                            Book Now
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            <div className='flex-1'>
                <img src={heroImg} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default Hero;