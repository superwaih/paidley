import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { LogoShort } from '@/public/svgs/logo-short'
import { NairaIcon } from '@/public/svgs/naira-icon'
import { SingleUser } from '@/public/svgs/single-user'
import { UsdIcon } from '@/public/svgs/usd-icon'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

const links = [
  {
    id:1,
    title: "Europian Euros",
    account: "euro",
    content: "Send funds instantly to your friends or colleagues using their paidley tag",
    icon: LogoShort,

  },
  {
    id:2,
    title: "American Dollar",
    account: "usd",
    content: "Choose from one of your safe beneficiaries to make a withdrawal",
    icon: UsdIcon,

  },
  {
    id:3,
    title: "Nigerian Naira",
    account: "naira",
    content: "Enter details of an account you haven’t previously saved to make a tranfer",
    icon: NairaIcon,

  },
]
const AccountsPage = () => {
  const [transferType, setTransferType] = useState("")
  const router = useRouter()
  const handleChooseAccount = (query, title) =>{
    setTransferType(title)
    router.push({
      pathname: "/dashboard/accounts/balance",
     
    })
  }
  return (
    <DashboardLayout>
      <SimpleNav
      title={"accounts"}
      />
     <div className='flex px-8 justify-center items-center  w-full'>
          <div className='flex mt-[60px] md:mt-[150px]  rounded-md border  hover:[#F3F7FA] bg-white px-9 py-4 flex-col space-y-6 rouned-md shadow-md max-w-lg'>
            <h3 className='gray-text  text-lg'>Choose the account below to view details.</h3>


            {links.map((link)=>{
              const{id, title, content, icon:Icon, account} = link
              return(
                <div 
                onClick={() =>handleChooseAccount(account, title) }
                className={transferType === title ? 'flex flex-col  px-4 border-[#306BB1] border rounded-[12px] duration-300 shadow-md py-4 cursor-pointer items-center bg-[#F3F7FA] gap-4' : 'flex flex-col px-4 duration-300 border rounded-[12px]  shadow-md py-4 cursor-pointer items-center gap-4'} 
                
                
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
            {/* <div className='flex flex-col gap-4'>
                    <button onClick={() => router.push("/dashboard/transfer/send-money")} className='btn-full rounded-[12px] duration-300'>Proceed</button>
                    <button 
                    onClick={() => router.back()}
                    className='text-[#306BB1] flex w-full justify-center font-semibold items-center text-center'>Cancel and go back</button>
              </div> */}
          </div>
        </div>

    </DashboardLayout>
  )
}

export default AccountsPage