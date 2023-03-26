import BalanceCard from '@/components/dashboard/BalanceCard'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import GetStartedCard from '@/components/dashboard/GetStartedCard'
import MobileBalance from '@/components/dashboard/MobileBalance'
import SimpleNav from '@/components/dashboard/SimpleNav'
import TransactionsTable from '@/components/dashboard/TransactionsTable'
import Head  from 'next/head'
import React from 'react'

const DashboardPage = () => {
  return (
    <>
     <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <DashboardLayout>
      <div className='px-9 flex flex-col space-y-8'>
        {/* Heading */}
        <SimpleNav title={"home"} />
        {/* Welcome message */}
        <MobileBalance />
        <div className='hidden md:flex flex-col space-y-4 pt-6'>
          <h3 className='normal-text text-2xl font-bold'>Welcome John Okafor</h3>
          <p className='gray-text'>Looking forward to serving you better</p>
        </div>


        <div className='w-full hidden md:inline-block '>
          <h4 className='normal-text text-[20px]'>Account Balance</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 py-4 w-full justify-between'>
          <BalanceCard type={"naira"} />
          <BalanceCard type={"usd"} />
          <BalanceCard type={"usd"} />
          </div>
        </div>

        <div className='w-full hidden md:inline-block'>
          <h4 className='normal-text font-semibold text-[20px]'>Get Started</h4>
          <GetStartedCard />
        </div>

        <div className='w-full  md:hidden inline-block'>
          {/* <h4 className='normal-text py-3 font-semibold text-[20px]'>Get Started</h4> */}
          <GetStartedCard mobile />
        </div>
        <div className='w-full '>
          <div className='flex justify-between'>
          <h4 className='normal-text font-semibold text-[20px]'>Activities</h4>
          <button className='md:hidden flex text-brand-blue
          '>See all</button>
          </div>
         <TransactionsTable />
        </div>
      </div>


    </DashboardLayout>
    
    </>
  )
}

export default DashboardPage