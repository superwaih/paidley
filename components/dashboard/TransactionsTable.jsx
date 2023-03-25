import React from 'react'
import EmptyState from './EmptyState'
import SingleTransaction from './SingleTransaction'

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
]
const TransactionsTable = () => {
  return (
    <div className='w-full bg-[#FEFEFE] px-3 py-5 md:rounded-md md:shadow-md'>
        <div className='hidden md:grid grid-cols-6 border-b-2 py-2'>

            <h3 className='text-[#4C5561] font-semibold'>Title</h3>
            <h3 className='text-[#4C5561] font-semibold'>Type</h3>
            <h3 className='text-[#4C5561] font-semibold'>Reference</h3>
            <h3 className='text-[#4C5561] font-semibold'>Amount</h3>
            <h3 className='text-[#4C5561] font-semibold'>Time</h3>
            <h3 className='text-[#4C5561] font-semibold'>Status</h3>

        </div>
        {/* <div>
            {mocktrans.map((trans) =>( 
                <SingleTransaction transaction={trans} key={trans.id} />
            ))}
        </div> */}
        <div className='flex justify-center items-center'>
            <EmptyState />
        </div>
        </div>
  )
}

export default TransactionsTable