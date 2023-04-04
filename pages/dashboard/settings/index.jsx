import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'
import { AiFillBell, AiFillSetting } from 'react-icons/ai'

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav 
      title={"Settings"}
      />
      <div className='px-5 md:px-8 flex flex-col gap-4'>
        <div className='border py-4 px-2 shadow-sm hover:border-brand-color hover:border rounded-md  cursor-pointer'>
          <div className='flex gap-2 items-center'>
            <AiFillBell className='text-2xl' />
            <p>Notification Settings</p>
          </div>
        </div>

        <div className='border py-4 px-2 hover:border-brand-color shadow-sm hover:border rounded-md  cursor-pointer'>
          <div className='flex gap-2 items-center'>
            <AiFillSetting className='text-2xl' />
            <p>Settings</p>
          </div>
        </div>

        <div className='border py-4 px-2 shadow-sm hover:border-brand-color hover:border rounded-md  cursor-pointer'>
          <div className='flex gap-2 items-center'>
            <AiFillBell className='text-2xl' />
            <p>Notification Settings</p>
          </div>
        </div>

        <div className='border py-4 px-2 hover:border-brand-color shadow-sm hover:border rounded-md  cursor-pointer'>
          <div className='flex gap-2 items-center'>
            <AiFillSetting className='text-2xl' />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage