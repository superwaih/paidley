import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav 
      title={"Settings"}
      />
      <div className='px-5 md:px-8 '>
        
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage