import { EuroIcon } from '@/public/svgs/eur-icon'
import { NairaIcon } from '@/public/svgs/naira-icon'
import { UsdIcon } from '@/public/svgs/usd-icon'
import React from 'react'
import {RxCaretRight} from "react-icons/rx"


const BalanceCard = ({type}) => {
  return (
    <div className='max-w-md cursor-pointer flex flex-col space-y-4 p-4 bg-[#FEFEFE] shadow-md rounded-md'>
        <div className='flex justify-between'>
            {type === "naira" && (
            <div className='flex justify-between w-full'>
            <div className='flex gap-3 items-center'>
            <NairaIcon />
            <h5>Nigerian Naira</h5>
            </div>
            <RxCaretRight className='text-3xl text-[#306BB1]' />
            </div>
            )}
            {type === "usd" && (
            <div className='flex justify-between w-full'>
             <div className='flex gap-3 items-center'>
             <UsdIcon />
              <h5>American Dollar</h5>
             </div>
              <RxCaretRight className='text-3xl text-[#306BB1]' />
              </div>
            
            )}
            {type === "euro" && (
            <div className='flex justify-between w-full' >
             <div className='flex gap-3 items-center'>
             <EuroIcon />
              <h5>European Euros</h5>
             </div>
              <RxCaretRight className='text-3xl text-[#306BB1]' />
              </div>
            )}
    
        </div>
        <div className=''>
            <h3 className='gray-text'>Available Balance</h3>
            <p className='font-bold text-[#306BB1] text-xl'>300,000.00</p>
        </div>

    </div>
  )
}

export default BalanceCard