import React from 'react'
import Image from "next/image"

import Register from "../../public/images/register.png"
const Setup = () => {
  return (
    <div className='bg-[#E8F7FD] py-12'>
        <div className='w-[80%] flex flex-col md:flex-row space-y-4 justify-between m-auto'>

            <div className='flex flex-col space-y-8 w-full justify-center md:w-1/2'>
                <p className='font-semibold text-2xl md:text-3xl max-w-md'>How to Set up a free account on Paidley with no hassle or Stress</p>
                <p className=' text-[#4C5561] text-lg max-w-md'>Free USD, GBP and EUR accounts for all your international transactions</p>
                    <button className='btn'>Get Started</button>
            </div>
            <div className='cursor-pointer w-full md:w-1/2'>
              <Image
                width={0}
                height={0}
                src={Register}
                alt=""
              />

            </div>
        </div>
        
    </div>
  )
}

export default Setup