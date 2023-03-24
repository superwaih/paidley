import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { LogoShort } from '@/public/svgs/logo-short'
import { SingleUser } from '@/public/svgs/single-user'
import { UserIcon } from '@/public/svgs/user-icon'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

const links = [
  {
    id:1,
    title: "Send using Paidley",
    content: "Send funds instantly to your friends or colleagues using their paidley tag",
    icon: LogoShort,

  },
  {
    id:2,
    title: "Send to a beneficiary",
    content: "Choose from one of your safe beneficiaries to make a withdrawal",
    icon: SingleUser,

  },
  {
    id:3,
    title: "Send to a new recipient",
    content: "Enter details of an account you haven’t previously saved to make a tranfer",
    icon: BsPlus,

  },
]
const TransferPage = () => {
  const router = useRouter()
  const [transferType, setTransferType] = useState("")
  return (
    <DashboardLayout >
        <SimpleNav title={"transfer"} />
        <div className='flex px-8 justify-center items-center  w-full'>
          <div className='flex mt-[150px]  rounded-md border  hover:[#F3F7FA] bg-white px-6 py-4 flex-col space-y-6 rouned-md shadow-md max-w-lg'>
            <h3 className='font-bold  text-xl'>Send Money</h3>
            <p className='gray-text '>Select Transfer Method</p>


            {links.map((link)=>{
              const{id, title, content, icon:Icon} = link
              return(
                <div 
                onClick={() => setTransferType(title)}
                className={transferType === title ? 'flex  px-4 border-[#306BB1] border rounded-[12px] duration-300 shadow-md py-4 cursor-pointer items-center bg-[#F3F7FA] gap-4' : 'flex  px-4 duration-300 border rounded-[12px]  shadow-md py-4 cursor-pointer items-center gap-4'} 
                
                
                key={id}
                >
                  <div className='bg-[#EAF0F6] rounded-full p-4'>
                    <Icon className='text-3xl text-brand-color' />
                  </div>
                  <div>
                    <h3 className={transferType === title ? 'font-bold text-[#306BB1]' : 'font-bold'}>{title}</h3>
                    <p className='gray-text'>{content}</p>
                  </div>
                  
                </div>
              )
            })}
            <div className='flex flex-col gap-4'>
                    <button onClick={() => router.push("/dashboard/transfer/send-money")} className='btn-full rounded-[12px] duration-300'>Proceed</button>
                    <button 
                    onClick={() => router.back()}
                    className='text-[#306BB1] flex w-full justify-center font-semibold items-center text-center'>Cancel and go back</button>
              </div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default TransferPage