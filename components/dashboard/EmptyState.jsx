import { ArrowDouble } from '@/public/svgs/Arrow-double'
import React from 'react'

const EmptyState = () => {
  return (
    <div className=' flex flex-col justify-center items-center py-8'>
       <div className='rounded-full bg-[#EAF0F6] p-4'>
       <ArrowDouble />
       </div>
        <p className='gray-text'>You dont have any transaction</p>
    </div>
  )
}

export default EmptyState