import React from 'react'

const Card = ({Icon, feature, desc}) => {
  return (
    <div className='flex flex-col space-y-6 shadow-md '>
        <div className='p-4 rounded-full bg-[#E7F1FD]'>
            <Icon />
        </div>
        <h3>{feature}</h3>

        <p className='leading-12'>{desc}</p>

        <button className='text-[#306BB1] border-[#306BB1] border-b'>
            Read More
        </button>

    </div>
  )
}

export default Card