import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
const Card = ({Icon, feature, desc}) => {
  return (
    <div className='flex rounded-md hover:scale-105 duration-300 cursor-pointer flex-col p-6 max-w-md space-y-6 shadow-md '>
        <div className='p-5 w-16 rounded-full bg-[#E7F1FD]'>
            <Icon />
        </div>
        <h3 className='font-semibold text-[18px]'>{feature}</h3>

        <p className='leading-12 text-[#4C5561]'>{desc}</p>

        <button className='text-[#306BB1] flex gap-3 max-w-[120px] items-center border-[#306BB1] border-b'>
            Read More <AiOutlineArrowRight className='' />
        </button>

    </div>
  )
}

export default Card