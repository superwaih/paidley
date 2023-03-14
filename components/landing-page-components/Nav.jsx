import React, { useState } from 'react'
import Logo from "../../public/svgs/logo.svg"
import { NGicon } from "../../public/svgs/ng.js"
import Link from 'next/link'
import { Menu } from '@headlessui/react'

import Image from 'next/image'
import { MenuIcon } from '@/public/svgs/MenuIcon'
import Example from './Dropdown'
import {AiOutlineClose} from "react-icons/ai"
import MobileNav from './MobileNav'



const Nav = () => {
    const[toggleNav, setToggleNav] = useState(false)
  return (

    <nav className='m-auto relative w-[80%] bg-mainBg  flex py-4 justify-between items-center'>
        <div className="logo cursor-pointer">
           <Link href="/"> 
           <Image
                width={0}
                height={0}
                src={Logo}
                alt=""
            />
           </Link>

        </div>
        <div className="links hidden lg:inline-block">
            <ul className='flex justify-between py-3 items-center gap-8 '>
              
                <li className="normal-text cursor-pointer text-[16px] hover:text-brand-blue">
                    <Example />
                
                </li>
                <li className="normal-text cursor-pointer text-[16px] hover:text-brand-blue" >
                <Link href="/about-us">
                    About Us
                </Link>
                </li>
                <li className="normal-text cursor-pointer text-[16px] hover:text-brand-blue">
                <Link href="/support">
                    Support
                </Link>
                </li>
    
                <li className="normal-text cursor-pointer text-[16px] hover:text-brand-blue">
                <Link href="/faq">
                FAQs
                </Link>
                </li>

            </ul>
        </div>

        <div className="register hidden lg:flex gap-3">
            <button className='bg-[#FAFAFA] border-[#306BB2] border-[1px] px-5 py-3 rounded-[12px]'>Sign in</button>
           <div className='flex gap-2 justify-center items-center'>
            <NGicon />
           <select className='py-4 bg-inherit cursor-pointer' name="country" id="">
                <option value="">
                    NG</option>
            </select>
           </div>
        </div>

        <div 
        onClick={()=> setToggleNav(!toggleNav)}
        className='lg:hidden cursor-pointer'>
            {toggleNav ? <AiOutlineClose className='text-3xl text-center text-brand-color ' /> : <MenuIcon className="cursor-pointer" />}
            
        </div>
       {toggleNav && (<MobileNav />)} 

    </nav>
  )
}

export default Nav