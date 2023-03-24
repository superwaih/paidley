import React from 'react'
import {BiCopy} from "react-icons/bi"
const AccountBalanceCard = () => {
  return (
    <div className='px-8 horizontal'>
        <div className='flex py-8 w-full justify-between'>
            <div className='flex flex-col space-y-4'>
                <h4 className='text-lg gray-text'>Balance</h4>
                <p className='font-bold text-2xl '>200.34</p>
            </div  >
            <div className='flex flex-col space-y-4'>
                <h3 className='text-lg gray-text'>Type</h3>
                <select className='p-4 border-brand-color border rounded-[12px]' name="" id="">
                    <option value="naira">Nigerian Naira</option>
                    <option value="">American Dollar</option>
                    <option value="">Bristish Pound</option>

                </select>
            </div>

        </div>
        <div className='rounded-md px-3 border py-6 shadow-md'>
           <h3 className='font-semibold pb-5 text-xl gray-text'>Account Details</h3> 
           <div>
      <div className='grid grid-cols-1  lg:grid-cols-3 gap-4'>
      <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Account holder's name</h3>
            <p className='font-semibold '>John Okafor</p>
        </div>
        <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Account Number</h3>
            <p className='font-semibold '>212 7434 628 49</p>
        </div>
          <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>IBAN</h3>
            <p className='font-semibold '>GVDUKH56XXXX</p>
        </div>

        <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Swift Code</h3>
            <p className='font-semibold '>GVDUKH56XXXX</p>
        </div>

        <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Wire routing</h3>
            <p className='font-semibold '>783466238</p>
        </div>

        <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Bank name</h3>
            <p className='font-semibold '>Silvergate bank</p>
        </div>

        <div className='horizontal space-y-2 '>
            <h3 className='gray-text text-sm'>Address</h3>
            <p className='font-semibold '>133 Joshua Avenue, Georgia, G4675 Europe.</p>
        </div>
      </div>
        <div className='flex justify-end items-end'>
            <button className='flex items-center gap-2 text-brand-color'>
               <BiCopy /> Copy details
            </button>
        </div>
           </div>
        </div>
    </div>
  )
}

export default AccountBalanceCard