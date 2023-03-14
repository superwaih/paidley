import React from 'react'
import Hero from "../../public/images/hero.png"
import Image from 'next/image'
import { ArrowIcon } from '@/public/svgs/Arrow-Right'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const container = {
  hidden: {},
  show: {
    transition :{
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}
const HeroBanner = () =>{
  return (
    <motion.div 
    initial='hidden'
    whileInView={'show'}
     variants={container} className='w-full bg-[#E8F7FD] pt-16 pb-8' >
        <div className='m-auto flex space-y-5 flex-col lg:flex-row justify-between w-[80%]'>
        <div className="hero__text w-full lg:w-1/2 flex flex-col space-y-6">
            <motion.h3 variants={fadeIn("down")} className='text-brand-blue leading-16 max-w-2xl font-semibold text-3xl md:text-4xl'>Expand your horizons, Invest, spend and exchange currencies globally.</motion.h3>

            <motion.p variants={fadeIn("down")} className='text-[#283341] leading-16 max-w-2xl'>
            Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders.
            </motion.p>

            <motion.button variants={fadeIn("down")} className='bg-brand-color flex items-center gap-4 text-white p-4 rounded-[12px] w-fit'>
                Get Started <ArrowIcon /> </motion.button>
        </div>

        <motion.div variants={fadeIn("down")} 
       
        
        className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end'>
            <Image
                width={0}
                height={0}
                src={Hero}
                alt=""
            />
        </motion.div>
        
        </div>    
    </motion.div>
  )
}

export default HeroBanner