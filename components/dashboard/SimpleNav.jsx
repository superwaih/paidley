import React from 'react'

const SimpleNav = ({title, user}) => {
  return (
    <div className='flex  justify-between pt-4 px-6'>
          <h3 className='font-semibold capitalize normal-text text-xl'>{title}</h3>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-brand-blue'></div>
            <p>John Okafor</p>
          </div>
        </div>
  )
}

export default SimpleNav