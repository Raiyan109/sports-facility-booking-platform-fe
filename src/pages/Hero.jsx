import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col relative hero ">
            <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
                <motion.div className='w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
                >
                    <motion.div className='space-y-5'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                    >
                        <motion.h1 className='text-7xl font-bold text-neutral-50 leading-[1.15]'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                        >
                            Book The
                            <span className='text-violet-400 tracking-wider'> Sport </span>
                            Facilities
                        </motion.h1>
                        <motion.h1 className='text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                        >
                            Find and book your sport facility with just a few clicks. We offer a wide range of sports and facilities to fullfil your need.
                        </motion.h1>
                    </motion.div>

                    <motion.button className='booking-btn'>
                        Book Facility Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;