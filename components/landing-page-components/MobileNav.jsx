import React, { useState } from 'react'
import {BsChevronDown, BsChevronRight} from "react-icons/bs"
const MobileNav = () => {
    const [toggleFeature, setTogglefeature] = useState(false)
  return (
    <div className='bg-[#CDDBEC] lg:hidden w-full  py-6 px-7  absolute top-[100%] rounded-md left-[70%] right-4'>
        <ul className='horizontal space-y-8'>
            <li 
            onClick={() => setTogglefeature(!toggleFeature)}
            className='font-semibold cursor-pointer flex gap-3 items-center'>Features 
            {toggleFeature ? <BsChevronRight className='font-semibold text-lg' /> : <BsChevronDown className='font-semibold text-lg' /> }
            
            </li>
            {toggleFeature && (
               
                <ul className='flex flex-col gap-3'>
                    <li className='text-[12px] text-[#011A32]'>Card</li>
                    <li className='text-[12px] text-[#011A32]'>Transfer</li>
                    <li className='text-[12px] text-[#011A32]'>Convert Currency</li>
                    <li className='text-[12px] text-[#011A32]'>Virtual Account</li>
                </ul>
              
            )}
            <li className='font-semibold'>Contact Us</li>
            <li className='font-semibold'>About us</li>
            <li className='font-semibold'>FAQs</li>

        </ul>
   
    </div>
  )
}

export default MobileNav