import Layout from '@/components/Layout'
import React from 'react'
import Hero from "../../../public/images/features/transfer-hero.png"
import HeroTwo from "../../../public/images/features/transfer-hero-2.png"

import Image from 'next/image'
import FootBanner from '@/components/landing-page-components/FootBanner'
const TransferScreen = () => {
  return (
    <Layout>

<div className='w-full bg-[#E8F7FD] pt-16 pb-8' >
<div className='m-auto flex items-center  space-y-5 flex-col-reverse lg:flex-row justify-center w-[80%]'>
        <div className="hero__text w-full  lg:w-1/2 flex flex-col space-y-6">
            <h3 className='text-brand-blue tracking-normal lg:max-w-2xl leading-20  font-semibold text-3xl md:text-5xl'>No better way to spend globally</h3>

            <p className='text-[#283341] tracking-wider lg:max-w-2xl leading-16 '>
            Spend freely with a debit card that makes your intentional payments easier. Get a paidley virtual card to shop, or payfor subscriptions and gifts online anywhere in the world.
            </p>

    
        </div>

        <div className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-center lg:justify-center'>
            <Image
                width={0}
                height={0}
                src={Hero}
                alt=""
            />
        </div>
        
        </div>   
    </div>

    <div className='w-full  pt-16 pb-8' >
        <div className='m-auto flex space-y-5 flex-col items-center lg:flex-row justify-between w-[80%]'>
        <div className="hero__text w-full lg:w-1/2 flex flex-col space-y-6">
            <h3 className='normal-text leading-20 max-w-lg font-semibold text-xl md:text-3xl'>Use card anywhere in the world</h3>
            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>Fast, Secure & Reliable</h3>
              <p className='gray-text leading-16 max-w-lg'>
              Enjoy a seamless experience by sending money across borders or to home dorm accounts through paidley            </p>
            </div>

            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>Transparent and Easy to Track</h3>
              <p className='gray-text leading-16 max-w-lg'>
              Follow your money across the world from your devices. No hidden fess. No complicated processes            </p>
            </div>
            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>The best way to send money to family & friends</h3>
              <p className='gray-text leading-16 max-w-lg'>
              With Paidley foreign accounts, your loved ones can receive money from abroad easily and securely </p>
            </div>
    
        </div>

        <div className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end'>
            <Image
                width={0}
                height={0}
                src={HeroTwo}
                alt=""
            />
        </div>
        
        </div>    
    </div>
    <FootBanner />
    </Layout>
  )
}

export default TransferScreen