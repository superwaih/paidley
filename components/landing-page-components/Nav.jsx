import React from 'react'
import Logo from "../../public/svgs/logo.svg"
import { NGicon } from "../../public/svgs/ng.js"
import Link from 'next/link'

import Image from 'next/image'
import { MenuIcon } from '@/public/svgs/MenuIcon'
const Nav = () => {
  return (
    <nav className='m-auto w-[80%] bg-mainBg  flex py-4 justify-between'>
        <div className="logo">
            <Image
                width={0}
                height={0}
                src={Logo}
                alt=""
            />

        </div>
        <div className="links hidden lg:inline-block">
            <ul className='flex justify-between py-3 items-center gap-8 '>
              
                <li className="normal-text cursor-pointer text-[16px] hover:text-brand-blue">
                <Link href="/features">
                Features
                </Link>
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
           <select className='py-4' name="country" id="">
                <option value="">
                    NG</option>
            </select>
           </div>
        </div>

        <div className='lg:hidden'>
            <MenuIcon />
        </div>

    </nav>
  )
}

export default Nav