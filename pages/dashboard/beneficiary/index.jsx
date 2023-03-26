import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import React from 'react'

const BeneficiaryPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav title={"beneficiary"} />
        <div>BeneficiaryPage</div>

    </DashboardLayout>
  )
}

export default BeneficiaryPage