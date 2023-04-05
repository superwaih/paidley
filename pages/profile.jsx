import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'
import Image from 'next/image'
import ProfileImg from "../public/images/profile-img.png"
const Profile = () => {
  return (
    <DashboardLayout>
        <SimpleNav 
        title={"Profile"}
        />
        <div className='px-5 md:px-8 '>
          <button className=' rounded-[12px] border text-brand-color hover:bg-brand-color hover:text-white duration-300 border-brand-color px-4 py-2'>Back</button>
          </div>
        <div className='px-5 md:px-8 my-5 mx-8 profile-shadow'>
            <div className='flex items-center justify-center py-2'>
                <Image
                    width={0}
                    height={0}
                    src={ProfileImg}
                    alt=""
                />
            </div>

            <div>
                
            <div>
                <h3 className='text-[#283341] font-semibold'>full name</h3>
                <p className='text-[#9399A0]'>Legal Full name</p>
                <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                First Name
              </label>
              <input type="text" className="input-gray" />
            </div>

            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                last Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                last Name
              </label>
              <input type="text" className="input-gray" />
            </div>

            <div>

            </div>
            <h3>Paidley Tag</h3>
            <p>Send and receive money from anyone on paidley.</p>

            </div>
            <div>
                <h3 className='text-[#283341] font-semibold'>full name</h3>
                <p className='text-[#9399A0]'>Legal Full name</p>
                <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                First Name
              </label>
              <input type="text" className="input-gray" />
            </div>

            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                last Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                last Name
              </label>
              <input type="text" className="input-gray" />
            </div>

            <div>

            </div>
            <h3>Paidley Tag</h3>
            <p>Send and receive money from anyone on paidley.</p>

            </div>
            </div>


        </div>

    </DashboardLayout>
  )
}

export default Profile