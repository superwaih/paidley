import AccountBalanceCard from '@/components/dashboard/AccountBalanceCard'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const balance = () => {
    
  return (
   <DashboardLayout>
    <SimpleNav title={"Accounts"} />
    <AccountBalanceCard />
    </DashboardLayout>
  )
}

export default balance