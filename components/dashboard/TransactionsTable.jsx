import React from 'react'
import EmptyState from './EmptyState'
import SingleTransaction from './SingleTransaction'
import { ArrowDouble } from '@/public/svgs/Arrow-double'
const mocktrans = [
    {
        id: 1,
        fullname:"Shittu Adewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "pending"

    },
    {
        id: 2,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "Successful"
    },
    {
        id: 3,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "Successful"
    },
    {
        id: 4,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "failed"
    },
    {
        id: 5,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "failed"
    },
    {
        id: 37,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "Successful"
    },
    {
        id: 49,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "failed"
    },
    {
        id: 95,
        fullname:"Shittu Adeewale",
        type: "transfer",
        reference: "#146286351894",
        amount: "(NGN) 45,000",
        time: Date.now(),
        status: "failed"
    },
]
const TransactionsTable = () => {
  return (
    <div className='w-full bg-[#FEFEFE] px-3 py-5 md:rounded-md md:shadow-md'>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 border-b-2 py-2'>

            <h3 className='text-[#4C5561] font-semibold'>Title</h3>
            <h3 className='text-[#4C5561] hiddden   font-semibold'>Type</h3>
            <h3 className='text-[#4C5561] hidden xl:inline-block font-semibold'>Reference</h3>
            <h3 className='text-[#4C5561]  font-semibold'>Amount</h3>
            <h3 className='text-[#4C5561]  lg:inline-block hidden  font-semibold'>Time</h3>
            <h3 className='text-[#4C5561] lg:inline-block hidden font-semibold'>Status</h3>

        </div>
        <div>
            {mocktrans.map((trans) =>( 
                <SingleTransaction transaction={trans} key={trans.id} />
            ))}
        </div>
        {/* <div className='flex justify-center items-center'>
            <EmptyState text={"You dont have any transaction"} Icon={ArrowDouble} />
        </div> */}
        </div>
  )
}

export default TransactionsTable