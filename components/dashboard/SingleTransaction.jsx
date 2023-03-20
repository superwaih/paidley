import React from 'react'

const SingleTransaction = ({transaction}) => {
    
  return (
    <div>
      <ul className='grid grid-cols-6 py-3 border-b-2 hover:bg-[#E4F1FD] hover:scale-105 cursor-pointer hover:rounded-md duration-300'>
        <li className='flex items-center gap-3'>
          <div className='p-3 bg-red-400 rounded-full'>SA</div>
          {transaction.fullname}
        </li>
        <li>
          {transaction.type}
        </li>
        <li>
          {transaction.reference}
        </li>
        <li>
          {transaction.amount}
        </li>
        <li>
          {transaction.time}
        </li>
        <li className={transaction.status === "Successful" ? "text-[#2DC13C]" : transaction.status === "pending" ? "text-orange-400" : "text-red-400"}>
          {transaction.status}
        </li>
      </ul>
    </div>
  )
}

export default SingleTransaction