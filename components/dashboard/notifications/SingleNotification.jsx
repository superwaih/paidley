import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const SingleNotification = () => {
  return (
    <div className='flex w-full justify-between py-3'>
       

        <div className='flex gap-2'>
        <div className='bg-[#E1FFE4] p-[10px] md:py-2 md:px-4 flex items-center rounded-full'>
            <BsArrowUpRight className='text-[#0B1C3F] text-xl' />
        </div>
           <div>
           <h3 className='font-semibold'>Your USD Card got Charged</h3>
            <p className='text-[#9399A0]'>APPLE.COM/BILL www.apple.com IE</p>
            <p className='text-[#9399A0]'>2 Sept 2023, 12:30 Am</p>
           </div>
        </div>

        <div>
            <h4>USD -3.34</h4>
            <p className='text-[#37C546]'>Successful</p>

        </div>



    </div>
  )
}

export default SingleNotification