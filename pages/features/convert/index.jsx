import FootBanner from '@/components/landing-page-components/FootBanner'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Hero from "../../../public/images/features/convert-hero.png"
import HeroTwo from "../../../public/images/features/convert-hero-2.png"
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
const ConvertCurrency = () => {
  return (

    <>
     <Head>
        <title>Paidley Features</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <Layout>
 <div className='w-full bg-[#E8F7FD] pt-16 pb-8' >
        <motion.div 
        variants={fadeIn("down")}
        initial='hidden'
        whileInView={'show'} 
        className='m-auto flex items-center  space-y-5 flex-col-reverse lg:flex-row justify-center w-[80%]'>
        <div className="hero__text w-full  lg:w-1/2 flex flex-col space-y-6">
            <h3 className='text-brand-blue tracking-normal lg:max-w-lg leading-20  font-semibold text-3xl md:text-5xl'>Convert Your Money between Currencies Speedily</h3>

            <p className='text-[#283341] tracking-wider lg:max-w-lg leading-16 '>
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
        
        </motion.div>    
    </div>

    <motion.div 
    variants={fadeIn("down")}
    initial='hidden'
    whileInView={'show'} 
    className='w-full  pt-16 pb-8' >
        <div className='m-auto flex space-y-5 flex-col items-center lg:flex-row justify-between w-[80%]'>
        <div className="hero__text w-full lg:w-1/2 flex flex-col space-y-6">
            <h3 className='normal-text leading-20 max-w-lg font-semibold md:text-[60px] text-[24px]'>Converting your currency all made easy</h3>
            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>Convert your funds in seconds</h3>
              <p className='gray-text leading-16 max-w-lg'>
              You get a mastercard that is accepted on every digital store. so you no longer have to worry abut your spotify, netflix and other streaming subsciptions. Shop on amazin, ASOS, Zara, and other shopping sites. Pay fight tickets and more online.
            </p>
            </div>

            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>No hidden fees. Competitive market rates.</h3>
              <p className='gray-text leading-16 max-w-lg'>
              Get instant and real time notifications whenever there is an activity on your card. Temporarily freeze and unfreeze your card directly from your grey app. You can also add an extra layer of security on your account with two-factor authentication.
            </p>
            </div>

            <div className='horizontal space-y-3'>
              <h3 className='normal-text font-semibold text-xl'>Seamless funding and withdrawal</h3>
              <p className='gray-text leading-16 max-w-lg'>
              Receive payments in USD, EUR and Naira and convert them instantly. Our platform is secure and simple, just the way you want.
            </p>
            </div>
    
        </div>

        <div className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-center lg:justify-center'>
            <Image
                width={0}
                height={0}
                src={HeroTwo}
                alt=""
            />
        </div>
        
        </div>    
    </motion.div>
    <FootBanner />
    </Layout>
    </>
  )
}

export default ConvertCurrency