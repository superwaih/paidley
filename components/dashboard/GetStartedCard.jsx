import { CardIcon } from '@/public/svgs/card-icon'
import { UserIcon } from '@/public/svgs/user-icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowBarUp, BsPlus } from 'react-icons/bs'
import {RxCaretRight} from "react-icons/rx"

const data = [
    {
        id: 1,
        content: "Add Money",
        Icon: BsPlus,
        href: "/dashboard/accounts"

    },
    {
        id: 2,
        content: "Transfer",
        Icon: BsArrowBarUp,
        href: "/dashboard/transfer"
    },
    {
        id: 4,
        content: "Virtual Card",
        sub: "View Card Details",
        Icon: CardIcon,
        href: "/dashboard/cards"
    },
    {
        id: 5,
        content: "Add Money",
        sub:"View Acc details",
        Icon: UserIcon,
        href: "/dashboard/accounts"
    },

]
const GetStartedCard = ({mobile}) => {
    const router = useRouter()
  return (
    <div className='grid  grid-cols-2 lg:grid-cols-4 gap-3'>
        {mobile ?  
         data.slice(0,2).map((card) =>{
            const{id, content, sub, Icon,href} = card
            return(
                <div 
                onClick={() => router.push(href)}
                key={id} className="py-3 px-2  hover:bg-[#306BB2] hover:text-white duration-300 hover:scale-105
                 cursor-pointer text-[#306BB2] border-[#306BB2] 
                border rounded-lg justify-center shadow-md  bg-[#F7FAFD] max-w-sm flex items-center gap-2">
                <div>
                   <Icon className='  text-lg' />
                </div>
                <div>
                    <h3 className='font-semibold text-sm'>{content}</h3>
                    <p className=' text-sm'>{sub}</p>
                </div>
                {sub && (<div className='flex justify-end items-end '>
                    <RxCaretRight className='text-3xl text-[#306BB1]' />
                </div>)}
                

            </div>
            )
        })
        : 
        data.map((card) =>{
            const{id, content, sub, Icon,href} = card
            return(
                <div 
                onClick={() => router.push(href)}
                key={id} className="py-4  hover:bg-[#306BB2] hover:text-white duration-300 hover:scale-105
                 cursor-pointer text-[#306BB2] border-[#306BB2] 
                border rounded-lg justify-center shadow-md  bg-[#F7FAFD] max-w-sm flex items-center gap-2">
                <div>
                   <Icon className='  text-2xl' />
                </div>
                <div>
                    <h3 className='font-bold '>{content}</h3>
                    <p className=' text-sm'>{sub}</p>
                </div>
                {sub && (<div className='flex justify-end items-end '>
                    <RxCaretRight className='text-3xl text-[#306BB1]' />
                </div>)}
                

            </div>
            )
        })
        
        }

    </div>
  )
}

export default GetStartedCard