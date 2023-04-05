import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/svgs/logo.svg"
import Link from 'next/link'
import { tablinks } from '@/utils/data'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import {CiLogout} from "react-icons/ci"

const MobileSidebar = () => {
    const router = useRouter()
    const routePath = router.pathname
  return (
    <motion.div 
    initial='hidden'
    whileInView={'show'}
    variants={fadeIn("right")} 

    className='bg-white bottom-0 shadow-md py-8 left-0 top-0  md:hidden max-w-3xl  w-[30px]   h-screen absolute'>
    <div className='m-auto flex-1 w-[80%]'>
        <Image
            width={0}
            height={0}
            src={Logo}
            alt=""
        />
    </div>

    <div className='w-full py-[80px] flex flex-col space-y-4'>
       {tablinks.map((link) => {
         const{id, href, title, icon:Icon } = link
        
        return(
            <Link href={href} key={id}>
                <div className={routePath.includes(href) ? 'w-full bg-[#E8F7FD]' : "w-full"} >
            <div className='flex gap-3 py-4 m-auto w-[80%]' >
                <Icon />

                <h3 className={routePath.includes(href) ? 'capitalize text-[#306BB1] font-bold' : 'capitalize text-black'} >{title}</h3>
                </div> 
                </div>
        </Link>

        )
       })}
    </div>

    <div className='flex w-full px-4 items-center gap-4'>
        <CiLogout className='rotate-180 text-2xl normal-text' />
        <span className='normal-text text-xl'>Log out</span>
    </div>

</motion.div>
  )
}

export default MobileSidebar