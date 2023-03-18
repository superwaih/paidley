import { EuroIcon } from '@/public/svgs/eur-icon'
import { NairaIcon } from '@/public/svgs/naira-icon'
import { UsdIcon } from '@/public/svgs/usd-icon'
import React from 'react'


const BalanceCard = ({type}) => {
  return (
    <div className='max-w-md p-4 bg-[#FEFEFE] shadow-md rounded-md'>
        <div className='flex justify-between'>
            {type === "naira" && (<NairaIcon />)}
            {type === "usd" && (<UsdIcon />)}
            {type === "euro" && (<EuroIcon />)}
    
        </div>
        <div className=''>
            <h3 className='gray-text'>Available Balance</h3>
            <p>300,000.00</p>
        </div>

    </div>
  )
}

export default BalanceCard