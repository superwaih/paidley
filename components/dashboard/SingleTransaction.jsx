import React from 'react'

const SingleTransaction = ({transaction}) => {
    
  return (
    <div>
      <ul className='hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 py-3 border-b-2 hover:bg-[#E4F1FD] place-content-center hover:scale-105 cursor-pointer hover:rounded-md duration-300'>
        <li className='flex items-center gap-3'>
          <div className='p-3 bg-red-400 rounded-full'>SA</div>
          {transaction.fullname}
        </li>
        <li className='hidden lg:inline-block'>
          {transaction.type}
        </li>
        <li className='hidden  xl:inline-block'>
          {transaction.reference}
        </li>
        <li>
          {transaction.amount}
        </li>
        <li className='hidden lg:inline-block'>
          {transaction.time}
        </li>
        <li className={transaction.status === "Successful" ? "text-[#2DC13C]" : transaction.status === "pending" ? "text-orange-400" : "text-red-400"}>
          {transaction.status}
        </li>
      </ul>

      <ul className='flex md:hidden gap-1 justify-between'>
        <li className='flex gap-1 pb-4'>
        <div className='p-3 h-12 w-12 bg-red-400 text-white rounded-full'>SA</div>
        <div>
          <h3 className='font-semibold text'>Shey Ade</h3>
          <p className='gray-text text-[12px]'>2 Sept 2023</p>
        </div>
        </li>
        <li className='flex gap-1 '>
          <h3 className='font-bold '>NGN</h3>
          <div className='horizontal  items-end'>
            <h4>-400.00</h4>
            <p className={transaction.status === "Successful" ? "text-[#2DC13C]" : transaction.status === "pending" ? "text-orange-400" : "text-red-400"}>{transaction.status}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SingleTransaction