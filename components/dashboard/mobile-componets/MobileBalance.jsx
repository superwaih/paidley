import React from 'react'

const MobileBalance = () => {
  return (
    <div className='bg-balanceBg px-6 p-4 bg-cover flexible md:hidden text-white items-center space-y-5 rounded-[15px]'>

        <h3 className='text-xl'>Account Balance</h3>
        <p className=''><span className='text-md'>NGN</span><span className='text-3xl'> 0000000000</span></p>
        <select className='bg-[#CDE6FE] normal-text px-4 py-3 rounded-md' name="" id="">
            <option value="">Naira Account</option>
        </select>
    </div>
  )
}

export default MobileBalance