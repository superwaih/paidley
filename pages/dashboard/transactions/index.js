import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import TransactionsTable from '@/components/dashboard/TransactionsTable'
import React from 'react'

const TransactionsPage = () => {
  return (
    <DashboardLayout>
      <SimpleNav title={"Transactions"} />
       
        <div className='px-6 flex md:flex-row flex-col gap-4 py-8'>
          <div className='flex gap-3 items-center'>
            <h3>Sort by: </h3>
            <select className='border-[#9399A0] bg-white border p-3 rounded-md'>
              <option value="">All Transactions</option>
              <option value="">Successful</option>

            </select>
          </div>
          <div className='flex gap-3 items-center'>
            <h3>Filter by: </h3>
            <select className='border-[#9399A0] border p-3 rounded-md bg-white'>
              <option value="">All Transactions</option>
              <option value="">Successful</option>

            </select>
          </div>
        </div>
        <div className='px-6'>
        <TransactionsTable />
        </div>
    </DashboardLayout>
  )
}

export default TransactionsPage