import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { useRouter } from 'next/router'
import React from 'react'

const SendMoney = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const router = useRouter()
  return (
    <DashboardLayout >
        <SimpleNav title={"transfer"} />
          <div className='flex px-8 justify-center items-center  w-full'>
          <div className='flex mt-[20px] md:mt-[110px] max-w-lg rounded-md border  hover:[#F3F7FA] bg-white  px-6 py-4 flex-col space-y-6 rouned-md shadow-md '>
            <h3 className='font-bold  text-xl'>Send Money</h3>
            <p className='gray-text '>Fill details below to send money to beneficiary.</p>


           <form className='flex  flex-col ' onSubmit={handleSubmit}>

           <div className=" flex w-full flex-col space-y-3 ">
              <label className="text-[#444A58]" htmlFor="firstname">
                Bank Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
               Account No
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Account Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Bank Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Bank Name
              </label>
              <input type="text" className="input-gray" />
            </div>
           </form>

          
            <div className='flex flex-col gap-4'>
                    <button className='btn-full rounded-[12px]'>Transfer</button>
                    <button 
                     onClick={() => router.back()}
                    className='text-[#306BB1] flex w-full justify-center font-semibold items-center text-center'>Cancel and go back</button>
              </div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default SendMoney