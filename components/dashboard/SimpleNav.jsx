import { MenuIcon } from '@/public/svgs/MenuIcon'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const SimpleNav = ({title, user}) => {
   const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='flex  justify-between md:flex-row  items-center pt-4  md:px-6'>
          <h3 className='font-semibold hidden md:inline-block capitalize normal-text text-xl'>{title}</h3>
          <div className='flex items-center gap-1 md:gap-2'>
            <div className='md:w-12 w-8 h-8 md:h-12 rounded-full bg-brand-blue'></div>
            <p className='font-semibold' >John Okafor</p>
          </div>
          <div onClick={() => setShowMenu(!showMenu)} className='md:hidden flex'>
         {showMenu ? <AiOutlineClose className='text-brand-color text-2xl' /> :  <AiOutlineMenu className='text-brand-color text-2xl' />}
          </div>
        </div>
  )
}

export default SimpleNav