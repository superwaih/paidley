import React, { useState } from 'react'
import {BsChevronDown, BsChevronRight} from "react-icons/bs"
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Link from 'next/link'
const MobileNav = () => {
    const [toggleFeature, setTogglefeature] = useState(false)
  return (
    <motion.div 
    initial='hidden'
    whileInView={'show'}
     variants={fadeIn("left")} 
    
    className='bg-[#CDDBEC] items-center justify-center flex lg:hidden w-[200px]  py-6 px-7  absolute top-[100%] rounded-md left-[33%] sm:left-[73%] md:left-[78%] '>
        <ul className='horizontal space-y-12'>
            <li 
            onClick={() => setTogglefeature(!toggleFeature)}
            className='font-semibold cursor-pointer flex gap-3 items-center'>Features 
            {toggleFeature ? <BsChevronRight className='font-semibold text-lg' /> : <BsChevronDown className='font-semibold text-lg' /> }
            
            </li>
            {toggleFeature && (
               
                <ul className='flex flex-col gap-3'>
                    <li className='text-[12px] text-[#011A32]'>
                    <Link href="/features">
                        Card
            </Link>
                    </li>
                    <li className='text-[12px] text-[#011A32]'>
                    <Link href="/features/transfer">
                        Transfer
            </Link>
                    </li>
                    <li className='text-[12px] text-[#011A32]'>
                    <Link href="/features/convert">
                        Foreign Accounts
            </Link>
                    </li>
                    <li className='text-[12px] text-[#011A32]'>
                    <Link href="/features/virtual">
                        Virtual Account
            </Link>
                    </li>
                </ul>
              
            )}
            
            <li className='font-semibold'>
            <Link href="/support">
                Contact us
            </Link>
            </li>
            <li className='font-semibold'>
            <Link href="/about-us">
                About Us
            </Link>
            </li>
            <li className='font-semibold'>
            <Link href="/faq">
                FAQs
            </Link>
            </li>

        </ul>
   
    </motion.div>
  )
}

export default MobileNav