import { ArrowDouble } from '@/public/svgs/Arrow-double'
import React from 'react'

const EmptyState = ({text, Icon}) => {
  return (
    <div className=' flex flex-col justify-center items-center cursor-pointer py-12'>
       <div className='rounded-full bg-[#EAF0F6] p-4'>
       <Icon className="text-[#ACC4E0] text-2xl" />
       </div>
        <p className='gray-text text-center text-lg'>{text}</p>
    </div>
  )
}

export default EmptyState