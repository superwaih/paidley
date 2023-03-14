import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
const FootBanner = () => {
  return (
    <section className='bg-[#E8F7FD] '>
        <motion.div
        variants={fadeIn("down")}
        initial='hidden'
        whileInView={'show'}
        
        className='m-auto flex flex-col space-y-5 items-center justify-center text-center w-[80%] md:w-[50%] py-8'>
                <h3 className='text-2xl md:text-4xl font-semibold '>Begin to Enjoy Borderless Financial Freedom</h3>
                <p className='text-lg gray-text  max-w-md'>Open an account today with paidley to begin to enjoy the benefits</p>
                <button className='btn'>Create Account</button>
        </motion.div>

    </section>
  )
}

export default FootBanner