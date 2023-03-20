import { CardIcon } from '@/public/svgs/card-icon'
import { UserIcon } from '@/public/svgs/user-icon'
import React from 'react'
import { BsArrowBarUp, BsPlus } from 'react-icons/bs'
import {RxCaretRight} from "react-icons/rx"

const data = [
    {
        id: 1,
        content: "Add Money",
        Icon: BsPlus
    },
    {
        id: 2,
        content: "Transfer",
        Icon: BsArrowBarUp
    },
    {
        id: 4,
        content: "Virtual Card",
        sub: "View Card Details",
        Icon: CardIcon
    },
    {
        id: 5,
        content: "Add Money",
        sub:"View Acc details",
        Icon: UserIcon
    },

]
const GetStartedCard = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
        {data.map((card) =>{
            const{id, content, sub, Icon} = card
            return(
                <div key={id} className="py-4 max-w-md
                 cursor-pointer border-[#306BB2] 
                border rounded-lg justify-center shadow-md bg-[#F7FAFD] max-w-sm flex items-center gap-2">
                <div>
                   <Icon className='text-[#306BB2] text-2xl' />
                </div>
                <div>
                    <h3 className='font-bold normal-text'>{content}</h3>
                    <p className='gray-text text-sm'>{sub}</p>
                </div>
                {sub && (<div className='flex justify-end items-end '>
                    <RxCaretRight className='text-3xl text-[#306BB1]' />
                </div>)}
                

            </div>
            )
        })}

    </div>
  )
}

export default GetStartedCard