import DashboardLayout from '@/components/dashboard/DashboardLayout'
import EmptyState from '@/components/dashboard/EmptyState'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { UserIcon } from '@/public/svgs/user-icon'
import { useRouter } from 'next/router'
import React from 'react'
import { BiPlus } from 'react-icons/bi'

const BeneficiaryPage = () => {
  const router = useRouter()
  return (
    <DashboardLayout>
      <SimpleNav title={"beneficiary"} />
        <div className=' px-5 md:px-8 justify-center items-center  w-full '>
         <div className='flex items-center justify-center flex-col
        h-[60vh]
         '>
         <EmptyState
          text={"No beneficiary added yet"}
          Icon={UserIcon}
          />

          <button onClick={() => router.push("/dashboard/beneficiary/add")} className='flex gap-2 items-center hover:border duration-300 p-3 '> <span className='text-[#074DA2]'>Add beneficiary</span> <BiPlus className='text-[#074DA2] text-2xl' /> </button>
         </div>
        </div>

    </DashboardLayout>
  )
}

export default BeneficiaryPage