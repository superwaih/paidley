import React from 'react'
import Image from 'next/image'
import Logo from "../../public/svgs/logo-space.svg"
import Link from 'next/link'
import { tablinks } from '@/utils/data'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    const routePath = router.pathname
  return (
    <div className='bg-[#074DA2] hidden md:inline-block max-w-md w-[300px] py-8  h-screen rounded-r-[40px]'>
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
                    <div className={routePath.includes(href) ? 'w-full bg-[#CDDBEC]' : "w-full"} >
                <div className='flex gap-3 py-4 m-auto w-[80%]' >
                    <Icon />

                    <h3 className={routePath.includes(href) ? 'capitalize text-[#306BB1] font-bold' : 'capitalize text-[#CDDBEC]'} >{title}</h3>
                    </div> 
                    </div>
            </Link>

            )
           })}
        </div>

    </div>
  )
}

export default Sidebar