import DashboardLayout from '@/components/dashboard/DashboardLayout'
import EmptyState from '@/components/dashboard/EmptyState'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'
import {AiOutlineBell} from "react-icons/ai"

const NotificationsPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav 
      title={"Notifications"}
      />
        <div  className='px-5 md:px-8'>
          <div className='h-[50vh] flex justify-center items-center'>
            <EmptyState 
            text={"You have no notifications yet"}
            Icon={AiOutlineBell}
            />
          </div>
        </div>

    </DashboardLayout>
  )
}

export default NotificationsPage