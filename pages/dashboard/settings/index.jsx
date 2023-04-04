import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav 
      title={"Settings"}
      />
    </DashboardLayout>
  )
}

export default SettingsPage