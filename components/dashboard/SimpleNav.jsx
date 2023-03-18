import React from 'react'

const SimpleNav = ({page, user}) => {
  return (
    <div className='flex justify-between'>
          <h3 className='font-semibold normal-text text-xl'>Accounts</h3>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-brand-blue'></div>
            <p>John Okafor</p>
          </div>
        </div>
  )
}

export default SimpleNav